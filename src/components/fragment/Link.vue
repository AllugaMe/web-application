<template>
  <a href="" class="link" :to="to" @click="openLink" ref="element" target="_blank">
    <slot></slot>
  </a>
</template>

<script>
  export default {
    props: {
      to: {
        type: String,
        required: true
      },
      external: {
        type: Boolean,
        default: undefined
      }
    },
    methods: {
      openLink() {
        const isExternal = (this.to[0] !== '/' || this.external)

        if (!isExternal) {
          this.$router.push(this.to)
          return false
        } else {
          this.$refs.element.href = this.to
          return true
        }
      }
    }
  }
</script>

<style lang="stylus">
  .link
    cursor: pointer

    &
    &:link
    &:visited
      text-decoration: none

</style>
