<script setup lang="ts">
import {
  getLocalTimeZone,
  CalendarDate,
  today,
  parseDate,
  fromDate,
} from "@internationalized/date";

type DateInput = Date | string | null;
type DateOutput = string | null;
const openCalendar = ref(false);

const props = defineProps<{
  modelValue: DateInput;
  placeholder?: string;
  disabled?: boolean;
  label?: string;
}>();

const emit = defineEmits<{
  (e: "update:modelValue", value: DateOutput): void;
}>();

// Konversi ke string PostgreSQL (YYYY-MM-DD)
const toPostgresDate = (date: DateInput): DateOutput => {
  if (!date) return null;
  const d = date instanceof Date ? date : new Date(date);
  return d.toISOString().split("T")[0];
};

// Konversi ke CalendarDate
const toCalendarDate = (date: DateInput) => {
  if (!date) return null;
  const d = date instanceof Date ? date : new Date(date);
  return fromDate(d, getLocalTimeZone());
};

// Handle perubahan
const selectedDate = computed({
  get: () => toCalendarDate(props.modelValue),
  set: (value: CalendarDate | null) => {
    emit(
      "update:modelValue",
      value ? toPostgresDate(value.toDate(getLocalTimeZone())) : null
    );
  },
});

// Format tampilan
const displayDate = (date: DateInput) => {
  if (!date) return "";
  const d = date instanceof Date ? date : new Date(date);
  return d.toLocaleDateString("id-ID", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });
};

const resetDate = () => {
  emit("update:modelValue", null);
  openCalendar.value = false;
};
</script>

<template>
  <UPopover v-model:open="openCalendar" :default-open="false">
    <UButton
      color="neutral"
      variant="subtle"
      icon="i-lucide-calendar"
      class="!bg-default"
    >
      <span
        class="truncate"
        :class="
          (props.placeholder || props.label) && !modelValue
            ? 'text-dimmed'
            : 'text-toned'
        "
      >
        <template v-if="modelValue">
          {{ displayDate(modelValue) }}
        </template>
        <template v-else>
          {{ props.placeholder || props.label || "Pilih Tanggal" }}
        </template>
      </span>
    </UButton>

    <template #content>
      <div class="sm:divide-y divide-default">
        <div class="p-2">
          <UCalendar
            v-model="selectedDate"
            :disabled="props.disabled"
            :number-of-months="1"
          />
        </div>
        <div class="flex items-center justify-center p-2 gap-4">
          <UButton
            :disabled="props.disabled"
            color="neutral"
            variant="subtle"
            class="px-4"
            label="Reset"
            @click="resetDate"
          />
          <UButton
            @click="openCalendar = false"
            :disabled="props.disabled"
            label="Simpan"
          />
        </div>
      </div>
    </template>
  </UPopover>
</template>
