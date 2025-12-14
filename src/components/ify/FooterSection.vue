<template>
  <footer class="bg-[#000847] text-white pt-5 pb-6">
    <div
      class="container flex gap-10 items-center justify-between mx-auto px-6 mb-5 mt-1 flex-wrap"
    >
      <div class="flex gap-5 items-center flex-wrap">
        <img
          src="../../assets/logo.svg"
          alt="Brookstone Logo"
          class="w-25 h-25 object-contain"
          style="width: 8rem; height: 8rem"
        />
        <div>
          <h3 class="font-bold text-2xl">BROOKSTONE</h3>
          <p class="text-gray-300 text-lg">International Foundation School</p>
        </div>
      </div>

      <p class="max-w-[400px]">
        Nurturing excellence, developing leaders, and inspiring a lifelong love of learning
      </p>
    </div>

    <div class="border-t border-gray-300 pt-8"></div>

    <div class="container mx-auto px-6 text-sm">
      <div class="flex gap-20 justify-baseline">
        <div class="container">
          <div class="grid md:grid-cols-2 lg:grid-cols-3">
            <div>
              <h4 class="font-semibold mb-4 text-lg">Quick Links</h4>
              <p class="font-light mb-4">
                <router-link to="/ify"> Home </router-link>
              </p>
              <p class="font-light mb-4">
                <router-link to="/ify/about" class="font-light"> About Us </router-link>
              </p>
              <p class="font-light mb-4">
                <router-link to="/ify/partners" class="font-light"> Our Partners </router-link>
              </p>
              <p class="font-light mb-4">
                <router-link to="/ify/faqs" class="font-light"> FAQs </router-link>
              </p>
              <p class="font-light mb-4">
                <router-link to="/ify/contact-us" class="font-light"> Contact Us </router-link>
              </p>
            </div>

            <div class="pr-20">
              <h4 class="font-semibold text-lg mb-5">BROOKSTONE INTERNATIONAL FOUNDATION SCHOOL</h4>

              <div class="flex gap-3 align-start">
                <p class="fas fa-location-dot mt-1 text-xl"></p>
                <p class="font-light max-w-100px">
                  Plot 131, Cadastral zone B06, Behind Capital Hub Shoping Mall, Off Ahmadu Bello
                  Way, Mabushi distric Abuja.
                </p>
              </div>

              <div class="flex gap-3 mt-5 align-start">
                <p class="fas fa-phone mt-1 text-xl"></p>
                <p class="font-light max-w-100px">0906 487 4966, 0807 065 3533</p>
              </div>

              <div class="flex gap-3 mt-5 align-start">
                <p class="fas fa-envelope mt-1 text-xl"></p>
                <p class="font-light max-w-100px">
                  centremanagerabuja@brookstoneify.org <br />
                  admin@brookstoneify.org
                </p>
              </div>
            </div>

            <div>
              <h4 class="font-semibold text-lg mb-5">Subscribe to our newsletter</h4>
              <p class="font-light max-w-100px">
                Subscribe to our newsletter for updates on school events and activities.
              </p>
              <div class="mt-5">
                <input
                  type="email"
                  placeholder="Enter your email"
                  class="p-2 rounded-full w-full py-4 pl-5 bg-inherit border border-gray-300 focus:outline-none"
                />
              </div>

              <div class="mt-5">
                <button
                  type="submit"
                  class="text-gray-800 bg-yellow-500 px-8 py-4 rounded-full hover:bg-yellow-600 transition"
                >
                  Click to Subscribe
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div class="mt-10 border-t border-gray-300"></div>

      <div class="flex justify-between align-center mt-7 px-4 flex-wrap">
        <p class="text-gray-200 text-sm">© 2025 Brookstone copyright. All Rights Reserved.</p>
        <div class="lg:col-span-2">
          <div class="flex space-x-4 text-white text-xl">
            <a href="#" class="hover:text-yellow-400"><i class="fab fa-facebook-f"></i></a>
            <a href="#" class="hover:text-yellow-400"><i class="fab fa-twitter"></i></a>
            <a href="#" class="hover:text-yellow-400"><i class="fab fa-instagram"></i></a>
            <a href="#" class="hover:text-yellow-400"><i class="fab fa-linkedin-in"></i></a>
            <a href="#" class="hover:text-yellow-400"><i class="fab fa-youtube"></i></a>
          </div>
        </div>
      </div>
    </div>
  </footer>
</template>

<script setup></script>

<style scoped>
@import url('https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.5.0/css/all.min.css');
</style>
