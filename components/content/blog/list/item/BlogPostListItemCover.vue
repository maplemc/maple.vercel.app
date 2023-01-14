<template>
  <Image :page="post._path" path="cover.jpg" class="w-full"/>
</template>

<script>
export default {
  props: {
    post: Object
  }
}
</script>
