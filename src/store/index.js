import Vue from 'vue'
import Vuex from 'vuex'
import * as user from './modules/user.js'
import * as application from './modules/application.js'
import * as error from './modules/error.js'

Vue.use(Vuex)

export default new Vuex.Store({
  modules: {
    user,
    application,
    error
  }
})
