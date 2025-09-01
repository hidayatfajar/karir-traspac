<template>
  <!-- UCard adalah komponen kartu dari Nuxt UI -->
  <UCard>
    <!-- Bagian header kartu untuk ikon dan tipe pekerjaan -->
    <template #header>
      <div class="flex items-start justify-between">
        <UAvatar :icon="lowongan.icon" size="lg" class="rounded-xl" />
        <UBadge color="success" variant="subtle">{{ lowongan.tipe }}</UBadge>
      </div>
    </template>

    <!-- Judul Pekerjaan -->
    <h4 class="text-xl font-bold text-gray-900 dark:text-white mb-2">
      {{ lowongan.judul }}
    </h4>

    <!-- Info Lokasi -->
    <div class="flex items-center text-gray-500 dark:text-gray-400 mb-4">
      <UIcon name="i-heroicons-map-pin-20-solid" class="mr-2 flex-shrink-0" />
      <span>{{ lowongan.lokasi }}</span>
    </div>

    <!-- Deskripsi singkat -->
    <p class="text-gray-600 dark:text-gray-300 mb-6 line-clamp-3">
      {{ lowongan.deskripsi }}
    </p>

    <!-- Tombol di bagian footer kartu -->
    <template #footer>
      <UButton block size="lg" @click="onLihatDetailClick">
        Lihat Detail
      </UButton>
    </template>
  </UCard>
</template>

<script setup lang="ts">
import type { Lowongan } from "~/types/lowongan";

// Komponen ini menerima satu 'prop' bernama 'lowongan'.
// Ini berarti data pekerjaan dikirim dari komponen induk (DaftarLowongan).
const props = defineProps<{
  lowongan: Lowongan;
}>();

// Mendefinisikan event 'lihat-detail' yang akan dikirim ke induk saat tombol diklik.
const emit = defineEmits(["lihat-detail"]);

// Fungsi yang akan dijalankan saat tombol "Lihat Detail" di-klik.
function onLihatDetailClick() {
  emit("lihat-detail", props.lowongan.id);
}
</script>
