<script setup>
import NavBar from '@/components/ify/NavBar.vue'
import aboutUsHero from '@/assets/ify/aboutUsHero.svg'
import aboutUsImage1 from '@/assets/ify/aboutUsImage1.svg'
import aboutUsImage2 from '@/assets/ify/aboutUsImage2.svg'
import ifyPartners from '@/assets/ify/ifyPartners.svg'
import ifyMedPartners from '@/assets/ify/ifyMedPartners.svg'
import ifyLogo from '@/assets/ify/ifyLogo.svg'
import ifyLogo2 from '@/assets/ify/ifyLogo2.svg'
import FooterSection from '@/components/ify/FooterSection.vue'
import moreInfoBackground from '@/assets/secondary/moreInfoBackground.svg'
import yellowPolygonBackground from '@/assets/ify/yellowPolygonBackground.svg'
import Partners from '@/assets/ify/partners.svg'
import bartsLogo from '@/assets/ify/bartsLogo.svg'
import unsw from '@/assets/ify/unsw.svg'
import stGeorge from '@/assets/ify/stGeorge.svg'
import lancashire from '@/assets/ify/lancashire.svg'
import brunel from '@/assets/ify/brunel.svg'
import aston from '@/assets/ify/aston.svg'
import bristol from '@/assets/ify/bristol.svg'
import westernAustralia from '@/assets/ify/westernAustralia.svg'
import pitchBackgroundImage from '@/assets/ify/pitchBackgroundImage.svg'
import degreeProgrammes1 from '@/assets/ify/degreeProgrammes1.svg'
import degreeProgrammes2 from '@/assets/ify/degreeProgrammes2.svg'
import NCUKLogo from '@/assets/ify/NCUKLogo.svg'
</script>

<template>
  <main>
    <NavBar />

    <section class="relative h-[40vh] overflow-hidden text-white">
      <div class="absolute inset-0">
        <div
          class="absolute inset-0 bg-cover bg-center"
          :style="{ backgroundImage: `url(${aboutUsHero})` }"
        ></div>

        <div class="absolute inset-0 bg-[#0E0431]/50 z-20"></div>
      </div>

      <div
        class="relative z-30 flex flex-col justify-center items-center text-center h-full px-6 max-w-5xl mx-auto"
      >
        <h1 class="text-4xl md:text-5xl font-extrabold mb-6">About Us</h1>
      </div>
    </section>

    <section>
      <div class="max-w-[80%] mx-auto my-[10vh] flex gap-3 flex-wrap">
        <div class="w-full md:flex-1">
          <img :src="aboutUsImage1" alt="Graduate Students" class="" />
          <img :src="aboutUsImage2" alt="Graduate Students" class="mt-[10vh]" />
        </div>
        <div class="flex-1">
          <h2 class="text-xl text-yellow-400 font-[500] mb-6">
            Nurturing Excellence, Inspiring Growth
          </h2>
          <p class="text-base leading-relaxed font-[300]">
            Brookstone International Foundation School is a co-educational, independent school that
            provides academically rigorous, stimulating, varied and challenging International
            Foundation Year (IFY) and International Year One (IYONE) programmes.
          </p>
          <p class="text-base leading-relaxed font-[300] mt-3">
            In 2014, Brookstone school partnered with the Northern Consortium of UK Universities
            (NCUK), a foremost university pathway with over 60 leading universities in the UK,
            Australia, New Zealand, Canada and the United States of America.
          </p>
          <p class="text-base leading-relaxed font-[300] mt-3">
            The International Foundation programme (IFY) guarantees admission into any NCUK partner
            university. For Universities in the United Kingdom, on completion of the one year
            programme at Brookstone, students progress directly into a three-year undergraduate
            degree or a four-year integrated masters' degree.
          </p>
          <p class="text-base leading-relaxed font-[300] mt-3">
            For universities outside the United Kingdom, students progress to a four years
            undergraduate degree programme.
          </p>
          <p class="text-base leading-relaxed font-[300] mt-3">
            In 2017, the partnership was expanded to include the International Year One programme
            (IYONE), which allows students to complete the equivalent of the first year of a UK
            university degree programme at Brookstone before progressing on to the second year of a
            wide range of courses at any NCUK universities in the United Kingdom to spend two years
            for a degree.
          </p>
          <p class="text-base leading-relaxed font-[300] mt-3">
            Brookstone commenced this programme with two streams: Business management and Law,
            giving students access to degree pathways and guaranteeing progression to the second
            year of undergraduate degree, including LLB (Hon) law, Business law, Law with
            criminology, law with finance, business management, economics, accounting, human
            resource management and many more.
          </p>
          <p class="text-base leading-relaxed font-[300] mt-3">
            Brookstone has two centres in Nigeria: Port Harcourt and Abuja. Our premises offer a
            serene and conducive environment for learning and for co-curricular and extra curricular
            activities.
          </p>
          <p class="text-base leading-relaxed font-[300] mt-3">
            Our Port Harcourt Centre is located at Igwuruta , about 15 minutes drive from the Port
            Harcourt International Airport.
          </p>
          <p class="text-base leading-relaxed font-[300] mt-3">
            The abuja centre which opened in february 2017 is located at No 20, Brookstone street,
            Off Providence street, Off Ahmadu Bello way, Mabushi District, Abuja.
          </p>
        </div>
      </div>
    </section>

    <section class="">
      <div
        class="relative inset-0 z-[-1] w-full h-[50vh]"
        :style="{
          backgroundImage: `url(${moreInfoBackground})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }"
      >
        <div class="py-[10vh]">
          <h2 class="text-3xl md:text-4xl font-bold text-center mt-[5vh]">About NCUK</h2>
          <p class="text-center max-w-3xl mx-auto font-[300] mt-10">
            Brookstone School is an NCUK Study Centre, licensed to deliver NCUK's pathway
            programmes. NCUK is a leading global pathway provider established by universities to
            help international students from over 120 nationalities access world class education.
          </p>
        </div>
      </div>
    </section>

    <section class="bg-[#28156E] py-[10vh]">
      <div class="max-w-[80%] mx-auto">
        <div class="flex flex-wrap gap-10">
          <div class="w-full md:flex-1">
            <img :src="ifyLogo" class="w-full object-cover flex-shrink-0" alt="" />
          </div>
          <div class="font-[300] md:flex-1 px-10 md:pr-20 text-white">
            <p class="text-lg font-[600]">Thinking about your next step after WASSCE & IGCSE?</p>
            <p class="text-base leading-relaxed mt-5">
              Progress to 60+ leading universities in the UK, Australia, New Zealand, the USA,
              Canada and more.
            </p>
          </div>
        </div>

        <div class="w-full mt-[10vh]">
          <img :src="ifyPartners" class="w-full object-cover flex-shrink-0" alt="" />
        </div>
      </div>

      <div class="flex w-full mt-[10vh] flex-wrap">
        <div class="w-[100%] md:flex-1 md:min-w-[300px]">
          <img class="w-full" :src="Partners" alt="partners banner" />
        </div>
        <div class="flex-1 px-[10%]">
          <h4 class="text-white text-2xl md:text-4xl mt-[10vh] md:mt-[5vh]">
            Degree Courses Available at our Partner Universities
          </h4>

          <div class="mt-7 md:mt-[10vh] max-w-[400px]">
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

    <section class="">
      <div
        class="w-full h-full"
        :style="{
          backgroundImage: `url(${yellowPolygonBackground})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }"
      >
        <div class="py-[10vh]">
          <h2 class="text-2xl md:text-3xl font-bold text-center max-w-xl mx-auto">
            Do you want to become a Doctor, Surgeon, or Dentist?
          </h2>
          <p class="max-w-[80%] mx-auto font-[300] mt-5 md:mt-10">
            Brookstone School is an NCUK Study Centre, licensed to deliver NCUK's pathway
            programmes. NCUK is a leading global pathway provider established by universities to
            help international students from over 120 nationalities access world class education.
          </p>

          <div class="max-w-[80%] mx-auto mt-[5vh] md:mt-[10vh]">
            <img :src="ifyMedPartners" class="w-full object-cover flex-shrink-0" alt="" />
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

    <section class="bg-[#F6F8FF]">
      <h2 class="pt-[10vh] text-center font-[500] text-3xl">
        Benefits of International Foundation Year (IFY)
      </h2>
      <div class="flex flex-wrap justify-center gap-10 max-w-[80%] mx-auto py-[10vh]">
        <div class="w-[350px] border border-yellow-500 rounded-lg p-5">
          <div
            class="h-8 w-8 rounded-full bg-yellow-500 text-md font-[600] flex items-center justify-center"
          >
            1
          </div>
          <p class="text-md font-[200] mt-7">
            All assessments and examination set by NCUK are administered and marked by Brookstone
            and moderated by NCUK.
          </p>
        </div>
        <div class="w-[350px] border border-yellow-500 rounded-lg p-5">
          <div
            class="h-8 w-8 rounded-full bg-yellow-500 text-md font-[600] flex items-center justify-center"
          >
            2
          </div>
          <p class="text-md font-[200] mt-7">
            Parents can monitor academic progress of students in the foundation programme by direct
            communication with the school in addition to half and end of term reports.
          </p>
        </div>
        <div class="w-[350px] border border-yellow-500 rounded-lg p-5">
          <div
            class="h-8 w-8 rounded-full bg-yellow-500 text-md font-[600] flex items-center justify-center"
          >
            3
          </div>
          <p class="text-md font-[200] mt-7">
            The Programme gives young students an extra year to prepare for the responsibilities of
            studying at a University.
          </p>
        </div>
        <div class="w-[350px] border border-yellow-500 rounded-lg p-5">
          <div
            class="h-8 w-8 rounded-full bg-yellow-500 text-md font-[600] flex items-center justify-center"
          >
            4
          </div>
          <p class="text-md font-[200] mt-7">
            Foundation Programme at Brookstone guarantees admission for a three (3) year first
            degree programme in the NCUK partner Universities.
          </p>
        </div>
        <div class="w-[350px] border border-yellow-500 rounded-lg p-5">
          <div
            class="h-8 w-8 rounded-full bg-yellow-500 text-md font-[600] flex items-center justify-center"
          >
            5
          </div>
          <p class="text-md font-[200] mt-7">
            Students are allowed a greater degree of freedom in uniform, social activities, access
            to Laptops/Internet, free time, feeding, pocket money and much more.
          </p>
        </div>
      </div>
    </section>

    <section
      class="relative bg-cover bg-center bg-no-repeat py-20 px-4"
      :style="{ backgroundImage: `url(${pitchBackgroundImage})` }"
    >
      <div class="absolute inset-0 bg-white/20"></div>

      <div class="relative max-w-5xl mx-auto bg-white/90 shadow-xl rounded-lg p-10 md:p-16">
        <h2 class="text-center text-3xl font-bold text-yellow-500 mb-10">Why Brookstone?</h2>

        <ul class="space-y-5 text-gray-700 leading-relaxed text-base font-[300]">
          <li class="flex items-start gap-3">
            <span class="mt-2 h-2 w-2 bg-black rounded-full"></span>
            <span>
              Equips students with the study skills and subject knowledge needed to make their
              undergraduate study a success.
            </span>
          </li>

          <li class="flex items-start gap-3">
            <span class="mt-2 h-2 w-2 bg-black rounded-full"></span>
            <span>
              Gives students a world of choice, leading to a wide range of undergraduate courses.
            </span>
          </li>

          <li class="flex items-start gap-3">
            <span class="mt-2 h-2 w-2 bg-black rounded-full"></span>
            <span>
              Ensures students who successfully complete the programme can succeed in an
              undergraduate degree course in any university.
            </span>
          </li>

          <li class="flex items-start gap-3">
            <span class="mt-2 h-2 w-2 bg-black rounded-full"></span>
            <span>
              Provides opportunities for entry into many universities with an unrivalled reputation
              and proven track record of success.
            </span>
          </li>

          <li class="flex items-start gap-3">
            <span class="mt-2 h-2 w-2 bg-black rounded-full"></span>
            <span>
              Students benefit from smaller classes, enabling thorough academic preparation and
              support for a smooth transition into university study.
            </span>
          </li>

          <li class="flex items-start gap-3">
            <span class="mt-2 h-2 w-2 bg-black rounded-full"></span>
            <span>
              Students are assisted in their UCAS (Universities and Colleges Admission Service)
              application.
            </span>
          </li>

          <li class="flex items-start gap-3">
            <span class="mt-2 h-2 w-2 bg-black rounded-full"></span>
            <span>
              Students have access to various scholarship opportunities, including tuition fee
              discounts of up to 50%.
            </span>
          </li>
        </ul>
      </div>
    </section>

    <section class="bg-[#28156E] py-[10vh]">
      <div class="max-w-[80%] mx-auto">
        <div class="flex flex-wrap gap-10">
          <div class="w-full md:flex-1">
            <img :src="ifyLogo2" class="w-full object-cover flex-shrink-0" alt="" />
          </div>
          <div class="font-[300] md:flex-1 px-10 md:pr-20 text-white">
            <p class="text-lg font-[600]">ABOUT THE INTERNATIONAL YEAR ONE (IYONE)</p>
            <p class="text-sm leading-relaxed mt-5">
              The International Year One allows you to study the first year of an undergraduate
              degree at Brookstone International Foundation School, Abuja. Upon successful
              completion, students progress directly into the second year of the corresponding
              degree programme at any of the partner universities listed below.
            </p>
          </div>
        </div>
      </div>
    </section>

    <section>
      <div class="my-[15vh] max-w-[80%] md:max-w-[60%] mx-auto">
        <img :src="degreeProgrammes1" alt="" />

        <p class="text-center mt-10 text-lg">
          Degree Programmes Available for Progression with an <br />
          <strong>International Year One</strong> in <strong> Law:</strong>
        </p>

        <div class="mt-5 flex gap-5 items-center justify-center max-w-xl mx-auto flex-wrap">
          <p class="text-white text-center text-sm rounded py-2 w-[200px] bg-[#28156E]">Law</p>
          <p class="text-white text-center text-sm rounded py-2 w-[200px] bg-[#28156E]">
            Business Law
          </p>
          <p class="text-white text-center text-sm rounded py-2 w-[200px] bg-[#28156E]">
            Law with Criminology
          </p>
          <p class="text-white text-center text-sm rounded py-2 w-[200px] bg-[#28156E]">
            Law with finance
          </p>
        </div>
      </div>
    </section>

    <section class="bg-[#F1F1F1]">
      <div class="py-[15vh] max-w-[80%] md:max-w-[60%] mx-auto">
        <img :src="degreeProgrammes2" alt="" />

        <p class="text-center mt-10 text-lg">
          Degree Programmes Available for Progression with an <br />
          <strong>International Year One</strong> in <strong> Business Management:</strong>
        </p>

        <div class="mt-5 flex gap-5 items-center justify-center max-w-3xl mx-auto flex-wrap">
          <p class="text-white text-center text-sm rounded py-2 w-[220px] bg-[#28156E]">
            Accounting and Finance
          </p>
          <p class="text-white text-center text-sm rounded py-2 w-[220px] bg-[#28156E]">
            Business Management
          </p>
          <p class="text-white text-center text-sm rounded py-2 w-[220px] bg-[#28156E]">
            Event Management
          </p>
          <p class="text-white text-center text-sm rounded py-2 w-[220px] bg-[#28156E]">
            Human Resource Management
          </p>
          <p class="text-white text-center text-sm rounded py-2 w-[220px] bg-[#28156E]">
            Finanace and Economics
          </p>
          <p class="text-white text-center text-sm rounded py-2 w-[220px] bg-[#28156E]">
            Marketing
          </p>
          <p class="text-white text-center text-sm rounded py-2 w-[220px] bg-[#28156E]">
            Economics
          </p>
          <p class="text-white text-center text-sm rounded py-2 w-[220px] bg-[#28156E]">
            Accounting
          </p>
          <p class="text-white text-center text-sm rounded py-2 w-[220px] bg-[#28156E]">
            Commercial Marketing
          </p>
        </div>
      </div>
    </section>

    <!-- <section class="my-10">
      <div class="max-w-[80%] mx-auto">
        <img :src="NCUKLogo" alt="" />
      </div>
    </section> -->

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
