<script setup lang="ts">
// Partner page (redesign/pages/partners.md, strategy/partner-model.md, besluiten 27, 49, 51).
import { contactLink } from "@/content/site";

const cta = {
  label: "Bespreek een samenwerking",
  to: contactLink("samenwerken"),
};

usePageSeo({
  title: "Voor IT-bedrijven en bureaus",
  description:
    "AITJE als AI-specialist voor jouw klanten. Jij houdt de klantrelatie, AITJE levert de AI-expertise: advies, bouw, installatie en technische ondersteuning.",
  image: "/img/redesign/infrastructure.webp",
  breadcrumbs: [
    { name: "Diensten", path: "/diensten" },
    {
      name: "Voor IT-bedrijven en bureaus",
      path: "/diensten/voor-it-bedrijven",
    },
  ],
});

const steps = [
  {
    title: "Je klant heeft een AI-vraag",
    text: "Je weet dat het kan, maar niet precies hoe, of je hebt de capaciteit niet.",
  },
  {
    title: "Jij bespreekt het met AITJE",
    text: "AITJE denkt mee over haalbaarheid en architectuur, voordat jij iets belooft.",
  },
  {
    title: "AITJE bevestigt de scope",
    text: "Jij maakt de offerte voor je klant, met je eigen marge.",
  },
  {
    title: "AITJE voert uit",
    text: "Het afgesproken specialistische deel: onderzoek, bouw, installatie of koppeling.",
  },
  {
    title: "Jij blijft aanspreekpunt",
    text: "Na oplevering ondersteunt AITJE jou bij techniek, wijzigingen en escalaties.",
  },
];

const capabilities = [
  { title: "Meedenken over de klantvraag", icon: "message" },
  { title: "AI-scan of analyse uitvoeren", icon: "scan" },
  { title: "AITJE-producten installeren", icon: "box" },
  { title: "AI op maat bouwen", icon: "sparkles" },
  { title: "Koppelingen en integraties", icon: "plug" },
  { title: "Token management & optimalisatie", icon: "workflow" },
  { title: "Technische ondersteuning", icon: "lifebuoy" },
];

const benefits = [
  {
    title: "De klantrelatie blijft bij jou",
    text: "Jij maakt de offerte, factureert je klant en bepaalt je eigen marge. AITJE factureert jou.",
  },
  {
    title: "Sparren voordat je iets belooft",
    text: "Meedenken over architectuur en haalbaarheid. AITJE bevestigt technische beloften voordat jij ze aan je klant doet.",
  },
  {
    title: "Technische backup na oplevering",
    text: "Jij blijft het eerste aanspreekpunt. AITJE ondersteunt bij technische vragen, wijzigingen en escalaties.",
  },
];

const visibility = [
  { title: "Op de achtergrond", text: "Jij levert op onder je eigen naam." },
  {
    title: "Samen zichtbaar",
    text: "Jullie presenteren het als samenwerking.",
  },
  {
    title: "AITJE als technisch contact",
    text: "AITJE heeft rechtstreeks technisch contact met je klant.",
  },
];
</script>

<template>
  <div>
    <PageHero
      class="service-world-hero"
      eyebrow="Voor IT-bedrijven en bureaus"
      title="AI-specialist voor jouw klanten."
      subline="Jij houdt de klantrelatie, AITJE levert de AI-expertise. Voor webbureaus, systeembeheerders, automatiseerders en IT-dienstverleners die de AI-vraag van hun klanten willen kunnen beantwoorden."
      image="/img/redesign/partners.webp"
      background="/img/services/nature-tech/voor-it-bedrijven.webp"
      immersive
      image-alt="Een raaf en een roodborstje op een houten brug die samen een kabel vasthouden, met het AITJE-ei tussen hen in"
    >
      <template #before>
        <NuxtLink
          to="/diensten"
          class="mb-6 inline-block text-sm text-muted hover:text-ink"
          >← Alle diensten</NuxtLink
        >
      </template>
      <div class="mt-9">
        <UiButton :to="cta.to" size="lg" arrow>{{ cta.label }}</UiButton>
      </div>
    </PageHero>

    <section class="py-16">
      <div class="container-page grid gap-6 md:grid-cols-3">
        <div
          v-for="benefit in benefits"
          :key="benefit.title"
          class="rounded-panel border border-line bg-surface p-7"
        >
          <span class="grid size-10 place-items-center rounded-xl bg-brand"
            ><AppIcon name="check" :size="18" :stroke-width="2.5"
          /></span>
          <h2 class="mt-5 font-heading text-xl font-bold">
            {{ benefit.title }}
          </h2>
          <p class="mt-2 leading-relaxed text-muted">{{ benefit.text }}</p>
        </div>
      </div>
    </section>

    <section class="bg-sand py-20">
      <div class="container-page">
        <SectionHeading
          eyebrow="Hoe het werkt"
          title="Jouw klant, jouw relatie. AITJE doet het AI-werk."
        />
        <StepList :steps="steps" class="mt-12" />
      </div>
    </section>

    <section class="py-20">
      <div class="container-page grid gap-12 lg:grid-cols-2">
        <div>
          <SectionHeading
            eyebrow="Wat AITJE kan doen"
            title="Van advies tot ondersteuning."
          />
          <div class="mt-8 grid gap-3 sm:grid-cols-2">
            <div
              v-for="item in capabilities"
              :key="item.title"
              class="flex items-center gap-3 rounded-2xl border border-line bg-surface p-4"
            >
              <span
                class="grid size-9 shrink-0 place-items-center rounded-xl bg-brand/25"
                ><AppIcon :name="item.icon" :size="17"
              /></span>
              <span class="font-medium">{{ item.title }}</span>
            </div>
          </div>
        </div>
        <div class="on-dark rounded-panel bg-ink p-8 text-white md:p-10">
          <p class="eyebrow text-brand">Zichtbaarheid</p>
          <h2 class="mt-4 font-heading text-3xl font-bold">
            Per opdracht afgesproken.
          </h2>
          <p class="mt-3 text-muted-dark">
            Hoe zichtbaar AITJE is bij jouw klant, spreek je per opdracht af.
          </p>
          <ul class="mt-8 space-y-5">
            <li
              v-for="item in visibility"
              :key="item.title"
              class="border-t border-line-dark pt-5"
            >
              <h3 class="font-heading font-semibold">{{ item.title }}</h3>
              <p class="mt-1 text-sm text-muted-dark">{{ item.text }}</p>
            </li>
          </ul>
          <p class="mt-8 text-sm text-muted-dark">
            Vaste AITJE-producten houden de naam AITJE. Specifieke oplossingen
            kunnen onder jouw naam worden geleverd.
          </p>
        </div>
      </div>
    </section>

    <section class="pb-20">
      <div class="container-page">
        <TokenServiceCallout class="mb-12" />
        <div class="partner-flow">
          <div>
            <AppIcon name="users" :size="27" />
            <h3>Jouw klant</h3>
            <p>De vraag, het werk en de context.</p>
          </div>
          <AppIcon name="arrow-right" :size="24" />
          <div>
            <AppIcon name="handshake" :size="27" />
            <h3>Jouw bureau</h3>
            <p>Klantrelatie, offerte en eerste aanspreekpunt.</p>
          </div>
          <AppIcon name="arrow-right" :size="24" />
          <div>
            <AppIcon name="cpu" :size="27" />
            <h3>AITJE</h3>
            <p>AI-expertise, uitvoering en technische hulp.</p>
          </div>
        </div>
      </div>
    </section>
    <CasesSection
      :slugs="[
        'council-hub',
        'werkbon-naar-offerte',
        'orders-uit-email-automatisch',
      ]"
      title="Wat je je klanten kunt bieden."
      intro="Voorbeelden van AI-oplossingen die AITJE bouwt. Zo ook voor jouw klanten, onder jouw regie."
    />

    <CtaBanner
      title="Klantvraag over AI?"
      text="Bespreek de vraag van je klant met AITJE. Samenwerking wordt per concrete aanvraag afgestemd; er is geen inschrijfprogramma."
      :primary="cta"
    />
  </div>
</template>
