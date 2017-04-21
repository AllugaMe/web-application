<template lang="pug">
  v-card
    form.form-login(@submit.prevent="signIn")
      v-btn(type="submit") Inscrever/Entrar com o Facebook
        v-icon facebook
</template>

<script>
  import firebase from 'firebase'
  import application from '../lib/application.js'

  const provider = new firebase.auth.FacebookAuthProvider()
  const auth = application.auth()

  export default {
    methods: {
      async signIn() {
        try {
          const result = await auth.signInWithPopup(provider)
          console.log('Token', result.credential.accessToken, 'User', result.user)
          this.$router.push('/dashboard')
        } catch(error) {
          console.log(error)
        }
      }
    }
  }
</script>
