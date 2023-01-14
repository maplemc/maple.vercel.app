<template>
  <BlogPostList title="Highlighted Posts">
    <ContentQuery v-for="path in highlightedPosts" :path="'/blog/' + path" v-slot="{ data }">
      <BlogPostListItem v-if="data" :post="data[0]"/>
    </ContentQuery>
  </BlogPostList>

  <BlogPostList title="All Posts">
    <ContentList path="/blog" v-slot="{ list }">
      <BlogPostListItem v-for="post in list" :key="post._path" :post="post"/>
    </ContentList>
  </BlogPostList>
</template>

<script setup>
useHead({
  title: 'Blog'
});

const highlightedPosts = [ 'markdown-playground' ];
</script>
