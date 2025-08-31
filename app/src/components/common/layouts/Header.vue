<template>
  <div>
    <header
      id="mainHeader"
      class="w-full h-[--header-height] px-4 sticky top-0 z-50 bg-white"
    >
      <div
        class="justify-between items-center flex mx-auto px-0 sm:px-1 lg:px-2 h-[--header-height] py-2"
        :class="fullWidth ? 'w-full' : 'max-w-[1200px]'"
      >
        <div class="hover:scale-[1.07] transition-all duration-500">
          <div
            class="justify-start items-center gap-x-4 flex cursor-pointer -intro-x"
          >
            <img
              src="~/assets/images/logo/logo-kt.png"
              alt="Karir Traspac"
              class="w-32 object-contain mx-auto"
              @click="$router.push('/')"
            />
          </div>
        </div>
        <ClientOnly>
          <UDropdownMenu
            :items="items"
            :popper="{ placement: 'bottom-end' }"
            class="cursor-pointer"
          >
            <div
              class="pl-4 pr-2 py-2 bg-white/40 rounded-[99px] outline-1 outline-offset-[-1px] outline-[#cdcdcd]/60 backdrop-blur-[12.30px] inline-flex justify-end items-center gap-2 hover:bg-white/60 transition-all duration-500"
            >
              <div
                class="self-stretch inline-flex flex-col justify-center items-end"
              >
                <div
                  class="justify-start text-[#474747] text-sm font-semibold font-['Inter']"
                >
                  {{ store.user?.nama ?? "Fajar Nur Hidayat" }}
                </div>
                <div
                  class="justify-start text-[#919191] text-xs font-medium font-['Inter']"
                >
                  {{ store.user?.nama_user_group ?? "Human Resource" }}
                </div>
              </div>
              <img
                class="w-10 h-10 relative rounded-[48px]"
                src="https://ui-avatars.com/api/?name=User&background=0D8ABC&color=fff"
              />
            </div>
          </UDropdownMenu>
        </ClientOnly>
      </div>
    </header>
  </div>
</template>

<script setup lang="ts">
import { useAuthStore } from "~/store";

const route = useRoute();
const router = useRouter();
const store = useAuthStore();
const fullWidth = ref(false);
const showForm = ref(false);
const loading = ref(false);

const items = [
  [
    {
      id: 0,
      label: "Profil",
      icon: "line-md:person",
      onSelect: () => {
        router.push("/profile");
      },
    },
    {
      id: 3,

      label: "Ubah Kata Sandi",
      icon: "mdi:password-outline",
      onSelect: () => {
        showForm.value = true;
      },
    },
    {
      id: 1,
      label: "Sign out",
      icon: "line-md:logout",
      onSelect: () => {
        setLogout();
      },
    },
  ],
];

const setLogout = async () => {
  loading.value = true;
  setTimeout(async () => {
    await store.logout();
    loading.value = false;
  }, 2000);
};
</script>

<style scoped></style>
