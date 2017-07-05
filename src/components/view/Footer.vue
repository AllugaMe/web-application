<template>
  <v-footer>
    <fragment-link class="white--text" :to="owner.link">{{ owner.name }} &copy; {{ owner.year }}</fragment-link>
  </v-footer>
</template>

<script>
  import { mapGetters } from 'vuex'
  import * as types from '../../store/types.js'
  import FragmentLink from '../fragment/Link.vue'

  export default {
    computed: mapGetters({ owner: types.OWNER_DATA }),
    components: { FragmentLink }
  }
</script>
