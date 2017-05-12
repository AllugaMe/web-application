<template lang="pug">
  v-app
    view-header(v-if='!hideHeader')
    view-content
      slot
    view-footer(v-if='!hideFooter')
    view-error-message
</template>

<script>
  import ViewContent from './Content.vue'
  import ViewErrorMessage from './ErrorMessage.vue'
  import ViewFooter from './Footer.vue'
  import ViewHeader from './Header.vue'

  export default {
    components: { ViewContent, ViewErrorMessage, ViewFooter, ViewHeader },
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
