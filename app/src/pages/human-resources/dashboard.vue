<template>
  <div class="space-y-6">
    <!-- Dashboard Header -->
    <div>
      <h1 class="text-2xl font-bold text-gray-900">HR Dashboard</h1>
      <p class="text-gray-600">
        Welcome back! Here's what's happening with your recruitment.
      </p>
    </div>

    <!-- Stats Cards -->
    <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
      <UCard class="p-6">
        <div class="flex items-center">
          <div class="flex-shrink-0">
            <div
              class="w-8 h-8 bg-blue-100 rounded-lg flex items-center justify-center"
            >
              <UIcon
                name="i-heroicons-briefcase"
                class="w-5 h-5 text-blue-600"
              />
            </div>
          </div>
          <div class="ml-4">
            <p class="text-sm font-medium text-gray-500">Active Jobs</p>
            <p class="text-2xl font-bold text-gray-900">12</p>
          </div>
        </div>
      </UCard>

      <UCard class="p-6">
        <div class="flex items-center">
          <div class="flex-shrink-0">
            <div
              class="w-8 h-8 bg-green-100 rounded-lg flex items-center justify-center"
            >
              <UIcon name="i-heroicons-users" class="w-5 h-5 text-green-600" />
            </div>
          </div>
          <div class="ml-4">
            <p class="text-sm font-medium text-gray-500">Total Candidates</p>
            <p class="text-2xl font-bold text-gray-900">248</p>
          </div>
        </div>
      </UCard>

      <UCard class="p-6">
        <div class="flex items-center">
          <div class="flex-shrink-0">
            <div
              class="w-8 h-8 bg-yellow-100 rounded-lg flex items-center justify-center"
            >
              <UIcon
                name="i-heroicons-calendar-days"
                class="w-5 h-5 text-yellow-600"
              />
            </div>
          </div>
          <div class="ml-4">
            <p class="text-sm font-medium text-gray-500">Interviews Today</p>
            <p class="text-2xl font-bold text-gray-900">8</p>
          </div>
        </div>
      </UCard>

      <UCard class="p-6">
        <div class="flex items-center">
          <div class="flex-shrink-0">
            <div
              class="w-8 h-8 bg-purple-100 rounded-lg flex items-center justify-center"
            >
              <UIcon
                name="i-heroicons-chart-bar"
                class="w-5 h-5 text-purple-600"
              />
            </div>
          </div>
          <div class="ml-4">
            <p class="text-sm font-medium text-gray-500">Hired This Month</p>
            <p class="text-2xl font-bold text-gray-900">15</p>
          </div>
        </div>
      </UCard>
    </div>

    <!-- Recent Activity -->
    <div class="grid grid-cols-1 lg:grid-cols-2 gap-6">
      <UCard>
        <template #header>
          <h3 class="text-lg font-semibold">Recent Applications</h3>
        </template>

        <div class="space-y-4">
          <div
            v-for="application in recentApplications"
            :key="application.id"
            class="flex items-center space-x-4"
          >
            <UAvatar
              :src="application.avatar"
              :alt="application.name"
              size="sm"
            />
            <div class="flex-1 min-w-0">
              <p class="text-sm font-medium text-gray-900 truncate">
                {{ application.name }}
              </p>
              <p class="text-sm text-gray-500 truncate">
                {{ application.position }}
              </p>
            </div>
            <div class="text-sm text-gray-500">{{ application.time }}</div>
          </div>
        </div>
      </UCard>

      <UCard>
        <template #header>
          <h3 class="text-lg font-semibold">Upcoming Interviews</h3>
        </template>

        <div class="space-y-4">
          <div
            v-for="interview in upcomingInterviews"
            :key="interview.id"
            class="flex items-center space-x-4"
          >
            <div class="flex-shrink-0">
              <div
                class="w-10 h-10 bg-blue-100 rounded-lg flex items-center justify-center"
              >
                <UIcon
                  name="i-heroicons-video-camera"
                  class="w-5 h-5 text-blue-600"
                />
              </div>
            </div>
            <div class="flex-1 min-w-0">
              <p class="text-sm font-medium text-gray-900 truncate">
                {{ interview.candidate }}
              </p>
              <p class="text-sm text-gray-500 truncate">
                {{ interview.position }}
              </p>
            </div>
            <div class="text-sm text-gray-500">{{ interview.time }}</div>
          </div>
        </div>
      </UCard>
    </div>
  </div>
</template>

<script setup lang="ts">
const recentApplications = ref([
  {
    id: 1,
    name: "John Doe",
    position: "Frontend Developer",
    time: "2 min ago",
    avatar: "https://i.pravatar.cc/150?img=1",
  },
  {
    id: 2,
    name: "Jane Smith",
    position: "UX Designer",
    time: "1 hour ago",
    avatar: "https://i.pravatar.cc/150?img=2",
  },
  {
    id: 3,
    name: "Mike Johnson",
    position: "Backend Developer",
    time: "3 hours ago",
    avatar: "https://i.pravatar.cc/150?img=3",
  },
]);

const upcomingInterviews = ref([
  {
    id: 1,
    candidate: "Sarah Wilson",
    position: "Product Manager",
    time: "10:00 AM",
  },
  {
    id: 2,
    candidate: "David Brown",
    position: "DevOps Engineer",
    time: "2:00 PM",
  },
  {
    id: 3,
    candidate: "Lisa Davis",
    position: "Marketing Specialist",
    time: "4:30 PM",
  },
]);
</script>
