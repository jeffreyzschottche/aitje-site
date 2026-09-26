<script setup lang="ts">
// About page (redesign/pages/about.md, content/team.md, besluit 51).
import { founders, foundersIntro, network, networkIntro } from "@/content/team";

usePageSeo({
  title: "Over AITJE",
  description:
    "AITJE is een Nederlands AI-productbedrijf en specialist. Eigen producten, advies en maatwerk, en mensen die bereikbaar blijven. Maak kennis met de oprichters en het netwerk.",
  image: "/img/workplace.webp",
  breadcrumbs: [{ name: "Over AITJE", path: "/over-aitje" }],
});

const steps = [
  { title: "Gesprek of demo", text: "Je vertelt wat je wilt bereiken. AITJE laat zien wat er kan." },
  { title: "AI-scan of concrete vraag", text: "Breed onderzoeken, of direct een voorstel voor je vraag." },
  { title: "Oplevering", text: "Een product, een ingerichte omgeving of AI op maat, getest en uitgelegd." },
  { title: "Ondersteuning", text: "Als je wilt: hulp, updates en meedenken over de volgende stap." },
];

const strengths = [
  { title: "Eigen producten én expertise", text: "Producten waarin het uitzoekwerk al is gedaan, en de kennis om specifieke oplossingen te bouwen.", icon: "box" },
  { title: "Je eigen AI-omgeving", text: "AI op eigen hardware of een eigen server, waar dat past. Externe modellen alleen waar ze echt meerwaarde hebben.", icon: "server" },
  { title: "Bereikbaar en meedenkend", text: "Een telefoonnummer en mensen die meedenken. Ook na de oplevering.", icon: "phone" },
  { title: "Onderbouwde keuzes", text: "AITJE rekent door welk model bij welk werk past en wat dat kost. Niet elke taak heeft het duurste model nodig.", icon: "gauge" },
];
</script>

<template>
  <div>
    <PageHero
      eyebrow="Over AITJE"
      title="AI-specialisme dat je verder helpt."
      subline="AITJE is een Nederlands AI-productbedrijf en specialist. AITJE bouwt eigen producten, levert advies en maatwerk, en helpt je AI praktisch toepassen, op je eigen hardware of server waar dat past."
      image="/img/workplace.webp"
      image-alt="Een werkplaats met AITJE-hardware, schermen en een robotarm"
    />

    <!-- Rol -->
    <section class="px-3 md:px-5">
      <div class="on-dark rounded-[2.25rem] bg-ink py-20 text-white md:py-28">
        <div class="container-page max-w-4xl text-center">
          <p class="eyebrow text-brand">De rol van AITJE</p>
          <p class="mt-6 font-heading text-[2rem] leading-[1.15] font-bold md:text-[3rem]">
            Voor computers was er de systeembeheerder. Voor internet het webbureau.
            <span class="text-brand">Voor AI is er AITJE.</span>
          </p>
          <p class="mx-auto mt-8 max-w-2xl text-lg text-muted-dark">
            AITJE onderzoekt wat past, bouwt wat nodig is, installeert het en blijft bereikbaar. Van de eerste vraag tot het onderhoud jaren later.
          </p>
        </div>
      </div>
    </section>

    <!-- Oprichters -->
    <section class="py-20 md:py-28">
      <div class="container-page grid gap-12 lg:grid-cols-[1fr_1.2fr] lg:items-center">
        <div class="relative">
          <!-- Placeholder for the founders' photo (redesign/content/team.md). -->
          <div class="relative grid aspect-[4/3] place-items-center overflow-hidden rounded-panel border border-dashed border-line bg-gradient-to-br from-brand/25 via-sand to-page">
            <div class="text-center">
              <div class="mx-auto flex -space-x-4">
                <span v-for="f in founders" :key="f.name" class="grid size-20 place-items-center rounded-full border-4 border-page bg-ink font-heading text-2xl font-bold text-brand">
                  {{ f.name.charAt(0) }}
                </span>
              </div>
              <p class="mt-4 font-mono text-xs text-muted">Foto van de oprichters volgt</p>
            </div>
          </div>
        </div>
        <div>
          <SectionHeading eyebrow="De oprichters" title="De mensen achter AITJE." :intro="foundersIntro" />
          <div class="mt-10 space-y-6">
            <div v-for="f in founders" :key="f.name" class="rounded-card border border-line bg-surface p-6">
              <h3 class="font-heading text-xl font-bold">{{ f.name }}</h3>
              <p class="text-sm font-medium text-brand-ink">{{ f.role }}</p>
              <p class="mt-3 leading-relaxed text-muted">{{ f.bio }}</p>
              <p class="mt-4 border-l-2 border-brand pl-4 text-sm italic">“{{ f.quote }}”</p>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Netwerk -->
    <section class="bg-sand py-20 md:py-24">
      <div class="container-page">
        <SectionHeading eyebrow="Het netwerk" title="Meer dan twee mensen." :intro="networkIntro" />
        <div class="mt-12 grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-5">
          <div v-for="person in network" :key="person.name" class="rounded-card border border-line bg-surface p-5 text-center">
            <!-- Placeholder until the doodle illustrations are made. -->
            <span class="mx-auto grid size-20 place-items-center rounded-full border-2 border-ink bg-brand/40">
              <AppIcon :name="person.icon" :size="30" :stroke-width="1.5" />
            </span>
            <p class="mt-4 font-heading font-semibold">{{ person.name }}</p>
            <p class="mt-1 text-sm text-muted">{{ person.field }}</p>
          </div>
        </div>
      </div>
    </section>

    <!-- Onderscheid -->
    <section class="py-20 md:py-28">
      <div class="container-page">
        <SectionHeading eyebrow="Wat AITJE anders maakt" title="Geen hardwarewinkel. Geen adviesbureau dat alleen uren verkoopt." />
        <div class="mt-12 grid gap-4 md:grid-cols-2 lg:grid-cols-4">
          <div v-for="item in strengths" :key="item.title" class="rounded-card border border-line bg-surface p-6">
            <span class="grid size-10 place-items-center rounded-xl bg-brand"><AppIcon :name="item.icon" :size="19" /></span>
            <h3 class="mt-5 font-heading text-lg font-semibold">{{ item.title }}</h3>
            <p class="mt-2 text-sm leading-relaxed text-muted">{{ item.text }}</p>
          </div>
        </div>
        <p class="mt-8 max-w-3xl text-muted">
          En niet tegen cloud of externe modellen: de taak bepaalt de oplossing.
        </p>
      </div>
    </section>

    <!-- Samenwerken -->
    <section class="border-t border-line py-20">
      <div class="container-page">
        <SectionHeading eyebrow="Hoe samenwerken werkt" title="Van eerste gesprek tot blijvende hulp." />
        <div class="mt-10"><StepList :steps="steps" /></div>
      </div>
    </section>

    <!-- Visie -->
    <section class="pb-20">
      <div class="container-page grid items-center gap-10 overflow-hidden rounded-panel border border-line bg-surface lg:grid-cols-2">
        <img src="/img/netherlands.webp" alt="Een fietser op een pad langs een Hollandse molen" loading="lazy" class="aspect-[4/3] size-full object-cover" />
        <div class="p-8 md:p-12">
          <p class="eyebrow text-brand-ink">Visie</p>
          <p class="mt-4 font-heading text-2xl leading-snug font-bold md:text-3xl">
            Afhankelijkheid mag een bewuste keuze zijn. Niet een onbedoeld gevolg.
          </p>
          <p class="mt-4 leading-relaxed text-muted">
            AITJE wil dat Nederlandse organisaties toegang houden tot AI in eigen beheer, zonder onbedoeld afhankelijk te worden van gesloten platformen.
          </p>
          <UiButton to="/visie" variant="dark" arrow class="mt-7">Lees de visie van AITJE</UiButton>
        </div>
      </div>
    </section>

    <CtaBanner
      title="Benieuwd wat AITJE voor jouw werk kan betekenen?"
      :secondary="{ label: 'Veelgestelde vragen', to: '/faq' }"
    />
  </div>
</template>
