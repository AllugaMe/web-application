<template lang="pug">
  router-view(v-if='isLoaded')
</template>

<script>
  import { mapGetters, mapMutations } from 'vuex'
  import application from './lib/application.js'
  import database from './lib/database.js'

  const auth = application.auth()

  export default {
    data() {
      return {
        isLoaded: false
      }
    },
    computed: mapGetters(['user', 'profile', 'isSubscribing']),
    methods: {
      ...mapMutations(['updateUser']),
      async authenticate(authetication) {
        if (this.isSubscribing)
          return

        if (authetication) {
          try {
            const reference = database.ref('users').child(authetication.uid)
            const data = await reference.once('value')

            if (data.exists())
              this.updateUser(data.val())
          } catch (err) {
            console.error(err)
          }
        }

        this.isLoaded = true

        // TODO: Levar a permissão para a store.
        let permission = this.$route.meta.profiles.includes(this.profile)

        if (!permission) {                         // TODO: Informar erro de
          let isGuest = (this.profile === 'guest') // permissão e redirecionar.
          this.$router.replace(isGuest ? '/login' : '/dashboard')
        }
      }
    },
    created() {
      auth.onAuthStateChanged(this.authenticate)
    }
  }
</script>

<style lang="stylus">
  $yellow = #f9dc5f
  $blue = #5f7cf9

  $theme := {
    primary: $blue
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
