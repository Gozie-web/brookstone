<script setup>
import HeroSection from '@/components/HeroSection.vue'
import FooterSection from '@/components/FooterSection.vue'
import missionIcon from '@/assets/mission-icon.svg'
import visionIcon from '@/assets/vision-icon.svg'
import goalIcon from '@/assets/goal-icon.svg'
import primaryStudents from '@/assets/primary-students.svg'
import secondaryStudents from '@/assets/secondary-students.svg'
import ifyIyoneStudents from '@/assets/ify-iyone-students.svg'
import newsImage from '@/assets/news-image.svg'
import integrityIcon from '@/assets/icons/integrityIcon.svg'
import disciplineIcon from '@/assets/icons/disciplineIcon.svg'
import faithIcon from '@/assets/icons/faithIcon.svg'
import loveIcon from '@/assets/icons/loveIcon.svg'
import confidenceIcon from '@/assets/icons/confidenceIcon.svg'
import respectIcon from '@/assets/icons/respectIcon.svg'
import initiativeIcon from '@/assets/icons/initiativeIcon.svg'
import diligenceIcon from '@/assets/icons/diligenceIcon.svg'
import teamWorkIcon from '@/assets/icons/teamWorkIcon.svg'
import excellenceIcon from '@/assets/icons/excellenceIcon.svg'
import NCUKIcon from '@/assets/NCUKIcon.svg'
import cambridgeIcon from '@/assets/cambridgeIcon.svg'
import cobisIcon from '@/assets/cobisIcon.svg'
import pearsonIcon from '@/assets/pearsonIcon.svg'
import privateEducatorsIcon from '@/assets/privateEducatorsIcon.svg'
import britishCouncilIcon from '@/assets/britishCouncilIcon.svg'
import AICENIcon from '@/assets/AICENIcon.svg'
</script>

<template>
  <main class="max-w-full">
    <!-- Hero Section -->
    <HeroSection />

    <section class="bg-[#F6F8FF]">
      <div class="max-w-[80%] mx-auto py-[20vh]">
        <p class="text-center text-xl/10 font-[300]">
          <strong>Brookstone School</strong> is an
          <strong>independent co-educational school</strong> with Christian ethos.
          <strong>Nursery & Primary School</strong> is a <strong>day school</strong> and was founded
          in <strong>2003</strong>. Our <strong>Secondary School</strong> was founded in
          <strong>2006</strong> as a <strong>full boarding</strong> school. Our Nursery, Primary,
          and Secondary Schools deliver a <strong>well rounded education</strong> combining the
          rigor of the <strong>national curriculum of the United Kingdom</strong> with appropriate
          features of the <strong>Nigerian curriculum</strong> to prepare students for global
          opportunities.<br />

          Our school's mission is to integrate
          <strong>academic, emotional, social, and physical development</strong> into every
          experience, fostering well-rounded individuals. Embedded in this
          <strong>holistic approach</strong> to the development of every child are soft skills such
          as initiative, teamwork and collaboration, resilience, leadership, and communication
          skills, etc.<br />

          Over the years, <strong>we have built strategic business alliances</strong> with various
          organizations around the globe. One of such relationships is
          <strong>our partnership with the Northern Consortium of UK universities (NCUK).</strong>
          In <strong>2014</strong>, Brookstone School, in <strong>partnership with NCUK</strong>,
          started the <strong>Brookstone International Foundation School in Port Harcourt</strong>.
          NCUK offers university pathways to <strong>over 60 leading universities</strong> in the
          UK, Australia, New Zealand, the USA, Canada, and more.<br />

          In <strong>2017</strong>, we opened the <strong>Abuja Campus</strong> of our
          <strong>International Foundation School</strong>, followed by the
          <strong>International Year One (IYONE)</strong> programme in <strong>2020</strong>.<br />

          We are also in <strong>partnerships with universities in Germany</strong> and recently
          started the <strong>Ontario Senior Secondary School Diploma (OSSD)</strong> to provide
          better opportunities for students
          <strong>seeking admission into Canadian universities</strong>.
        </p>
      </div>
    </section>

    <!-- Vision & Mission Section -->
    <section class="py-[12vh] mt-[7vh] bg-white">
      <h2 class="text-5xl font-bold text-gray-900 mb-[10vh] text-center">Our Vision and Mission</h2>

      <div class="max-w-[80%] mx-auto bg-[#F6F8FF] rounded-3xl">
        <div class="py-[7vh] md:py-[10vh] mx-auto max-w-3xl">
          <div class="flex flex-col md:flex-row items-center gap-5">
            <img :src="missionIcon" alt="Mission Icon" class="h-20 mb-4" />
            <div class="px-5">
              <h3 class="font-semibold text-3xl mb-2">Our Mission</h3>
              <p class="text-gray-600 max-w-xl text-lg">
                To be totally committed to academic excellence in a challenging and nurturing
                environment and groom productive citizens responsible for their future.
              </p>
            </div>
          </div>
          <div class="flex flex-col md:flex-row items-center gap-5 mt-[7vh]">
            <img :src="goalIcon" alt="Goals Icon" class="h-20 mb-4" />
            <div class="px-5">
              <h3 class="font-semibold text-3xl mb-2">Our Goals</h3>
              <p class="text-gray-600 max-w-xl text-lg">
                To build Academic Competence, Christian Character, and Self Confidence.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>

    <section class="bg-[#28156E] w-full">
      <div
        class="flex flex-col md:flex-row max-w-[80%] mx-auto py-[10vh] text-yellow-500 justify-between flex-wrap gap-10"
      >
        <div class="font-[600] text-7xl flex-1">
          <p>Our core</p>
          <p>Values</p>
        </div>
        <div class="flex gap-10 md:gap-20 flex-1 text-xl flex-wrap">
          <div>
            <div class="flex gap-5 mb-8">
              <img :src="integrityIcon" alt="integrity" class="" />
              <p>Integrity</p>
            </div>
            <div class="flex gap-5 mb-8">
              <img :src="disciplineIcon" alt="discipline" class="" />
              <p>Discipline</p>
            </div>
            <div class="flex gap-5 mb-8">
              <img :src="excellenceIcon" alt="excellence" class="" />
              <p>Excellence</p>
            </div>
            <div class="flex gap-5 mb-8">
              <img :src="faithIcon" alt="faith" class="" />
              <p>Faith in God</p>
            </div>
            <div class="flex gap-5 mb-8">
              <img :src="loveIcon" alt="love" class="" />
              <p>Love</p>
            </div>
          </div>

          <div>
            <div class="flex gap-5 mb-8">
              <img :src="confidenceIcon" alt="confidence" class="" />
              <p>Self Confidence</p>
            </div>
            <div class="flex gap-5 mb-8">
              <img :src="respectIcon" alt="respect" class="" />
              <p>Respect for Others</p>
            </div>
            <div class="flex gap-5 mb-8">
              <img :src="initiativeIcon" alt="initiative" class="" />
              <p>Initiative</p>
            </div>
            <div class="flex gap-5 mb-8">
              <img :src="diligenceIcon" alt="diligence" class="" />
              <p>Diligence</p>
            </div>
            <div class="flex gap-5 mb-8">
              <img :src="teamWorkIcon" alt="team work" class="" />
              <p>Team Work</p>
            </div>
          </div>
        </div>
      </div>
    </section>

    <section class="py-[5vh] bg-[#F7F4FF]">
      <h2 class="text-5xl font-bold text-gray-900 mb-[10vh] text-center mt-[10vh] text-[#28156E]">
        Our Partners
      </h2>
      <div class="flex gap-10 my-[10vh] max-w-[80%] mx-auto flex-wrap">
        <img :src="NCUKIcon" alt="NCUK" class="" />
        <img :src="cambridgeIcon" alt="cambridge" class="" />
        <img :src="cobisIcon" alt="COBIS" class="" />
        <img :src="pearsonIcon" alt="pearson" class="" />
        <img :src="privateEducatorsIcon" alt="private educators" class="" />
        <img :src="britishCouncilIcon" alt="british council" class="" />
        <img :src="AICENIcon" alt="AICEN" class="" />
      </div>
    </section>

    <!-- Primary / Secondary / IFY Sections -->
    <section class="grid grid-cols-1 md:grid-cols-2">
      <div class="bg-[#2B197A] text-white flex flex-col justify-center px-10 py-16">
        <h3 class="text-3xl font-bold mb-4">Primary</h3>
        <p class="mb-8 leading-relaxed">
          Brookstone Nursery & Primary School is an independent, co-educational School with
          Christian ethos founded in 2003. Our nursery and primary school are open to pupils between
          the ages of 15 months and 10 years old.
        </p>
        <a
          href="#"
          class="bg-yellow-400 text-[#2B197A] px-6 py-2 rounded-full font-semibold w-max hover:bg-yellow-500 transition"
        >
          GO TO WEBSITE
        </a>
      </div>
      <div>
        <img :src="primaryStudents" alt="Primary Students" class="w-full h-full object-cover" />
      </div>

      <div>
        <img :src="secondaryStudents" alt="Secondary Students" class="w-full h-full object-cover" />
      </div>
      <div class="bg-[#F9C942] text-[#2B197A] flex flex-col justify-center px-10 py-16">
        <h3 class="text-3xl font-bold mb-4">Secondary</h3>
        <p class="mb-8 leading-relaxed">
          Brookstone School Secondary is a co-educational boarding school, and we welcome students
          between the ages of 10 and 16 years old. Our programme provides personalised attention
          that allows every student to thrive.
        </p>
        <a
          href="#"
          class="bg-[#2B197A] text-white px-6 py-2 rounded-full font-semibold w-max hover:bg-[#1c1156] transition"
        >
          GO TO WEBSITE
        </a>
      </div>

      <div class="bg-[#2B197A] text-white flex flex-col justify-center px-10 py-16">
        <h3 class="text-3xl font-bold mb-4">IFY | IYONE</h3>
        <p class="mb-8 leading-relaxed">
          Brookstone International Foundation School is an independent, co-educational institution
          offering academically rigorous, stimulating, and challenging International Foundation Year
          (IFY) and International Year One (IYONE) programmes.
        </p>
        <a
          href="#"
          class="bg-yellow-400 text-[#2B197A] px-6 py-2 rounded-full font-semibold w-max hover:bg-yellow-500 transition"
        >
          GO TO WEBSITE
        </a>
      </div>
      <div>
        <img :src="ifyIyoneStudents" alt="IFY Students" class="w-full h-full object-cover" />
      </div>
    </section>

    <section class="py-[20vh] bg-white">
      <div class="max-w-7xl mx-auto px-6 text-center">
        <h2 class="text-3xl md:text-5xl font-bold text-gray-800 mb-4">Events & Activities</h2>
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
            <span
              class="inline-block bg-yellow-400 text-gray-900 text-xs font-semibold px-2 py-1 rounded mt-1"
            >
              Secondary School
            </span>
            <h3 class="mt-3 font-bold text-lg text-gray-900">
              Bachelor of Information Technology Major in Cyber Security
            </h3>
          </div>

          <div class="text-left">
            <img :src="newsImage" alt="Event 2" class="rounded-lg mb-4 w-full h-56 object-cover" />
            <p class="text-sm text-gray-400 uppercase tracking-wide">News - Jan 21, 2023</p>
            <span
              class="inline-block bg-yellow-400 text-gray-900 text-xs font-semibold px-2 py-1 rounded mt-1"
            >
              Primary School
            </span>
            <h3 class="mt-3 font-bold text-lg text-gray-900">
              Bachelor of Information Technology Major in Cyber Security
            </h3>
          </div>

          <div class="text-left">
            <img :src="newsImage" alt="Event 3" class="rounded-lg mb-4 w-full h-56 object-cover" />
            <p class="text-sm text-gray-400 uppercase tracking-wide">Events - Jan 01, 2023</p>
            <span
              class="inline-block bg-yellow-400 text-gray-900 text-xs font-semibold px-2 py-1 rounded mt-1"
            >
              IFY ONE
            </span>
            <h3 class="mt-3 font-bold text-lg text-gray-900">
              Bachelor of Information Technology Major in Cyber Security
            </h3>
          </div>
        </div>
      </div>
    </section>

    <FooterSection />
  </main>
</template>
