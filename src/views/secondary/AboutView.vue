<script setup>
import Navbar from '@/components/secondary/Navbar.vue'
import PageBanner from '@/components/secondary/PageBanner.vue'
import PageBannerImage from '@/assets/secondary/heroImage.svg'
import FooterSection from '@/components/secondary/FooterSection.vue'
import aboutImage from '@/assets/secondary/aboutImage.svg'
import programImage from '@/assets/secondary/programImage.svg'
import moreInfoBackground from '@/assets/secondary/moreInfoBackground.svg'
import staffBackground from '@/assets/secondary/staffBackground.svg'
import sadiku from '@/assets/secondary/sadiku.svg'
import dokubo from '@/assets/secondary/dokubo.svg'
import cyprian from '@/assets/secondary/cyprian.svg'
import kingsley from '@/assets/secondary/kingsley.svg'
import mary from '@/assets/secondary/mary.svg'
import patrick from '@/assets/secondary/patrick.svg'
</script>

<template>
  <div>
    <Navbar />

    <PageBanner title="Brookstone School (Secondary)" :background="PageBannerImage" />

    <section class="py-16 bg-[#f7f8fc]">
      <div class="max-w-[80%] mx-auto">
        <div class="grid md:grid-cols-2 gap-12 items-center">
          <div class="">
            <img
              :src="aboutImage"
              alt="Brookstone School Campus"
              class="w-full h-[90vh] object-cover rounded-3xl z-10"
            />
          </div>

          <div class="space-y-6">
            <p class="text-xl/10 text-gray-700 mt-4 font-base">
              <strong>Brookstone School (Secondary) is an </strong>
              <strong>Independent, co-educational school </strong> with a
              <strong>Christian ethos, </strong> founded in <strong>2006</strong> as a
              <strong>full boarding school. </strong> We are
              <strong>committed to delivering world-class education </strong> that equips students
              for <strong>success in higher education and beyond. </strong> We are passionate about
              <strong>cultivating accademic excellence, instilling Christian values, </strong> and
              <strong>fostering the diligence </strong> needed to thrive in an ever-changing world.
            </p>

            <p class="text-xl/10 text-gray-700 mt-4 font-base">
              Our <strong>Secondary School </strong> is locatedon an
              <strong>expensive campus</strong> at <strong>Igwuruta, </strong> a
              <strong>serene suburb of Port Harcourt, </strong> the
              <strong>capital of Rivers State. </strong> We provide a
              <strong>safe, serene, and intelectually stimulating environment </strong> for students
              aged <strong>10 to 16 years.</strong>
            </p>

            <p class="text-xl/10 text-gray-700 mt-4 font-base">
              Through a
              <strong
                >rich blend of rigorous academics, character development, and extracurricular
                engagement,
              </strong>
              we prepare our students to grow into
              <strong>confident, responsble, and globally minded leaders</strong>
            </p>
          </div>
        </div>
      </div>
    </section>

    <section class="bg-[#f7f8fc]">
      <div class="pt-[15vh]">
        <img
          :src="programImage"
          alt="Brookstone School Campus"
          class="w-full h-[70vh] object-cover"
        />
      </div>
    </section>

    <section>
      <div
        class="w-full bg-cover bg-center"
        :style="{
          backgroundImage: `url(${moreInfoBackground})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }"
      >
        <div class="py-[10vh]">
          <div class="container mx-auto">
            <p class="text-center text-5xl/[8vh] max-w-[75%] mx-auto">Our Accademic Programmes</p>
          </div>

          <div class="my-[10vh] flex items-center flex-col md:flex-row gap-20 max-w-[80%] mx-auto">
            <div class="w-full md:w-1/2 bg-white">
              <div class="space-y-6 text-2xl m-10">
                <p class="text-2xl">Junior Secondary (Years 7-9)</p>
                <p class="text-lg text-gray-700 font-light">
                  Our Junior Secondary programme provides a comprehensive and engaging curriculum
                  that nurtures intelectual curiosity. creativity and critical thinking. Students
                  build a strong academic foundation while developing the confidence and skills
                  needed for future success.
                </p>
              </div>
            </div>

            <div class="w-full md:w-1/2 bg-white">
              <div class="space-y-6 text-2xl m-10">
                <p class="text-2xl">Senior Secondary (Years 10-12)</p>
                <p class="text-lg text-gray-700 font-light">
                  Our Senior Secondary programme offers a rigorous curriculum designed to challenge
                  students, foster independence, and prepare them for higher education and life
                  beyond school. Through a blend of Nigerian and British curricula, students are
                  equipped to excel in both national and international examinations.
                </p>
              </div>
            </div>
          </div>

          <div class="my-[10vh] max-w-[80%] mx-auto bg-[#291969]">
            <div class="text-2xl p-10">
              <p class="text-2xl text-yellow-600">Extracurricular Activities</p>

              <div class="text-white mt-6 text-lg font-light">
                <p>
                  At Brookstone Secondary School, we believe education extends beyond the classroom.
                  Our wide range of extracurricular and co-curricular activities helps students
                  discover their passions, develop new talents, and grow into well-rounded
                  individuals.
                </p>

                <div class="mt-10">
                  <p class="font-bold">Extracurricular:</p>
                  <ul class="list-disc list-inside mt-5">
                    <li>
                      Sports: Soccer, basketball, volleyball, tennis, swimming, board games, and
                      more.
                    </li>
                    <li>
                      Clubs: Coding, debate, drama, music, art, and other interest-based clubs.
                    </li>
                  </ul>
                </div>

                <div class="mt-10">
                  <p class="font-bold">Co-curricular:</p>
                  <ul class="list-disc list-inside mt-5">
                    <li>
                      Community Service: Volunteer projects, charity events, and environmental
                      initiatives.
                    </li>
                    <li>
                      Leadership Opportunities: Student council, prefectship, and other leadership
                      roles.
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <section>
      <div class="bg-[#f7f8fc] pt-[12vh] pb-[8vh]">
        <div class="max-w-[90%] md:max-w-[80%] mx-auto text-center">
          <p class="text-2xl md:text-4xl">Our Journey:</p>
          <p class="text-3xl md:text-5xl text-yellow-500 mt-2">
            A Timeline of Growth &amp; Excellence
          </p>
        </div>
      </div>

      <div class="bg-[#291969] py-10 h-[115vh] overflow-y-scroll">
        <div class="relative max-w-3xl md:max-w-5xl mx-auto px-4">
          <div
            class="invisible md:visible absolute -top-10 left-1/2 -translate-x-1/2 w-[2px] h-[102%] bg-white/20 pointer-events-none"
          ></div>

          <div class="flex flex-col">
            <div class="flex justify-between pb-[15vh] md:h-[40vh] md:pb-0">
              <div class="hidden md:flex flex-1 pr-6 w-full justify-end">
                <div class="text-gray-300 text-3xl md:text-5xl px-4 md:px-6 font-base">2006</div>
              </div>

              <div
                class="invisible md:visible w-3 h-3 bg-gray-300 rounded-full sticky md:top-0"
              ></div>

              <div class="w-full md:w-auto md:pl-6 pr-5 md:pr-0 flex-1">
                <div class="flex md:hidden mb-3">
                  <span class="text-gray-300 text-2xl font-medium">2006</span>
                </div>

                <div
                  class="text-gray-300 p-5 md:p-10 rounded-xl border-[2px] md:border-[3px] border-blue-400 text-sm md:text-base leading-relaxed"
                >
                  Brookstone Secondary Schhol was founded, welcoming its first set of students in
                  September
                </div>
              </div>
            </div>

            <div class="flex justify-between pb-[15vh] md:h-[40vh] md:pb-0">
              <div class="w-full md:w-auto md:pr-6 pl-5 md:pl-0 flex-1">
                <div class="flex md:hidden mb-3">
                  <span class="text-gray-300 text-2xl font-medium">2009</span>
                </div>

                <div
                  class="text-gray-300 p-5 md:p-10 rounded-xl border-[2px] md:border-[3px] border-yellow-600 text-sm md:text-base leading-relaxed"
                >
                  Accredited by the British Council to coduct Cambridge Checkpoint and IGCSE
                  examinations. Also approved as a center for WASSCE and BECE.
                </div>
              </div>

              <div
                class="invisible md:visible w-3 h-3 bg-gray-300 rounded-full sticky md:top-0"
              ></div>

              <div class="hidden md:flex flex-1 pr-6 w-full">
                <div class="text-gray-300 text-3xl md:text-5xl px-4 md:px-6 font-base">2009</div>
              </div>
            </div>

            <div class="flex justify-between pb-[15vh] md:h-[40vh] md:pb-0">
              <div class="hidden md:flex flex-1 pr-6 w-full justify-end">
                <div class="text-gray-300 text-3xl md:text-5xl px-4 md:px-6 font-base">2011</div>
              </div>

              <div
                class="invisible md:visible w-3 h-3 bg-gray-300 rounded-full sticky md:top-0"
              ></div>

              <div class="w-full md:w-auto md:pl-6 pr-5 md:pr-0 flex-1">
                <div class="flex md:hidden mb-3">
                  <span class="text-gray-300 text-2xl font-medium">2011</span>
                </div>

                <div
                  class="text-gray-300 p-5 md:p-10 rounded-xl border-[2px] md:border-[3px] border-green-400 text-sm md:text-base leading-relaxed"
                >
                  <strong>Pioneer Success:</strong> Our first graduating class achieved a 100%
                  transition into university.
                </div>
              </div>
            </div>

            <div class="flex justify-between pb-[15vh] md:h-[40vh] md:pb-0">
              <div class="w-full md:w-auto md:pr-6 pl-5 md:pl-0 flex-1">
                <div class="flex md:hidden mb-3">
                  <span class="text-gray-300 text-2xl font-medium">2012</span>
                </div>

                <div
                  class="text-gray-300 p-5 md:p-10 rounded-xl border-[2px] md:border-[3px] border-red-600 text-sm md:text-base leading-relaxed"
                >
                  Awarded British International School of the Year by Finance for Independent
                  Schools Magazine (Birmingham, England), in recognition of excellence in strategic
                  planning, student achievement, educational partnerships, and vision realization.
                </div>
              </div>

              <div
                class="invisible md:visible w-3 h-3 bg-gray-300 rounded-full sticky md:top-0"
              ></div>

              <div class="hidden md:flex flex-1 pr-6 w-full">
                <div class="text-gray-300 text-3xl md:text-5xl px-4 md:px-6 font-base">2012</div>
              </div>
            </div>

            <div class="flex justify-between pb-[15vh] md:h-[40vh] md:pb-0">
              <div class="hidden md:flex flex-1 pr-6 w-full justify-end">
                <div class="text-gray-300 text-3xl md:text-5xl px-4 md:px-6 font-base">2014</div>
              </div>

              <div
                class="invisible md:visible w-3 h-3 bg-gray-300 rounded-full sticky md:top-0"
              ></div>

              <div class="w-full md:w-auto md:pl-6 pr-5 md:pr-0 flex-1">
                <div class="flex md:hidden mb-3">
                  <span class="text-gray-300 text-2xl font-medium">2014</span>
                </div>

                <div
                  class="text-gray-300 p-5 md:p-10 rounded-xl border-[2px] md:border-[3px] border-yellow-600 text-sm md:text-base leading-relaxed"
                >
                  In partnership with NCUK, launched the International Foundation Year (IFY)
                  programme in Port Harcourt, offering guaranteed admission into degree programmes
                  at partner universities in the UK, Canada, USA, Australia, and New Zealand.
                </div>
              </div>
            </div>

            <div class="flex justify-between pb-[15vh] md:h-[40vh] md:pb-0">
              <div class="w-full md:w-auto md:pr-6 pl-5 md:pl-0 flex-1">
                <div class="flex md:hidden mb-3">
                  <span class="text-gray-300 text-2xl font-medium">2016</span>
                </div>

                <div
                  class="text-gray-300 p-5 md:p-10 rounded-xl border-[2px] md:border-[3px] border-gray-500 text-sm md:text-base leading-relaxed"
                >
                  Celebrated 10 years of academic excellence and continuous improvement. One of our
                  students won Best in Nigeria Award in English as a Second Language.
                </div>
              </div>

              <div
                class="invisible md:visible w-3 h-3 bg-gray-300 rounded-full sticky md:top-0"
              ></div>

              <div class="hidden md:flex flex-1 pr-6 w-full">
                <div class="text-gray-300 text-3xl md:text-5xl px-4 md:px-6 font-base">2016</div>
              </div>
            </div>

            <div class="flex justify-between pb-[15vh] md:h-[40vh] md:pb-0">
              <div class="hidden md:flex flex-1 pr-6 w-full justify-end">
                <div class="text-gray-300 text-3xl md:text-5xl px-4 md:px-6 font-base">2017</div>
              </div>

              <div
                class="invisible md:visible w-3 h-3 bg-gray-300 rounded-full sticky md:top-0"
              ></div>

              <div class="w-full md:w-auto md:pl-6 pr-5 md:pr-0 flex-1">
                <div class="flex md:hidden mb-3">
                  <span class="text-gray-300 text-2xl font-medium">2017</span>
                </div>

                <div
                  class="text-gray-300 p-5 md:p-10 rounded-xl border-[2px] md:border-[3px] border-purple-600 text-sm md:text-base leading-relaxed"
                >
                  Established the International Foundation Year (IFY) programme in Abuja.
                </div>
              </div>
            </div>

            <div class="flex justify-between pb-[15vh] md:h-[40vh] md:pb-0">
              <div class="w-full md:w-auto md:pr-6 pl-5 md:pl-0 flex-1">
                <div class="flex md:hidden mb-3">
                  <span class="text-gray-300 text-2xl font-medium">2019</span>
                </div>

                <div
                  class="text-gray-300 p-5 md:p-10 rounded-xl border-[2px] md:border-[3px] border-yellow-300 text-sm md:text-base leading-relaxed"
                >
                  Brookstone School (Secondary) students won Top in the World Award in English as a
                  Second Language.
                </div>
              </div>

              <div
                class="invisible md:visible w-3 h-3 bg-gray-300 rounded-full sticky md:top-0"
              ></div>

              <div class="hidden md:flex flex-1 pr-6 w-full">
                <div class="text-gray-300 text-3xl md:text-5xl px-4 md:px-6 font-base">2019</div>
              </div>
            </div>

            <div class="flex justify-between pb-[15vh] md:h-[40vh] md:pb-0">
              <div class="hidden md:flex flex-1 pr-6 w-full justify-end">
                <div class="text-gray-300 text-3xl md:text-5xl px-4 md:px-6 font-base">2020</div>
              </div>

              <div
                class="invisible md:visible w-3 h-3 bg-gray-300 rounded-full sticky md:top-0"
              ></div>

              <div class="w-full md:w-auto md:pl-6 pr-5 md:pr-0 flex-1">
                <div class="flex md:hidden mb-3">
                  <span class="text-gray-300 text-2xl font-medium">2020</span>
                </div>

                <div
                  class="text-gray-300 p-5 md:p-10 rounded-xl border-[2px] md:border-[3px] border-pink-600 text-sm md:text-base leading-relaxed"
                >
                  Another student won Best in Nigeria Award in Mathematics.
                </div>
              </div>
            </div>

            <div class="flex justify-between pb-[15vh] md:h-[40vh] md:pb-0">
              <div class="w-full md:w-auto md:pr-6 pl-5 md:pl-0 flex-1">
                <div class="flex md:hidden mb-3">
                  <span class="text-gray-300 text-2xl font-medium">2023</span>
                </div>

                <div
                  class="text-gray-300 p-5 md:p-10 rounded-xl border-[2px] md:border-[3px] border-[#8383FE] text-sm md:text-base leading-relaxed"
                >
                  Two of our Students won Top in the World Awards in English as a Second Language.
                </div>
              </div>

              <div
                class="invisible md:visible w-3 h-3 bg-gray-300 rounded-full sticky md:top-0"
              ></div>

              <div class="hidden md:flex flex-1 pr-6 w-full">
                <div class="text-gray-300 text-3xl md:text-5xl px-4 md:px-6 font-base">2023</div>
              </div>
            </div>

            <div class="flex justify-between pb-[15vh] md:h-[40vh] md:pb-0">
              <div class="hidden md:flex flex-1 pr-6 w-full justify-end">
                <div class="text-gray-300 text-3xl md:text-5xl px-4 md:px-6 font-base">2024</div>
              </div>

              <div
                class="invisible md:visible w-3 h-3 bg-gray-300 rounded-full sticky md:top-0"
              ></div>

              <div class="w-full md:w-auto md:pl-6 pr-5 md:pr-0 flex-1">
                <div class="flex md:hidden mb-3">
                  <span class="text-gray-300 text-2xl font-medium">2024</span>
                </div>

                <div
                  class="text-gray-300 p-5 md:p-10 rounded-xl border-[2px] md:border-[3px] border-green-500 text-sm md:text-base leading-relaxed"
                >
                  <ul>
                    <li type="disc">Awarded Winner of the AISEN Senior Spoken Word Competition.</li>
                    <li type="disc">
                      Three students won Top in Nigeria Awards in English as a Second Language,
                      Mathematics, and Economics.
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <section>
      <div
        class="w-full bg-cover bg-center"
        :style="{
          backgroundImage: `url(${staffBackground})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }"
      >
        <div class="py-[15vh]">
          <div class="max-w-[80%] mx-auto">
            <div class="">
              <p class="mt-10 text-xl">OUR TEAM</p>
              <p class="max-w-2xl text-6xl/[8vh] mt-5">
                A team of Dedicated Professionals Shaping Future Leaders
              </p>
            </div>

            <div class="flex gap-x-10 gap-y-20 mt-[10vh] w-full flex-wrap">
              <div class="flex-1 max-w-1/3 min-w-[350px]">
                <div class="bg-black rounded-2xl w-full h-[55vh]">
                  <img
                    :src="sadiku"
                    alt="Team Member"
                    class="w-full h-full rounded-2xl object-stretch pt-5"
                  />
                </div>
                <p class="mt-4 text-4xl font-[200]">Dr. Bashiru Sadiku</p>
                <button class="mt-2 py-1 font-[600] px-4 border-2 border-black rounded-full">
                  PRINCIPAL
                </button>
              </div>

              <div class="flex-1 max-w-1/3 min-w-[350px]">
                <div class="bg-black rounded-2xl w-full h-[55vh]">
                  <img
                    :src="dokubo"
                    alt="Team Member"
                    class="w-full h-full rounded-2xl object-stretch pt-5"
                  />
                </div>
                <p class="mt-4 text-4xl font-[200]">Dora Dokubo</p>
                <button class="mt-2 py-1 font-[600] px-4 border-2 border-black rounded-full">
                  DIRECTOR
                </button>
              </div>

              <div class="flex-1 max-w-1/3 min-w-[350px]">
                <div class="bg-black rounded-2xl w-full h-[55vh]">
                  <img
                    :src="cyprian"
                    alt="Team Member"
                    class="w-full h-full rounded-2xl object-stretch pt-5"
                  />
                </div>
                <p class="mt-4 text-4xl font-[200]">Cyprian Anyahucha</p>
                <button class="mt-2 py-1 font-[600] px-4 border-2 border-black rounded-full">
                  VICE PRINCIPAL
                </button>
              </div>

              <div class="flex-1 max-w-1/3 min-w-[350px]">
                <div class="bg-black rounded-2xl w-full h-[55vh]">
                  <img
                    :src="kingsley"
                    alt="Team Member"
                    class="w-full h-full rounded-2xl object-stretch pt-5"
                  />
                </div>
                <p class="mt-4 text-4xl font-[200]">Kingsley Iredia</p>
                <button class="mt-2 py-1 font-[600] px-4 border-2 border-black rounded-full">
                  CENTRE MANAGER IFY
                </button>
              </div>

              <div class="flex-1 max-w-1/3 min-w-[350px]">
                <div class="bg-black rounded-2xl w-full h-[55vh]">
                  <img
                    :src="mary"
                    alt="Team Member"
                    class="w-full h-full rounded-2xl object-stretch pt-5"
                  />
                </div>
                <p class="mt-4 text-4xl font-[200]">Mrs. Mary Ogwashi</p>
                <button class="mt-2 py-1 font-[600] px-4 border-2 border-black rounded-full">
                  HEAD, SENIOR SCHOOL
                </button>
              </div>

              <div class="flex-1 max-w-1/3 min-w-[350px]">
                <div class="bg-black rounded-2xl w-full h-[55vh]">
                  <img
                    :src="patrick"
                    alt="Team Member"
                    class="w-full h-full rounded-2xl object-stretch pt-5"
                  />
                </div>
                <p class="mt-4 text-4xl font-[200]">Mr. Patrick Oruene</p>
                <button class="mt-2 py-1 font-[600] px-4 border-2 border-black rounded-full">
                  HEAD, JUNIOR SCHOOL
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <FooterSection />
  </div>
</template>

<style>
.timeline-dot {
  position: sticky;
  /* top: 80vh; */
  z-index: 20;
}
</style>
