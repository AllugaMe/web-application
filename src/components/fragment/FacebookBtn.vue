<template>
  <v-btn class="btn--facebook" :type="type" large>
    <slot></slot>
    <img src="~@images/icon-facebook.svg" alt="Facebook" class="icon--facebook" title="Ícone do Facebook">
  </v-btn>
</template>

<script>
  export default {
    props: {
      type: {
        type: String,
        default: 'button'
      }
    }
  }
</script>

<style lang="stylus">
  .btn--facebook
    background-color: #3B5998

    .icon--facebook
      display: inline-block
      height: 24px
      margin-left: 8px
</style>
