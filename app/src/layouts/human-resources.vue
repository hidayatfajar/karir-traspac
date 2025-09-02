<template>
  <div class="min-h-screen bg-gray-50">
    <!-- Sidebar -->
    <HRSidebar
      :is-open="sidebarOpen"
      :current-route="currentRoute"
      @close="sidebarOpen = false"
      @navigate="handleNavigation"
    />
    <!-- Main Content Area -->
    <div
      :class="[
        'transition-all duration-300 ease-in-out',
        'md:ml-64', // Always offset by sidebar width on desktop
        'flex flex-col min-h-screen',
      ]"
    >
      <!-- Header -->
      <HRHeader
        :page-title="pageTitle"
        :page-subtitle="pageSubtitle"
        @toggle-sidebar="sidebarOpen = !sidebarOpen"
      />

      <!-- Page Content -->
      <main class="flex-1 p-6">
        <slot />
      </main>

    </div>
  </div>
</template>

<script setup lang="ts">
import HRHeader from "~/components/layouts/hr/HRHeader.vue";
import HRSidebar from "~/components/layouts/hr/HRSidebar.vue";

// Composables
const route = useRoute();

// Reactive state
const sidebarOpen = ref(false);
const currentRoute = ref(route.path);
const pageTitle = ref("Dashboard");
const pageSubtitle = ref("Welcome to HR Management System");



// Handle navigation from sidebar
const handleNavigation = (routePath: string) => {
  currentRoute.value = routePath;
  sidebarOpen.value = false; // Close sidebar on mobile after navigation
};

// Close sidebar when clicking outside on mobile
const closeSidebarOnOutsideClick = () => {
  if (window.innerWidth < 768) {
    sidebarOpen.value = false;
  }
};

// Handle window resize
onMounted(() => {
  // Close sidebar on mobile by default
  if (window.innerWidth < 768) {
    sidebarOpen.value = false;
  }

  // Listen for resize events
  window.addEventListener("resize", () => {
    if (window.innerWidth >= 768) {
      sidebarOpen.value = false; // Reset state, sidebar is always visible on desktop
    }
  });
});

// Set page meta
useHead({
  title: () => `${pageTitle.value} - HR Management`,
  meta: [{ name: "description", content: () => pageSubtitle.value }],
});
</script>

<style scoped>
/* Custom scrollbar for better UX */
:deep(.overflow-y-auto)::-webkit-scrollbar {
  width: 6px;
}

:deep(.overflow-y-auto)::-webkit-scrollbar-track {
  background: #f1f5f9;
}

:deep(.overflow-y-auto)::-webkit-scrollbar-thumb {
  background: #cbd5e1;
  border-radius: 3px;
}

:deep(.overflow-y-auto)::-webkit-scrollbar-thumb:hover {
  background: #94a3b8;
}
</style>
