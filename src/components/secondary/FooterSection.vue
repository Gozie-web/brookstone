<template>
  <footer class="bg-[#0A0F4C] text-white pt-12 pb-6">
    <div class="container mx-auto flex space-x-10 items-center px-6 mb-5 mt-5">
      <img
        src="../../assets/logo.svg"
        alt="Brookstone Logo"
        class="w-25 h-25 object-contain"
        style="width: 8rem; height: 8rem"
      />
      <div>
        <h3 class="font-bold text-2xl">BROOKSTONE SCHOOL</h3>
        <p class="text-gray-300 text-xl">(Secondary)</p>
      </div>
    </div>

    <div class="border-t-2 border-yellow-600 pt-8"></div>

    <div class="container mx-auto px-6 text-sm">
      <div class="flex gap-20 flex-wrap">
        <div class="flex-1">
          <p class="text-gray-300 mb-6 text-lg leading-relaxed max-w-2xs">
            Nurturing excellence, developing leaders, and inspiring a lifelong love of learning.
          </p>

          <div class="flex space-x-4 text-white text-xl">
            <a href="#" class="hover:text-yellow-400"><i class="fab fa-facebook-f"></i></a>
            <a href="#" class="hover:text-yellow-400"><i class="fab fa-twitter"></i></a>
            <a href="#" class="hover:text-yellow-400"><i class="fab fa-instagram"></i></a>
            <a href="#" class="hover:text-yellow-400"><i class="fab fa-linkedin-in"></i></a>
            <a href="#" class="hover:text-yellow-400"><i class="fab fa-youtube"></i></a>
          </div>
        </div>

        <div class="flex justify-between gap-10 flex-wrap">
          <div class="flex-1 min-w-[300px]">
            <h4 class="font-semibold mb-4 text-lg">QUICK LINK</h4>
            <p class="font-light mb-4">
              <router-link to="/secondary/about" class="font-light"> About Us </router-link>
            </p>
            <p class="font-light mb-4">
              <router-link to="/secondary/events" class="font-light"> Events </router-link>
            </p>
            <p class="font-light mb-4">
              <router-link to="/secondary/admissions" class="font-light"> Admission </router-link>
            </p>
            <p class="font-light mb-4">
              <router-link to="/secondary/news" class="font-light"> News </router-link>
            </p>
            <p class="font-light mb-4">
              <router-link to="/secondary/contact-us" class="font-light"> Contact Us </router-link>
            </p>
          </div>

          <div>
            <h4 class="font-semibold mb-4 text-lg">PORT HARCOURT</h4>
            <p>Brookstone School (Secondary)</p>
            <p>International Airport Road</p>
            <p>Igwuruta,</p>
            <p>Port Harcourt, Rivers State</p>

            <div class="mt-10 text-gray-300 space-y-1">
              <p class="flex items-center gap-2 pb-5">
                <i class="fas fa-phone text-xl"></i> 0807 885 5452, 0807 885 50322
              </p>
              <p class="flex items-center gap-2 pb-5">
                <i class="fas fa-clock text-xl"></i> Mon - Fri 08:00 - 17:00
              </p>
              <p class="flex items-center gap-2 pb-5">
                <i class="fas fa-envelope text-xl"></i>
                secondaryadmissions@brookstoneng.org <br />
                principal@brookstoneng.org
              </p>
            </div>
          </div>
        </div>
      </div>

      <div class="mt-10 border-t-2 border-gray-400"></div>

      <div class="text-gray-400 text-sm mt-5">
        © 2025 Brookstone copyright. All Rights Reserved.
      </div>
    </div>
  </footer>
</template>

<script setup>
// Static footer — no reactive logic yet
</script>

<style scoped>
@import url('https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.5.0/css/all.min.css');
</style>
