<script setup lang="ts">
// Homepage (redesign/pages/home.md, besluiten 11, 41, 43, 45, 46, 51).
import { availableProducts } from "@/content/products";
import { articles, featuredArticleSlugs } from "@/content/knowledge";
import { mainCta } from "@/content/site";

usePageSeo({
  title: "AITJE — Je partner in AI",
  description:
    "AITJE is je partner in AI: eigen AI-producten, advies, installatie en AI op maat, op je eigen hardware of server. Jij houdt de controle, AITJE regelt de techniek.",
  image: "/img/egg-nest.webp",
});

const routes = [
  {
    situation: "Ik wil iets met AI, maar weet niet waar ik moet beginnen.",
    answer: "Start met een AI-scan",
    text: "AITJE onderzoekt je werk en laat zien waar AI echt iets oplevert.",
    to: "/diensten/ai-scan",
    icon: "scan",
  },
  {
    situation: "Ik wil een eigen AI-omgeving die gewoon werkt.",
    answer: "Kies een AITJE-product",
    text: "Een eigen chatassistent of coding agents, gebruiksklaar op je eigen hardware.",
    to: "/producten",
    icon: "box",
  },
  {
    situation: "Ik heb een proces dat slimmer kan, maar er bestaat nog niets voor.",
    answer: "Laat het bouwen met AITJE Custom",
    text: "Van idee naar werkende oplossing, in urenblokken die jij goedkeurt.",
    to: "/diensten/aitje-custom",
    icon: "sparkles",
  },
  {
    situation: "We gebruiken al AI, maar het levert te weinig op.",
    answer: "Laat je AI optimaliseren",
    text: "Betere resultaten, lagere kosten en meer controle over wat je al hebt.",
    to: "/diensten/optimalisatie",
    icon: "gauge",
  },
];

const benefits = [
  {
    title: "Je eigen AI. Geen rekening per vraag.",
    text: "Met lokale modellen op je eigen hardware of server betaal je niet per vraag aan een externe AI-aanbieder. Hardware, stroom en ondersteuning blijven wel kostenposten.",
    icon: "cpu",
  },
  {
    title: "Blijft werken als een ander uitvalt.",
    text: "De lokale functies zijn niet afhankelijk van een externe AI-dienst. Wel van je eigen omgeving: het apparaat of de server, stroom en je netwerk.",
    icon: "wifi-off",
  },
  {
    title: "Je data in je eigen omgeving.",
    text: "Bij lokaal gebruik blijven documenten en vragen op je eigen hardware of server. Zet je bewust een online functie aan, dan weet je vooraf wat er gedeeld wordt.",
    icon: "shield",
  },
  {
    title: "Iemand die meedenkt.",
    text: "Een telefoonnummer en mensen die meedenken over wat past. Ook na de oplevering, als je dat wilt.",
    icon: "users",
  },
];

const steps = [
  { title: "Gesprek of demo", text: "Je vertelt waar je tegenaan loopt. AITJE laat zien wat er kan en denkt mee over wat past." },
  { title: "Scan of concrete vraag", text: "Een AI-scan als je breed wilt kijken, of direct een voorstel als je vraag al duidelijk is." },
  { title: "Bouwen en installeren", text: "AITJE levert een product, richt je omgeving in of bouwt AI op maat, en test alles." },
  { title: "Blijven meedenken", text: "Hulp, updates en nieuwe modellen, zodat je opstelling de beste blijft voor jouw werk." },
];

const audiences = [
  {
    title: "Voor bedrijven",
    text: "AI die past bij jouw bedrijf. Van een eerste vraag tot een eigen AI-omgeving: AITJE helpt onderzoeken, kiezen en toepassen.",
    links: [
      { label: "Diensten", to: "/diensten" },
      { label: "Producten", to: "/producten" },
    ],
  },
  {
    title: "Voor makers en professionals",
    text: "Je eigen AI voor het werk dat jij maakt. Gebruik geschikte eigen hardware of laat AITJE een passende omgeving adviseren en inrichten.",
    links: [{ label: "Producten", to: "/producten" }],
  },
  {
    title: "Voor IT-bedrijven en bureaus",
    text: "AI-specialist voor jouw klanten. Jij houdt de klantrelatie, AITJE levert de kennis en uitvoering voor de afgesproken AI-vraag.",
    links: [{ label: "Samenwerken", to: "/diensten/voor-it-bedrijven" }],
  },
];

const featuredArticles = computed(() =>
  featuredArticleSlugs.map((slug) => articles.find((a) => a.slug === slug)).filter((a) => a !== undefined),
);
</script>

<template>
  <div>
    <!-- Hero -->
    <section class="relative overflow-hidden pt-28 pb-16 md:pt-36 md:pb-24">
      <div class="pointer-events-none absolute -top-40 -right-40 -z-10 size-[46rem] rounded-full bg-brand/20 blur-3xl" />
      <svg class="pointer-events-none absolute top-24 right-0 -z-10 hidden h-[36rem] w-[52rem] text-brand lg:block" viewBox="0 0 800 560" fill="none" aria-hidden="true">
        <ellipse cx="520" cy="300" rx="330" ry="210" stroke="currentColor" stroke-opacity="0.5" />
        <ellipse cx="520" cy="300" rx="250" ry="330" stroke="currentColor" stroke-opacity="0.25" transform="rotate(-24 520 300)" />
        <circle cx="205" cy="250" r="6" fill="currentColor" />
        <circle cx="742" cy="140" r="4" fill="currentColor" />
        <circle cx="610" cy="505" r="5" fill="currentColor" />
      </svg>

      <div class="container-page grid items-center gap-10 lg:grid-cols-[1.1fr_1fr]">
        <div>
          <p class="eyebrow mb-6 inline-flex items-center gap-2 rounded-full border border-line bg-surface px-3 py-1.5 text-ink/70">
            <span class="size-1.5 rounded-full bg-brand" /> Nederlandse AI-specialist met eigen producten
          </p>
          <h1 class="font-heading text-[3.2rem] leading-[0.98] font-bold sm:text-[4.5rem] lg:text-[5.4rem]">
            Je partner
            <span class="relative inline-block whitespace-nowrap">
              <span class="relative z-10">in AI.</span>
              <span class="absolute inset-x-[-0.1em] bottom-[0.08em] -z-0 h-[0.32em] rounded-sm bg-brand" aria-hidden="true" />
            </span>
          </h1>
          <p class="mt-7 max-w-xl text-xl leading-relaxed text-ink/80 md:text-2xl">
            AI op je eigen hardware of server. Jij houdt de controle, AITJE regelt de techniek.
          </p>
          <p class="mt-4 max-w-xl text-muted">
            Advies, eigen AI-producten, installatie en AI op maat. Van de eerste vraag tot het onderhoud jaren later.
          </p>
          <div class="mt-9 flex flex-col gap-3 sm:flex-row">
            <UiButton :to="mainCta.to" size="lg" arrow>{{ mainCta.label }}</UiButton>
            <UiButton to="/producten" variant="secondary" size="lg">Bekijk de producten</UiButton>
          </div>
          <ul class="mt-10 flex flex-wrap gap-x-6 gap-y-2 text-sm text-ink/70">
            <li class="flex items-center gap-2"><AppIcon name="check" :size="16" class="text-brand-ink" /> Eigen producten</li>
            <li class="flex items-center gap-2"><AppIcon name="check" :size="16" class="text-brand-ink" /> Advies, bouw en installatie</li>
            <li class="flex items-center gap-2"><AppIcon name="check" :size="16" class="text-brand-ink" /> Bereikbaar na oplevering</li>
          </ul>
        </div>

        <div class="relative mx-auto w-full max-w-xl">
          <div class="relative aspect-square overflow-hidden rounded-[2.5rem] bg-surface shadow-lift">
            <img src="/img/egg-nest.webp" alt="Een gouden ei tussen witte eieren in een nest" class="size-full object-cover" fetchpriority="high" />
          </div>
          <div class="absolute -bottom-5 -left-4 flex items-center gap-3 rounded-2xl border border-line bg-surface/95 p-3 pr-5 shadow-lift backdrop-blur sm:-left-10">
            <img src="/img/box-assistent.webp" alt="" class="size-14 rounded-xl bg-sand object-contain p-1" />
            <div>
              <p class="text-sm font-semibold">AITJE Assistent</p>
              <p class="text-xs text-muted">Je eigen AI-chatassistent</p>
            </div>
          </div>
          <div class="absolute -top-4 -right-3 flex items-center gap-3 rounded-2xl border border-line-dark bg-ink/95 p-3 pr-5 text-white shadow-lift backdrop-blur sm:-right-8">
            <img src="/img/box-coder.webp" alt="" class="size-14 rounded-xl bg-white object-contain p-1" />
            <div>
              <p class="text-sm font-semibold">AITJE Coder</p>
              <p class="font-mono text-[0.7rem] text-brand">$ zonder externe tokens</p>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Waar sta jij? -->
    <section class="py-20 md:py-28">
      <div class="container-page">
        <SectionHeading
          eyebrow="Waar sta jij?"
          title="Je hoeft niet te weten welk model of welke server je nodig hebt."
          intro="Begin bij waar je tegenaan loopt. AITJE vertaalt dat naar de route die bij je past."
        />
        <div class="mt-12 grid gap-4 md:grid-cols-2">
          <NuxtLink
            v-for="route in routes"
            :key="route.to"
            :to="route.to"
            class="group relative flex flex-col gap-6 overflow-hidden rounded-panel border border-line bg-surface p-7 transition-all duration-300 hover:-translate-y-1 hover:border-ink hover:shadow-lift md:p-9"
          >
            <p class="font-heading text-xl leading-snug font-semibold text-ink/80 md:text-2xl">“{{ route.situation }}”</p>
            <div class="mt-auto flex items-end justify-between gap-4 border-t border-line pt-6">
              <div class="flex items-start gap-4">
                <span class="grid size-11 shrink-0 place-items-center rounded-2xl bg-brand">
                  <AppIcon :name="route.icon" :size="21" />
                </span>
                <div>
                  <p class="font-semibold">{{ route.answer }}</p>
                  <p class="mt-1 text-sm text-muted">{{ route.text }}</p>
                </div>
              </div>
              <span class="grid size-10 shrink-0 place-items-center rounded-full bg-ink text-white transition-colors group-hover:bg-brand group-hover:text-ink">
                <AppIcon name="arrow-right" :size="18" />
              </span>
            </div>
          </NuxtLink>
        </div>
      </div>
    </section>

    <!-- Voordelen -->
    <section class="px-3 md:px-5">
      <div class="on-dark relative isolate overflow-hidden rounded-[2.25rem] bg-ink py-20 text-white md:py-28">
        <div class="pointer-events-none absolute -bottom-40 -left-32 -z-10 size-[36rem] rounded-full bg-brand/15 blur-3xl" />
        <div class="container-page grid gap-14 lg:grid-cols-[1fr_1.2fr] lg:items-center">
          <div>
            <SectionHeading
              eyebrow="Je eigen AI-omgeving"
              title="Je eigen AI. AITJE regelt de techniek."
              intro="AI op je eigen hardware of een eigen server is het specialisme van AITJE. Waar een externe dienst beter past, zegt AITJE dat ook."
              dark
            />
            <div class="relative mt-10 overflow-hidden rounded-[1.75rem]">
              <img src="/img/no-token-costs.webp" alt="Een hand op een lokaal AI-apparaat naast een stapel munten" loading="lazy" class="aspect-[16/10] w-full object-cover" />
            </div>
          </div>
          <div class="grid gap-4 sm:grid-cols-2">
            <div v-for="benefit in benefits" :key="benefit.title" class="rounded-card border border-line-dark bg-charcoal p-6">
              <span class="grid size-10 place-items-center rounded-xl bg-brand text-ink">
                <AppIcon :name="benefit.icon" :size="19" />
              </span>
              <h3 class="mt-5 font-heading text-lg leading-snug font-semibold">{{ benefit.title }}</h3>
              <p class="mt-2 text-sm leading-relaxed text-muted-dark">{{ benefit.text }}</p>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Producten -->
    <section class="py-20 md:py-28">
      <div class="container-page">
        <div class="flex flex-col justify-between gap-6 md:flex-row md:items-end">
          <SectionHeading
            eyebrow="AI-producten"
            title="Kant-en-klare AI, waarin het uitzoekwerk al is gedaan."
            intro="Modellen, software en configuratie op elkaar afgestemd. Zelf installeren of gebruiksklaar laten opleveren."
          />
          <UiButton to="/producten" variant="secondary" arrow>Alle producten</UiButton>
        </div>
        <div class="mt-12 grid gap-6 md:grid-cols-2">
          <ProductCard v-for="product in availableProducts" :key="product.slug" :product="product" />
        </div>
      </div>
    </section>

    <!-- Cases -->
    <CasesSection
      :slugs="['chatgpt-in-je-eigen-organisatie', 'council-hub', 'coder-game-in-24-uur']"
      title="AI die echt werk doet."
      intro="Van een eigen ChatGPT op kantoor tot agents die tickets voorbereiden. Kijk wat AITJE bouwt."
    />

    <!-- Werkwijze -->
    <section class="bg-sand py-20 md:py-28">
      <div class="container-page">
        <SectionHeading
          eyebrow="Zo werkt het"
          title="Van eerste vraag tot oplossing die blijft werken."
          intro="Geen dik rapport dat in een la verdwijnt. AITJE onderzoekt wat past, bouwt het en blijft bereikbaar."
        />
        <div class="mt-12">
          <StepList :steps="steps" />
        </div>
        <div class="mt-10 flex flex-col gap-3 sm:flex-row">
          <UiButton to="/diensten/ai-scan" arrow>Bekijk de AI-scan</UiButton>
          <UiButton to="/diensten" variant="secondary">Alle diensten</UiButton>
        </div>
      </div>
    </section>

    <!-- Voor wie -->
    <section class="py-20 md:py-28">
      <div class="container-page">
        <SectionHeading eyebrow="Voor wie" title="Voor iedereen die AI wil laten werken." />
        <div class="mt-12 grid gap-6 lg:grid-cols-3">
          <div
            v-for="(audience, i) in audiences"
            :key="audience.title"
            class="flex flex-col rounded-panel p-8"
            :class="i === 2 ? 'on-dark bg-ink text-white' : 'border border-line bg-surface'"
          >
            <p class="font-mono text-xs tracking-widest" :class="i === 2 ? 'text-brand' : 'text-brand-ink'">0{{ i + 1 }}</p>
            <h3 class="mt-4 font-heading text-2xl font-bold">{{ audience.title }}</h3>
            <p class="mt-3 leading-relaxed" :class="i === 2 ? 'text-muted-dark' : 'text-muted'">{{ audience.text }}</p>
            <div class="mt-auto flex flex-wrap gap-2 pt-8">
              <UiButton
                v-for="link in audience.links"
                :key="link.to"
                :to="link.to"
                :variant="i === 2 ? 'primary' : 'secondary'"
                size="sm"
                arrow
              >
                {{ link.label }}
              </UiButton>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Over en visie -->
    <section class="pb-20 md:pb-28">
      <div class="container-page grid gap-10 lg:grid-cols-2 lg:items-center">
        <div class="relative overflow-hidden rounded-panel">
          <img src="/img/netherlands.webp" alt="Een fietser op een pad langs een Hollandse molen" loading="lazy" class="aspect-[4/3] w-full object-cover" />
        </div>
        <div>
          <p class="eyebrow text-brand-ink">Over AITJE</p>
          <blockquote class="mt-5 font-heading text-[1.9rem] leading-[1.15] font-bold md:text-[2.4rem]">
            “De vraag is niet of het duurder is. De vraag is of je het zelf uitzoekt of dat iemand het voor je doet.”
          </blockquote>
          <p class="mt-6 leading-relaxed text-muted">
            AITJE is een Nederlands AI-productbedrijf en specialist. Eigen producten, actuele kennis en mensen die bereikbaar blijven.
            Afhankelijkheid mag een bewuste keuze zijn. Niet een onbedoeld gevolg.
          </p>
          <div class="mt-8 flex flex-col gap-3 sm:flex-row">
            <UiButton to="/over-aitje" variant="dark" arrow>Over AITJE</UiButton>
            <UiButton to="/visie" variant="secondary">Lees de visie</UiButton>
          </div>
        </div>
      </div>
    </section>

    <!-- Kenniscentrum -->
    <section class="border-t border-line py-20 md:py-28">
      <div class="container-page">
        <div class="flex flex-col justify-between gap-6 md:flex-row md:items-end">
          <SectionHeading
            eyebrow="Kenniscentrum"
            title="AI in gewone taal."
            intro="Wat is een LLM, wat betekent lokale AI en wat doet een agent eigenlijk? Heldere uitleg, zonder hype."
          />
          <UiButton to="/kenniscentrum" variant="secondary" arrow>Naar het kenniscentrum</UiButton>
        </div>
        <div class="mt-12 grid gap-6 md:grid-cols-3">
          <ArticleCard v-for="article in featuredArticles" :key="article.slug" :article="article" />
        </div>
      </div>
    </section>

    <CtaBanner />
  </div>
</template>
