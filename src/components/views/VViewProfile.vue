<template lang="pug">
  v-view
    u-details(:user='user')
</template>

<script>
  import { mapGetters } from 'vuex'
  import { getUserById } from '../../lib/user.js'
  import VView from '../VView.vue'
  import UDetails from '../user/UDetails.vue'

  export default {
    components: { VView, UDetails },
    data() {
      return {
        user: {
          id: null,
          name: 'Unknown',
          email: 'Unknown',
          picture: ''
        }
      }
    },
    methods: {
      async fetchUser() {
        try {
          let user = await getUserById(this.$route.params.id)
          this.user = { ...this.user, ...user }
        } catch (err) {
          this.$store.dispatch('showError', err, { module: 'error' })
        }
      }
    },
    created() {
      this.fetchUser()
    }
  }
</script>
