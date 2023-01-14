<template>
  <NuxtLink :to="post._path" class="rounded-lg overflow-hidden transition bg-white hover:bg-gray-100 dark:bg-gray-750/25 dark:hover:bg-gray-750 ring-1 ring-gray-750 shadow-lg">
    <BlogPostListItemCover :post="post"/>

    <BlogPostListItemText>
      <BlogPostListItemTitle>{{ post.title }}</BlogPostListItemTitle>
      <BlogPostListItemDescription>{{ post.description }}</BlogPostListItemDescription>
    </BlogPostListItemText>
  </NuxtLink>
</template>

<script>
export default {
  props: {
    post: Object
  }
}
</script>
