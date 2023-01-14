<template>
  <DesignListItemToolbarLink @click="onClick">Copy</DesignListItemToolbarLink>
</template>

<script>
export default {
  props: {
    color: String
  },
  methods: {
    onClick() {
      navigator.clipboard.writeText(this.color);
    }
  }
}
</script>
