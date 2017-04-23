<template lang="pug">
  router-view(v-if="user !== undefined")
</template>

<script>
  import { mapGetters } from 'vuex'
  import application from './lib/application.js'

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

<style lang="stylus">
  $theme := {
    primary: red
    accent: yellow
    secondary: blue
    info: lightblue
    warning: orange
    error: coral
    success: green
  }

  @import '../node_modules/vuetify/src/stylus/main'

  @font-face
    font-family: 'Material Icons'
    src: url('./asset/font/MaterialIcons-Regular.woff2') format('woff2'),
         url('./asset/font/MaterialIcons-Regular.woff')  format('woff')

  html                          // O Vuetify usa scroll no eixo Y independente
    overflow-y: auto !important // da sua necessidade e essa regra resolve isso.
</style>
