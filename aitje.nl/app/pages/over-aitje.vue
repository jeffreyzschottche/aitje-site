<template>
  <div class="bg-[#f5f5f5] text-gray-900">
    <SiteNavigation />

    <main class="px-6 pb-20 pt-32">
      <section
        class="mx-auto w-full px-4 py-12 text-center sm:max-w-5xl sm:px-8"
      >
        <p
          class="text-sm font-semibold uppercase tracking-[0.5em] text-[#facc15]"
        >
          Over AITJE
        </p>
        <h1 class="mt-4 text-5xl font-black text-gray-900">
          Een blik op wie we zijn, wat we doen en waar we voor staan
        </h1>
        <p class="mt-6 text-lg text-gray-600">
          AITJE is een Nederlands bedrijf dat organisaties helpt om AI slimmer,
          zelfstandiger en toekomstbestendiger in te zetten. Niet als vaag
          AI-label, maar als partner met duidelijke producten, heldere keuzes en
          praktische begeleiding.
        </p>
      </section>

      <section class="mx-auto mt-4 max-w-5xl">
        <div
          class="overflow-hidden rounded-[2.5rem] border border-gray-200 bg-white shadow-sm"
        >
          <div v-if="youtubeEmbedUrl" class="aspect-video w-full">
            <iframe
              :src="youtubeEmbedUrl"
              title="AITJE video"
              class="h-full w-full"
              allow="
                accelerometer;
                autoplay;
                clipboard-write;
                encrypted-media;
                gyroscope;
                picture-in-picture;
                web-share;
              "
              referrerpolicy="strict-origin-when-cross-origin"
              allowfullscreen
            />
          </div>
          <div
            v-else
            class="flex aspect-video items-center justify-center px-8 text-center"
          >
            <div>
              <p
                class="text-xs font-semibold uppercase tracking-[0.4em] text-[#facc15]"
              >
                YouTube video
              </p>
              <p class="mt-3 text-base text-gray-600">
                Stuur de YouTube-link even door, dan zet ik de embed hier direct
                goed in.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section class="mx-auto mt-16 max-w-7xl">
        <div class="text-center">
          <p class="text-xs font-semibold uppercase tracking-[0.4em] text-[#facc15]">
            Waarom AITJE
          </p>
          <h2 class="mt-3 text-4xl font-black text-gray-900">
            Een nuchtere route tussen hype en stilstand
          </h2>
          <div class="mx-auto mt-6 max-w-4xl space-y-5 text-base leading-8 text-gray-700">
            <p>
              Voor veel organisaties is AI tegelijk interessant en verwarrend.
              AITJE wil daarin een praktische partner zijn: iemand die niet
              alleen technologie levert, maar ook helpt kiezen, uitleggen,
              implementeren en doorontwikkelen.
            </p>
          </div>
        </div>

        <div class="mt-12 grid gap-6 lg:grid-cols-[0.9fr_1.15fr_0.9fr] lg:items-center">
          <div class="grid gap-6">
            <article
              v-for="value in valueColumns.left"
              :key="value.title"
              class="rounded-[2.5rem] border border-gray-200 bg-white p-8 text-center shadow-sm"
            >
              <h3 class="text-2xl font-black text-gray-900">
                {{ value.title }}
              </h3>
              <p class="mt-4 text-sm leading-7 text-gray-600">
                {{ value.text }}
              </p>
            </article>
          </div>

          <article class="rounded-[2.75rem] border border-gray-200 bg-white p-8 text-center shadow-sm lg:p-10">
            <img
              src="/images/aitje-logo.png"
              alt="AITJE logo"
              class="mx-auto h-24 w-auto object-contain"
            />
            <p class="mt-8 text-xs font-semibold uppercase tracking-[0.4em] text-[#facc15]">
              Onze visie
            </p>
            <h3 class="mt-3 text-4xl font-black text-gray-900">
              AI moet voor jouw organisatie werken, niet andersom
            </h3>
            <div class="mt-5 space-y-4 text-base leading-8 text-gray-700">
              <p>
                AI is niet meer weg te denken. Agents, LLM&apos;s, beeldgeneratie en videogeneratie
                gaan een steeds grotere rol spelen in hoe organisaties werken.
              </p>
              <p>
                Onze visie is dat je die ontwikkeling beter op je eigen systemen kunt voorbereiden,
                zonder volledige afhankelijkheid van het buitenland, Big Tech of externe platformen.
              </p>
              <p>
                Daarom kijken we niet alleen naar wat technisch mogelijk is, maar vooral naar wat
                bruikbaar, verantwoord en werkbaar blijft. De nieuwste tool is niet automatisch de juiste tool.
              </p>
            </div>
          </article>

          <div class="grid gap-6">
            <article
              v-for="value in valueColumns.right"
              :key="value.title"
              class="rounded-[2.5rem] border border-gray-200 bg-white p-8 text-center shadow-sm"
            >
              <h3 class="text-2xl font-black text-gray-900">
                {{ value.title }}
              </h3>
              <p class="mt-4 text-sm leading-7 text-gray-600">
                {{ value.text }}
              </p>
            </article>
          </div>
        </div>
      </section>

      <section
        class="mx-auto mt-16 max-w-7xl overflow-hidden rounded-[3rem] bg-[#facc15] text-black shadow-sm"
      >
        <div
          class="grid gap-8 px-8 py-10 lg:grid-cols-[1.05fr_0.95fr] lg:items-center lg:px-12 lg:py-12"
        >
          <div>
            <p
              class="text-xs font-semibold uppercase tracking-[0.4em] text-black/60"
            >
              Wat we doen
            </p>
            <h2 class="mt-3 text-4xl font-black">
              Producten, diensten en maatwerk die logisch op elkaar aansluiten
            </h2>
            <div class="mt-5 max-w-2xl space-y-4 text-base leading-8 text-black/75">
              <p>
              AITJE bouwt aan een duidelijke productlijn, biedt begeleiding waar
              dat nodig is en levert maatwerk wanneer standaard niet goed past.
              Zo ontstaat een route die organisaties echt kunnen volgen.
              </p>
              <p>
                We bouwen producten die concrete problemen en behoeftes binnen
                je organisatie oplossen en zorgen dat AI lokaal, duidelijk en in
                eigen beheer inzetbaar wordt. Daarnaast helpen we met
                AI-strategie, consultancy, implementatie en keuzes rond
                infrastructuur, processen en dagelijks gebruik.
              </p>
            </div>
          </div>

          <article
            class="overflow-hidden rounded-[2.5rem] border border-black/10 bg-white/70 shadow-sm"
          >
            <img
              src="/images/no-costs.png"
              alt="AITJE productbeeld"
              class="h-full min-h-[22rem] w-full object-cover"
            />
          </article>
        </div>
      </section>

      <section class="mx-auto mt-16 max-w-7xl">
        <div class="text-center">
          <p class="text-xs font-semibold uppercase tracking-[0.4em] text-[#facc15]">
            Aanpak
          </p>
          <h2 class="mt-3 text-4xl font-black text-gray-900">
            Van AI-idee naar iets dat echt in je organisatie past
          </h2>
          <p class="mx-auto mt-5 max-w-4xl text-base leading-8 text-gray-700">
            Veel organisaties weten dat ze iets met AI moeten, maar niet waar ze
            moeten beginnen of wat verstandig is om zelf te beheren. AITJE helpt
            die stap kleiner te maken: van eerste vraag en haalbare toepassing
            naar een oplossing die past bij je data, mensen, infrastructuur en
            manier van werken.
          </p>
        </div>
      </section>

      <section class="mx-auto mt-12 max-w-7xl">
        <div class="rounded-[3rem] border border-gray-200 bg-white p-8 shadow-sm lg:p-10">
          <p class="text-xs font-semibold uppercase tracking-[0.4em] text-[#facc15]">
            Hoe we dat concreet maken
          </p>
          <div class="mt-8 grid gap-4 md:grid-cols-2">
            <article
              v-for="card in visionCards"
              :key="card.title"
              class="rounded-[1.75rem] border border-gray-100 bg-[#fafafa] p-6"
            >
              <h3 class="text-2xl font-black text-gray-900">
                {{ card.title }}
              </h3>
              <p class="mt-3 text-sm leading-7 text-gray-600">
                {{ card.text }}
              </p>
            </article>
          </div>
        </div>
      </section>

      <section class="mx-auto mt-16 max-w-7xl">
        <div class="grid gap-6 lg:grid-cols-[0.92fr_1.08fr]">
          <article
            class="h-full rounded-[2.5rem] bg-[#212121] p-8 text-white shadow-sm lg:p-10"
          >
            <p
              class="text-xs font-semibold uppercase tracking-[0.4em] text-[#facc15]"
            >
              Ons team
            </p>
            <h2 class="mt-3 text-4xl font-black">Maak kennis met ons team</h2>
            <p class="mt-6 max-w-2xl text-base leading-8 text-gray-300">
              AITJE is een klein team met een duidelijke overtuiging: AI moet
              helder, verantwoord en praktisch inzetbaar zijn voor organisaties.
              We denken graag mee over jouw situatie en kijken samen wat logisch
              past.
            </p>
            <p class="mt-4 max-w-2xl text-base leading-8 text-gray-300">
              <i>
                PS: dit zijn wij niet, wil je ons knappe koppen in het echt
                zien? Plan een kennismaking in!
              </i>
            </p>
            <NuxtLink
              to="/contact"
              class="mt-8 inline-flex items-center justify-center rounded-full bg-[#facc15] px-6 py-3 text-sm font-semibold text-black transition hover:bg-white hover:text-black"
            >
              Kennismaken
            </NuxtLink>
          </article>

          <div class="grid gap-6">
            <article
              class="h-full overflow-hidden rounded-[2.25rem] border border-gray-200 bg-white shadow-sm"
            >
              <img
                src="/images/aitje-home-footer.png"
                alt="AITJE productbeeld"
                class="h-80 w-full object-cover lg:h-full"
              />
            </article>
          </div>
        </div>
      </section>
    </main>

    <BottomCta />
    <SiteFooter />
  </div>
</template>

<script setup lang="ts">
const youtubeEmbedUrl = "https://www.youtube.com/embed/3ZJgaJGeRS4";

const visionCards = [
  {
    title: "Beginnen bij het probleem",
    text: "We starten niet bij een model of tool, maar bij de vraag waar je organisatie tijd verliest, risico loopt of kennis beter wil benutten.",
  },
  {
    title: "Werkbaar voor teams",
    text: "Een oplossing moet aansluiten op bestaande processen, rollen en verantwoordelijkheden. Anders blijft AI een losse demo in plaats van een bruikbaar onderdeel van het werk.",
  },
  {
    title: "Lokaal waar dat waarde heeft",
    text: "We kijken bewust welke kennis, data en functies beter dichtbij de organisatie kunnen draaien, zodat gebruik, toegang en afhankelijkheden beheersbaar blijven.",
  },
  {
    title: "Beheer na oplevering",
    text: "AI moet ook na de eerste implementatie begrijpelijk blijven. Daarom denken we mee over onderhoud, toegang, documentstromen, kosten en doorontwikkeling.",
  },
];

const whatWeDo = [
  {
    badge: "Producten",
    title: "Duidelijke productlijn",
    text: "We bouwen producten die concrete problemen en behoeftes binnen je organisatie oplossen en lokaal, duidelijk en in eigen beheer inzetbaar zijn.",
  },
  {
    badge: "Diensten",
    title: "Begeleiding en strategie",
    text: "We helpen organisaties met AI-strategie, consultancy, implementatie en keuzes rond infrastructuur, processen en inzet.",
  },
  {
    badge: "Maatwerk",
    title: "Custom waar nodig",
    text: "Als standaard niet goed past, bouwen we maatwerk agents, RAG-oplossingen en andere AI-routes die beter aansluiten op de praktijk van het team.",
  },
];

const values = [
  {
    title: "Helderheid boven jargon",
    text: "We willen dat organisaties snel begrijpen wat iets doet, waarom het relevant is en wanneer het zinvol is.",
  },
  {
    title: "Regie boven afhankelijkheid",
    text: "We zoeken steeds naar manieren om data, kennis en AI-gebruik minder kwetsbaar te maken voor externe keuzes.",
  },
  {
    title: "Stabiliteit boven hype",
    text: "Niet elke trend verdient een plek in een organisatie. We kiezen liever iets dat werkt en houdbaar blijft.",
  },
  {
    title: "Partnerschap boven losse verkoop",
    text: "We willen niet alleen iets neerzetten, maar ook meedenken over hoe het in de praktijk blijft werken.",
  },
];

const valueColumns = {
  left: values.slice(0, 2),
  right: values.slice(2, 4),
};
</script>
