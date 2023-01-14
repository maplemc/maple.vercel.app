<template>
  <div>
    <NuxtLayout>
      <AppLoadingIndicator/>
      
      <AppContent>
        <AppHeader/>
        <NuxtPage/>
        <AppFooter/>
      </AppContent>
      
    </NuxtLayout>
  </div>
</template>

<script setup>
useHead({
  titleTemplate: (titleChunk) => {
    return titleChunk ? `${titleChunk} | StylexTV` : 'StylexTV';
  }
});

const maintenance = true;

const devMode = process.env.NODE_ENV == 'development';

if(maintenance && !devMode) showError({ statusCode: 503, statusMessage: 'Site under maintenance' });
</script>
