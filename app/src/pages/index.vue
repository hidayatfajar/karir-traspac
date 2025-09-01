<template>
  <div>
    <main class="overflow-x-hidden xl:-mx-[150px]">
      <!-- Hero Section -->
      <section
        id="hero"
        class="relative px-4 md:px-8 lg:px-16 xl:px-40 py-12 sm:py-16 md:py-20 lg:py-[56px] bg-slate-50"
      >
        <div
          class="absolute -top-32 -left-32 w-64 h-64 rounded-full bg-primary-500 blur-2xl opacity-50"
        ></div>
        <div
          class="absolute -bottom-48 -right-48 w-96 h-96 rounded-full bg-primary-500 blur-2xl opacity-50"
        ></div>
        <div
          class="container mx-auto px-6 grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-10 items-center relative z-10"
        >
          <div class="text-center md:text-left">
            <h1
              class="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold tracking-tight text-slate-900 leading-tight mb-4 md:mb-6"
            >
              Temukan Pekerjaan
              <span
                class="bg-gradient-to-r from-primary-500 to-neutral-500 bg-clip-text text-transparent"
                >Impianmu</span
              >
            </h1>
            <p
              class="text-base sm:text-lg md:text-xl text-slate-600 mb-6 md:mb-8"
            >
              Jadilah bagian dari perjalanan kami dalam menciptakan solusi
              teknologi yang mengubah dunia.
            </p>
            <div
              class="flex flex-col sm:flex-row justify-center md:justify-start space-y-3 sm:space-y-0 sm:space-x-4"
            >
              <UButton
                label="Daftar Sekarang"
                @click="$router.push('/auth/register')"
                size="xl"
                class="w-full sm:w-auto justify-center rounded-xl lg:px-5"
                icon="i-mdi-account-plus-outline"
              />
              <UButton
                label="Lihat Lowongan"
                @click="$router.push('/lowongan')"
                size="xl"
                class="w-full sm:w-auto justify-center rounded-xl lg:px-5"
                variant="outline"
              />
            </div>
          </div>
          <div class="hidden md:block mt-8 md:mt-0">
            <img
              class="w-full rounded-lg"
              src="https://kyyjdpebklyiaolvxrjj.supabase.co/storage/v1/object/public/storage-public/bg-hero.png"
              alt="Tim teknologi yang beragam sedang bekerja bersama"
              onerror="this.onerror=null;this.src='https://placehold.co/600x400/e0e7ff/4338ca?text=Inovasi'"
            />
          </div>
        </div>
      </section>

      <!-- Jobs Section -->
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
          <div class="bg-white rounded-2xl shadow-lg p-8 mb-12">
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
          <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div
              v-for="lowongan in listLowongan.slice(0, 3)"
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
          <div class="mt-8 text-right">
            <UButton
              label="Lihat Semua Lowongan"
              class="rounded-xl w-fit justify-center"
              color="primary"
              variant="outline"
              size="xl"
              trailing-icon="i-heroicons-arrow-right-20-solid"
              @click="navigateTo('lowongan')"
            />
          </div>
        </div>
      </section>

      <!-- Recruitment Process -->
      <section id="process" class="py-20 bg-primary/15">
        <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div class="text-center mb-16" data-aos="fade-up">
            <h2 class="text-3xl font-bold text-gray-900 mb-4">
              Tahapan Rekrutmen
            </h2>
            <p class="text-gray-600 max-w-2xl mx-auto">
              Proses rekrutmen kami yang sederhana dan transparan.
            </p>
          </div>

          <div
            class="flex flex-col md:flex-row justify-between items-center md:items-start space-y-8 md:space-y-0"
          >
            <!-- Step 1 -->
            <div
              class="step-item flex-col md:flex-1 flex items-center md:block relative"
              data-aos="zoom-in"
              data-aos-delay="100"
            >
              <div
                class="step-icon w-16 h-16 rounded-full bg-primary flex items-center justify-center text-white text-2xl mb-0 md:mb-4 md:mx-auto"
              >
                <UIcon name="i-mdi-file-document" class="text-2xl text-white" />
              </div>
              <div class="text-center mt-2 md:mt-0">
                <h3 class="text-lg font-semibold text-gray-900 mb-2">
                  Administrasi
                </h3>
                <p class="text-gray-600 text-sm">
                  Lengkapi dokumen dan data diri Anda.
                </p>
              </div>
            </div>

            <!-- Step 2 -->
            <div
              class="step-item flex-col md:flex-1 flex items-center md:block relative"
              data-aos="zoom-in"
              data-aos-delay="200"
            >
              <div
                class="step-icon w-16 h-16 rounded-full bg-primary flex items-center justify-center text-white text-2xl mb-0 md:mb-4 md:mx-auto"
              >
                <UIcon name="i-mdi-magnify" class="text-2xl text-white" />
              </div>
              <div class="text-center mt-2 md:mt-0">
                <h3 class="text-lg font-semibold text-gray-900 mb-2">
                  Screening CV
                </h3>
                <p class="text-gray-600 text-sm">
                  Tim kami akan meninjau kualifikasi Anda.
                </p>
              </div>
            </div>

            <!-- Step 3 -->
            <div
              class="step-item flex-col md:flex-1 flex items-center md:block relative"
              data-aos="zoom-in"
              data-aos-delay="300"
            >
              <div
                class="step-icon w-16 h-16 rounded-full bg-primary flex items-center justify-center text-white text-2xl mb-0 md:mb-4 md:mx-auto"
              >
                <UIcon
                  name="i-mdi-clipboard-check"
                  class="text-2xl text-white"
                />
              </div>
              <div class="text-center mt-2 md:mt-0">
                <h3 class="text-lg font-semibold text-gray-900 mb-2">
                  Tes Kemampuan
                </h3>
                <p class="text-gray-600 text-sm">
                  Uji keterampilan teknis dan soft skill.
                </p>
              </div>
            </div>

            <!-- Step 4 -->
            <div
              class="step-item flex-col md:flex-1 flex items-center md:block relative"
              data-aos="zoom-in"
              data-aos-delay="400"
            >
              <div
                class="step-icon w-16 h-16 rounded-full bg-primary flex items-center justify-center text-white text-2xl mb-0 md:mb-4 md:mx-auto"
              >
                <UIcon name="i-mdi-account-group" class="text-2xl text-white" />
              </div>
              <div class="text-center mt-2 md:mt-0">
                <h3 class="text-lg font-semibold text-gray-900 mb-2">
                  Interview
                </h3>
                <p class="text-gray-600 text-sm">
                  Bertemu dengan tim untuk diskusi lebih lanjut.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <!-- About Section -->
      <section
        id="about"
        class="px-4 sm:px-6 md:px-8 lg:px-16 xl:px-40 py-12 sm:py-16 md:py-20 lg:py-[86px] bg-slate-50"
      >
        <div class="container mx-auto px-6">
          <div class="text-center mb-12 md:mb-16">
            <h2 class="text-2xl sm:text-3xl font-bold text-gray-900 mb-4">
              Tentang Kami
            </h2>
            <p class="text-gray-600 max-w-2xl mx-auto text-sm sm:text-base">
              Dengan kompetensi, kemampuan inovasi, dan kesungguhan menciptakan
              solusi, kami menjadi salah satu pilihan dalam transformasi
              digital. Serta lingkungan dan budaya membentuk bakat untuk
              berkembang adalah kontribusi kami
            </p>
          </div>
          <div
            class="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-8 md:gap-12 xl:gap-12"
          >
            <div
              v-for="(item, index) in aboutUs"
              :key="item.title"
              class="relative"
            >
              <div
                :class="[
                  'absolute -inset-4 rounded-xl opacity-20 transform',
                  item.bg,
                  item.rotation.bg,
                ]"
              ></div>
              <div
                :class="[
                  'relative bg-white p-6 md:p-8 rounded-xl border-2 border-dotted transition duration-300 transform hover:rotate-0',
                  item.border,
                  item.rotation.card,
                ]"
              >
                <!-- <div
                    class="w-12 h-12 sm:w-16 sm:h-16 rounded-full bg-gradient-to-r from-indigo-600 to-purple-600 flex items-center justify-center text-white text-xl sm:text-2xl mb-4 md:mb-6"
                  > -->
                <UIcon
                  :name="item.icon"
                  class="text-2xl sm:text-3xl text-primary"
                />
                <!-- </div> -->
                <h3 class="text-lg sm:text-xl font-bold text-gray-900 mb-3">
                  {{ item.title }}
                </h3>
                <ul class="space-y-2 text-gray-600 text-sm sm:text-base">
                  <li v-for="level in item.levels" :key="level">
                    {{ level }}
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <!-- <div class="grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-12">
              <div class="bg-indigo-50 rounded-xl p-6 md:p-8">
                <div
                  class="w-12 h-12 sm:w-16 sm:h-16 rounded-full bg-gradient-to-r from-indigo-600 to-purple-600 flex items-center justify-center text-white text-xl sm:text-2xl mb-4 md:mb-6"
                >
                  <UIcon
                    name="i-mdi-eye-outline"
                    class="text-2xl sm:text-3xl"
                  />
                </div>
                <h3
                  class="text-lg sm:text-xl font-bold text-gray-900 mb-3 md:mb-4"
                >
                  Visi
                </h3>
                <p class="text-gray-700 text-sm sm:text-base">
                  Menjadi Perusahaan Solusi Teknologi Informasi yang inovatif
                  dan kokoh dalam pelayanan pelanggan.
                </p>
              </div>
              <div class="bg-purple-50 rounded-xl p-6 md:p-8">
                <div
                  class="w-12 h-12 sm:w-16 sm:h-16 rounded-full bg-gradient-to-r from-indigo-600 to-purple-600 flex items-center justify-center text-white text-xl sm:text-2xl mb-4 md:mb-6"
                >
                  <UIcon
                    name="i-mdi-bullseye-arrow"
                    class="text-2xl sm:text-3xl"
                  />
                </div>
                <h3
                  class="text-lg sm:text-xl font-bold text-gray-900 mb-3 md:mb-4"
                >
                  Misi
                </h3>
                <ul
                  class="list-disc pl-5 text-gray-700 space-y-2 text-sm sm:text-base"
                >
                  <li>Memberikan nilai tambah kepada pelanggan.</li>
                  <li>
                    Menjamin kemakmuran jangka panjang kepada karyawan dan
                    stakeholder.
                  </li>
                  <li>Meningkatkan pertumbuhan perusahaan.</li>
                  <li>Menjadi tempat bekerja yang sehat.</li>
                </ul>
              </div>
            </div> -->
        </div>
      </section>

      <!-- Testimonials Section -->
      <section
        id="testimonials"
        class="px-4 sm:px-6 md:px-8 lg:px-16 xl:px-40 py-12 sm:py-16 md:py-20 lg:py-[86px] bg-slate-50 relative overflow-hidden"
      >
        <div
          class="absolute -top-32 left-1/4 w-64 h-64 rounded-full bg-gradient-to-r from-primary to-primary-200 blur-2xl opacity-50 -z-0"
        ></div>
        <div
          class="absolute -bottom-48 right-1/4 w-96 h-96 rounded-full bg-gradient-to-r from-primary to-primary-200 blur-2xl opacity-50 -z-0"
        ></div>
        <div class="container mx-auto px-6 relative z-10">
          <div class="text-center mb-12 md:mb-16">
            <h2 class="text-2xl sm:text-3xl font-bold text-gray-900 mb-4">
              Apa Kata Mereka
            </h2>
            <p class="text-gray-600 max-w-2xl mx-auto text-sm sm:text-base">
              Dengar langsung dari mereka yang telah menemukan pekerjaan impian.
            </p>
          </div>
          <UCarousel
            v-slot="{ item }"
            :items="testimonials"
            :ui="{ item: 'basis-full' }"
            class="mx-auto max-w-3xl"
            arrows
          >
            <div
              class="text-center p-6 md:p-8 bg-white/60 backdrop-blur-xl border border-white/30 rounded-2xl"
            >
              <UAvatar :src="item.avatar" size="2xl" class="mx-auto mb-4" />
              <p class="text-gray-700 italic text-sm sm:text-base">
                "{{ item.quote }}"
              </p>
              <div class="mt-4 md:mt-6">
                <h4 class="font-semibold text-gray-900 text-sm sm:text-base">
                  {{ item.name }}
                </h4>
                <p class="text-primary text-xs sm:text-sm">
                  {{ item.position }}
                </p>
              </div>
            </div>
          </UCarousel>
        </div>
      </section>

      <!-- Stats Section -->
      <section
        id="stats"
        class="px-4 sm:px-6 md:px-8 lg:px-16 xl:px-40 py-12 sm:py-16 md:py-20 lg:py-[86px] bg-slate-800 relative overflow-hidden"
      >
        <!-- Grid pattern overlay -->
        <div
          class="absolute inset-0 opacity-5"
          style="
            background-image: radial-gradient(
              circle at 2px 2px,
              white 1px,
              transparent 0
            );
            background-size: 40px 40px;
          "
        ></div>

        <div class="container mx-auto px-6 relative z-10">
          <div class="text-center mb-12 md:mb-16">
            <h2 class="text-2xl sm:text-3xl font-bold text-white mb-4">
              Statistik Platform Rekrutmen
            </h2>
            <p class="text-white/70 max-w-2xl mx-auto text-sm sm:text-base">
              Data terkini mengenai aktivitas dan pencapaian platform kami.
            </p>
          </div>

          <div
            class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8"
          >
            <div
              class="bg-white/10 backdrop-blur-md rounded-2xl border border-white/20 p-6 hover:bg-white/15 transition-all duration-300"
            >
              <div class="text-white/70 text-sm sm:text-base font-medium mb-4">
                Total Pelamar
              </div>
              <div class="flex items-center justify-between">
                <UIcon
                  name="i-mdi-account-group"
                  class="text-4xl sm:text-5xl text-blue-400"
                />
                <div class="text-2xl sm:text-3xl font-bold text-white">
                  {{ summary.total_user || 0 }}
                </div>
              </div>
            </div>

            <div
              class="bg-white/10 backdrop-blur-md rounded-2xl border border-white/20 p-6 hover:bg-white/15 transition-all duration-300"
            >
              <div class="text-white/70 text-sm sm:text-base font-medium mb-4">
                Pelamar Hari Ini
              </div>
              <div class="flex items-center justify-between">
                <UIcon
                  name="i-mdi-calendar-today"
                  class="text-4xl sm:text-5xl text-green-400"
                />
                <div class="text-2xl sm:text-3xl font-bold text-white">
                  {{ summary.user_hari_ini || 0 }}
                </div>
              </div>
            </div>

            <div
              class="bg-white/10 backdrop-blur-md rounded-2xl border border-white/20 p-6 hover:bg-white/15 transition-all duration-300"
            >
              <div class="text-white/70 text-sm sm:text-base font-medium mb-4">
                Lowongan Aktif
              </div>
              <div class="flex items-center justify-between">
                <UIcon
                  name="i-mdi-briefcase"
                  class="text-4xl sm:text-5xl text-amber-400"
                />
                <div class="text-2xl sm:text-3xl font-bold text-white">
                  {{ summary.jumlah_lowongan || 0 }}
                </div>
              </div>
            </div>

            <div
              class="bg-white/10 backdrop-blur-md rounded-2xl border border-white/20 p-6 hover:bg-white/15 transition-all duration-300"
            >
              <div class="text-white/70 text-sm sm:text-base font-medium mb-4">
                Berhasil Diterima
              </div>
              <div class="flex items-center justify-between">
                <UIcon
                  name="i-mdi-handshake"
                  class="text-4xl sm:text-5xl text-emerald-400"
                />
                <div class="text-2xl sm:text-3xl font-bold text-white">
                  {{ summary.total_diterima || 0 }}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <!-- FAQ Section -->
      <section
        id="faq"
        class="px-4 sm:px-6 md:px-8 lg:px-16 xl:px-40 py-12 sm:py-16 md:py-20 lg:py-[86px] bg-white"
      >
        <div class="container mx-auto px-6">
          <div class="text-center mb-12 md:mb-16">
            <h2 class="text-2xl sm:text-3xl font-bold text-gray-900 mb-4">
              Pertanyaan Umum
            </h2>
            <p class="text-gray-600 max-w-2xl mx-auto text-sm sm:text-base">
              Temukan jawaban untuk pertanyaan yang sering diajukan seputar
              karir dan proses rekrutmen di Karir Traspac.
            </p>
          </div>
        </div>
        <section id="faq-list" class="py-8">
          <div class="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <div class="space-y-4">
              <div
                v-for="faq in listFaq.slice(0, 5)"
                :key="faq.id"
                class="faq-item bg-white rounded-2xl shadow-lg border border-gray-100"
              >
                <UButton
                  variant="ghost"
                  class="w-full px-8 py-6 text-left flex items-center justify-between hover:bg-gray-50"
                  @click="toggleFaq(faq.id)"
                >
                  <h3 class="text-lg font-semibold text-gray-900 pr-4">
                    {{ faq.question }}
                  </h3>
                  <UIcon
                    :name="
                      expandedFaqs.includes(faq.id)
                        ? 'i-heroicons-minus'
                        : 'i-heroicons-plus'
                    "
                    class="text-primary text-xl transition-transform duration-300"
                    :class="{ 'rotate-180': expandedFaqs.includes(faq.id) }"
                  />
                </UButton>
                <Transition
                  enter-active-class="transition-all duration-300 ease-out"
                  enter-from-class="max-h-0 opacity-0"
                  enter-to-class="max-h-96 opacity-100"
                  leave-active-class="transition-all duration-300 ease-in"
                  leave-from-class="max-h-96 opacity-100"
                  leave-to-class="max-h-0 opacity-0"
                >
                  <div
                    v-if="expandedFaqs.includes(faq.id)"
                    class="px-8 pb-6 overflow-hidden"
                  >
                    <p class="text-gray-600 leading-relaxed">
                      {{ faq.answer }}
                    </p>
                  </div>
                </Transition>
              </div>
            </div>
          </div>
        </section>
      </section>
    </main>
  </div>
</template>

<script setup lang="ts">
definePageMeta({
  title: "Beranda",
  name: "Beranda",
  titleTemplate: "Beranda - Karir Traspac",
  meta: [
    {
      name: "description",
      content:
        "Selamat datang di Karir Traspac - Temukan pekerjaan impianmu di sini.",
    },
    { name: "keywords", content: "karir, pekerjaan, lowongan, traspac" },
  ],
});

const expandedFaqs = ref<number[]>([]);
const toggleFaq = (id: number) => {
  const index = expandedFaqs.value.indexOf(id);
  if (index > -1) {
    expandedFaqs.value.splice(index, 1);
  } else {
    expandedFaqs.value.push(id);
  }
};

const router = useRouter();
const isMobileMenuOpen = ref(false);
const summary = ref({
  total_user: 1247,
  user_hari_ini: 23,
  jumlah_lowongan: 45,
  total_diterima: 312,
});

// Data untuk navigasi
const navLinks = [
  { label: "Lowongan", to: "#jobs" },
  { label: "Tentang Kami", to: "#about" },
  // { label: "Jenjang Karir", to: "#career" },
  { label: "Testimoni", to: "#testimonials" },
  { label: "Statistik", to: "#stats" },
  { label: "FAQ", to: "#faq" },
];

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

// Data dummy untuk about us
const aboutUs = [
  {
    title: "Visi",
    icon: "i-mdi-eye",
    levels: [
      "Menjadi Perusahaan Solusi Teknologi Informasi yang inovatif dan kokoh dalam pelayanan pelanggan.",
    ],
    bg: "bg-indigo-100",
    border: "border-indigo-200",
    rotation: { bg: "rotate-3", card: "-rotate-1" },
  },
  {
    title: "Misi",
    icon: "i-hugeicons:target-02",
    levels: [
      "Memberikan nilai tambah kepada pelanggan",
      "Menjamin kemakmuran jangka panjang kepada karyawan dan stakeholder",
      "Meningkatkan pertumbuhan perusahaan",
      "Menjadi tempat bekerja yang sehat",
    ],
    bg: "bg-purple-100",
    border: "border-purple-200",
    rotation: { bg: "-rotate-3", card: "rotate-1" },
  },
  {
    title: "Nilai-Nilai Traspac ",
    icon: "i-mdi:flower-tulip",
    levels: ["Integritas", "Semangat", "Profesional"],
    bg: "bg-blue-100",
    border: "border-blue-200",
    rotation: { bg: "rotate-3", card: "-rotate-1" },
  },
];

// Data untuk testimoni
const testimonials = [
  {
    name: "Sarah Johnson",
    position: "Product Designer at TechCorp",
    avatar: "https://randomuser.me/api/portraits/women/32.jpg",
    quote:
      "Platform ini sangat membantu saya menemukan pekerjaan yang sesuai dengan passion saya. Proses rekrutmennya transparan dan cepat. Dalam waktu 2 minggu setelah mendaftar, saya sudah mendapatkan tawaran pekerjaan!",
  },
  {
    name: "Michael Chen",
    position: "Senior Developer at DataSystems",
    avatar: "https://randomuser.me/api/portraits/men/64.jpg",
    quote:
      "Saya sangat terkesan dengan kualitas lowongan yang tersedia di platform ini. Tidak seperti situs pekerjaan lainnya yang penuh dengan spam, di sini semuanya relevan dan berkualitas tinggi. Tim support juga sangat responsif.",
  },
  {
    name: "Aisha Rahman",
    position: "Marketing Manager at CreativeMinds",
    avatar: "https://randomuser.me/api/portraits/women/68.jpg",
    quote:
      "Sebagai fresh graduate, saya kesulitan menemukan pekerjaan yang sesuai. Setelah mencoba, saya mendapatkan beberapa panggilan interview dalam waktu singkat. Sekarang saya bekerja di perusahaan impian saya!",
  },
];

// Data untuk FAQ
const listFaq = ref([
  {
    id: 1,
    category: "application",
    question:
      "Bagaimana cara melamar pekerjaan di PT. Traspac Makmur Sejahtera?",
    answer:
      "Anda dapat melamar pekerjaan melalui halaman karir kami dengan mengklik tombol 'Lamar Sekarang' pada posisi yang diminati. Pastikan untuk melengkapi profil dan mengunggah CV terbaru Anda. Tim HR kami akan meninjau aplikasi Anda dalam 3-5 hari kerja.",
  },
  {
    id: 2,
    category: "application",
    question: "Dokumen apa saja yang diperlukan untuk melamar?",
    answer:
      "Dokumen yang diperlukan meliputi CV terbaru, surat lamaran, portfolio (untuk posisi teknis/kreatif), dan sertifikat relevan. Pastikan semua dokumen dalam format PDF dengan ukuran maksimal 5MB per file.",
  },
  {
    id: 3,
    category: "interview",
    question: "Seperti apa proses interview di PT. Traspac Makmur Sejahtera?",
    answer:
      "Proses interview terdiri dari 3 tahap: screening awal via telepon/video call, technical interview dengan tim teknis, dan final interview dengan hiring manager. Setiap tahap berlangsung 45-60 menit dengan fokus pada kemampuan teknis dan cultural fit.",
  },
  {
    id: 4,
    category: "interview",
    question: "Berapa lama proses rekrutmen berlangsung?",
    answer:
      "Proses rekrutmen biasanya memakan waktu 2-3 minggu dari aplikasi hingga keputusan akhir. Kami akan memberikan update status aplikasi Anda di setiap tahap proses melalui email.",
  },
  {
    id: 5,
    category: "benefits",
    question: "Apa saja benefit yang ditawarkan PT. Traspac Makmur Sejahtera?",
    answer:
      "Kami menawarkan paket benefit komprehensif termasuk asuransi kesehatan, tunjangan makan, flexible working hours, work from home policy, annual leave 12 hari, training & development budget, dan bonus performa tahunan.",
  },
  {
    id: 6,
    category: "benefits",
    question: "Apakah ada program training dan development?",
    answer:
      "Ya, kami menyediakan budget training Rp 10 juta per tahun untuk setiap karyawan, akses ke platform learning online, mentoring program, dan kesempatan menghadiri konferensi teknologi nasional maupun internasional.",
  },
  {
    id: 7,
    category: "career",
    question: "Bagaimana jenjang karir di PT. Traspac Makmur Sejahtera?",
    answer:
      "Kami memiliki clear career path untuk setiap posisi dengan review performa setiap 6 bulan. Promosi berdasarkan merit dengan kesempatan advancement ke posisi senior, lead, manager, hingga director level sesuai dengan performa dan kontribusi.",
  },
  {
    id: 8,
    category: "career",
    question:
      "Apakah fresh graduate bisa melamar di PT. Traspac Makmur Sejahtera?",
    answer:
      "Tentu saja! Kami memiliki program Graduate Trainee khusus untuk fresh graduate dengan mentoring intensif selama 6 bulan pertama. Kami mencari kandidat dengan passion tinggi, kemampuan belajar cepat, dan mindset growth.",
  },
]);

// Fungsi navigasi
const navigateTo = (path: string) => {
  isMobileMenuOpen.value = false;
  router.push(path);
};

const scrollToSection = (selector: string, fromMobile: boolean = false) => {
  if (fromMobile) isMobileMenuOpen.value = false;
  const element = document.querySelector(selector);
  if (element) {
    element.scrollIntoView({ behavior: "smooth" });
  }
};
</script>
