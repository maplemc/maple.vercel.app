<template>
  <NuxtLink :to="linkTo">
    <Button class="px-7 py-3 transition text-base text-white bg-gray-800 hover:bg-opacity-80">
      Visit my GitHub
    </Button>
  </NuxtLink>
</template>

<script>
export default {
  data() {
    return {
      linkTo: 'https://github.com/stylextv'
    }
  }
}
</script>
