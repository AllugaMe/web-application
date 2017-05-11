<template lang="pug">
  form(@submit.prevent='save')
    v-select(
      :items='states',
      @input='updateCities',
      item-value='id',
      label='Selecione o estado'
    )
    v-select(
      :items='cities',
      :disabled='cityDisabled'
    )
</template>

<script>
  import * as types from '../../store/types.js'

  export default {
    data() {
      return {
        cityDisabled: true,
        cities: [],
        states: [
          {
            id: '-Kjodg1kcPifWWebPf3o',
            text: 'São Paulo'
          }
        ]
      }
    },
    methods: {
      async updateCities(state) {
        this.cities = await this.$store.dispatch(types.CITIES_SELECT, state)
        this.cityDisabled = false
      }
    }
  }
</script>
