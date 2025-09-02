<template>
  <div class="px-3 py-2">
    <div class="z-10 px-2 py-1 pb-5">
      <div
        class="justify-between items-center flex mx-auto px-0 sm:px-1 lg:px-2 max-w-7xl !z-10"
      >
        <img
          @click.prevent
          @click.right.prevent
          class="h-[45px] w-[45px] -intro-x !z-10"
          height="45"
          width="45"
          src="@/assets/images/logo/logo.png"
          alt="logo-kt"
        />
        <ClientOnly>
          <div class="items-center flex gap-x-4 intro-x !z-20">
            <!-- <slideOver /> -->
            <div class="w-px h-4 bg-neutral-200 mx-2"></div>
            <UPopover :popper="{ arrow: true, placement: 'bottom-end' }">
              <div class="flex items-center justify-center !z-10">
                <div class="leading-3">
                  <div class="italic font-semibold text-TERSIER capitalize">
                    {{ root.user?.nama ?? "Fajar Hidayat" }}
                  </div>
                  <div class="text-right text-sm text-919191 mt-0.5 capitalize">
                    {{ root.user?.nama_user_group ?? "Admin" }}
                  </div>
                </div>
                <UAvatar
                  v-if="root.user?.foto && root.user?.foto_link"
                  size="md"
                  class="ml-1"
                  :src="root.user?.foto_link ?? '/images/no-thumbnail.jpg'"
                  alt="Avatar"
                />
                <UIcon
                  v-else
                  class="ml-1 text-777777 text-[40px] rounded-full"
                  name="material-symbols-light:account-circle"
                  alt="Avatar"
                />
              </div>
              <template #content>
                <div v-if="!ShowForm">
                  <div class="group p-0 w-[200px] h-[44px] z-20">
                    <UButton
                      @click="ShowForm = true"
                      class="hover:text-red-500 justify-start z-20 text-neutral-500 w-[200px] h-[44px] font-medium text-sm transition-all duration-500 ease-in-out"
                      variant="ghost"
                      :loading="loading"
                      block
                      icon="i-line-md-backup-restore"
                    >
                      Ubah Kata Sandi
                    </UButton>
                  </div>
                  <div class="group p-0 w-[200px] h-[44px] z-20">
                    <UButton
                      @click="setLogout()"
                      class="hover:text-red-500 justify-start z-20 text-neutral-500 w-[200px] h-[44px] font-medium text-sm transition-all duration-500 ease-in-out"
                      variant="ghost"
                      :loading="loading"
                      block
                      icon="i-line-md-log-out"
                    >
                      Logout
                    </UButton>
                  </div>
                </div>
                <div v-else>
                  <div class="p-4 w-72 h-auto z-20">
                    <div
                      class="text-neutral-500 text-base font-bold font-['Noto Sans'] capitalize"
                    >
                      Ubah Sandi
                    </div>
                    <div class="flex-wrap py-4">
                      <div class="pb-4">
                        <TextField
                          placeholder="Masukkan Kata Sandi Lama"
                          size="md"
                          class="h-[40px]"
                          v-model="formUbahSandi.password_lama"
                          type="password"
                        />
                      </div>
                      <div class="pb-4">
                        <TextField
                          placeholder="Masukkan Kata Sandi Baru"
                          size="md"
                          class="h-[40px]"
                          v-model="formUbahSandi.password_baru"
                          type="password"
                        />
                        <div class="text-SALAH text-xs">
                          {{
                            isMatchedWithOldPassword
                              ? "Kata Sandi Baru tidak boleh sama dengan Kata Sandi Lama"
                              : ""
                          }}
                        </div>
                      </div>
                      <div>
                        <TextField
                          placeholder="Konfirmasi Kata Sandi Baru"
                          size="md"
                          class="h-[40px]"
                          v-model="formUbahSandi.password_konfirmasi"
                          type="password"
                        />
                        <div class="text-SALAH text-xs">
                          {{
                            isMatchedWithNewPassword
                              ? "Konfirmasi Kata Sandi Baru tidak sama dengan Kata Sandi Baru"
                              : ""
                          }}
                        </div>
                      </div>
                    </div>
                    <div class="flex items-center justify-center gap-2">
                      <UButton
                        @click="handleCancel()"
                        size="lg"
                        color="neutral"
                        variant="ghost"
                        label="Batal"
                        :disabled="loading"
                        class="hidden sm:flex xl:w-[90px] justify-center bg-white"
                        :trailing="false"
                      >
                        Batal
                      </UButton>
                      <UButton
                        size="lg"
                        color="primary"
                        variant="solid"
                        label="Simpan"
                        :loading="loading"
                        :disabled="
                          loading ||
                          isMatchedWithNewPassword ||
                          isMatchedWithOldPassword
                        "
                        class="hidden sm:flex xl:w-[90px] justify-center rounded-lg"
                        :trailing="false"
                        @click="ubahKataSandiUser()"
                      >
                        Simpan
                      </UButton>
                    </div>
                  </div>
                </div>
              </template>
            </UPopover>
          </div>
        </ClientOnly>
      </div>
      <div class="mx-auto max-w-7xl">
        <div class="text-center -intro-y mt-4 !z-10">
          <h1 class="text-center text-[50px] font-bold gradient-text">
            Karir Traspac
          </h1>
        </div>
        <div v-if="loadingMenu" class="z-10 py-16">
          <div class="flex flex-wrap justify-center z-10 gap-10">
            <div
              v-for="i in 16"
              :key="i"
              class="w-64 flex items-center p-2 z-10 rounded-md intro-x"
            >
              <USkeleton
                class="min-w-[71px] max-w-[71px] w-[71px] h-[71px] max-h-[71px] min-h-[71px] flex items-center justify-center p-2 rounded-md"
                :ui="{ rounded: 'rounded-lg' }"
              />
              <div>
                <USkeleton
                  class="ml-2 w-[170px] h-[20px] rounded-lg mt-1"
                  :ui="{ rounded: 'rounded-lg' }"
                />
                <USkeleton
                  class="ml-2 w-[105px] h-[20px] rounded-lg mt-2"
                  :ui="{ rounded: 'rounded-lg' }"
                />
              </div>
            </div>
          </div>
        </div>
        <div v-else class="z-10 py-16">
          <div class="flex flex-wrap justify-center z-10 gap-10">
            <div
              v-for="(val, index) in modulFiltered ?? []"
              :key="index"
              class="group w-64 flex items-center p-2 cursor-pointer z-10 border rounded-md border-transparent hover:border-primary hover:border-opacity-10 hover:shadow-sm hover:bg-primary hover:bg-opacity-10 intro-x"
              @click="goTo(val?.icon, val?.is_under_construction)"
            >
              <div
                class="min-w-[71px] max-w-[71px] w-[71px] h-[71px] max-h-[71px] min-h-[71px] bg-white flex items-center justify-center border p-2 rounded-md border-[#B5B7B954] border-opacity-50 shadow-sm"
              >
                <img
                  @click.right.prevent
                  loading="lazy"
                  width="37"
                  height="37"
                  class="mx-auto group-hover:scale-[1.35] transform transition-all duration-500"
                  :src="getAssetSrc(val?.icon) ?? '/images/no-thumbnail.jpg'"
                  :alt="val?.icon"
                />
                <!-- :src="`/images/menu/${val?.icon}.png`" -->
              </div>
              <div
                class="ml-2 text-neutral-500 text-base font-medium group-hover:text-PRIMARY"
              >
                {{ val?.name }}
              </div>
            </div>
            <div
              @click="downloadTemplate()"
              class="group w-64 flex items-center p-2 cursor-pointer z-10 border rounded-md border-transparent hover:border-PRIMARY hover:border-opacity-10 hover:shadow-sm hover:bg-PRIMARY hover:bg-opacity-10 intro-x"
            >
              <div
                class="min-w-[71px] max-w-[71px] w-[71px] h-[71px] max-h-[71px] min-h-[71px] bg-white flex items-center justify-center border p-2 rounded-md border-[#B5B7B954] border-opacity-50 shadow-sm"
              >
                <UIcon
                  v-if="loadingDownload"
                  name="line-md:loading-loop"
                  class="text-[#B5B7B9] text-[30px]"
                />
                <img
                  v-else
                  @click.right.prevent
                  loading="lazy"
                  width="37"
                  height="37"
                  class="mx-auto group-hover:scale-[1.35] transform transition-all duration-500"
                  :src="
                    getAssetSrc('buku-panduan') ?? '/images/no-thumbnail.jpg'
                  "
                  :alt="'buku-panduan'"
                />
                <!-- :src="`/images/menu/${val?.icon}.png`" -->
              </div>
              <div
                class="ml-2 text-neutral-500 text-base font-medium group-hover:text-PRIMARY"
              >
                {{ "Buku Panduan" }}
              </div>
            </div>
          </div>
        </div>
        <div
          v-if="modulFiltered?.length < 9 && !loadingMenu"
          class="h-40"
        ></div>
      </div>
    </div>
    <!-- <img
      @drag.prevent
      @click.right.prevent
      @click.prevent
      src="@/assets/images/background/background-portal.png"
      style="position: fixed !important"
      class="w-full bottom-0 left-0 right-0 fixed object-cover z-0 bg-CONTAINER intro-y"
      alt="background-portal"
      loading="lazy"
    /> -->
  </div>
</template>

<script setup lang="ts">
// global import start
// import slideOver from "@/components/views/pesanDanForum/slideOver/index.vue";
import { useAuthStore } from "~/store";
definePageMeta({
  layout: "no-layout",
  //   middleware: "admin",
});
useHead({
  title: "Menu",
  meta: [
    {
      name: "Portal Menu",
      content: "Portal Menu in Manajemen Gadik Page.",
    },
  ],
});
// global import end

// data start
const toast = useToast();
const root = useAuthStore();
const router = useRouter();
const loading = ref(false);
const loadingMenu = ref(true);
const loadingDownload = ref(false);
const hakAksesModul = ref<any[]>([]);
const existHAM = root?.user?.hak_akses_modul;
const existHAMArray = Array.isArray(existHAM)
  ? existHAM
  : existHAM?.split(";").map(Number);
const ShowForm = ref(false);
const bunchOfModul = ref([
  {
    name: "Data Master",
    icon: "data-master",
    is_under_construction: false,
    id: 15,
  },
  {
    name: "Kalender Akademik",
    icon: "kalender-akademik",
    is_under_construction: false,
    id: 6,
  },
  {
    name: "Manajemen Gadik",
    icon: "manajemen-gadik",
    is_under_construction: false,
    id: 9,
  },
  {
    name: "Manajemen Bahan Ajar",
    icon: "manajemen-bahan-ajar",
    is_under_construction: false,
    id: 8,
  },
  {
    name: "Manajemen Kuis",
    icon: "manajemen-kuis",
    is_under_construction: false,
    id: 3,
  },
  {
    name: "Manajemen Video",
    icon: "manajemen-video",
    is_under_construction: false,
    id: 12,
  },
  {
    name: "Manajemen Siswa",
    icon: "manajemen-siswa",
    is_under_construction: false,
    id: 10,
  },
  {
    name: "Manajemen Polling",
    icon: "manajemen-polling",
    is_under_construction: false,
    id: 4,
  },
  {
    name: "Manajemen Penilaian",
    icon: "manajemen-penilaian",
    is_under_construction: false,
    id: 7,
  },
  {
    name: "Manajemen Kelas",
    icon: "manajemen-kelas",
    is_under_construction: false,
    id: 1,
  },
  {
    name: "Manajemen Kehadiran",
    icon: "manajemen-kehadiran",
    is_under_construction: false,
    id: 2,
  },
  {
    name: "Manajemen Pengguna",
    icon: "manajemen-pengguna",
    is_under_construction: false,
    id: 11,
  },
  {
    name: "Pesan & Forum",
    icon: "pesan-dan-forum",
    is_under_construction: false,
    id: 13,
  },
  {
    name: "Executive Information System",
    icon: "executive-information-system",
    is_under_construction: false,
    id: 5,
  },
  {
    name: "Aktivitas Pengguna",
    icon: "aktivitas-pengguna",
    is_under_construction: false,
    id: 14,
  },
]);

const modulFiltered = computed(
  () =>
    bunchOfModul.value?.filter((modul: any) =>
      hakAksesModul.value?.includes(modul?.id)
    ) ?? []
);
// data start

const formUbahSandi = reactive({
  user_id: null,
  password_lama: "",
  password_baru: "",
  password_konfirmasi: "",
});

/// methods start

const isMatchedWithNewPassword = computed(() => {
  if (
    formUbahSandi.password_baru &&
    formUbahSandi.password_baru !== "" &&
    formUbahSandi.password_konfirmasi &&
    formUbahSandi.password_konfirmasi !== "" &&
    formUbahSandi.password_baru !== formUbahSandi.password_konfirmasi
  ) {
    return true;
  } else {
    return false;
  }
});

const isMatchedWithOldPassword = computed(() => {
  if (
    formUbahSandi.password_lama &&
    formUbahSandi.password_lama !== "" &&
    formUbahSandi.password_baru &&
    formUbahSandi.password_baru !== "" &&
    formUbahSandi.password_lama === formUbahSandi.password_baru
  ) {
    return true;
  } else {
    return false;
  }
});

const downloadTemplate = async () => {
  loadingDownload.value = true;
  //   try {
  //     const { status, message } = await downloadFile(
  //       "Buku Panduan.pdf",
  //       `download/admin/bukpan`
  //     );
  //     console.log("status", status);
  //     if (!status) {
  //       throw new Error(message);
  //     }
  //   } catch (error) {
  //     toast.add({
  //       title: "Gagal Mengunduh Data",
  //       description: error.message?.includes("404")
  //         ? "Data tidak ditemukan"
  //         : error.message ?? "Terjadi Kesalahan",
  //       color: "error",
  //     });
  //   }
  loadingDownload.value = false;
};

const getAssetSrc = (name: string) => {
  const path = `/assets/images/icon/${name}.png`;
  const modules = import.meta.glob("/assets/images/icon/*", { eager: true });
  const mod = modules[path] as { default: string };
  return mod.default;
};
const setLogout = async () => {
  loading.value = true;
  setTimeout(async () => {
    await root.logout();
    loading.value = false;
  }, 2000);
};
const goTo = (path: string, isMaintenance: boolean) => {
  if (isMaintenance) {
    throw createError({
      statusCode: 501,
      statusMessage: "Under Construction",
      fatal: true,
    });
  } else {
    router.push({ name: `admin-${path}` });
  }
};
const refreshHakAksesModul = async () => {
  try {
    loadingMenu.value = true;
    const { status, data, message } = await root.fetchHakAksesModul();
    if (status) {
      console.log("data", data);
      hakAksesModul.value = data || existHAMArray || [] || [];
      setTimeout(() => {
        loadingMenu.value = false;
      }, 1000);
    } else {
      throw new Error(message);
    }
  } catch (error) {
    hakAksesModul.value = existHAMArray || [];
    loadingMenu.value = false;
    console.error("error", error);
    toast.add({
      title: "Gagal",
      description: error.message,
      color: "error",
    });
  }
};
const handleCancel = () => {
  formUbahSandi.password_lama = "";
  formUbahSandi.password_baru = "";
  formUbahSandi.password_konfirmasi = "";
  ShowForm.value = false;
};

const ubahKataSandiUser = async () => {
  //   try {
  //     loading.value = true;
  //     const user_id = root.user?.user_id;
  //     const { status, message } = await root.ubahKataSandi({
  //       user_id: user_id,
  //       password_lama: formUbahSandi.password_lama,
  //       password_baru: formUbahSandi.password_baru,
  //       konfirmasi_password_baru: formUbahSandi.password_konfirmasi,
  //     });
  //     if (status) {
  //       toast.add({
  //         title: "Berhasil",
  //         description: "Data Kata Sandi berhasil diubah",
  //         color: "success",
  //       });
  //       formUbahSandi.password_baru = "";
  //       formUbahSandi.password_lama = "";
  //       formUbahSandi.password_konfirmasi = "";
  //       loading.value = false;
  //       ShowForm.value = false;
  //     } else {
  //       throw new Error(message);
  //     }
  //   } catch (error) {
  //     loading.value = false;
  //     toast.add({
  //       title: "Gagal Ubah Kata Sandi",
  //       description: error.message,
  //       color: "error",
  //     });
  //   }
};
// methods end

// lifecycle start
onBeforeMount(async () => {
  loading.value = false;
  // await refreshHakAksesModul();
});
// lifecycle end
</script>

<style scoped>
p {
  margin-bottom: 3px;
  background: -webkit-linear-gradient(rgb(71, 181, 255), rgb(0, 152, 255));
  -webkit-background-clip: text;
  background-clip: text;
  -webkit-text-fill-color: transparent;
}
</style>
