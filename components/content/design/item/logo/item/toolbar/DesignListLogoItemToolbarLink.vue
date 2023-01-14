<template>
  <DesignListItemToolbarLink :to="logoPath" external :download="logoName">png</DesignListItemToolbarLink>
</template>

<script>
export default {
  props: {
    logo: String
  },
  computed: {
    logoName() {
      return 'logo-' + this.logo
    },
    logoPath() {
      return '/content/design/assets/images/logos/' + this.logo + '.png';
    }
  }
}
</script>
