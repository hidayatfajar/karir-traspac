export const useDataMasterStore = defineStore("useDataMasterStore", () => {
  const router = useRouter();
  const listData = ref<any[]>([]);
  const loading = ref(false);
  const path = "/admin/master";

  interface DataMasterPayload {
    params?: Record<string, any>;
    master: string;
    payload?: Record<string, any>;
    id?: string | number;
  }

  const loadDataMaster = async (payload?: DataMasterPayload) => {
    try {
      const response = await request.get(`${path}/${payload?.master}`, {
        params: payload?.params,
      });

      const data = response.data || [];
      return {
        status: true as boolean,
        message: data.message || ("Data master berhasil dimuat." as string),
        data: data.data.data || ([] as Array<any>),
        total_halaman: data.data.total_halaman || (1 as number),
        total_data: data.data.total_data || (0 as number),
        halaman_sekarang: data.data.halaman_sekarang || (1 as number),
      };
    } catch (e) {
      console.error("Error loading data master:", e);
      if (process.env.NODE_ENV !== "production") {
        console.error("err", e);
      }
      if (e.message.toLowerCase().includes("network")) {
        return {
          status: false,
          message: "Koneksi bermasalah, silakan cek koneksi internet.",
        };
      } else if (e?.response?.data) {
        const { name, message } = e?.response?.data as any;
        return {
          status: false,
          errors: name,
          message,
        };
      } else {
        return {
          status: false,
          errors: "Error",
          message: e,
        };
      }
    }
  };

  const saveDataMaster = async (payload?: DataMasterPayload) => {
    try {
      const { data } = await request.post(
        `${path}/${payload.master}/simpan`,
        payload
      );
      return {
        status: true as boolean,
        message: data.message || "Data master berhasil disimpan.",
        data: data.data || null,
      };
    } catch (e) {
      console.error("Error saving data master:", e);
      if (process.env.NODE_ENV !== "production") {
        console.error("err", e);
      }
      if (e.message.toLowerCase().includes("network")) {
        return {
          status: false,
          message: "Koneksi bermasalah, silakan cek koneksi internet.",
        };
      } else if (e?.response?.data) {
        const { name, message } = e?.response?.data as any;
        return {
          status: false,
          errors: name,
          message,
        };
      } else {
        return {
          status: false,
          errors: "Error",
          message: e,
        };
      }
    }
  };

  const deleteDataMaster = async (payload?: DataMasterPayload) => {
    try {
      const { data } = await request.post(
        `${path}/${payload.master}/${payload.id}/hapus`,
        payload
      );
      return {
        status: true as boolean,
        message: data.message || "Data master berhasil dihapus.",
        data: data.data || null,
      };
    } catch (e) {
      console.error("Error deleting data master:", e);
      if (process.env.NODE_ENV !== "production") {
        console.error("err", e);
      }
      if (e.message.toLowerCase().includes("network")) {
        return {
          status: false,
          message: "Koneksi bermasalah, silakan cek koneksi internet.",
        };
      } else if (e?.response?.data) {
        const { name, message } = e?.response?.data as any;
        return {
          status: false,
          errors: name,
          message,
        };
      } else {
        return {
          status: false,
          errors: "Error",
          message: e,
        };
      }
    }
  };

  const setToggleActive = async (payload: DataMasterPayload) => {
    try {
      const { data } = await request.post(
        `${path}/${payload.master}/${payload.id}/toggle-default`,
        payload
      );
      return {
        status: true as boolean,
        message: data.message || "Status berhasil diubah.",
        data: data.data || null,
      };
    } catch (e) {
      console.error("Error toggling active status:", e);
      if (process.env.NODE_ENV !== "production") {
        console.error("err", e);
      }
      if (e.message.toLowerCase().includes("network")) {
        return {
          status: false,
          message: "Koneksi bermasalah, silakan cek koneksi internet.",
        };
      } else if (e?.response?.data) {
        const { name, message } = e?.response?.data as any;
        return {
          status: false,
          errors: name,
          message,
        };
      } else {
        return {
          status: false,
          errors: "Error",
          message: e,
        };
      }
    }
  }

  return {
    listData,
    loading,
    path,
    loadDataMaster,
    saveDataMaster,
    deleteDataMaster,
    setToggleActive,
  };
});
