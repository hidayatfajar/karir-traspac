<template>
  <div class="space-y-6">
    <!-- Header Section -->
    <div class="flex justify-between items-center">
      <div>
        <h1 class="text-2xl font-bold text-gray-900">Job Positions</h1>
        <p class="text-gray-600">Manage all job openings and requirements</p>
      </div>
      <UButton color="primary" @click="showCreateModal = true">
        <UIcon name="i-heroicons-plus" class="mr-2" />
        Create New Job
      </UButton>
    </div>

    <!-- Filters -->
    <UCard class="p-4">
      <div class="grid grid-cols-1 md:grid-cols-4 gap-4">
        <UInput
          v-model="filters.search"
          placeholder="Search jobs..."
          icon="i-heroicons-magnifying-glass"
        />
        <USelect
          v-model="filters.status"
          :options="statusOptions"
          placeholder="All Status"
        />
        <USelect
          v-model="filters.department"
          :options="departmentOptions"
          placeholder="All Departments"
        />
        <USelect
          v-model="filters.type"
          :options="typeOptions"
          placeholder="All Types"
        />
      </div>
    </UCard>

    <!-- Jobs List -->
    <div class="grid gap-6">
      <UCard 
        v-for="job in filteredJobs" 
        :key="job.id"
        class="hover:shadow-md transition-shadow"
      >
        <div class="flex justify-between items-start">
          <div class="flex-1">
            <div class="flex items-center space-x-3 mb-2">
              <h3 class="text-lg font-semibold text-gray-900">{{ job.title }}</h3>
              <UBadge 
                :color="getStatusColor(job.status)"
                variant="subtle"
              >
                {{ job.status }}
              </UBadge>
            </div>
            
            <div class="flex items-center space-x-6 text-sm text-gray-500 mb-4">
              <div class="flex items-center">
                <UIcon name="i-heroicons-building-office" class="mr-1" />
                {{ job.department }}
              </div>
              <div class="flex items-center">
                <UIcon name="i-heroicons-map-pin" class="mr-1" />
                {{ job.location }}
              </div>
              <div class="flex items-center">
                <UIcon name="i-heroicons-briefcase" class="mr-1" />
                {{ job.type }}
              </div>
              <div class="flex items-center">
                <UIcon name="i-heroicons-users" class="mr-1" />
                {{ job.applicants }} applicants
              </div>
            </div>

            <p class="text-gray-600 mb-4 line-clamp-2">{{ job.description }}</p>

            <div class="flex items-center justify-between">
              <div class="text-sm text-gray-500">
                Posted {{ job.postedDate }}
              </div>
              <div class="flex space-x-2">
                <UButton variant="ghost" size="sm" @click="viewJob(job)">
                  View Details
                </UButton>
                <UButton variant="ghost" size="sm" @click="editJob(job)">
                  Edit
                </UButton>
                <UDropdown :items="jobActions(job)">
                  <UButton variant="ghost" size="sm">
                    <UIcon name="i-heroicons-ellipsis-horizontal" />
                  </UButton>
                </UDropdown>
              </div>
            </div>
          </div>
        </div>
      </UCard>
    </div>

    <!-- Empty State -->
    <div v-if="filteredJobs.length === 0" class="text-center py-12">
      <UIcon name="i-heroicons-briefcase" class="mx-auto h-12 w-12 text-gray-400" />
      <h3 class="mt-2 text-sm font-medium text-gray-900">No jobs found</h3>
      <p class="mt-1 text-sm text-gray-500">Get started by creating a new job position.</p>
      <UButton class="mt-6" @click="showCreateModal = true">
        <UIcon name="i-heroicons-plus" class="mr-2" />
        Create New Job
      </UButton>
    </div>
  </div>
</template>

<script setup lang="ts">
interface Job {
  id: number
  title: string
  department: string
  location: string
  type: string
  status: 'Active' | 'Draft' | 'Closed'
  applicants: number
  description: string
  postedDate: string
}

const showCreateModal = ref(false)

const filters = ref({
  search: '',
  status: '',
  department: '',
  type: ''
})

const statusOptions = [
  { label: 'Active', value: 'Active' },
  { label: 'Draft', value: 'Draft' },
  { label: 'Closed', value: 'Closed' }
]

const departmentOptions = [
  { label: 'Engineering', value: 'Engineering' },
  { label: 'Design', value: 'Design' },
  { label: 'Marketing', value: 'Marketing' },
  { label: 'Sales', value: 'Sales' }
]

const typeOptions = [
  { label: 'Full-time', value: 'Full-time' },
  { label: 'Part-time', value: 'Part-time' },
  { label: 'Contract', value: 'Contract' },
  { label: 'Internship', value: 'Internship' }
]

const jobs = ref<Job[]>([
  {
    id: 1,
    title: 'Senior Frontend Developer',
    department: 'Engineering',
    location: 'Jakarta, Indonesia',
    type: 'Full-time',
    status: 'Active',
    applicants: 24,
    description: 'We are looking for a Senior Frontend Developer to join our team. You will be responsible for building user interfaces and ensuring great user experience.',
    postedDate: '2 days ago'
  },
  {
    id: 2,
    title: 'UX/UI Designer',
    department: 'Design',
    location: 'Remote',
    type: 'Full-time',
    status: 'Active',
    applicants: 18,
    description: 'Join our design team to create beautiful and intuitive user experiences. We need someone passionate about user-centered design.',
    postedDate: '1 week ago'
  },
  {
    id: 3,
    title: 'Marketing Specialist',
    department: 'Marketing',
    location: 'Surabaya, Indonesia',
    type: 'Full-time',
    status: 'Draft',
    applicants: 0,
    description: 'Help us grow our brand presence and drive customer acquisition through various marketing channels.',
    postedDate: 'Draft'
  }
])

const filteredJobs = computed(() => {
  return jobs.value.filter(job => {
    const matchesSearch = job.title.toLowerCase().includes(filters.value.search.toLowerCase()) ||
                         job.department.toLowerCase().includes(filters.value.search.toLowerCase())
    const matchesStatus = !filters.value.status || job.status === filters.value.status
    const matchesDepartment = !filters.value.department || job.department === filters.value.department
    const matchesType = !filters.value.type || job.type === filters.value.type
    
    return matchesSearch && matchesStatus && matchesDepartment && matchesType
  })
})

const getStatusColor = (status: string) => {
  const colors = {
    'Active': 'green',
    'Draft': 'yellow',
    'Closed': 'red'
  }
  return colors[status as keyof typeof colors] || 'gray'
}

const viewJob = (job: Job) => {
  navigateTo(`/human-resources/jobs/${job.id}`)
}

const editJob = (job: Job) => {
  navigateTo(`/human-resources/jobs/${job.id}/edit`)
}

const jobActions = (job: Job) => [
  [{
    label: 'View Applications',
    icon: 'i-heroicons-eye',
    click: () => navigateTo(`/human-resources/jobs/${job.id}/applications`)
  }],
  [{
    label: 'Duplicate',
    icon: 'i-heroicons-document-duplicate',
    click: () => console.log('Duplicate job', job.id)
  }],
  [{
    label: 'Archive',
    icon: 'i-heroicons-archive-box',
    click: () => console.log('Archive job', job.id)
  }]
]
</script>
