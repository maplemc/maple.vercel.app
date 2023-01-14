<template>
  <iframe :src="path" class="embed outline-none"></iframe>
</template>

<script>
export default {
  props: {
    path: String
  }
}
</script>
