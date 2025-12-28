<script setup>
import { ref, computed } from 'vue'
import HeroSection from '@/components/secondary/HeroSection.vue'
import FooterSection from '@/components/secondary/FooterSection.vue'
import schoolBuilding from '@/assets/secondary/schoolBuilding.svg'
import moreInfoBackground from '@/assets/secondary/moreInfoBackground.svg'
import newsImage from '@/assets/news-image.svg'
</script>

<template>
  <main>
    <HeroSection />

    <section class="bg-gray-50 py-10 md:py-20">
      <div class="w-[80%] text-center mb-20 mx-auto">
        <h2 class="text-3xl md:text-5xl/[8vh] font-semibold mt-[10vh]">
          Welcome to <br />
          <span class="text-yellow-500 font-bold">Brookstone School (Secondary)</span>
        </h2>
        <p class="text-lg/10 md:text-xl/10 text-gray-700 mt-4 font-base">
          <strong>Brookstone School (Secondary) is an </strong>
          <strong>Independent, co-educational school </strong> with a
          <strong>Christian ethos, </strong> founded in <strong>2006</strong> as a
          <strong>full boarding school. </strong> We are
          <strong>committed to delivering world-class education </strong> that equips students for
          <strong>success in higher education and beyond. </strong> We are passionate about
          <strong>cultivating accademic excellence, instilling Christian values, </strong> and
          <strong>fostering the diligence </strong> needed to thrive in an ever-changing world.
        </p>
      </div>
    </section>

    <section class="relative">
      <div
        class="absolute inset-0 z-[-1] w-full h-[100vh]"
        :style="{
          backgroundImage: `url(${schoolBuilding})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }"
      ></div>
      <div
        class="relative top-[50vh] bg-[#F4F5FA] mb-[80vh] py-20 max-w-[80%] mx-auto px-6 lg:px-12"
      >
        <div class="text-center mb-16">
          <h2 class="text-4xl md:text-5xl font-semibold">Why</h2>
          <h2 class="text-4xl md:text-5xl text-gray-500 font-semibold mt-[2vh]">
            Brookstone School (Secondary)?
          </h2>
        </div>

        <div class="grid grid-cols-1 md:grid-cols-3 gap-10">
          <div class="border-r-2 pr-8 space-y-6">
            <div
              v-for="item in tabs"
              :key="item.key"
              @click="activeTab = item.key"
              class="cursor-pointer pb-4 border-b"
              :class="activeTab === item.key ? 'text-[#D49F00] font-semibold' : 'text-gray-700'"
            >
              {{ item.label }}
            </div>
          </div>

          <div class="md:col-span-2 bg-[#F7E7A6] p-8">
            <div v-if="activeTab === 'exams'">
              <p class="text-base leading-relaxed mb-8">
                <span class="font-semibold">We are accredited by the British Council</span>
                to conduct a variety of internationally recognized examinations within our school.
                <span class="font-semibold">At Brookstone Secondary,</span> our students are
                prepared for and sit the following external examinations:
              </p>

              <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div class="rounded-xl p-6 border-2 border-white">
                  <span class="text-white text-xs font-semibold px-3 py-1 rounded-sm bg-[#2B197A]">
                    Year 9
                  </span>
                  <p class="mt-3 text-base font-light">
                    Cambridge Lower Secondary Checkpoint Examination, Basic Education Certificate
                    Examination (BECE)
                  </p>
                </div>

                <div class="rounded-xl p-6 border-2 border-white">
                  <span class="text-white text-xs font-semibold px-3 py-1 rounded-sm bg-[#2B197A]">
                    Year 11
                  </span>
                  <p class="mt-3 text-base font-light">
                    International General Certificate of Secondary Education (IGCSE)
                  </p>
                </div>

                <div class="rounded-xl p-6 border-2 border-white">
                  <span class="text-white text-xs font-semibold px-3 py-1 rounded-sm bg-[#2B197A]">
                    Years 11, 12 & IFY
                  </span>
                  <p class="mt-3 text-base font-light">
                    Scholastic Aptitude Test (SAT), Test of English as a Foreign Language (TOEFL),
                    International English Language Testing System (IELTS)
                  </p>
                </div>

                <div class="rounded-xl p-6 border-2 border-white">
                  <span class="text-white text-xs font-semibold px-3 py-1 rounded-sm bg-[#2B197A]">
                    Year 12
                  </span>
                  <p class="mt-3 text-base font-light">
                    West Africa Senior School Certificate Examination (WASSCE), Unified Tertiary
                    Matriculation Examination (UTME)
                  </p>
                </div>

                <div class="rounded-xl p-6 border-2 border-white">
                  <span class="text-white text-xs font-semibold px-3 py-1 rounded-sm bg-[#2B197A]">
                    Years 12 & IFY
                  </span>
                  <p class="mt-3 text-base font-light">
                    Ontario Senior Secondary School Diploma (OSSD)
                  </p>
                </div>
              </div>
            </div>
            <div v-if="activeTab === 'facilities'">
              <p class="text-base leading-relaxed mb-8">
                At Brookstone Secondary School, our purpose-built, state-of-the-art facilities
                create a dynamic environment for interactive teaching and learning. Students benefit
                from diverse opportunities to excel academically, physically, and emotionally,
                fostering resilience, well-being, and a well-rounded education that prepares them
                for a brighter future.
              </p>
            </div>
            <div v-if="activeTab === 'teachers'">
              <p class="text-base leading-relaxed mb-8">
                At Brookstone, our nurturing environment fosters every student's growth and
                development. Our teachers continually review and update the curriculum to reflect
                global best practices, ensuring students receive a world-class education that
                prepares them for success in an ever-changing world.
              </p>
            </div>
            <div v-if="activeTab === 'academic'">
              <p class="text-base leading-relaxed mb-8">
                We offer a broad range of subjects at both the Junior and Senior Secondary levels,
                expertly combining the Nigerian and British Curricula. Our highly qualified
                specialist teachers deliver lessons through interactive and immersive methods that
                bring learning to life.
              </p>
              <p class="text-base leading-relaxed mb-8">
                At Brookstone Secondary School, students are well prepared for national, regional,
                and international examinations, consistently achieving outstanding results across
                all levels. We are committed to providing the individual attention and support each
                learner needs to reach their fullest potential.
              </p>
            </div>

            <div v-else class="text-gray-600">
              <p>{{ getActiveContent }}</p>
            </div>
          </div>
        </div>
      </div>
    </section>

    <section class="bg-white">
      <div class="text-center mb-16">
        <h2 class="text-3xl font-bold text-gray-700">What Our</h2>
        <h2 class="text-3xl font-bold mt-1 text-gray-700">Students & parents are Saying</h2>
      </div>

      <div class="relative max-w-6xl mx-auto py-10 overflow-hidden">
        <button
          @click="prev"
          class="absolute left-4 top-1/2 -translate-y-1/2 z-50 bg-white p-3 rounded-full shadow"
        >
          ‹
        </button>

        <button
          @click="next"
          class="absolute right-4 top-1/2 -translate-y-1/2 z-50 bg-white p-3 rounded-full shadow"
        >
          ›
        </button>

        <div class="relative h-[420px] flex items-center justify-center">
          <div
            v-for="(t, i) in testimonials"
            :key="i"
            class="absolute transition-all duration-500 ease-in-out"
            :style="
              (() => {
                const offset = getIndex(i)

                return {
                  transform: `
          translateX(${offset * 320}px)
          scale(${offset === 0 ? 1.15 : 0.9})
        `,
                  zIndex: offset === 0 ? 20 : 10 - Math.abs(offset),
                  opacity: Math.abs(offset) > 1 ? 0 : 1,
                  pointerEvents: offset === 0 ? 'auto' : 'none',
                }
              })()
            "
          >
            <div class="relative w-[300px]">
              <div class="absolute -bottom-4 -right-4 w-full h-full bg-[#F5B900] rounded-3xl"></div>

              <div class="relative bg-white p-8 rounded-3xl shadow-xl text-center">
                <div
                  class="mx-auto mb-4 w-16 h-16 rounded-full bg-gray-100 flex items-center justify-center"
                >
                  👤
                </div>

                <h3 class="font-semibold text-lg">{{ t.name }}</h3>
                <p class="text-sm text-gray-500">{{ t.role }}</p>

                <p class="text-sm text-gray-700 mt-4 leading-relaxed">
                  {{ t.message }}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <section class="py-[20vh] bg-white">
      <div class="max-w-[80%] mx-auto px-6 text-center">
        <h2 class="text-3xl md:text-5xl font-bold text-gray-800 mb-4">
          Upcoming Events & Activities
        </h2>
        <p class="text-gray-500 my-10 text-2xl font-[200] max-w-2xl mx-auto">
          Explore our calendar of academic, cultural, and social activities designed to enrich
          learning beyond the classroom.
        </p>

        <div class="flex justify-end mb-10">
          <button
            class="bg-[#1B1464] text-white font-semibold px-6 py-2 rounded hover:bg-[#0f0b3d] transition"
          >
            VIEW ALL NEWS
          </button>
        </div>

        <div class="grid grid-cols-1 md:grid-cols-3 gap-10">
          <div class="text-left">
            <img :src="newsImage" alt="Event 1" class="rounded-lg mb-4 w-full h-56 object-cover" />
            <p class="text-sm text-gray-400 uppercase tracking-wide">News - Jan 30, 2023</p>

            <h3 class="mt-3 font-bold text-lg text-gray-900">
              Bachelor of Information Technology Major in Cyber Security
            </h3>
          </div>

          <div class="text-left">
            <img :src="newsImage" alt="Event 2" class="rounded-lg mb-4 w-full h-56 object-cover" />
            <p class="text-sm text-gray-400 uppercase tracking-wide">News - Jan 21, 2023</p>

            <h3 class="mt-3 font-bold text-lg text-gray-900">
              Bachelor of Information Technology Major in Cyber Security
            </h3>
          </div>

          <div class="text-left">
            <img :src="newsImage" alt="Event 3" class="rounded-lg mb-4 w-full h-56 object-cover" />
            <p class="text-sm text-gray-400 uppercase tracking-wide">Events - Jan 01, 2023</p>

            <h3 class="mt-3 font-bold text-lg text-gray-900">
              Bachelor of Information Technology Major in Cyber Security
            </h3>
          </div>
        </div>
      </div>
    </section>

    <section class="">
      <div
        class="w-full bg-cover bg-center"
        :style="{
          backgroundImage: `url(${moreInfoBackground})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }"
      >
        <div class="py-[10vh] md:py-[20vh]">
          <div class="w-full md:max-w-[80%] mx-auto">
            <p class="text-center text-3xl/[6vh] md:text-5xl/[8vh] max-w-[75%] mx-auto">
              Blending Knowledge, innovation, affordability, and recreation to norture well-rounded
              students
            </p>
          </div>

          <div
            class="max-w-[80%] mx-auto my-[5vh] md:my-[10vh] flex items-center flex-col md:flex-row gap-20"
          >
            <div class="w-full md:w-1/2">
              <div class="space-y-6 text-xl md:text-2xl">
                <div>
                  <h3 class="font-bold pb-1 md:pb-3 text-gray-700">Learning</h3>
                  <p
                    class="text-gray-700 font-light md:font-extralight text-base md:text-xl leading-relaxed"
                  >
                    We prioritize learning, knowledge, growth, and creativity over anything else.
                  </p>
                  <hr class="mt-2 md:mt-5 border-t border-black w-100 h-1" />
                </div>
                <div>
                  <h3 class="font-bold pb-1 md:pb-3 text-gray-700">Tuition</h3>
                  <p
                    class="text-gray-700 font-light md:font-extralight text-base md:text-xl leading-relaxed"
                  >
                    We are quite affordable. We offer boarding facilities only.
                  </p>
                  <hr class="mt-2 md:mt-5 border-t border-black w-100 h-1" />
                </div>
                <div>
                  <h3 class="font-bold pb-1 md:pb-3 text-gray-700">Technology</h3>
                  <p
                    class="text-gray-700 font-light md:font-extralight text-base md:text-xl leading-relaxed"
                  >
                    We make use of technology that matches international standards, for the
                    dispensation of knowledge.
                  </p>
                  <hr class="mt-2 md:mt-5 border-t border-black w-100 h-1" />
                </div>
                <div>
                  <h3 class="font-bold pb-1 md:pb-3 text-gray-700">Recreation</h3>
                  <p
                    class="text-gray-700 font-light md:font-extralight text-base md:text-xl leading-relaxed"
                  >
                    We allow students to partcipate in sporting and recreational activities, so they
                    can discorver and explore their talents.
                  </p>
                  <hr class="mt-2 md:mt-5 border-t border-black w-100 h-1" />
                </div>
              </div>
            </div>

            <form class="space-y-4 w-full md:w-1/2">
              <div class="grid grid-cols-2 gap-4">
                <input
                  type="text"
                  placeholder="First Name"
                  class="w-full p-3 border border-gray-200 rounded-md bg-yellow-100 focus:outline-none focus:ring-2 focus:ring-[#2b197a]"
                />
                <input
                  type="text"
                  placeholder="Last Name"
                  class="w-full p-3 border border-gray-200 rounded-md bg-yellow-100 focus:outline-none focus:ring-2 focus:ring-[#2b197a]"
                />
              </div>

              <div class="grid grid-cols-2 gap-4">
                <input
                  type="text"
                  placeholder="Phone Number"
                  class="w-full p-3 border border-gray-200 rounded-md bg-yellow-100 focus:outline-none focus:ring-2 focus:ring-[#2b197a]"
                />
                <input
                  type="email"
                  placeholder="Email Address"
                  class="w-full p-3 border border-gray-200 rounded-md bg-yellow-100 focus:outline-none focus:ring-2 focus:ring-[#2b197a]"
                />
              </div>

              <input
                type="text"
                placeholder="Subject"
                class="w-full p-3 border border-gray-200 rounded-md bg-yellow-100 focus:outline-none focus:ring-2 focus:ring-[#2b197a]"
              />

              <textarea
                placeholder="Message"
                rows="5"
                class="w-full p-3 border border-gray-200 rounded-md bg-yellow-100 focus:outline-none focus:ring-2 focus:ring-[#2b197a]"
              ></textarea>

              <button
                type="submit"
                class="bg-[#0c0d44] text-white px-8 py-3 rounded-md hover:bg-[#2b197a] transition float-right"
              >
                SUBMIT
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>

    <!-- Footer -->
    <FooterSection />
  </main>
</template>

<script>
const tabs = [
  { key: 'academic', label: 'Academic Excellence' },
  { key: 'teachers', label: 'Highly Qualified & Experienced Teachers' },
  { key: 'facilities', label: 'Facilities' },
  { key: 'exams', label: 'Examinations' },
]

const activeTab = ref('exams')

const getActiveContent = computed(() => {
  return ''
})

const testimonials = ref([
  {
    id: 1,
    name: 'Adanna Amechi',
    role: 'Ex-student',
    message:
      'Being a part of Brookstone Family has truly been more than I expected. I learnt to be selfless and to uphold excellence in everything I do.',
  },
  {
    id: 2,
    name: 'Mrs Nwachukwu U.',
    role: 'Parent',
    message:
      'I am a living proof of the Brookstone difference! With four children under my care, I witnessed their commitment to excellence.',
  },
  {
    id: 3,
    name: 'Onisoken Iboro',
    role: 'Ex-student',
    message:
      'Brookstone has given me the most amazing experience. It taught me that anything is achievable with the right effort.',
  },
  {
    id: 4,
    name: 'John Kelvin',
    role: 'Student',
    message:
      'Brookstone changed my approach to learning and gave me the confidence to pursue engineering.',
  },
  {
    id: 5,
    name: 'John Kelvin',
    role: 'Student',
    message:
      'Brookstone changed my approach to learning and gave me the confidence to pursue engineering.',
  },
])

const activeIndex = ref(0)

const total = computed(() => testimonials.value.length)

const getIndex = (i) => {
  const diff = i - activeIndex.value
  if (diff > total.value / 2) return diff - total.value
  if (diff < -total.value / 2) return diff + total.value
  return diff
}

const next = () => {
  activeIndex.value = (activeIndex.value + 1) % total.value
}

const prev = () => {
  activeIndex.value = (activeIndex.value - 1 + total.value) % total.value
}
</script>
