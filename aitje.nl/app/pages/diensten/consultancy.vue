<template>
  <div class="bg-[#f5f5f5] text-gray-900">
    <SiteNavigation />
    <main class="px-6 pt-32">
      <section class="mx-auto max-w-5xl rounded-[3rem] bg-[#212121] px-8 py-14 text-white">
        <p class="text-sm font-semibold uppercase tracking-[0.4em] text-[#facc15]">Consultancy</p>
        <h1 class="mt-4 text-5xl font-black">Meedenken over waar edge AI echt nut heeft</h1>
        <p class="mt-6 max-w-3xl text-lg text-gray-300">
          We kijken naar je organisatie, huidig AI-gebruik, afhankelijkheden en kosten. Het doel is helder krijgen waar edge AI praktisch waarde toevoegt en waar een lichtere aanpak beter past.
        </p>
      </section>
      <section class="mx-auto mt-12 grid max-w-6xl gap-8 lg:grid-cols-[1fr_1fr]">
        <article class="rounded-3xl border border-gray-200 bg-white p-8">
          <h2 class="text-3xl font-black text-gray-900">Waar we op letten</h2>
          <p class="mt-5 text-sm leading-7 text-gray-600">
            We beginnen bij de praktijk: welke taken kosten nu tijd, welke AI-tools worden al gebruikt en waar ontstaan kosten, risico's of afhankelijkheden? Daarna bepalen we of edge AI daar echt iets oplost.
          </p>
          <ul class="mt-6 space-y-3 text-sm text-gray-700">
            <li>• Waar edge AI nuttig kan zijn in processen, teams of producten</li>
            <li>• API-kosten, terugkerend verbruik en afhankelijkheid van externe platformen</li>
            <li>• Welke bestaande AITJE-producten, inrichting of vervolgstappen logisch zijn</li>
          </ul>
          <p class="mt-6 text-sm leading-7 text-gray-600">
            Soms is het advies om nog niet te bouwen. Soms is een productinstallatie genoeg. En soms wordt duidelijk dat AITJE Custom of een SLA beter past bij de manier waarop je organisatie met AI wil blijven werken.
          </p>
        </article>
        <article class="rounded-3xl border border-gray-200 bg-white p-8">
          <h2 class="text-3xl font-black text-gray-900">Volgende stap</h2>
          <p class="mt-6 text-sm leading-7 text-gray-600">
            Consultancy leidt vaak tot een concreet advies, een productkeuze, een AITJE Custom-traject of een doorlopende samenwerking binnen SLA.
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
