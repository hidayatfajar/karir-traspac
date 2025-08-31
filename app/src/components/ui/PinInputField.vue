<template>
  <div>
    <UPinInput
      v-model="modelValue"
      :length="props.length"
      :disabled="props.disabled"
      :type="props.type"
      :mask="props.mask"
      :placeholder="props.placeholder"
      :otp="props.otp"
      :color="props.color"
      :highlight="props.highlight"
      :variant="props.variant"
      :size="props.size"
      @update:model-value="emit('update:modelValue', $event)"
    />
  </div>
</template>

<script setup lang="ts">
const emit = defineEmits(["update:modelValue"]);

const props = defineProps({
  modelValue: {
    type: Array as PropType<string[]>,
    default: () => [],
    // desc: 'The value of the input field, typically a PIN or OTP.'
  },
  length: {
    type: Number,
    default: 4,
    // desc: 'The number of input fields to display, representing the length of the PIN or OTP.'
  },
  disabled: {
    type: Boolean,
    default: false,
    // desc: 'If true, the input fields will be disabled and not editable.'
  },
  type: {
    type: String as PropType<"text" | "number">,
    default: "number",
    // 'text' | 'number'
    // desc: 'The type of input fields. Can be text or number
  },
  mask: {
    type: Boolean,
    default: false,
    // true | false
    // desc: 'If true, the input fields will mask the entered characters, typically used for sensitive information like PINs.'
  },
  placeholder: {
    type: String,
    default: "○",
    // desc: 'Placeholder text for the input fields.'
  },
  otp: {
    type: Boolean,
    default: true,
    // true | false
    // desc: 'If true, the input will be treated as an OTP input with auto-focus and auto-submit features.'
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
  highlight: {
    type: Boolean,
    default: false,
    // true | false
    // desc: 'If true, the input fields will have a highlight effect when focused.'
  },
  variant: {
    type: String as PropType<"outline" | "soft" | "subtle" | "ghost" | "none">,
    default: "outline",
    // 'outline' | 'soft' | 'subtle' | 'ghost' | 'none'
    // desc: 'The visual style of the input fields.'
  },
  size: {
    type: String as PropType<"xs" | "sm" | "md" | "lg" | "xl">,
    default: "lg",
    // 'xs' | 'sm' | 'md' | 'lg' | 'xl'
    // desc: 'The size of the input fields.'
  },
});

const modelValue = ref(props.modelValue);
</script>

<style scoped></style>
