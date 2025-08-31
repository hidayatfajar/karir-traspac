<template>
  <div>
    <NuxtLayout>
      <NuxtPage />
    </NuxtLayout>
  </div>
</template>

<script setup>
// Global error handler
onErrorCaptured((error, instance, info) => {
  console.error('Global error captured:', error);
  console.error('Component info:', info);
  return false; // Propagate error
});

// Handle unhandled promise rejections
if (process.client) {
  window.addEventListener('unhandledrejection', (event) => {
    console.error('Unhandled promise rejection:', event.reason);
  });
  
  // Prevent Chrome DevTools navigation
  window.addEventListener('beforeunload', (event) => {
    // Clear any pending navigations
    if (window.history && window.history.pushState) {
      window.history.replaceState(null, '', window.location.href);
    }
  });
}

// Watch for route changes to ensure clean navigation
const route = useRoute();
watch(() => route.path, (newPath, oldPath) => {
  if (process.client && !newPath.includes('.well-known') && !oldPath.includes('.well-known')) {
    // Clear any pending timers or requests
    console.log(`Navigation: ${oldPath} -> ${newPath}`);
  }
}, { immediate: false });
</script>

<style>
* {
  box-sizing: border-box;
}

body {
  margin: 0;
  padding: 0;
}

/* Pastikan tidak ada transform pada parent yang bisa mempengaruhi sticky */
#__nuxt {
  min-height: 100vh;
}

/* Ensure smooth transitions */
.page-enter-active,
.page-leave-active {
  transition: all 0.3s ease;
}

.page-enter-from,
.page-leave-to {
  opacity: 0;
  transform: translateY(10px);
}

/* Prevent flash of unstyled content */
.layout-enter-active,
.layout-leave-active {
  transition: all 0.2s ease;
}

.layout-enter-from,
.layout-leave-to {
  opacity: 0;
}
</style>
