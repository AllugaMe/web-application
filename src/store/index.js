import Vue from 'vue'
import Vuex from 'vuex'
import * as app from './modules/app.js'
import * as user from './modules/user.js'
import * as error from './modules/error.js'

Vue.use(Vuex)

export default new Vuex.Store({
  modules: {
    app,
    user,
    error
  }
})
