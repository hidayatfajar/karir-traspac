import type { User } from "~/server/types";
import { isSlicingMode, isProductionMode } from "~/config/app-mode";

export const useAuthStore = defineStore("auth", () => {
  const router = useRouter();
  const user = ref(null) as any;
  const loading = ref(false);
  const sessionChecked = ref(false);

  const isAuthenticated = computed(() => !!user.value);
  const userRoles = computed((): string[] => user.value?.roles || []);

  function setLoading(value: boolean) {
    loading.value = value;
  }

  async function fetchUser() {
    try {
      let response;
      
      // Use mock auth in both DEVELOPMENT and PRODUCTION mode for static demo
      if (true) { // Always use mock for now, change to isSlicingMode() || isProductionMode() for API
        const { mockFetchUser } = useMockAuth();
        response = await mockFetchUser();
      } else {
        // Real API call (will be used later)
        response = await $fetch("/auth/me", {
          headers: useRequestHeaders(["cookie"]) as HeadersInit,
        });
      }
      
      if (response.status) {
        user.value = response.data;
        console.log("User data fetched successfully:", user.value);
        console.log("message:", response.message);
      } else {
        user.value = null;
      }
    } catch (error) {
      user.value = null;
      console.error("Error fetching user data:", error);
    } finally {
      sessionChecked.value = true;
    }
  }

  async function fetchHakAksesModul(payload?: object) {
    try {
      const response = await $fetch<{
        status: boolean;
        message: string;
        data: any;
      }>("/auth/hak-akses", {
        params: payload,
      });
      console.log("Hak akses modul response:", response);

      if (response.status) {
        user.value.hak_akses_modul = response.data || [];
        console.log(
          "Hak akses modul fetched successfully:",
          user.value.hak_akses_modul
        );
        return {
          data: user.value.hak_akses_modul,
          status: true,
          message: response.message,
        };
      } else {
        throw new Error(response.message);
      }
    } catch (error) {
      console.error("Error fetching hak akses modul:", error);
      const errorMessage =
        error.data?.message ||
        error.message ||
        "Failed to fetch hak akses modul.";
      return {
        status: false,
        message: errorMessage,
        data: null,
      };
    }
  }

  async function login(payload: { email: string; password: string }) {
    try {
      let response;
      
      // Use mock auth in both DEVELOPMENT and PRODUCTION mode for static demo
      if (true) { // Always use mock for now
        const { mockLogin } = useMockAuth();
        response = await mockLogin(payload.email, payload.password);
      } else {
        // Real API call (will be used later)
        response = await $fetch<{
          data: User;
          status: boolean;
          message: string;
        }>("/auth/login", {
          method: "POST",
          body: payload,
        });
      }
      
      if (response.status) {
        await fetchUser();
        console.log("Login successful, user data:", user.value);
        sessionChecked.value = true;
      }

      return {
        data: response.data,
        message: response.message,
        status: response.status,
      };
    } catch (error) {
      console.error("Login error:", error);
      return {
        data: null,
        message: error.message || 'Login failed',
        status: false,
      };
    }
  }

  async function logout(options: { callApi?: boolean } = { callApi: true }) {
    try {
      if (options.callApi) {
        // Use mock auth in both DEVELOPMENT and PRODUCTION mode for static demo
        if (true) { // Always use mock for now
          const { mockLogout } = useMockAuth();
          await mockLogout();
        } else {
          // Real API call (will be used later)
          await $fetch("/auth/logout", { method: "POST" });
        }
      }
    } catch (error) {
      console.error(
        "Gagal menghubungi API logout, tapi sesi lokal tetap dihapus.",
        error
      );
    }

    user.value = null;
    sessionChecked.value = false;
    console.log("Sesi lokal dibersihkan.");

    const router = useRouter();
    await router.push("/auth/login");

    return { status: true, message: "Logout berhasil." };
  }
  // ...

  return {
    user,
    loading,
    isAuthenticated,
    userRoles,
    sessionChecked,
    fetchUser,
    login,
    logout,
    fetchHakAksesModul,
    setLoading,
  };
});
