<script setup lang="ts">
import {
  getLocalTimeZone,
  CalendarDate,
  today,
  parseDate,
  fromDate,
} from "@internationalized/date";

const ranges = [
  { label: "Last 7 days", days: 7 },
  { label: "Last 14 days", days: 14 },
  { label: "Last 30 days", days: 30 },
  { label: "Last 3 months", months: 3 },
  { label: "Last 6 months", months: 6 },
  { label: "Last year", years: 1 },
];

type DateInput = Date | string | null;
type RangeInput = { start: DateInput; end: DateInput };
type RangeOutput = { start: string | null; end: string | null };
const openCalendar = ref(false);
const props = defineProps<{
  modelValue: RangeInput;
  placeholder?: string;
  label?: string;
}>();

const emit = defineEmits<{
  (e: "update:modelValue", value: RangeOutput): void;
}>();

// Konversi ke string PostgreSQL (YYYY-MM-DD)
const toPostgresDate = (date: DateInput): string | null => {
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
const calendarRange = computed({
  get: () => ({
    start: toCalendarDate(props.modelValue.start),
    end: toCalendarDate(props.modelValue.end),
  }),
  set: (value: { start: CalendarDate | null; end: CalendarDate | null }) => {
    emit("update:modelValue", {
      start: value.start
        ? toPostgresDate(value.start.toDate(getLocalTimeZone()))
        : null,
      end: value.end
        ? toPostgresDate(value.end.toDate(getLocalTimeZone()))
        : null,
    });
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

const selectRange = (range: {
  days?: number;
  months?: number;
  years?: number;
}) => {
  const endDate = today(getLocalTimeZone());
  let startDate = endDate.copy();

  if (range.days) {
    startDate = startDate.subtract({ days: range.days });
  } else if (range.months) {
    startDate = startDate.subtract({ months: range.months });
  } else if (range.years) {
    startDate = startDate.subtract({ years: range.years });
  }

  // Update model value
  emit("update:modelValue", {
    start: toPostgresDate(startDate.toDate(getLocalTimeZone())),
    end: toPostgresDate(endDate.toDate(getLocalTimeZone())),
  });
};

const isRangeSelected = (range: {
  days?: number;
  months?: number;
  years?: number;
}) => {
  if (!props.modelValue.start || !props.modelValue.end) return false;

  const currentDate = today(getLocalTimeZone());
  let startDate = currentDate.copy();

  if (range.days) {
    startDate = startDate.subtract({ days: range.days });
  } else if (range.months) {
    startDate = startDate.subtract({ months: range.months });
  } else if (range.years) {
    startDate = startDate.subtract({ years: range.years });
  }

  // Konversi ke format yang bisa dibandingkan
  const selectedStart = props.modelValue.start
    ? toPostgresDate(new Date(props.modelValue.start))
    : null;
  const selectedEnd = props.modelValue.end
    ? toPostgresDate(new Date(props.modelValue.end))
    : null;
  const expectedStart = toPostgresDate(startDate.toDate(getLocalTimeZone()));
  const expectedEnd = toPostgresDate(currentDate.toDate(getLocalTimeZone()));

  return selectedStart === expectedStart && selectedEnd === expectedEnd;
};
const resetRange = () => {
  emit("update:modelValue", {
    start: null,
    end: null,
  });
  openCalendar.value = false; // Opsional: menutup popover setelah reset
};
</script>

<template>
  <UPopover v-model:open="openCalendar">
    <UButton
      color="neutral"
      variant="subtle"
      icon="i-lucide-calendar"
      class="!bg-default"
    >
      <span
        class="truncate"
        :class="
          (props.placeholder || props.label) &&
          (!props.modelValue.end || !props.modelValue.start)
            ? 'text-dimmed'
            : 'text-toned'
        "
      >
        <template v-if="modelValue.start || modelValue.end">
          {{ displayDate(modelValue.start) }}
          <template v-if="modelValue.end">
            - {{ displayDate(modelValue.end) }}</template
          >
        </template>
        <template v-else>
          {{ props.placeholder || props.label || "Pilih Tanggal" }}
        </template>
      </span>
    </UButton>

    <template #content>
      <div class="sm:divide-y divide-default">
        <div class="flex items-stretch sm:divide-x divide-default">
          <div class="hidden sm:flex flex-col justify-center">
            <UButton
              v-for="(range, index) in ranges"
              :key="index"
              :label="range.label"
              color="neutral"
              variant="ghost"
              class="rounded-none px-4"
              :class="[
                isRangeSelected(range) ? 'bg-accented' : 'hover:bg-accented/50',
              ]"
              truncate
              @click="selectRange(range)"
            />
          </div>

          <UCalendar
            v-model="calendarRange"
            class="p-2"
            :number-of-months="2"
            range
          />
        </div>
        <div class="flex items-center justify-center p-2 gap-4">
          <UButton
            color="neutral"
            variant="subtle"
            class="px-4"
            label="Reset"
            @click="resetRange"
          />
          <UButton @click="openCalendar = false" label="Simpan" />
        </div>
      </div>
    </template>
  </UPopover>
</template>
