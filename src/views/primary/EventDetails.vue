<script setup>
import { ref } from 'vue'
import Navbar from '@/components/primary/Navbar.vue'
import FooterSection from '@/components/primary/FooterSection.vue'
import NewsHeroImage from '@/assets/secondary/NewsHeroImage.svg'
</script>

<template>
  <main class="bg-[#F6F8FF]">
    <Navbar />

    <section
      class="container mx-auto my-10 relative h-[70vh] flex items-end text-white"
      :style="{
        backgroundImage: `url(${NewsHeroImage})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
      }"
    ></section>

    <section class="mt-5 mb-20 max-w-[90%] mx-auto flex gap-10 md:gap-20 flex-wrap">
      <div class="flex-1 min-w-[300px]">
        <p class="text-gray-500">Events <span class="text-[#28156E]">/ Details</span></p>

        <div class="flex flex-wrap gap-10 mt-5">
          <div>
            <p class="text-yellow-500 mt-5 font-[600]">{{ newsDetail.date }}</p>
            <p class="text-[#28156E] mt-2 text-2xl font-[600]">{{ newsDetail.title }}</p>
            <p class="mt-5 font-[300] whitespace-pre-line">{{ newsDetail.details }}</p>
          </div>
        </div>
      </div>

      <div class="min-w-[300px]">
        <div class="bg-white shadow-md">
          <p class="text-[#28156E] px-5 py-2 font-[600]">Latest Events</p>
        </div>

        <div
          v-for="(e, i) in events"
          :key="i"
          class="bg-white rounded-lg shadow-md overflow-hidden mt-5"
        >
          <img v-if="e.image" :src="e.image" class="w-full h-[20vh] object-cover rounded-lg" />

          <div
            v-else
            class="w-full h-[20vh] bg-gradient-to-br from-gray-100 to-gray-400 flex items-center justify-center text-white text-5xl font-semibold"
          >
            Event
          </div>

          <!-- CONTENT -->
          <div class="p-2 mt-5">
            <div class="flex gap-3">
              <div class="text-white text-center w-[55px] h-auto py-1 text-sm font-medium mb-3">
                <div class="bg-[#1A237E] rounded-sm">
                  <div class="mt-1 text-[10px] text-yellow-600">{{ e.month }}</div>
                  <div class="text-[10px]">{{ e.date }}</div>
                </div>
              </div>

              <div>
                <h3 class="font-semibold text-sm text-[#1A237E] mb-2">
                  {{ e.title }}
                </h3>

                <p class="text-gray-600 text-[11px] leading-relaxed mb-5">
                  {{ e.description }}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <FooterSection />
  </main>
</template>

<script>
const newsDetail = ref({
  date: 'September 15, 2025',
  title: 'Literary & Debate Competition',
  details: `At Brookstone School, we believe in nurturing not only academic excellence but also the power of expression, confidence, and critical thinking. The Literary & Debate Competition is one of the most anticipated events in our annual calendar, designed to provide students with a platform to showcase their intellectual abilities, creativity, and communication skills.
      The competition brings together students from different classes and houses to participate in a variety of activities that include debates, public speaking, spelling bees, essay writing, storytelling, poetry recitations, and drama performances. Each category is carefully planned to engage students of all age groups, ensuring that every participant has the opportunity to shine in an area that best matches their talents.
    
      Debate Segment
    
      The debate sessions are often the highlight of the event. Students are divided into teams and given thought-provoking topics that encourage them to research, analyze, and present their arguments with clarity and conviction. Topics typically range from current global issues to social and cultural themes, helping students broaden their perspectives and develop informed opinions. This not only builds confidence but also sharpens their critical thinking and public speaking skills, which are vital tools for their future academic and professional lives.
    
      Literary Activities
    
      Alongside debates, the literary segment allows students to immerse themselves in the art of words and storytelling. Through poetry, short stories, and essay writing, students express their creativity, imagination, and command of language. Poetry recitations and spoken word sessions often leave the audience inspired, as participants share heartfelt reflections on themes such as leadership, friendship, culture, and personal growth. These activities encourage students to cultivate a love for literature while enhancing their writing and presentation abilities.
    
      Spelling Bee & Reading Challenges
    
      The spelling bee is another favorite among both participants and spectators. Students compete in rounds of increasing difficulty, testing their knowledge of words, spelling accuracy, and composure under pressure. Reading challenges and comprehension tests also form part of the event, reinforcing the school's commitment to strong literacy foundations.
    
      Awards & Recognition
    
      At the end of the competition, winners are honored with certificates, medals, and trophies. Beyond the awards, however, the true value of the Literary & Debate Competition lies in the confidence gained, friendships strengthened, and lessons learned by all participants. Every student leaves with improved communication skills, enhanced creativity, and the motivation to aim higher in future challenges.
    
      Conclusion
      
      The Literary & Debate Competition is more than an event; it is a celebration of knowledge, creativity, and the power of voice. It reflects Brookstone's commitment to developing well-rounded individuals who can think critically, communicate effectively, and contribute meaningfully to society.`,
})

const events = ref([
  {
    month: 'Nov',
    date: '16',
    title: 'Literary & Debate Competition',
    description: 'Students engage in debates, spelling bees, and poetry recitations.',
    image: 'https://images.unsplash.com/photo-1522199710521-72d69614c702',
  },
  {
    month: 'Nov',
    date: '22',
    title: 'Graduation & Prize Giving Day',
    description: 'Honoring graduating students and academic excellence.',
    image: null,
  },
  {
    month: 'Nov',
    date: '28',
    title: 'Science & Innovation Fair',
    description: 'Students showcase creative projects, experiments, and innovations.',
    image: 'https://images.unsplash.com/photo-1525182008055-f88b95ff7980',
  },
])
</script>
