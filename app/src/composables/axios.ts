import axios from "axios";
import { useAuthStore } from "~/store";

export const request = axios.create({
  baseURL: import.meta.env.VITE_APP_BASE_API,
  timeout: 600000,
});

let retryCount = 1;

request.interceptors.request.use(function (config) {
  const auth = useAuthStore();
  const { loading, user } = storeToRefs(auth);

  loading.value = true;

  if (user.value && user.value.token) {
    config.headers.set("TTOKEN", user.value.token);
  }

  return config;
});

request.interceptors.response.use(
  (response) => {
    const auth = useAuthStore();
    if (auth) {
      const { loading } = storeToRefs(auth);
      setTimeout(() => {
        loading.value = false;
      }, 1000);
    }
    retryCount = 0; // Reset retry count on successful response
    return response;
  },
  async (error) => {
    const auth = useAuthStore();
    if (auth) {
      const { loading } = storeToRefs(auth);
      loading.value = false;
    }
    if (process.env.NODE_ENV !== "production") {
      console.error("ERROR AXIOS", error);
    }
    if (!error?.response) {
      error.response = {
        data: {
          code: 500,
          message: "Server dalam perbaikan.",
          data: null,
          errors: null,
        },
      };
      return Promise.reject(error);
    }

    if (error?.message?.toLowerCase()?.includes("network")) {
      error.response.data = {
        ...error.response?.data,
        code: 503,
        message: "Koneksi bermasalah, silakan cek koneksi internet.",
        data: null,
        errors: null,
      };
    } else {
      const code = parseInt(error?.response && error?.response?.status);

      // console.log("error", error);
      switch (code) {
        case 401:
          error.response.data = {
            ...error.response?.data,
            code: 401,
            message:
              "Anda belum login atau token sudah kadaluarsa, silahkan login terlebih dahulu.",
            data: null,
            errors: null,
          };

          // redirect("/login");
          if (import.meta.client) useAuthStore()?.logout();
          break;
        case 403:
          error.response.data = {
            ...error.response?.data,
            code: 403,
            message: "Anda tidak memiliki akses ke halaman ini.",
            data: null,
            errors: null,
          };
          // redirect("/no-access");
          $router.push({ path: "/no-access" });
          break;
        case 502:
          error.response.data = {
            ...error.response?.data,
            code: 502,
            message: "Aplikasi sedang tidak terkoneksi ke server.",
            data: null,
            errors: null,
          };
          break;
        case 413:
          error.response.data = {
            ...error.response?.data,
            code: 413,
            message: "File gagal diunggah.",
            data: null,
            errors: null,
          };
          break;
        case 500:
          error.response.data = {
            ...error.response?.data,
            code: 500,
            message:
              (error?.response?.error ?? error?.response?.data?.message) ||
              "Server dalam perbaikan.",
            data: null,
            errors: null,
          };
          break;
      }

      return Promise.reject(error);
    }
  }
);
