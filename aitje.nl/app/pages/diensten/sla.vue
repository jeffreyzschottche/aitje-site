<template>
  <div class="bg-[#f5f5f5] text-gray-900">
    <SiteNavigation />
    <main class="px-6 pt-32">
      <section class="mx-auto max-w-5xl rounded-[3rem] bg-[#212121] px-8 py-14 text-white">
        <p class="text-sm font-semibold uppercase tracking-[0.4em] text-[#facc15]">SLA</p>
        <h1 class="mt-4 text-5xl font-black">Strategisch partnerschap voor je AI-omgeving</h1>
        <p class="mt-6 max-w-3xl text-lg text-gray-300">
          De SLA is bedoeld voor organisaties die AITJE structureel naast zich willen hebben voor support, kennisbankbeheer, advies, updates en doorontwikkeling rond edge en on-premise AI.
        </p>
      </section>
      <section class="mx-auto mt-12 grid max-w-6xl gap-8 lg:grid-cols-[1fr_1fr]">
        <article class="rounded-3xl border border-gray-200 bg-white p-8">
          <h2 class="text-3xl font-black text-gray-900">Wat erin kan zitten</h2>
          <p class="mt-5 text-sm leading-7 text-gray-600">
            Een SLA is geen los supportkaartje, maar een vaste afspraak over hoe we samenwerken. We leggen vast waarvoor je ons kunt inschakelen, hoeveel tijd er beschikbaar is en welke onderdelen door ons of door je eigen team worden opgepakt.
          </p>
          <ul class="mt-6 space-y-3 text-sm text-gray-700">
            <li>• Support en troubleshooting</li>
            <li>• Updates van modellen en software wanneer nodig</li>
            <li>• Kennisbank opzetten, inrichten en bijhouden</li>
            <li>• Uitleg hoe je de kennisbank zelf goed beheert</li>
            <li>• Gereserveerde tijd voor praktische vragen en strategisch meedenken</li>
          </ul>
          <p class="mt-6 text-sm leading-7 text-gray-600">
            Vooral bij kennisbanken is die doorlopende afspraak belangrijk. Een goede kennisbank vraagt om structuur, versiebeheer, duidelijke bronnen en periodieke keuzes over wat wel en niet in de contextlaag hoort.
          </p>
        </article>
        <article class="rounded-3xl border border-gray-200 bg-white p-8">
          <h2 class="text-3xl font-black text-gray-900">Volgende stap</h2>
          <p class="mt-6 text-sm leading-7 text-gray-600">
            Het opzetten van een kennisbank doen we alleen binnen SLA, omdat de kwaliteit daarvan doorlopend aandacht vraagt. Je kunt het beheer daarna zelf doen, of ons betrokken houden bij onderhoud en verbetering.
          </p>
          <div class="mt-8 flex flex-col gap-3 sm:flex-row">
            <NuxtLink to="/contact?onderwerp=prijslijst" class="rounded-full bg-black px-6 py-3 text-center text-sm font-semibold text-white transition hover:text-[#facc15]">Prijslijst aanvragen</NuxtLink>
            <NuxtLink to="/contact?onderwerp=offerte" class="rounded-full border border-gray-300 px-6 py-3 text-center text-sm font-semibold text-gray-900 transition hover:border-black">Offerte aanvragen</NuxtLink>
          </div>
        </article>
      </section>
    </main>
    <BottomCta />
    <SiteFooter />
  </div>
</template>
