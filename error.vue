<template>
  <div>
    <NuxtLayout>
      <AppLoadingIndicator/>

      <AppContent>
        <ErrorHero :error="error"/>
      </AppContent>
      
    </NuxtLayout>
  </div>
</template>

<script setup>
useHead({
  title: 'An error occurred | StylexTV'
});

const props = defineProps({
  error: Object
});
</script>
