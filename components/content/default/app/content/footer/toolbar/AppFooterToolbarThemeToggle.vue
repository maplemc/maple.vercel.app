<template>
  <AppFooterToolbarItem @click="onClick">
    Dark mode

    <Icon name="toggle/off" class="w-6 h-6 dark:hidden"/>
    <Icon name="toggle/on" class="w-6 h-6 hidden dark:block"/>
  </AppFooterToolbarItem>
</template>

<script setup>
const { toggleTheme } = useTheme();

const onClick = () => toggleTheme();
</script>
