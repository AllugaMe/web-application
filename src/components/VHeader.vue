<template lang="pug">
  header.main-header
    v-toolbar
      router-link.logo(to='/')
        img.image(src='../asset/image/logo.png', :src='app.logo', :alt='app.name', :title='app.name')
      v-toolbar-title {{ app.name }}
      v-toolbar-items
        v-toolbar-item(href='/search', router) Pesquisar
        u-menu
</template>

<script>
  import * as types from '../store/types.js'
  import { mapGetters } from 'vuex'
  import UMenu from './user/UMenu.vue'

  export default {
    computed: mapGetters({ app: types.APP_DATA }),
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
