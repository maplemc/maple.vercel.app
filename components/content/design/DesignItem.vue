<template>
  <AppContentItem class="w-full">
    <DesignItemTitle>{{ title }}</DesignItemTitle>
    <h4>{{ subtitle }}</h4>

    <slot></slot>
  </AppContentItem>
</template>

<script>
export default {
  props: {
    title: String,
    subtitle: String
  }
}
</script>
