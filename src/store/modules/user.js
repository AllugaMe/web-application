import { signIn, signOut } from '../../lib/user.js'
import { UPDATE_USER, TOGGLE_SUBSCRIBE, SHOW_ERROR } from '../types.js'

const defaultUser = {
  id: null,
  name: 'Unknown',
  email: 'Unknown',
  picture: ''
}

export const namespaced = true

export const state = {
  isSubscribing: false,
  user: { ...defaultUser }
}

export const getters = {
  isSubscribing: ({ isSubscribing }) => isSubscribing,
  user: ({ user }) => user,
  isAuhenticated: ({ user: { id } }) => id !== null,
  profile: ({ user: { id } }) => id !== null ? 'user' : 'guest'
}

export const mutations = {
  [TOGGLE_SUBSCRIBE] (state) {
    state.isSubscribing = !state.isSubscribing
  },
  [UPDATE_USER] (state, payload) {
    state.user = { ...state.user, payload }
  }
}

export const actions = {
  toggleSubscring: ({ commit }) => commit(TOGGLE_SUBSCRIBE),
  updateUser: ({ commit }, payload) => commit(UPDATE_USER, payload),
  signIn: async ({ commit, dispath }) => {
    commit(TOGGLE_SUBSCRIBE)
    try {
      const payload = await signIn()
    } catch (err) {
      dispath('showError', err, { module: 'error' })
    }
    commit(UPDATE_USER, payload)
    commit(TOGGLE_SUBSCRIBE)
  },
  signOut: async ({ commit }, payload) => {
    try {
      await signOut();
    } catch (err) {
      dispath('showError', err, { module: 'error' })
    }
    commit(UPDATE_USER, defaultUser)
  }
}
