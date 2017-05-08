import * as types from '../types.js'

export const state = {
  error: null
}

export const getters = {
  [types.ERROR_DATA](state) {
    return state.error
  },
  [types.ERROR_VISIBLE](state) {
    return state.error !== null
  }
}

export const mutations = {
  [types.ERROR_CHANGE](state, payload) {
    if (payload instanceof Error)
      state.error = payload.message
    else if (!payload)
      state.error = null
    else
      state.error = payload
  }
}

export const actions = {
  [types.ERROR_HIDE]({ commit }) {
    commit(types.ERROR_CHANGE)
  },
  [types.ERROR_SHOW]({ commit }, payload) {
    commit(types.ERROR_CHANGE, payload)
  }
}
