<template lang="pug">
  v-card
    form.form-login()
      v-btn(type='button', :disabled='isSubscribing', @click.native='signIn') Entrar com o Facebook
        v-icon facebook
</template>

<script>
  import { mapGetters, mapMutations } from 'vuex'
  import firebase from 'firebase'
  import application from '../lib/application.js'
  import database from '../lib/database.js'

  const provider = new firebase.auth.FacebookAuthProvider()
  const auth = application.auth()

  provider.addScope('public_profile')
  provider.addScope('user_birthday')

  export default {
    computed: mapGetters(['isSubscribing']),
    methods: {
      ...mapMutations(['updateUser', 'toggleSubscribing']),
      async signIn() {
        this.toggleSubscribing()

        try {
          const result = await auth.signInWithPopup(provider)
          const data = await database.ref('users').child(result.user.uid).once('value')
          var user = {
            id: result.user.uid,
            name: result.user.displayName,
            email: result.user.email,
            picture: result.user.photoURL
          }

          if (data.exists()) {
            // TODO: Só atualizar se houver alteração.
            await database.ref('users').child(result.user.uid).update(user)
          } else {
            await database.ref('users').child(result.user.uid).set(user)
          }
        } catch(error) {
          console.error(error)
        }

        this.updateUser(user)
        this.toggleSubscribing()
        this.$router.push('/dashboard')
      }
    }
  }
</script>
