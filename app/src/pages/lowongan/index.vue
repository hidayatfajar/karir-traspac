<template>
  <div>
    <section class="bg-white py-16">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 class="text-4xl md:text-5xl font-bold text-primary mb-6">
          Bergabunglah dengan Tim Kami
        </h2>
        <p class="text-lg text-gray-600 mb-8 max-w-3xl mx-auto">
          Temukan peluang karir terbaik di
          <span class="text-primary font-semibold">Karir Traspac</span>. Kami
          mencari talenta terbaik untuk berinovasi bersama membangun masa depan
          teknologi.
        </p>
      </div>
    </section>
    <section class="bg-gray-50 py-12">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="bg-white rounded-2xl shadow-lg p-8">
          <div class="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div class="md:col-span-2">
              <label class="block text-sm font-medium text-gray-700 mb-2"
                >Cari Posisi</label
              >
              <div class="relative">
                <TextField
                  size="xl"
                  placeholder="Masukkan nama posisi atau kata kunci..."
                  type="search"
                  class="w-full"
                  icon="i-heroicons-magnifying-glass-20-solid"
                />
              </div>
            </div>
            <div>
              <label class="block text-sm font-medium text-gray-700 mb-2"
                >Filter</label
              >
              <div class="relative">
                <USelectMenu
                  placeholder="Pilih Tipe"
                  :options="[
                    'Semua Tipe',
                    'Full-time',
                    'Part-time',
                    'Remote',
                    'Contract',
                  ]"
                  size="xl"
                  class="w-full"
                />
              </div>
            </div>
          </div>
          <div class="mt-6 flex justify-center">
            <UButton
              label="Cari Lowongan"
              color="primary"
              size="xl"
              icon="i-heroicons-magnifying-glass-20-solid"
              class="bg-primary text-white px-8 py-3 rounded-xl font-medium hover:bg-opacity-90 transition-all"
            />
          </div>
        </div>
      </div>
    </section>
    <section class="py-16">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="text-center mb-12">
          <h3 class="text-3xl font-bold text-primary mb-4">
            Lowongan Tersedia
          </h3>
          <p class="text-gray-600">
            Temukan posisi yang sesuai dengan passion dan keahlian Anda
          </p>
        </div>

        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <div
            v-for="lowongan in listLowongan"
            :key="lowongan.id"
            class="bg-white w-full rounded-2xl shadow-lg hover:shadow-xl transition-all p-6 border border-gray-100"
          >
            <div class="flex items-start justify-between mb-4">
              <div
                class="w-12 h-12 bg-primary/15 rounded-xl flex items-center justify-center"
              >
                <UIcon class="text-primary" :name="lowongan.icon" />
              </div>
              <span
                class="px-3 py-1 rounded-full text-xs font-medium"
                :class="lowongan.typeColor"
                >{{ lowongan.type }}</span
              >
            </div>
            <h4 class="text-xl font-bold text-gray-900 mb-2">
              {{ lowongan.title }}
            </h4>
            <div class="flex items-center text-gray-500 mb-4">
              <UIcon class="mr-2" name="fa6-solid:location-dot" />
              <span>{{ lowongan.location }}</span>
            </div>
            <p class="text-gray-600 mb-6 line-clamp-3">
              {{ lowongan.description }}
            </p>
            <div class="flex items-center gap-4">
              <UButton
                label="Lihat Detail"
                class="rounded-xl w-full justify-center"
                color="primary"
                size="xl"
                @click="navigateTo('lowongan/' + lowongan.id)"
              />
              <div class="h-10 w-px bg-gray-200" />
              <UButton
                icon="i-heroicons-share-20-solid"
                class="rounded-xl"
                color="primary"
                size="xl"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script setup lang="ts">

definePageMeta({
  title: "Lowongan Pekerjaan",
  meta: [
    {
      name: "description",
      content: "Temukan lowongan pekerjaan impianmu di TechCorp Indonesia.",
    },
  ],
});

const listLowongan = ref([
  {
    id: 1,
    title: "Frontend Developer",
    description:
      "Bergabung dengan tim development untuk mengembangkan aplikasi web modern menggunakan React, Vue.js, dan teknologi frontend terdepan.",
    location: "Jakarta, Indonesia",
    type: "Full-time",
    typeColor: "bg-green-100 text-green-800",
    icon: "fa6-solid:code",
  },
  {
    id: 2,
    title: "Backend Developer",
    description:
      "Kembangkan sistem backend yang scalable menggunakan Node.js, Python, atau Java untuk mendukung aplikasi dengan jutaan pengguna.",
    location: "Remote / Jakarta",
    type: "Remote",
    typeColor: "bg-blue-100 text-blue-800",
    icon: "fa6-solid:server",
  },
  {
    id: 3,
    title: "UI/UX Designer",
    description:
      "Ciptakan pengalaman pengguna yang luar biasa melalui desain interface yang intuitif dan menarik untuk produk digital kami.",
    location: "Bandung, Indonesia",
    type: "Full-time",
    typeColor: "bg-green-100 text-green-800",
    icon: "fa6-solid:palette",
  },
  {
    id: 4,
    title: "Data Analyst",
    description:
      "Analisis data untuk memberikan insights bisnis yang valuable menggunakan Python, SQL, dan tools visualisasi data modern.",
    location: "Jakarta, Indonesia",
    type: "Part-time",
    typeColor: "bg-orange-100 text-orange-800",
    icon: "fa6-solid:chart-line",
  },
  {
    id: 5,
    title: "Mobile Developer",
    description:
      "Kembangkan aplikasi mobile native dan cross-platform menggunakan Flutter, React Native, atau teknologi mobile terbaru.",
    location: "Surabaya, Indonesia",
    type: "Full-time",
    typeColor: "bg-green-100 text-green-800",
    icon: "fa6-solid:mobile-screen-button",
  },
  {
    id: 6,
    title: "Product Manager",
    description:
      "Lead product development dari konsep hingga eksekusi, bekerja sama dengan tim engineering dan design untuk menciptakan produk yang luar biasa.",
    location: "Remote / Jakarta",
    type: "Remote",
    typeColor: "bg-blue-100 text-blue-800",
    icon: "fa6-solid:users",
  },
]);
</script>
