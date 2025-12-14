<script setup>
import { ref, onMounted, onBeforeUnmount } from 'vue'
import NavBar from './Navbar.vue'
import HeroBg1 from '../assets/hero-bg1.svg'
import HeroBg2 from '../assets/hero-bg2.svg'

const slides = ref([HeroBg2, HeroBg1])
const currentIndex = ref(0)
let interval = null

const nextSlide = () => {
  currentIndex.value = (currentIndex.value + 1) % slides.value.length
}

onMounted(() => {
  interval = setInterval(nextSlide, 6000)
})

onBeforeUnmount(() => {
  clearInterval(interval)
})
</script>

<template>
  <NavBar />
  <section class="relative h-[95vh] overflow-hidden text-white">
    <div class="absolute inset-0">
      <div
        v-for="(slide, index) in slides"
        :key="index"
        class="absolute inset-0 bg-cover bg-center transition-opacity duration-1000 ease-in-out"
        :style="{ backgroundImage: `url(${slide})` }"
        :class="index === currentIndex ? 'opacity-100 z-10' : 'opacity-0 z-0'"
      ></div>

      <div class="absolute inset-0 bg-[#2b197a]/60 backdrop-blur-sm z-20"></div>
    </div>

    <div
      class="relative z-30 flex flex-col justify-center items-center text-center h-full px-6 max-w-4xl mx-auto"
    >
      <h1 class="text-4xl md:text-6xl font-extrabold mb-6">Welcome to Brookstone Schools</h1>

      <p class="text-lg md:text-2xl/10 leading-relaxed mb-10 text-gray-200">
        We are delighted to introduce Brookstone Nursery, Primary, Secondary and International
        Foundation Programme. We offer courses in Nigerian and British Curricular. We offer
        interactive teaching by highly qualified and experienced specialist teachers alongside
        modern mentoring methods and constantly monitoring, reviewing and updating our curriculum in
        line with new developments.
      </p>
    </div>
  </section>
</template>

<style scoped>
section {
  position: relative;
  overflow: hidden;
}
</style>
