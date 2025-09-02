<template>
  <header class="h-16 bg-white border-b border-gray-200 shadow-sm">
    <div class="flex items-center justify-between h-full px-4 md:px-6">
      <!-- Left Section -->
      <div class="flex items-center space-x-4">
        <!-- Mobile Menu Button -->
        <UButton
          variant="ghost"
          size="sm"
          class="md:hidden"
          @click="$emit('toggleSidebar')"
        >
          <UIcon name="i-heroicons-bars-3" class="w-5 h-5" />
        </UButton>

        <!-- Page Title -->
        <div class="hidden md:block">
          <h1 class="text-lg font-semibold text-gray-900">{{ pageTitle }}</h1>
          <p v-if="pageSubtitle" class="text-sm text-gray-500">
            {{ pageSubtitle }}
          </p>
        </div>
      </div>

      <!-- Right Section -->
      <div class="flex items-center space-x-4">
        <!-- Notifications -->
        <UButton variant="ghost" size="sm" class="relative">
          <UIcon name="i-heroicons-bell" class="w-5 h-5" />
          <span
            class="absolute -top-1 -right-1 w-3 h-3 bg-red-500 rounded-full text-xs flex items-center justify-center"
          >
            <span class="text-white text-xs">3</span>
          </span>
        </UButton>

        <!-- Search -->
        <div class="hidden md:block">
          <UInput
            v-model="searchQuery"
            placeholder="Search..."
            icon="i-heroicons-magnifying-glass"
            size="sm"
            class="w-64"
          />
        </div>

        <!-- User Menu -->
        <UDropdownMenu :items="userMenuItems">
          <UButton variant="ghost" class="flex items-center space-x-2">
            <UAvatar
              src="https://placehold.co/40"
              alt="HR Manager"
              size="sm"
            />
            <div class="hidden md:block text-left">
              <p class="text-sm font-medium text-gray-900">{{ user.name }}</p>
              <p class="text-xs text-gray-500">{{ user.role }}</p>
            </div>
            <UIcon name="i-heroicons-chevron-down" class="w-4 h-4" />
          </UButton>
        </UDropdownMenu>
      </div>
    </div>
  </header>
</template>

<script setup lang="ts">
interface User {
  name: string;
  email: string;
  role: string;
  avatar?: string;
}

interface Props {
  pageTitle?: string;
  pageSubtitle?: string;
}

const props = withDefaults(defineProps<Props>(), {
  pageTitle: "Dashboard",
  pageSubtitle: "Welcome to HR Management System",
});

const emit = defineEmits<{
  toggleSidebar: [];
  updateTitle: [title: string, subtitle?: string];
}>();

const searchQuery = ref("");

const user = ref<User>({
  name: "Bagas Arifiea",
  email: "hr@traspac.co.id",
  role: "Human Resources",
});

const userMenuItems = ref([
  [
    {
      label: "Profile",
      icon: "i-heroicons-user",
      click: () => navigateTo("/human-resources/profile"),
    },
  ],
  [
    {
      label: "Settings",
      icon: "i-heroicons-cog-6-tooth",
      click: () => navigateTo("/human-resources/settings"),
    },
  ],
  [
    {
      label: "Help & Support",
      icon: "i-heroicons-question-mark-circle",
      click: () => navigateTo("/help"),
    },
  ],
  [
    {
      label: "Logout",
      icon: "i-heroicons-arrow-right-on-rectangle",
      click: () => {
        // Handle logout
        console.log("Logging out...");
        // navigateTo("/auth/login");
        setLogout();
      },
    },
  ],
]);

// Get page title from route
const route = useRoute();

const updatePageTitle = (path: string) => {
  const titleMap: Record<string, { title: string; subtitle?: string }> = {
    "/human-resources/dashboard": {
      title: "Dashboard",
      subtitle: "Overview of HR activities",
    },
    "/human-resources/jobs": {
      title: "Job Positions",
      subtitle: "Manage job openings and requirements",
    },
    "/human-resources/candidates": {
      title: "Candidates",
      subtitle: "Review and manage job applications",
    },
    "/human-resources/interviews": {
      title: "Interviews",
      subtitle: "Schedule and manage interviews",
    },
    "/human-resources/reports": {
      title: "Reports",
      subtitle: "Analytics and insights",
    },
    "/human-resources/settings": {
      title: "Settings",
      subtitle: "Configure HR system preferences",
    },
  };

  const pageInfo = titleMap[path];
  if (pageInfo) {
    // Update via emit to parent
    emit("updateTitle", pageInfo.title, pageInfo.subtitle);
  }
};

import { useAuthStore } from "~/store";
import { isSlicingMode } from "~/config/app-mode";

const isAuthenticated = computed(() => {
  return isSlicingMode() ? true : store.isAuthenticated;
});

const store = useAuthStore();
const setLogout = async () => {
  setTimeout(async () => {
    await store.logout();
  }, 2000);
};

watch(() => route.path, updatePageTitle, { immediate: true });
</script>
