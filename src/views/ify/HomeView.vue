<script setup>
import { ref, onMounted, onBeforeUnmount } from 'vue'
import NavBar from '@/components/ify/NavBar.vue'
import HeroSection from '@/components/ify/HeroSection.vue'
import FooterSection from '@/components/ify/FooterSection.vue'
import check from '@/assets/ify/check.svg'
import commissioner from '@/assets/ify/commissioner.svg'
import quotes from '@/assets/icons/quotes.svg'
</script>

<template>
  <main>
    <NavBar />

    <HeroSection />

    <section class="bg-[#F6F8FF] py-[15vh]">
      <div class="flex max-w-[80%] mx-auto gap-10 items-center flex-wrap">
        <div class="flex gap-5 max-w-[500px]">
          <img :src="check" style="width: 4rem; height: 4rem" alt="check" />
          <div>
            <h2 class="text-3xl font-semibold text-gray-800 mb-5">Brookstone IFY</h2>
            <p class="text-lg font-[200] text-black">
              Brookstone International Foundation School is an independent, co-educational
              institution that offers accademically rigorous, stimulating, varied, and challenging
              International Foundation Year (IFY) and International Year One (IYONE) programs
            </p>
          </div>
        </div>
        <div class="relative w-full h-[50vh] overflow-hidden">
          <iframe
            class="absolute top-0 left-0 w-full h-full"
            src="https://www.youtube.com/embed/VIDEO_ID?rel=0"
            title="YouTube video"
            frameborder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowfullscreen
          ></iframe>
        </div>
      </div>
    </section>

    <section class="mb-[30vh] mt-[20vh] px-6 flex justify-center">
      <div
        class="relative bg-[#28156E] rounded-3xl max-w-6xl w-full flex flex-col md:flex-row p-10 md:p-14"
      >
        <div class="md:w-1/3 flex justify-center items-start">
          <div class="relative">
            <img :src="commissioner" alt="Student" class="rounded-xl w-48 h-60 object-cover" />
          </div>
        </div>

        <div class="md:w-2/3 mt-8 md:mt-0 md:pl-10 text-left">
          <p class="text-white text-md leading-relaxed mb-[3vh]">
            "Brookstone already enjoys an extremely strong reputation as a quality education
            provider here in Nigeria expanding from their current operations in Port Harcourt. NCUK
            has also operated with Brookstone for over seven years."
          </p>

          <div class="w-[30%] border border-t-2 border-yellow-500 mb-[5vh]"></div>

          <p class="text-white -mt-1 italic">
            Former British high commissioner to Nigeria <br />
            February 14th, 2017
          </p>
        </div>

        <div
          class="absolute -top-4 -right-5 bg-[#F0B100] text-white text-3xl rounded-full w-10 h-10 flex items-center justify-center"
        >
          <img :src="quotes" alt="''" class="" />
        </div>
      </div>
    </section>

    <FooterSection />
  </main>
</template>
