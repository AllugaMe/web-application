<template lang="pug">
  header.main-header
    v-toolbar
      router-link.logo-image(to='/')
        img.image(
          src='~@images/logo.png',
          :src='app.logo',
          :alt='app.name',
          :title='app.name'
        )
      v-toolbar-title {{ app.name }}
      v-toolbar-items
        v-toolbar-item(href='/search', router) Pesquisar
        user-menu
</template>

<script>
  import { mapGetters } from 'vuex'
  import * as types from '../../store/types.js'
  import UserMenu from '../user/Menu.vue'

  export default {
    computed: mapGetters({ app: types.APP_DATA }),
    components: { UserMenu }
  }
</script>

<style lang="stylus">
  .logo-image
    display: inline-block
    line-height: 1

    & > .image
      display: inline-block
      width: 56px
      height: @width
</style>
