<template>
  <header class="main-header">
    <v-toolbar>
      <router-link class="logo-image" to="/">
        <img src="~@images/logo.png" alt class="image" :src="app.logo" :alt="app.name" :title="app.name">
      </router-link>
      <v-toolbar-title>{{ app.name }}</v-toolbar-title>
      <v-toolbar-items>
        <v-toolbar-item href="/search" router>Pesquisar</v-toolbar-item>
        <user-menu></user-menu>
      </v-toolbar-items>
    </v-toolbar>
  </header>
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
