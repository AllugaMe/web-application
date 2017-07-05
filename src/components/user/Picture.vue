<template>
  <picture class="user-picture">
    <img class="image" v-if="user.picture" :src="user.picture" :alt="user.name" :title="title" :style="style" />
    <svg class="image" :title="title" :style="style" viewBox="0 0 24 24">
      <path d="M12,19.2C9.5,19.2 7.29,17.92 6,16C6.03,14 10,12.9 12,12.9C14,12.9 17.97,14 18,16C16.71,17.92 14.5,19.2 12,19.2M12,5A3,3 0 0,1 15,8A3,3 0 0,1 12,11A3,3 0 0,1 9,8A3,3 0 0,1 12,5M12,2A10,10 0 0,0 2,12A10,10 0 0,0 12,22A10,10 0 0,0 22,12C22,6.47 17.5,2 12,2Z"></path>
    </svg>
  </picture>
</template>

<script>
  export default {
    props: {
      size: {
        type: Number,
        default: 36
      },
      user: {
        type: Object,
        default() {
          return {
            picture: '',
            name: 'Unknown'
          }
        }
      }
    },
    computed: {
      title() {
        return `Avatar of ${this.user.name}`
      },
      style() {
        return {
          width: `${this.size}px`,
          height: `${this.size}px`
        }
      }
    }
  }
</script>

<style lang="stylus">
  .user-picture
    overflow: hidden
    display: block
    line-height: 1
    font-size: 0
    border-radius: 50%

    & > .image
      display: inline-block
      width: 100%
      height: @width

      & > path     // Troca a cor do ícone usando as propriedades do SVG
        fill: #fff
</style>
