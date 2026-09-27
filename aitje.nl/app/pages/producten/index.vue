<script setup lang="ts">
// Product overview (redesign/pages/products.md, besluiten 09, 28, 51).
import {
  availableProducts,
  plannedProducts,
  installPrice,
} from "@/content/products";
import { contactLink } from "@/content/site";

usePageSeo({
  title: "AI-producten",
  description:
    "De AI-producten van AITJE: AITJE Assistent en AITJE Coder, gebruiksklaar op je eigen hardware of server. Zelf installeren of door AITJE laten opleveren.",
  breadcrumbs: [{ name: "Producten", path: "/producten" }],
});

const priceParts = [
  {
    title: "Het AI-product",
    text: "Eén aankoop per omgeving of device. Geen licentie per gebruiker.",
    icon: "box",
  },
  {
    title: "Hardware of server",
    text: "Gebruik geschikte eigen hardware, koop op advies of laat AITJE leveren. Wat je betaalt, is van jou.",
    icon: "server",
  },
  {
    title: "Installatie en inrichting",
    text: `Zelf doen, of AITJE levert gebruiksklaar op vanaf €${installPrice}.`,
    icon: "wrench",
  },
];
</script>

<template>
  <div>
    <PageHero
      eyebrow="AI-producten"
      title="Je eigen AI. Klaar om mee te werken."
      subline="Bij een AITJE-product is het uitzoekwerk al gedaan. Modellen, software en configuratie zijn op elkaar afgestemd, zodat je begint met een werkende basis."
      image="/img/redesign/products.webp"
      background="/img/products/bg-archive.webp"
      immersive
      image-alt="Kleine zwarte apparaten op een stenen podium rond het gloeiende AITJE-ei"
    >
      <div class="mt-9 flex flex-col gap-3 sm:flex-row">
        <UiButton :to="contactLink('demo')" size="lg" arrow
          >Vraag een demo aan</UiButton
        >
        <UiButton to="/contact" variant="secondary" size="lg"
          >Bespreek je AI-vraag</UiButton
        >
      </div>
    </PageHero>

    <section class="pb-20">
      <div class="container-page">
        <div class="mb-8 flex items-center gap-3">
          <UiBadge tone="brand" dot>Beschikbaar</UiBadge>
          <span class="text-sm text-muted">Werkend en te bestellen</span>
        </div>
        <div class="grid gap-6 md:grid-cols-2">
          <ProductCard
            v-for="product in availableProducts"
            :key="product.slug"
            :product="product"
          />
        </div>
      </div>
    </section>

    <section class="bg-sand py-20">
      <div class="container-page grid gap-12 lg:grid-cols-[1fr_1.4fr]">
        <SectionHeading
          eyebrow="Hoe je een product krijgt"
          title="Drie onderdelen. Jij kiest wat je zelf doet."
          intro="Je ziet altijd apart wat het product, de hardware en de installatie kosten. Ondersteuning is optioneel."
        />
        <div class="grid gap-4 sm:grid-cols-3">
          <div
            v-for="(part, i) in priceParts"
            :key="part.title"
            class="rounded-card border border-line bg-surface p-6"
          >
            <div class="flex items-center justify-between">
              <span class="grid size-10 place-items-center rounded-xl bg-brand"
                ><AppIcon :name="part.icon" :size="19"
              /></span>
              <span class="font-mono text-xs text-muted">0{{ i + 1 }}</span>
            </div>
            <h3 class="mt-5 font-heading font-semibold">{{ part.title }}</h3>
            <p class="mt-2 text-sm leading-relaxed text-muted">
              {{ part.text }}
            </p>
          </div>
        </div>
      </div>
    </section>

    <section class="py-20">
      <div class="container-page">
        <SectionHeading
          eyebrow="In ontwikkeling"
          title="Wat AITJE hierna bouwt."
          intro="Deze producten zijn nog niet beschikbaar. Laat je interesse weten om op de hoogte te blijven. Iets vergelijkbaars nu al nodig? Dat kan misschien via [AITJE Custom](/diensten/aitje-custom)."
        />
        <div class="mt-10 grid gap-3 md:grid-cols-2 lg:grid-cols-3">
          <ProductCard
            v-for="product in plannedProducts"
            :key="product.slug"
            :product="product"
          />
        </div>
      </div>
    </section>

    <section class="section-space environment-section">
      <div class="container-page">
        <SectionHeading
          eyebrow="Hardware is de basis, niet het hele product"
          title="Een omgeving die past bij je ambities."
          intro="De software, modellen en inrichting maken het product. De gekozen hardware bepaalt de capaciteit."
        /><AiEnvironment class="mt-10" />
      </div>
    </section>
    <CasesSection
      :slugs="['chatgpt-in-je-eigen-organisatie', 'coder-game-in-24-uur']"
      title="Producten in de praktijk."
    />

    <CtaBanner
      title="Niet zeker welk product past?"
      text="In een persoonlijke online demo laat AITJE zien wat de producten kunnen en bespreek je wat bij jouw situatie past."
      :primary="{ label: 'Vraag een demo aan', to: contactLink('demo') }"
      :secondary="{
        label: 'Bekijk AITJE Custom',
        to: '/diensten/aitje-custom',
      }"
    />
  </div>
</template>
