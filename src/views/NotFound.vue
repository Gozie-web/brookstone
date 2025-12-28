<script setup>
import NavBar from '@/components/Navbar.vue'
</script>

<template>
  <NavBar />
  <div class="min-h-screen flex flex-col">
    <main class="max-w-[80%] mx-auto flex-1 flex items-center justify-center">
      <div class="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        <div class="space-y-6 text-center lg:text-left">
          <p class="text-sm uppercase tracking-wider text-gray-500">404 — Page not found</p>

          <h1 class="text-4xl md:text-5xl font-extrabold text-gray-900 leading-tight">
            Oops — we couldn't find that page
          </h1>

          <p class="text-gray-600 max-w-xl mx-auto lg:mx-0">
            The page you're looking for may have been moved, had its name changed, or is temporarily
            unavailable. Try one of the links below or search to find what you need.
          </p>
        </div>

        <div class="flex items-center justify-center">
          <div class="relative w-full max-w-md">
            <div class="rounded-3xl bg-white shadow-lg p-8">
              <svg
                viewBox="0 0 600 400"
                class="w-full h-auto"
                xmlns="http://www.w3.org/2000/svg"
                role="img"
                aria-hidden="true"
              >
                <defs>
                  <linearGradient id="g1" x1="0" x2="1" y1="0" y2="1">
                    <stop offset="0" stop-color="#2B197A" stop-opacity="0.95" />
                    <stop offset="1" stop-color="#5b3bd6" stop-opacity="0.9" />
                  </linearGradient>
                </defs>

                <rect rx="18" x="0" y="0" width="600" height="320" fill="url(#g1)" />
                <g transform="translate(45,45)" fill="#fff" opacity="0.95">
                  <rect x="30" y="40" width="220" height="140" rx="6" />
                  <rect x="280" y="60" width="90" height="120" rx="6" />
                  <rect x="55" y="70" width="40" height="40" rx="3" fill="#F5B900" />
                  <rect x="110" y="70" width="40" height="40" rx="3" fill="#F5B900" />
                  <rect x="165" y="70" width="40" height="40" rx="3" fill="#F5B900" />
                  <polygon points="30,40 140,0 250,40" fill="#fff" opacity="0.12" />
                </g>

                <g transform="translate(330,120)" fill="#fff" opacity="0.98">
                  <circle cx="60" cy="40" r="48" fill="#fff" opacity="0.12" />
                  <text
                    x="60"
                    y="50"
                    text-anchor="middle"
                    fill="#fff"
                    font-size="28"
                    font-weight="700"
                  >
                    404
                  </text>
                  <rect
                    x="108"
                    y="78"
                    width="72"
                    height="14"
                    rx="7"
                    transform="rotate(22 108 78)"
                    fill="#fff"
                    opacity="0.14"
                  />
                </g>
              </svg>
            </div>

            <div class="mt-4 text-center">
              <router-link
                to="/"
                class="inline-block text-sm px-4 py-2 rounded-md border border-gray-200 bg-yellow-500 text-gray-900 font-[600]"
              >
                Go Back Home
              </router-link>
            </div>
          </div>
        </div>
      </div>
    </main>

    <footer class="py-8 px-6 lg:px-12">
      <div class="max-w-7xl mx-auto text-center text-sm text-gray-500">
        © {{ new Date().getFullYear() }} Brookstone. All rights reserved.
      </div>
    </footer>
  </div>
</template>
