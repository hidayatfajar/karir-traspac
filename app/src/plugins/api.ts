import { ofetch } from 'ofetch';
import { useAuthStore } from '~/store';

export default defineNuxtPlugin((nuxtApp) => {
  const config = useRuntimeConfig();
  
  const api = ofetch.create({
    baseURL: config.public.backendApiUrl || import.meta.env.VITE_APP_BASE_API,

    async onRequest({ options }) {
      const authStore = useAuthStore();
      
      if (authStore.isAuthenticated && authStore.user?.token) {
        options.headers = new Headers(options.headers);
        options.headers.set('TTOKEN', authStore.user.token);
      }
    },

    async onResponseError({ response }) {
      const authStore = useAuthStore();

      if (response.status === 401) {
        if (authStore.isAuthenticated) {
          console.log('Token tidak valid atau kedaluwarsa. Melakukan logout otomatis.');
          
          await authStore.logout({ callApi: false }); 
        }
      }
    }
  });

  nuxtApp.provide('api', api);
});