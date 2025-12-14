<script setup>
import { ref, onMounted, onBeforeUnmount } from 'vue'
import NavBar from '@/components/ify/NavBar.vue'
import faqHero from '@/assets/ify/faqHero.svg'
import FooterSection from '@/components/ify/FooterSection.vue'
</script>

<template>
  <main>
    <NavBar />

    <section class="relative h-[40vh] overflow-hidden text-white">
      <div class="absolute inset-0">
        <div
          class="absolute inset-0 bg-cover bg-center"
          :style="{ backgroundImage: `url(${faqHero})` }"
        ></div>

        <div class="absolute inset-0 bg-[#0E0431]/50 z-20"></div>
      </div>

      <div
        class="relative z-30 flex flex-col justify-center items-center text-center h-full px-6 max-w-5xl mx-auto"
      >
        <h1 class="text-4xl md:text-5xl font-extrabold mb-6">Frequently Asked Questions</h1>
      </div>
    </section>

    <section class="container mx-auto">
      <p class="mt-[15vh] text-xl font-[200]">
        The International Foundation Year (IFY) program prepares the first year of a UK
        undergraduate degree program. Sccessful students are guaranteed direct entry into three
        years undergraduate or four years master's degree programmes to universities that are
        members of the consortium, and other leading partner universities.
      </p>

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
              to="/ify/contact-us"
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
          question: 'What is NCUK IFY?',
          answer: `
            Designed by our university partners exclusively for international students the NCUK IFY combines academic modules, study skills, and English language training to provide a pathway to undergraduate degree courses at leading universities.

            Successful completion of the NCUK IFY guarantees you a place at an NCUK partner University.

            Universities worldwide and UK National Academic Recognition Information Centre (NARIC) formally recognises the NCUK IFY as comparable to GCE A Level, Australian High School (SSCE), American High School (AP) qualifications and Hong Kong High School (HKDSE) qualifications.
            `,
        },
        {
          question: 'What are NCUK IFY Entry Requirements?',
          answer: `
            Students MUST be 16 years and above at the time of admission into the Foundation Programme.

            A minimum of C grade in relevant subjects including English Language and Mathematics in the West African Secondary School Certificate Examination (WASSCE) and National Examinations Council (NECO).

            OR
            
            A minimum of B grades in relevant subjects including English Language and Mathematics in the International General Certificate of Secondary Education (IGCSE).
            `,
        },
        {
          question: 'What are the Entry Requirements for NCUK IFY Medicine?',
          answer: `
          International Foundation Year Subjects and grades: Biology and Chemistry + either Maths for Science or Physics. Minimum grade: AAB (university dependent). Some degrees require students to study Biology, Chemistry, and Physics.

          Applying to medical degrees often requires additional tests, interviews, or work experience. Below is an overview of some of the courses available to you at the NCUK Universities and their specific requirements, including the dates by which applications will need to be submitted.`,
        },
        {
          question: 'What is the University Clinical Aptitude Test (UCAT)?',
          answer: `
            The University Clinical Aptitude Test (UCAT) is an admissions test used by a number of UK Universities for their medical and dental degree programmes. You are usually required to have sat the UCAT prior to applying to University. Registration for the UCAT opens in June and closes in September each year. The UCAT can only be sat between July and September each year and is subject to availability.
            `,
        },
        {
          question: 'BENEFITS OF INTERNATIONAL FOUNDATION YEAR (IFY)',
          answer: `
            - The Programme at Brookstone School is cost-effective compared to studying abroad for either one (1) year foundation or two (2) year A level programme.

            - Foundation Programme at Brookstone guarantees admission for a three (3) year first-degree programme in the NCUK Partner Universities.

            - Students are allowed a greater degree of freedom in uniform, social activities, access to Laptops/Internet, free time, feeding, pocket money, and much more.

            - All assessments and examinations set by NCUK are administered and marked by Brookstone and moderated by NCUK.

            - Parents can monitor the academic progress of students in the foundation programme by direct communication with the school in addition to half and end-of-term reports.

            - The Programme gives young students an extra year to prepare for the responsibilities of studying at a University.
            `,
        },
        {
          question: 'What is NCUK IYone?',
          answer: `
            The International Year One is ideal for students who want to study locally for an extra year and gain university credits to a full degree, experience an international learning environment, build a global network of contacts, benefit from smaller class sizes, and personalised support before entering university.

            Like the first year of a university degree, you will study a range of topics related to your chosen subject area.

            Two streams are currently available – Business Management and Law – at Brookstone International Foundation School.
            `,
        },
        {
          question: 'What are the Entry Requirements for IYone?',
          answer: `
            –  A minimum of 2 B grades at A level

            –  A minimum of 2 B grades from the NCUK IFY

            –  A minimum GPA of 3.0 first-year pass from a US degree
            
            –  A minimum of 30 points or more in the International Baccalaureate
            `,
        },
        {
          question: 'IYOne Business Management & Law',
          answer: `
            Upon successful completion of the IYOne in Business Management, students progress to the second year of over 80 different degree courses at the NCUK Partner Universities.

            Successful completion of the IYOne Law guarantees students progress to the second year of an LL.B (Hons) Law degree at the NCUK Partner Universities.

            The IYOne programme is a quick way for students to obtain degrees within only two years in the UK.
            `,
        },
        {
          question: 'BENEFITS OF INTERNATIONAL YEAR ONE (IYONE)',
          answer: `
            - Students progress to the second year of their chosen NCUK partner universities to spend only two years to get their first degree.

            - Students are fully prepared for the academic expectations of a typical university study in the UK.

            - Students enjoy the benefits of studying locally while gaining University credits to transfer to a full degree course at the NCUK partner universities.

            - The IYOne programme is a cost-effective qualification.

            - Students are fully prepared for the academic expectations of a typical university study in the UK.

            - Students enjoy the benefits of studying locally while gaining University credits to transfer to a full degree course at the NCUK partner universities.
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
