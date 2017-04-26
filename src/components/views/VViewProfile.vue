<template lang="pug">
  v-view
    h1 {{ user.name }}
    u-picture(:size='100', :user='user')
</template>

<script>
  import { mapGetters } from 'vuex'
  import { getUserById } from '../../lib/user.js'
  import VView from '../VView.vue'
  import UPicture from '../user/UPicture.vue'

  export default {
    components: { VView, UPicture },
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
