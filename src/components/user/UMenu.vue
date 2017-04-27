<template lang="pug">
  v-btn(v-if='profile === \'guest\'', @click.native='signIn') Entrar
  v-menu.user-menu(v-else, offset-y)
    u-picture(:user='user', :size='36', slot='activator')
    v-list
      v-list-item
        v-list-tile(:href='`/profile/${user.id}`', router)
          v-list-tile-title Meu perfil
      v-list-item
        v-list-tile(@click.native='signOut')
          v-list-tile-title Sair
</template>

<script>
  import { mapGetters } from 'vuex'
  import application, { authentication } from '../../lib/application.js'
  import UPicture from './UPicture.vue'

  export default {
    components: { UPicture },
    computed: mapGetters({
      user: 'user/user',
      profile: 'user/profile'
    }),
    methods: {
      async signOut() {
        await this.$store.dispatch('user/signOut')
        this.$router.push('/home')
      },
      async signIn() {
        await this.$store.dispatch('user/signIn')
        this.$router.push('/dashboard')
      }
    }
  }
</script>

<style lang="stylus">
  .user-menu
    margin-left: 12px
</style>
