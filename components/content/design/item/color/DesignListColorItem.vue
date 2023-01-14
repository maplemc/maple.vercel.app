<template>
  <DesignListItem>
    <DesignListColorItemCover :color="color" :isLight="isLight" :isDark="isDark"/>

    <DesignListItemToolbar>
      <DesignListItemTitle>{{ title }}</DesignListItemTitle>

      <DesignListItemToolbarLinks>
        <DesignListColorItemToolbarLink :color="color"/>
      </DesignListItemToolbarLinks>
    </DesignListItemToolbar>

    <DesignListItemSubtitle>{{ color }}</DesignListItemSubtitle>
  </DesignListItem>
</template>

<script>
export default {
  props: {
    color: String,
    isLight: Boolean,
    isDark: Boolean,
    title: String
  }
}
</script>
