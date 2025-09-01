<template>
  <div>
    <section id="hero-section" class="bg-white py-16">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 class="text-4xl md:text-5xl font-bold text-primary mb-6">
          Pertanyaan Umum
        </h2>
        <p class="text-lg text-gray-600 mb-8 max-w-3xl mx-auto">
          Temukan jawaban untuk pertanyaan yang sering diajukan seputar karir
          dan proses rekrutmen di
          <span class="text-primary font-semibold">Karir Traspac</span>.
        </p>
      </div>
    </section>
    <section id="search-faq" class="bg-gray-50 py-12">
      <div class="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="bg-white rounded-2xl shadow-lg p-8">
          <div class="relative">
            <UInput
              v-model="searchQuery"
              size="xl"
              placeholder="Cari pertanyaan atau kata kunci..."
              type="search"
              class="w-full"
              icon="i-heroicons-magnifying-glass"
            />
          </div>
        </div>
      </div>
    </section>
    <section id="faq-categories" class="py-8">
      <div class="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="flex flex-wrap justify-center gap-4">
          <UButton
            v-for="klasifikasi in listKlasifikasi"
            :key="klasifikasi.value"
            :variant="tabActive === klasifikasi.value ? 'solid' : 'outline'"
            :color="tabActive === klasifikasi.value ? 'primary' : 'neutral'"
            class="px-6 py-3 rounded-xl font-medium transition-all"
            @click="changeTab(klasifikasi.value)"
          >
            {{ klasifikasi.text }}
          </UButton>
        </div>
      </div>
    </section>
    <section id="faq-list" class="py-8">
      <div class="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="space-y-4">
          <div
            v-for="faq in filteredFaqs"
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
                :name="expandedFaqs.includes(faq.id) ? 'i-heroicons-minus' : 'i-heroicons-plus'"
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
    <section id="contact-support" class="py-16 bg-white">
      <div class="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h3 class="text-2xl font-bold text-primary mb-4">
          Masih Ada Pertanyaan?
        </h3>
        <p class="text-gray-600 mb-8">
          Tim HR kami siap membantu menjawab pertanyaan Anda
        </p>
        <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div class="bg-gray-50 rounded-2xl p-6 text-center">
            <UIcon
              name="i-heroicons-envelope"
              class="text-primary text-5xl mb-4 mx-auto"
            />
            <h4 class="font-semibold text-gray-900 mb-2">Email Support</h4>
            <p class="text-gray-600 mb-4">Kirim pertanyaan Anda via email</p>
            <UButton
              @click="sendEmail"
              variant="solid"
              color="primary"
              class="px-6 py-3 rounded-xl font-medium hover:bg-opacity-90 transition-all"
            >
              info@traspac.co.id
            </UButton>
          </div>
          <div class="bg-gray-50 rounded-2xl p-6 text-center">
            <UIcon
              name="i-heroicons-phone"
              class="text-primary text-5xl mb-4 mx-auto"
            />
            <h4 class="font-semibold text-gray-900 mb-2">Phone Support</h4>
            <p class="text-gray-600 mb-4">Hubungi kami di jam kerja</p>
            <UButton
              variant="solid"
              @click="callPhone"
              color="primary"
              class="px-6 py-3 rounded-xl font-medium hover:bg-opacity-90 transition-all"
            >
              (021) 31997486
            </UButton>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script setup lang="ts">
// Reactive data
const tabActive = ref(null);
const searchQuery = ref('');
const expandedFaqs = ref<number[]>([]);

// Methods
const changeTab = (tab: string | null) => {
  tabActive.value = tab;
};

const toggleFaq = (id: number) => {
  const index = expandedFaqs.value.indexOf(id);
  if (index > -1) {
    expandedFaqs.value.splice(index, 1);
  } else {
    expandedFaqs.value.push(id);
  }
};

const listKlasifikasi = ref([
  {
    text: "Semua",
    value: null,
  },
  {
    text: "Application",
    value: "application",
  },
  {
    text: "Interview",
    value: "interview",
  },
  {
    text: "Benefits",
    value: "benefits",
  },
  {
    text: "Career",
    value: "career",
  },
]);

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

// Computed properties
const filteredFaqs = computed(() => {
  let filtered = listFaq.value;

  // Filter by category
  if (tabActive.value) {
    filtered = filtered.filter(faq => faq.category === tabActive.value);
  }

  // Filter by search query
  if (searchQuery.value) {
    const query = searchQuery.value.toLowerCase();
    filtered = filtered.filter(faq => 
      faq.question.toLowerCase().includes(query) || 
      faq.answer.toLowerCase().includes(query)
    );
  }

  return filtered;
});

const callPhone = () => {
  window.open("tel:(021) 31997486");
};

const sendEmail = () => {
  window.open("mailto:info@traspac.co.id");
};
</script>

<style scoped></style>
