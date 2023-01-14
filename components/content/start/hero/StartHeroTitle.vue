<template>
  <h1 class="-m-4 p-4 !font-inter !font-extrabold lg:!text-8xl text-center !tracking-normal" :class="{ 'italic !text-transparent bg-gradient-to-r from-blue-500 via-purple-500 to-red-500 bg-clip-text': emphasized }">
    <slot></slot>
  </h1>
</template>

<script>
export default {
  props: {
    emphasized: Boolean
  }
}
</script>
