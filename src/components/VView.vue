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
    v-snackbar(v-model='show', :timeout='4000', right, bottom) {{ error }}
      v-btn(@click.native='hideError')
        v-icon close
</template>

<script>
  import { mapGetters, mapActions } from 'vuex'
  import VHeader from './VHeader.vue'
  import VLink from './VLink.vue'

  export default {
    components: { VHeader, VLink },
    computed: {
      ...mapGetters({
        author: 'application/author',
        error: 'error/message'
      }),
      show: {
        get () {
          return this.$store.getters['error/show']
        },
        set (value) {
          if (value === false)
            this.hideError()
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
    },
    methods: mapActions({ hideError: 'error/hideError' })
  }
</script>

<style lang="stylus">
  .main-content
    min-height: calc(100vh - 45px) // A altura da tela - o tamanho do rodapé.

    .main-header + &                          // Quando ha o cabeçalho o tamanho
      min-height: calc(100vh - (64px + 45px)) // dele influencia na fórmula.
</style>
