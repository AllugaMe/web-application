<template lang="pug">
  header.main-header
    v-toolbar
      v-toolbar-side-icon
        router-link(to="/")
          img.image(src="../asset/image/logo.png", alt="Nome da Aplicação", title="Nome da Aplicação.")
      v-toolbar-title Nome da Aplicação
      v-toolbar-items
        v-toolbar-item
          u-menu
</template>

<script>
  import application from '../lib/application.js'
  import UMenu from './user/UMenu.vue'

  const auth = application.auth()

  export default {
    components: { UMenu },
    methods: {
      async signOut() {
        await auth.signOut()
        this.$router.push('/home')
      }
    }
  }
</script>
