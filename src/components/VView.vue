<template lang="pug">
  v-app
    v-header(v-if='!hideHeader')
    main.main-content
      v-content
        v-container
          slot
    v-footer(v-if='!hideFooter')
      f-link.white--text(:to='owner.link') {{ owner.name }}
      |  &copy; {{ owner.year }}
    v-snackbar(v-model='show', :timeout='4000', right, bottom) {{ error }}
      v-btn(@click.native='hideError')
        v-icon close
</template>

<script>
  import * as types from '../store/types.js'
  import { mapGetters } from 'vuex'
  import VHeader from './VHeader.vue'
  import FLink from './fragment/FLink.vue'

  export default {
    components: { VHeader, FLink },
    computed: {
      ...mapGetters({
        owner: types.OWNER_DATA,
        error: 'error/message'
      }),
      show: {
        get () {
          return this.$store.getters['error/show']
        },
        set (value) {
          if (value === false)
            this.$store.dispatch('error/hideError')
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
