<template>
  <section
    class="relative h-[90vh] flex items-center justify-center text-center text-white"
    :style="{
      backgroundImage: `url(${background})`,
      backgroundSize: 'cover',
      backgroundPosition: 'center',
    }"
  >
    <!-- Overlay -->
    <div class="absolute inset-0 bg-black/20"></div>

    <!-- Content -->
    <div class="relative z-10">
      <h1 class="text-4xl md:text-5xl font-bold">{{ title }}</h1>
    </div>

    <!-- Curved bottom -->
    <svg
      class="absolute bottom-0 left-0 w-full"
      viewBox="0 0 1440 320"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        fill="#f9f9fc"
        fill-opacity="1"
        d="M0,224L80,229.3C160,235,320,245,480,234.7C640,224,800,192,960,181.3C1120,171,1280,181,1360,186.7L1440,192V320H1360C1280,320,1120,320,960,320C800,320,640,320,480,320C320,320,160,320,80,320H0Z"
      ></path>
    </svg>
  </section>
</template>

<script setup lang="ts">
defineProps<{
  title: string
  background: string
}>()
</script>
