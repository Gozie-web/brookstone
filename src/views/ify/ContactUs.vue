<script setup>
import { ref, onMounted, onBeforeUnmount } from 'vue'
import NavBar from '@/components/ify/NavBar.vue'
import contactUsHero from '@/assets/primary/contactUsHero.svg'
import FooterSection from '@/components/ify/FooterSection.vue'
import linkedInIcon from '@/assets/icons/linkedIn.svg'
import facebook from '@/assets/icons/facebook.svg'
import twitter from '@/assets/icons/twitter.svg'
import instagram from '@/assets/icons/instagram.svg'
</script>

<template>
  <main>
    <NavBar />

    <section class="relative h-[40vh] overflow-hidden text-white">
      <div class="absolute inset-0">
        <div
          class="absolute inset-0 bg-cover bg-center"
          :style="{ backgroundImage: `url(${contactUsHero})` }"
        ></div>

        <div class="absolute inset-0 bg-[#0E0431]/50 z-20"></div>
      </div>

      <div
        class="relative z-30 flex flex-col justify-center items-center text-center h-full px-6 max-w-5xl mx-auto"
      >
        <h1 class="text-4xl md:text-5xl font-extrabold mb-6">Contact Us</h1>
      </div>
    </section>

    <section class="my-[10vh]">
      <div class="container mx-auto flex gap-20 items-center flex-wrap">
        <div class="min-w-[300px] flex-1 px-10 py-[10vh] bg-white shadow-lg rounded-xl">
          <form class="space-y-10">
            <!-- Full Name -->
            <div>
              <label class="block text-sm font-medium mb-1">Full name</label>
              <input
                type="text"
                placeholder="Enter text"
                class="w-full border border-gray-300 rounded-md px-4 py-3 outline-none focus:border-gray-400"
              />
            </div>

            <!-- Email -->
            <div>
              <label class="block text-sm font-medium mb-1">Email</label>
              <input
                type="email"
                placeholder="Enter text"
                class="w-full border border-gray-300 rounded-md px-4 py-3 outline-none focus:border-gray-400"
              />
            </div>

            <!-- Message -->
            <div>
              <label class="block text-sm font-medium mb-1">Message</label>
              <textarea
                placeholder="Enter Text"
                rows="5"
                class="w-full border border-gray-300 rounded-md px-4 py-3 outline-none resize-none focus:border-gray-400"
              ></textarea>
            </div>

            <!-- Checkbox -->
            <div class="flex items-start gap-3 mt-4">
              <input type="checkbox" class="w-4 h-4 mt-1 border-gray-400 rounded" />
              <p class="text-sm text-gray-700 leading-relaxed">
                I consent to emails and calls regarding my inquiry and agree to the Privacy Policy.
              </p>
            </div>

            <!-- Button -->
            <button
              class="bg-[#E4A400] text-[#060F4A] px-6 py-2 rounded-full text-sm font-medium mt-3 hover:bg-[#D09500]"
            >
              Apply Now
            </button>
          </form>
        </div>

        <div class="max-w-[90%] mx-auto md:flex-1">
          <h4 class="text-xl font-[600]">
            We are always ready to help you and answer your questions
          </h4>

          <div>
            <h4 class="mt-[8vh] text-lg font-[600]">Abuja Center</h4>

            <div class="flex gap-3 mt-5 align-start">
              <p class="fas fa-phone mt-1 text-xl"></p>
              <p class="font-light max-w-100px">
                +234 906 487 4966 <br />
                +234 807 065 3533
              </p>
            </div>

            <div class="flex gap-3 mt-5 align-start">
              <p class="fas fa-envelope mt-1 text-xl"></p>
              <p class="font-light max-w-100px">
                centremanagerabuja@brookstoneify.org <br />
                admin@brookstoneify.org
              </p>
            </div>

            <div class="flex gap-3 mt-5 align-start">
              <p class="fas fa-location-dot mt-1 text-xl"></p>
              <p class="font-light max-w-100px">
                No. 20, Brookstone Street, behind The Capital Hub Shopping Mall, by Providence
                Court, Off Ahmadu Bello Way, Mabushi District, Abuja.
              </p>
            </div>
          </div>

          <div>
            <h4 class="mt-[8vh] text-lg font-[600]">Port Harcourt Center</h4>

            <div class="flex gap-3 mt-5 align-start">
              <p class="fas fa-phone mt-1 text-xl"></p>
              <p class="font-light max-w-100px">
                +234 705 755 5058 <br />
                +235 705 755 5058
              </p>
            </div>

            <div class="flex gap-3 mt-5 align-start">
              <p class="fas fa-envelope mt-1 text-xl"></p>
              <p class="font-light max-w-100px">
                centremanagerphc@brookstoneify.org <br />
                foundation@brookstoneify.org
              </p>
            </div>

            <div class="flex mt-5 gap-3 align-start">
              <p class="fas fa-location-dot mt-1 text-xl"></p>
              <p class="font-light max-w-100px">
                International Airport Road, Igwuruta Port Harcourt, Rivers State.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>

    <section>
      <div class="mt-[10vh] my-[20vh]">
        <h6 class="text-lg font-[600] text-center">Follow us on</h6>
        <div class="mt-[3vh] flex justify-center gap-6">
          <a href="#"><img :src="facebook" alt="facebook" /></a>
          <a href="#"><img :src="twitter" alt="twitter" /></a>
          <a href="#"><img :src="instagram" alt="instagram" /></a>
          <a href="#"><img :src="linkedInIcon" alt="linkedIn" /></a>
        </div>
      </div>
    </section>

    <section class="relative w-full h-[600px]">
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
  </main>
</template>
