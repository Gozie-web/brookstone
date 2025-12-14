<script setup>
import { ref, onMounted, onBeforeUnmount } from 'vue'
import NavBar from '@/components/ify/NavBar.vue'
import admissionsHero from '@/assets/ify/admissionsHero.svg'
import gradStudents from '@/assets/ify/gradStudents.svg'
import FooterSection from '@/components/ify/FooterSection.vue'
import examStudents from '@/assets/ify/examStudents.svg'
import cautionIcon from '@/assets/icons/cautionIcon.svg'
import checkMark from '@/assets/icons/checkMark.svg'
import campusStudents from '@/assets/ify/campusStudents.svg'
import clinicalStudents from '@/assets/ify/clinicalStudents.svg'
import primaryStudents from '@/assets/primary-students.svg'
import ifyStudents from '@/assets/ify-iyone-students.svg'
</script>

<template>
  <main>
    <NavBar />

    <section class="relative h-[40vh] overflow-hidden text-white">
      <div class="absolute inset-0">
        <div
          class="absolute inset-0 bg-cover bg-center"
          :style="{ backgroundImage: `url(${admissionsHero})` }"
        ></div>

        <div class="absolute inset-0 bg-[#0E0431]/50 z-20"></div>
      </div>

      <div
        class="relative z-30 flex flex-col justify-center items-center text-center h-full px-6 max-w-5xl mx-auto"
      >
        <h1 class="text-4xl md:text-5xl font-extrabold mb-6">Admissions</h1>
      </div>
    </section>

    <section>
      <div class="max-w-[80%] mx-auto my-[10vh] flex items-center gap-5 flex-wrap">
        <div class="w-full md:flex-1">
          <img :src="gradStudents" alt="Graduate Students" class="" />
        </div>
        <div class="flex-1">
          <h2 class="text-3xl font-[500] mb-6">NCUK IFY</h2>
          <p class="text-base leading-relaxed">
            Designed by our university partners exclusively for international students the NCUK IFY
            combines academic modules, study skills and English language training to provide a
            pathway to undergraduate degree courses at leading universities.
          </p>
          <p class="text-base leading-relaxed">
            Successful completion of the NCUK IFY guarantees you a place at an NCUK partner
            University.
          </p>
          <p class="text-base leading-relaxed">
            Universities worldwide and UK National Academic Recognition Information Centre (NARIC)
            formally recognises the NCUK IFY as comparable to GCE A Level, Australian High School
            (SSCE), American High School (AP) qualifications and Hong Kong High School (HKDSE)
            qualifications.
          </p>
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

    <section class="bg-[#000847]">
      <div class="max-w-[80%] mx-auto">
        <h2 class="pt-[10vh] text-center font-[500] text-3xl text-white">Entry Requirements</h2>

        <div class="flex flex-wrap gap-20 py-[10vh]">
          <div>
            <img :src="examStudents" alt="" />
          </div>
          <div class="max-w-md">
            <div class="flex gap-5 items-start">
              <img :src="cautionIcon" alt="" />
              <p class="text-white">
                Students MUST be 16 years and above at the time of admission into the Foundation
                Programme.
              </p>
            </div>

            <div class="flex gap-5 mt-10 items-start">
              <img :src="cautionIcon" alt="" />
              <p class="text-white">
                A minimum of C grade in relevant subjects including English Language and Mathematics
                in the West African Secondary School Certificate Examination (WASSCE) and National
                Examinations Council (NECO). OR A minimum of B grades in relevant subjects including
                English Language and Mathematics in the International General Certificate of
                Secondary Education (IGCSE).
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>

    <section>
      <div class="my-[10vh] max-w-[80%] mx-auto flex gap-10 flex-wrap">
        <div class="w-full md:flex-1 bg-[#F6F8FF] rounded-xl p-5">
          <img :src="campusStudents" alt="" />
          <p class="mt-5 font-[600] text-md">
            START YOUR JOURNEY TO A WORLD-CLASS MEDICAL UNIVERSITY WITH NCUK
          </p>

          <p class="mt-5 font-[600] text-sm">UCAT Entry Requirements</p>

          <p class="mt-5 font-[300] text-sm">
            International Foundation Year Subjects and grades: Biology and Chemistry + either Maths
            for Science or Physics. Minimum grade: AAB (university dependent). Some degrees require
            students to study Biology, Chemistry, and Physics.
          </p>

          <p class="mt-5 font-[300] text-sm">
            Applying to medical degrees often requires additional tests, interviews or work
            experience. Below is an overview of some of the courses available to you at the NCUK
            Universities and their specific requirements, including the dates by which applications
            will need to be submitted.
          </p>
        </div>

        <div class="w-full md:flex-1 bg-[#F6F8FF] rounded-xl p-5">
          <img :src="clinicalStudents" alt="" />
          <p class="mt-5 font-[600] text-md">
            WHAT IS THE UNIVERSITY CLINICAL APTITUDE TEST (UCAT)?
          </p>

          <p class="mt-5 font-[300] text-sm">
            The University Clinical Aptitude Test (UCAT) is an admissions test used by a number of
            UK Universities for their medical and dental degree programmes. You are usually required
            to have sat the UCAT prior to applying to University. Registration for the UCAT opens in
            June and closes in September each year. The UCAT can only be sat between July and
            September each year and is subject to availability.
          </p>
        </div>
      </div>
    </section>

    <section class="bg-yellow-500 py-[10vh]">
      <div class="flex items-center justify-center">
        <div>
          <h2 class="font-[600] text-center text-lg">Other Programmes we Offer</h2>
          <div class="mt-5">
            <div class="flex gap-5">
              <img :src="checkMark" alt="" />
              <p>Pre University Progression Programme (PUPP): A remedial programme for students.</p>
            </div>
            <div class="flex gap-5 mt-5">
              <img :src="checkMark" alt="" />
              <p>Advanced Subsidiary & Advanced Level Programme.</p>
            </div>
            <div class="flex gap-5 mt-5">
              <img :src="checkMark" alt="" />
              <p><strong>IELTS</strong> - International English Language Testing System.</p>
            </div>
            <div class="flex gap-5 mt-5">
              <img :src="checkMark" alt="" />
              <p><strong>SAT</strong> - Scholastic Assessment Test.</p>
            </div>
          </div>
        </div>
      </div>
    </section>

    <section class="py-[10vh] bg-[#F6F8FF]">
      <div class="flex items-center justify-center">
        <div>
          <h2 class="font-[600] text-center text-lg">
            Want to apply for International Foundation Year?
          </h2>
          <div class="mt-5 flex justify-center">
            <button
              class="bg-[#0E0431] text-white px-6 py-3 rounded-full hover:bg-[#0c0326] transition"
            >
              Click here to Apply
            </button>
          </div>
        </div>
      </div>
    </section>

    <section class="py-[10vh]">
      <div class="flex items-center justify-center">
        <div>
          <h2 class="font-[600] text-center text-4xl">Picture Excerpts</h2>
          <p class="mt-5 text-center">
            Experience the energy, collaboration, and community that define our campuses. <br />
            Browse snapshots from events, workshops, and everyday moments across Nigeria.
          </p>

          <div class="max-w-[80%] mx-auto mt-10 relative overflow-hidden w-full py-8">
            <div class="flex gap-6 animate-scroll" :style="{ '--duration': duration + 's' }">
              <img
                v-for="(img, index) in images"
                :key="index"
                :src="img"
                class="h-[25vh] w-auto object-cover flex-shrink-0"
              />
            </div>
          </div>
        </div>
      </div>
    </section>

    <FooterSection />
  </main>
</template>

<script>
const images = [
  gradStudents,
  examStudents,
  primaryStudents,
  clinicalStudents,
  ifyStudents,
  campusStudents,
  ifyStudents,
  ifyStudents,
  ifyStudents,
  ifyStudents,
]

const duration = 10 // speed in seconds (increase for slower scroll)
</script>

<style scoped>
@keyframes scroll {
  0% {
    transform: translateX(0);
  }
  100% {
    transform: translateX(-50%);
  }
}

.animate-scroll {
  animation: scroll var(--duration) linear infinite;
}
</style>
