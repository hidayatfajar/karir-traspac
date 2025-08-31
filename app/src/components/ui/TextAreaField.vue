<template>
  <div>
    <UTextarea
      v-model="modelValue"
      :placeholder="props.placeholder"
      :rows="Number(props.rows)"
      :cols="Number(props.cols)"
      :disabled="props.disabled"
      :ui="props.ui"
      :as="props.as"
      :size="props.size"
      :label="props.label"
      :color="props.color"
      @update:model-value="emit('update:modelValue', $event)"
    />
  </div>
</template>

<script setup lang="ts">
const emit = defineEmits(["update:modelValue"]);
const props = defineProps({
  modelValue: {
    type: String,
    default: "",
    // desc: 'The value of the textarea field.'
  },
  placeholder: {
    type: String,
    default: "Enter text here...",
    // desc: 'Placeholder text for the textarea.'
  },
  color: {
    type: String as PropType<
      | "neutral"
      | "primary"
      | "secondary"
      | "success"
      | "info"
      | "warning"
      | "error"
    >,
    default: "neutral",
    // 'primary' | 'secondary' | 'success' | 'warning' | 'error' | 'info' | 'neutral'
    // desc: 'Color variant of the input fields.'
  },
  rows: {
    type: [Number, String],
    default: 4,
    // desc: 'Number of rows for the textarea.'
  },
  cols: {
    type: [Number, String],
    default: 50,
    // desc: 'Number of columns for the textarea.'
  },
  disabled: {
    type: Boolean,
    default: false,
    // desc: 'If true, the textarea will be disabled.'
  },
  ui: {
    type: Object as PropType<Record<string, any>>,
    default: () => ({}),
    // desc: 'Additional UI properties to customize the textarea.'
  },
  as: {
    type: String,
    default: "textarea",
    // desc: 'The HTML element to render the textarea as.'
  },
  size: {
    type: String as PropType<"sm" | "md" | "lg">,
    default: "md",
    // desc: 'The size of the textarea.'
  },
  label: {
    type: String,
    default: "Text Area",
    // desc: 'The label for the textarea field.'
  },
});

const modelValue = ref(props.modelValue);
</script>

<style scoped></style>
