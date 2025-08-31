<template>
  <div>
    <div class="bg-[##EEF5F9] min-h-dvh">
      <Header />
      <UContainer
        :ui="{
          base: 'mx-auto',
          padding: 'sm:px-0 lg:px-0 xl:px-0 md:px-0 px-0',
          constrained: 'max-w-7xl',
        }"
      >
        <slot />
      </UContainer>
    </div>
  </div>
</template>
