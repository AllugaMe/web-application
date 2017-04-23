<template lang="pug">
  v-app
    v-header(v-if='!hideHeader')
    main.main-content
      v-content
        v-container(fluid)
          slot
    v-footer(v-if='!hideFooter')
      v-link.white--text(:to='copyright.link') {{ copyright.author }}
      |  &copy; {{ copyright.year }}
</template>

<script>
  import VHeader from './VHeader.vue'
  import VLink from './VLink.vue'

  export default {
    components: { VHeader, VLink },
    data() {
      let date = new Date()

      return {
        copyright: {
          author: 'Nome da Aplicação',
          link: 'https://google.com/',
          year: date.getFullYear()
        }
      }
    },
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
