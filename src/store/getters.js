export default {
  application: state => state.application,
  author: state => state.application.author,
  isSubscribing: state => state.isSubscribing,
  user: state => state.user,
  profile: state => state.user.id === null ? 'guest' : 'user'
}
