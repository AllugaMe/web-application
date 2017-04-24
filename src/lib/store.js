import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

const store = new Vuex.Store({
  state: {
    isSubscribing: false,
    user: {
      uid: null,
      name: 'Unknown',
      email: 'Unknown',
      picture: '/img/icon-person.svg'
    }
  },
  getters: {
    isSubscribing: state => state.isSubscribing,
    user: state => state.user,
    profile: state => !!state.user ? 'user' : 'guest'
  },
  mutations: {
    'update-isSubscribing'(store, isSubscribing) {
      store.isSubscribing = isSubscribing
    },
    'update-user'(store, user) {
      store.user = user
    },
  }
})

export default store
