<template>
  <NuxtLink :to="linkTo" class="font-inter font-normal text-sm text-gray-500 hover:text-gray-800 dark:text-gray-400 dark:hover:text-white-50">
    <slot></slot>
  </NuxtLink>
</template>

<script>
export default {
  props: {
    linkTo: String
  }
}
</script>
