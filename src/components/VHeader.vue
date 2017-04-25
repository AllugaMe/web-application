<template lang="pug">
  header.main-header
    v-toolbar
      router-link.logo(to='/')
        img.image(src='../asset/image/logo.png', :alt='application.name', :title='application.name')
      v-toolbar-title Nome da Aplicação
      v-toolbar-items
        v-toolbar-item
          u-menu
</template>

<script>
  import { mapGetters } from 'vuex'
  import application from '../lib/application.js'
  import UMenu from './user/UMenu.vue'

  const auth = application.auth()

  export default {
    computed: mapGetters(['application']),
    components: { UMenu },
    methods: {
      async signOut() {
        await auth.signOut()
        this.$router.push('/home')
      }
    }
  }
</script>

<style lang="stylus">
  .main-header .logo
    display: inline-block
    line-height: 1

    & > .image
      display: inline-block
      width: 56px
      height: @width
</style>
