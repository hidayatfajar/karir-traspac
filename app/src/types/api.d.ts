import { type Ofetch } from 'ofetch';

// File ini memberitahu TypeScript tentang properti yang kita 'provide' di plugin.

declare module '#app' {
  // Ini agar bisa diakses via useNuxtApp().$api
  interface NuxtApp {
    $api: Ofetch;
    $local: Ofetch;
  }
}

declare module 'vue' {
  // Ini agar bisa diakses via this.$api di Options API dan di dalam template
  interface ComponentCustomProperties {
    $api: Ofetch;
    $local: Ofetch;
  }
}

// Ini wajib ada untuk memastikan file ini diperlakukan sebagai module.
export {};