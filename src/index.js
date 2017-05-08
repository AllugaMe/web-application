import './index.pug'
import Vue from 'vue'
import Vuetify from 'vuetify'
import Main from './components/Main.vue'
import store from './store/index.js'
import router from './router.js'

Vue.use(Vuetify)

new Vue({
  store,
  router,
  el: '#application',
  render: createElement => createElement(Main)
})
