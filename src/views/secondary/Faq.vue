<script setup>
import NavBar from '@/components/secondary/Navbar.vue'
import PageBannerImage from '@/assets/secondary/heroImage.svg'
import PageBanner from '@/components/secondary/PageBanner.vue'
import FooterSection from '@/components/secondary/FooterSection.vue'
</script>

<template>
  <main>
    <NavBar />

    <PageBanner title="Frequently Asked Questions" :background="PageBannerImage" />

    <section class="container mx-auto">
      <div class="my-[15vh]">
        <div
          v-for="(item, index) in faqs"
          :key="index"
          class="first:rounded-md-top last:rounded-md-bottom"
        >
          <!-- QUESTION ROW -->
          <button
            @click="toggle(index)"
            class="pl-5 border border-gray-100 bg-gray-50 w-full flex justify-start items-center text-left py-8 gap-5"
          >
            <i
              class="fa-solid fa-plus text-gray-800 transition-transform duration-300"
              :class="{ 'rotate-45': active === index }"
            >
            </i>

            <h3 class="text-lg font-semibold">
              {{ item.question }}
            </h3>
          </button>

          <!-- ANSWER -->
          <transition name="fade">
            <div
              v-if="active === index"
              class="text-md text-gray-600 leading-relaxed mt-5 mb-8 px-10 bg-white"
            >
              <p class="whitespace-pre-line">
                {{ item.answer }}
              </p>
            </div>
          </transition>
        </div>
      </div>

      <div class="flex justify-center items-center mb-[20vh]">
        <div>
          <h4 class="mt-[8vh] text-2xl font-[600]">Still have questions?</h4>
          <div class="mt-[5vh] w-full mx-auto">
            <router-link
              to="/secondary/contact-us"
              class="text-white bg-[#000847] px-8 py-4 rounded-full"
            >
              Contact Us
            </router-link>
          </div>
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
          question: 'What is the age minimum for your Secondary School?',
          answer: `
            Our secondary school welcomes students from the age of 10 years old.
            `,
        },
        {
          question: 'How do I register my child at Brookstone?',
          answer: `
            To intiate the registration process, kindly contact our admissions office via email or phone, and our team will walk you through the necessary steps.
            `,
        },
        {
          question: 'What curriculum does your school offer?',
          answer: `
          We offer a blend of the Nigerian and British curricula.`,
        },
        {
          question: 'Can my child/children take the admissions exam at any time?',
          answer: `
            Please note that admissions are scheduled at specific times. Kindly contact our admissions office.
            `,
        },
        {
          question: 'Is the admissions process different for Primary School?',
          answer: `
            Note, the process is still the same. kindly find full information about our application process on the admissions page of our Primary School.
            `,
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
/* Smooth fade animation for answers */
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.25s ease;
}
.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}
</style>
