export default {
  isSubscribing: state => state.isSubscribing,
  user: state => state.user,
  profile: state => !!state.user ? 'user' : 'guest'
}
