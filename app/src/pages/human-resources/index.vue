<template>
    <Header/>
  <div class="min-h-screen bg-gray-50 font-sans text-gray-800 dark:bg-gray-900">

    <!-- Konten Utama -->
    <div class="mx-auto max-w-7xl px-4 py-6 sm:px-6 lg:px-8">
      <!-- Ikhtisar Statistik -->
      <div class="mb-6 grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-4">
        <!-- Kartu Statistik -->
        <UCard>
          <div class="flex items-center justify-between">
            <div>
              <p class="text-sm text-gray-500 dark:text-gray-400">Total Candidates</p>
              <h3 class="text-2xl font-semibold text-gray-800 dark:text-white">142</h3>
            </div>
            <div class="rounded-lg bg-blue-100 p-3 text-blue-600 dark:bg-blue-900/50 dark:text-blue-400">
              <UIcon name="i-heroicons-users" class="h-6 w-6" />
            </div>
          </div>
          <p class="mt-2 text-xs font-medium text-green-600 dark:text-green-400">+12% from last month</p>
        </UCard>
        <UCard>
          <div class="flex items-center justify-between">
            <div>
              <p class="text-sm text-gray-500 dark:text-gray-400">Open Positions</p>
              <h3 class="text-2xl font-semibold text-gray-800 dark:text-white">24</h3>
            </div>
            <div class="rounded-lg bg-green-100 p-3 text-green-600 dark:bg-green-900/50 dark:text-green-400">
              <UIcon name="i-heroicons-briefcase" class="h-6 w-6" />
            </div>
          </div>
          <p class="mt-2 text-xs font-medium text-red-600 dark:text-red-400">-3 from last week</p>
        </UCard>
        <UCard>
          <div class="flex items-center justify-between">
            <div>
              <p class="text-sm text-gray-500 dark:text-gray-400">Interviews Today</p>
              <h3 class="text-2xl font-semibold text-gray-800 dark:text-white">7</h3>
            </div>
            <div class="rounded-lg bg-yellow-100 p-3 text-yellow-600 dark:bg-yellow-900/50 dark:text-yellow-400">
              <UIcon name="i-heroicons-calendar-days" class="h-6 w-6" />
            </div>
          </div>
          <p class="mt-2 text-xs font-medium text-gray-500 dark:text-gray-400">2 completed</p>
        </UCard>
        <UCard>
          <div class="flex items-center justify-between">
            <div>
              <p class="text-sm text-gray-500 dark:text-gray-400">Hiring Rate</p>
              <h3 class="text-2xl font-semibold text-gray-800 dark:text-white">68%</h3>
            </div>
            <div class="rounded-lg bg-purple-100 p-3 text-purple-600 dark:bg-purple-900/50 dark:text-purple-400">
              <UIcon name="i-heroicons-chart-bar" class="h-6 w-6" />
            </div>
          </div>
          <p class="mt-2 text-xs font-medium text-green-600 dark:text-green-400">+5% from last quarter</p>
        </UCard>
      </div>

      <!-- Filter dan Pencarian -->
      <UCard :ui="{ body: { padding: 'p-4' } }">
        <div class="flex flex-wrap items-center justify-between gap-4">
          <div class="flex flex-wrap items-center gap-2">
             <UButton label="All Candidates" />
             <UButton label="Screening" variant="outline" />
             <UButton label="Interview" variant="outline" />
             <UButton label="Offer" variant="outline" />
             <UButton label="Hired" variant="outline" />
          </div>
          <div class="flex items-center gap-2">
            <UInput icon="i-heroicons-magnifying-glass" placeholder="Search candidates..." />
            <UPopover>
              <UButton icon="i-heroicons-funnel" label="Filters" color="gray" />
              <template #panel>
                <div class="p-4">
                  <div class="space-y-4">
                    <div>
                      <label class="mb-1 block text-sm font-medium text-gray-700 dark:text-gray-200">Position</label>
                      <USelect :options="['All Positions', 'Frontend Developer']" />
                    </div>
                     <div>
                      <label class="mb-1 block text-sm font-medium text-gray-700 dark:text-gray-200">Department</label>
                      <USelect :options="['All Departments', 'Engineering']" />
                    </div>
                     <div>
                      <label class="mb-1 block text-sm font-medium text-gray-700 dark:text-gray-200">Date Applied</label>
                      <USelect :options="['Any Time', 'Last 7 days']" />
                    </div>
                    <div class="flex justify-end gap-2">
                        <UButton label="Reset" variant="ghost" color="gray" />
                        <UButton label="Apply" />
                    </div>
                  </div>
                </div>
              </template>
            </UPopover>
          </div>
        </div>
      </UCard>

      <div class="mt-6 grid grid-cols-1 gap-6 lg:grid-cols-3">
        <!-- Pipeline Rekrutmen -->
        <div class="lg:col-span-2">
          <UCard>
            <template #header>
              <div class="flex items-center justify-between">
                <h2 class="text-lg font-semibold text-gray-800 dark:text-white">Recruitment Pipeline</h2>
                <div class="flex items-center space-x-2">
                  <UButton @click="activeView = 'card'" :variant="activeView === 'card' ? 'solid' : 'outline'" icon="i-heroicons-view-squares-2x2" label="Card" />
                  <UButton @click="activeView = 'table'" :variant="activeView === 'table' ? 'solid' : 'outline'" icon="i-heroicons-table-cells" label="Table" />
                </div>
              </div>
            </template>

            <!-- Tampilan Kartu -->
            <div v-if="activeView === 'card'" class="grid grid-cols-1 gap-4 md:grid-cols-3">
              <!-- Kolom Pipeline -->
              <div v-for="stage in pipeline" :key="stage.name" class="min-h-[400px] rounded-lg bg-gray-50 p-3 dark:bg-gray-800/50">
                <div class="mb-3 flex items-center justify-between">
                  <h3 class="text-sm font-medium text-gray-700 dark:text-gray-200">{{ stage.name }}</h3>
                  <UBadge :color="stage.color" variant="subtle">{{ stage.count }}</UBadge>
                </div>
                <div class="space-y-3">
                  <UCard v-for="candidate in stage.candidates" :key="candidate.name" :ui="{ body: { padding: 'p-3' }, ring: `ring-1 ring-inset ring-${stage.color}-400` }">
                     <div class="flex items-start justify-between">
                      <div>
                        <h4 class="text-sm font-medium text-gray-800 dark:text-white">{{ candidate.name }}</h4>
                        <p class="text-xs text-gray-500 dark:text-gray-400">{{ candidate.role }}</p>
                      </div>
                      <span class="text-xs text-gray-500 dark:text-gray-400">{{ candidate.time }}</span>
                    </div>
                    <div class="mt-2 flex items-center justify-between">
                      <UBadge :color="candidate.statusColor" variant="soft">{{ candidate.status }}</UBadge>
                      <UButton :label="candidate.action" variant="link" size="xs" />
                    </div>
                  </UCard>
                </div>
              </div>
            </div>

            <!-- Tampilan Tabel -->
            <div v-if="activeView === 'table'">
                <UTable :rows="tableCandidates" :columns="tableColumns">
                    <template #candidate-data="{ row }">
                        <div class="flex items-center">
                            <UAvatar :alt="row.name.substring(0,2)" size="sm" />
                            <div class="ml-3">
                                <p class="text-sm font-medium text-gray-900 dark:text-white">{{ row.name }}</p>
                                <p class="text-sm text-gray-500 dark:text-gray-400">{{ row.email }}</p>
                            </div>
                        </div>
                    </template>
                    <template #stage-data="{ row }">
                        <UBadge :color="row.stageColor" variant="soft">{{ row.stage }}</UBadge>
                    </template>
                    <template #actions-data="{ row }">
                        <UButton variant="ghost" color="gray" icon="i-heroicons-pencil-square" />
                        <UButton variant="ghost" color="gray" icon="i-heroicons-chevron-right" />
                    </template>
                </UTable>
            </div>
          </UCard>
        </div>

        <!-- Sidebar Kanan -->
        <div class="space-y-6 lg:col-span-1">
            <UCard>
                <template #header>
                    <h2 class="text-lg font-semibold text-gray-800 dark:text-white">Open Positions</h2>
                </template>
                <div class="space-y-3">
                    <div class="flex items-center justify-between">
                        <div>
                            <h3 class="text-sm font-medium text-gray-800 dark:text-white">Senior Frontend Dev</h3>
                            <p class="text-xs text-gray-500 dark:text-gray-400">Engineering • 5 applicants</p>
                        </div>
                        <UBadge color="green" variant="subtle">Active</UBadge>
                    </div>
                    <UButton @click="isCreatePositionModalVisible = true" icon="i-heroicons-plus" label="Create New Position" block class="mt-3" />
                </div>
            </UCard>
            <UCard>
                <template #header>
                    <h2 class="text-lg font-semibold text-gray-800 dark:text-white">Q2 Hiring Goals</h2>
                </template>
                <div class="space-y-4">
                    <div>
                        <div class="mb-1 flex justify-between text-sm">
                            <span class="text-gray-700 dark:text-gray-200">Engineering</span>
                            <span class="font-medium text-gray-800 dark:text-white">8/12</span>
                        </div>
                        <UProgress model-value="8" max="12" />
                    </div>
                    <div>
                        <div class="mb-1 flex justify-between text-sm">
                            <span class="text-gray-700 dark:text-gray-200">Product</span>
                            <span class="font-medium text-gray-800 dark:text-white">3/5</span>
                        </div>
                        <UProgress model-value="3"  max="5" color="green" />
                    </div>
                </div>
            </UCard>
        </div>
      </div>
    </div>
  </div>

  <!-- Modal Buat Posisi -->
  <!-- <UModal v-model="isCreatePositionModalVisible">
    <UCard>
      <template #header>
        <div class="flex items-center justify-between">
          <h3 class="text-lg font-semibold">Create New Position</h3>
          <UButton color="gray" variant="ghost" icon="i-heroicons-x-mark-20-solid" @click="isCreatePositionModalVisible = false" />
        </div>
      </template>
      <p class="text-sm text-gray-500">Form to create a new position goes here.</p>
       <template #footer>
        <div class="flex justify-end gap-2">
            <UButton label="Cancel" color="gray" @click="isCreatePositionModalVisible = false" />
            <UButton label="Create" @click="isCreatePositionModalVisible = false" />
        </div>
      </template>
    </UCard>
  </UModal> -->
  
  <!-- Modal Jadwalkan Wawancara -->
  <!-- <UModal v-model="isScheduleInterviewModalVisible">
     <UCard>
      <template #header>
        <div class="flex items-center justify-between">
          <h3 class="text-lg font-semibold">Schedule Interview</h3>
          <UButton color="gray" variant="ghost" icon="i-heroicons-x-mark-20-solid" @click="isScheduleInterviewModalVisible = false" />
        </div>
      </template>
      <p class="text-sm text-gray-500">Form to schedule an interview goes here.</p>
       <template #footer>
        <div class="flex justify-end gap-2">
            <UButton label="Cancel" color="gray" @click="isScheduleInterviewModalVisible = false" />
            <UButton label="Schedule" @click="isScheduleInterviewModalVisible = false" />
        </div>
      </template>
    </UCard>
  </UModal> -->
</template>

<script setup>
import { ref } from 'vue';

definePageMeta({
  title: "HR Dashboard",
});

// State untuk mengontrol tampilan aktif (kartu atau tabel)
const activeView = ref('card');

// State untuk mengontrol visibilitas modal
const isCreatePositionModalVisible = ref(false);
const isScheduleInterviewModalVisible = ref(false);

// Data dummy untuk pipeline kartu
const pipeline = ref([
  { 
    name: 'Screening', 
    count: 28, 
    color: 'blue',
    candidates: [
      { name: 'Taylor Wilson', role: 'Frontend Dev', time: '5d ago', status: 'Pending', statusColor: 'yellow', action: 'Schedule' },
      { name: 'Casey Lee', role: 'Product Manager', time: '3d ago', status: 'Scheduled', statusColor: 'green', action: 'Details' }
    ]
  },
  { 
    name: 'Interview', 
    count: 15, 
    color: 'purple',
    candidates: [
      { name: 'Jordan Park', role: 'Backend Eng', time: 'Today', status: '2:00 PM', statusColor: 'blue', action: 'Feedback' }
    ]
  },
  { 
    name: 'Offer', 
    count: 5, 
    color: 'green',
    candidates: [
      { name: 'Morgan Taylor', role: 'DevOps Eng', time: '2d ago', status: 'Pending', statusColor: 'yellow', action: 'Send Offer' }
    ]
  }
]);

// Data dummy dan kolom untuk tabel
const tableColumns = [
    { key: 'candidate', label: 'Candidate' },
    { key: 'position', label: 'Position' },
    { key: 'stage', label: 'Stage' },
    { key: 'lastUpdate', label: 'Last Update' },
    { key: 'actions', label: 'Actions' }
];

const tableCandidates = [
    { 
        name: 'Taylor Wilson', 
        email: 'taylor.w@example.com', 
        position: 'Frontend Developer', 
        stage: 'Screening', 
        stageColor: 'blue',
        lastUpdate: '1 day ago' 
    },
    { 
        name: 'Jordan Park', 
        email: 'jordan.p@example.com', 
        position: 'Backend Engineer', 
        stage: 'Interview', 
        stageColor: 'purple',
        lastUpdate: 'Today, 2:00 PM' 
    }
];
</script>
