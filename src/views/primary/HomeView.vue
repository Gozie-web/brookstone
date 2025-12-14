<script setup>
import { ref, onMounted, onBeforeUnmount } from 'vue'
import NavBar from '@/components/primary/Navbar.vue'
import FooterSection from '@/components/primary/FooterSection.vue'
import heroImage1 from '@/assets/primary/heroImage1.svg'
import heroImage2 from '@/assets/primary/heroImage2.svg'
import studentTestimonial1 from '@/assets/primary/studentTestimonial1.svg'
import quotes from '@/assets/icons/quotes.svg'

const slides = ref([heroImage1, heroImage2])
const currentIndex = ref(0)
let interval = null

const nextSlide = () => {
  currentIndex.value = (currentIndex.value + 1) % slides.value.length
}

onMounted(() => {
  interval = setInterval(nextSlide, 4000)
})

onBeforeUnmount(() => {
  clearInterval(interval)
})

const testimonials = ref([
  {
    img: studentTestimonial1,
    text: `For eight and a half years, Brookstone has been my powerhouse, motivation, friend, and family. 
    I have learnt how to be a better person and how to get along with others. Thank you for watching me grow. 
    Through all this time, I have learnt many things. Aside from Numeracy, Literacy, and Science, I learnt how to rhyme. 
    I have come to realize that wherever life takes me, Brookstone shall always be my home.`,
    name: 'Oluwatobiloba Salami',
    role: 'Ex-Student',
  },
  {
    img: studentTestimonial1,
    text: `For eight and a half years, Brookstone has been my powerhouse, motivation, friend, and family. 
    I have learnt how to be a better person and how to get along with others. Thank you for watching me grow. 
    Through all this time, I have learnt many things. Aside from Numeracy, Literacy, and Science, I learnt how to rhyme. 
    I have come to realize that wherever life takes me, Brookstone shall always be my home.`,
    name: 'John Doe',
    role: 'Ex-Student',
  },
  {
    img: studentTestimonial1,
    text: `For eight and a half years, Brookstone has been my powerhouse, motivation, friend, and family. 
    I have learnt how to be a better person and how to get along with others. Thank you for watching me grow. 
    Through all this time, I have learnt many things. Aside from Numeracy, Literacy, and Science, I learnt how to rhyme. 
    I have come to realize that wherever life takes me, Brookstone shall always be my home.`,
    name: 'Ciroma Chukwuma Adekunle',
    role: 'Ex-Student',
  },
])

const current = ref(0)
let autoplayInterval = null

const next = () => {
  current.value = (current.value + 1) % testimonials.value.length
}

const prev = () => {
  current.value = (current.value - 1 + testimonials.value.length) % testimonials.value.length
}

onMounted(() => {
  autoplayInterval = setInterval(next, 5000) // Change slide every 5 seconds
})

onBeforeUnmount(() => {
  clearInterval(autoplayInterval)
})
</script>

<template>
  <main>
    <NavBar />

    <section class="relative h-[80vh] overflow-hidden text-white">
      <div class="absolute inset-0">
        <div
          v-for="(slide, index) in slides"
          :key="index"
          class="absolute inset-0 bg-cover bg-center transition-opacity duration-1000 ease-in-out"
          :style="{ backgroundImage: `url(${slide})` }"
          :class="index === currentIndex ? 'opacity-100 z-10' : 'opacity-0 z-0'"
        ></div>

        <div class="absolute inset-0 bg-[#2b197a]/60 z-20"></div>
      </div>

      <div
        class="relative z-30 flex flex-col justify-center items-center text-center h-full px-6 max-w-5xl mx-auto"
      >
        <h1 class="text-4xl md:text-6xl font-extrabold mb-6">Welcome to Brookstone Schools</h1>

        <p class="text-lg md:text-xl leading-relaxed mb-10 text-gray-200">(Nursery and Primary)</p>

        <p class="text-lg md:text-xl leading-relaxed mb-10 text-gray-200">
          Nuturing young minds and developing future leaders
        </p>
      </div>
    </section>

    <!-- Welcome Section -->
    <section class="bg-[#f9fafc] pt-[15vh] pb-[20vh] text-center px-6">
      <h1 class="text-3xl md:text-5xl font-bold mb-4">Welcome to</h1>
      <h1 class="text-3xl md:text-5xl text-yellow-500 font-bold mb-[10vh]">
        Brookstone School (Nursery & Primary)
      </h1>

      <p class="max-w-4xl mx-auto text-gray-900 text-[22px] font-thin leading-relaxed mb-10">
        <strong>Brookstone School (Nursery and Primary)</strong>, founded in <strong>2003</strong>,
        provides a <strong>safe, stimulating, and inclusive environment</strong> for children aged
        <strong>15 months to 10 years</strong>.
      </p>
      <p class="max-w-4xl mx-auto text-gray-900 text-[22px] font-thin leading-relaxed mb-10">
        Children's educational journey begins in the
        <strong>homely and friendly environment</strong> of our Early Years, where pupils progress
        to <strong>Key Stages One and Two</strong> to complete their Primary Education journey.
      </p>

      <div class="flex flex-col md:flex-row justify-center gap-20 mt-[10vh]">
        <img
          :src="heroImage2"
          alt="Brookstone School"
          class="rounded-lg shadow-md w-full md:w-1/4 border-[5px] border-yellow-500"
        />
        <img
          :src="heroImage1"
          alt="Brookstone Playground"
          class="rounded-lg shadow-md w-full md:w-1/4 border-[5px] border-yellow-500"
        />
      </div>
    </section>

    <!-- Why Choose Section -->
    <section class="flex flex-col md:flex-row">
      <div class="md:w-1/2">
        <img :src="heroImage2" alt="School Building" class="w-full h-full object-cover" />
      </div>

      <div class="md:w-1/2 bg-[#2b197a] text-white flex flex-col justify-center p-10 md:p-20">
        <h2 class="text-3xl md:text-4xl font-bold mb-8">
          Why Choose Brookstone School (Nursery & Primary)?
        </h2>

        <ul class="space-y-6">
          <li>
            <div class="flex items-start">
              <div class="text-yellow-400 text-2xl mr-4">•</div>
              <div>
                <h3 class="font-semibold text-xl mb-1">Academic Excellence</h3>
                <p class="text-gray-300">
                  Our curriculum combines the best of Nigerian and international education standards
                  to provide a comprehensive learning experience.
                </p>
              </div>
            </div>
          </li>

          <li>
            <div class="flex items-start">
              <div class="text-yellow-400 text-2xl mr-4">•</div>
              <div>
                <h3 class="font-semibold text-xl mb-1">Experienced Teachers</h3>
                <p class="text-gray-300">
                  Our highly qualified and dedicated teachers are committed to bringing out the best
                  in every child through personalised attention.
                </p>
              </div>
            </div>
          </li>

          <li>
            <div class="flex items-start">
              <div class="text-yellow-400 text-2xl mr-4">•</div>
              <div>
                <h3 class="font-semibold text-xl mb-1">Modern Facilities</h3>
                <p class="text-gray-300">
                  From state-of-the-art classrooms to modern sports facilities, we provide an
                  environment that fosters learning and growth.
                </p>
              </div>
            </div>
          </li>
        </ul>
      </div>
    </section>

    <!-- Testimonials Section -->
    <section class="mt-[30vh] mb-[20vh] px-6 flex justify-center">
      <div
        class="relative bg-[#F0B100] rounded-3xl max-w-6xl w-full flex flex-col md:flex-row p-10 md:p-14"
        @mouseenter="clearInterval(autoplayInterval)"
        @mouseleave="autoplayInterval = setInterval(next, 5000)"
      >
        <!-- Left Arrow -->
        <button
          @click="prev"
          class="absolute left-[-25px] top-1/2 -translate-y-1/2 bg-[#F0B100] w-12 h-12 rounded-full flex items-center justify-center text-[#2b197a] text-2xl shadow-md"
        >
          ←
        </button>

        <!-- Image -->
        <div class="md:w-1/3 flex justify-center items-start">
          <div class="relative">
            <img
              :src="testimonials[current].img"
              alt="Student"
              class="rounded-xl w-48 h-60 object-cover"
            />
            <div
              class="absolute -top-4 -right-4 bg-[#2b197a] text-white text-3xl rounded-full w-10 h-10 flex items-center justify-center"
            >
              <img :src="quotes" alt="''" class="" />
            </div>
          </div>
        </div>

        <!-- Text Content -->
        <div class="md:w-2/3 mt-8 md:mt-0 md:pl-10 text-left">
          <h2 class="text-3xl font-bold text-center md:text-left mb-6 text-white">
            What Our Students Say
          </h2>

          <p class="text-black text-md leading-relaxed mb-6">
            {{ testimonials[current].text }}
          </p>

          <p class="font-semibold text-[#2b197a] text-lg">
            {{ testimonials[current].name }}
          </p>
          <p class="text-gray-700 -mt-1">
            {{ testimonials[current].role }}
          </p>

          <!-- Pagination Dots -->
          <div class="flex space-x-2 mt-6">
            <span
              v-for="(t, i) in testimonials"
              :key="i"
              @click="current = i"
              class="w-3 h-3 rounded-full cursor-pointer transition-all"
              :class="i === current ? 'bg-[#2b197a] scale-125' : 'bg-white/80'"
            ></span>
          </div>
        </div>

        <!-- Right Arrow -->
        <button
          @click="next"
          class="absolute right-[-25px] top-1/2 -translate-y-1/2 bg-[#F0B100] w-12 h-12 rounded-full flex items-center justify-center text-[#2b197a] text-2xl shadow-md"
        >
          →
        </button>
      </div>
    </section>

    <!-- Footer -->
    <FooterSection />
  </main>
</template>

<style scoped>
/* Smooth transition on slide change */
.slide-enter-active,
.slide-leave-active {
  transition: opacity 0.6s ease;
}

.slide-enter-from,
.slide-leave-to {
  opacity: 0;
}

img,
p {
  transition: opacity 0.6s ease;
}
</style>
