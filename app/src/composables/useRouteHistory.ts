import { ref, readonly } from 'vue';
import type { RouteLocationNormalized } from 'vue-router';

// State dibuat di luar fungsi agar menjadi singleton (hanya ada satu)
const previousRoute = ref<RouteLocationNormalized | null>(null);
const currentRoute = ref<RouteLocationNormalized | null>(null);

/**
 * Composable untuk melacak riwayat rute sebelumnya dan saat ini.
 * Cukup panggil sekali di file app.vue atau layout utama.
 */
export function useRouteHistory() {
  const router = useRouter();
  
  // Pastikan hook hanya terpasang sekali
  if (currentRoute.value === null) {
    router.beforeEach((to, from) => {
      previousRoute.value = from;
      currentRoute.value = to;
    });
  }

  return {
    // Gunakan readonly agar tidak bisa diubah dari luar secara tidak sengaja
    previousRoute: readonly(previousRoute),
    currentRoute: readonly(currentRoute),
  };
}