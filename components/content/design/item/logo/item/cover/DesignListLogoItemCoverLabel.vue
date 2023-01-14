<template>
  <div class="p-1 top-2 right-2 absolute rounded-md text-xs border" :class="darkBackground ? 'text-gray-300 border-gray-300' : 'text-gray-800 border-gray-800'">
    {{ isPrimary ? 'Primary' : 'Secondary' }}
  </div>
</template>

<script>
export default {
  props: {
    isPrimary: Boolean,
    darkBackground: Boolean
  }
}
</script>
