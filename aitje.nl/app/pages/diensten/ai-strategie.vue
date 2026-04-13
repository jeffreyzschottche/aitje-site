<template>
  <div class="bg-[#f5f5f5] text-gray-900">
    <SiteNavigation />
    <main class="px-6 pt-32">
      <section class="mx-auto max-w-5xl rounded-[3rem] bg-[#212121] px-8 py-14 text-white">
        <p class="text-sm font-semibold uppercase tracking-[0.4em] text-[#facc15]">AI-strategie</p>
        <h1 class="mt-4 text-5xl font-black">Bepalen waar AI nu echt waarde toevoegt</h1>
        <p class="mt-6 max-w-3xl text-lg text-gray-300">
          Deze dienst helpt organisaties om keuzes te maken in richting, inzet en prioriteit. Niet alles hoeft tegelijk, en niet alles hoeft lokaal. Het doel is helderheid.
        </p>
      </section>
      <section class="mx-auto mt-12 grid max-w-6xl gap-8 lg:grid-cols-[1fr_1fr]">
        <article class="rounded-3xl border border-gray-200 bg-white p-8">
          <h2 class="text-3xl font-black text-gray-900">Waar we mee helpen</h2>
          <ul class="mt-6 space-y-3 text-sm text-gray-700">
            <li>• In kaart brengen waar AI nu de meeste waarde heeft</li>
            <li>• Uitleggen wat Edge AI wel en niet geschikt maakt</li>
            <li>• Eerste keuzes concreet maken voor teams en beslissers</li>
          </ul>
        </article>
        <article class="rounded-3xl border border-gray-200 bg-white p-8">
          <h2 class="text-3xl font-black text-gray-900">Volgende stap</h2>
          <p class="mt-6 text-sm leading-7 text-gray-600">
            Vanuit deze dienst sturen we meestal naar een praktisch plan, een productkeuze of een vervolggesprek over implementatie.
          </p>
          <div class="mt-8 flex flex-col gap-3 sm:flex-row">
            <NuxtLink to="/contact?onderwerp=kennismaking" class="rounded-full bg-black px-6 py-3 text-center text-sm font-semibold text-white transition hover:text-[#facc15]">Plan een kennismaking</NuxtLink>
            <NuxtLink to="/contact?onderwerp=prijslijst" class="rounded-full border border-gray-300 px-6 py-3 text-center text-sm font-semibold text-gray-900 transition hover:border-black">Prijslijst aanvragen</NuxtLink>
          </div>
        </article>
      </section>
    </main>
    <BottomCta />
    <SiteFooter />
  </div>
</template>
