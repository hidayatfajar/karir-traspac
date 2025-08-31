<template>
    <HeaderPublic />
  <!-- Container utama dengan latar belakang dan padding yang konsisten -->
  <div class="min-h-screen w-full relative bg-gray-50 flex justify-center p-4 py-12 sm:py-20">
    <!-- Efek glow di latar belakang -->
    <div class="absolute inset-0 z-0 cool-blue-glow" />

    <!-- Kartu Detail Lowongan -->
    <div class="relative w-full max-w-4xl bg-white rounded-2xl h-fit shadow-xl ring-[5px] ring-white/50 backdrop-blur-lg overflow-hidden">
      <div class="p-8 sm:p-10">
        <!-- Header Lowongan -->
        <div class="flex flex-col sm:flex-row gap-6 items-start mb-8">
            <UAvatar :icon="job.icon" size="3xl" />
            <div class="flex-grow">
                <h1 class="text-slate-800 text-3xl font-bold leading-tight">
                    {{ job.title }}
                </h1>
                <p class="text-neutral-500 text-lg font-medium mt-1">
                    {{ job.company }}
                </p>
                <div class="flex flex-wrap gap-2 mt-4">
                    <UBadge v-for="tag in job.tags" :key="tag" :label="tag" size="md" variant="subtle" />
                </div>
            </div>
            <div class="w-full sm:w-auto flex-shrink-0">
                <UButton
                    label="Lamar Sekarang"
                    color="primary"
                    size="lg"
                    icon="i-mdi-send-outline"
                    class="w-full sm:w-auto"
                    @click="$router.push('/auth/login')"
                />
            </div>
        </div>

        <UDivider class="my-8" />

        <!-- Konten Detail -->
        <div class="grid grid-cols-1 lg:grid-cols-3 gap-8">
            <!-- Kolom Kiri: Deskripsi & Kualifikasi -->
            <div class="lg:col-span-2 space-y-8">
                <div>
                    <h2 class="text-xl font-semibold text-slate-700 mb-4">Deskripsi Pekerjaan</h2>
                    <div class="prose max-w-none text-slate-600">
                        <p v-for="(desc, index) in job.description" :key="index">{{ desc }}</p>
                    </div>
                </div>
                <div>
                    <h2 class="text-xl font-semibold text-slate-700 mb-4">Kualifikasi</h2>
                    <ul class="prose list-disc pl-5 text-slate-600 space-y-2">
                        <li v-for="(req, index) in job.requirements" :key="index">{{ req }}</li>
                    </ul>
                </div>
            </div>

            <!-- Kolom Kanan: Informasi Ringkas -->
            <div class="lg:col-span-1">
                <div class="bg-slate-50 rounded-xl p-6 space-y-4 border">
                    <h3 class="text-lg font-semibold text-slate-700 border-b pb-2">Informasi Pekerjaan</h3>
                    <div>
                        <p class="text-sm text-slate-500">Lokasi</p>
                        <p class="text-base text-slate-800 font-medium">{{ job.location }}</p>
                    </div>
                    <div>
                        <p class="text-sm text-slate-500">Gaji</p>
                        <p class="text-base text-slate-800 font-medium">{{ job.salary }}</p>
                    </div>
                </div>
            </div>
        </div>

        <!-- Tombol Kembali -->
        <div class="w-full mt-10 pt-6 border-t">
            <UButton
                label="Kembali ke Lowongan"
                color="neutral"
                variant="outline"
                icon="i-mdi-arrow-left"
                @click="$router.push('/lowongan')"
            />
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue';

definePageMeta({
    title: "Detail Lowongan Pekerjaan",
    layout: "no-layout",
    meta: [
        {
            name: "description",
            content: "Detail lowongan pekerjaan untuk posisi Marketing Specialist di Karir Traspac.",
        },
    ],
})

// Data statis untuk detail pekerjaan
const job = ref({
    id: 5,
    title: "Marketing Specialist",
    company: "Traspac",
    icon: "i-mdi-bullhorn-outline",
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
});
</script>

<style>

/* Style kustom (sama seperti halaman login) */
.cool-blue-glow {
  background: #ffffff;
  background-image: radial-gradient(
      circle 900px at bottom left,
      rgba(12, 49, 90, 0.2), /* Disesuaikan dengan warna primary-500 */
      transparent 70%
    ),
    radial-gradient(
      circle 900px at top right,
      rgba(12, 49, 90, 0.2), /* Disesuaikan dengan warna primary-500 */
      transparent 70%
    );
  filter: blur(80px);
  background-repeat: no-repeat;
}
</style>
