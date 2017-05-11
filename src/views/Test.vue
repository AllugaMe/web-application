<template lang="pug">
  view-container
    property-form
</template>

<script>
  import ViewContainer from '../components/view/Container.vue'
  import PropertyForm from '../components/property/Form.vue'
  import * as types from '../store/types.js'

  export default {
    components: { ViewContainer, PropertyForm }
  }
</script>
