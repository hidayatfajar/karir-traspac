<template>
  <div>
    <!-- Header -->
    <header
      class="sticky top-0 w-full bg-white/80 backdrop-blur-lg z-50 border-b border-slate-200/80"
    >
      <div class="max-w-7xl mx-auto">
        <nav class="px-6 py-4">
          <div class="flex items-center justify-between">
            <div class="flex items-center">
              <img
                src="~/assets/images/logo/logo-kt.png"
                alt="Karir Traspac"
                class="w-32 object-contain mx-auto cursor-pointer"
                @click="navigateHome"
              />
            </div>
            <div class="hidden lg:flex items-center space-x-2">
              <UButton
                v-for="link in navLinks"
                :key="link.to"
                :label="link.label"
                @click="$router.push(link.to)"
                :class="[
                  'w-full',
                  route.path === link.to
                    ? 'border-b-3 border-primary rounded-b-none'
                    : '',
                ]"
                color="neutral"
                variant="ghost"
                size="lg"
              />
              <UButton
                v-if="isAuthenticated"
                label="Dashboard"
                @click="$router.push('/pelamar')"
                :class="[
                  'w-full',
                  route.path === '/pelamar'
                    ? 'border-b-3 border-primary rounded-b-none'
                    : '',
                ]"
                color="neutral"
                variant="ghost"
                size="lg"
              />

              <UButton
                v-if="!isAuthenticated"
                label="Login"
                @click="$router.push('/auth/login')"
                size="lg"
                class="border border-neutral-200 hover:border-neutral-300 px-8 rounded-2xl"
                color="primary"
              />
            </div>
            <div class="lg:hidden flex">
              <UButton
                icon="i-mdi-menu"
                color="neutral"
                variant="ghost"
                @click="isMobileMenuOpen = true"
              />
            </div>
            <!-- Mobile Menu Slideover -->
            <USlideover v-model:open="isMobileMenuOpen">
              <template #title> </template>
              <template #content>
                <UCard class="flex flex-col flex-1 lg:hidden px-2">
                  <div class="flex items-center justify-between mb-4">
                    <img
                      src="~/assets/images/logo/logo-kt.png"
                      alt="Karir Traspac"
                      class="w-32 object-contain cursor-pointer"
                      @click="navigateHome"
                    />
                    <UButton
                      color="neutral"
                      variant="ghost"
                      icon="i-mdi-close"
                      class="-my-1"
                      @click="isMobileMenuOpen = false"
                    />
                  </div>
                  <div
                    v-if="!isAuthenticated"
                    class="flex flex-col items-center justify-center h-full gap-4"
                  >
                    <UButton
                      v-for="link in navLinks"
                      :key="link.to"
                      :label="link.label"
                      @click="handleMobileNavigation(link.to)"
                      :class="[
                        'w-fit',
                        route.path === link.to
                          ? 'border-b-2 border-primary rounded-b-none'
                          : '',
                      ]"
                      color="neutral"
                      variant="ghost"
                      size="xl"
                    />
                    <UDivider class="my-4" />
                    <UButton
                      label="Login"
                      @click="$router.push('/auth/login')"
                      color="neutral"
                      variant="outline"
                      size="xl"
                      block
                    />
                    <UButton
                      label="Daftar"
                      @click="$router.push('/auth/register')"
                      size="xl"
                      block
                    />
                  </div>
                  <div v-if="isAuthenticated">
                    <UButton
                      label="Dashboard"
                      @click="navigateToDashboard"
                      color="neutral"
                      variant="outline"
                      size="xl"
                      block
                    />
                  </div>
                </UCard>
              </template>
            </USlideover>
          </div>
        </nav>
      </div>
    </header>
  </div>
</template>

<script setup lang="ts">
import { useAuthStore } from "~/store";
import { isSlicingMode } from "~/config/app-mode";

const route = useRoute();
const router = useRouter();
const store = useAuthStore();
const fullWidth = ref(false);
const showForm = ref(false);
const loading = ref(false);

// Dalam slicing mode, anggap semua user sebagai authenticated untuk testing UI
const isAuthenticated = computed(() => {
  return isSlicingMode() ? true : store.isAuthenticated;
});

const items = [
  [
    {
      id: 0,
      label: "Profil",
      icon: "line-md:person",
      onSelect: () => {
        router.push("/profile");
      },
    },
    {
      id: 3,
      label: "Ubah Kata Sandi",
      icon: "mdi:password-outline",
      onSelect: () => {
        showForm.value = true;
      },
    },
    {
      id: 1,
      label: "Sign out",
      icon: "line-md:logout",
      onSelect: () => {
        setLogout();
      },
    },
  ],
];

const setLogout = async () => {
  loading.value = true;
  setTimeout(async () => {
    await store.logout();
    loading.value = false;
  }, 2000);
};

const isMobileMenuOpen = ref(false);

const navLinks = [
  {
    label: "Beranda",
    to: "/",
  },
  {
    label: "Lowongan",
    to: "/lowongan",
  },
  {
    label: "FAQ",
    to: "/faq",
  },
];

// Fungsi untuk navigasi yang aman
const navigateHome = () => {
  if (route.path !== "/") {
    router.push("/");
  } else {
    // Jika sudah di home, scroll ke top
    window.scrollTo({ top: 0, behavior: "smooth" });
  }
};

const handleMobileNavigation = (target: string) => {
  isMobileMenuOpen.value = false;
  router.push(target);
};

const scrollToSection = (target: string) => {
  try {
    const element = document.querySelector(target);
    if (element) {
      element.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    }
  } catch (error) {
    console.warn("Scroll target not found:", target);
  }
};

const navigateToDashboard = () => {
  // const userGroupId = store.user?.user_group_id;
  // if (userGroupId) {
  //   const redirectPath = store.getRedirectPath(userGroupId);
  //   router.push(redirectPath);
  // } else {
  //   router.push("/auth/login");
  // }
  router.push("/");
  isMobileMenuOpen.value = false;
};
</script>

<style scoped></style>
