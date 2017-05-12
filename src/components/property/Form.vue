<template lang="pug">
  form(@submit.prevent='save')
    v-subheader Endereço
    v-container(fluid)
      v-row
        v-col(xs12, md4)
          v-select(
            v-model='state',
            :items='states',
            item-value='id',
            item-text='name',
            label='Selecione o estado',
            autocomplete
          )
        v-col(xs12, md4)
          v-select(
            v-model='city',
            :items='cities',
            :disabled='cityDisabled',
            item-value='id',
            item-text='name',
            label='Selecione a cidade',
            autocomplete
          )
        v-col(xs12, md5)
          v-text-field(
            v-model='address',
            label='Logradouro'
          )
        v-col(xs3, md2)
          v-text-field(
            v-model='number',
            label='Número'
          )
        v-col(xs9, md4)
          v-text-field(
            v-model='complement',
            label='Complemento'
          )
</template>

<script>
  import * as types from '../../store/types.js'

  export default {
    data() {
      return {
        address: null,
        number: null,
        city: null,
        cityDisabled: true,
        cities: [],
        state: null,
        states: [
          {
            id: '-Kjodg1kcPifWWebPf3o',
            name: 'São Paulo'
          }
        ]
      }
    },
    watch: {
      async state() {
        this.cityDisabled = true
        this.cities = await this.$store.dispatch(
          types.CITIES_SELECT,
          this.state.id
        )
        this.cityDisabled = false
      }
    }
  }
</script>
