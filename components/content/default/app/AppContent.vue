<template>
  <div class="w-full relative overflow-hidden flex flex-col items-center prose">
    <slot></slot>
  </div>
</template>

<script setup>
const { updateTheme } = useTheme();

onMounted(() => updateTheme());
</script>
