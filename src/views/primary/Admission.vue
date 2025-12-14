<script setup>
import { ref } from 'vue'
import NavBar from '@/components/primary/Navbar.vue'
import FooterSection from '@/components/primary/FooterSection.vue'
import admissionHero from '@/assets/primary/admissionHero.svg'
import curvedYellowUnderline from '@/assets/primary/curvedYellowUnderline.svg'
import inquiryIcon from '@/assets/primary/inquiryIcon.svg'
import examIcon from '@/assets/primary/examIcon.svg'
import interviewIcon from '@/assets/primary/interviewIcon.svg'
import admissionIcon from '@/assets/primary/admissionIcon.svg'
</script>

<template>
  <main>
    <NavBar />

    <section class="relative h-[40vh] overflow-hidden text-white">
      <div class="absolute inset-0">
        <div
          class="absolute inset-0 bg-cover bg-center"
          :style="{ backgroundImage: `url(${admissionHero})` }"
        ></div>

        <div class="absolute inset-0 bg-[#0E0431]/50 z-20"></div>
      </div>

      <div
        class="relative z-30 flex flex-col justify-center items-center text-center h-full px-6 max-w-5xl mx-auto"
      >
        <h1 class="text-4xl md:text-5xl font-extrabold mb-6">Join Our School Family</h1>
      </div>
    </section>

    <section class="bg-[#F9F9F9] py-20">
      <div class="max-w-4xl mx-auto text-center">
        <p class="text-xl md:text-2xl font-light leading-relaxed text-gray-800">
          We welcome families who share our commitment to academic excellence and holistic growth.
          Our admissions process is simple and ensures the best fit for your child’s learning
          journey:
        </p>
      </div>

      <div class="container mx-auto flex my-[10vh] justify-stretch">
        <div class="relative border-t-4 w-full border-[#2B197A]">
          <div
            class="absolute top-[-1.3vh] right-[50%] w-4 h-4 rounded-full shadow-sm"
            style="background-color: #f24b3a; box-shadow: 0 1px 0 rgba(0, 0, 0, 0.12) inset"
          ></div>
          <p class="text-center mt-[5vh] font-semibold text-xl md:text-2xl">Apply online</p>
          <div class="text-center mt-[2vh] text-grey-300 text-lg md:text-xl">
            Complete the <br />
            application form.
          </div>
        </div>

        <div class="relative border-t-4 w-full border-[#2B197A]">
          <div
            class="absolute top-[-1.3vh] right-[50%] w-4 h-4 rounded-full shadow-sm"
            style="background-color: #e8b83a; box-shadow: 0 1px 0 rgba(0, 0, 0, 0.12) inset"
          ></div>
          <p class="text-center mt-[5vh] font-semibold text-xl md:text-2xl">Visit & Assessment</p>
          <div class="text-center mt-[2vh] text-grey-300 text-lg md:text-xl">
            Schedule a school tour <br />
            and student assessment.
          </div>
        </div>

        <div class="relative border-t-4 w-full border-[#2B197A]">
          <div
            class="absolute top-[-1.3vh] right-[50%] w-4 h-4 rounded-full shadow-sm"
            style="background-color: #2f8f3a; box-shadow: 0 1px 0 rgba(0, 0, 0, 0.12) inset"
          ></div>
          <p class="text-center mt-[5vh] font-semibold text-xl md:text-2xl">Submit Documents</p>
          <div class="text-center mt-[2vh] text-grey-300 text-lg md:text-xl">
            Provide the required <br />
            admission documents.
          </div>
        </div>
      </div>
    </section>

    <section class="bg-[#F9F9F9] pb-20">
      <div class="container mx-auto p-20 bg-white rounded-2xl shadow-sm">
        <form class="space-y-[8vh]">
          <div class="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div>
              <label class="block text-sm font-medium mb-2">Parent full name</label>
              <input type="text" placeholder="Enter Text" class="w-full border rounded-lg p-3" />
            </div>
            <div>
              <label class="block text-sm font-medium mb-2">Email</label>
              <input type="email" placeholder="Full name" class="w-full border rounded-lg p-3" />
            </div>
            <div>
              <label class="block text-sm font-medium mb-2">Phone</label>
              <input type="text" placeholder="Full name" class="w-full border rounded-lg p-3" />
            </div>
          </div>

          <div class="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div>
              <label class="block text-sm font-medium mb-2">Child full name</label>
              <input type="text" placeholder="Enter Text" class="w-full border rounded-lg p-3" />
            </div>
            <div>
              <label class="block text-sm font-medium mb-2">Age</label>
              <input type="number" placeholder="" class="w-full border rounded-lg p-3" />
            </div>
            <div>
              <label class="block text-sm font-medium mb-2">Grade</label>
              <select class="w-full border rounded-lg p-3">
                <option>Select Grade</option>
              </select>
            </div>
          </div>

          <div>
            <label class="block text-sm font-medium mb-2">Message</label>
            <textarea
              rows="5"
              placeholder="Enter Text"
              class="w-full border rounded-lg p-3"
            ></textarea>
          </div>

          <div class="flex items-center space-x-3">
            <input type="checkbox" class="h-5 w-5" />
            <p class="text-sm">
              I consent to emails and calls regarding my inquiry and agree to the Privacy Policy.
            </p>
          </div>

          <div class="pt-4 flex justify-center">
            <button
              type="submit"
              class="bg-yellow-500 px-8 py-3 rounded-full hover:bg-yellow-600 transition"
            >
              Apply Now
            </button>
          </div>
        </form>
      </div>
    </section>

    <section class="bg-[#F1BD3C] py-[15vh]">
      <h2 class="text-center text-[28px] font-semibold mb-[10vh]">How to apply</h2>

      <div class="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-10">
        <div
          v-for="step in steps"
          :key="step.number"
          class="bg-white rounded-xl p-10 shadow-sm text-left"
        >
          <div class="flex gap-7">
            <img :src="step.icon" alt="" class="w-12 h-12 mb-4" />

            <div>
              <h3 class="text-lg font-semibold">{{ step.number }}. {{ step.title }}</h3>
              <img :src="curvedYellowUnderline" alt="" class="w-20 my-2" />
            </div>
          </div>

          <p class="text-[15px] leading-relaxed text-gray-700">
            {{ step.text }}
          </p>
        </div>
      </div>
    </section>

    <FooterSection />
  </main>
</template>

<script>
const steps = [
  {
    number: 1,
    title: 'Inquiry',
    icon: inquiryIcon,
    text: `Reach out to us by email or phone to learn more. We’ll be happy
           to share our brochure and answer any questions about Brookstone
           School and our programmes.`,
  },
  {
    number: 2,
    title: 'Exam',
    icon: examIcon,
    text: `Your child will take an exam designed to help us understand their
           learning level and potential. Exam dates are shared once scheduled.`,
  },
  {
    number: 3,
    title: 'Interview',
    icon: interviewIcon,
    text: `Parents and students meet with our admissions team for a friendly
           conversation to better understand the student’s strengths and needs.`,
  },
  {
    number: 4,
    title: 'Admission',
    icon: admissionIcon,
    text: `Once all requirements are met, families receive an information pack
           with the next steps for enrollment.`,
  },
]
</script>
