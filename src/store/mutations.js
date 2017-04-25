import Vue from 'vue'

export default {
  'update-isSubscribing'(store, isSubscribing) {
    store.isSubscribing = isSubscribing
  },
  updateUser(store, user) {
    Vue.set(store, 'user', { ...store.user, ...user })
  }
}
