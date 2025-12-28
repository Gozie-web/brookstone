<script setup>
import { ref, onMounted, onBeforeUnmount } from 'vue'
import heroImage1 from '@/assets/ify/heroImage1.svg'
import heroImage2 from '@/assets/ify/heroImage2.svg'
import heroArrowLeft from '@/assets/icons/heroArrowLeft.svg'
import heroArrowRight from '@/assets/icons/heroArrowRight.svg'

const slides = ref([
  {
    id: 1,
    image: heroImage1,
    title: 'Brookstone IFY Port Harcourt Center',
    text: `A setting that is clean, comfortable, and conducive to learning is provided. It is located in Igwuruta Port Harcourt and is well-equiped with advanced research and instructional facilities.`,
  },
  {
    id: 2,
    image: heroImage2,
    title: 'Brookstone IFY Abuja Center',
    text: `Conducive, comfortable, clean environment with adequate learning facilities. Well equiped with modern day research and learning facilities, it is located in the heart of Abuja.`,
  },
])

const currentIndex = ref(0)
let interval = null

const nextSlide = () => {
  currentIndex.value = (currentIndex.value + 1) % slides.value.length
}

const prevSlide = () => {
  currentIndex.value = (currentIndex.value - 1 + slides.value.length) % slides.value.length
}

// Auto-slide every 6 seconds
onMounted(() => {
  interval = setInterval(nextSlide, 5000)
})

onBeforeUnmount(() => {
  clearInterval(interval)
})
</script>

<template>
  <NavBar />
  <section class="relative h-[100vh] overflow-hidden">
    <div
      v-for="(slide, index) in slides"
      :key="slide.id"
      class="absolute inset-0 transition-opacity duration-1000 ease-in-out"
      :class="index === currentIndex ? 'opacity-100 z-10' : 'opacity-0 z-0'"
      :style="{
        backgroundImage: `url(${slide.image})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
      }"
    >
      <div class="absolute inset-0 bg-black/40"></div>

      <div
        class="absolute left-20 md:left-40 top-1/2 transform -translate-y-1/2 flex flex-col space-y-3 z-20"
      >
        <div class="flex gap-5 md:gap-8">
          <div class="flex flex-col gap-[5vh]">
            <button @click="prevSlide">
              <img :src="heroArrowLeft" alt="" />
            </button>
            <button @click="nextSlide">
              <img :src="heroArrowRight" alt="" />
            </button>
          </div>
          <div class="mx-auto px-6 text-white max-w-2xl h-full flex flex-col justify-center">
            <h1 class="text-4xl md:text-5xl font-bold mb-4 drop-shadow-lg">
              {{ slide.title }}
            </h1>
            <p class="text-lg md:text-xl leading-relaxed drop-shadow-md">
              {{ slide.text }}
            </p>
          </div>
        </div>
      </div>
    </div>

    <div class="absolute bottom-6 left-1/2 transform -translate-x-1/2 flex space-x-3 z-20">
      <span
        v-for="(slide, index) in slides"
        :key="slide.id"
        class="h-3 w-3 rounded-full cursor-pointer transition-all duration-300"
        :class="index === currentIndex ? 'bg-yellow-500 scale-110' : 'bg-gray-300 opacity-70'"
        @click="currentIndex = index"
      ></span>
    </div>
  </section>
</template>

<style scoped>
section {
  transition: background-image 1s ease-in-out;
}
</style>
