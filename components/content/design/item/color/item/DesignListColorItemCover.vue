<template>
  <DesignListItemCover :style="'background-color: ' + color" :class="{ 'ring-1 ring-gray-750 dark:ring-0': isLight, 'dark:ring-1 dark:ring-gray-750': isDark }"/>
</template>

<script>
export default {
  props: {
    color: String,
    isLight: Boolean,
    isDark: Boolean
  }
}
</script>
