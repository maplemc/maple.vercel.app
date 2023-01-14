<template>
  <div class="w-full flex items-start justify-end col-span-5">
    <BlogPostHeadStatsItem @click="hasLiked = !hasLiked" interactable>
      1.3K

      <Icon v-if="!hasLiked" name="heart/stroke" class="w-5 h-5"/>
      <Icon v-if="hasLiked" name="heart/fill" class="w-5 h-5 text-red-500"/>
    </BlogPostHeadStatsItem>
    <BlogPostHeadStatsItem>
      12.5K

      <Icon name="eye" class="w-5 h-5"/>
    </BlogPostHeadStatsItem>
  </div>
</template>

<script>
export default {
  data() {
    return {
      hasLiked: false
    }
  }
}
</script>
