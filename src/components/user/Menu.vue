<template>
  <v-menu class="user-menu" v-if="auth" offset-y>
    <user-picture :user="user" :size="36" slot="activator"></user-picture>
    <v-list>
      <v-list-item>
        <v-list-tile :href="`/profile/.id`" router>
          <v-list-tile-title>Meu perfil</v-list-tile-title>
        </v-list-tile>
      </v-list-item>
      <v-list-item>
        <v-list-tile @click.native="signOut">
          <v-list-tile-title>Sair</v-list-tile-title>
        </v-list-tile>
      </v-list-item>
    </v-list>
  </v-menu>
  <fragment-facebook-btn v-else @click.native="signIn">Inscrever / Entrar</fragment-facebook-btn>
</template>

<script>
  import { mapGetters } from 'vuex'
  import * as types from '../../store/types.js'
  import application, { authentication } from '../../application.js'
  import UserPicture from './Picture.vue'
  import FragmentFacebookBtn from '../fragment/FacebookBtn.vue'

  export default {
    components: { UserPicture, FragmentFacebookBtn },
    computed: mapGetters({
      user: types.USER_DATA,
      auth: types.USER_AUTH
    }),
    methods: {
      async signIn() {
        await this.$store.dispatch(types.USER_SIGNIN)
        this.$router.push('/dashboard')
      },
      async signOut() {
        await this.$store.dispatch(types.USER_SIGNOUT)
        this.$router.push('/home')
      }
    }
  }
</script>

<style lang="stylus">
  .user-menu
    margin-left: 12px
</style>
