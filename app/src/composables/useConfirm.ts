import { ref } from "vue";

const state = {
  isOpen: ref(false),
  title: ref("Konfirmasi"),
  message: ref("Apakah Anda yakin?"),
  onConfirm: ref<() => void>(() => {}),
  onCancel: ref<() => void>(() => {}),
  customContent: ref<
    | ((props: { handleConfirm: () => void; handleCancel: () => void }) => any)
    | null
  >(null),
};

export function useConfirm() {
  const confirm = (options: {
    title?: string;
    message?: string;
    onConfirm: () => void;
    onCancel?: () => void;
    customContent?: (props: {
      handleConfirm: () => void;
      handleCancel: () => void;
    }) => any;
  }) => {
    state.isOpen.value = true;
    state.title.value = options.title || "Konfirmasi";
    state.message.value = options.message || "Apakah Anda yakin?";
    state.onConfirm.value = options.onConfirm;
    state.onCancel.value = options.onCancel || (() => {});
    state.customContent.value = options.customContent || null;
  };

  return {
    ...state,
    confirm,
  };
}
