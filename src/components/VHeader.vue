<template lang="pug">
  v-toolbar
    v-toolbar-side-icon
      router-link(to="/")
        img.image(src="../asset/image/logo.png", alt="Nome da Aplicação", title="Nome da Aplicação.")
    v-toolbar-title Nome da Aplicação
    v-toolbar-items
      v-toolbar-item
        v-btn(@click.native="signOut") Sign Out
          //- v-icon(right) close
</template>

<script>
  import application from '../lib/application.js'

  const auth = application.auth()

  export default {
    methods: {
      async signOut() {
        await auth.signOut()
        this.$router.push('/home')
      }
    }
  }
</script>
