<script setup>
import { ref } from 'vue'

const mobileOpen = ref(false)
</script>

<template>
  <header class="bg-[#2b197a] text-white">
    <nav class="container mx-auto flex items-center justify-between h-30">
      <router-link to="/" class="flex space-x-5 items-center px-6 pb-5 pt-5">
        <img
          src="../../assets/logo.svg"
          alt="Brookstone Logo"
          class="w-8 h-8 object-contain"
          style="width: 4rem; height: 4rem"
        />
        <div>
          <h3 class="font-bold text-md">BROOKSTONE SCHOOL</h3>
          <p class="text-gray-300 text-md">(Nursery & Primary)</p>
        </div>
      </router-link>

      <ul class="hidden md:flex items-center space-x-5 text-md font-light">
        <li>
          <router-link
            to="/primary"
            class="px-3 py-12"
            active-class="bg-yellow-600 border-yellow-600"
          >
            Home - Primary
          </router-link>
        </li>
        <li>
          <router-link
            to="/primary/about"
            class="px-3 py-10"
            active-class="bg-yellow-600 border-b-2 font-normal border-yellow-600"
          >
            About Us
          </router-link>
        </li>
        <li>
          <router-link
            to="/primary/events"
            class="px-3 py-10"
            active-class="bg-yellow-600 border-b-2 font-normal border-yellow-600"
            :class="{
              'bg-yellow-600 border-b-2 border-yellow-600':
                $route.path.startsWith('/primary/events'),
            }"
          >
            Events
          </router-link>
        </li>
        <li>
          <router-link
            to="/primary/news"
            class="px-3 py-10"
            active-class="bg-yellow-600 border-b-2 font-normal border-yellow-600"
            :class="{
              'bg-yellow-600 border-b-2 border-yellow-600': $route.path.startsWith('/primary/news'),
            }"
          >
            News
          </router-link>
        </li>
        <li>
          <router-link
            to="/primary/admission"
            class="px-3 py-10"
            active-class="bg-yellow-600 border-b-2 border-yellow-600"
          >
            Admission
          </router-link>
        </li>
        <li>
          <router-link
            to="/primary/contact-us"
            class="px-3 py-10"
            active-class="bg-yellow-600 border-b-2 border-yellow-600"
          >
            Contact Us
          </router-link>
        </li>
      </ul>

      <button
        class="md:hidden text-white focus:outline-none px-6"
        @click="mobileOpen = !mobileOpen"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          class="h-7 w-7"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            v-if="!mobileOpen"
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="2"
            d="M4 6h16M4 12h16M4 18h16"
          />
          <path
            v-else
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="2"
            d="M6 18L18 6M6 6l12 12"
          />
        </svg>
      </button>
    </nav>

    <transition name="fade">
      <div
        v-if="mobileOpen"
        class="md:hidden bg-[#2b197a] border-t border-white/10 px-6 py-4 space-y-3 text-md font-[300]"
      >
        <router-link
          to="/primary"
          class="block py-2"
          active-class="text-yellow-500 font-semibold"
          @click="mobileOpen = false"
        >
          Home - Primary
        </router-link>

        <router-link
          to="/primary/about"
          class="block py-2"
          active-class="text-yellow-500 font-semibold"
          @click="mobileOpen = false"
        >
          About Us
        </router-link>

        <router-link
          to="/primary/events"
          class="block py-2"
          active-class="text-yellow-500 font-semibold"
          :class="{
            'text-yellow-500 font-semibold': $route.path.startsWith('/primary/events'),
          }"
          @click="mobileOpen = false"
        >
          Events
        </router-link>

        <router-link
          to="/primary/news"
          class="block py-2"
          active-class="text-yellow-500 font-semibold"
          :class="{
            'text-yellow-500 font-semibold': $route.path.startsWith('/primary/news'),
          }"
          @click="mobileOpen = false"
        >
          News
        </router-link>

        <router-link
          to="/primary/admission"
          class="block py-2"
          active-class="text-yellow-500 font-semibold"
          @click="mobileOpen = false"
        >
          Admission
        </router-link>

        <router-link
          to="/primary/contact-us"
          class="block py-2"
          active-class="text-yellow-500 font-semibold"
          @click="mobileOpen = false"
        >
          Contact Us
        </router-link>
      </div>
    </transition>
  </header>
</template>

<style>
.fade-enter-active,
.fade-leave-active {
  transition: all 0.25s ease;
}
.fade-enter-from,
.fade-leave-to {
  opacity: 0;
  transform: translateY(-5px);
}
</style>
