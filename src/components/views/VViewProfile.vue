<template lang="pug">
  v-view
    h1 {{ $route.params.id }}
</template>

<script>
  import { mapGetters } from 'vuex'

  export default {
    computed: mapGetters(['user'])
  }
</script>
