import axios from 'axios';
import { useAuthStore } from '~/store';

export default defineNuxtPlugin(() => {
  const authStore = useAuthStore();
  const runtimeConfig = useRuntimeConfig();

  const axiosInstance = axios.create({
    baseURL: runtimeConfig.public.backendApiUrl as string,
    timeout: 10000, // 10 detik
  });

  // Interceptor untuk Request (sebelum request dikirim)
  axiosInstance.interceptors.request.use(
    (config) => {
      authStore.setLoading(true);
      
      // Tambahkan token ke header jika ada
      const token = authStore.user?.token;
      if (token) {
        config.headers.TTOKEN = token;
      }
      
      return config;
    },
    (error) => {
      authStore.setLoading(false);
      return Promise.reject(error);
    }
  );

  // Interceptor untuk Response (setelah response diterima)
  axiosInstance.interceptors.response.use(
    (response) => {
      authStore.setLoading(false);
      // Kembalikan data dari respons agar tidak perlu .data lagi
      return response.data;
    },
    (error) => {
      authStore.setLoading(false);
      
      // Tangani auto-logout untuk 401/403
      if (error.response?.status === 401 || error.response?.status === 403) {
        // Panggil logout TAPI jangan lakukan navigasi di sini
        // Cukup bersihkan state dan biarkan middleware yang mengurus redirect
        authStore.logout();
        console.warn("Unauthorized access detected, user logged out.");
      }
      
      return Promise.reject(error);
    }
  );

  // Sediakan instance ini ke seluruh aplikasi sebagai $axios
  return {
    provide: {
      axios: axiosInstance,
    },
  };
});