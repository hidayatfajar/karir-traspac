<template>
  <!-- 
  ComboBox with auto fetch data from API
    -->
  <component
    :is="props.multiple ? UInputMenu : USelectMenu"
    v-bind="mergedProps"
    v-model="localValue"
    @blur="handleBlur"
    @change="handleChange"
    @focus="handleFocus"
    @update:open="onOpen"
    @create="handleCreate"
    @highlight="handleHighlight"
    @update:modelValue="handleUpdateModelValue"
    @update:searchTerm="handleUpdateSearchTerm"
    :props="props"
    :items="bunchData"
    :labelKey="props.labelKey"
    :valueKey="props.valueKey"
    :loading="status === 'pending'"
  >
    <template v-if="$slots.leading" #leading="{ modelValue, open, ui }">
      <slot name="leading" :modelValue="bunchData?.find((item) => item.value === modelValue) || modelValue" :open="open" :ui="ui" />
    </template>
    <template v-if="!multiple || $slots.trailing" #trailing="{ modelValue, open, ui }">
     <!-- Menggunakan render function untuk menggabungkan slot -->
      <template v-if="$slots.trailing">
        <slot name="trailing" :modelValue="
        bunchData?.find((item) => item.value === modelValue) || modelValue" :open="open" :ui="ui" />

      </template>
      
      <!-- Konten baru yang ingin ditambahkan -->
      <template v-if="modelValue && !multiple && !props?.disabled">
        <UButton
          variant="link"
          square
          :size="
            // @ts-ignore: Force any type
            props?.size || 'md'"
          class="text-danger cursor-pointer p-0"
          @click.stop.prevent="handleUpdateModelValue(null)"
        >
          <UIcon name="i-lucide-x" />
        </UButton>
      </template>
    </template>
    <template v-if="$slots.empty" #empty="{ searchTerm }">
      <slot name="empty" :searchTerm="searchTerm" />
    </template>
    <!-- item -->
    <template v-if="$slots.item" #item="{ item, index }">
      <slot name="item" :item="item" :index="index" />
    </template>

    <!-- item leading-->
    <template v-if="$slots['item-leading']" #item-leading="{ item, index }">
      <slot name="item-leading" :item="item" :index="index" />
    </template>
    <!-- item label-->
    <template v-if="$slots[`item-label`]" #item-label="{ item, index }">
      <slot name="item-label" :item="item" :index="index" />
    </template>
    <!-- item trailing-->
    <template v-if="$slots[`item-trailing`]" #item-trailing="{ item, index }">
      <slot name="item-trailing" :item="item" :index="index" />
    </template>
    <!-- tags-item-text -->
     
    <template
      v-if="multiple && $slots['tags-item-text']"
      #['tags-item-text']="{ item, index }"
    >
      <slot name="tags-item-text" :item="item" :index="index" />
    </template>
    <!-- tags-item-delete -->
    <template
      v-if="multiple && $slots['tags-item-delete']"
      #['tags-item-delete']="{ item, index }"
    >
      <slot name="tags-item-delete" :item="item" :index="index" />
    </template>
    <!-- content-top -->
    <template v-if="$slots[`content-top`]" #content-top>
      <slot name="content-top" />
    </template>
    <!-- content-bottom -->
    <template v-if="$slots[`content-bottom`]" #content-bottom>
      <slot name="content-bottom" />
    </template>
    <!-- create-item-label -->
    <template v-if="$slots[`create-item-label`]" #create-item-label="{ item }">
      <slot name="create-item-label" :item="item" />
    </template>
  </component>
</template>
<script setup lang="ts">
import { UInputMenu, USelectMenu } from "#components";
const open = ref(false);
const attrs = useAttrs();
const props = defineProps({
  isOpsi: {
    type: Boolean,
    default: true,
  },
  url: {
    type: String,
    default: "",
  },
  params: {
    type: Object,
    default: () => ({}),
  },
  class: {
    type: String,
    default: "",
  },
  isImmediate: {
    type: Boolean,
    default: false,
  },
  items: {
    type: Array,
    default: () => [],
  },
  fetchOnSearch: {
    type: Boolean,
    default: false,
  },
  //native props
  labelKey: {
    type: String as () => any,
    default: "text",
  },
  valueKey: {
    type: String as () => any,
    default: "value",
  },
  modelValue: {
    type: [String, Number, Array] as PropType<string | number | any[]>,
    default: null,
  },
  multiple: {
    type: Boolean,
  },
  disabled: {
    type: Boolean,
    default: false,
  },
});

const emit = defineEmits([
  "blur",
  "change",
  "focus",
  "update:open",
  "create",
  "highlight",
  "update:modelValue",
  "update:value",
  "update:searchTerm",
]);
const localValue = ref(props.modelValue);
const root = useRootStore();
// Gunakan computed untuk token agar selalu reactive
const { auth } = storeToRefs(root);
const authHeader = computed(() => {
  return request.defaults.headers.common["Authorization"] || `Bearer ${auth.value?.access_token}`;
});
const fetchParams = computed(() => ({
  ...props.params,
  // ...(props.fetchOnSearch ? { search: props.searchTerm } : {}),
}));

// console.log("CMOBOBOX", auth.value?.access_token, request.defaults.headers.common["Authorization"],props.labelKey);
const {
  data: dataRaw,
  status,
  error,
  execute,
} = await useLazyFetch<{
  code: number;
  message: string;
  data: any; // Ubah menjadi any atau union type yang lebih spesifik
  error: string;
}>(
  `${import.meta.env.VITE_APP_BASE_API}${
    props?.isOpsi ? `/api/master/${props?.url}/get-opsi` : `/${props?.url}`
  }`,
  {
    immediate: props.isImmediate || props.modelValue !== null,
    params: fetchParams, 
    onRequest({ request, options }) {
      if (!options.headers) {
        options.headers = new Headers();
      }
      options.headers.set('Authorization', authHeader.value as string);
    },

    // Tambahkan transform untuk memproses response
    transform: (res: any) => {
      console.log("ComboBox", props.params);
      // Jika response adalah format opsi sederhana
      if (Array.isArray(res.data)) {
        return res.data.map((item: any) => ({
          text: item[props.labelKey] || item.text,
          value: item[props.valueKey] || item.value,
          ...item
        }));
      }
      // Jika response adalah format paginated data
      else if (res.data && Array.isArray(res.data.data)) {
        return res.data.data.map((item: any) => ({
          text: item[props.labelKey] || item.nama || item.text || item.name,
          value: item[props.valueKey] || item.id || item.value,
          ...item
        }));
      }
      // Fallback untuk format lainnya
      return res.data;
    }
  }
);
const bunchData = computed(() => {
  if (Array.isArray(dataRaw.value) && dataRaw.value.length > 0) {
    return dataRaw.value;
  }
  return props.items;
});
const stringValue = computed({
  get: () => {
    if (Array.isArray(props.modelValue)) {
      return props.modelValue.join(","); // Atau penanganan array sesuai kebutuhan
    }
    return props.modelValue?.toString() || "";
  },
  set: (value: string) => {
    emit("update:modelValue", value);
  },
});

const mergedProps = computed(() => ({
  ...attrs, // Semua atribut dari parent
  ...props,
  items: bunchData.value,
  class: `${props.class || ""} ${attrs.class || ""}`.trim(), // Gabungkan class
  open: props.multiple ?  open.value : undefined,
  debounce: props.multiple ? 150 : 0,
}));
// Sync perubahan dari parent
watch(() => props.modelValue, (newVal) => {
  localValue.value = newVal;
});
watch(
  () => props.params,
  (newParams, oldParams) => {
    if (JSON.stringify(newParams) !== JSON.stringify(oldParams)) {
      execute();
    }
  },
  { deep: true }
);
const tryAgain = ref(0);
watch(error, (err) => {
  if (err) {
    console.error("Error fetching data:", err?.message?.includes('401'),err?.message?.includes('another request'), err);
    
    // Fungsi lokal untuk menampilkan toast error
    const showErrorToast = (description = err?.message || "Terjadi Kesalahan Pada Server") => {
      if (!err?.message?.includes('another request')){

        useToast().add({
          title: "Gagal Memuat Data",
          description,
          color: "error",
        });
      }
    };

    if (err?.message?.includes('401')) {
      if (tryAgain.value < 1) {
        tryAgain.value++;
        root?.fetchCookie().then(() => {
          execute();
        });
      } else {
        tryAgain.value = 0;
        root.logout();
        showErrorToast();
      }
    } else {
      showErrorToast();
    }
  }
});
// Sync perubahan ke parent
watch(localValue, (newVal) => {
  emit("update:modelValue", newVal);
});
// Handler untuk semua emit
function handleBlur(event: Event) {
  // open.value = false;
  emit("blur", event);
}

function handleChange(value: any) {
  emit("change", value);
}

function handleFocus(event: Event) {
  console.log("handleFocus", event);
  if (props.multiple) {
    open.value = true;
  }
  emit("focus", event);
}

function onOpen(isOpen: boolean) {
  console.log("onOpen", isOpen);
  if(props.multiple && isOpen !== open.value) {
    open.value = isOpen;
  }
  emit("update:open", isOpen);
  if (isOpen && Array.isArray(bunchData.value) && !bunchData.value.length && props.items.length === 0) {
    execute();
  }
}

function handleCreate(item: any) {
  emit("create", item);
}

function handleHighlight(item: any) {
  emit("highlight", item);
}

function handleUpdateModelValue(value: any) {
  const item = bunchData.value?.find((i) => i.value === value) || value;
  emit("update:value", item);
  emit("update:modelValue", value);
}

function handleUpdateSearchTerm(term: string) {
  console.log("handleUpdateSearchTerm", term);
  emit("update:searchTerm", term);
}
</script>
