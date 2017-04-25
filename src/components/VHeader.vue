<template lang="pug">
  header.main-header
    v-toolbar
      router-link.logo(to='/')
        img.image(src='../asset/image/logo.png', :src='application.logo', :alt='application.name', :title='application.name')
      v-toolbar-title {{ application.name }}
      v-toolbar-items
        v-toolbar-item(href='/search', router) Pesquisar
        u-menu
</template>

<script>
  import { mapGetters } from 'vuex'
  import UMenu from './user/UMenu.vue'

  export default {
    computed: mapGetters(['application']),
    components: { UMenu }
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
