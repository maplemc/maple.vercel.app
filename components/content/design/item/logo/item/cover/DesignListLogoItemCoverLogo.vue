<template>
  <Image class="w-14 h-14 rounded-full" page='design' :path="path"/>
</template>

<script>
export default {
  props: {
    logo: String
  },
  computed: {
    path() {
      return 'logos/' + this.logo + '.png'
    }
  }
}
</script>
