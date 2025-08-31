import type { User } from "~/server/types";

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
      const { data, status, message } = await $fetch("/auth/me", {
        headers: useRequestHeaders(["cookie"]) as HeadersInit,
      });
      if (status) {
        user.value = data;
        console.log("User data fetched successfully:", user.value);
        console.log("message:", message);
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

  async function login(payload: object) {
    const { data, status, message } = await $fetch<{
      data: User;
      status: boolean;
      message: string;
    }>("/auth/login", {
      method: "POST",
      body: payload,
    });
    if (status) {
      await fetchUser();
      console.log("Login successful, user data:", user.value);
      sessionChecked.value = true;
    }

    return {
      data,
      message,
      status,
    };
  }

  async function logout(options: { callApi?: boolean } = { callApi: true }) {
    if (options.callApi) {
      try {
        await $fetch("/auth/logout", { method: "POST" });
      } catch (error) {
        console.error(
          "Gagal menghubungi API logout, tapi sesi lokal tetap dihapus.",
          error
        );
      }
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
