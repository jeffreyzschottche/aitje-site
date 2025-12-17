<template>
  <section class="bg-[#facc15] px-6 py-20">
    <div class="mx-auto max-w-4xl space-y-6 text-center">
      <h2 class="text-5xl font-black text-gray-900">
        Help ons de gouden AI te verspreiden
      </h2>
      <p class="text-lg text-gray-800">
        Met AITJE help je de natuur, blijf je onafhankelijk van Amerikaanse
        platformen en houd je data in eigen beheer. Klaar voor jouw vliegles?
      </p>
      <div class="flex flex-col gap-4 sm:flex-row sm:justify-center">
        <NuxtLink
          to="/shop"
          class="inline-flex items-center justify-center rounded-full bg-black px-8 py-3 text-base font-semibold text-white cursor-pointer transition-colors duration-200 hover:bg-black hover:text-[#facc15]"
        >
          Bestel jouw AITJE
        </NuxtLink>
        <NuxtLink
          to="/contact"
          class="inline-flex items-center justify-center rounded-full bg-white px-8 py-3 text-base font-semibold text-gray-900 transition hover:bg-gray-100"
        >
          Plan een kennismaking
        </NuxtLink>
      </div>
    </div>
  </section>
</template>
