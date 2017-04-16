<template lang="pug">
  footer.view-footer
    p.copyright
      a.link(v-if="isExternalLink", :href="copyright.link") {{ copyright.author }}
      router-link.link(v-else, :to="copyright.link") {{ copyright.author }}
      |  &copy; {{ copyright.year }}
</template>

<script>
  export default {
    data() {
      return {
        copyright: {
          author: 'alluga.me',
          link: '/home',
          year: new Date().getFullYear()
        }
      }
    },
    computed: {
      isExternalLink() {
        return this.copyright.link[0] !== '/'
      }
    }
  }
</script>

<style lang="stylus">
  .view-footer
    color: #000

    & > .copyright
      text-align: center
</style>
