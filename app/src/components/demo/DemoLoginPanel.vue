<template>
  <div class="fixed bottom-4 right-4 z-50" v-if="showDemoPanel">
    <UCard class="w-80 shadow-xl border-2 border-primary/20">
      <template #header>
        <div class="flex items-center justify-between">
          <h3 class="text-lg font-bold text-primary">🎭 Demo Login Panel</h3>
          <UButton
            icon="i-heroicons-x-mark"
            color="neutral"
            variant="ghost"
            size="sm"
            @click="closeDemoPanel"
          />
        </div>
      </template>
      
      <div class="space-y-4">
        <p class="text-sm text-gray-600">
          Quick login untuk demo semua role
        </p>
        
        <!-- Demo Login Buttons -->
        <div class="space-y-3">
          <UButton
            block
            color="error"
            variant="soft"
            :loading="loading === 'admin'"
            @click="quickLogin('admin')"
          >
            <UIcon name="i-heroicons-shield-check" class="mr-2" />
            Login as Admin
          </UButton>
          
          <UButton
            block
            color="success"
            variant="soft"
            :loading="loading === 'hr'"
            @click="quickLogin('hr')"
          >
            <UIcon name="i-heroicons-users" class="mr-2" />
            Login as HR Manager
          </UButton>
          
          <UButton
            block
            color="warning"
            variant="soft"
            :loading="loading === 'interviewer'"
            @click="quickLogin('interviewer')"
          >
            <UIcon name="i-heroicons-chat-bubble-left-right" class="mr-2" />
            Login as Interviewer
          </UButton>
          
          <UButton
            block
            color="info"
            variant="soft"
            :loading="loading === 'pelamar'"
            @click="quickLogin('pelamar')"
          >
            <UIcon name="i-heroicons-user" class="mr-2" />
            Login as Pelamar
          </UButton>
        </div>
        
        <!-- Current User Info -->
        <div v-if="authStore.isAuthenticated" class="pt-4 border-t border-gray-200">
          <p class="text-sm font-medium text-gray-900">Current User:</p>
          <div class="flex items-center space-x-2 mt-2">
            <UAvatar
              :src="authStore.user?.avatar"
              :alt="authStore.user?.name"
              size="sm"
            />
            <div class="text-sm">
              <p class="font-medium">{{ authStore.user?.name }}</p>
              <p class="text-gray-500">{{ authStore.user?.role_name }}</p>
            </div>
          </div>
          
          <UButton
            block
            color="neutral"
            variant="outline"
            size="sm"
            class="mt-3"
            @click="handleLogout"
            :loading="loading === 'logout'"
          >
            <UIcon name="i-heroicons-arrow-right-on-rectangle" class="mr-2" />
            Logout
          </UButton>
        </div>
        
        <!-- Demo Credentials Info -->
        <UCard variant="soft" class="mt-4">
          <template #header>
            <div class="flex items-center space-x-2">
              <UIcon name="i-heroicons-key" class="w-4 h-4" />
              <span class="text-sm font-medium">Demo Credentials</span>
            </div>
          </template>
          
          <div class="space-y-2 text-xs">
            <div>
              <strong>Admin:</strong><br>
              admin@traspac.co.id / admin123
            </div>
            <div>
              <strong>HR Manager:</strong><br>
              hr@traspac.co.id / hr123
            </div>
            <div>
              <strong>Interviewer:</strong><br>
              interviewer1@traspac.co.id / interviewer123
            </div>
            <div>
              <strong>Pelamar:</strong><br>
              pelamar1@gmail.com / pelamar123
            </div>
          </div>
        </UCard>
      </div>
    </UCard>
  </div>
  
  <!-- Floating Toggle Button -->
  <UButton
    v-if="!showDemoPanel"
    class="fixed bottom-4 right-4 z-50 shadow-lg"
    color="primary"
    size="lg"
    @click="showDemoPanel = true"
    icon="i-heroicons-play"
  >
    Demo Login
  </UButton>
</template>

<script setup lang="ts">
import { DEMO_CREDENTIALS } from '~/config/mock-users';

const authStore = useAuthStore();
const router = useRouter();
const toast = useToast();

const showDemoPanel = ref(false);
const loading = ref<string | null>(null);

// Hide demo panel di production (optional)
// const { isSlicingMode } = useAppMode();
// if (!isSlicingMode()) showDemoPanel.value = false;

const quickLogin = async (role: keyof typeof DEMO_CREDENTIALS) => {
  loading.value = role;
  
  try {
    const credentials = DEMO_CREDENTIALS[role];
    const response = await authStore.login(credentials);
    
    if (response.status) {
      toast.add({
        title: 'Login Berhasil!',
        description: `Selamat datang, ${response.data?.name}`,
        color: 'success'
      });
      
      // Redirect based on role
      const redirectPaths = {
        admin: '/admin/portal-menu',
        hr: '/human-resources', 
        interviewer: '/interviewers',
        pelamar: '/pelamar'
      };
      
      await router.push(redirectPaths[role]);
      showDemoPanel.value = false;
    } else {
      throw new Error(response.message);
    }
  } catch (error) {
    toast.add({
      title: 'Login Gagal',
      description: error.message,
      color: 'error'
    });
  } finally {
    loading.value = null;
  }
};

const handleLogout = async () => {
  loading.value = 'logout';
  
  try {
    await authStore.logout();
    toast.add({
      title: 'Logout Berhasil',
      description: 'Anda telah keluar dari sistem',
      color: 'success'
    });
  } catch (error) {
    toast.add({
      title: 'Logout Gagal',
      description: error.message,
      color: 'error'
    });
  } finally {
    loading.value = null;
  }
};

const closeDemoPanel = () => {
  showDemoPanel.value = false;
};

// Auto-close saat user sudah login dan navigate
watch(() => authStore.isAuthenticated, (isAuth) => {
  if (isAuth) {
    setTimeout(() => {
      showDemoPanel.value = false;
    }, 2000);
  }
});
</script>

<style scoped>
/* Custom styling jika diperlukan */
</style>
