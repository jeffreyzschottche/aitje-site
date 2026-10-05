<script setup lang="ts">
// Service page (redesign/pages/service.md, besluit 51).
import { getService, slaPlans, partnerService } from "@/content/services";
import InstallationSetup from "@/components/InstallationSetup.vue";
import OptimizationOptions from "@/components/OptimizationOptions.vue";
import SafeAiControls from "@/components/SafeAiControls.vue";
import SlaPartnership from "@/components/SlaPartnership.vue";
import CustomProjectJourney from "@/components/CustomProjectJourney.vue";
import ServicePageNav from "@/components/ServicePageNav.vue";

const route = useRoute();
const service = getService(String(route.params.slug));

if (!service) {
  throw createError({
    statusCode: 404,
    statusMessage: "Dienst niet gevonden",
    fatal: true,
  });
}

const related = service.related.map((slug) =>
  slug === partnerService.slug
    ? { ...partnerService, price: "Per opdracht" }
    : { ...getService(slug)!, price: getService(slug)!.price.label },
);
const isSupport = service.slug === "ondersteuning-en-onderhoud";
const isAdvice = service.slug === "advies-en-analyse";
const isCustom = service.slug === "aitje-custom";
const sections = [
  { label: "Wat houdt het in?", href: "#over-de-dienst" },
  { label: "De aanpak", href: "#aanpak" },
  { label: "Wat je krijgt", href: "#oplevering" },
  { label: "Kosten & afspraken", href: isSupport ? "#sla-niveaus" : "#dienst-prijs" },
  { label: "Veelgestelde vragen", href: "#dienst-vragen" },
];

usePageSeo({
  title: `${service.name}: ${service.headline}`,
  description: service.seoDescription,
  image: service.image,
  breadcrumbs: [
    { name: "Diensten", path: "/diensten" },
    { name: service.name, path: `/diensten/${service.slug}` },
  ],
  faq: service.faq,
  schema: [
    {
      "@type": "Service",
      name: service.name,
      description: service.subline,
      provider: { "@id": `${useRuntimeConfig().public.siteUrl}/#organization` },
      areaServed: "NL",
    },
  ],
});
</script>

<template>
  <div>
    <PageHero
      class="service-world-hero"
      :eyebrow="service.name"
      :title="service.headline"
      :subline="service.subline"
      :image="service.image"
      :background="service.background"
      :background-strong="service.backgroundStrong"
      :immersive="service.slug !== 'aitje-custom'"
      :image-fit="service.slug === 'aitje-custom' ? 'contain' : 'cover'"
    >
      <template #before>
        <NuxtLink
          to="/diensten"
          class="mb-6 inline-block text-sm text-muted hover:text-ink"
          >← Alle diensten</NuxtLink
        >
      </template>
      <div class="mt-9 flex flex-col gap-3 sm:flex-row sm:items-center">
        <UiButton :to="service.cta.to" size="lg" arrow>{{
          service.cta.label
        }}</UiButton>
        <p class="text-sm text-muted sm:ml-3">
          <strong class="block font-heading text-lg text-ink">{{
            service.price.label
          }}</strong>
          <span v-if="!service.price.onRequest && service.price.label !== 'Vast uurtarief'">Excl. btw</span>
        </p>
      </div>
    </PageHero>

    <ServicePageNav :highlights="service.highlights" :sections="sections" />
    <!-- Wat het is -->
    <section id="over-de-dienst" class="service-intro scroll-mt-24 py-16 md:py-20">
      <div class="container-page grid items-center gap-12 lg:grid-cols-[1.3fr_1fr]">
        <div class="space-y-5 text-lg leading-relaxed text-ink/85">
          <RichText
            v-for="(p, i) in service.intro"
            :key="i"
            :text="p"
            tag="p"
          />
        </div>
        <div class="rounded-panel border border-line bg-surface p-7">
          <h2 class="font-heading text-xl font-bold">Voor wie</h2>
          <CheckList :items="service.forWho" class="mt-5" />
        </div>
      </div>
    </section>

    <AdviceAnalysisPlan v-if="isAdvice" />
    <InstallationSetup v-if="service.slug === 'installatie-en-inrichting'" />
    <OptimizationOptions v-if="service.slug === 'optimalisatie'" />
    <SafeAiControls v-if="service.slug === 'veilig-ai-gebruik'" />
    <SlaPartnership v-if="isSupport" />

    <template v-if="service.slug === 'token-management-en-optimalisatie'">
      <TokenUsageOverview />
      <TokenWorkflowExample />
    </template>

    <!-- Hoe het werkt -->
    <CustomProjectJourney v-if="isCustom" :steps="service.steps" :deliverables="service.deliverables" />
    <section v-else id="aanpak" class="scroll-mt-24 bg-sand py-20">
      <div class="container-page">
        <SectionHeading
          eyebrow="Hoe het werkt"
          :title="isAdvice ? 'Van vraag naar een plan.' : 'Stap voor stap, zonder verrassingen.'"
        />
        <div class="mt-10"><StepList :steps="service.steps" /></div>
      </div>
    </section>

    <!-- Wat je krijgt + onderdelen -->
    <section v-if="!isCustom" id="oplevering" class="scroll-mt-24 py-20">
      <div class="container-page grid gap-12 lg:grid-cols-[1fr_1.3fr]">
        <div>
          <SectionHeading eyebrow="Wat je krijgt" :title="isAdvice ? 'Keuzes waar je mee verder kunt.' : 'Concreet resultaat.'" />
          <CheckList :items="service.deliverables" class="mt-8" />
          <p v-if="isAdvice" class="mt-5 text-sm leading-relaxed text-muted">De diepgang volgt je vraag. Een korte sessie geeft een schriftelijke samenvatting; een analyse werkt de afgesproken onderdelen verder uit.</p>
        </div>
        <div v-if="service.parts?.length">
          <p class="eyebrow text-brand-ink">Onderdelen</p>
          <div class="mt-5 space-y-4">
            <div
              v-for="part in service.parts"
              :key="part.name"
              class="flex flex-col gap-3 rounded-card border border-line bg-surface p-6 sm:flex-row sm:items-start sm:justify-between"
            >
              <div>
                <h3 class="font-heading text-lg font-semibold">
                  {{ part.name }}
                </h3>
                <p class="mt-1.5 text-sm leading-relaxed text-muted">
                  {{ part.text }}
                </p>
              </div>
              <p
                class="shrink-0 font-heading font-bold whitespace-nowrap sm:text-right"
              >
                {{ part.price }}
              </p>
            </div>
          </div>
        </div>
        <ServiceBlueprint
          v-else
          :title="service.name"
          :items="service.deliverables"
          :icon="service.icon"
        />
      </div>
      <aside v-if="isAdvice" class="container-page mt-12">
        <div class="flex flex-col gap-6 border-t border-line pt-8 md:flex-row md:items-center md:justify-between">
          <div class="max-w-2xl">
            <p class="eyebrow text-brand-ink">Van plan naar uitvoering</p>
            <h3 class="mt-3 font-heading text-2xl font-bold">Akkoord? Dan kan AITJE bouwen.</h3>
            <p class="mt-3 leading-relaxed text-muted">Je weet wat er gebouwd wordt, welke controles nodig zijn en hoeveel uren dat naar verwachting kost. Pas na jouw akkoord op het plan en de uren begint de bouw.</p>
          </div>
          <UiButton to="/diensten/aitje-custom" variant="secondary" arrow class="shrink-0">Bekijk AI op maat</UiButton>
        </div>
      </aside>
    </section>

    <!-- SLA-vergelijking -->
    <section v-if="isSupport" id="sla-niveaus" class="sla-plan-comparison scroll-mt-24 px-3 md:px-5">
      <div class="on-dark rounded-[2.25rem] bg-ink py-20 text-white">
        <div class="container-page">
          <SectionHeading
            eyebrow="Kies je niveau"
            title="AITJE Core, Plus of Max."
            intro="Alle niveaus: bereikbaar op werkdagen van 09.00 tot 18.00 uur. Ongebruikte uren gaan één maand mee."
            dark
          />
          <div class="mt-12 grid gap-5 lg:grid-cols-3">
            <div
              v-for="plan in slaPlans"
              :key="plan.name"
              class="relative flex flex-col rounded-panel p-7"
              :class="
                plan.highlight
                  ? 'bg-brand text-ink'
                  : 'border border-line-dark bg-charcoal'
              "
            >
              <UiBadge
                v-if="plan.highlight"
                tone="dark"
                class="absolute top-6 right-6"
                >Met AI-APK</UiBadge
              >
              <h3 class="font-heading text-xl font-bold">{{ plan.name }}</h3>
              <p class="mt-5 font-heading text-4xl font-bold">
                {{ plan.price }}
              </p>
              <p
                class="text-sm"
                :class="plan.highlight ? 'text-ink/70' : 'text-muted-dark'"
              >
                per maand, excl. btw
              </p>
              <p class="mt-6 font-mono text-sm">
                {{ plan.hours }} {{ plan.hours === 1 ? "serviceuur" : "serviceuren" }}
                per maand inbegrepen
              </p>
              <ul class="mt-5 space-y-2.5 text-sm">
                <li v-for="f in plan.features" :key="f" class="flex gap-2">
                  <AppIcon
                    name="check"
                    :size="16"
                    class="mt-0.5 shrink-0"
                    :class="plan.highlight ? '' : 'text-brand'"
                  />
                  {{ f }}
                </li>
              </ul>
              <UiButton
                :to="service.cta.to"
                :variant="plan.highlight ? 'dark' : 'light'"
                class="mt-8"
                arrow
                >Bespreek {{ plan.name }}</UiButton
              >
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Prijs en afbakening -->
    <section id="dienst-prijs" class="scroll-mt-24 py-20">
      <div class="container-page grid gap-6 md:grid-cols-2">
        <div class="rounded-panel border-2 border-ink bg-surface p-8">
          <p class="eyebrow text-brand-ink">{{ isCustom ? 'Uurtarief & projectbudget' : 'Prijs' }}</p>
          <p class="mt-4 font-heading text-4xl font-bold">
            {{ service.price.label }}
          </p>
          <p v-if="!service.price.onRequest && service.price.label !== 'Vast uurtarief'" class="text-sm text-muted">
            Excl. btw
          </p>
          <p class="mt-5 leading-relaxed text-muted">
            {{ service.price.note }}
          </p>
          <UiButton :to="service.cta.to" arrow class="mt-7">{{
            service.cta.label
          }}</UiButton>
        </div>
        <div class="rounded-panel border border-line bg-surface p-8">
          <p class="eyebrow text-muted">Niet standaard inbegrepen</p>
          <CheckList :items="service.notIncluded" negative class="mt-5" />
        </div>
      </div>
    </section>

    <CasesSection :slugs="service.caseSlugs" :title="isCustom ? 'Maatwerk in de praktijk.' : 'Herken je dit?'" dark />

    <!-- FAQ -->
    <section id="dienst-vragen" class="scroll-mt-24 py-20 md:py-24">
      <div class="container-page grid gap-12 lg:grid-cols-[1fr_1.6fr]">
        <SectionHeading
          eyebrow="Veelgestelde vragen"
          :title="isCustom ? 'Vragen over jouw project.' : `Vragen over ${service.name}.`"
        >
          <NuxtLink
            to="/faq"
            class="mt-6 inline-flex items-center gap-2 text-sm font-semibold underline decoration-brand underline-offset-4"
          >
            Alle veelgestelde vragen <AppIcon name="arrow-right" :size="15" />
          </NuxtLink>
        </SectionHeading>
        <FaqList :items="service.faq" />
      </div>
    </section>

    <!-- Gerelateerd -->
    <section class="border-t border-line py-20">
      <div class="container-page">
        <h2 class="font-heading text-2xl font-bold">Past hier ook bij</h2>
        <div class="mt-8 grid gap-4 md:grid-cols-3">
          <ServiceCard
            v-for="item in related"
            :key="item.slug"
            :to="`/diensten/${item.slug}`"
            :name="item.name"
            :text="item.short"
            :icon="item.icon"
            :price="item.price"
          />
        </div>
      </div>
    </section>

    <CtaBanner
      :title="service.headline"
      :text="service.subline"
      :primary="service.cta"
      :secondary="{ label: 'Bespreek je AI-vraag', to: '/contact' }"
    />
  </div>
</template>
