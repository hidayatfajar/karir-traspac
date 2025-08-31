<template>
  <!-- @ts-ignore: Force any type -->
  <UFormField v-bind="mergedFormFieldProps">
    <template v-if="$slots.label" #label="{ label }">
      <slot name="label" :label="label" />
    </template>
    <template v-if="$slots.hint" #hint="{ hint }">
      <slot name="hint" :hint="hint" />
    </template>
    <template v-if="$slots.description" #description="{ description }">
      <slot name="description" :description="description" />
    </template>
    <template v-if="$slots.help" #help="{ help }">
      <slot name="help" :help="help" />
    </template>
    <template v-if="$slots.error" #error="{ error }">
      <slot name="error" :error="error" />
    </template>
    <template v-if="$slots.default" #default="{ error }">
      <slot name="default" :error="error" />
    </template>
    <UInput
      ref="inputRef"
      @blur="handleBlur"
      @change="handleChange"
      @update:modelValue="handleInput"
      @focus="handleFocus"
      @keypress="handleKeyPress"
      @paste="handlePaste"
      v-bind="mergedInputProps"
      :type="actualType"
      :modelValue="displayValue"
      :maxlength="maxLength"
      :color="passwordColor"
      :aria-invalid="passwordScore < 4 && type === 'strong-password'"
      aria-describedby="password-strength"
    >
      <label
        v-if="props.floatingLabel"
        :for="props.id"
        :class="[
          props.size === 'xs' &&
            'peer-placeholder-shown:top-1 peer-focus:-top-2.5 peer-focus:text-xs peer-placeholder-shown:text-xs text-xs -top-2.5',
          props.size === 'sm' &&
            'peer-placeholder-shown:top-1 peer-focus:-top-2.5 peer-focus:text-xs peer-placeholder-shown:text-xs text-xs -top-2.5',
          props.size === 'md' &&
            'peer-placeholder-shown:top-1.5 peer-focus:-top-3 peer-focus:text-sm peer-placeholder-shown:text-sm text-sm -top-3',
          props.size === 'lg' &&
            'peer-placeholder-shown:top-2 peer-focus:-top-3 peer-focus:text-md peer-placeholder-shown:text-md text-md -top-3',
          props.size === 'xl' &&
            'peer-placeholder-shown:top-2 peer-focus:-top-3 peer-focus:text-md peer-placeholder-shown:text-md text-md -top-3',
          props?.icon
            ? props.size === 'xs'
              ? 'px-6'
              : props.size === 'sm'
              ? 'px-7'
              : props.size === 'md'
              ? 'px-8'
              : props.size === 'lg'
              ? 'px-8'
              : props.size === 'xl'
              ? 'px-9'
              : 'px-1.5'
            : 'px-1.5',
        ]"
        class="pointer-events-none absolute left-0 text-highlighted font-medium transition-all peer-focus:text-highlighted peer-focus:font-medium peer-placeholder-shown:text-dimmed peer-placeholder-shown:font-normal"
      >
        <span class="inline-flex bg-default px-1">{{
          props.placeholder || props.label
        }}</span>
      </label>
      <template v-if="$slots.leading" #leading>
        <slot name="leading" />
      </template>
      <template v-if="$slots.default" #default>
        <slot name="default" />
      </template>
      <template
        v-if="
          $slots.trailing ||
          type === 'password' ||
          type === 'strong-password' ||
          (isCopy && modelValue)
        "
        #trailing
      >
        <!-- Tombol Copy to Clipboard -->
        <UTooltip
          v-if="isCopy && modelValue"
          text="Copy to clipboard"
          :class="type === 'search' || type === 'number' ? 'mr-4' : ''"
          :popper="{ placement: 'right' }"
        >
          <UButton
            :color="copied ? 'success' : 'neutral'"
            variant="link"
            size="sm"
            :icon="copied ? 'i-lucide-check' : 'i-lucide-copy'"
            aria-label="Copy to clipboard"
            @click="copyToClipboard"
            class="bg-default"
          />
        </UTooltip>
        <slot name="trailing" />
        <UButton
          v-if="type === 'password' || type === 'strong-password'"
          color="neutral"
          variant="link"
          size="sm"
          :icon="seePass ? 'i-lucide-eye-off' : 'i-lucide-eye'"
          :aria-label="seePass ? 'Hide password' : 'Show password'"
          :aria-pressed="seePass"
          aria-controls="password"
          @click="togglePasswordVisibility"
        />
      </template>
    </UInput>
    <div v-if="type === 'strong-password'" class="mt-2 space-y-2">
      <UProgress
        :color="passwordColor"
        :indicator="passwordText"
        :model-value="passwordScore"
        :max="4"
        size="sm"
      />

      <p id="password-strength" class="text-sm font-medium">
        {{ passwordText }}. Must contain:
      </p>

      <ul class="space-y-1" aria-label="Password requirements">
        <li
          v-for="(req, index) in passwordStrength"
          :key="index"
          class="flex items-center gap-0.5"
          :class="req.met ? 'text-success' : 'text-muted'"
        >
          <UIcon
            :name="req.met ? 'i-lucide-circle-check' : 'i-lucide-circle-x'"
            class="size-4 shrink-0"
          />
          <span class="text-xs font-light">
            {{ req.text }}
            <span class="sr-only">
              {{ req.met ? " - Requirement met" : " - Requirement not met" }}
            </span>
          </span>
        </li>
      </ul>
    </div>
  </UFormField>
</template>

<script setup lang="ts">
/**
 * All in One input ('currency', 'email',  'number', 'password', 'search', 'tel', 'text', 'url')
 * @author Abdul Aziz <abazdev.com>
 */
const attrs = useAttrs();
const emit = defineEmits(["blur", "change", "focus", "update:modelValue"]);
const inputRef = ref<HTMLInputElement | null>(null);
const errorState = ref<string | null>(null);
const seePass = ref(false);
const copied = ref(false);
const copyTimeout = ref<NodeJS.Timeout | null>(null);
defineExpose({
  inputRef,
});

const props = defineProps({
  class: {
    type: String,
    default: "",
  },

  modelValue: [String, Number, null],
  type: {
    type: String,
    default: "text",
    validator: (value: string) =>
      [
        "currency",
        "phone",
        "email",
        "number",
        "password",
        "strong-password",
        "search",
        "text",
        "url",
      ].includes(value),
  },
  placeholder: String,
  color: {
    type: String as PropType<
      | "primary"
      | "secondary"
      | "success"
      | "info"
      | "warning"
      | "error"
      | "neutral"
    >,
    default: "primary",
  },
  variant: {
    type: String as PropType<"outline" | "soft" | "subtle" | "ghost" | "none">,
    default: "outline",
  },
  size: {
    type: String as PropType<"md" | "xs" | "sm" | "lg" | "xl">,
    default: "md",
  },
  min: {
    type: Number,
    default: undefined,
  },
  max: {
    type: Number,
    default: undefined,
  },
  step: {
    type: Number,
    default: 1,
  },
  floatingLabel: {
    type: Boolean,
    default: false,
  },
  id: String,
  required: Boolean,
  errorPattern: RegExp,
  uiInput: Object,
  classInput: String,
  uiInputProps: Object,
  uiFormField: Object,
  name: String,
  label: String,
  description: String,
  help: String,
  error: String,
  hint: String,
  eagerValidation: Boolean,
  validateOnInputDelay: Number,
  icon: String,
  validateOn: {
    type: String as PropType<"blur" | "input">,
    default: "blur",
  },
  isValidate: {
    type: Boolean,
    default: true,
  },
  isCopy: {
    type: Boolean,
    default: false,
  },
  requirements: {
    type: Array as PropType<{ regex: RegExp; text: string }[]>,
    default: () => [
      { regex: /.{8,}/, text: "At least 8 characters" },
      { regex: /\d/, text: "At least 1 number" },
      { regex: /[a-z]/, text: "At least 1 lowercase letter" },
      { regex: /[A-Z]/, text: "At least 1 uppercase letter" },
    ],
    validator: (value: any[]) =>
      value.every(
        (item) => item.regex instanceof RegExp && typeof item.text === "string"
      ),
  },
});

const mergedInputProps = computed(() => ({
  ...attrs,
  ...props,
  placeholder: props.floatingLabel ? "" : props.placeholder,
  ui: {
    base: `${props?.floatingLabel ? "peer" : ""} ${props?.uiInput?.base || ""}`,
    ...props.uiInput,
  },
  class: `${props.classInput || props.class || ""} ${attrs.class || ""}`.trim(),
  ...(props.type === "number"
    ? {
        min: props.min,
        max: props.max,
        step: props.step,
      }
    : {}),
}));

const mergedFormFieldProps = computed(() => {
  const baseProps = {
    name: props.name,
    description: props.description,
    help: props.help,
    hint: props.hint,
    size: props.size,
    label: props?.floatingLabel ? "" : props.label,
    required: props.required,
    eagerValidation: props.eagerValidation,
    validateOnInputDelay: props.validateOnInputDelay,
    ui: props.uiFormField,
    class: `${props.class || ""} ${attrs.class || ""}`.trim(),
    error: errorState.value || props.error,
  };
  // Hanya tambahkan validasi jika isValidate true
  if (props.isValidate) {
    // Tambahkan error pattern berdasarkan type
    if (props.type === "phone") {
      return {
        ...baseProps,
        errorPattern: props.errorPattern || /^[0-9]{8,15}$/,
      };
    } else if (props.type === "currency") {
      return {
        ...baseProps,
        errorPattern: props.errorPattern || /^[0-9]+$/,
      };
    } else if (props.type === "email") {
      return {
        ...baseProps,
        errorPattern: props.errorPattern || /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
      };
    } else if (props.type === "url") {
      return {
        ...baseProps,
        errorPattern:
          props.errorPattern ||
          /^(https?:\/\/)?([\da-z.-]+)\.([a-z.]{2,6})([/\w .-]*)*\/?$/,
      };
    }
  }

  return baseProps;
});

const maxLength = computed(() => {
  if (props.type === "phone") return 15; // Maksimal 15 digit untuk nomor telepon
  return undefined; // Tidak ada batasan untuk type lain
});

// Modifikasi actualType untuk password dan strong-password
const actualType = computed(() => {
  if (props.type === "password" || props.type === "strong-password") {
    return seePass.value ? "text" : "password";
  }
  return ["currency", "phone"].includes(props.type) ? "text" : props.type;
});

// Format tampilan berdasarkan type
const displayValue = computed(() => {
  if (!["currency", "phone"].includes(props.type)) return props.modelValue;

  if (
    props.modelValue === null ||
    props.modelValue === undefined ||
    props.modelValue === ""
  )
    return "";

  const str = String(props.modelValue).replace(/\D/g, "");
  if (str.length === 0) return "";

  if (props.type === "phone") {
    // Format nomor telepon: 1234-5678-9012
    return str.match(/.{1,4}/g)?.join("-") || "";
  } else {
    // Format currency: 1.000.000
    return str.replace(/\B(?=(\d{3})+(?!\d))/g, ".");
  }
});
watch(
  () => props.modelValue,
  (newVal) => {
    // if (props.isValidate) {
    if (props.isValidate && props.validateOn === "input") {
      validateInput(newVal);
    }
  }
);
// Validasi saat input berubah
function handleInput(value: string) {
  if (props.type === "number") {
    // Validasi angka
    if (value === "") {
      emit("update:modelValue", null);
      errorState.value = props.required ? "Field ini wajib diisi" : null;
      return;
    }

    if (!validateNumber(value)) {
      return;
    }

    emit("update:modelValue", Number(value));
  } else if (["currency", "phone"].includes(props.type)) {
    // Bersihkan semua non-digit
    const numericValue = value.replace(/\D/g, "");

    // Jika ada perubahan, update model
    if (numericValue !== String(props.modelValue || "")) {
      emit("update:modelValue", numericValue);
    }

    // Format tampilan
    if (inputRef.value) {
      inputRef.value.value =
        props.type === "phone"
          ? formatPhoneDisplay(numericValue)
          : formatCurrencyDisplay(numericValue);
    }
  } else {
    emit("update:modelValue", value);
  }
}
// Fungsi untuk menangani keypress
function handleKeyPress(event: KeyboardEvent) {
  if (props.type === "number") {
    // Izinkan: angka, backspace, delete, panah, tab, titik (untuk desimal)
    const allowedKeys = [
      "0",
      "1",
      "2",
      "3",
      "4",
      "5",
      "6",
      "7",
      "8",
      "9",
      "Backspace",
      "Delete",
      "ArrowLeft",
      "ArrowRight",
      "ArrowUp",
      "ArrowDown",
      "Tab",
      "Home",
      "End",
      ".",
    ];

    if (!allowedKeys.includes(event.key)) {
      event.preventDefault();
    }
  }
  if (["currency", "phone"].includes(props.type)) {
    // Daftar key yang diizinkan:
    // - Angka (0-9)
    // - Tombol kontrol (backspace, delete, panah, tab)
    // - Shortcut (Ctrl/Cmd + V, A, C, X, Z)
    const allowedKeys = [
      "Backspace",
      "Delete",
      "ArrowLeft",
      "ArrowRight",
      "ArrowUp",
      "ArrowDown",
      "Tab",
      "Home",
      "End",
    ];

    const isCtrl = event.ctrlKey || event.metaKey; // Untuk Ctrl/Cmd
    const isAllowedShortcut =
      isCtrl && ["v", "a", "c", "x", "z"].includes(event.key.toLowerCase());

    if (
      !/\d/.test(event.key) &&
      !allowedKeys.includes(event.key) &&
      !isAllowedShortcut
    ) {
      event.preventDefault();
    }
  }
}

// Fungsi untuk menangani paste
function handlePaste(event: ClipboardEvent) {
  if (["currency", "phone"].includes(props.type)) {
    event.preventDefault();
    const pasteData = event.clipboardData?.getData("text") || "";
    const numericValue = pasteData.replace(/\D/g, "");

    // Simulasikan input yang valid
    if (inputRef.value) {
      const startPos = inputRef.value.selectionStart || 0;
      const endPos = inputRef.value.selectionEnd || 0;
      const currentValue = inputRef.value.value;

      // Insert angka yang dipaste ke posisi kursor
      const newValue =
        currentValue.substring(0, startPos) +
        numericValue +
        currentValue.substring(endPos);
      const cleanValue = newValue.replace(/\D/g, "");

      // Update model dan tampilan
      emit("update:modelValue", cleanValue);
      inputRef.value.value =
        props.type === "phone"
          ? formatPhoneDisplay(cleanValue)
          : formatCurrencyDisplay(cleanValue);

      // Set posisi kursor setelah paste
      setTimeout(() => {
        const newCursorPos = startPos + numericValue.length;
        inputRef.value?.setSelectionRange(newCursorPos, newCursorPos);
      });
    }
  }
}
// Validasi untuk number
function validateNumber(value: string | number | null): boolean {
  const num = Number(value);

  if (isNaN(num)) {
    errorState.value = "Harus berupa angka";
    return false;
  }

  if (props.min !== undefined && num < props.min) {
    errorState.value = `Nilai minimal adalah ${props.min}`;
    return false;
  }

  if (props.max !== undefined && num > props.max) {
    errorState.value = `Nilai maksimal adalah ${props.max}`;
    return false;
  }

  return true;
}
// Fungsi validasi khusus email
function validateEmail(email: string): boolean {
  // Regex yang lebih komprehensif untuk email
  const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return re.test(email);
}
// Fungsi validasi URL
function validateUrl(url: string, requireProtocol = false): boolean {
  url = url.trim();
  if (!url) return false;

  // Tambahkan https:// jika tidak ada protocol
  if (!url.startsWith("http://") && !url.startsWith("https://")) {
    if (requireProtocol) return false;
    url = "https://" + url;
  }

  try {
    const urlObj = new URL(url);
    if (!["http:", "https:"].includes(urlObj.protocol)) return false;
    if (!urlObj.hostname) return false;
    if (!urlObj.hostname.includes(".") && urlObj.hostname !== "localhost") {
      return false;
    }
    return true;
  } catch {
    return false;
  }
}
// Fungsi format khusus untuk tampilan phone
function formatPhoneDisplay(value: string): string {
  if (!value) return "";
  return value.match(/.{1,4}/g)?.join("-") || "";
}

// Fungsi format khusus untuk tampilan currency
function formatCurrencyDisplay(value: string): string {
  if (!value) return "";
  return value.replace(/\B(?=(\d{3})+(?!\d))/g, ".");
}
// Saat focus, tampilkan tanpa format
function handleFocus(event: Event) {
  if (["currency", "phone"].includes(props.type) && inputRef.value) {
    // Tampilkan nilai tanpa format saat focus
    inputRef.value.value = String(props.modelValue || "").replace(/\D/g, "");
  }
  emit("focus", event);
}
// Validasi tambahan saat blur
function handleBlur(event: Event) {
  if (["currency", "phone"].includes(props.type) && inputRef.value) {
    const numericValue = String(props.modelValue || "").replace(/\D/g, "");
    inputRef.value.value =
      props.type === "phone"
        ? formatPhoneDisplay(numericValue)
        : formatCurrencyDisplay(numericValue);
  }

  if (props.isValidate) {
    validateInput();
  }

  emit("blur", event);
}

function handleChange(value: any) {
  emit("change", value);
}

// Fungsi validasi custom
function validateInput(value?: string | number | null) {
  const val = value ?? props.modelValue;
  const strValue = String(val || "").trim(); // Tambahkan trim()

  errorState.value = null;

  if (props.required && !strValue) {
    errorState.value = props.error || "Field ini wajib diisi";
    return false;
  }

  switch (props.type) {
    case "number":
      return validateNumber(strValue);
    case "phone":
      if (strValue.length < 8 || strValue.length > 15) {
        errorState.value =
          props.error || "Nomor telepon harus 8-15 digit angka";
        return false;
      }
      break;

    case "currency":
      if (isNaN(Number(strValue))) {
        errorState.value = props.error || "Hanya boleh berisi angka";
        return false;
      }
      break;

    case "email":
      if (strValue && !validateEmail(strValue)) {
        console.log("Email validation failed for:", strValue); // Debugging
        errorState.value = props.error || "Format email tidak valid";
        return false;
      }
      break;

    case "url":
      if (strValue && !validateUrl(strValue)) {
        errorState.value = props.error || "Format URL tidak valid";
        return false;
      }
      break;
  }

  return true;
}
function copyToClipboard() {
  // Copy nilai asli (bukan display value)
  const valueToCopy = props.modelValue?.toString() || "";

  navigator.clipboard
    .writeText(valueToCopy)
    .then(() => {
      copied.value = true;

      // Reset status copied setelah 2 detik
      if (copyTimeout.value) {
        clearTimeout(copyTimeout.value);
      }

      copyTimeout.value = setTimeout(() => {
        copied.value = false;
      }, 2000);
    })
    .catch((err) => {
      console.error("Failed to copy:", err);
    });
}

// Bersihkan timeout saat komponen di-unmount
onBeforeUnmount(() => {
  if (copyTimeout.value) {
    clearTimeout(copyTimeout.value);
  }
});
//--------------------------------------------------------------Spesial Strong Password
// Password strength validation
function checkPasswordStrength(str: string) {
  return props.requirements.map((req) => ({
    met: req.regex.test(str),
    text: req.text,
  }));
}
const passwordStrength = computed(() => {
  if (props.type !== "strong-password") return [];
  return checkPasswordStrength(String(props.modelValue || ""));
});

const passwordScore = computed(() => {
  return passwordStrength.value.filter((req) => req.met).length;
});
const passwordColor = computed(() => {
  if (props.type !== "strong-password") return props.color;
  if (passwordScore.value === 0) return "neutral";
  if (passwordScore.value <= Math.floor(props.requirements.length * 0.25))
    return "error";
  if (passwordScore.value <= Math.floor(props.requirements.length * 0.5))
    return "warning";
  if (passwordScore.value <= Math.floor(props.requirements.length * 0.75))
    return "warning";
  return "success";
});

const passwordText = computed(() => {
  if (props.type !== "strong-password") return "";
  if (passwordScore.value === 0) return "Enter a password";
  if (passwordScore.value <= Math.floor(props.requirements.length * 0.25))
    return "Very weak password";
  if (passwordScore.value <= Math.floor(props.requirements.length * 0.5))
    return "Weak password";
  if (passwordScore.value <= Math.floor(props.requirements.length * 0.75))
    return "Medium password";
  return "Strong password";
});

// Fungsi untuk toggle password visibility
function togglePasswordVisibility() {
  seePass.value = !seePass.value;
}

//--------------------------------------------------------------Spesial Strong Password
onMounted(() => {
  if (props.isValidate && props.validateOn === "blur" && props.modelValue) {
    validateInput(props.modelValue);
  }
});
</script>
