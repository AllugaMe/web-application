import Vue from 'vue'
import Vuetify from 'vuetify'
import Main from './App'
import store from './store'
import router from './router'

Vue.use(Vuetify)

new Vue({
  store,
  router,
  el: '#application',
  render: createElement => createElement(Main)
})
