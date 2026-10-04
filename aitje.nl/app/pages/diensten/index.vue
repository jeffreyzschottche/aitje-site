<script setup lang="ts">
// Services overview (redesign/pages/services.md, besluiten 28, 49, 51).
import { services, partnerService, getService } from "@/content/services";

usePageSeo({
  title: "Diensten",
  description:
    "Wat AITJE voor je doet: AI-scan, advies en analyse, installatie, optimalisatie, veilig AI-gebruik, AI op maat en ondersteuning. Van eerste vraag tot onderhoud.",
  breadcrumbs: [{ name: "Diensten", path: "/diensten" }],
});
useHead({
  link: [{ rel: "preload", as: "image", href: "/img/redesign/services-nature-tech-bridge.webp", fetchpriority: "high" }],
});

const scan = getService("ai-scan")!;
const custom = getService("aitje-custom")!;
const others = services.filter(
  (s) => s.slug !== "ai-scan" && s.slug !== "aitje-custom",
);
</script>

<template>
  <div>
    <PageHero
      class="services-bridge-hero"
      eyebrow="Diensten"
      title="Van een AI-vraag naar iets dat werkt."
      subline="Je AI-vraag onderzoeken, een omgeving inrichten of een complete oplossing bouwen. AITJE helpt je kiezen en uitvoeren. Van de eerste vraag tot het onderhoud jaren later."
      image="/img/redesign/services.webp"
      background="/img/redesign/services-nature-tech-bridge.webp"
      dark
      immersive
      image-alt="Een open houten gereedschapskist met gereedschap en het gloeiende AITJE-ei"
    >
      <template #title>
        Van een AI-vraag <span class="services-bridge-title">naar iets dat werkt.</span>
      </template>
    </PageHero>

    <!-- Uitgelicht -->
    <section class="pb-16">
      <div class="container-page grid gap-6 lg:grid-cols-2">
        <NuxtLink
          :to="`/diensten/${scan.slug}`"
          class="group relative flex flex-col overflow-hidden rounded-panel bg-brand p-8 transition-transform duration-300 hover:-translate-y-1 md:p-10"
        >
          <UiBadge tone="dark" class="self-start"
            >Startpunt van bijna elk traject</UiBadge
          >
          <h2
            class="mt-8 font-heading text-[2rem] leading-tight font-bold md:text-[2.5rem]"
          >
            Niet weten waar je moet beginnen?
          </h2>
          <p class="mt-4 max-w-md text-lg text-ink/80">
            De AI-scan onderzoekt je werk, je workflows en je bestaande AI. Je
            krijgt een praktisch rapport met kansen en vervolgstappen.
          </p>
          <div class="mt-auto flex items-end justify-between gap-4 pt-10">
            <div>
              <p class="font-heading text-3xl font-bold">
                {{ scan.price.label }}
              </p>
              <p class="text-sm text-ink/70">(Excl btw) · voorlopig</p>
            </div>
            <span
              class="inline-flex items-center gap-2 rounded-full bg-ink px-5 py-3 text-sm font-semibold text-white"
            >
              {{ scan.cta.label }}
              <AppIcon
                name="arrow-right"
                :size="16"
                class="transition-transform group-hover:translate-x-1"
              />
            </span>
          </div>
        </NuxtLink>

        <NuxtLink
          :to="`/diensten/${custom.slug}`"
          class="on-dark group relative flex flex-col overflow-hidden rounded-panel bg-ink p-8 text-white transition-transform duration-300 hover:-translate-y-1 md:p-10"
        >
          <img
            src="/img/redesign/raven-scene.webp"
            alt=""
            loading="lazy"
            class="absolute inset-0 -z-0 size-full object-cover opacity-30 transition-transform duration-700 group-hover:scale-105"
          />
          <div
            class="absolute inset-0 bg-gradient-to-t from-ink via-ink/80 to-ink/30"
          />
          <div class="relative flex h-full flex-col">
            <UiBadge tone="brand" class="self-start"
              >AITJE Custom — AI op maat</UiBadge
            >
            <h2
              class="mt-8 font-heading text-[2rem] leading-tight font-bold md:text-[2.5rem]"
            >
              Iets specifieks nodig?
            </h2>
            <p class="mt-4 max-w-md text-lg text-white/80">
              Van idee naar werkende oplossing, op jouw hardware of server. Na
              ieder urenblok beslis jij over het vervolg.
            </p>
            <div class="mt-auto flex items-end justify-between gap-4 pt-10">
              <div>
                <p class="font-heading text-3xl font-bold">
                  {{ custom.price.label }}
                </p>
                <p class="text-sm text-white/60">(Excl btw) · voorlopig</p>
              </div>
              <span
                class="inline-flex items-center gap-2 rounded-full bg-brand px-5 py-3 text-sm font-semibold text-ink"
              >
                {{ custom.cta.label }}
                <AppIcon
                  name="arrow-right"
                  :size="16"
                  class="transition-transform group-hover:translate-x-1"
                />
              </span>
            </div>
          </div>
        </NuxtLink>
      </div>
    </section>

    <section class="py-10">
      <div class="container-page about-composition">
        <div class="service-overview-art">
          <img
            src="/img/redesign/infrastructure.webp"
            alt="Compacte AI-hardware, ter illustratie van een eigen omgeving"
            width="1536"
            height="1024"
            loading="lazy"
          /><span class="image-caption"
            >MODELLEN + SOFTWARE + HARDWARE + MENSEN</span
          >
        </div>
        <SectionHeading
          eyebrow="Meer dan een advies"
          title="Van uitzoeken tot gebruiksklaar."
          intro="Een rapport is soms precies wat je nodig hebt. Soms een kleine aanpassing. En soms een complete omgeving. AITJE helpt je bepalen wat past en kan de uitvoering verzorgen."
          ><CheckList
            :items="[
              'Een duidelijke scope vóór de start',
              'Hardware, software en installatie apart begroot',
              'Ondersteuning afspreken wanneer je die nodig hebt',
            ]"
            class="mt-7"
        /></SectionHeading>
      </div>
    </section>
    <!-- Overige diensten -->
    <section class="py-10">
      <div class="container-page"><TokenServiceCallout /></div>
    </section>

    <section class="py-16">
      <div class="container-page">
        <SectionHeading
          eyebrow="Alle diensten"
          title="Advies, uitvoering en ondersteuning."
        />
        <div class="mt-10 grid gap-4 md:grid-cols-2 lg:grid-cols-3">
          <ServiceCard
            v-for="service in others"
            :key="service.slug"
            :to="`/diensten/${service.slug}`"
            :name="service.name"
            :text="service.short"
            :icon="service.icon"
            :price="service.price.label"
          />
          <ServiceCard
            :to="`/diensten/${partnerService.slug}`"
            :name="partnerService.name"
            :text="partnerService.short"
            :icon="partnerService.icon"
            price="Per opdracht"
            dark
          />
        </div>
      </div>
    </section>

    <CasesSection
      :slugs="[
        'council-hub',
        'documenten-doorzoeken-en-lakken',
      ]"
    />

    <CtaBanner
      title="Niet zeker welke dienst past?"
      text="Vertel wat je wilt bereiken. AITJE denkt mee over de route die bij je past, ook als die klein begint."
    />
  </div>
</template>

<style scoped>
.services-bridge-hero {
  background: #0c211d;
  border-bottom: 0;
  margin-bottom: 45px;
}
.services-bridge-title {
  color: #facc15;
}
.services-bridge-hero :deep(.photo-bg) {
  object-position: 65% center;
}
.services-bridge-hero :deep(.photo-wash) {
  background:
    linear-gradient(90deg, rgb(4 19 16 / 0.86), rgb(4 19 16 / 0.72) 35%, rgb(4 19 16 / 0.18) 60%, transparent 85%),
    linear-gradient(180deg, rgb(4 19 16 / 0.12), transparent 40%, rgb(4 19 16 / 0.35));
}
.services-bridge-hero :deep(.page-hero-layout) {
  min-height: 540px;
}
.services-bridge-hero :deep(.page-hero-intro) {
  color: #e5ebe0;
}
.services-bridge-hero :deep(.page-hero-art) {
  align-self: end;
}
.services-bridge-hero :deep(.service-scene) {
  width: 88%;
  margin-left: 12%;
}
.services-bridge-hero :deep(.service-scene-orbit) {
  opacity: 0.25;
}
.services-bridge-hero :deep(.service-scene-subject) {
  filter: drop-shadow(0 20px 28px rgb(0 0 0 / 0.3));
}
@media (max-width: 767px) {
  .services-bridge-hero {
    margin-bottom: 30px;
  }
  .services-bridge-hero :deep(.page-hero-layout) {
    min-height: 0;
  }
  .services-bridge-hero :deep(.photo-bg) {
    object-position: 78% center;
  }
  .services-bridge-hero :deep(.photo-wash) {
    background: linear-gradient(180deg, rgb(4 19 16 / 0.92), rgb(4 19 16 / 0.82) 38%, rgb(4 19 16 / 0.12) 70%, rgb(4 19 16 / 0.48));
  }
}
</style>
