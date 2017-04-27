import { signIn, signOut } from '../../lib/user.js'
import { UPDATE_USER, TOGGLE_SUBSCRIBE } from '../types.js'

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
    state.user = { ...state.user, ...payload }
  }
}

export const actions = {
  toggleSubscring: ({ commit }) => commit(TOGGLE_SUBSCRIBE),
  updateUser: ({ commit }, payload) => commit(UPDATE_USER, payload),
  signIn: async ({ commit, dispatch }) => {
    commit(TOGGLE_SUBSCRIBE)
    try {
      const payload = await signIn()
      commit(UPDATE_USER, payload)
    } catch (err) {
      dispatch('error/showError', err, { root: true })
    }
    commit(TOGGLE_SUBSCRIBE)
  },
  signOut: async ({ commit, dispatch }, payload) => {
    try {
      await signOut();
    } catch (err) {
      dispatch('error/showError', err, { root: true })
    }
    commit(UPDATE_USER, defaultUser)
  }
}
