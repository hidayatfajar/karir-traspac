<template>
  <section id="search-filter" class="bg-gray-50 dark:bg-gray-800/50 py-12">
    <UContainer>
      <UCard>
        <div class="grid grid-cols-1 md:grid-cols-3 gap-6 items-end">
          <!-- Input Pencarian -->
          <UFormGroup
            label="Cari Posisi"
            class="md:col-span-2"
            :ui="{ label: { base: 'font-semibold' } }"
          >
            <UInput
              v-model="kataKunci"
              icon="i-heroicons-magnifying-glass-20-solid"
              size="xl"
              placeholder="Masukkan nama posisi atau kata kunci..."
              @keyup.enter="handleCari"
            />
          </UFormGroup>

          <!-- Filter Tipe Pekerjaan -->
          <UFormGroup
            label="Filter Tipe"
            :ui="{ label: { base: 'font-semibold' } }"
          >
            <USelectMenu
              v-model="tipeTerpilih"
              :options="tipePekerjaan"
              size="xl"
            />
          </UFormGroup>
        </div>

        <!-- Tombol Aksi -->
        <div class="mt-6 flex justify-center">
          <UButton
            icon="i-heroicons-magnifying-glass-20-solid"
            size="lg"
            @click="handleCari"
          >
            Cari Lowongan
          </UButton>
        </div>
      </UCard>
    </UContainer>
  </section>
</template>

<script setup lang="ts">
const tipePekerjaan = [
  "Semua Tipe",
  "Full-time",
  "Part-time",
  "Remote",
  "Contract",
];

const kataKunci = ref("");
const tipeTerpilih = ref(tipePekerjaan[0]);

// Mendefinisikan event 'cari' yang akan mengirim data filter ke halaman induk
const emit = defineEmits(["cari"]);

function handleCari() {
  emit("cari", {
    kataKunci: kataKunci.value,
    tipe: tipeTerpilih.value,
  });
}
</script>
