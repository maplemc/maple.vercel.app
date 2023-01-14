<template>
  <div :style="style" class="bg-current"></div>
</template>

<script>
export default {
  props: {
    name: String
  },
  computed: {
    style() {
      return {
        maskImage: 'url(' + this.path + ')',
        maskRepeat: 'no-repeat',
        maskSize: 'cover'
      }
    },
    path() {
      return '/content/default/assets/images/icons/' + this.name + '.svg'
    }
  }
}
</script>
