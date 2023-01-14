<template>
  <div class="flex flex-col" :class="{ 'group-hover:ml-3': !noIndent }">
    <BlogPostNavbarListItem v-for="anchor in anchors" :anchor="anchor"/>
  </div>
</template>

<script>
export default {
  props: {
    anchors: Object,
    noIndent: Boolean
  }
}
</script>
