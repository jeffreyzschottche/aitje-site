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
useHead({
  link: [{ rel: "preload", as: "image", href: "/img/redesign/vision-connected-polder.webp", fetchpriority: "high" }],
});

const risks = [
  "Veranderende abonnementen en tokenkosten",
  "Gewijzigde voorwaarden of verwijderde API's",
  "Nieuwe modellen die bestaande koppelingen breken",
  "Storingen buiten je eigen invloed",
  "Buitenlandse overheden die toegang tot AI beperken",
];

</script>

<template>
  <div>
    <PageHero
      class="vision-landscape-hero"
      eyebrow="De visie van AITJE"
      title="Een toekomst met AI. Onder jouw regie."
      subline="AITJE wil ervoor zorgen dat Nederlandse organisaties toegang houden tot krachtige AI-kennis en functionaliteit in eigen beheer, zonder voor hun toekomst volledig afhankelijk te worden van gesloten buitenlandse platformen."
      image="/img/redesign/local-growth.webp"
      background="/img/redesign/vision-connected-polder.webp"
      dark
      immersive
      image-alt="Groeiende plant en een ei in het Nederlandse landschap bij ochtendlicht"
    >
      <template #title>
        Een toekomst met AI. <span class="vision-landscape-title">Onder jouw regie.</span>
      </template>
    </PageHero>

    <AitjeFilm placement="vision" full />

    <section class="py-16 md:py-24">
      <div class="container-page grid gap-12 lg:grid-cols-2">
        <div>
          <SectionHeading
            eyebrow="Waarom dit ertoe doet"
            title="Wie bepaalt jouw digitale toekomst?"
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

    <AiAwareness />

    <VisionApproach />

    <CtaBanner
      title="Benieuwd wat dit voor jouw werk betekent?"
      text="Van een overtuiging naar een praktische keuze voor jouw organisatie. AITJE denkt mee over de volgende stap."
      :secondary="{ label: 'Bekijk de producten', to: '/producten' }"
    />
  </div>
</template>

<style scoped>
.vision-landscape-hero {
  background: #102a2c;
  border-bottom: 0;
  margin-bottom: 0;
}
.vision-landscape-title {
  color: #facc15;
}
.vision-landscape-hero :deep(.photo-bg) {
  object-position: 65% center;
}
.vision-landscape-hero :deep(.photo-wash) {
  background:
    linear-gradient(90deg, rgb(5 24 26 / 0.83), rgb(5 24 26 / 0.68) 35%, rgb(5 24 26 / 0.24) 60%, transparent 85%),
    linear-gradient(180deg, rgb(5 24 26 / 0.1), transparent 40%, rgb(5 24 26 / 0.42));
}
.vision-landscape-hero :deep(.page-hero-intro) {
  color: #e5ece4;
}
.vision-landscape-hero :deep(.service-scene) {
  width: 105%;
  margin-left: -2.5%;
}
.vision-landscape-hero :deep(.service-scene-orbit) {
  opacity: 0.25;
}
.vision-landscape-hero :deep(.service-scene-subject) {
  filter: drop-shadow(0 20px 28px rgb(0 0 0 / 0.25));
}
@media (max-width: 767px) {
  .vision-landscape-hero :deep(.photo-bg) {
    object-position: 82% center;
  }
  .vision-landscape-hero :deep(.photo-wash) {
    background: linear-gradient(180deg, rgb(5 24 26 / 0.88), rgb(5 24 26 / 0.8) 43%, rgb(5 24 26 / 0.12) 75%, rgb(5 24 26 / 0.48));
  }
  .vision-landscape-hero :deep(.service-scene) {
    width: 100%;
    margin-left: 0;
  }
}
</style>
