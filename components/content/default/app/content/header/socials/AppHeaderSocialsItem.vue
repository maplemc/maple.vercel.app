<template>
  <NuxtLink :to="linkTo">
    <Icon :name="iconName" class="w-[18px] h-[18px] text-gray-800 dark:text-white-50"/>
  </NuxtLink>
</template>

<script>
export default {
  props: {
    iconName: String,
    linkTo: String
  }
}
</script>
