<template>

  <div
    class="min-h-screen w-full relative bg-gray-50 flex items-center justify-center"
  >
    <div class="absolute inset-0 z-0 cool-blue-glow" />
    <div
      class="relative w-full max-w-5xl bg-white rounded-2xl h-fit shadow-xl grid grid-cols-1 lg:grid-cols-2 ring-[5px] ring-white/50 backdrop-blur-lg  overflow-hidden"
    >
      <!-- Kolom Kiri: Form Login -->
      <div class="flex flex-col justify-center p-8 sm:p-12">
        <!-- Header -->
        <div class="mb-8 text-center lg:text-left">
          <h1 class="text-slate-800 text-3xl font-bold leading-tight">
            Selamat Datang!
          </h1>
          <p class="text-neutral-500 text-base font-medium mt-2">
            Mohon masukkan email dan password Anda.
          </p>
        </div>

        <!-- Form Fields -->
        <div class="w-full flex flex-col gap-4">
          <!-- Alert Notifikasi -->
          <!-- Transisi dibuat lebih smooth dengan `transition-all` dan `duration-500` -->
          <div class="w-full h-10">
            <UAlert
              v-if="alert.show"
              :title="alert.message"
              class="px-4 py-2 font-medium text-xs leading-4 h-auto text-center transition-all duration-500 ease-out"
              :class="[
                alert.error
                  ? 'bg-red-50 text-red-600'
                  : 'bg-green-50 text-green-600',
              ]"
            />
          </div>

          <!-- Input Email -->
          <TextField
            class="w-full"
            label="Email"
            variant="soft"
            placeholder="Masukkan Email"
            size="xl"
            v-model="form.username"
          >
            <template #leading>
              <UIcon name="i-mdi-email" class="text-PRIMARY size-5" />
            </template>
          </TextField>

          <!-- Input Password -->
          <TextField
            label="Password"
            class="w-full"
            variant="soft"
            type="password"
            size="xl"
            placeholder="Masukkan Password"
            v-model="form.password"
            icon="i-mdi-password"
            @keyup.enter="validasiLogin"
          >
            <template #leading>
              <UIcon name="i-mdi-password" class="text-PRIMARY size-5" />
            </template>
          </TextField>

          <!-- Opsi Tambahan: Ingat Saya & Lupa Password -->
          <div class="self-stretch flex justify-between items-center">
            <UCheckbox
              v-model="form.is_remember"
              id="rememberMe"
              label="Ingat Saya"
            />
            <NuxtLink
              to="/auth/forget-password"
              class="text-sm font-medium text-PRIMARY hover:text-opacity-80"
            >
              Lupa password?
            </NuxtLink>
          </div>
        </div>

        <!-- Tombol Aksi & Pemisah -->
        <div class="w-full space-y-4 mt-8">
          <UButton
            class="rounded-xl font-semibold text-base text-white bg-[#0c315a]"
            color="primary"
            variant="solid"
            size="xl"
            block
            :loading="loading.simpan"
            :disabled="loading.simpan"
            @click="validasiLogin()"
          >
            Masuk
          </UButton>

          <!-- Pemisah "Atau login dengan" -->
          <div class="relative flex items-center py-2">
            <div class="flex-grow border-t border-neutral-200"></div>
            <span class="flex-shrink mx-4 text-sm text-neutral-500"
              >Atau login dengan</span
            >
            <div class="flex-grow border-t border-neutral-200"></div>
          </div>

          <UButton
            class="rounded-xl bg-white ring-[#0c315a] text-[#0c315a] hover:bg-[#0c315a]/10"
            color="primary"
            variant="outline"
            :avatar="{
              src: 'https://upload.wikimedia.org/wikipedia/commons/thumb/c/c1/Google_%22G%22_logo.svg/1024px-Google_%22G%22_logo.svg.png',
            }"
            size="xl"
            block
            :loading="loading.simpan"
            :disabled="loading.simpan"
            @click="dummyLogin()"
          >
            Login dengan Google
          </UButton>
        </div>

        <!-- Link ke Halaman Daftar -->
        <div class="text-center mt-8">
          <p class="text-sm text-neutral-500">
            Belum punya akun?
            <NuxtLink
              to="/auth/register"
              class="font-medium text-PRIMARY hover:text-opacity-80"
              >Daftar</NuxtLink
            >
          </p>
        </div>
        
        <!-- Demo Credentials Hint -->
        <div class="mt-6 p-4 bg-blue-50 rounded-lg border border-blue-200">
          <p class="text-sm font-medium text-blue-900 mb-2">🎭 Demo Mode - Quick Login:</p>
          <div class="text-xs text-blue-700 space-y-1">
            <p><strong>Admin:</strong> admin@traspac.co.id / admin123</p>
            <p><strong>HR:</strong> hr@traspac.co.id / hr123</p>
            <p><strong>Interviewer:</strong> interviewer1@traspac.co.id / interviewer123</p>
            <p><strong>Pelamar:</strong> pelamar1@gmail.com / pelamar123</p>
          </div>
          <p class="text-xs text-blue-600 mt-2">Atau gunakan Demo Login Panel di pojok kanan bawah</p>
        </div>
      </div>

      <div
        class="hidden lg:flex flex-col justify-center items-center gap-4 bg-slate-50 p-12 rounded-r-2xl"
      >
        <div class="text-center space-y-6">
          <img
            src="~/assets/images/logo/logo-kt.png"
            alt="Karir Traspac"
            class="w-56 object-contain mx-auto"
            @click="$router.push('/')"
          />
          <!-- <img
            src="~/assets/images/logo/logo-kt.png"
            alt="Karir Traspac"
            class="w-56 object-contain mx-auto"
            @click="$router.push('/')"
          /> -->
          <p class="text-[#0c315a] text-xl font-bold capitalize">
            Karir Traspac <span class="font-semibold text-slate-500"> Platform pencarian karir impian Anda. </span>
          </p>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { useAuthStore } from "~/store";

// global import start
definePageMeta({
  title: "Login",
  description: "Login page",
  layout: "no-layout",
  // middleware: "guest",
});
// global import end

// data start
const store = useAuthStore();
const route = useRouter();
const form = ref({
  username: "",
  password: "",
  is_remember: false,
});
const alert = ref({
  show: false,
  message: "",
  error: false,
});
const loading = ref({
  simpan: false,
});
// data end

// method start
const validasiLogin: () => void = async () => {
  loading.value.simpan = true;

  try {
    const { status, message, data } = await store.login({
      email: form.value.username as string, // menggunakan email
      password: form.value.password,
      is_remember: form.value.is_remember as boolean,
    });

    if (status) {
      alert.value = {
        show: true,
        message: "Berhasil login",
        error: false,
      };
      setTimeout(() => {
        toPortalMenu(data?.user_group_id);
        loading.value.simpan = false;
      }, 2000);
    } else {
      alert.value = {
        show: true,
        message: message,
        error: true,
      };
      loading.value.simpan = false;
    }
  } catch (error) {
    alert.value = {
      show: true,
      message: error.message || "Login gagal",
      error: true,
    };
    loading.value.simpan = false;
  }
  
  setTimeout(() => {
    alert.value = {
      show: false,
      message: "",
      error: false,
    };
  }, 3000);
};

const dummyLogin = () => {
  // Simulasi login sukses
  alert.value = {
    show: true,
    message: "Berhasil login (dummy)",
    error: false,
  };
  setTimeout(() => {
    toPortalMenu("02"); // Simulasi user group ID
    loading.value.simpan = false;
    store.user = {
      user_id: "123",
      username: "dummyuser",
      user_group_id: "02",
      roles: "pelamar"
    };
  }, 2000);
};

const toPortalMenu = (id: string) => {
  switch (id) {
    case "01":
      route.push("/human-resources").then(() => {
        window.location.reload();
      });
      break;
    case "02":
      route.push("/interviewers").then(() => {
        window.location.reload();
      });
      break;
    case "03":
      route.push("/pelamar").then(() => {
        window.location.reload();
      });
      break;
    default:
      alert.value = {
        show: true,
        message: "User group tidak ditemukan",
        error: true,
    };
  }
};

const bunchOfDummyData = ref([
  // create each user based on user_group_id
  {
    user_id: "123",
    username: "user1",
    user_group_id: "01",
    roles: "admin"
  },
  {
    user_id: "124",
    username: "user2",
    user_group_id: "02",
    roles: "interviewer"
  },
  {
    user_id: "125",
    username: "user3",
    user_group_id: "03",
    roles: "pelamar"
  }
]);

onMounted(() => {
  // if (process.client) {
  //   const token = localStorage.getItem("_ttoken");
  //   if (token) {
  //     const user = store.user;
  //     console.log("authzz", store.user, token);

  //     if (user && user?.user_id) {
  //       let id = user.user_group_id;
  //       if (id === "01" || id === "02") {
  //         // super admin & admin
  //         return $router.push({ path: "/admin/portal-menu" });
  //       } else if (id === "03" || id === "04") {
  //         // gadik & gapendik
  //         return $router.push({ path: "/gadik" });
  //       } else if (id === "05") {
  //         // siswa
  //         return $router.push({ path: "/siswa" });
  //       } else {
  //         return $router.push({ path: "/auth/login" });
  //       }
  //     }
  //   }
  // }
});
// method end
</script>

<style>
.cool-blue-glow {
  background: #ffffff;
  background-image: radial-gradient(
      circle 900px at bottom left,
      rgba(70, 130, 180, 0.5),
      transparent 70%
    ),
    radial-gradient(
      circle 900px at top right,
      rgba(70, 130, 180, 0.5),
      transparent 70%
    );
  filter: blur(80px);
  background-repeat: no-repeat;
}
</style>
