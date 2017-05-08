<template lang="pug">
  v-row.user-details(v-if='user !== null')
    v-col(xs12, md6)
      v-card
        v-card-row.figure-row
          user-picture(:user='user', :size='100')
        v-card-row.text-xs-center
          v-card-text
            h4 {{ user.name }}
        v-card-row.text-xs-center
          v-card-text {{ user.email }}
    v-col(xs12, md6)
      v-card
        v-card-row
          p Textão.
  v-progress-circular(
    v-else,
    indeterminate,
    v-bind:size="70",
    v-bind:width="7"
  )
</template>

<script>
  import { mapGetters } from 'vuex'
  import UserPicture from './Picture.vue'

  export default {
    components: { UserPicture },
    props: {
      user: {
        type: Object,
        default() {
          return null
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
