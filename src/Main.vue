<template lang="pug">
  router-view(v-if="user !== undefined")
</template>

<script>
  import { mapGetters, mapMutations } from 'vuex'
  import application from './lib/application.js'
  import database from './lib/database.js'

  const auth = application.auth()

  export default {
    computed: mapGetters(['user', 'profile', 'isSubscribing']),
    methods: {
      ...mapMutations(['updateUser']),
      async authenticate(authetication) {
        try {
          if (this.isSubscribing)
            return

          if (authetication) {
            const dao = database.ref('users').child(authetication.uid)
            var user = await dao.once('value') // Estou usando um 'var' porque
          }                                    // uso '||' no update.

          this.updateUser(user || {})

          // TODO: Levar a permissão para a store.
          let permission = this.$route.meta.profiles.includes(this.profile)

          if (!permission) {
            let isGuest = (this.profile === 'guest')
            this.$router.push(isGuest ? '/login' : '/dashboard')
          }
        } catch (err) {
          console.error(err)
        }
      }
    },
    created() {
      auth.onAuthStateChanged(this.authenticate)
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
