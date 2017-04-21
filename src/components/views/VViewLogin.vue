<template lang="pug">
  v-view(hideHeader='true')
    FormLogin
</template>

<script>
  import VView from '../VView.vue'
  import FormLogin from '../FormLogin.vue'

  export default {
    components: { VView, FormLogin }
  }
</script>
