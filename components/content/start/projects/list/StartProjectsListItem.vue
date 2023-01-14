<template>
  <NuxtLink :to="linkTo" class="rounded-lg flex flex-col-reverse lg:grid grid-cols-12 lg:gap-8 transition bg-white hover:bg-gray-100 dark:bg-gray-750/25 dark:hover:bg-gray-750 ring-1 ring-gray-750 shadow-lg">
    <StartProjectsListItemText>
      <StartProjectsListItemTitle>{{ title }}</StartProjectsListItemTitle>
      <StartProjectsListItemDescription>{{ description }}</StartProjectsListItemDescription>
    </StartProjectsListItemText>

    <StartProjectsListItemLogo :project="project"/>
  </NuxtLink>
</template>

<script>
export default {
  props: {
    project: String,
    title: String,
    description: String
  },
  computed: {
    linkTo() {
      return 'https://github.com/stylextv/' + this.project
    }
  }
}
</script>
