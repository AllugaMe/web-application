import Vue from 'vue'

export default {
  toggleSubscribing: store => store.isSubscribing = !store.isSubscribing,
  updateUser: (store, user) => store.user = { ...store.user, ...user }
}
