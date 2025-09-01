<template>
  <section id="job-listings" class="py-16">
    <UContainer>
      <div class="text-center mb-12">
        <h3 class="text-3xl font-bold text-primary mb-4">Lowongan Tersedia</h3>
        <p class="text-lg text-gray-600 dark:text-gray-300">
          Temukan posisi yang sesuai dengan passion dan keahlian Anda
        </p>
      </div>

      <!-- Jika tidak ada hasil, tampilkan pesan -->
      <div v-if="lowonganTampil.length === 0" class="text-center py-12">
        <UIcon
          name="i-heroicons-x-circle"
          class="text-5xl text-gray-400 dark:text-gray-500 mx-auto"
        />
        <p class="mt-4 text-xl text-gray-500 dark:text-gray-400">
          Lowongan tidak ditemukan.
        </p>
        <p class="text-gray-400 dark:text-gray-500">
          Coba ubah kata kunci atau filter pencarian Anda.
        </p>
      </div>

      <!-- Tampilkan daftar lowongan menggunakan grid -->
      <div v-else class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        <KartuLowongan
          v-for="lowongan in lowonganTampil"
          :key="lowongan.id"
          :lowongan="lowongan"
          @lihat-detail="tampilkanDetailLowongan"
        />
      </div>

      <!-- Tampilkan tombol "Lihat Selengkapnya" jika prop-nya true -->
      <div v-if="tampilkanTombolLihatLainnya" class="text-center mt-12">
        <UButton
          to="/lowongan"
          label="Lihat Semua Lowongan"
          variant="solid"
          size="xl"
          trailing-icon="i-heroicons-arrow-right-20-solid"
        />
      </div>
    </UContainer>
  </section>
</template>

<script setup lang="ts">
import type { Lowongan } from "~/types/lowongan";
import KartuLowongan from "./KartuLowongan.vue";

// Komponen ini menerima props untuk membatasi jumlah data dan untuk memfilter.
const props = defineProps<{
  limit?: number;
  tampilkanTombolLihatLainnya?: boolean;
  filter?: {
    kataKunci: string;
    tipe: string;
  };
}>();

const toast = useToast();

// Semua data lowongan disimpan di sini.
// Nantinya, ini bisa diganti dengan panggilan API.
const semuaLowongan = ref<Lowongan[]>([
  {
    id: 1,
    judul: "Frontend Developer",
    lokasi: "Jakarta, Indonesia",
    deskripsi:
      "Bergabung dengan tim development untuk mengembangkan aplikasi web modern menggunakan React, Vue.js, dan teknologi frontend terdepan.",
    tipe: "Full-time",
    icon: "i-heroicons-code-bracket-square-20-solid",
    warnaTipe: "green",
  },
  {
    id: 2,
    judul: "Backend Developer",
    lokasi: "Remote / Jakarta",
    deskripsi:
      "Kembangkan sistem backend yang scalable menggunakan Node.js, Python, atau Java untuk mendukung aplikasi dengan jutaan pengguna.",
    tipe: "Remote",
    icon: "i-heroicons-server-stack-20-solid",
    warnaTipe: "blue",
  },
  {
    id: 3,
    judul: "UI/UX Designer",
    lokasi: "Bandung, Indonesia",
    deskripsi:
      "Ciptakan pengalaman pengguna yang luar biasa melalui desain interface yang intuitif dan menarik untuk produk digital kami.",
    tipe: "Full-time",
    icon: "i-heroicons-paint-brush-20-solid",
    warnaTipe: "green",
  },
  {
    id: 4,
    judul: "Data Analyst",
    lokasi: "Jakarta, Indonesia",
    deskripsi:
      "Analisis data untuk memberikan insights bisnis yang valuable menggunakan Python, SQL, dan tools visualisasi data modern.",
    tipe: "Part-time",
    icon: "i-heroicons-chart-bar-square-20-solid",
    warnaTipe: "orange",
  },
  {
    id: 5,
    judul: "Mobile Developer",
    lokasi: "Surabaya, Indonesia",
    deskripsi:
      "Kembangkan aplikasi mobile native dan cross-platform menggunakan Flutter, React Native, atau teknologi mobile terbaru.",
    tipe: "Full-time",
    icon: "i-heroicons-device-phone-mobile-20-solid",
    warnaTipe: "green",
  },
  {
    id: 6,
    judul: "Product Manager",
    lokasi: "Remote / Jakarta",
    deskripsi:
      "Lead product development dari konsep hingga eksekusi, bekerja sama dengan tim engineering dan design untuk menciptakan produk yang luar biasa.",
    tipe: "Remote",
    icon: "i-heroicons-users-20-solid",
    warnaTipe: "blue",
  },
]);

// Computed property ini bersifat reaktif.
// Ia akan otomatis menghitung ulang daftar lowongan yang harus tampil
// jika ada perubahan pada 'filter' atau 'limit'.
const lowonganTampil = computed(() => {
  let lowonganHasilFilter = semuaLowongan.value;

  // 1. Terapkan filter jika ada
  if (props.filter) {
    // Filter berdasarkan kata kunci (judul atau deskripsi)
    if (props.filter.kataKunci) {
      lowonganHasilFilter = lowonganHasilFilter.filter(
        (lowongan) =>
          lowongan.judul
            .toLowerCase()
            .includes(props.filter!.kataKunci.toLowerCase()) ||
          lowongan.deskripsi
            .toLowerCase()
            .includes(props.filter!.kataKunci.toLowerCase())
      );
    }
    // Filter berdasarkan tipe pekerjaan
    if (props.filter.tipe && props.filter.tipe !== "Semua Tipe") {
      lowonganHasilFilter = lowonganHasilFilter.filter(
        (lowongan) => lowongan.tipe === props.filter!.tipe
      );
    }
  }

  // 2. Terapkan limit jika ada (untuk landing page)
  if (props.limit) {
    return lowonganHasilFilter.slice(0, props.limit);
  }

  return lowonganHasilFilter;
});

// Fungsi ini dipanggil ketika event 'lihat-detail' diterima dari KartuLowongan.vue
function tampilkanDetailLowongan(id: number) {
  const lowongan = semuaLowongan.value.find((l) => l.id === id);
  toast.add({
    title: "Info Detail",
    description: `Anda melihat detail untuk: ${lowongan?.judul}`,
    icon: "i-heroicons-information-circle",
  });
}
</script>
