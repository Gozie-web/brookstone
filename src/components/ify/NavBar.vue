<script setup>
import { ref, computed } from 'vue'
import { useRoute } from 'vue-router'

const route = useRoute()
const mobileOpen = ref(false)
const aboutOpen = ref(false)

const isAboutActive = computed(() => route.path.startsWith('/ify/about'))
</script>

<template>
  <header class="bg-[#2b197a] text-white">
    <nav class="container mx-auto flex items-center justify-between px-6">
      <!-- LOGO -->
      <router-link to="/" class="flex items-center space-x-4 py-5">
        <img src="../../assets/logo.svg" alt="Brookstone Logo" class="w-16 h-16 object-contain" />
        <div>
          <h3 class="font-bold text-md">BROOKSTONE SCHOOL</h3>
          <p class="text-gray-300 text-sm">International Foundation School</p>
        </div>
      </router-link>

      <!-- DESKTOP NAV -->
      <ul class="hidden md:flex items-center space-x-6 text-sm font-light">
        <li>
          <router-link
            to="/ify"
            class="px-3 py-10"
            active-class="bg-yellow-600 border-b-2 border-yellow-600"
          >
            Home
          </router-link>
        </li>

        <!-- ABOUT US (DESKTOP DROPDOWN) -->
        <li class="relative group">
          <router-link
            to="/ify/about"
            class="px-3 py-10 inline-block"
            :class="isAboutActive ? 'bg-yellow-600 border-b-2 border-yellow-600' : ''"
          >
            About Us
          </router-link>

          <div
            class="absolute left-0 top-full hidden group-hover:block bg-[#2b197a] w-44 shadow-lg z-50"
          >
            <router-link to="/ify/about" class="block px-4 py-3 hover:bg-yellow-500">
              About Us
            </router-link>

            <router-link to="/ify/about/ncuk" class="block px-4 py-3 hover:bg-yellow-500">
              About NCUK
            </router-link>
          </div>
        </li>

        <li>
          <router-link
            to="/ify/partners"
            class="px-3 py-10"
            active-class="bg-yellow-600 border-b-2 border-yellow-600"
          >
            Our Partners
          </router-link>
        </li>

        <li>
          <router-link
            to="/ify/admissions"
            class="px-3 py-10"
            active-class="bg-yellow-600 border-b-2 border-yellow-600"
          >
            Admissions
          </router-link>
        </li>

        <li>
          <router-link
            to="/ify/contact-us"
            class="px-3 py-10"
            active-class="bg-yellow-600 border-b-2 border-yellow-600"
          >
            Contact Us
          </router-link>
        </li>

        <li>
          <router-link
            to="/ify/faqs"
            class="px-3 py-10"
            active-class="bg-yellow-600 border-b-2 border-yellow-600"
          >
            FAQs
          </router-link>
        </li>
      </ul>

      <!-- MOBILE TOGGLE -->
      <button class="md:hidden" @click="mobileOpen = !mobileOpen">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          class="h-7 w-7"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="2"
            d="M4 6h16M4 12h16M4 18h16"
          />
        </svg>
      </button>
    </nav>

    <!-- MOBILE MENU -->
    <div v-if="mobileOpen" class="md:hidden bg-[#2b197a] px-6 pb-6 space-y-3">
      <router-link to="/ify" class="block py-2" active-class="text-yellow-500 font-semibold"
        >Home</router-link
      >

      <!-- ABOUT US (MOBILE COLLAPSIBLE) -->
      <button class="flex justify-between items-center w-full py-2" @click="aboutOpen = !aboutOpen">
        <span :class="isAboutActive ? 'text-yellow-400 font-semibold' : ''"> About Us </span>
        <span>{{ aboutOpen ? '−' : '+' }}</span>
      </button>

      <div v-if="aboutOpen" class="pl-4 space-y-2 text-sm">
        <router-link to="/ify/about" class="block py-1"> About Us </router-link>
        <router-link to="/ify/about/ncuk" class="block py-1"> About NCUK </router-link>
      </div>

      <router-link
        to="/ify/partners"
        class="block py-2"
        active-class="text-yellow-500 font-semibold"
        >Our Partners</router-link
      >
      <router-link
        to="/ify/admissions"
        class="block py-2"
        active-class="text-yellow-500 font-semibold"
        >Admissions</router-link
      >
      <router-link
        to="/ify/contact-us"
        class="block py-2"
        active-class="text-yellow-500 font-semibold"
        >Contact Us</router-link
      >
      <router-link to="/ify/faqs" class="block py-2" active-class="text-yellow-500 font-semibold"
        >FAQs</router-link
      >
    </div>
  </header>
</template>
