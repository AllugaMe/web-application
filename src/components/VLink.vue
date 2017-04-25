<template lang="pug">
  a.link(:to='to', @click='openLink', ref='element', target='_blank')
    slot
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
  .link:link
  .link:visited
    text-decoration: none
    cursor: pointer
</style>
