<template>
  <Embed :path="path" class="youtube-video rounded-xl" allowfullscreen/>
</template>

<script>
export default {
  props: {
    id: String
  },
  computed: {
    path() {
      return 'https://www.youtube.com/embed/' + this.id
    }
  }
}
</script>
