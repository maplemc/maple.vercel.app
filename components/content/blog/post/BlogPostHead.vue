<template>
  <div class="w-full grid grid-cols-12">
    <BlogPostHeadText>
      <h1>{{ post.title }}</h1>
      <BlogPostHeadDescription>{{ post.description }}</BlogPostHeadDescription>
    </BlogPostHeadText>

    <BlogPostHeadStats/>
  </div>
</template>

<script>
export default {
  props: {
    post: Object
  }
}
</script>
