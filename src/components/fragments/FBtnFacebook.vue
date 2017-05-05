<template lang="pug">
  v-btn.btn--facebook(:type='type', large)
    slot
    img.icon--facebook(src='../../asset/image/icon-facebook.svg', alt='Facebook', title='Ícone do Facebook')
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
      height: 28px
      margin-left: 6px
</style>
