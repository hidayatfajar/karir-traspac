<template>
  <!-- 
    Container utama:
    - Diperbarui agar konsisten dengan halaman login, menggunakan items-center.
  -->
  <div class="min-h-screen w-full relative bg-gray-50 flex items-center justify-center p-4">
    <!-- Efek glow di latar belakang -->
    <div class="absolute inset-0 z-0 cool-blue-glow" />

    <!-- 
      Kartu Registrasi Utama
      - Styling diperbarui dengan ring dan backdrop-blur seperti pada form login.
    -->
    <div class="relative w-full max-w-5xl bg-white rounded-2xl h-fit shadow-xl grid grid-cols-1 lg:grid-cols-2 ring-[5px] ring-white/50 backdrop-blur-lg overflow-hidden">
      
      <!-- Kolom Kiri: Form Registrasi -->
      <div class="flex flex-col justify-center p-8 sm:p-12">
        <!-- Header -->
        <div class="mb-6 text-center lg:text-left">
          <h1 class="text-slate-800 text-3xl font-bold leading-tight">
            Buat Akun Baru
          </h1>
          <p class="text-neutral-500 text-base font-medium mt-2">
            Silakan isi data diri Anda untuk mendaftar.
          </p>
        </div>

        <!-- Form Fields -->
        <div class="w-full flex flex-col gap-4">
          <!-- Alert Notifikasi -->
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

          <!-- Input Nama Lengkap -->
          <TextField
            class="w-full"
            label="Nama Lengkap"
            variant="soft"
            placeholder="Masukkan Nama Lengkap"
            size="xl"
            v-model="form.fullName"
          >
            <template #leading>
              <UIcon name="i-mdi-account" class="text-PRIMARY size-5" />
            </template>
          </TextField>

          <!-- Input Email -->
          <TextField
            class="w-full"
            label="Email"
            variant="soft"
            placeholder="Masukkan Email"
            size="xl"
            v-model="form.email"
          >
            <template #leading>
              <UIcon name="i-mdi-email" class="text-PRIMARY size-5" />
            </template>
          </TextField>

          <!-- Input No. Telp (WhatsApp)
          <TextField
            class="w-full"
            label="No. Telp (WhatsApp)"
            variant="soft"
            placeholder="Contoh: 081234567890"
            size="xl"
            v-model="form.phone"
          >
            <template #leading>
              <UIcon name="i-mdi-whatsapp" class="text-PRIMARY size-5" />
            </template>
          </TextField> -->

          <!-- Input Password -->
          <TextField
            label="Password"
            class="w-full"
            variant="soft"
            type="password"
            size="xl"
            placeholder="Masukkan Password"
            v-model="form.password"
          >
            <template #leading>
              <UIcon name="i-mdi-password" class="text-PRIMARY size-5" />
            </template>
          </TextField>
          
          <!-- Input Konfirmasi Password -->
          <TextField
            label="Konfirmasi Password"
            class="w-full"
            variant="soft"
            type="password"
            size="xl"
            placeholder="Ulangi Password Anda"
            v-model="form.password_confirmation"
            @keyup.enter="validasiRegister"
          >
            <template #leading>
              <UIcon name="i-mdi-check-decagram" class="text-PRIMARY size-5" />
            </template>
          </TextField>
        </div>

        <!-- Tombol Aksi -->
        <div class="w-full space-y-3 mt-6">
          <UButton
            class="rounded-xl font-semibold text-base"
            color="primary"
            variant="solid"
            size="xl"
            block
            :loading="loading.simpan"
            :disabled="loading.simpan"
            @click="validasiRegister()"
          >
            Daftar
          </UButton>
        </div>
        
        <!-- Link ke Halaman Login -->
        <div class="text-center mt-6">
          <p class="text-sm text-neutral-500">
            Sudah punya akun? 
            <NuxtLink to="/auth/login" class="font-medium text-PRIMARY hover:text-opacity-80">Masuk</NuxtLink>
          </p>
        </div>
      </div>

      <!-- Kolom Kanan: Branding (Diperbarui sesuai contoh login) -->
      <div class="hidden lg:flex flex-col justify-center items-center gap-4 bg-slate-50 p-12 rounded-r-2xl">
        <div class="text-center space-y-6">
          <img
            src="~/assets/images/logo/logo-kt.png"
            alt="Karir Traspac"
            class="w-56 object-contain mx-auto"
             @click="$router.push('/')"
            onerror="this.onerror=null;this.src='https://placehold.co/224x60/e2e8f0/475569?text=Logo'"
          />
          <p class="text-primary text-xl font-bold capitalize">
            Karir Traspac <span class="font-semibold text-slate-500"> Platform pencarian karir impian Anda. </span>
          </p>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue';

definePageMeta({
  title: 'Register',
  description: 'Halaman pendaftaran pengguna baru',
  layout: 'no-layout',
});


// State untuk form registrasi menggunakan ref agar konsisten
const form = ref({
  fullName: 'Fajar Nur Hidayat',
  email: 'fajar@example.com',
  phone: '081234567890',
  password: 'password123',
  password_confirmation: 'password123',
});

const loading = ref({
  simpan: false,
});

const alert = ref({
  show: false,
  error: false,
  message: '',
});

// Fungsi untuk validasi registrasi
const validasiRegister = () => {
  console.log('Register attempt with:', form.value);
  
  // Contoh validasi sederhana
  if (form.value.password !== form.value.password_confirmation) {
    alert.value = {
      show: true,
      error: true,
      message: 'Konfirmasi password tidak cocok!',
    };
  } else if (Object.values(form.value).some(val => !val)) {
    alert.value = {
      show: true,
      error: true,
      message: 'Semua kolom wajib diisi!',
    };
  } else {
    alert.value = {
      show: true,
      error: false,
      message: 'Registrasi berhasil!',
    };
    // Tambahkan logika registrasi Anda di sini
  }

  setTimeout(() => {
    alert.value.show = false;
  }, 3000);
}
</script>

<style>
/* Style kustom (diperbarui sesuai contoh login) */
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
