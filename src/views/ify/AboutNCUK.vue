<script setup>
import NavBar from '@/components/ify/NavBar.vue'
import aboutNCUKHero from '@/assets/ify/aboutNCUKHero.svg'
import aboutNCUKImage from '@/assets/ify/aboutNCUKImage.svg'
import FooterSection from '@/components/ify/FooterSection.vue'
</script>

<template>
  <main>
    <NavBar />

    <section class="relative h-[40vh] overflow-hidden text-white">
      <div class="absolute inset-0">
        <div
          class="absolute inset-0 bg-cover bg-center"
          :style="{ backgroundImage: `url(${aboutNCUKHero})` }"
        ></div>

        <div class="absolute inset-0 bg-[#0E0431]/50 z-20"></div>
      </div>

      <div
        class="relative z-30 flex flex-col justify-center items-center text-center h-full px-6 max-w-5xl mx-auto"
      >
        <h1 class="text-4xl md:text-5xl font-extrabold mb-6">About NCUK</h1>
      </div>
    </section>

    <section class="my-[15vh]">
      <div class="flex gap-5 flex-wrap">
        <div class="w-full md:flex-1">
          <img :src="aboutNCUKImage" class="w-full object-cover flex-shrink-0" alt="" />
        </div>
        <div class="font-[300] md:flex-1 px-10 md:pr-20">
          <p class="text-base leading-relaxed">
            NCUK is unique in higher education. NCUK is a consortium of leading universities
            dedicated to giving international students guaranteed access to universities worldwide
            and helping them succeed when they get there. Our main office is located in Manchester,
            UK with other key staff members being located in China and the wider Asia region.
          </p>
          <p class="text-base leading-relaxed mt-3">
            With a diverse set of qualifications available as well as opportunities for qualified
            students to progress directly to university, NCUK supports thousands of students each
            year on their academic journeys. As our qualifications are recognised by universities
            from within the NCUK Global Network and beyond, we are able to give students the best
            start and guarantee access to an NCUK University upon successful completion of their
            studies with us.
          </p>
          <p class="text-base leading-relaxed mt-3">
            NCUK qualifications are designed in collaboration with our universities and combine high
            academic standards, with language, study, social and cultural skills. Students can study
            in their own country or at one of our Study Centres in the UK and Europe, taught by
            quality assured partners whose standards are as high as our own. Our qualifications are
            backed by fantastic levels of service and support, and an outstanding track record with
            over 40,000 students progressing to university since our inception.
          </p>
          <p class="text-base leading-relaxed mt-3">
            Students who progress to NCUK Universities have a choice to study one of thousands of
            different degree courses, and enabling them to progress to enriching careers following
            graduation or obtaining further degrees.
          </p>
        </div>
      </div>
    </section>

    <FooterSection />
  </main>
</template>
