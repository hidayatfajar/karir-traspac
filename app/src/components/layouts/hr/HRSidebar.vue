<template>
  <div
    :class="[
      'fixed left-0 top-0 z-40 w-64 h-screen bg-white border-r border-gray-200 transition-transform duration-300 ease-in-out',
      isOpen ? 'translate-x-0' : '-translate-x-full md:translate-x-0'
    ]"
  >
    <!-- Logo Section -->
    <div class="p-6 border-b border-gray-200">
      <div class="hover:scale-105 transition-transform duration-300">
        <img
          src="~/assets/images/logo/logo-kt.png"
          alt="Karir Traspac"
          class="w-24 object-contain mx-auto cursor-pointer"
          @click="navigateTo('/')"
        />
      </div>
    </div>

    <!-- Navigation Menu -->
    <nav class="p-4 space-y-2">
      <div
        v-for="(item, index) in menuItems"
        :key="index"
        :class="[
          'flex items-center space-x-3 p-3 rounded-lg cursor-pointer transition-all duration-200',
          item.active
            ? 'bg-blue-50 text-blue-700 border-l-4 border-blue-600'
            : 'text-gray-700 hover:bg-gray-50 hover:text-blue-600'
        ]"
        @click="handleMenuClick(item)"
      >
        <UIcon 
          :name="item.icon" 
          :class="[
            'w-5 h-5 transition-colors',
            item.active ? 'text-blue-600' : 'text-gray-500'
          ]"
        />
        <span 
          :class="[
            'font-medium transition-colors',
            item.active ? 'text-blue-700' : 'text-gray-700'
          ]"
        >
          {{ item.label }}
        </span>
      </div>
    </nav>

    <!-- User Section at Bottom -->
    <div class="absolute bottom-0 left-0 right-0 p-4 border-t border-gray-200 bg-gray-50">
      <div class="flex items-center space-x-3 p-3 rounded-lg hover:bg-white transition-colors cursor-pointer">
        <UAvatar size="sm" src="https://i.pravatar.cc/40" alt="HR User" />
        <div class="flex-1 min-w-0">
          <p class="text-sm font-medium text-gray-900 truncate">HR Manager</p>
          <p class="text-xs text-gray-500 truncate">hr@traspac.co.id</p>
        </div>
        <UIcon name="i-heroicons-ellipsis-vertical" class="w-4 h-4 text-gray-400" />
      </div>
    </div>
  </div>

  <!-- Overlay for mobile -->
  <div
    v-if="isOpen"
    class="fixed inset-0 z-30 bg-black bg-opacity-50 md:hidden"
    @click="$emit('close')"
  />
</template>

<script setup lang="ts">
interface MenuItem {
  label: string
  icon: string
  route: string
  active?: boolean
}

interface Props {
  isOpen: boolean
  currentRoute?: string
}

const props = withDefaults(defineProps<Props>(), {
  isOpen: false,
  currentRoute: '/human-resources/dashboard'
})

const emit = defineEmits<{
  close: []
  navigate: [route: string]
}>()

const menuItems = ref<MenuItem[]>([
  {
    label: 'Dashboard',
    icon: 'i-heroicons-squares-2x2',
    route: '/human-resources/dashboard'
  },
  {
    label: 'Job Positions',
    icon: 'i-heroicons-briefcase',
    route: '/human-resources/jobs'
  },
  {
    label: 'Candidates',
    icon: 'i-heroicons-users',
    route: '/human-resources/candidates'
  },
  {
    label: 'Interviews',
    icon: 'i-heroicons-calendar-days',
    route: '/human-resources/interviews'
  },
  {
    label: 'Reports',
    icon: 'i-heroicons-document-chart-bar',
    route: '/human-resources/reports'
  },
  {
    label: 'Settings',
    icon: 'i-heroicons-cog-6-tooth',
    route: '/human-resources/settings'
  }
])

// Set active menu based on current route
watch(() => props.currentRoute, (newRoute) => {
  menuItems.value.forEach(item => {
    item.active = item.route === newRoute
  })
}, { immediate: true })

const handleMenuClick = (item: MenuItem) => {
  // Update active state
  menuItems.value.forEach(menuItem => {
    menuItem.active = false
  })
  item.active = true

  // Emit navigation event
  emit('navigate', item.route)
  
  // Close sidebar on mobile
  emit('close')
  
  // Navigate
  navigateTo(item.route)
}
</script>
