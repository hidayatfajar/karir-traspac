<template>
  <div class="image-cropper-container">
    {{ aspectRatio }}
    <advanced-cropper ref="cropperRef" class="cropper" :src="modelValue" :stencil-props="{ aspectRatio: aspectRatio }"
      :default-boundaries="defaultBoundaries" @change="onCropChange" />
    <div class="controls">
      <button @click="setAspectRatio(16 / 9)">16:9</button>
      <button @click="setAspectRatio(4 / 3)">4:3</button>
      <button @click="setAspectRatio(1)">1:1</button>
      <button @click="setAspectRatio(3 / 4)">3:4</button>
      <button @click="setAspectRatio(9 / 16)">9:16</button>
      <button @click="cropImage">Crop</button>
    </div>
  </div>
  <!-- start usage -->

  <!-- start template -->
  <!-- <div>
    <ClientOnly>
      <div>
        <h1>Crop Image Example</h1>
        <ImageCropper v-model="imageSrc" @crop="onCropComplete" />
        <input type="file" @change="onFileChange" />
        <div v-if="croppedImage">
          <h3>Hasil Crop:</h3>
          <img :src="croppedImage" alt="Cropped Image" />
        </div>
      </div>
    </ClientOnly>
  </div> -->
  <!-- end template -->

  <!-- start script -->
  <!-- const imageSrc = ref(null);
  const croppedImage = ref(null);

  const onFileChange = (event) => {
  const file = event.target.files[0];
  if (!file) return;

  const reader = new FileReader();
  reader.onload = (e) => {
  imageSrc.value = e.target.result;
  };
  reader.readAsDataURL(file);
  };

  const onCropComplete = (cropped) => {
  croppedImage.value = cropped;
  }; -->
  <!-- end script -->

  <!-- end usage -->

</template>

<script setup>
import { ref, defineProps, defineEmits, nextTick, watch } from "vue";
import { Cropper as AdvancedCropper } from "vue-advanced-cropper";
import "vue-advanced-cropper/dist/style.css";

// Props
const props = defineProps({
  modelValue: {
    type: String,
    required: true,
    default: "/images/no-thumbnail.jpg",
  },
  aspectRatio: {
    type: Number,
    default: 16 / 9,
  },
});

// Emit
const emit = defineEmits(["update:modelValue", "crop"]);

// Refs
const cropperRef = ref(null);
const aspectRatio = ref(props.aspectRatio);
const defaultBoundaries = { width: 400, height: 300 };

// 🔥 FIX: Mengubah aspect ratio dengan benar
const setAspectRatio = async (ratio) => {
  aspectRatio.value = ratio;
  await nextTick();
  if (cropperRef.value?.refresh) {
    cropperRef.value.refresh();
  }
};

// 🔥 FIX: Crop gambar dengan benar
const cropImage = () => {
  if (!cropperRef.value) return;
  const { canvas } = cropperRef.value.getResult();
  if (canvas) {
    const croppedImage = canvas.toDataURL("image/png");
    emit("crop", croppedImage);
  }
};

const onCropChange = (data) => {
  console.log("Crop updated:", data);
};

// Watch perubahan aspect ratio
watch(() => props.aspectRatio, async (newRatio) => {
  aspectRatio.value = newRatio;
  await nextTick();
  if (cropperRef.value?.refresh) {
    cropperRef.value.refresh();
  }
});
</script>

<style scoped>
.image-cropper-container {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 10px;
}

.cropper {
  width: 400px;
  height: 300px;
  border: 1px solid #ccc;
}

.controls {
  display: flex;
  gap: 10px;
}

button {
  padding: 8px 12px;
  background: #007bff;
  color: white;
  border: none;
  cursor: pointer;
  border-radius: 5px;
}

button:hover {
  background: #0056b3;
}
</style>
