<script setup>
import { ref } from 'vue'
import NavBar from '@/components/primary/Navbar.vue'
import FooterSection from '@/components/primary/FooterSection.vue'
import contactUsHero from '@/assets/primary/contactUsHero.svg'
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

    <section class="bg-[#FBFBFB] py-16 my-10">
      <div class="max-w-[90%] md:max-w-[80%] mx-auto px-6">
        <div class="bg-white shadow-sm rounded-xl p-10 flex flex-col md:flex-row gap-14">
          <div class="flex-1 mt-[7vh]">
            <form class="space-y-7">
              <div>
                <label class="block text-sm font-medium mb-1">Full name</label>
                <input
                  type="text"
                  placeholder="Enter text"
                  class="w-full border border-gray-300 rounded-md px-4 py-3 outline-none focus:border-gray-400"
                />
              </div>

              <div>
                <label class="block text-sm font-medium mb-1">Email</label>
                <input
                  type="email"
                  placeholder="Enter text"
                  class="w-full border border-gray-300 rounded-md px-4 py-3 outline-none focus:border-gray-400"
                />
              </div>

              <div>
                <label class="block text-sm font-medium mb-1">Phone</label>
                <input
                  type="text"
                  placeholder="Enter text"
                  class="w-full border border-gray-300 rounded-md px-4 py-3 outline-none focus:border-gray-400"
                />
              </div>

              <div>
                <label class="block text-sm font-medium mb-1">Address</label>
                <input
                  type="text"
                  placeholder="Enter text"
                  class="w-full border border-gray-300 rounded-md px-4 py-3 outline-none focus:border-gray-400"
                />
              </div>

              <div>
                <label class="block text-sm font-medium mb-1">Message</label>
                <textarea
                  placeholder="Enter Text"
                  rows="5"
                  class="w-full border border-gray-300 rounded-md px-4 py-3 outline-none resize-none focus:border-gray-400"
                ></textarea>
              </div>

              <div class="flex items-start gap-3 mt-4">
                <input type="checkbox" class="w-4 h-4 mt-1 border-gray-400 rounded" />
                <p class="text-sm text-gray-700 leading-relaxed">
                  I consent to emails and calls regarding my inquiry and agree to the Privacy
                  Policy.
                </p>
              </div>

              <button
                class="bg-[#E4A400] text-[#060F4A] px-6 py-2 rounded-full text-sm font-medium mt-3 hover:bg-[#D09500]"
              >
                Apply Now
              </button>
            </form>
          </div>

          <div class="flex-1">
            <h2 class="text-2xl font-semibold leading-tight mb-8">
              We are always ready to help you and answer your questions
            </h2>

            <div class="space-y-20">
              <div class="flex items-start gap-4">
                <i class="fa-solid fa-location-dot text-[#2B197A] text-lg"></i>
                <div class="relative pl-4">
                  <div
                    class="absolute left-[-22px] top-[3vh] transform -translate-x-1/2 w-[1px] h-[100%] bg-[#2B197A]/30"
                  ></div>
                  <p class="font-medium mb-1">Address</p>
                  <p class="text-sm text-gray-600 leading-relaxed">
                    1 Brookstone Close, GRA Phase III, Port<br />
                    Harcourt, Rivers State, Nigeria
                  </p>
                </div>
              </div>

              <div class="flex items-start gap-4">
                <i class="fa-solid fa-phone text-[#2B197A] text-lg"></i>
                <div class="relative pl-4">
                  <div
                    class="absolute left-[-25px] top-[3vh] transform -translate-x-1/2 w-[1px] h-[100%] bg-[#2B197A]/30"
                  ></div>
                  <p class="font-medium mb-1">Phone</p>
                  <p class="text-sm text-gray-600 leading-relaxed">
                    0703 402 2088, 0813 665 7489,<br />
                    0813 687 8027, 0803 715 9797
                  </p>
                </div>
              </div>

              <div class="flex items-start gap-4">
                <i class="fa-solid fa-paper-plane text-[#2B197A] text-lg"></i>
                <div class="relative pl-4">
                  <div
                    class="absolute left-[-25px] top-[3vh] transform -translate-x-1/2 w-[1px] h-[100%] bg-[#2B197A]/30"
                  ></div>
                  <p class="font-medium mb-1">Email</p>
                  <p class="text-sm text-gray-600 leading-relaxed">
                    nurseryprimaryadmissions@brookstoneeng.org<br />
                    headnurseryprimary@brookstoneeng.org
                  </p>
                </div>
              </div>

              <div class="flex items-start gap-4">
                <i class="fa-solid fa-clock text-[#2B197A] text-lg"></i>
                <div class="relative pl-4">
                  <div
                    class="absolute left-[-25px] top-[3vh] transform -translate-x-1/2 w-[1px] h-[100%] bg-[#2B197A]/30"
                  ></div>
                  <p class="font-medium mb-1">Office hours</p>
                  <p class="text-sm text-gray-600 leading-relaxed">
                    Monday – Friday: 7:30 AM - 4:00 PM
                  </p>
                </div>
              </div>
            </div>

            <div class="mt-10">
              <p class="font-medium mb-3">Follow us on</p>
              <div class="flex items-center gap-6 text-2xl text-[#2B197A]">
                <i class="fa-brands fa-facebook"></i>
                <i class="fa-brands fa-x-twitter"></i>
                <i class="fa-brands fa-instagram"></i>
                <i class="fa-brands fa-linkedin"></i>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <section class="bg-[#2B197A] py-20">
      <div class="max-w-[90%] md:max-w-[80%] mx-auto px-6 flex flex-col md:flex-row gap-12">
        <div class="md:w-1/3">
          <h2 class="text-white text-4xl font-semibold leading-tight">
            Frequently<br />
            Asked<br />
            Questions
          </h2>
        </div>

        <div class="md:w-2/3">
          <div class="bg-white rounded-2xl p-8 shadow-sm">
            <div v-for="(item, index) in faqs" :key="index" class="border-b last:border-b-0 py-6">
              <button
                @click="toggle(index)"
                class="w-full flex justify-between items-center text-left"
              >
                <h3 class="text-lg font-semibold">
                  {{ item.question }}
                </h3>

                <i
                  class="fa-solid fa-chevron-up text-gray-800 transition-transform duration-300"
                  :class="{ 'rotate-180': active !== index }"
                ></i>
              </button>

              <transition name="fade">
                <p v-if="active === index" class="text-sm text-gray-600 leading-relaxed mt-3">
                  {{ item.answer }}
                </p>
              </transition>
            </div>
          </div>
        </div>
      </div>
    </section>

    <section>
      <div class="max-w-[90%] md:max-w-[80%] mx-auto py-[20vh]">
        <div class="relative h-[50vh] md:h-[70vh]">
          <iframe
            class="absolute inset-0 w-full h-full rounded-2xl"
            loading="lazy"
            allowfullscreen
            referrerpolicy="no-referrer-when-downgrade"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d78705.21177857417!2d3.314842!3d6.524379!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x103bf7a6831bbf97%3A0x29a284abfcbbbdc0!2sLagos%2C%20Nigeria!5e0!3m2!1sen!2sus!4v1697040000000"
          ></iframe>
        </div>
      </div>
    </section>

    <FooterSection />
  </main>
</template>

<script>
export default {
  data() {
    return {
      active: 0,
      faqs: [
        {
          question: 'What’s the age minimum for your Nursery and Primary school?',
          answer:
            'Our nursery and primary school are open to pupils between the ages of 15 months old and 10 years old.',
        },
        {
          question: 'How do I register my child at Brookstone?',
          answer:
            'You can start the registration process by contacting our admissions office via email or phone. We will guide you through the steps.',
        },
        {
          question: 'What curriculum does your school offer?',
          answer:
            'We offer a blend of the Nigerian curriculum and the Cambridge International Primary Programme (CIPP).',
        },
        {
          question: 'Can my child/children take the admissions exam at any time?',
          answer: 'Yes, they can take the exam at any time.',
        },
        {
          question: 'Is the admission process different for Secondary school?',
          answer:
            'No, the process is still the same. Kindly find full information about our application process on the admissions page of our Secondary School.',
        },
      ],
    }
  },
  methods: {
    toggle(index) {
      this.active = this.active === index ? null : index
    },
  },
}
</script>

<style>
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.25s ease;
}
.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}
</style>
