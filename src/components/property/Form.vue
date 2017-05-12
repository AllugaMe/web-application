<template lang="pug">
  form(@submit.prevent='save')
    v-select(
      v-model='selectedState',
      :items='states',
      item-value='id',
      item-text='name',
      label='Selecione o estado',
      autocomplete
    )
    v-select(
      v-model='selectedCity',
      :items='cities',
      :disabled='cityDisabled',
      item-value='id',
      item-text='name',
      label='Selecione a cidade',
      autocomplete
    )
</template>

<script>
  import * as types from '../../store/types.js'

  export default {
    data() {
      return {
        selectedState: null,
        selectedCity: null,
        cityDisabled: true,
        cities: [],
        states: [
          {
            id: '-Kjodg1kcPifWWebPf3o',
            name: 'São Paulo'
          }
        ]
      }
    },
    watch: {
      async selectedState() {
        this.cityDisabled = true
        this.cities = await this.$store.dispatch(
          types.CITIES_SELECT,
          this.selectedState.id
        )

        console.log(JSON.stringify(this.cities))

        this.cityDisabled = false
      }
    }
  }
</script>
