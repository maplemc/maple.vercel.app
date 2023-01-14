<template>
  <Image :page="post._path" path="cover.jpg" class="w-full aspect-[2] mb-12 rounded-xl object-cover shadow-lg dark:shadow-black/40"/>
</template>

<script>
export default {
  props: {
    post: Object
  }
}
</script>
