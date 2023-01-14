<template>
  <Embed :path="path" class="spotify-song"/>
</template>

<script>
export default {
  props: {
    id: String
  },
  computed: {
    path() {
      return 'https://open.spotify.com/embed/track/' + this.id + '?utm_source=generator'
    }
  }
}
</script>
