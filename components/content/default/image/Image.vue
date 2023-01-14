<template>
  <img :src="source"/>
</template>

<script>
export default {
  props: {
    page: {
      type: String,
      default: 'default'
    },
    path: String
  },
  computed: {
    source() {
      return '/content/' + this.page + '/assets/images/' + this.path
    }
  }
}
</script>
