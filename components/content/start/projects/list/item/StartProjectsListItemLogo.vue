<template>
  <div class="py-16 lg:p-4 flex items-center justify-center col-span-5">
    <Image page="start" :path="path" class="w-20 h-20 rounded-lg ring-1 ring-gray-200 dark:ring-gray-750"/>
  </div>
</template>

<script>
export default {
  props: {
    project: String
  },
  computed: {
    path() {
      return 'projects/' + this.project + '.png'
    }
  }
}
</script>
