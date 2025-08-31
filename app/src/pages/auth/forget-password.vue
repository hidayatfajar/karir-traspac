<template>
  <!-- 
    Container utama:
    - Memusatkan kartu di tengah layar.
  -->
  <div
    class="min-h-screen w-full relative bg-gray-50 flex items-center justify-center p-4"
  >
    <!-- Efek glow di latar belakang -->
    <div class="absolute inset-0 z-0 cool-blue-glow" />

    <!-- 
      Kartu Lupa Password
      - Dibuat lebih ramping (max-w-md) karena formnya lebih sederhana.
      - Menggunakan transisi untuk pergantian antar tampilan.
    -->
    <div
      class="relative w-full max-w-md bg-white rounded-2xl h-fit shadow-xl ring-[5px] ring-white/50 backdrop-blur-lg overflow-hidden"
    >
      <!-- Tampilan 1: Input Email -->
      <div
        v-if="processStep === 'email'"
        class="p-8 sm:p-10 transition-all duration-300"
      >
        <!-- Header -->
        <div class="mb-6 text-center">
          <UIcon
            name="i-mdi-email-fast-outline"
            class="text-PRIMARY text-5xl mx-auto"
          />
          <h1 class="text-slate-800 text-2xl font-bold leading-tight mt-4">
            Lupa Password?
          </h1>
          <p class="text-neutral-500 text-base font-medium mt-2">
            Jangan khawatir! Masukkan email Anda di bawah ini untuk menerima
            kode verifikasi.
          </p>
        </div>

        <!-- Form Fields -->
        <div class="w-full flex flex-col gap-4">
          <!-- Alert Notifikasi -->
          <div class="w-full h-10">
            <UAlert
              v-if="alert.show"
              :title="alert.message"
              class="px-4 py-2 font-medium text-xs leading-4 h-auto text-center"
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
            placeholder="Masukkan Email Anda"
            size="xl"
            v-model="form.email"
            @keyup.enter="handleSendEmail"
          >
            <template #leading>
              <UIcon name="i-mdi-email" class="text-PRIMARY size-5" />
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
            @click="handleSendEmail()"
          >
            Kirim Kode Verifikasi
          </UButton>
        </div>

        <!-- Link kembali ke Halaman Login -->
        <div class="text-center mt-6">
          <p class="text-sm text-neutral-500">
            <NuxtLink
              to="/auth/login"
              class="font-medium text-PRIMARY hover:text-opacity-80 inline-flex items-center gap-1"
            >
              <UIcon name="i-mdi-arrow-left" />
              Kembali ke Login
            </NuxtLink>
          </p>
        </div>
      </div>

      <!-- Tampilan 2: Input OTP -->
      <div
        v-else-if="processStep === 'otp'"
        class="p-8 sm:p-10 transition-all duration-300"
      >
        <!-- Header -->
        <div class="mb-6 text-center">
          <UIcon
            name="i-mdi-numeric-6-box-multiple-outline"
            class="text-PRIMARY text-5xl mx-auto"
          />
          <h1 class="text-slate-800 text-2xl font-bold leading-tight mt-4">
            Masukkan Kode OTP
          </h1>
          <p class="text-neutral-500 text-base font-medium mt-2">
            Kami telah mengirimkan 6 digit kode verifikasi ke email
            <span class="font-bold text-slate-600">{{ form.email }}</span
            >.
          </p>
        </div>

        <!-- Alert Notifikasi untuk OTP -->
        <div class="w-full h-10 mb-4">
          <UAlert
            v-if="alert.show"
            :title="alert.message"
            class="px-4 py-2 font-medium text-xs leading-4 h-auto text-center"
            :class="[
              alert.error
                ? 'bg-red-50 text-red-600'
                : 'bg-green-50 text-green-600',
            ]"
          />
        </div>

        <!-- OTP Input -->
        <div class="w-full flex justify-center my-8">
          <PinInputField
            v-model="form.pin"
            :length="6"
            :disabled="loading.simpan"
            type="number"
            otp
            color="primary"
            highlight
            size="lg"
            placeholder="-"
          />
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
            @click="handleVerifyOtp()"
          >
            Verifikasi
          </UButton>
        </div>

        <!-- Kirim Ulang OTP -->
        <div class="text-center mt-6">
          <p class="text-sm text-neutral-500">
            Tidak menerima kode?
            <button class="font-medium text-PRIMARY hover:text-opacity-80">
              Kirim Ulang
            </button>
          </p>
        </div>
      </div>

      <!-- Tampilan 3: Reset Password -->
      <div
        v-else-if="processStep === 'reset'"
        class="p-8 sm:p-10 transition-all duration-300"
      >
        <!-- Header -->
        <div class="mb-6 text-center">
          <UIcon
            name="i-mdi-lock-reset"
            class="text-PRIMARY text-5xl mx-auto"
          />
          <h1 class="text-slate-800 text-2xl font-bold leading-tight mt-4">
            Buat Password Baru
          </h1>
          <p class="text-neutral-500 text-base font-medium mt-2">
            Password baru Anda harus berbeda dari password sebelumnya.
          </p>
        </div>

        <!-- Form Fields -->
        <div class="w-full flex flex-col gap-4">
          <!-- Alert Notifikasi -->
          <div class="w-full h-10">
            <UAlert
              v-if="alert.show"
              :title="alert.message"
              class="px-4 py-2 font-medium text-xs leading-4 h-auto text-center"
              :class="[
                alert.error
                  ? 'bg-red-50 text-red-600'
                  : 'bg-green-50 text-green-600',
              ]"
            />
          </div>
          <!-- Input Password Baru -->
          <TextField
            label="Password Baru"
            class="w-full"
            variant="soft"
            type="password"
            size="xl"
            placeholder="Masukkan Password Baru"
            v-model="form.newPassword"
          >
            <template #leading>
              <UIcon name="i-mdi-password" class="text-PRIMARY size-5" />
            </template>
          </TextField>

          <!-- Input Konfirmasi Password Baru -->
          <TextField
            label="Konfirmasi Password Baru"
            class="w-full"
            variant="soft"
            type="password"
            size="xl"
            placeholder="Ulangi Password Baru Anda"
            v-model="form.confirmPassword"
            @keyup.enter="handleResetPassword"
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
            @click="handleResetPassword()"
          >
            Reset Password
          </UButton>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
// Global Page Meta
definePageMeta({
  title: "Lupa Password",
  description: "Halaman untuk reset password",
  layout: "no-layout",
});

// State untuk mengatur alur proses: 'email', 'otp', 'reset'
const processStep = ref("email");
const router = useRouter();
// State untuk form dengan nilai awal
const form = ref({
  email: "fajar@example.com",
  pin: ["", "", "", "", "", ""], // Array untuk 6 digit OTP
  newPassword: "",
  confirmPassword: "",
});

const loading = ref({
  simpan: false,
});

const alert = ref({
  show: false,
  error: false,
  message: "",
});

// Fungsi untuk menampilkan notifikasi sementara
const showAlert = (
  message: string,
  isError: boolean,
  duration: number = 3000
) => {
  alert.value = { show: true, error: isError, message };
  setTimeout(() => {
    alert.value.show = false;
  }, duration);
};

// Fungsi untuk menangani pengiriman email
const handleSendEmail = () => {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!form.value.email || !emailRegex.test(form.value.email)) {
    showAlert("Format email tidak valid!", true);
    return;
  }

  loading.value.simpan = true;
  console.log("Sending verification code to:", form.value.email);

  // Simulasi API call
  setTimeout(() => {
    showAlert("Kode verifikasi berhasil dikirim!", false);
    loading.value.simpan = false;
    setTimeout(() => {
      processStep.value = "otp";
      alert.value.show = false;
    }, 1000);
  }, 1500);
};

// Fungsi untuk verifikasi OTP
const handleVerifyOtp = () => {
  const correctOtp = "123456"; // OTP statis untuk contoh
  if (form.value.pin.length !== 6) {
    showAlert("Kode OTP harus 6 digit!", true);
    return;
  }

  loading.value.simpan = true;
  console.log("Verifying OTP:", form.value.pin);

  // Simulasi API call
  setTimeout(() => {
    if (form.value.pin.join("") === correctOtp) {
      showAlert("Verifikasi berhasil!", false);
      setTimeout(() => {
        processStep.value = "reset";
        alert.value.show = false;
      }, 1000);
    } else {
      showAlert("Kode OTP salah! Silakan coba lagi.", true);
      form.value.pin = ["", "", "", "", "", ""];
    }
    loading.value.simpan = false;
  }, 1500);
};

// Fungsi untuk reset password
const handleResetPassword = () => {
  if (!form.value.newPassword || !form.value.confirmPassword) {
    showAlert("Password tidak boleh kosong!", true);
    return;
  }
  if (form.value.newPassword !== form.value.confirmPassword) {
    showAlert("Konfirmasi password tidak cocok!", true);
    return;
  }

  loading.value.simpan = true;
  console.log("Resetting password...");

  showAlert(
    "Password berhasil diubah! Anda akan diarahkan ke halaman login.",
    false,
    4000
  );
  // Simulasi API call
  setTimeout(() => {
    router.push("/auth/login");
    // Tambahkan logika redirect ke halaman login di sini
    // contoh: useRouter().push('/auth/login');
    loading.value.simpan = false;
  }, 2000);
};
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

/* Custom styles for PinInputField if needed */
.vi-input {
  border-radius: 0.75rem !important;
  font-size: 1.25rem !important;
  font-weight: 600 !important;
}
</style>
