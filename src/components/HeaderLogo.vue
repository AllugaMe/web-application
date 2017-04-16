<template lang="pug">
  router-link.header-logo(to="/")
    img.image(src="../asset/image/logo.png", alt="Alluga.me", title="Alluga.me logo.")
    | Alluga.me
</template>

<style lang="stylus">
  @import '../style/config.styl'

  .header-logo
    box-sizing: border-box
    display: inline-block
    height: 100%
    padding-top: $header-logo.padding
    padding-bottom: @padding-top
    line-height: $header-logo.height - 2 * $header-logo.padding

    & > .image
      float: left
      max-height: 100%
</style>
