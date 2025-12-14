<template>
  <section
    class="container mx-auto my-10 relative h-[70vh] flex items-end text-white"
    :style="{
      backgroundImage: `url(${background})`,
      backgroundSize: 'cover',
      backgroundPosition: 'center',
    }"
  >
    <!-- Overlay -->
    <div class="absolute inset-0 bg-gradient-to-b from-black/20 to-black/90"></div>

    <!-- Content -->
    <div class="relative z-10 pb-20 pl-[5%]">
      <h4 class="text-xl md:text-3xl font-base text-yellow-400">{{ date }}</h4>
      <h4 class="text-3xl md:text-5xl font-bold text-white pt-10">{{ title }}</h4>
      <h4 class="text-lg md:text-4xl font-base text-white max-w-3xl pt-10">{{ summary }}</h4>
    </div>
  </section>
</template>

<script setup lang="ts">
defineProps<{
  date: string
  background: string
  title: string
  summary: string
}>()
</script>
