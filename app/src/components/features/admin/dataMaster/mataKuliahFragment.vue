<template>
  <!-- <div>
    <UModal
      v-model="isOpenModal"
      prevent-close
      class="sm:max-w-[605px] min-w-[605px] rounded-xl"
    >
      <UCard
        class="divide-y divide-gray-100 dark:divide-gray-800 px-4 py-0 sm:p-0"
      >
        <template #header>
          <div class="flex flex-row items-center justify-between">
            <h3 class="text-base font-medium tracking-wide text-[#58585B]">
              {{ formProgram.mata_kuliah_id ? "Edit" : "Tambah" }} Mata Kuliah
            </h3>

            <UButton
              @click="isOpenModal = false"
              size="lg"
              color="neutral"
              variant="ghost"
              icon="material-symbols:close-rounded"
              class="justify-center"
              :trailing="false"
            />
          </div>
        </template>

        <div class="flex flex-col px-4">
          <div>
            <label class="text-xs mb-2 font-normal text-neutral-400">
              Nama Mata Kuliah
            </label>

            <input
              type="text"
              id="nama"
              class="block px-3 pb-2 pt-2 w-full text-sm text-gray-900 bg-transparent rounded-lg border border-gray-300 appearance-none focus:outline-none focus:ring-2 focus:border-PRIMARY peer"
              placeholder=" "
              v-model="formProgram.nama"
              :disabled="loading.post"
            />
          </div>
          <div>
            <label class="text-xs mb-2 font-normal text-neutral-400"
              >Kode MK</label
            >

            <input
              type="text"
              id="kode_mk"
              class="block px-3 pb-2 pt-2 w-full text-sm text-gray-900 bg-transparent rounded-lg border border-gray-300 appearance-none focus:outline-none focus:ring-2 focus:border-PRIMARY peer"
              placeholder=" "
              v-model="formProgram.kode_mk"
              :disabled="loading.post"
            />
          </div>
          <div>
            <label class="text-xs mb-2 font-normal text-neutral-400"
              >Program Studi</label
            >

            <LazyComboBoxField
              class="min-w-auto sm:w-full"
              size="md"
              chips
              multiple
              searchable
              :truncate-option="false"
              :options="bunchOfProgramStudi"
              v-model="formProgram.program_studi_id"
              :loading="loading.get"
              clearable
              option-attribute="text"
              value-attribute="value"
              :ui="{ label: 'block' }"
            />
          </div>
          <div>
            <label class="text-xs mb-2 font-normal text-neutral-400"
              >Gadik</label
            >
            <LazyComboBoxField
              class="min-w-auto sm:w-full"
              size="md"
              chips
              multiple
              searchable
              :disabled="
                loading.get ||
                formProgram.program_studi_id === null ||
                formProgram.program_studi_id.length === 0
              "
              :truncate-option="false"
              :options="bunchOfGadik"
              v-model="formProgram.gadik_id"
              :loading="loading.get"
              clearable
              option-attribute="text"
              value-attribute="value"
              :ui="{ label: 'block' }"
            />
            <span
              v-if="
                formProgram.program_studi_id === null ||
                formProgram.program_studi_id.length === 0
              "
              class="text-red-500 text-xs"
              >*Silahkan Pilih Program Studi Terlebih Dahulu</span
            >
          </div>
        </div>

        <template #footer>
          <div class="flex flex-row justify-center item-center gap-x-4">
            <UButton
              size="lg"
              color="primary"
              variant="solid"
              :loading="loading.post"
              label="Simpan"
              @click="saveProgram"
              class="w-full justify-center"
              :trailing="false"
            />
          </div>
        </template>
      </UCard>
    </UModal>
    <UModal
      class="sm:max-w-[331px] min-w-[331px] rounded-xl"
      v-model="isOpenHapus"
      prevent-close
    >
      <UCard
        class="divide-y divide-gray-100 dark:divide-gray-800 px-4 py-0 sm:p-0 rounded-xl"
      >
        <div class="flex flex-col">
          <span class="font-medium text-sm text-center text-777777"
            >Apakah Anda yakin ingin menghapus data ini?</span
          >
        </div>

        <template #footer>
          <div class="flex flex-row justify-center item-center gap-x-4">
            <UButton
              @click="isOpenHapus = false"
              size="lg"
              color="neutral"
              variant="ghost"
              label="Tidak"
              class="w-32 justify-center"
              :trailing="false"
            />
            <UButton
              @click="handleConfirmationHapus"
              size="lg"
              :loading="loading.delete"
              variant="solid"
              label="Ya, hapus"
              class="w-32 justify-center bg-[##FF5555] text-white"
              :trailing="false"
            />
          </div>
        </template>
      </UCard>
    </UModal>
    <div class="w-full flex flex-row justify-end">
      <UButton
        size="md"
        color="primary"
        icon="i-ic-round-add"
        variant="solid"
        label="Tambah"
        class="intro-x justify-end text-white mb-2"
        @click="isOpenModal = true"
      />
    </div>

    <div class="overflow-x-auto overflow-y-auto mb-5">
      <UTable
        class="max-h-[70vh]"
        :rows="bunchOfMataKuliah"
        :loading="loading.get"
        :columns="columns"
      >
        <template
          v-for="(value, index) in columns"
          :key="index as number"
          #[`${value?.key}-header`]="{ column }"
        >
          <div
            class="flex text-white items-start justify-center overflow-y-hidden pb-4"
          >
            <span
              class="my-auto border bg-[#09335D] px-3.5 py-[8.5px] border-[#09335D] w-max min-w-full min-h-full"
              :class="[
                index === 0 && 'rounded-l-lg',
                index === Object.keys(columns).length - 1 && 'rounded-r-lg',
                column.label === '' ? 'text-[#09335D]' : '',
              ]"
            >
              {{ column.label === "" ? "-" : column.label }}
            </span>
          </div>
        </template>
        <template #empty-state>
          <DataNotFound :height="`h-[30vh]`" :is-for-table="true" />
        </template>
        <template #loading-state>
          <LoadingIndicator />
        </template>
        <template #mata_kuliah-data="{ row }">
          <div class="w-full">
            <div class="flex flex-col justify-start">
              <div class="flex flex-col">
                <strong class="text-777777 font-medium">{{
                  row?.nama ?? "-"
                }}</strong>
                <span class="text-C6C6C6 text-sm font-medium">{{
                  row?.kode_mk ?? "-"
                }}</span>
              </div>
            </div>
          </div>
        </template>
        <template #gadik-data="{ row }">
          <div class="flex flex-col w-44 text-wrap">
            <div>
              <strong class="text-777777 font-semibold w-44">{{
                row?.gadik_formatted ?? "-"
              }}</strong>
            </div>
          </div>
        </template>
        <template #program_studi-data="{ row }">
          <div class="flex flex-col w-[307px] text-wrap">
            <strong
              class="text-777777 font-semibold capitalize w-[307px] text-wrap"
              >{{
                row?.program_studi_formatted ? row.program_studi_formatted : "-"
              }}</strong
            >
          </div>
        </template>
        <template #action-data="{ row }">
          <div class="flex flex-row gap-x-2 items-center justify-end">
            <UTooltip :popper="{ arrow: true, placement: 'top' }">
              <template #text>
                <span>Ubah</span>
              </template>
              <UButton
                @click="handleEdit(row)"
                icon="i-mdi-pencil"
                variant="ghost"
                square
                class="text-777777"
              />
            </UTooltip>

            <UTooltip :popper="{ arrow: true, placement: 'top' }">
              <template #text>
                <span class="text-red-500">Hapus</span>
              </template>
              <UButton
                @click="handleHapusPeriode(row)"
                icon="i-mdi-trash"
                variant="ghost"
                square
                class="text-777777 hover:text-red-500"
              />
            </UTooltip>
          </div>
        </template>
      </UTable>
    </div>

    <div class="flex flex-row justify-between items-center mt-3">
      <span class="text-sm font-medium text-808080 hidden lg:flex">{{
        itemsCount
      }}</span>
      <ClientOnly>
        <UPagination
          class="text-777777 -intro-y rounded-lg"
          :max="5"
          :active-button="{ square: true }"
          :inactive-button="{ variant: 'soft', color: 'white', square: true }"
          :prev-button="{ variant: 'soft', color: 'white', square: true }"
          :next-button="{ variant: 'soft', color: 'white', square: true }"
          v-model="filter.page"
          :page-count="filter.limit"
          :total="totalData"
          :current-page="halamanSekarang"
        />
      </ClientOnly>
    </div>
  </div> -->
   <div class="w-full space-y-4 pb-4">
    <UTable
      ref="table"
      v-model:pagination="pagination"
      :data="data"
      :columns="newColum"
      :pagination-options="{
        getPaginationRowModel: getPaginationRowModel()
      }"
      class="flex-1"
    />

    <div class="flex justify-center border-t border-default pt-4">
      <UPagination
      :ui="{
        root: 'rounded-full',
      }"
        :default-page="(table?.tableApi?.getState().pagination.pageIndex || 0) + 1"
        :items-per-page="table?.tableApi?.getState().pagination.pageSize"
        :total="table?.tableApi?.getFilteredRowModel().rows.length"
        @update:page="(p) => table?.tableApi?.setPageIndex(p - 1)"
      />
    </div>
  </div>
</template>

<script lang="ts" setup>
import { getPaginationRowModel } from '@tanstack/vue-table'
import type { TableColumn } from '@nuxt/ui'

const table = useTemplateRef('table')

type Payment = {
  id: string
  date: string
  email: string
  amount: number
}
const data = ref<Payment[]>([
  {
    id: '4600',
    date: '2024-03-11T15:30:00',
    email: 'james.anderson@example.com',
    amount: 594
  },
  {
    id: '4599',
    date: '2024-03-11T10:10:00',
    email: 'mia.white@example.com',
    amount: 276
  },
  {
    id: '4598',
    date: '2024-03-11T08:50:00',
    email: 'william.brown@example.com',
    amount: 315
  },
  {
    id: '4597',
    date: '2024-03-10T19:45:00',
    email: 'emma.davis@example.com',
    amount: 529
  },
  {
    id: '4596',
    date: '2024-03-10T15:55:00',
    email: 'ethan.harris@example.com',
    amount: 639
  },
  {
    id: '4595',
    date: '2024-03-10T13:20:00',
    email: 'sophia.miller@example.com',
    amount: 428
  },
  {
    id: '4594',
    date: '2024-03-10T11:05:00',
    email: 'noah.wilson@example.com',
    amount: 673
  },
  {
    id: '4593',
    date: '2024-03-09T22:15:00',
    email: 'olivia.jones@example.com',
    amount: 382
  },
  {
    id: '4592',
    date: '2024-03-09T20:30:00',
    email: 'liam.taylor@example.com',
    amount: 547
  },
  {
    id: '4591',
    date: '2024-03-09T18:45:00',
    email: 'ava.thomas@example.com',
    amount: 291
  },
  {
    id: '4590',
    date: '2024-03-09T16:20:00',
    email: 'lucas.martin@example.com',
    amount: 624
  },
  {
    id: '4589',
    date: '2024-03-09T14:10:00',
    email: 'isabella.clark@example.com',
    amount: 438
  },
  {
    id: '4588',
    date: '2024-03-09T12:05:00',
    email: 'mason.rodriguez@example.com',
    amount: 583
  },
  {
    id: '4587',
    date: '2024-03-09T10:30:00',
    email: 'sophia.lee@example.com',
    amount: 347
  },
  {
    id: '4586',
    date: '2024-03-09T08:15:00',
    email: 'ethan.walker@example.com',
    amount: 692
  },
  {
    id: '4585',
    date: '2024-03-08T23:40:00',
    email: 'amelia.hall@example.com',
    amount: 419
  },
  {
    id: '4584',
    date: '2024-03-08T21:25:00',
    email: 'oliver.young@example.com',
    amount: 563
  },
  {
    id: '4583',
    date: '2024-03-08T19:50:00',
    email: 'aria.king@example.com',
    amount: 328
  },
  {
    id: '4582',
    date: '2024-03-08T17:35:00',
    email: 'henry.wright@example.com',
    amount: 647
  },
  {
    id: '4581',
    date: '2024-03-08T15:20:00',
    email: 'luna.lopez@example.com',
    amount: 482
  }
])
const newColum: TableColumn<Payment>[] = [
  {
    accessorKey: 'id',
    header: '#',
    cell: ({ row }) => `#${row.getValue('id')}`
  },
  {
    accessorKey: 'date',
    header: 'Date',
    cell: ({ row }) => {
      return new Date(row.getValue('date')).toLocaleString('en-US', {
        day: 'numeric',
        month: 'short',
        hour: '2-digit',
        minute: '2-digit',
        hour12: false
      })
    }
  },
  {
    accessorKey: 'email',
    header: 'Email'
  },
  {
    accessorKey: 'amount',
    header: () => h('div', { class: 'text-right' }, 'Amount'),
    cell: ({ row }) => {
      const amount = Number.parseFloat(row.getValue('amount'))
      const formatted = new Intl.NumberFormat('en-US', {
        style: 'currency',
        currency: 'EUR'
      }).format(amount)
      return h('div', { class: 'text-right font-medium' }, formatted)
    }
  }
]

const pagination = ref({
  pageIndex: 0,
  pageSize: 5
})


import { useDataMasterStore } from "~/store/admin/dataMaster";
import { useGetOpsiStore } from "~/store/master";

const store = useDataMasterStore();
const opsi = useGetOpsiStore();
const toast = useToast();

const isOpenModal = ref(false);
const isOpenHapus = ref(false);
const formProgram = ref({
  mata_kuliah_id: null,
  nama: null,
  program_studi_id: null,
  kode_mk: null,
  gadik_id: null,
});

const totalData = ref(0);
const totalHalaman = ref(0);
const halamanSekarang = ref(0);
const filter = ref({
  limit: 15,
  page: 1,
});

const handleEdit = (matkul) => {
  formProgram.value = {
    mata_kuliah_id: matkul.mata_kuliah_id,
    nama: matkul.nama,
    program_studi_id: matkul.program_studi.map((item) => {
      return item.program_studi_id;
    }),
    kode_mk: matkul.kode_mk,
    gadik_id: matkul.gadik.map((item) => {
      return item.gadik_id;
    }),
  };
  console.log(formProgram.value);
  isOpenModal.value = true;
};

const bunchOfMataKuliah = ref([]);
const bunchOfProgramStudi = ref<any>([]);
const bunchOfGadik = ref<any>([]);
const columns = [
  {
    key: "mata_kuliah",
    label: "Mata Kuliah, Kode MK",
  },
  {
    key: "program_studi",
    label: "Program Studi",
  },
  {
    key: "gadik",
    label: "Gadik",
  },
  {
    key: "action",
    label: "",
  },
];

const loading = ref({
  post: false,
  get: false,
  put: false,
  delete: false,
});

const methods = [
  { value: true, label: "Genap" },
  { value: false, label: "Ganjil" },
];

const resetFormPeriode = () => {
  formProgram.value = {
    mata_kuliah_id: null,
    nama: null,
    program_studi_id: null,
    kode_mk: null,
    gadik_id: null,
  };
};

const bunchOfYear = computed(() => {
  const year = new Date().getFullYear();
  const years = [];
  for (let i = year; i >= 2000; i--) {
    years.push({
      text: i,
      value: i,
    });
  }
  return years;
});

const saveProgram = async () => {
  loading.value.post = true;

  const body: any = {
    nama: formProgram.value.nama,
    kode_mk: formProgram.value.kode_mk,
    list_program_studi_id: formProgram.value.program_studi_id
      ? formProgram.value.program_studi_id.join(";")
      : null,
    list_gadik_id: formProgram.value.gadik_id
      ? formProgram.value.gadik_id.join(";")
      : null,
  };

  if (formProgram.value.mata_kuliah_id) {
    body.mata_kuliah_id = formProgram.value.mata_kuliah_id;
  }

  const { status, message } = await store.saveDataMaster(body);

  if (status) {
    toast.add({
      title: "success",
      description: message,
      color: "success",
    });
    isOpenModal.value = false;
    await loadDataMataKuliah();
  } else {
    toast.add({
      title: "error",
      description: message,
      color: "error",
    });
  }
  loading.value.post = false;
};

const loadDataMataKuliah = async () => {
  loading.value.get = true;

  const { status, data, message, total_data, halaman_sekarang, total_halaman } =
    await store.loadDataMaster({
      params: {
        ...filter.value,
      },
      master: "mata-kuliah",
    });

  if (status) {
    bunchOfMataKuliah.value = data;
    totalData.value = total_data;
    totalHalaman.value = total_halaman;
    halamanSekarang.value = halaman_sekarang;
  } else {
    toast.add({
      title: "error",
      description: message,
      color: "error",
    });
  }
  loading.value.get = false;
};

const itemsCount = computed(() => {
  const data = bunchOfMataKuliah.value;
  const firstIndex = data.length > 0 ? data[0]?.no_urut : 0;
  const lastIndex = data.length > 0 ? data[data.length - 1]?.no_urut : 0;

  if (data.length > 0) {
    return `Hasil ${firstIndex} - ${lastIndex} dari ${totalData.value}`;
  } else {
    return `Hasil 0 dari ${totalData.value}`;
  }
});

const handleHapusPeriode = (program: any) => {
  formProgram.value.mata_kuliah_id = program.mata_kuliah_id;
  isOpenHapus.value = true;
};

const handleConfirmationHapus = async () => {
  loading.value.delete = true;
  const { status, message } = await store.deleteDataMaster({
    id: formProgram.value.mata_kuliah_id,
    master: "mata-kuliah",
  });
  if (status) {
    toast.add({
      title: "success",
      description: message,
      color: "success",
    });

    await loadDataMataKuliah();
    formProgram.value.mata_kuliah_id = null;
    isOpenHapus.value = false;
  } else {
    toast.add({
      title: "error",
      description: message,
      color: "error",
    });
  }
  loading.value.delete = false;
};
const loadOpsi = async (newOpsi: string = null, single: boolean = true) => {
  loading.value.get = true;
  let opsiMaster = ["program-studi"];
  if (newOpsi && single) {
    opsiMaster = [newOpsi];
  } else if (newOpsi && !single) {
    opsiMaster.push(newOpsi);
  }

  for (let i = 0; i < opsiMaster.length; i++) {
    const { status, data, message } = await opsi.loadOpsiMaster({
      master: opsiMaster[i] === "satuan_tree" ? "satuan" : opsiMaster[i],
      params:
        opsiMaster[i] === "stakeholder"
          ? {
              kategori: "gadik;gapendik",
              program_studi_id: formProgram.value.program_studi_id.join(";"),
            }
          : null,
    });
    if (status) {
      switch (opsiMaster[i]) {
        case "program-studi":
          bunchOfProgramStudi.value = data;
          break;
        case "stakeholder":
          bunchOfGadik.value = data;
          break;
      }
    } else {
      toast.add({
        title: "error",
        description: message,
        color: "error",
      });
    }
  }
  loading.value.get = false;
};

onMounted(async () => {
  await loadDataMataKuliah();
  await loadOpsi();
});

watch(isOpenModal, (value) => {
  if (!value) {
    resetFormPeriode();
  }
});

watch(
  () => formProgram.value.program_studi_id,
  async () => {
    await loadOpsi("stakeholder", true);
  },
  { deep: true }
);

watch(
  () => filter.value.page,
  () => {
    loadDataMataKuliah();
  },
  { deep: true }
);
</script>
