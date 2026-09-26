<script setup lang="ts">
// Services overview (redesign/pages/services.md, besluiten 28, 49, 51).
import { services, partnerService, getService } from "@/content/services";

usePageSeo({
  title: "Diensten",
  description:
    "Wat AITJE voor je doet: AI-scan, advies en analyse, installatie, optimalisatie, veilig AI-gebruik, AI op maat en ondersteuning. Van eerste vraag tot onderhoud.",
  breadcrumbs: [{ name: "Diensten", path: "/diensten" }],
});

const scan = getService("ai-scan")!;
const custom = getService("aitje-custom")!;
const others = services.filter((s) => s.slug !== "ai-scan" && s.slug !== "aitje-custom");
</script>

<template>
  <div>
    <PageHero
      eyebrow="Diensten"
      title="Wat kan AITJE voor je doen?"
      subline="Je AI-vraag onderzoeken, een omgeving inrichten of een complete oplossing bouwen. AITJE helpt je kiezen en uitvoeren. Van de eerste vraag tot het onderhoud jaren later."
    />

    <!-- Uitgelicht -->
    <section class="pb-16">
      <div class="container-page grid gap-6 lg:grid-cols-2">
        <NuxtLink
          :to="`/diensten/${scan.slug}`"
          class="group relative flex flex-col overflow-hidden rounded-panel bg-brand p-8 transition-transform duration-300 hover:-translate-y-1 md:p-10"
        >
          <UiBadge tone="dark" class="self-start">Startpunt van bijna elk traject</UiBadge>
          <h2 class="mt-8 font-heading text-[2rem] leading-tight font-bold md:text-[2.5rem]">Niet weten waar je moet beginnen?</h2>
          <p class="mt-4 max-w-md text-lg text-ink/80">
            De AI-scan onderzoekt je werk, je workflows en je bestaande AI. Je krijgt een praktisch rapport met kansen en vervolgstappen.
          </p>
          <div class="mt-auto flex items-end justify-between gap-4 pt-10">
            <div>
              <p class="font-heading text-3xl font-bold">{{ scan.price.label }}</p>
              <p class="text-sm text-ink/70">excl. btw</p>
            </div>
            <span class="inline-flex items-center gap-2 rounded-full bg-ink px-5 py-3 text-sm font-semibold text-white">
              {{ scan.cta.label }} <AppIcon name="arrow-right" :size="16" class="transition-transform group-hover:translate-x-1" />
            </span>
          </div>
        </NuxtLink>

        <NuxtLink
          :to="`/diensten/${custom.slug}`"
          class="on-dark group relative flex flex-col overflow-hidden rounded-panel bg-ink p-8 text-white transition-transform duration-300 hover:-translate-y-1 md:p-10"
        >
          <img src="/img/ai-op-maat.webp" alt="" loading="lazy" class="absolute inset-0 -z-0 size-full object-cover opacity-30 transition-transform duration-700 group-hover:scale-105" />
          <div class="absolute inset-0 bg-gradient-to-t from-ink via-ink/80 to-ink/30" />
          <div class="relative flex h-full flex-col">
            <UiBadge tone="brand" class="self-start">AITJE Custom — AI op maat</UiBadge>
            <h2 class="mt-8 font-heading text-[2rem] leading-tight font-bold md:text-[2.5rem]">Iets specifieks nodig?</h2>
            <p class="mt-4 max-w-md text-lg text-white/80">
              Van idee naar werkende oplossing, op jouw hardware of server. Na ieder urenblok beslis jij over het vervolg.
            </p>
            <div class="mt-auto flex items-end justify-between gap-4 pt-10">
              <div>
                <p class="font-heading text-3xl font-bold">{{ custom.price.label }}</p>
                <p class="text-sm text-white/60">excl. btw</p>
              </div>
              <span class="inline-flex items-center gap-2 rounded-full bg-brand px-5 py-3 text-sm font-semibold text-ink">
                {{ custom.cta.label }} <AppIcon name="arrow-right" :size="16" class="transition-transform group-hover:translate-x-1" />
              </span>
            </div>
          </div>
        </NuxtLink>
      </div>
    </section>

    <!-- Overige diensten -->
    <section class="py-16">
      <div class="container-page">
        <SectionHeading eyebrow="Alle diensten" title="Advies, uitvoering en ondersteuning." />
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

    <CasesSection :slugs="['council-hub', 'werkbon-naar-offerte', 'documenten-doorzoeken-en-lakken']" />

    <CtaBanner title="Niet zeker welke dienst past?" text="Vertel wat je wilt bereiken. AITJE denkt mee over de route die bij je past, ook als die klein begint." />
  </div>
</template>
