<template lang="pug">
  v-row.user-details
    v-col(xs12, md6)
      v-card
        v-card-row.figure-row
          u-picture(:user='user', :size='100')
        v-card-row.text-xs-center
          v-card-text
            h4 {{ user.name }}
        v-card-row.text-xs-center
          v-card-text {{ user.email }}
    v-col(xs12, md6)
      v-card
        v-card-row
          p Textão.
</template>

<script>
  import { mapGetters } from 'vuex'
  import UPicture from './UPicture.vue'

  export default {
    components: { UPicture },
    props: {
      user: {
        type: Object,
        default() {
          return {
            id: null,
            name: 'Unknown',
            email: 'Unknown',
            picture: ''
          }
        }
      }
    }
  }
</script>

<style lang="stylus">
  .user-details .figure-row
    align-items: center
    justify-content: center
</style>
