import Vue from 'vue'
import Vuex from 'vuex'
import * as types from './types.js'
import * as app from './modules/app.js'
import * as user from './modules/user.js'
import * as error from './modules/error.js'
import * as address from './modules/address.js'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    subscribing: false
  },
  getters: {
    [types.SUBSCRIBING](state) {
      return state.subscribing
    }
  },
  mutations: {
    [types.SUBSCRIBING_CHANGE](state, payload) {
      state.subscribing = payload
    }
  },
  actions: {
    [types.SUBSCRIBING_TOGGLE]({ commit, getters }) {
      commit(types.SUBSCRIBING_CHANGE, !getters[types.SUBSCRIBING])
    }
  },
  modules: {
    app,
    user,
    error,
    address
  }
})
