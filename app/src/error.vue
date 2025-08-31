<template>
  <div class="min-h-screen grid grid-cols-1 md:grid-cols-12">
    <div class="md:col-span-5 relative hidden md:block">
      <img
        class="fixed top-0 bottom-0 left-0 h-full object-cover z-0"
        :src="`/images/error/icon-${
          [501, 503].includes(error.statusCode) ? 500 : error.statusCode
        }.png`"
        alt=""
      />
    </div>
    <div
      class="col-span-1 md:col-span-7 flex items-center justify-center p-6 md:p-0"
    >
      <div class="text-center max-w-md mx-auto z-10">
        <div>
          <div
            class="font-bold text-[64px] md:text-[96px] leading-none text-PRIMARY drop-shadow-lg"
          >
            {{ error.statusCode ?? 503 }}
          </div>
          <div
            class="text-PRIMARY font-semibold text-lg md:text-xl mt-2 md:-mt-2 opacity-80"
          >
            {{ setTitle(error.statusCode) }}
          </div>
        </div>
        <div
          class="font-medium text-sm md:text-base mt-3 text-neutral-500 leading-snug"
        >
          {{ setMessage(error?.statusCode) }}
        </div>
        <div class="mt-5">
          <UButton
            variant="ghost"
            class="text-PRIMARY bg-white font-semibold text-sm w-full md:w-[164px] h-[40px] justify-center"
            @click="useBaseNavigate(store?.user?.user_group_id ?? null)"
          >
            Kembali
          </UButton>
        </div>
      </div>
    </div>
  </div>
</template>
<script setup lang="ts">
import type { NuxtError } from "#app";
import { useAuthStore } from "./store";
const store = useAuthStore();

useSeoMeta({
  title: "Page not found",
  description: "We are sorry but this page could not be found.",
});

defineProps<{
  error: NuxtError;
}>();

useHead({
  title: "Error",
  htmlAttrs: {
    lang: "en",
  },
});

const setMessage = (val: number | string) => {
  let message = null;
  switch (val) {
    case 404:
      message = "Mohon maaf, halaman yang Anda minta tidak ditemukan.";
      break;

    case 403:
      message = "Maaf, Anda tidak diizinkan mengakses halaman ini.";
      break;

    case 401:
      message = "Maaf, Anda tidak memiliki akses ke halaman ini.";
      break;

    case 500:
      message = "Maaf, terjadi kesalahan internal pada server kami.";
      break;

    case 501:
      message = "Maaf, halaman ini sedang dalam pengembangan.";
      break;

    default:
      message = "Mohon maaf, ada kesalahan pada server.";
      break;
  }

  return message;
};

const setTitle = (val: number | string) => {
  let message = null;
  switch (val) {
    case 401:
      message = "Unauthorized";
      break;

    case 403:
      message = "Forbidden";
      break;

    case 404:
      message = "Not Found";
      break;

    case 500:
      message = "Internal Server Error";
      break;

    case 501:
      message = "Under Construction";
      break;

    default:
      message = "Bad Gateway";
      break;
  }

  return message;
};

useHead({
  title: "Error",
  meta: [
    {
      name: "description",
      content: "Error page",
    },
  ],
});
</script>
