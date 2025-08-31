<template>
  <UPopover>
    <UButton :label="props.label" color="neutral" variant="outline">
      <template #trailing>
        <span :style="chip" class="size-3 rounded-full" />
      </template>
    </UButton>

    <template #content>
      <UColorPicker
        v-model="modelValue"
        class="p-2"
        @update:model-value="emit('update:modelValue', $event)"
        :format="props.format"
        :size="props.size"
        :disabled="props.disabled"
        :as="props.as"
        :label="props.label"
        :ui="props.ui"
      />
    </template>
  </UPopover>
</template>

<script setup lang="ts">
const emit = defineEmits(["update:modelValue"]);
const props = defineProps({
  modelValue: {
    type: String,
    default: "#000000", // black as default color
    // desc: 'The selected color value in hex format.'
  },
  format: {
    type: String as PropType<"hex" | "rgb" | "hsl">,
    default: "hex",
    // desc: 'The format of the color value. Can be hex, rgb, or hsl.'
  },
  size: {
    type: String as PropType<"sm" | "md" | "lg">,
    default: "md",
    // desc: 'The size of the color picker.'
  },
  disabled: {
    type: Boolean,
    default: false,
    // desc: 'If true, the color picker will be disabled.'
  },
  as: {
    type: String,
    default: "div",
    // desc: 'The HTML element to render the color picker as.'
  },
  ui: {
    type: Object as PropType<Record<string, any>>,
    default: () => ({}),
    // desc: 'Additional UI properties to customize the color picker.'
  },
  label: {
    type: String,
    default: "Select Color",
    // desc: 'The label for the color picker.'
  },
});

const chip = computed(() => ({
  backgroundColor: props.modelValue,
  border: `1px solid ${props.modelValue}`,
}));
const modelValue = ref(props.modelValue);
</script>

<style scoped></style>
