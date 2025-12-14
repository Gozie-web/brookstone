<script setup>
import Navbar from '@/components/secondary/Navbar.vue'
import FooterSection from '@/components/secondary/FooterSection.vue'
import NewsHero from '@/components/NewsHero.vue'
import NewsHeroImage from '@/assets/secondary/NewsHeroImage.svg'
</script>

<template>
  <div>
    <Navbar />
    <NewsHero
      date="September 16th, 2025"
      :background="NewsHeroImage"
      title="Literary & Debate Competition"
      summary="Students engage in debates, spelling bees, and poetry recitations"
    />

    <section>
      <div class="max-w-[80%] mx-auto">
        <div class="my-[10vh]">
          <p class="text-5xl font-[600]">Upcoming Events</p>
        </div>

        <div class="flex items-center justify-between gap-8 mb-12">
          <button @click="prevMonth" class="p-3 rounded-full hover:bg-gray-200 transition">
            <span class="text-2xl">←</span>
          </button>

          <div class="w-full flex items-center justify-between gap-6 overflow-scroll">
            <button
              v-for="m in months"
              :key="m.key"
              @click="activeMonth = m.key"
              class="text-xl font-bold transition"
              :class="
                activeMonth === m.key
                  ? 'text-yellow-500 border-2 border-yellow-500 px-4 py-2 rounded-xl'
                  : 'text-gray-700 hover:text-gray-900'
              "
            >
              {{ m.label }}
            </button>
          </div>

          <button @click="nextMonth" class="p-3 rounded-full hover:bg-gray-200 transition">
            <span class="text-2xl">→</span>
          </button>
        </div>
      </div>

      <div class="bg-gray-100">
        <div
          class="max-w-[80%] mx-auto py-[10vh] grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10"
        >
          <div
            v-for="(e, i) in filteredEvents"
            :key="i"
            class="bg-white rounded-2xl shadow-md overflow-hidden"
          >
            <img v-if="e.image" :src="e.image" class="w-full h-[25vh] object-cover rounded-2xl" />

            <div
              v-else
              class="w-full h-[25vh] bg-gradient-to-br from-gray-100 to-gray-400 flex items-center justify-center text-white text-5xl font-semibold"
            >
              Event
            </div>

            <div class="p-6">
              <div class="flex gap-5 align-center">
                <div class="text-white text-center w-[55px] h-auto py-2 text-sm font-medium mb-3">
                  <div class="bg-[#1A237E] rounded-lg py-2">
                    <div class="mt-1 text-xs text-yellow-600">{{ activeMonth }}</div>
                    <div class="mt-1">{{ e.date }}</div>
                  </div>
                </div>

                <div>
                  <h3 class="font-semibold text-medium text-[#1A237E] mb-2">
                    {{ e.title }}
                  </h3>

                  <p class="text-gray-600 text-[11px] leading-relaxed mb-5">
                    {{ e.description }}
                  </p>
                </div>
              </div>

              <div class="flex justify-end">
                <router-link
                  to="/secondary/news/details"
                  class="bg-[#F5B900] text-white text-[10px] font-medium px-4 py-2 rounded-lg hover:bg-[#e0a700] transition"
                >
                  Read More
                </router-link>
              </div>
            </div>
          </div>

          <div
            v-for="i in 3 - filteredEvents.length"
            :key="'placeholder-' + i"
            v-if="filteredEvents.length < 3"
            class="bg-white rounded-2xl shadow-md overflow-hidden"
          >
            <div
              class="w-full h-40 bg-gradient-to-br from-gray-200 to-gray-400 flex items-center justify-center text-white text-2xl font-semibold"
            >
              Event
            </div>
            <div class="p-6 text-center text-gray-400">Coming Soon</div>
          </div>
        </div>
      </div>
    </section>

    <FooterSection />
  </div>
</template>

<script>
import { ref, computed } from 'vue'

const months = [
  { key: 'Jan', label: 'Jan' },
  { key: 'Feb', label: 'Feb' },
  { key: 'Mar', label: 'Mar' },
  { key: 'Apr', label: 'Apr' },
  { key: 'May', label: 'May' },
  { key: 'Jun', label: 'Jun' },
  { key: 'July', label: 'July' },
  { key: 'Aug', label: 'Aug' },
  { key: 'Sep', label: 'Sep' },
  { key: 'Oct', label: 'Oct' },
  { key: 'Nov', label: 'Nov' },
  { key: 'Dec', label: 'Dec' },
]

const activeMonth = ref('Nov')

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
    image: 'https://images.unsplash.com/photo-1522199710521-72d69614c702',
  },
  {
    month: 'Nov',
    date: '28',
    title: 'Science & Innovation Fair',
    description: 'Students showcase creative projects, experiments, and innovations.',
    image: 'https://images.unsplash.com/photo-1525182008055-f88b95ff7980',
  },
  {
    month: 'Nov',
    date: '30',
    title: 'Inter-House Sports Festival',
    description: 'Track, field, and team competitions.',
    image: null,
  },
])

const filteredEvents = computed(() => events.value.filter((e) => e.month === activeMonth.value))

function prevMonth() {
  const index = months.findIndex((m) => m.key === activeMonth.value)
  activeMonth.value = months[(index - 1 + months.length) % months.length].key
}

function nextMonth() {
  const index = months.findIndex((m) => m.key === activeMonth.value)
  activeMonth.value = months[(index + 1) % months.length].key
}
</script>
