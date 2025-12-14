<script setup>
import { ref } from 'vue'
import NavBar from '@/components/primary/Navbar.vue'
import FooterSection from '@/components/primary/FooterSection.vue'
import heroImage2 from '@/assets/primary/heroImage2.svg'
import heroImage1 from '@/assets/primary/heroImage1.svg'
import pupils from '@/assets/primary/pupils.svg'
import kwentua from '@/assets/primary/kwentua.svg'
import headmaster from '@/assets/primary/headmaster.svg'
</script>

<template>
  <main>
    <NavBar />

    <section class="relative h-[80vh] overflow-hidden text-white">
      <div class="absolute inset-0">
        <div
          class="absolute inset-0 bg-cover bg-center"
          :style="{ backgroundImage: `url(${heroImage2})` }"
        ></div>

        <div class="absolute inset-0 bg-[#0D0C67]/50 z-20"></div>
      </div>

      <div
        class="relative z-30 flex flex-col justify-center items-center text-center h-full px-6 max-w-5xl mx-auto"
      >
        <h1 class="text-4xl md:text-5xl font-extrabold mb-6">About Brookstone School</h1>

        <p class="text-lg md:text-3xl leading-relaxed mb-10 italic text-gray-200">
          (Nursery & Primary)
        </p>
      </div>
    </section>

    <section class="bg-[#F7F8FB] pt-20 pb-[20vh]">
      <div class="text-center my-[7vh] font-bold text-yellow-500">
        <p class="text-[3rem]">Welcome to Brookstone School</p>
        <p class="text-[2.5rem] italic">(Nursery & Primary)</p>
      </div>

      <div class="max-w-[80%] mx-auto flex gap-10 justify-between flex-wrap">
        <div class="prose prose-lg max-w-none text-gray-800 text-[17px] flex-1 min-w-[300px]">
          <p>
            <strong>Brookstone School (Nursery and Primary)</strong>, founded in
            <strong>2003</strong>, provides a
            <strong>safe, stimulating, and inclusive environment</strong> for children aged
            <strong>15 months to 10 years</strong>. Children's educational journey begins in the
            <strong>homely and friendly environment</strong> of our Early Years, where pupils
            progress to <strong>Key Stages One and Two</strong> to complete their Primary Education
            journey.
          </p>

          <p>
            <br />
            The <strong>academic thrust</strong> of the Nursery and Primary School is central to our
            purpose. We are proud of our team of
            <strong>highly qualified and dedicated teachers</strong> who are passionate about
            nurturing potential, inspire confidence, encourage curiosity, and bring out the very
            best in every child.
          </p>

          <p>
            <br />
            Our <strong>well-resourced and outstanding facilities</strong> inspire our learning,
            creativity, and growth. Every space is thoughtfully created to
            <strong>foster discovery and development</strong>.
          </p>

          <p>
            <br />
            An extensive range of <strong>co-curricular and extracurricular activities</strong> are
            provided to develop skills, promote deeper learning, and build critical thinking.
          </p>
        </div>

        <!-- Right: framed image -->
        <div class="">
          <div
            class="rounded-3xl border-l-[5px] border-b-[5px] border-[#2B197A] shadow-sm overflow-hidden"
          >
            <img :src="pupils" alt="Brookstone students" class="object-cover w-full h-full" />
          </div>
        </div>
      </div>
    </section>

    <section class="relative py-[20vh] bg-[#FFFAEB]">
      <div class="relative w-[80%] mx-[10%] bg-[#0E0727]">
        <div class="absolute inset-0">
          <img :src="heroImage1" alt="" class="object-cover w-full h-full opacity-25" />
        </div>

        <div class="relative mx-auto pb-[20vh]">
          <!-- central yellow box -->
          <div class="text-3xl md:text-5xl font-bold text-white text-center py-[10vh]">
            <p>Examinations & Academic</p>
            <p>Excellence</p>
          </div>

          <div class="mx-auto bg-[#F4CF5B] p-10 md:p-16 shadow-xl max-w-4xl">
            <p class="text-lg max-w-2xl mx-auto mb-8">
              Brookstone School is an accredited centre for Cambridge Assessment International
              Education (CAIE). Our pupils write the following tests under the Cambridge
              International Primary Programme (CIPP).
            </p>

            <div class="mx-[10%] grid md:grid-cols-2 gap-6">
              <!-- card 1 -->
              <div class="relative border-[2px] border-white/80 rounded-lg p-6">
                <div class="inline-block bg-[#2B197A] text-white text-xs px-3 py-1 rounded-sm mb-3">
                  Year 3,4,5 & 6
                </div>
                <p class="text-md text-gray-700">These pupils will write the progression test.</p>
              </div>

              <!-- card 2 -->
              <div class="relative border-[2px] border-white/80 rounded-lg p-6">
                <div
                  class="inline-block bg-[#2B197A] text-white text-xs px-3 py-1 rounded-full mb-3"
                >
                  Year 6
                </div>
                <p class="text-md text-gray-700">
                  Checkpoint examinations and certificates are issued by CAIE for the checkpoint
                  examination.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <section
      class="relative overflow-hidden pt-[10vh] md:pt-[15vh] pb-[12vh] md:pb-[20vh] px-5 bg-gradient-to-b from-[#1C2D5D] to-[#2D4A9B]"
    >
      <!-- Header -->
      <div class="text-center mb-12">
        <p class="text-white/90 text-base md:text-3xl font-medium">Our Journey:</p>
        <h2 class="text-3xl md:text-4xl mt-4 font-base text-yellow-600">
          A Timeline of Growth & Excellence
        </h2>
      </div>

      <div class="relative max-w-6xl mx-auto pt-10 md:pt-[15vh]">
        <div
          class="hidden md:block absolute left-1/2 top-0 transform -translate-x-1/2 w-[2px] h-full bg-yellow-600/20"
        ></div>

        <div class="flex flex-col space-y-14 md:space-y-20">
          <article
            v-for="(item, idx) in items"
            :key="idx"
            class="relative w-full flex flex-col md:flex-row items-center"
            :class="item.side === 'left' ? 'md:flex-row' : 'md:flex-row-reverse'"
          >
            <div
              class="hidden md:flex md:w-1/3 px-6"
              :class="
                item.side === 'left'
                  ? 'justify-end pr-10 text-right'
                  : 'justify-start pl-10 text-left'
              "
            >
              <div
                class="bg-gradient-to-b from-yellow-600 via-yellow-500 to-yellow-400 text-white rounded-lg px-5 py-3 font-semibold shadow-sm w-max"
              >
                <div class="opacity-90">{{ item.year }}</div>
                <div class="font-light">{{ item.titleShort }}</div>
              </div>
            </div>

            <div
              class="absolute md:static left-1/2 md:left-auto top-0 md:top-auto transform -translate-x-1/2 md:translate-x-0 z-10"
              :class="item.side === 'left' ? 'md:translate-x-[50%]' : 'md:-translate-x-[50%]'"
            >
              <div class="w-3 h-3 rounded-full bg-[#FF6B4D] shadow-sm"></div>
            </div>

            <div class="w-full md:w-1/2 px-4 md:px-6 mt-6 md:mt-0">
              <div
                class="bg-[#F1F3FF] text-[#1C2A5E] rounded-xl py-4 px-6 shadow-inner border border-[#2B197A]/20"
              >
                <p class="leading-relaxed text-sm md:text-base" v-html="item.content"></p>
              </div>
            </div>

            <div class="md:hidden mt-4 flex justify-center">
              <div class="bg-[#F4CF5B] text-[#1C2A5E] rounded-lg px-4 py-2 font-semibold text-sm">
                {{ item.year }} — {{ item.titleShort }}
              </div>
            </div>
          </article>
        </div>
      </div>
    </section>

    <section class="bg-[#FFF9E8] py-[17vh]">
      <div class="max-w-6xl mx-auto px-6">
        <h2 class="text-center text-3xl md:text-5xl font-bold text-[#0B1A45] mb-16">
          Our Leadership Team
        </h2>

        <div class="grid grid-cols-1 md:grid-cols-2 gap-16 place-items-center">
          <div class="text-center">
            <div
              class="w-56 h-56 md:w-64 md:h-64 rounded-full border-[4px] border-[#0B1A45] overflow-hidden mx-auto bg-white"
            >
              <div class="w-50 h-50 md:w-55 md:h-55 rounded-full overflow-hidden m-5">
                <img
                  :src="headmaster"
                  alt="Head, Nursery & Primary"
                  class="object-contain w-full h-full"
                />
              </div>
            </div>

            <h3 class="mt-6 text-xl font-semibold text-[#0B1A45]">Mr. Adekunle Adesanya</h3>
            <p class="text-gray-700 text-sm md:text-base">Head, Nursery & Primary</p>
          </div>

          <div class="text-center">
            <div
              class="w-56 h-56 md:w-64 md:h-64 rounded-full border-[4px] border-[#0B1A45] overflow-hidden mx-auto bg-white"
            >
              <div class="w-50 h-50 md:w-55 md:h-55 rounded-full overflow-hidden m-10">
                <img
                  :src="kwentua"
                  alt="Asst. Head, Nursery & Primary"
                  class="object-cover w-full h-full"
                />
              </div>
            </div>

            <h3 class="mt-6 text-xl font-semibold text-[#0B1A45]">Mrs. Clementina Kwentua</h3>
            <p class="text-gray-700 text-sm md:text-base">Asst. Head, Nursery & Primary</p>
          </div>
        </div>
      </div>
    </section>

    <FooterSection />
  </main>
</template>

<script>
const items = ref([
  {
    year: '2003-',
    titleShort: 'Foundation',
    side: 'left',
    content:
      'Brookstone School was established, opening its doors to the first Nursery and Primary pupils.',
  },
  {
    year: '2005-',
    titleShort: 'Pioneer Success',
    side: 'right',
    content: 'Our first graduating class achieved a 100% transition into secondary school.',
  },
  {
    year: '2006-',
    titleShort: 'Growth',
    side: 'left',
    content:
      'We expanded with the launch of Brookstone Secondary School, offering a complete educational pathway.',
  },
  {
    year: '2009-',
    titleShort: 'Global Recognition',
    side: 'right',
    content:
      'Introduced the Cambridge International Primary Programme (CIPP); our teachers became Cambridge Accredited Markers and we undertook our first international trip.',
  },
  {
    year: '2013-',
    titleShort: '10 Years of Excellence',
    side: 'left',
    content:
      'Marked a decade of achievement with exhibitions, book reviews, and sports celebrations, while honoring our pioneer staff and pupils.',
  },
  {
    year: '2014-',
    titleShort: 'International Foundation Year',
    side: 'right',
    content:
      'Launched the IFY programme, enabling our students to progress directlt to the firdt year of UK degree courses.',
  },
  {
    year: '2016-',
    titleShort: 'Campus Development',
    side: 'left',
    content:
      'Upgraded facilities with a remodeled administrative block, enhanced French Daycelebrations, and commissioning of a world-class science laboratory.',
  },
  {
    year: '2023-',
    titleShort: '20th Anniversary',
    side: 'right',
    content:
      'Celebrated two decades of excellence, reaffirming our commitment to quality education and holistic student development.',
  },
])
</script>

<style scoped>
/* subtle inner shadow to mimic screenshot card depth */
.shadow-inner {
  box-shadow:
    inset 0 0 0 1px rgba(255, 255, 255, 0.03),
    0 8px 24px rgba(0, 0, 0, 0.12);
}

/* responsive tweaks */
@media (max-width: 767px) {
  .rounded-xl {
    border-radius: 12px;
  }
}
</style>
