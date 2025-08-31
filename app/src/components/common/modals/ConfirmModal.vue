<template>
  <UModal
    v-model:open="isOpen"
    :ui="{
      content:
        'top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[calc(100vw-2rem)] max-w-lg max-h-[calc(100dvh-2rem)] sm:max-h-[calc(100dvh-4rem)] rounded-lg shadow-lg ring ring-default overflow-visible',
    }"
  >
    <template #content>
      <!-- Default content jika tidak menggunakan slot -->

      <div
        v-if="!customContent"
        class="relative p-3 text-center bg-default rounded-2xl shadow dark:bg-gray-800"
      >
        <div
          class="absolute -top-15 left-1/2 -translate-x-1/2 bg-default p-1 rounded-full"
        >
          <div class="bg- rounded-full size-26">
            <UIcon
              name="line-md:close-circle-filled"
              class="size-26 text-red-500 bg-white rounded-full"
              mode="svg"
            />
          </div>
        </div>
        <h3 class="mb-2 mt-10 text-lg font-semibold text-highlighted">
          {{ title }}
        </h3>
        <p class="mb-3 text-toned">{{ message }}</p>
        <hr />
        <div class="flex justify-center items-center space-x-6 mt-3">
          <UButton
            label="Batal"
            class="w-24 flex items-center justify-center bg-slate-50 text-muted hover:bg-slate-100"
            color="neutral"
            @click="handleCancel"
          />
          <UButton
            label="Konfirmasi"
            class="w-24 flex items-center justify-center text-white"
            color="error"
            @click="handleConfirm"
          />
        </div>
      </div>

      <!-- Slot untuk konten custom -->
      <component v-else :is="customContent({ handleConfirm, handleCancel })" />
    </template>
  </UModal>
</template>

<script setup lang="ts">

const { isOpen, title, message, onConfirm, onCancel, customContent } =
  useConfirm();

function handleConfirm() {
  onConfirm.value();
  isOpen.value = false;
}

function handleCancel() {
  onCancel.value();
  isOpen.value = false;
}
</script>
