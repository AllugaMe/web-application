<template lang="pug">
  form.form-login(@submit.prevent="signIn")
    form-group(title="Login")
      p Acesse usando o Facebook
      button(@click="signIn", type="button") Entrar
</template>

<script>
  import firebase from 'firebase'
  import application from '../lib/application.js'
  import FormGroup from './FormGroup.vue'
  import FormField from './FormField.vue'

  const provider = new firebase.auth.FacebookAuthProvider()
  const auth = application.auth()

  export default {
    components: { FormField, FormGroup },
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
