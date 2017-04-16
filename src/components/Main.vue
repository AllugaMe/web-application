<template lang="pug">
  router-view(v-if="user !== undefined")
</template>

<script>
  import { mapGetters } from 'vuex'
  import application from '../lib/application.js'

  const auth = application.auth()

  export default {
    computed: {
      ...mapGetters(['user', 'profile'])
    },
    created() {
      auth.onAuthStateChanged(async user => {
        await this.$store.commit('update-user', user || null)

        let permission = (this.$route.meta.profiles.indexOf(this.profile) > -1)

        if (!permission) {
          let isGuest = (this.profile === 'guest')
          this.$router.replace(isGuest ? '/login' : '/dashboard')
        }
      })
    }
  }
</script>

<style lang="stylus" src="../style/base.styl"></style>
