<template>
  <form @submit.prevent="save">
    <v-subheader>Endereço</v-subheader>
    <v-container fluid>
      <v-row>
        <v-col xs12 md4>
          <v-select v-model="property.state" :items="states" :disabled="statesDisabled" item-value="id" item-text="name" label="Estado" autocomplete></v-select>
        </v-col>
        <v-col xs12 md4>
          <v-select v-model="property.city" :items="cities" :disabled="citiesDisabled" item-value="id" item-text="name" label="Cidade" autocomplete></v-select>
        </v-col>
        <v-col xs12 md5>
          <v-text-field v-model="property.address" label="Logradouro"></v-text-field>
        </v-col>
        <v-col xs3 md2>
          <v-text-field v-model="property.number" label="Número"></v-text-field>
        </v-col>
        <v-col xs9 md4>
          <v-text-field v-model="property.complement" label="Complemento"></v-text-field>
        </v-col>
      </v-row>
    </v-container>
  </form>
</template>

<script>
  import { mapGetters } from 'vuex'
  import * as types from '../../store/types.js'

  export default {
    computed: {
      ...mapGetters({ user: types.USER_DATA }),
      state() {
        return this.property.state
      }
    },
    props: {
      property: {
        type: Object,
        default() {
          return {
            state: null
          }
        }
      }
    },
    data() {
      return {
        citiesDisabled: true,
        statesDisabled: false,
        cities: [],
        states: []
      }
    },
    watch: {
      async state() {
        this.citiesDisabled = true
        this.cities = await this.$store.dispatch(
          types.CITIES_SELECT,
          this.property.state.id
        )
        this.citiesDisabled = false
      },
    },
    methods: {
      async save() {
        
      }
    },
    async created() {
      this.states = await this.$store.dispatch(types.STATES_DATA)
      let index = this.states.findIndex(state => state.name === 'São Paulo')
      this.property.state = this.states[index]
      this.statesDisabled = true

      this.$store.dispatch(
        types.ERROR_SHOW,
        'A versão beta atende apenas o estado de São Paulo.'
      )
    }
  }
</script>
