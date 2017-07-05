<template>
  <v-snackbar v-model="show" :timeout="5000" right bottom>{{ error }}
    <v-btn @click.native="close">
      <v-icon>close</v-icon>
    </v-btn>
  </v-snackbar>
</template>

<script>
  import { mapGetters, mapActions } from 'vuex'
  import * as types from '../../store/types.js'

  export default {
    computed: {
      ...mapGetters({ error: types.ERROR_DATA }),
      show: {
        get () {
          return this.$store.getters[types.ERROR_VISIBLE]
        },
        set (value) {
          if (!value)
            this.$store.dispatch(types.ERROR_HIDE)
        }
      }
    },
    methods: mapActions({ close: types.ERROR_HIDE })
  }
</script>
