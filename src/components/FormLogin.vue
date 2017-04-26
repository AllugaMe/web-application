<template lang="pug">
  v-card
    form.form-login()
      v-btn(type='button', :disabled='isSubscribing', @click.native='signIn') Entrar com o Facebook
        v-icon facebook
</template>

<script>
  import { mapGetters } from 'vuex'

  export default {
    computed: mapGetters({ isSubscribing: 'user/isSubscribing' }),
    methods: {
      async signIn() {
        await this.$store.dispatch('signIn', null, { module: 'user' })
        this.$router.push('/dashboard')
      }
    }
  }
</script>
