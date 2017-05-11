<template lang="pug">
  form(@submit.prevent='save')
    v-select(
      :items='states',
      @input='updateCities',
      label='Selecione o estado'
    )
    v-select(
      :items='cities',
      :disabled='cityDisabled',
      label='Selecione a cidade'
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
        const cities = await this.$store.dispatch(types.CITIES_SELECT, state.id)
        this.cities = cities.map(city => ({ text: city.name, ...city }))
        this.cityDisabled = false
      }
    }
  }
</script>
