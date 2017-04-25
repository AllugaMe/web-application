<template lang="pug">
  v-app
    v-header(v-if='!hideHeader')
    main.main-content
      v-content
        v-container(fluid)
          slot
    v-footer(v-if='!hideFooter')
      v-link.white--text(:to='author.link') {{ author.name }}
      |  &copy; {{ author.year }}
</template>

<script>
  import { mapGetters } from 'vuex'
  import VHeader from './VHeader.vue'
  import VLink from './VLink.vue'

  export default {
    components: { VHeader, VLink },
    computed: mapGetters(['author']),
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
