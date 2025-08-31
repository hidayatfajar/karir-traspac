<template>
  <div
    class="file-upload-container"
    :class="{ 'opacity-75 pointer-events-none': disabled }"
  >
    <!-- Upload area -->
    <div class="mb-4">
      <label
        class="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2"
        :class="{ 'text-gray-400 dark:text-gray-500': disabled }"
      >
        {{ label }}
        <span v-if="required" class="text-red-500">*</span>
      </label>

      <div
        ref="dropZone"
        class="border-2 border-dashed border-gray-300 dark:border-gray-600 rounded-lg p-4 transition-colors"
        :class="{
          'border-primary bg-primary/10': isDragging,
          'hover:border-primary': !isDragging && !hasFiles && !disabled,
          'bg-gray-100 dark:bg-gray-800': disabled,
        }"
        @dragover.prevent="!disabled && handleDragOver($event)"
        @dragleave.prevent="!disabled && handleDragLeave($event)"
        @drop.prevent="!disabled && handleDrop($event)"
      >
        <input
          type="file"
          ref="fileInput"
          :multiple="multiple"
          :disabled="disabled"
          :accept="accept"
          class="hidden"
          @change="handleFileChange"
        />
        <!-- Empty state -->
        <template v-if="!hasFiles || forceCustom">
          <div @click="!disabled && triggerFileInput()">
            <template v-if="$slots.icon">
              <slot
                name="icon"
                :icon="icon"
                :files="[
                  ...existingFiles,
                  ...newFiles?.map((file) => ({
                    url: getPreviewUrl(file),
                    ...file,
                  })),
                ]"
              />
            </template>
            <div
              v-else
              class="flex flex-col items-center justify-center py-8"
              :class="{ 'cursor-pointer': !disabled }"
            >
              <UIcon
                v-if="icon"
                :name="icon"
                :class="
                  disabled
                    ? 'text-gray-400 dark:text-gray-600'
                    : 'text-gray-400 dark:text-gray-500'
                "
              />
              <svg
                v-else
                class="size-12"
                :class="
                  disabled
                    ? 'text-gray-400 dark:text-gray-600'
                    : 'text-gray-400 dark:text-gray-500'
                "
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M15 13l-3-3m0 0l-3 3m3-3v12"
                ></path>
              </svg>
              <p
                class="mt-2 text-sm"
                :class="
                  disabled
                    ? 'text-gray-500 dark:text-gray-600'
                    : 'text-gray-600 dark:text-gray-400'
                "
              >
                Drag and drop files here, or
                <span
                  :class="
                    disabled ? 'text-gray-500' : 'text-primary cursor-pointer'
                  "
                  >click to browse</span
                >
              </p>
              <p
                class="text-xs mt-1"
                :class="
                  disabled
                    ? 'text-gray-500 dark:text-gray-600'
                    : 'text-gray-500 dark:text-gray-400'
                "
              >
                Supported formats:
                {{ accept === "*" ? "Any file type" : accept }}
              </p>
            </div>
          </div>
        </template>

        <!-- Files grid -->
        <div
          v-else
          :class="[
            props.multiple
              ? 'grid gap-4 grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5'
              : 'flex items-center justify-center',
          ]"
        >
          <!-- Existing files (from URLs) -->
          <div
            v-for="(file, index) in existingFiles"
            :key="'existing-' + index"
            class="relative group rounded-md overflow-hidden border border-gray-200 dark:border-gray-700"
            :style="{
              'max-width': `${thumbnailSize}px`,
              'max-height': `${thumbnailSize}px`,
            }"
          >
            <!-- File preview/thumbnail -->
            <div class="aspect-square flex flex-col">
              <div
                class="bg-gray-100 dark:bg-gray-800 flex items-center justify-center flex-grow"
              >
                <img
                  v-if="isImageUrl(file.url)"
                  :src="file.url"
                  class="w-full h-full object-cover"
                  :style="{
                    'object-fit': thumbnailFit,
                  }"
                  :alt="file.name || 'Preview'"
                />
                <div
                  v-else
                  class="w-full h-full flex flex-col items-center justify-center p-2 text-gray-500 dark:text-gray-400"
                >
                  <svg
                    class="w-10 h-10 mb-2"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
                    ></path>
                  </svg>
                  <span class="text-xs text-center truncate w-full px-1">{{
                    fileExtension(file.url)
                  }}</span>
                </div>
              </div>

              <!-- File info -->
              <div class="p-2 bg-white dark:bg-gray-800 max-h-40">
                <p
                  class="text-xs font-medium text-gray-900 dark:text-white truncate"
                >
                  {{ file.name || extractFileName(file.url) }}
                </p>
                <p
                  v-if="file.size"
                  class="text-xs text-gray-500 dark:text-gray-400"
                >
                  {{ formatFileSize(file.size) ?? "-" }}
                </p>
                <p
                  v-else
                  class="text-xs text-gray-500 dark:text-gray-400 truncate"
                >
                  {{ file.url ?? "-" }}
                </p>
              </div>
            </div>

            <!-- Hover actions -->
            <div
              class="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity flex flex-col items-center justify-center space-y-2"
            >
              <button
                class="text-white p-2 rounded-full hover:bg-white/20 transition-colors"
                title="Preview"
                @click.stop="openPreview(file)"
              >
                <svg
                  class="w-4 h-4"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
                  ></path>
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z"
                  ></path>
                </svg>
              </button>
              <div class="flex items-center gap-3">
                <!-- Replace button -->
                <button
                  v-if="!props.disabled"
                  class="text-white p-2 rounded-full hover:bg-white/20 transition-colors"
                  title="Replace"
                  @click.stop="handleReplaceFile(index, 'existing')"
                >
                  <svg
                    class="w-4 h-4"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      d="M15.232 5.232l3.536 3.536M9 11l6.586-6.586a2 2 0 112.828 2.828L11.828 13.828a2 2 0 01-.828.515L7 15l1.657-3.828a2 2 0 01.515-.828z"
                    />
                  </svg>
                </button>
                <button
                  v-if="!props.disabled"
                  class="text-white p-2 rounded-full hover:bg-white/20 transition-colors"
                  title="Remove"
                  @click.stop="removeExistingFile(index)"
                >
                  <svg
                    class="w-4 h-4"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16"
                    ></path>
                  </svg>
                </button>
              </div>
            </div>
          </div>

          <!-- New files (File objects) -->
          <div
            v-for="(file, index) in newFiles"
            :key="'new-' + index"
            class="relative group rounded-md overflow-hidden border border-gray-200 dark:border-gray-700"
            :style="{
              'max-width': `${thumbnailSize}px`,
              'max-height': `${thumbnailSize}px`,
            }"
          >
            <!-- File preview/thumbnail -->
            <div class="aspect-square flex flex-col">
              <div
                class="bg-gray-100 dark:bg-gray-800 flex items-center justify-center flex-grow"
              >
                <img
                  v-if="isImage(file)"
                  :src="getPreviewUrl(file)"
                  class="w-full h-full"
                  :style="{
                    'object-fit': thumbnailFit,
                  }"
                  :alt="file.name"
                />
                <div
                  v-else
                  class="w-full h-full flex flex-col items-center justify-center p-2 text-gray-500 dark:text-gray-400"
                >
                  <svg
                    class="w-10 h-10 mb-2"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
                    ></path>
                  </svg>
                  <span class="text-xs text-center truncate w-full px-1">{{
                    fileExtension(file.name)
                  }}</span>
                </div>
              </div>

              <!-- File info -->
              <div class="p-2 bg-white dark:bg-gray-800 max-h-40">
                <p
                  class="text-xs font-medium text-gray-900 dark:text-white truncate"
                >
                  {{ file.name }}
                </p>
                <p class="text-xs text-gray-500 dark:text-gray-400">
                  {{ formatFileSize(file.size) ?? "-" }}
                </p>
              </div>
            </div>

            <!-- Hover actions -->
            <div
              class="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity flex flex-col items-center justify-center space-y-2"
            >
              <!-- Preview button di paling atas -->
              <button
                class="text-white p-2 rounded-full hover:bg-white/20 transition-colors"
                title="Preview"
                @click.stop="openPreview(file)"
              >
                <svg
                  class="w-4 h-4"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
                  />
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z"
                  />
                </svg>
              </button>

              <!-- Replace button -->
              <div class="flex items-center gap-3">
                <button
                  v-if="!props.disabled"
                  class="text-white p-2 rounded-full hover:bg-white/20 transition-colors"
                  title="Replace"
                  @click.stop="handleReplaceFile(index, 'new')"
                >
                  <svg
                    class="w-4 h-4"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      d="M15.232 5.232l3.536 3.536M9 11l6.586-6.586a2 2 0 112.828 2.828L11.828 13.828a2 2 0 01-.828.515L7 15l1.657-3.828a2 2 0 01.515-.828z"
                    />
                  </svg>
                </button>

                <!-- Remove button -->
                <button
                  v-if="!props.disabled"
                  class="text-white p-2 rounded-full hover:bg-white/20 transition-colors"
                  title="Remove"
                  @click.stop="removeNewFile(index)"
                >
                  <svg
                    class="w-4 h-4"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16"
                    />
                  </svg>
                </button>
              </div>
            </div>
          </div>

          <!-- Add more button -->
          <div
            v-if="multiple && !disabled"
            class="aspect-square border-2 border-dashed border-gray-300 dark:border-gray-600 rounded-md flex items-center justify-center cursor-pointer hover:border-primary transition-colors"
            @click="triggerFileInput"
          >
            <div class="text-center p-4">
              <svg
                class="w-8 h-8 mx-auto text-gray-400"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M12 6v6m0 0v6m0-6h6m-6 0H6"
                ></path>
              </svg>
              <p class="mt-1 text-xs text-gray-500 dark:text-gray-400">
                Add files
              </p>
            </div>
          </div>
        </div>
      </div>

      <!-- Error message -->
      <p v-if="error" class="mt-2 text-sm text-red-600 dark:text-red-400">
        {{ error }}
      </p>
    </div>
    <UModal
      v-model:open="previewModalOpen"
      :ui="{ width: 'sm:max-w-4xl', footer: 'justify-between' }"
      :title="currentPreview?.name || 'File Preview'"
    >
      <template #body>
        <div class="flex-1 flex items-center justify-center p-4">
          <!-- Image Preview -->
          <img
            v-if="isPreviewableImage"
            :src="currentPreview?.url"
            :alt="currentPreview?.name"
            class="max-h-[70vh] max-w-full object-contain rounded-md"
          />

          <!-- PDF Preview -->
          <iframe
            v-else-if="isPDF"
            :src="`${currentPreview?.url}#view=fitH`"
            class="w-full h-[70vh] border-none rounded-md"
            frameborder="0"
          ></iframe>

          <!-- Unsupported Preview -->
          <div v-else class="text-center">
            <UIcon
              name="i-heroicons-document-text"
              class="mx-auto h-12 w-12 text-gray-400"
            />
            <h3 class="mt-2 text-sm font-medium text-gray-900 dark:text-white">
              {{ currentPreview?.name || "File" }}
            </h3>
            <p class="mt-1 text-sm text-gray-500 dark:text-gray-400">
              No preview available
            </p>
            <div class="mt-6">
              <UButton
                v-if="currentPreview?.url"
                label="Download File"
                color="primary"
                variant="solid"
                :to="currentPreview.url"
                target="_blank"
                download
              />
            </div>
          </div>
        </div>
      </template>
      <template #footer>
        <p class="text-sm text-gray-500 dark:text-gray-400">
          {{ currentFileType }}
        </p>
        <UButton
          label="Close"
          color="neutral"
          variant="ghost"
          @click="previewModalOpen = false"
        />
      </template>
    </UModal>
  </div>
</template>

<script lang="ts" setup>
import { ref, watch, computed, onMounted, onUnmounted } from "vue";

interface FileObject {
  url?: string;
  name?: string;
  size?: number;
  file?: File;
  type?: string;
}

type ModelValueType =
  | (File | FileObject | string)[]
  | File
  | FileObject
  | string
  | null;

interface Props {
  modelValue?: ModelValueType;
  name?: string;
  label?: string;
  multiple?: boolean;
  accept?: string;
  required?: boolean;
  maxSize?: number; // in MB
  maxFiles?: number;
  icon?: string | null;
  disabled?: boolean;
  thumbnailSize?: number;
  thumbnailFit?: "cover" | "contain" | "fill" | "none" | "scale-down";
  forceCustom?: boolean;
}

const props = withDefaults(defineProps<Props>(), {
  modelValue: null,
  name: "files",
  label: "Upload files",
  multiple: false,
  accept: "*",
  required: false,
  maxSize: 10, // 10MB
  maxFiles: 5,
  icon: null,
  disabled: false,
  thumbnailSize: 120,
  thumbnailFit: "cover",
  forceCustom: false,
});

const emit = defineEmits<{
  (
    e: "update:modelValue",
    files: (File | FileObject)[] | File | FileObject | null
  ): void;
  (e: "change", files: (File | FileObject)[] | File | FileObject | null): void;
}>();

const fileInput = ref<HTMLInputElement | null>(null);
const dropZone = ref<HTMLElement | null>(null);
const newFiles = ref<File[]>([]);
const existingFiles = ref<FileObject[]>([]);
const error = ref<string | null>(null);
const isDragging = ref(false);
const replaceIndex = ref<number | null>(null);
const replaceType = ref<"existing" | "new" | null>(null);

// Computed properties
const hasFiles = computed(() => {
  if (props.multiple) {
    return existingFiles.value.length > 0 || newFiles.value.length > 0;
  } else {
    return existingFiles.value.length > 0 || newFiles.value.length > 0;
  }
});
const allFiles = computed(() => [...existingFiles.value, ...newFiles.value]);

// Handle file selection
const handleFileChange = (event: Event) => {
  if (props.disabled) return;
  const input = event.target as HTMLInputElement;
  const addedFiles = input.files ? Array.from(input.files) : [];

  if (replaceIndex.value !== null && replaceType.value) {
    // Handle file replacement
    if (addedFiles.length > 0) {
      const newFile = addedFiles[0];

      // Validate the new file
      error.value = null;
      if (props.maxSize && newFile.size > props.maxSize * 1024 * 1024) {
        error.value = `File ${newFile.name} exceeds maximum size of ${props.maxSize}MB`;
        return;
      }
      if (props.accept !== "*" && !isFileTypeAccepted(newFile, props.accept)) {
        error.value = `File ${newFile.name} is not an accepted file type`;
        return;
      }

      if (replaceType.value === "existing") {
        // Replace existing file with new file
        existingFiles.value.splice(replaceIndex.value, 1);
        newFiles.value.splice(replaceIndex.value, 0, newFile);
      } else {
        // Replace new file with another new file
        newFiles.value.splice(replaceIndex.value, 1, newFile);
      }

      emitChanges();
    }
  } else {
    // Normal file addition
    processNewFiles(addedFiles);
  }

  // Reset file input and replace state
  if (input) {
    input.value = "";
  }
  replaceIndex.value = null;
  replaceType.value = null;
};

// Process new files with validation
const processNewFiles = (addedFiles: File[]) => {
  if (props.disabled) return;
  error.value = null;

  // In single mode, clear existing files when adding new ones
  if (!props.multiple) {
    existingFiles.value = [];
    newFiles.value = [];
  }

  // Check max files for multiple mode
  if (
    props.multiple &&
    props.maxFiles &&
    addedFiles.length + allFiles.value.length > props.maxFiles
  ) {
    error.value = `You can upload maximum ${props.maxFiles} files`;
    return;
  }

  // In single mode, only take the first file
  const filesToAdd = props.multiple ? addedFiles : addedFiles.slice(0, 1);

  // Check file sizes and types
  for (const file of filesToAdd) {
    if (props.maxSize && file.size > props.maxSize * 1024 * 1024) {
      error.value = `File ${file.name} exceeds maximum size of ${props.maxSize}MB`;
      return;
    }

    if (props.accept !== "*" && !isFileTypeAccepted(file, props.accept)) {
      error.value = `File ${file.name} is not an accepted file type`;
      return;
    }
  }

  // Add new files
  newFiles.value = [...newFiles.value, ...filesToAdd];
  emitChanges();
};

// Check if file type is accepted
const isFileTypeAccepted = (file: File, acceptPattern: string) => {
  const acceptedTypes = acceptPattern.split(",").map((type) => type.trim());
  return acceptedTypes.some((type) => {
    if (type.startsWith(".")) {
      // File extension check
      return file.name.toLowerCase().endsWith(type.toLowerCase());
    } else {
      // MIME type check
      return file.type.match(type.replace("*", ".*"));
    }
  });
};

// Drag and drop handlers
const handleDragOver = (e: DragEvent) => {
  if (props.disabled) return;
  e.preventDefault();
  isDragging.value = true;
};

const handleDragLeave = (e: DragEvent) => {
  if (props.disabled) return;
  e.preventDefault();
  isDragging.value = false;
};

const handleDrop = (e: DragEvent) => {
  if (props.disabled) return;
  e.preventDefault();
  isDragging.value = false;
  const droppedFiles = e.dataTransfer?.files;
  if (droppedFiles && droppedFiles.length > 0) {
    if (replaceIndex.value !== null && replaceType.value) {
      // Handle drop for replacement
      const addedFiles = Array.from(droppedFiles);
      if (addedFiles.length > 0) {
        const newFile = addedFiles[0];

        if (replaceType.value === "existing") {
          existingFiles.value.splice(replaceIndex.value, 1);
          newFiles.value.splice(replaceIndex.value, 0, newFile);
        } else {
          newFiles.value.splice(replaceIndex.value, 1, newFile);
        }

        emitChanges();
      }
      replaceIndex.value = null;
      replaceType.value = null;
    } else {
      // Normal drop
      processNewFiles(Array.from(droppedFiles));
    }
  }
};

// Trigger file input click
const triggerFileInput = () => {
  if (props.disabled || !fileInput.value) return;
  fileInput.value.click();
};
const handleReplaceFile = (index: number, type: "existing" | "new") => {
  if (props.disabled) return;
  replaceIndex.value = index;
  replaceType.value = type;
  triggerFileInput();
};
// Remove existing file (URL)
const removeExistingFile = (index: number) => {
  if (props.disabled) return;
  existingFiles.value.splice(index, 1);
  emitChanges();
};

// Remove new file (File object)
const removeNewFile = (index: number) => {
  if (props.disabled) return;
  newFiles.value.splice(index, 1);
  emitChanges();
};

// Emit changes to parent
const emitChanges = () => {
  if (props.multiple) {
    const filesToEmit = [...existingFiles.value, ...newFiles.value];
    emit("update:modelValue", filesToEmit);
    emit("change", filesToEmit);
  } else {
    // For single file mode, emit the first file or null
    const allFiles = [...existingFiles.value, ...newFiles.value];
    const fileToEmit = allFiles.length > 0 ? allFiles[0] : null;
    emit("update:modelValue", fileToEmit);
    emit("change", fileToEmit);
  }
};

// Check if URL points to an image
const isImageUrl = (url: string) => {
  return /\.(jpg|jpeg|png|gif|webp|svg)$/i.test(url);
};
const extractFileName = (url: string): string => {
  return decodeURIComponent(url.split("/").pop()?.split("?")[0] || "file");
};
// Extract filename from URL
// const extractFileName = (url: string) => {
//   return url.split("/").pop() || "Downloaded file";
// };

// Check if file is an image
const isImage = (file: File) => {
  return file.type.startsWith("image/");
};

// Get preview URL for image files
const getPreviewUrl = (file: File) => {
  console.log("getPreviewUrl", file);
  return URL.createObjectURL(file);
};

// Format file size
const formatFileSize = (bytes: number) => {
  if (bytes === 0) return "0 Bytes";
  const k = 1024;
  const sizes = ["Bytes", "KB", "MB", "GB"];
  const i = Math.floor(Math.log(bytes) / Math.log(k));
  return parseFloat((bytes / Math.pow(k, i)).toFixed(2)) + " " + sizes[i];
};

// Parse initial value
const parseInitialValue = (value: ModelValueType) => {
  newFiles.value = [];
  existingFiles.value = [];

  if (!value) return;

  if (props.multiple) {
    // Handle array case
    const filesArray = Array.isArray(value) ? value : [value];
    filesArray.forEach((item) => {
      if (item instanceof File) {
        newFiles.value.push(item);
      } else if (typeof item === "string") {
        existingFiles.value.push({ url: item, name: extractFileName(item) });
      } else if (item && typeof item === "object") {
        if (item.file) {
          newFiles.value.push(item.file);
        } else if (item.url) {
          existingFiles.value.push(item);
        }
      }
    });
  } else {
    // Handle single file case
    if (value instanceof File) {
      newFiles.value = [value];
    } else if (typeof value === "string") {
      existingFiles.value = [{ url: value, name: extractFileName(value) }];
    } else if (value && typeof value === "object" && !Array.isArray(value)) {
      // Pastikan ini adalah FileObject, bukan array
      const fileObj = value as FileObject;
      if (fileObj.file) {
        newFiles.value = [fileObj.file];
      } else if (fileObj.url) {
        existingFiles.value = [fileObj];
      }
    }
  }
};

// Watch for external modelValue changes
watch(
  () => props.modelValue,
  (newVal) => {
    parseInitialValue(newVal);
  },
  { immediate: true, deep: true }
);

// Clean up object URLs when component unmounts
onUnmounted(() => {
  newFiles.value.forEach((file) => {
    if (isImage(file)) {
      URL.revokeObjectURL(getPreviewUrl(file));
    }
  });
});
const fileExtension = (filename: string) => {
  return filename.split(".").pop()?.toUpperCase() || "FILE";
};

const previewModalOpen = ref(false);
const currentPreview = ref<FileObject | null>(null);

// Computed properties
const isPreviewableImage = computed(() => {
  if (!currentPreview.value?.type) return false;
  return ["image/jpeg", "image/png", "image/gif", "image/webp"].includes(
    currentPreview.value.type
  );
});

const isPDF = computed(() => {
  return currentPreview.value?.type === "application/pdf";
});

const currentFileType = computed(() => {
  if (!currentPreview.value?.type) return "Unknown file type";

  const typeMap: Record<string, string> = {
    "image/jpeg": "JPEG Image",
    "image/png": "PNG Image",
    "image/gif": "GIF Image",
    "image/webp": "WebP Image",
    "application/pdf": "PDF Document",
    "application/msword": "Word Document",
    "application/vnd.openxmlformats-officedocument.wordprocessingml.document":
      "Word Document",
  };

  return typeMap[currentPreview.value.type] || currentPreview.value.type;
});

// Methods
const openPreview = (file: File | FileObject) => {
  if ("url" in file) {
    // Existing file (from URL)
    currentPreview.value = {
      url: file.url,
      name: file.name || extractFileName(file.url),
      type: getFileTypeFromUrl(file.url),
    };
  } else {
    // New file (File object)
    currentPreview.value = {
      url: file instanceof File ? URL.createObjectURL(file) : "",
      name: file.name,
      type: file.type,
    };
  }
  previewModalOpen.value = true;
};

const getFileTypeFromUrl = (url: string): string => {
  const extension = url.split(".").pop()?.toLowerCase() || "";

  const typeMap: Record<string, string> = {
    jpg: "image/jpeg",
    jpeg: "image/jpeg",
    png: "image/png",
    gif: "image/gif",
    webp: "image/webp",
    pdf: "application/pdf",
    doc: "application/msword",
    docx: "application/vnd.openxmlformats-officedocument.wordprocessingml.document",
  };

  return typeMap[extension] || "application/octet-stream";
};

// Cleanup
onBeforeUnmount(() => {
  if (currentPreview.value?.url && !("url" in currentPreview.value)) {
    URL.revokeObjectURL(currentPreview.value.url);
  }
});
</script>

<style scoped>
/* Custom transitions for hover effects */
.group:hover .group-hover\:opacity-100 {
  transition: opacity 0.2s ease-in-out;
}

/* Responsive grid adjustments */
@media (max-width: 640px) {
  .grid {
    grid-template-columns: repeat(2, minmax(0, 1fr));
  }
}
</style>
