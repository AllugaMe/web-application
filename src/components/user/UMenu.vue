<template lang="pug">
  v-btn(v-if='profile === \'guest\'', @click.native='signIn') Entrar
  v-menu.user-menu(v-else, offset-y)
    u-picture(:user='user', :size='36', slot='activator')
    v-list
      v-list-item
        v-list-tile(@click.native='profile')
          v-list-tile-title Meu perfil
      v-list-item
        v-list-tile(@click.native='signOut')
          v-list-tile-title Sair
</template>

<script>
  import { mapGetters, mapMutations } from 'vuex'
  import application from '../../lib/application.js'
  import UPicture from './UPicture.vue'

  const auth = application.auth()

  export default {
    components: { UPicture },
    computed: mapGetters(['user', 'profile']),
    methods: {
      ...mapMutations(['updateUser']),
      async signOut() {
        await auth.signOut()
        this.updateUser({   // TODO: Criar uma action que controle isso.
          id: null,
          name: 'Unknown',
          email: 'Unknown',
          picture: ''
        })
        this.$router.push('/home')
      },
      signIn() {
        this.$router.push('/login')
      },
      profile() {
        this.$router.push(`/profile/${this.user.id}`)
      }
    }
  }
</script>

<style lang="stylus">
  .user-menu
    margin-left: 12px
</style>
