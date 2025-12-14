import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '@/views/HomeView.vue'
import PrimaryHomeView from '@/views/primary/HomeView.vue'
import PrimaryAboutUsView from '@/views/primary/AboutUs.vue'
import PrimaryContactUsView from '@/views/primary/ContactUs.vue'
import PrimaryEventsView from '@/views/primary/Events.vue'
import PrimaryNewsView from '@/views/primary/News.vue'
import PrimaryAdmissionPage from '@/views/primary/Admission.vue'
import SecondaryHomeView from '@/views/secondary/HomeView.vue'
import SecondaryAdmissionView from '@/views/secondary/Admission.vue'
import SecondaryContactView from '@/views/secondary/ContactUsView.vue'
import SecondaryEventView from '@/views/secondary/Events.vue'
import SecondaryNewsView from '@/views/secondary/News.vue'
import SecondaryEventDetails from '@/views/secondary/EventDetails.vue'
import SecondaryNewsDetails from '@/views/secondary/NewsDetails.vue'
import PrimaryEventDetails from '@/views/primary/EventDetails.vue'
import PrimaryNewsDetails from '@/views/primary/NewsDetails.vue'
import SecondaryFAQView from '@/views/secondary/Faq.vue'
import AboutView from '@/views/secondary/AboutView.vue'
import IFYHomeView from '@/views/ify/HomeView.vue'
import IFYContactUsView from '@/views/ify/ContactUs.vue'
import IFYFAQsView from '@/views/ify/faq.vue'
import IFYPartnerView from '@/views/ify/Partners.vue'
import IFYAdmissionsView from '@/views/ify/Admissions.vue'
import IFYAboutNCUKView from '@/views/ify/AboutNCUK.vue'
import IFYAboutUsView from '@/views/ify/AboutUs.vue'
import NotFound from '@/views/NotFound.vue'

const routes = [
  {
    path: '/',
    name: 'Home',
    component: HomeView,
  },

  //primary routes
  {
    path: '/primary',
    name: 'PrimaryHomePage',
    component: PrimaryHomeView,
  },
  {
    path: '/primary/about',
    name: 'PrimaryAboutUsPage',
    component: PrimaryAboutUsView,
  },
  {
    path: '/primary/contact-us',
    name: 'PrimaryContactUsPage',
    component: PrimaryContactUsView,
  },
  {
    path: '/primary/admission',
    name: 'PrimaryAdmissionPage',
    component: PrimaryAdmissionPage,
  },
  {
    path: '/primary/events',
    name: 'PrimaryEventsView',
    component: PrimaryEventsView,
  },
  {
    path: '/primary/events/details',
    name: 'PrimaryEventDetails',
    component: PrimaryEventDetails,
  },
  {
    path: '/primary/news',
    name: 'PrimaryNewsView',
    component: PrimaryNewsView,
  },
  {
    path: '/primary/news/details',
    name: 'PrimaryNewsDetails',
    component: PrimaryNewsDetails,
  },

  //secondary routes
  {
    path: '/secondary',
    name: 'SecondaryHomeView',
    component: SecondaryHomeView,
  },
  {
    path: '/secondary/contact-us',
    name: 'SecondaryContactView',
    component: SecondaryContactView,
  },
  {
    path: '/secondary/about',
    name: 'AboutView',
    component: AboutView,
  },
  {
    path: '/secondary/events',
    name: 'Events',
    component: SecondaryEventView,
  },
  {
    path: '/secondary/events/details',
    name: 'SecondaryEventDetails',
    component: SecondaryEventDetails,
  },
  {
    path: '/secondary/news',
    name: 'SecondaryNewsView',
    component: SecondaryNewsView,
  },
  {
    path: '/secondary/news/details',
    name: 'SecondaryNewsDetails',
    component: SecondaryNewsDetails,
  },
  {
    path: '/secondary/faq',
    name: 'FAQView',
    component: SecondaryFAQView,
  },
  {
    path: '/secondary/admissions',
    name: 'SecondaryAdmissionView',
    component: SecondaryAdmissionView,
  },

  //IFY routes
  {
    path: '/ify',
    name: 'IFYHomeView',
    component: IFYHomeView,
  },
  {
    path: '/ify/contact-us',
    name: 'IFYContactUsView',
    component: IFYContactUsView,
  },
  {
    path: '/ify/faqs',
    name: 'IFYFAQsView',
    component: IFYFAQsView,
  },
  {
    path: '/ify/partners',
    name: 'IFYPartnerView',
    component: IFYPartnerView,
  },
  {
    path: '/ify/admissions',
    name: 'IFYAdmissionsView',
    component: IFYAdmissionsView,
  },
  {
    path: '/ify/about/ncuk',
    name: 'IFYAboutNCUKView',
    component: IFYAboutNCUKView,
  },
  {
    path: '/ify/about',
    name: 'IFYAboutUsView',
    component: IFYAboutUsView,
  },

  //catch all route to redirect to home page
  {
    path: '/:pathMatch(.*)*',
    name: 'NotFound',
    component: NotFound,
  },
]

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes,
})

export default router
