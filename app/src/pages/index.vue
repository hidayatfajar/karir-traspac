<template>
  <div>
    <main class="overflow-x-hidden xl:-mx-[150px]">
      <!-- Hero Section -->
      <section
        id="hero"
        class="relative px-4  md:px-8 lg:px-16 xl:px-40 py-12 sm:py-16 md:py-20 lg:py-[56px] bg-slate-50"
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
              src="https://storage.googleapis.com/uxpilot-auth.appspot.com/c6667673b9-05d9b3aee6af7abcf6d0.png"
              alt="Tim teknologi yang beragam sedang bekerja bersama"
              onerror="this.onerror=null;this.src='https://placehold.co/600x400/e0e7ff/4338ca?text=Inovasi'"
            />
          </div>
        </div>
      </section>

      <!-- Jobs Section -->
      <section
        id="jobs"
        class="px-4 sm:px-6 md:px-8 lg:px-16 xl:px-40 py-12 sm:py-16 md:py-20 lg:py-[86px] bg-white"
      >
        <div class="container mx-auto px-6">
          <h2
            class="text-2xl sm:text-3xl font-bold tracking-tight mb-8 md:mb-12 text-center"
          >
            Lowongan Tersedia
          </h2>
          <div
            class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8"
          >
            <div
              v-for="job in jobListings"
              :key="job.id"
              class="group relative bg-white rounded-xl border border-slate-200 hover:shadow-2xl hover:border-primary-300 transition-all duration-300 transform hover:-translate-y-2"
            >
              <div class="p-6">
                <div class="flex items-center mb-4">
                  <UAvatar
                    :icon="job.icon"
                    size="lg"
                    class="bg-primary-50 text-primary"
                  />
                  <div class="ml-4">
                    <h3 class="text-lg font-semibold text-gray-900">
                      {{ job.title }}
                    </h3>
                    <p class="text-sm text-gray-500">{{ job.company }}</p>
                  </div>
                </div>
                <div class="flex flex-wrap gap-2 mb-4">
                  <UBadge
                    v-for="tag in job.tags"
                    :key="tag"
                    :label="tag"
                    size="sm"
                    variant="subtle"
                  />
                </div>
                <p class="text-gray-600 text-sm mb-4 line-clamp-2">
                  {{ job.description[0] }}
                </p>
                <div class="flex justify-between items-center text-sm">
                  <span class="text-gray-500 flex items-center"
                    ><UIcon name="i-mdi-map-marker-outline" class="mr-1" />{{
                      job.location
                    }}</span
                  >
                  <span class="text-primary font-medium">{{ job.salary }}</span>
                </div>
              </div>
              <div class="border-t border-slate-200 p-4">
                <UButton
                  label="Lihat Detail"
                  @click="$router.push(`/lowongan/${job.id}`)"
                  block
                  variant="soft"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      <!-- Recruitment Process -->
      <section id="process" class="py-20 bg-white">
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

      <!-- Career Path Section -->
      <!-- <section
          id="career"
          class="px-4 sm:px-6 md:px-8 lg:px-16 xl:px-40 py-12 sm:py-16 md:py-20 lg:py-[86px] relative overflow-hidden bg-white"
        >
          <div class="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
            <div class="text-center mb-12 md:mb-16">
              <h2 class="text-2xl sm:text-3xl font-bold text-gray-900 mb-4">
                Jenjang Karir
              </h2>
              <p class="text-gray-600 max-w-2xl mx-auto text-sm sm:text-base">
                Temukan jalur karir yang sesuai dengan minat dan kemampuan Anda.
              </p>
            </div>
            <div
              class="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-8 md:gap-12 xl:gap-8"
            >
              <div
                v-for="(path, index) in careerPaths"
                :key="path.title"
                class="relative"
              >
                <div
                  :class="[
                    'absolute -inset-4 rounded-xl opacity-20 transform',
                    path.bg,
                    path.rotation.bg,
                  ]"
                ></div>
                <div
                  :class="[
                    'relative bg-white p-6 md:p-8 rounded-xl border-2 border-dotted transition duration-300 transform hover:rotate-0',
                    path.border,
                    path.rotation.card,
                  ]"
                >
                  <div
                    class="w-12 h-12 sm:w-16 sm:h-16 rounded-full bg-gradient-to-r from-indigo-600 to-purple-600 flex items-center justify-center text-white text-xl sm:text-2xl mb-4 md:mb-6"
                  >
                    <UIcon :name="path.icon" class="text-2xl sm:text-3xl" />
                  </div>
                  <h3 class="text-lg sm:text-xl font-bold text-gray-900 mb-3">
                    {{ path.title }}
                  </h3>
                  <ul class="space-y-2 text-gray-600 text-sm sm:text-base">
                    <li v-for="level in path.levels" :key="level">
                      {{ level }}
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </section> -->

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
        <!-- Decorative Circles -->
        <div
          class="absolute -top-20 -left-20 w-40 h-40 rounded-full bg-blue-500/20 blur-xl"
        ></div>
        <div
          class="absolute top-20 -right-10 w-32 h-32 rounded-full bg-green-400/15 blur-lg"
        ></div>
        <div
          class="absolute -bottom-16 left-1/4 w-48 h-48 rounded-full bg-amber-400/10 blur-2xl"
        ></div>
        <div
          class="absolute bottom-10 right-1/3 w-24 h-24 rounded-full bg-emerald-400/20 blur-md"
        ></div>
        <div
          class="absolute top-1/2 left-10 w-16 h-16 rounded-full bg-blue-400/25 blur-sm"
        ></div>
        <div
          class="absolute top-1/3 right-10 w-20 h-20 rounded-full bg-purple-400/15 blur-lg"
        ></div>

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
              Temukan jawaban atas pertanyaan yang sering diajukan.
            </p>
          </div>
          <UAccordion :items="faqItems" class="max-w-3xl mx-auto space-y-4">
            <!-- <template #default="{ item, open }">
                <UButton
                  color="neutral"
                  variant="ghost"
                  class="border border-slate-200 hover:bg-slate-50 rounded-xl shadow-sm w-full text-left p-4 md:p-6"
                >
                  <span
                    class="text-base sm:text-lg font-medium text-gray-900"
                    >{{ item.label }}</span
                  >
                  <template #trailing>
                    <UIcon
                      :name="open ? 'i-mdi-minus' : 'i-mdi-plus'"
                      class="w-5 h-5 ms-auto transform transition-transform duration-200 text-primary"
                    />
                  </template>
                </UButton>
              </template> -->
          </UAccordion>
        </div>
      </section>
    </main>
  </div>
</template>

<script setup lang="ts">
import { ref } from "vue";

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

// Data dummy untuk lowongan
const jobListings = [
  {
    id: 1,
    title: "Frontend Developer",
    company: "TechCorp Inc.",
    icon: "i-mdi-code-braces",
    tags: ["Full-time", "Remote", "JavaScript", "React"],
    description: [
      "Kami mencari Frontend Developer berpengalaman untuk mengembangkan aplikasi web modern menggunakan React.js.",
      "Anda akan bertanggung jawab untuk membangun antarmuka pengguna yang responsif dan interaktif, bekerja sama dengan tim desain untuk menerapkan mockup, dan berkolaborasi dengan tim backend untuk mengintegrasikan API.",
    ],
    requirements: [
      "Pengalaman minimal 2 tahun sebagai Frontend Developer",
      "Mahir dalam HTML, CSS, dan JavaScript (ES6+)",
      "Pengalaman kuat dengan React.js dan ekosistemnya",
      "Familiar dengan konsep RESTful API",
    ],
    location: "Jakarta, Indonesia",
    salary: "Rp 12-18jt",
  },
  {
    id: 2,
    title: "Backend Engineer",
    company: "DataSystems Ltd.",
    icon: "i-mdi-server",
    tags: ["Full-time", "On-site", "Node.js", "MongoDB"],
    description: [
      "Bergabunglah sebagai Backend Engineer untuk membangun dan mengoptimalkan API dan layanan mikro kami.",
      "Anda akan merancang dan mengimplementasikan solusi backend yang skalabel, mengoptimalkan kinerja database, dan memastikan keamanan sistem kami.",
    ],
    requirements: [
      "Pengalaman minimal 3 tahun dalam pengembangan backend",
      "Mahir dalam Node.js dan Express.js",
      "Pengalaman dengan database NoSQL (MongoDB) dan SQL",
      "Memahami arsitektur mikroservis",
    ],
    location: "Bandung, Indonesia",
    salary: "Rp 15-20jt",
  },
  {
    id: 3,
    title: "UI/UX Designer",
    company: "CreativeMinds",
    icon: "i-mdi-palette-outline",
    tags: ["Contract", "Hybrid", "Figma"],
    description: [
      "Kami mencari desainer berbakat untuk menciptakan pengalaman pengguna yang luar biasa untuk produk digital kami.",
      "Anda akan bertanggung jawab untuk merancang antarmuka pengguna yang intuitif dan estetis, melakukan penelitian pengguna, dan membuat prototipe.",
    ],
    requirements: [
      "Portofolio yang menunjukkan keterampilan desain UI/UX yang kuat",
      "Mahir dalam alat desain seperti Figma, Adobe XD, atau Sketch",
      "Memahami prinsip-prinsip UX dan metodologi penelitian pengguna",
    ],
    location: "Surabaya, Indonesia",
    salary: "Rp 10-15jt",
  },
];

// Data untuk Jenjang Karir
const careerPaths = [
  {
    title: "Teknologi",
    icon: "i-mdi-code-tags",
    levels: [
      "Junior Developer",
      "Mid-level Developer",
      "Senior Developer",
      "Tech Lead",
      "CTO",
    ],
    bg: "bg-indigo-100",
    border: "border-indigo-200",
    rotation: { bg: "rotate-3", card: "-rotate-1" },
  },
  {
    title: "Bisnis",
    icon: "i-mdi-chart-line",
    levels: ["Staff", "Supervisor", "Manager", "Director", "VP"],
    bg: "bg-purple-100",
    border: "border-purple-200",
    rotation: { bg: "-rotate-3", card: "rotate-1" },
  },
  {
    title: "Kreatif",
    icon: "i-mdi-palette-swatch-outline",
    levels: [
      "Junior Designer",
      "Designer",
      "Senior Designer",
      "Art Director",
      "Creative Director",
    ],
    bg: "bg-blue-100",
    border: "border-blue-200",
    rotation: { bg: "rotate-3", card: "-rotate-1" },
  },
];

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
const faqItems = [
  {
    label: "Bagaimana cara mendaftar di Karir Traspac?",
    content:
      'Anda bisa mendaftar dengan mengklik tombol "Daftar" di bagian atas halaman, kemudian mengisi formulir pendaftaran dengan data diri yang valid. Setelah itu, Anda akan menerima email verifikasi untuk mengaktifkan akun.',
  },
  {
    label: "Apakah ada biaya untuk menggunakan platform ini?",
    content:
      "Platform ini sepenuhnya gratis untuk pencari kerja. Kami tidak memungut biaya apapun untuk melihat lowongan, melamar pekerjaan, atau menggunakan fitur-fitur lainnya.",
  },
  {
    label: "Bagaimana cara melamar pekerjaan?",
    content:
      'Setelah menemukan lowongan yang sesuai, klik tombol "Lihat Detail" yang akan mengarahkan Anda ke halaman detail pekerjaan. Di sana Anda dapat mengikuti instruksi untuk melamar.',
  },
  {
    label: "Apakah data pribadi saya aman?",
    content:
      "Kami sangat serius dalam menjaga keamanan dan privasi data pengguna. Semua informasi pribadi Anda dilindungi dan hanya akan dibagikan kepada perusahaan setelah Anda menyetujui untuk melamar pekerjaan tertentu.",
  },
];

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
