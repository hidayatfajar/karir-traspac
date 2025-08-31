<template>
  <div>
    <!-- Start Main Component -->
    <div class="mt-5 flex flex-row gap-x-5">
      <div class="w-[293px] gap-y-2 h-full -intro-x">
        <!-- Start List User Group -->

        <div
          class="bg-secondary px-3 py-2 rounded-lg text-white text-sm font-semibold"
        >
          Menu
        </div>
        <div class="bg-white p-4 rounded-lg min-h-[300px] mt-2">
          <div class="w-full flex flex-col gap-y-1">
            <div
              class="flex flex-col gap-y-3"
              v-for="itemMaster in bunchOfMaster"
              :key="itemMaster.value"
            >
              <div
                class="px-2 py-2 text-sm font-medium rounded cursor-pointer transition duration-500 ease-in-out hover:scale-105"
                @click="
                  itemMaster.value != currentMaster
                    ? handleSelectMaster(itemMaster.value)
                    : null
                "
                :class="
                  itemMaster.value == currentMaster
                    ? 'text-777777 bg-PRIMARY bg-opacity-[0.08] border-l-[3px] border-PRIMARY'
                    : 'bg-transparent text-777777'
                "
              >
                {{ itemMaster.text }}
              </div>
            </div>
          </div>
        </div>
        <!-- Start List User Group -->
      </div>

      <!-- Start Daftar Akses Modul -->
      <div class="grow intro-x">
        <!-- <programStudiFragment v-if="currentMaster == 'program-studi'" />
        <periodeAkademikFragment v-if="currentMaster == 'periode-akademik'" /> -->
        <MataKuliahFragment v-if="currentMaster == 'mata-kuliah'" />
      </div>
      <!-- Start Daftar Akses Modul -->
    </div>
    <!-- End Main Component -->
  </div>
</template>

<script lang="ts" setup>
import MataKuliahFragment from '~/components/features/admin/dataMaster/mataKuliahFragment.vue';


/**
 * @author Angga Nur Prasetya
 * @contact angganurprasetya4@gmail.com
 * @last-modified 2024-02-06 13:46:05
 */

// Start Configuration Page

definePageMeta({
  layout: "admin",
});

useHead({
  title: "Data Master",
  meta: [
    {
      name: "Data Master",
    },
  ],
});

// End Configuration Page

// Start Static Data
// End Store Hooks

// Start Other Hooks
// End Other Hooks

// Start Refs
const currentMaster = ref("periode-akademik");
const bunchOfMaster = ref([
  { value: "periode-akademik", text: "Periode Akademik" },
  { value: "program-studi", text: "Program Studi" },
  { value: "mata-kuliah", text: "Mata Kuliah" },
]);

const handleSelectMaster = async (value: any) => {
  console.log(value);
  currentMaster.value = value;
};
</script>
