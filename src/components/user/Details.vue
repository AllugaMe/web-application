<template>
  <v-row class="user-details" v-if="user !== null">
    <v-col xs12 md6>
      <v-card>
        <v-card-row class="figure-row">
          <user-picture :user="user" :size="100"></user-picture>
        </v-card-row>
        <v-card-row class="text-xs-center">
          <v-card-text>
            <h4>{{ user.name }}</h4>
          </v-card-text>
        </v-card-row>
        <v-card-row class="text-xs-center">
          <v-card-text>{{ user.email }}</v-card-text>
        </v-card-row>
      </v-card>
    </v-col>

    <v-col xs12 md6>
      <v-card>
        <v-card-row>
          <p>Textão.</p>
        </v-card-row>
      </v-card>
    </v-col>
  </v-row>
  <v-progress-circular v-else indeterminate :size="70" :width="7"></v-progress-circular>
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
