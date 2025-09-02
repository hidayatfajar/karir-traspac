<template>
  <div>
    <div class="bg-[##EEF5F9] min-h-dvh">
      <HeaderPublic />
      <UContainer
        :ui="{
          base: 'mx-auto',
          padding: 'sm:px-0 lg:px-0 xl:px-0 md:px-0 px-0',
          constrained: 'max-w-7xl',
        }"
      >
        <slot />
      </UContainer>
      <FooterPublic/>
      
      <!-- Demo Login Panel -->
      <ClientOnly>
        <DemoLoginPanel />
      </ClientOnly>
    </div>
  </div>
</template>

<script setup>
// Import the component
import DemoLoginPanel from '~/components/demo/DemoLoginPanel.vue';
</script>
