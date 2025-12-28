<script setup>
import Navbar from '@/components/secondary/Navbar.vue'
import FooterSection from '@/components/secondary/FooterSection.vue'
import PageBanner from '@/components/secondary/PageBanner.vue'
import PageBannerImage from '@/assets/page-banner-image.svg'
</script>

<template>
  <div>
    <Navbar />

    <PageBanner title="Contact Brookstone" :background="PageBannerImage" />

    <section class="bg-[#f7f8fc] py-20">
      <div class="max-w-[80%] mx-auto px-6 grid md:grid-cols-2 gap-12">
        <div>
          <h2 class="text-3xl font-bold mb-4 text-gray-900">Contact Our School</h2>
          <p class="text-gray-600 mb-6">
            Feel free to send us a message, including your details.<br />
            We will be sure to respond to your message within 48 Hours.
          </p>

          <div class="space-y-6">
            <div class="flex items-center space-x-3">
              <span class="text-yellow-500 text-xl">
                <i class="fas fa-phone-alt"></i>
              </span>
              <p class="text-gray-800">+234-706-471-3373</p>
            </div>

            <div class="flex items-center space-x-3">
              <span class="text-yellow-500 text-xl">
                <i class="fas fa-envelope"></i>
              </span>
              <p class="text-gray-800">secondaryadmissions@brookstoneng.org</p>
            </div>

            <div class="flex items-start space-x-3">
              <span class="text-yellow-500 text-xl">
                <i class="fas fa-map-marker-alt"></i>
              </span>
              <p class="text-gray-800">Brookstone School (Secondary), Airport Road, Igwuruta</p>
            </div>
          </div>
        </div>

        <form class="space-y-4">
          <div class="grid grid-cols-2 gap-4">
            <input
              type="text"
              placeholder="First Name"
              class="w-full p-3 border border-gray-200 rounded-md focus:outline-none focus:ring-2 focus:ring-[#2b197a]"
            />
            <input
              type="text"
              placeholder="Last Name"
              class="w-full p-3 border border-gray-200 rounded-md focus:outline-none focus:ring-2 focus:ring-[#2b197a]"
            />
          </div>

          <div class="grid grid-cols-2 gap-4">
            <input
              type="text"
              placeholder="Phone Number"
              class="w-full p-3 border border-gray-200 rounded-md focus:outline-none focus:ring-2 focus:ring-[#2b197a]"
            />
            <input
              type="email"
              placeholder="Email Address"
              class="w-full p-3 border border-gray-200 rounded-md focus:outline-none focus:ring-2 focus:ring-[#2b197a]"
            />
          </div>

          <input
            type="text"
            placeholder="Subject"
            class="w-full p-3 border border-gray-200 rounded-md focus:outline-none focus:ring-2 focus:ring-[#2b197a]"
          />

          <textarea
            placeholder="Message"
            rows="5"
            class="w-full p-3 border border-gray-200 rounded-md focus:outline-none focus:ring-2 focus:ring-[#2b197a]"
          ></textarea>

          <button
            type="submit"
            class="bg-[#0c0d44] text-white px-8 py-3 rounded-md hover:bg-[#2b197a] transition float-right"
          >
            SUBMIT
          </button>
        </form>
      </div>
    </section>

    <section class="relative w-full h-[500px] border-t border-yellow-400">
      <iframe
        class="absolute inset-0 w-full h-full"
        style="border: 0"
        loading="lazy"
        allowfullscreen
        referrerpolicy="no-referrer-when-downgrade"
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d78705.21177857417!2d3.314842!3d6.524379!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x103bf7a6831bbf97%3A0x29a284abfcbbbdc0!2sLagos%2C%20Nigeria!5e0!3m2!1sen!2sus!4v1697040000000"
      ></iframe>
    </section>

    <FooterSection />
  </div>
</template>
