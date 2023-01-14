<template>
  <div class="mr-8 flex gap-4 font-inter font-normal text-sm text-gray-500 dark:text-gray-400" :class="{ 'cursor-pointer hover:text-gray-800 dark:hover:text-white-50': interactable }">
    <slot></slot>
  </div>
</template>

<script>
export default {
  props: {
    interactable: Boolean
  }
}
</script>
