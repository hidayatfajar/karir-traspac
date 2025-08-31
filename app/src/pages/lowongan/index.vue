<template>
  <div>
    <section
      class="px-4 md:px-8 lg:px-16 xl:px-40 py-12 bg-white"
    >
      <div class="container mx-auto px-6">
        <h2
          class="text-2xl sm:text-3xl font-bold tracking-tight mb-8 md:mb-12 text-center"
        >
          Lowongan Tersedia
        </h2>
        <div
          class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-6 md:gap-8"
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
  </div>
</template>

<script setup lang="ts">
definePageMeta({
  title: "Lowongan Pekerjaan",
  meta: [
    {
      name: "description",
      content: "Temukan lowongan pekerjaan impianmu di sini.",
    },
  ],
});

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
  // make 6 more
  {
    id: 4,
    title: "Data Analyst",
    company: "InsightAnalytics",
    icon: "i-mdi-chart-line",
    tags: ["Full-time", "Remote", "SQL", "Python"],
    description: [
      "Kami mencari Data Analyst yang terampil untuk menganalisis data dan memberikan wawasan yang berharga bagi tim kami.",
      "Anda akan bekerja dengan dataset besar, melakukan analisis statistik, dan menyajikan temuan Anda kepada pemangku kepentingan.",
    ],
    requirements: [
      "Pengalaman minimal 2 tahun sebagai Data Analyst",
      "Mahir dalam SQL dan alat analisis data (mis. Tableau, Power BI)",
      "Pengalaman dengan bahasa pemrograman seperti Python atau R",
    ],
    location: "Jakarta, Indonesia",
    salary: "Rp 12-18jt",
  },
  {
    id: 5,
    title: "Marketing Specialist",
    company: "MarketPro",
    icon: "i-mdi-bullhorn",
    tags: ["Full-time", "On-site", "Digital Marketing"],
    description: [
      "Bergabunglah dengan tim kami sebagai Marketing Specialist untuk mengembangkan dan melaksanakan strategi pemasaran digital.",
      "Anda akan bertanggung jawab untuk mengelola kampanye iklan, menganalisis kinerja, dan meningkatkan visibilitas merek.",
    ],
    requirements: [
      "Pengalaman minimal 3 tahun dalam pemasaran digital",
      "Mahir dalam alat pemasaran seperti Google Ads, Facebook Ads, dan SEO",
      "Kemampuan analitis yang kuat dan perhatian terhadap detail",
    ],
    location: "Bandung, Indonesia",
    salary: "Rp 10-15jt",
  },
  {
    id: 6,
    title: "Product Manager",
    company: "Productify",
    icon: "i-mdi-package-variant",
    tags: ["Full-time", "Remote", "Agile"],
    description: [
      "Kami mencari Product Manager yang berpengalaman untuk memimpin pengembangan produk kami.",
      "Anda akan bekerja sama dengan tim lintas fungsi untuk merencanakan, mengembangkan, dan meluncurkan produk yang memenuhi kebutuhan pelanggan.",
    ],
    requirements: [
      "Pengalaman minimal 5 tahun dalam manajemen produk",
      "Mahir dalam metodologi Agile dan alat manajemen proyek",
      "Kemampuan komunikasi yang kuat dan keterampilan kepemimpinan",
    ],
    location: "Jakarta, Indonesia",
    salary: "Rp 20-30jt",
  },
  {
    id: 7,
    title: "DevOps Engineer",
    company: "CloudSolutions",
    icon: "i-mdi-cloud",
    tags: ["Full-time", "On-site", "AWS", "Docker"],
    description: [
      "Bergabunglah sebagai DevOps Engineer untuk mengelola infrastruktur cloud dan otomatisasi proses pengembangan.",
      "Anda akan bertanggung jawab untuk mengelola server, mengoptimalkan CI/CD pipeline, dan memastikan ketersediaan sistem.",
    ],
    requirements: [
      "Pengalaman minimal 3 tahun dalam DevOps",
      "Mahir dalam AWS, Docker, dan Kubernetes",
      "Pengalaman dengan alat pemantauan dan logging seperti Prometheus, Grafana, dan ELK stack",
    ],
    location: "Bali, Indonesia",
    salary: "Rp 15-25jt",
  },
];

</script>

<style scoped></style>
