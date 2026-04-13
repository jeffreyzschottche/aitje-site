<template>
  <div class="bg-[#f5f5f5] text-gray-900">
    <SiteNavigation />
    <main class="px-6 pt-32">
      <section class="mx-auto max-w-5xl rounded-[3rem] bg-[#212121] px-8 py-14 text-white">
        <p class="text-sm font-semibold uppercase tracking-[0.4em] text-[#facc15]">Consultancy</p>
        <h1 class="mt-4 text-5xl font-black">Huidig AI-gebruik goedkoper en stabieler maken</h1>
        <p class="mt-6 max-w-3xl text-lg text-gray-300">
          We kijken naar huidig AI-gebruik, afhankelijkheden en kosten. Het doel is niet meer tools, maar slimmer gebruik van wat er al is en betere keuzes voor wat volgt.
        </p>
      </section>
      <section class="mx-auto mt-12 grid max-w-6xl gap-8 lg:grid-cols-[1fr_1fr]">
        <article class="rounded-3xl border border-gray-200 bg-white p-8">
          <h2 class="text-3xl font-black text-gray-900">Waar we op letten</h2>
          <ul class="mt-6 space-y-3 text-sm text-gray-700">
            <li>• API-kosten en terugkerend verbruik</li>
            <li>• Stabiliteit en afhankelijkheid van externe platformen</li>
            <li>• Waar lokale software of Edge AI logisch kan worden</li>
          </ul>
        </article>
        <article class="rounded-3xl border border-gray-200 bg-white p-8">
          <h2 class="text-3xl font-black text-gray-900">Volgende stap</h2>
          <p class="mt-6 text-sm leading-7 text-gray-600">
            Deze dienst leidt vaak tot een duidelijk verbeterplan of een keuze tussen AITJE Assistent, AITJE Custom of een vervolgfase met SLA.
          </p>
          <div class="mt-8 flex flex-col gap-3 sm:flex-row">
            <NuxtLink to="/contact?onderwerp=kennismaking" class="rounded-full bg-black px-6 py-3 text-center text-sm font-semibold text-white transition hover:text-[#facc15]">Plan een kennismaking</NuxtLink>
            <NuxtLink to="/contact?onderwerp=offerte" class="rounded-full border border-gray-300 px-6 py-3 text-center text-sm font-semibold text-gray-900 transition hover:border-black">Offerte aanvragen</NuxtLink>
          </div>
        </article>
      </section>
    </main>
    <BottomCta />
    <SiteFooter />
  </div>
</template>
