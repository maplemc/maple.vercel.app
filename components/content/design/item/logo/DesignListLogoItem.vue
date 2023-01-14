<template>
  <DesignListItem>
    <DesignListLogoItemCover :logo="logo" :isPrimary="isPrimary" :darkBackground="darkCover"/>

    <DesignListItemToolbar>
      <DesignListItemTitle>{{ title }}</DesignListItemTitle>

      <DesignListItemToolbarLinks>
        <DesignListLogoItemToolbarLink :logo="logo"/>
      </DesignListItemToolbarLinks>
    </DesignListItemToolbar>
  </DesignListItem>
</template>

<script>
export default {
  props: {
    logo: String,
    title: String,
    isPrimary: Boolean,
    darkCover: Boolean
  }
}
</script>
