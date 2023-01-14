<template>
  <DesignListItemCover class="flex items-center justify-center ring-1 ring-gray-750" :class="darkBackground ? 'bg-gray-900' : 'bg-white'">
    <DesignListLogoItemCoverLogo :logo="logo"/>
    <DesignListLogoItemCoverLabel :isPrimary="isPrimary" :darkBackground="darkBackground"/>
  </DesignListItemCover>
</template>

<script>
export default {
  props: {
    logo: String,
    isPrimary: Boolean,
    darkBackground: Boolean
  }
}
</script>
