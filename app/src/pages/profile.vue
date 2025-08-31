<template>
  <!-- Container utama dengan latar belakang dan padding yang konsisten -->
  <div class="min-h-screen w-full relative bg-gray-50 flex justify-center p-4 py-12 sm:py-20">
    <!-- Efek glow di latar belakang -->
    <div class="absolute inset-0 z-0 cool-blue-glow" />

    <!-- Kartu Profil Utama -->
    <div class="relative w-full max-w-3xl bg-white rounded-2xl h-fit shadow-xl ring-[5px] ring-white/50 backdrop-blur-lg overflow-hidden">
      <div class="p-8 sm:p-10">
        <!-- Header Profil -->
        <div class="mb-8 text-center">
          <h1 class="text-slate-800 text-3xl font-bold leading-tight">
            Profil Saya
          </h1>
          <p class="text-neutral-500 text-base font-medium mt-2">
            Kelola informasi akun dan data pribadi Anda.
          </p>
        </div>

        <!-- Bagian Foto Profil -->
        <div class="flex flex-col items-center gap-4 mb-8">
          <UAvatar
            src="https://avatars.githubusercontent.com/u/739984?v=4"
            alt="Avatar"
            size="3xl"
          />
          <div v-if="isEditMode">
            <UButton
              label="Ubah Foto"
              variant="outline"
              color="neutral"
              icon="i-mdi-camera-outline"
            />
          </div>
        </div>

        <!-- Tampilan Mode Detail -->
        <div v-if="!isEditMode" class="w-full space-y-6">
            <div>
                <h2 class="text-lg font-semibold text-slate-700 border-b pb-2 mb-4">Data Pribadi</h2>
                <div class="space-y-4">
                    <div class="flex items-center">
                        <UIcon name="i-mdi-account" class="text-PRIMARY size-5 mr-3" />
                        <div>
                            <p class="text-sm text-slate-500">Nama Lengkap</p>
                            <p class="text-base text-slate-800 font-medium">{{ form.fullName }}</p>
                        </div>
                    </div>
                    <div class="flex items-center">
                        <UIcon name="i-mdi-email" class="text-PRIMARY size-5 mr-3" />
                        <div>
                            <p class="text-sm text-slate-500">Email</p>
                            <p class="text-base text-slate-800 font-medium">{{ form.email }}</p>
                        </div>
                    </div>
                    <div class="flex items-center">
                        <UIcon name="i-mdi-whatsapp" class="text-PRIMARY size-5 mr-3" />
                        <div>
                            <p class="text-sm text-slate-500">No. Telp (WhatsApp)</p>
                            <p class="text-base text-slate-800 font-medium">{{ form.phone }}</p>
                        </div>
                    </div>
                </div>
            </div>
            <div class="w-full pt-4">
                <UButton
                    label="Ubah Profil"
                    color="primary"
                    variant="solid"
                    size="xl"
                    block
                    icon="i-mdi-pencil-outline"
                    @click="isEditMode = true"
                />
            </div>
        </div>

        <!-- Tampilan Mode Ubah -->
        <div v-else class="w-full">
            <!-- Form Data Pribadi -->
            <div class="w-full flex flex-col gap-4">
              <h2 class="text-lg font-semibold text-slate-700 border-b pb-2 mb-2">Data Pribadi</h2>
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
              <TextField
                class="w-full"
                label="Email"
                variant="soft"
                placeholder="Masukkan Email"
                size="xl"
                v-model="form.email"
                disabled
              >
                <template #leading>
                  <UIcon name="i-mdi-email" class="text-PRIMARY size-5" />
                </template>
              </TextField>
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
              </TextField>
            </div>

            <UDivider class="my-8" />

            <!-- Form Ubah Password -->
            <div class="w-full flex flex-col gap-4">
                <h2 class="text-lg font-semibold text-slate-700 border-b pb-2 mb-2">Ubah Password</h2>
                <TextField
                    label="Password Lama"
                    class="w-full"
                    variant="soft"
                    type="password"
                    size="xl"
                    placeholder="Masukkan Password Lama"
                    v-model="form.oldPassword"
                >
                    <template #leading>
                    <UIcon name="i-mdi-lock-outline" class="text-PRIMARY size-5" />
                    </template>
                </TextField>
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
                <TextField
                    label="Konfirmasi Password Baru"
                    class="w-full"
                    variant="soft"
                    type="password"
                    size="xl"
                    placeholder="Ulangi Password Baru Anda"
                    v-model="form.confirmPassword"
                >
                    <template #leading>
                    <UIcon name="i-mdi-check-decagram" class="text-PRIMARY size-5" />
                    </template>
                </TextField>
            </div>

            <!-- Tombol Aksi -->
            <div class="w-full mt-8 flex flex-col sm:flex-row gap-4">
              <UButton
                label="Batal"
                color="neutral"
                variant="outline"
                size="xl"
                class="w-full sm:w-1/2 rounded-xl font-semibold text-base justify-center"
                @click="isEditMode = false"
              />
              <UButton
                label="Simpan Perubahan"
                color="primary"
                variant="solid"
                size="xl"
                class="w-full sm:w-1/2 rounded-xl font-semibold text-base justify-center"
                :loading="loading.simpan"
                :disabled="loading.simpan"
                @click="simpanPerubahan()"
              />
            </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue';

// State untuk mode tampilan
const isEditMode = ref(false);

// State untuk form profil
const form = ref({
  fullName: 'Fajar Nur Hidayat',
  email: 'fajar@example.com',
  phone: '081234567890',
  oldPassword: '',
  newPassword: '',
  confirmPassword: '',
});

const loading = ref({
  simpan: false,
});

// Fungsi untuk menyimpan perubahan
const simpanPerubahan = () => {
  loading.value.simpan = true;
  console.log('Menyimpan perubahan:', form.value);

  // Simulasi API call
  setTimeout(() => {
    loading.value.simpan = false;
    isEditMode.value = false; // Kembali ke mode detail setelah berhasil
    // Tambahkan notifikasi sukses di sini
  }, 1500);
};
</script>

<style>
/* Style kustom (sama seperti halaman login) */
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
