<script setup>
import { eachDayOfInterval } from "date-fns";
import { computed, watch, ref } from "vue";

const model = defineModel({
  required: true,
  default: "daily", // Tambahkan default value
});

const props = defineProps({
  range: Object,
});

const days = computed(() =>
  props.range ? eachDayOfInterval(props.range) : []
);

const periods = computed(() => {
  if (!props.range) return ["daily"];

  const dayCount = days.value.length;

  if (dayCount <= 8) return ["daily"];
  if (dayCount <= 31) return ["daily", "weekly"];
  return ["weekly", "monthly"];
});

// Gunakan immediate watch untuk inisialisasi awal
watch(
  periods,
  (newPeriods) => {
    if (newPeriods.length > 0 && !newPeriods.includes(model.value)) {
      model.value = newPeriods[0];
    }
  },
  { immediate: true }
);
</script>

<template>
  <USelect
    v-model="model"
    :items="periods"
    variant="ghost"
    class="data-[state=open]:bg-elevated"
    :ui="{
      value: 'capitalize',
      itemLabel: 'capitalize',
      trailingIcon:
        'group-data-[state=open]:rotate-180 transition-transform duration-200',
    }"
  />
</template>
