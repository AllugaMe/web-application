import Vue from 'vue'

export default {
  'update-isSubscribing'(store, isSubscribing) {
    store.isSubscribing = isSubscribing
  },
  'update-user'(store, user) {
    Vue.set(store, 'user', { ...store.user, ...user })
  }
}
