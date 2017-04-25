<template lang="pug">
  v-view
    h1 {{ user.name }}
    u-picture(:size='100', :user='user')
</template>

<script>
  import { mapGetters } from 'vuex'
  import database from '../../lib/database.js'
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
          const id = this.$route.params.id
          const reference = database.ref('users').child(id)
          const data = await reference.once('value')

          if (data.exists())
            this.user = { ...this.user, ...data.val() }
        } catch (err) {
          console.error(err)
        }
      }
    },
    created() {
      this.fetchUser()
    }
  }
</script>
