<template>
  <NuxtLink :to="to" class="ml-2 cursor-pointer font-inter font-medium text-sm text-gray-400 hover:text-gray-500 dark:text-gray-500 dark:hover:text-gray-400 hover:underline">
    <slot></slot>
  </NuxtLink>
</template>

<script>
export default {
  props: {
    to: String
  }
}
</script>
