<template lang="pug">
  img.user-picture(:src='picture', :alt='name', :title='`Avatar of ${name}`')
</template>

<script>
  export default {
    props: {
      picture: {
        type: String,
        default: '/img/icon-person.svg'
      },
      name: {
        type: String,
        default: 'Unknown'
      }
    }
  }
</script>
