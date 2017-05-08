<template lang="pug">
  view-container
    user-details(:user='user')
</template>

<script>
  import * as types from '../store/types.js'
  import ViewContainer from '../components/view/Container.vue'
  import UserDetails from '../components/user/Details.vue'

  export default {
    components: { ViewContainer, UserDetails },
    data() {
      return {
        user: null
      }
    },
    methods: {
      async fetchUser() {
        const id = this.$route.params.id
        this.user = await this.$store.dispatch(types.USER_SELECT, id)
      }
    },
    created() {
      this.fetchUser()
    }
  }
</script>
