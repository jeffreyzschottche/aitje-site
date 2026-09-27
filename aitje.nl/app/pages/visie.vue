<script setup lang="ts">
// Vision page (redesign/pages/vision.md, context/vision.md, besluiten 49-50).

usePageSeo({
  title: "Visie",
  description:
    "De visie van AITJE: Nederlandse organisaties houden toegang tot krachtige AI in eigen beheer, zonder onbedoeld afhankelijk te worden van gesloten platformen.",
  image: "/img/redesign/local-growth.webp",
  breadcrumbs: [
    { name: "Over AITJE", path: "/over-aitje" },
    { name: "Visie", path: "/visie" },
  ],
});

const risks = [
  "Veranderende abonnementen en tokenkosten",
  "Gewijzigde voorwaarden of verwijderde API's",
  "Nieuwe modellen die bestaande koppelingen breken",
  "Storingen buiten je eigen invloed",
];

const routes = [
  "Een lokaal apparaat",
  "Een eigen server",
  "Een Nederlandse of Europese server",
  "Open-source modellen",
  "Hybride workflows",
  "Zorgvuldig gekozen externe modellen",
];
</script>

<template>
  <div>
    <PageHero
      eyebrow="De visie van AITJE"
      title="Een toekomst met AI. Onder jouw regie."
      subline="AITJE wil ervoor zorgen dat Nederlandse organisaties toegang houden tot krachtige AI-kennis en functionaliteit in eigen beheer, zonder voor hun toekomst volledig afhankelijk te worden van gesloten buitenlandse platformen."
      image="/img/redesign/local-growth.webp"
      backdrop="/img/redesign/vision-landscape.webp"
      immersive
      image-alt="Groeiende plant en een ei in het Nederlandse landschap bij ochtendlicht"
    />

    <section class="py-16 md:py-24">
      <div class="container-page grid gap-12 lg:grid-cols-2">
        <div>
          <SectionHeading
            eyebrow="Waarom dit ertoe doet"
            title="AI verandert werk sneller dan een organisatie kan bijhouden."
            intro="Steeds meer kennis en werkprocessen gaan afhangen van modellen en infrastructuur die gewone organisaties niet zelf kunnen bouwen of onderhouden. Veel daarvan ligt bij een klein aantal grote aanbieders."
          />
        </div>
        <div class="rounded-panel border border-line bg-surface p-8">
          <p class="font-heading text-lg font-semibold">
            Zonder bewuste afweging kan belangrijke functionaliteit verdwijnen
            achter:
          </p>
          <CheckList :items="risks" negative class="mt-6" />
        </div>
      </div>
    </section>

    <section class="px-3 md:px-5">
      <div class="on-dark rounded-[2.25rem] bg-ink py-24 text-white md:py-32">
        <div class="container-page max-w-4xl text-center">
          <p
            class="font-heading text-[2.25rem] leading-[1.1] font-bold md:text-[3.5rem]"
          >
            Afhankelijkheid mag een bewuste keuze zijn.
            <span class="text-brand">Niet een onbedoeld gevolg.</span>
          </p>
          <p class="mx-auto mt-8 max-w-2xl text-lg text-muted-dark">
            Een externe aanbieder kan prima zijn wanneer die aantoonbaar het
            beste past. Het probleem is afhankelijkheid die ontstaat uit een
            architectuur die niemand heeft onderzocht.
          </p>
        </div>
      </div>
    </section>

    <section class="py-20 md:py-28">
      <div class="container-page grid gap-12 lg:grid-cols-2">
        <div>
          <SectionHeading
            eyebrow="Eigen beheer"
            title="Eigen beheer is het doel, niet één techniek."
            intro="Eigen beheer betekent dat je toegang en controle houdt over de kennis, functionaliteit, data en infrastructuur waarop je vertrouwt. Dat kan op verschillende manieren."
          />
          <p class="mt-6 font-heading text-xl font-semibold">
            AITJE is niet tegen cloud of externe modellen. De taak bepaalt de
            oplossing.
          </p>
        </div>
        <div class="grid grid-cols-2 gap-3 self-start">
          <div
            v-for="route in routes"
            :key="route"
            class="rounded-2xl border border-line bg-surface p-5 font-medium"
          >
            {{ route }}
          </div>
        </div>
      </div>
    </section>

    <section class="section-space environment-section">
      <div class="container-page"><AiEnvironment /></div>
    </section>
    <section class="bg-sand py-20 md:py-24">
      <div class="container-page grid gap-6 md:grid-cols-2">
        <div class="rounded-panel bg-surface p-8 md:p-10">
          <p class="eyebrow text-brand-ink">Open source</p>
          <h2 class="mt-4 font-heading text-2xl font-bold">
            Een sterke voorkeur, geen dogma.
          </h2>
          <p class="mt-4 leading-relaxed text-muted">
            Open-source technologie is vaak beter in eigen beheer te houden,
            schaalbaar zonder kosten per gebruiker en aanpasbaar aan je werk.
            Een gesloten of extern model mag, wanneer het voor een taak
            aantoonbaar meer waarde levert.
          </p>
        </div>
        <div class="rounded-panel bg-surface p-8 md:p-10">
          <p class="eyebrow text-brand-ink">Slimmer dan één zwaar model</p>
          <h2 class="mt-4 font-heading text-2xl font-bold">
            Niet elke taak heeft het duurste AI-model nodig.
          </h2>
          <p class="mt-4 leading-relaxed text-muted">
            Een goed ingerichte
            <NuxtLink
              to="/kenniscentrum/wat-is-een-workflow"
              class="knowledge-link"
              >workflow</NuxtLink
            >
            verdeelt een taak in stappen, gebruikt eigen kennis en laat een
            kleiner model betrouwbaar werken. Lokaal kost iedere extra poging
            geen externe tokens.
          </p>
        </div>
      </div>
    </section>

    <section class="py-20 md:py-28">
      <div class="container-page grid gap-12 lg:grid-cols-2">
        <div>
          <SectionHeading
            eyebrow="De rol van AITJE"
            title="Adviseur, bouwer, installateur en beheerder in één."
          />
          <p class="mt-6 text-lg leading-relaxed text-muted">
            Voor computers was er de systeembeheerder, voor internet het
            webbureau. AITJE combineert die rollen voor AI: onderzoeken wat
            past, het bouwen en installeren, en bereikbaar blijven.
          </p>
        </div>
        <div>
          <SectionHeading
            eyebrow="Mens en automatisering"
            title="Jij beslist wat AI doet in je organisatie."
          />
          <p class="mt-6 text-lg leading-relaxed text-muted">
            AITJE legt mogelijkheden, beperkingen en gevolgen uit en ontwerpt
            een oplossing die verantwoord werkt. De beslissing over hoe AI het
            werk van mensen verandert, blijft bij jou.
          </p>
        </div>
      </div>
    </section>

    <CtaBanner
      title="Benieuwd wat dit voor jouw werk betekent?"
      text="Van een overtuiging naar een praktische keuze voor jouw organisatie. AITJE denkt mee over de volgende stap."
      :secondary="{ label: 'Bekijk de producten', to: '/producten' }"
    />
  </div>
</template>
