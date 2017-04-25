<template lang="pug">
  v-btn(v-if='profile === \'guest\'') Entrar
  v-menu(v-else, offset-y)
    u-picture(:name='user.name', :picture='user.picture', slot='activator')
    v-list
      v-list-item
        v-list-tile
          v-list-tile-title Meu perfil
      v-list-item(@click.native='signOut')
        v-list-tile
          v-list-tile-title Sair
</template>

<script>
  import { mapGetters } from 'vuex'
  import UPicture from './UPicture.vue'

  export default {
    components: { UPicture },
    computed: mapGetters(['user', 'profile']),
    methods: {
      async signOut() {
        await auth.signOut()
        this.$router.push('/home')
      }
    }
  }
</script>

<style lang="stylus">
  .avatar
    display: block
    width: 100px
    height: 100px
</style>
