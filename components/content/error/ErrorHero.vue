<template>
  <AppContentItem class="min-w-full h-screen flex flex-col items-center justify-center bg-gray-50 dark:bg-black">
    <ErrorHeroTitle>{{ error.statusCode }}</ErrorHeroTitle>
    <ErrorHeroMessage>{{ statusMessage }}</ErrorHeroMessage>
    <ErrorHeroButton/>
  </AppContentItem>
</template>

<script>
export default {
  props: {
    error: Object
  },
  computed: {
    statusCode() {
      return this.error.statusCode || '500';
    },
    statusMessage() {
      if(this.statusCode == '404') return 'Page not found';

      return this.error.statusMessage || 'An error occurred';
    }
  }
}
</script>
