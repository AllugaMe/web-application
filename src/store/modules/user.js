import * as types from '../types.js'
import deepEqual from 'deep-equal'
import { auth } from 'firebase'
import { database, authentication } from '../../application.js'

const getReference = () => {
  database.goOnline()
  return database.ref('users')
}

export const state = {
  user: null
}

export const getters = {
  [types.USER_DATA](state) {
    return state.user
  },
  [types.USER_AUTH](state) {
    return state.user !== null
  }
}

export const mutations = {
  [types.USER_UPDATE](state, payload) {
    if (payload)
      state.user = { ...(state.user ? state.user : {}), ...payload }
    else
      state.user = null
  }
}

export const actions = {
  [types.USER_UPDATE]({ commit }, payload) {
    commit(types.USER_UPDATE, payload)
  },
  async [types.USER_SELECT]({ dispatch }, payload) {
    const reference = getReference().child(payload)

    try {
      const snapshot = await reference.once('value')

      if (!snapshot.exists())
        throw new Error('User not found.')
      return snapshot.val()
    } catch (error) {
      dispatch(types.ERROR_SHOW, error)
    }
  },
  async [types.USER_SIGNIN]({ dispatch }) {
    const provider = new auth.FacebookAuthProvider()

    provider.addScope('public_profile')
    provider.addScope('user_birthday')

    try {
      const result = await authentication.signInWithPopup(provider)
      const reference = getReference().child(result.user.uid)
      const snapshot = await reference.once('value')
    } catch (err) {
      return dispatch(types.ERROR_SHOW, err)
    }

    let user = {
      id: result.user.uid,
      name: result.user.displayName,
      email: result.user.email,
      picture: result.user.photoURL
    }

    if (!snapshot.exists())
      reference.set(user)
    else if (!deepEqual(user, snapshot.val())) {
      user = { ...snapshot.val(), ...user }
      reference.update(user)
    }

    dispatch(types.USER_UPDATE, user)
  },
  async [types.USER_SIGNOUT]({ dispatch }) {
    try {
      await authentication.signOut()
      dispatch(types.USER_UPDATE)
    } catch (err) {
      return dispatch(types.ERROR_SHOW, err)
    }
  },
}
