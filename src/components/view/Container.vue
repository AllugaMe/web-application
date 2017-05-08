<template lang="pug">
  v-app
    view-header(v-if='!hideHeader')
    main.main-content
      v-content
        v-container
          slot
    view-footer(v-if='!hideFooter')
    view-error-message
</template>

<script>
  import ViewHeader from './Header.vue'
  import ViewFooter from './Footer.vue'
  import ViewErrorMessage from './ErrorMessage.vue'

  export default {
    components: { ViewHeader, ViewFooter, ViewErrorMessage },
    props: {
      hideHeader: {
        type: Boolean,
        default: false
      },
      hideFooter: {
        type: Boolean,
        default: false
      }
    }
  }
</script>

<style lang="stylus">
  .main-content
    min-height: calc(100vh - 45px) // A altura da tela - o tamanho do rodapé.

    .main-header + &                          // Quando ha o cabeçalho o tamanho
      min-height: calc(100vh - (64px + 45px)) // dele influencia na fórmula.
</style>
