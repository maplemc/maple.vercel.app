<template>
  <NuxtLink :to="linkTo">
    <StartToolsListItemLogo :tool="tool"/>
  </NuxtLink>
</template>

<script>
export default {
  props: {
    tool: String,
    linkTo: String
  }
}
</script>
