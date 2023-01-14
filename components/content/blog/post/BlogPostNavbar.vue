<template>
  <div class="px-4 py-2 z-30 top-1/2 right-8 fixed transform -translate-y-1/2 flex flex-col group rounded-lg backdrop-blur-lg bg-white/75 dark:bg-gray-750/25 ring-1 ring-gray-750 shadow-lg dark:shadow-black/40">
    <BlogPostNavbarList :anchors="anchors" noIndent/>
  </div>
</template>

<script>
export default {
  props: {
    post: Object
  },
  computed: {
    anchors() {
      return this.post.body.toc.links
    }
  }
}
</script>
