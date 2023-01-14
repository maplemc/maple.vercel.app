<template>
  <BlogPost :post="post"/>
</template>

<script setup>
const { path } = useRoute();

const { data } = await useAsyncData(`content-${path}`, () => {
  return queryContent().where({ _path: path }).findOne()
});

if(!data.value) showError({ statusCode: 404 });

const post = data;
</script>
