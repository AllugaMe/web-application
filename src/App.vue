<template>
  <router-view v-if="isLoaded"></router-view>
  <v-progress-circular class="green--text" v-else :width="3" indeterminate></v-progress-circular>
</template>

<script>
  import { mapGetters } from 'vuex'
  import * as types from './store/types.js'
  import { authentication } from './application.js'

  export default {
    data() {
      return {
        isLoaded: false
      }
    },
    computed: mapGetters({
      user: types.USER_DATA,
      auth: types.USER_AUTH,
      subscribing: types.SUBSCRIBING
    }),
    methods: {
      async authenticate(authetication) {
        if (this.subscribing)
          return

        if (authetication) {
          const id = authetication.uid
          const user = await this.$store.dispatch(types.USER_SELECT, id)

          if (user)
            this.$store.dispatch(types.USER_UPDATE, user)
        }

        this.isLoaded = true

        let meta = this.$route.meta

        const permission = (!meta || !meta.auth) || (meta.auth && this.auth)

        if (!permission)                // TODO: Informar erro de permissão
          this.$router.replace('/home') // antes de redirecionar para a /HOME.
      }
    },
    created() {
      authentication.onAuthStateChanged(this.authenticate)
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

  @import '~vuetify/src/stylus/main'

  @font-face
    font-family: 'Material Icons'
    src: url('~@fonts/MaterialIcons-Regular.woff2') format('woff2'),
         url('~@fonts/MaterialIcons-Regular.woff')  format('woff')

  html                          // O Vuetify usa scroll no eixo Y independente
    overflow-y: auto !important // da sua necessidade e essa regra resolve isso.
</style>
