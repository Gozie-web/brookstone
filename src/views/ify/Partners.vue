<script setup>
import { ref, onMounted, onBeforeUnmount } from 'vue'
import NavBar from '@/components/ify/NavBar.vue'
import partnerHero from '@/assets/ify/partnerHero.svg'
import PartnerCard from '@/assets/ify/partnerCard.svg'
import Partners from '@/assets/ify/partners.svg'
import FooterSection from '@/components/ify/FooterSection.vue'
import bartsLogo from '@/assets/ify/bartsLogo.svg'
import unsw from '@/assets/ify/unsw.svg'
import stGeorge from '@/assets/ify/stGeorge.svg'
import lancashire from '@/assets/ify/lancashire.svg'
import brunel from '@/assets/ify/brunel.svg'
import aston from '@/assets/ify/aston.svg'
import bristol from '@/assets/ify/bristol.svg'
import westernAustralia from '@/assets/ify/westernAustralia.svg'
</script>

<template>
  <main>
    <NavBar />
    <section class="relative h-[40vh] overflow-hidden text-white">
      <div class="absolute inset-0">
        <div
          class="absolute inset-0 bg-cover bg-center"
          :style="{ backgroundImage: `url(${partnerHero})` }"
        ></div>

        <div class="absolute inset-0 bg-[#0E0431]/50 z-20"></div>
      </div>

      <div
        class="relative z-30 flex flex-col justify-center items-center text-center h-full px-6 max-w-5xl mx-auto"
      >
        <h1 class="text-4xl md:text-5xl font-extrabold mb-6">Our Partners</h1>
      </div>
    </section>

    <section>
      <div class="container mx-auto my-[15vh] text-center">
        <p class="font-[200] text-lg/10">
          By studying with NCUK, you have many university progression options to choose from. If you
          successfully complete one of our qualifications, you are guaranteed access to one of the
          NCUK Universities. NCUK Students can progress to leading universities in the UK, USA,
          Canada, Australia, New Zealand and more! Our Universities have a reputation for quality
          and excellence all around the world. All of the NCUK universities listed below accept NCUK
          students onto their university courses.
        </p>
        <div class="mt-[10vh]">
          <img :src="PartnerCard" alt="partners" />
        </div>
      </div>
    </section>

    <section>
      <div class="flex w-full flex-wrap">
        <div class="w-[100%] md:flex-1 md:min-w-[300px]">
          <img class="w-full" :src="Partners" alt="partners banner" />
        </div>
        <div class="flex-1 px-[10%] bg-[#2b197a]">
          <h4 class="text-white text-2xl md:text-4xl mt-[10vh] md:mt-[5vh]">
            Degree Courses Available at our Partner Universities
          </h4>

          <div class="mt-[10vh] max-w-[400px]">
            <div
              v-for="(item, index) in faqs"
              :key="index"
              class="first:rounded-md-top last:rounded-md-bottom mt-1"
            >
              <!-- QUESTION ROW -->
              <button
                @click="toggle(index)"
                class="pl-5 bg-yellow-500 w-full flex justify-start items-center text-left py-2 gap-5"
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
                  class="text-md text-gray-200 leading-relaxed mb-5 px-10"
                >
                  <p class="whitespace-pre-line">
                    {{ item.answer }}
                  </p>
                </div>
              </transition>
            </div>
          </div>
        </div>
      </div>
    </section>

    <section class="bg-[#F9F9F9] py-[10vh]">
      <div class="w-[80%] mx-auto">
        <h4 class="text-center font-[600] text-3xl md:text-5xl max-w-5xl mx-auto text-gray-700">
          International Foundation Year: Medicine Pathway
        </h4>

        <p class="mt-10 text-md md:text-lg/[4vh] font-[400]">
          The International Foundation Year Medicine Pathway is designed for international students
          who, need to bridge the gap between their local secondary education and starting a
          university degree. This qualification becomes the stepping stone to succeeding in your
          journey towards studying a medical degree at a top university abroad. The Medicine Pathway
          will fully prepare you to study medicine at university, as well as providing you with
          options to progress to over 80 medical related degree courses including:
          <strong
            >Pharmacy Biochemistry, Medical Science, Nursing Sport Nutrition & Health, and
            more!</strong
          >
        </p>
        <p class="mt-5 text-lg/[4vh] font-[400]">
          At Brookstone International Foundation School, you will gain the necessary academic skills
          whilst improving your English language so that you are fully prepared for university
          study. To progress to medical-related degree courses, you will need to study the following
          modules on the International Foundation Year:
          <strong> Biology, Chemistry, Maths for Science, and English for Academic Purposes</strong>
        </p>
        <p class="mt-5 text-lg/[4vh] font-[400]">
          Some of our most popular degree courses include:
        </p>

        <div class="mt-[10vh] md:mt-[15vh] ml-10">
          <div class="flex items-start gap-5 md:gap-10 pb-5 border-b border-gray-300 flex-wrap">
            <div class="flex items-center gap-10">
              <div class="w-2 h-2 bg-[#2b197a] rounded-full"></div>
              <div>
                <img class="" :src="bartsLogo" alt="partners banner" />
              </div>
            </div>
            <div>
              <h4 class="font-[600]">
                Queen Mary University of London: Malta Campus - MBBS Medicine
              </h4>
              <p class="text-sm mt-2">
                Receive the same prestigious title as the one awarded at the London campus.
              </p>
            </div>
          </div>

          <div class="flex items-start gap-5 md:gap-10 flex-wrap py-5 border-b border-gray-300">
            <div class="flex items-center gap-10 min-w-[170px]">
              <div class="w-2 h-2 bg-[#2b197a] rounded-full"></div>
              <div>
                <img class="" :src="unsw" alt="partners banner" />
              </div>
            </div>
            <div>
              <h4 class="font-[600]">
                University of New South Wales - Bachelor of Medical Studies, Doctor of Medicine
              </h4>
              <p class="text-sm mt-2">
                The MD includes the independent learning project (ILP year 4), followed by a
                clinical transition course. In all phases of the degree, you will be required to
                travel to various clinical environments associated with UNSW.
              </p>
            </div>
          </div>

          <div class="flex items-start gap-5 md:gap-10 flex-wrap py-5 border-b border-gray-300">
            <div class="flex items-center gap-10 min-w-[170px]">
              <div class="w-2 h-2 bg-[#2b197a] rounded-full"></div>
              <div>
                <img class="" :src="stGeorge" alt="partners banner" />
              </div>
            </div>
            <div>
              <h4 class="font-[600]">
                ST George's University, Grenada & Northumbria University - Doctor of Medicine
              </h4>
              <p class="text-sm mt-2">
                Can be fully studied in Grenada or the duration of the degree course can be split
                between the campus in the UK, USA, Canada and the campus in Grenada. Students can
                choose to begin their first 2 years of study at Northumbria University in the UK.
              </p>
            </div>
          </div>

          <div class="flex items-start gap-5 md:gap-10 flex-wrap py-5 border-b border-gray-300">
            <div class="flex items-center gap-10 min-w-[170px]">
              <div class="w-2 h-2 bg-[#2b197a] rounded-full"></div>
              <div>
                <img class="" :src="lancashire" alt="partners banner" />
              </div>
            </div>
            <div>
              <h4 class="font-[600]">University of Central Lancanshire (UCLan) - MBBS Medicine</h4>
              <p class="text-sm mt-2">
                Patient contact and clinical placements in the UK's National Heath Service from Year
                1.
              </p>
            </div>
          </div>

          <div class="flex items-start gap-5 md:gap-10 flex-wrap py-5 border-b border-gray-300">
            <div class="flex items-center gap-10 min-w-[170px]">
              <div class="w-2 h-2 bg-[#2b197a] rounded-full"></div>
              <div>
                <img class="" :src="brunel" alt="partners banner" />
              </div>
            </div>
            <div>
              <h4 class="font-[600]">Brunel University London - MBBS Medicine</h4>
              <p class="text-sm mt-2">
                Achieving an MBBS degree from Brunel Medical School will provide students with a
                primary medical qualification (PMQ). Holding a PMQ allows students to apply for
                provisional registration with the General Medicine Council (GMC) and license to
                practice in approved Foundation Year 1 posts.
              </p>
            </div>
          </div>

          <div class="flex items-start gap-5 md:gap-10 flex-wrap py-5 border-b border-gray-300">
            <div class="flex items-center gap-10 min-w-[170px]">
              <div class="w-2 h-2 bg-[#2b197a] rounded-full"></div>
              <div>
                <img class="" :src="aston" alt="partners banner" />
              </div>
            </div>
            <div>
              <h4 class="font-[600]">Aston University - Medical MBChB</h4>
              <p class="text-sm mt-2">Integrated placements</p>
            </div>
          </div>

          <div class="flex items-start gap-5 md:gap-10 flex-wrap py-5 border-b border-gray-300">
            <div class="flex items-center gap-10 min-w-[170px]">
              <div class="w-2 h-2 bg-[#2b197a] rounded-full"></div>
              <div>
                <img class="" :src="bristol" alt="partners banner" />
              </div>
            </div>
            <div>
              <h4 class="font-[600]">University of Bristol - Dentistry</h4>
              <p class="text-sm mt-2">
                Opportunity to undertake community work in the UK or abroad
              </p>
            </div>
          </div>

          <div class="flex items-start gap-5 md:gap-10 flex-wrap py-5">
            <div class="flex items-center gap-10 min-w-[170px]">
              <div class="w-2 h-2 bg-[#2b197a] rounded-full"></div>
              <div>
                <img class="" :src="westernAustralia" alt="partners banner" />
              </div>
            </div>
            <div>
              <h4 class="font-[600]">University of Western Australia - Doctor of Medicine</h4>
              <p class="text-sm">Opportunity to experience an overseas elective in Year 4</p>
              <h4 class="font-[600] mt-2">Doctor of Dental Medicine</h4>
              <p class="text-sm">
                Successful graduates will be able to register with the Dental Board of Australia as
                a dentist and enter the profession immediately
              </p>
            </div>
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
          question: 'ENGINEERING',
          answer: `
            Civil and Structural Engineering
            Electrical and Electronic Engineering
            Electromechanical Technology
            Chemical Engineering
            Software Engineering
            Industrial Engineering
            Electrical and Electronic Engineering
            `,
        },
        {
          question: 'HUMANITIES',
          answer: `
            Humanities
            `,
        },
        {
          question: 'SCIENCE',
          answer: `
          Sciences`,
        },
        {
          question: 'BUSINESS',
          answer: `
            Business Management
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
.fade-enter-active {
  transition: opacity 0.25s ease-in-out;
}

.fade-leave-active {
  transition: opacity 0.25s ease-in-out;
}
.fade-enter-from,
.fade-leave-to {
  opacity: 0;
  transition: opacity 0.25s ease-in-out;
}
</style>
