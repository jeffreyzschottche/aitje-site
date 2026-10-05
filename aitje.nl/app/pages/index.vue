<script setup lang="ts">
import { availableProducts } from "@/content/products";
import { articles, featuredArticleSlugs } from "@/content/knowledge";
import { services, partnerService, serviceIllustrations } from "@/content/services";
usePageSeo({
  title: "AITJE — Je partner in AI",
  description:
    "AI op je eigen hardware of server. Jij houdt de controle, AITJE regelt de techniek. Eigen AI-producten, advies, installatie en AI op maat.",
  image: "/img/redesign/aitje-egg-hero-engraved.webp",
});
useHead({
  link: [{ rel: "preload", as: "image", href: "/img/redesign/aitje-egg-hero-engraved.webp", fetchpriority: "high" }],
});
const featured = featuredArticleSlugs
  .map((slug) => articles.find((a) => a.slug === slug))
  .filter((a) => a !== undefined);
const benefits = [
  {
    icon: "shield",
    title: "Houd je vragen en documenten lokaal.",
    text: "Laat ze verwerken op je eigen hardware of server, zonder externe AI-aanbieder voor die verwerking.",
  },
  {
    icon: "cpu",
    title: "Geen externe kosten per vraag.",
    text: "Een lokaal model draait op je eigen hardware of server. Je betaalt daarvoor geen gebruikskosten aan een externe modelaanbieder.",
  },
  {
    icon: "wifi-off",
    title: "Werk door zonder externe AI-dienst.",
    text: "De functies in je eigen omgeving blijven bruikbaar wanneer die omgeving werkt. Online functies hebben wel een verbinding nodig.",
  },
  {
    icon: "phone",
    title: "Een AI-specialist aan je zijde.",
    text: "Van de eerste keuze tot de inrichting van je omgeving: we denken mee en helpen je verder.",
  },
];
const homeServices = [...services, partnerService].map(service => ({
  ...service,
  illustration: serviceIllustrations[service.slug],
}));
const steps = [
  {
    title: "Vertel je vraag",
    text: "Een gesprek of demo. Wat doe je nu, en wat wil je anders?",
    image: "/img/redesign/environment-wren-nest.webp",
  },
  {
    title: "Kies de route",
    text: "Een AI-scan of een gericht voorstel, met duidelijke scope en kosten.",
    image: "/img/redesign/advice-cutout.webp",
  },
  {
    title: "Maak het werkend",
    text: "AITJE bouwt, installeert en test. Je krijgt uitleg bij de oplevering.",
    image: "/img/redesign/infrastructure-cutout.webp",
  },
  {
    title: "Groei verder",
    text: "Kies voor losse hulp of doorlopende ondersteuning en onderhoud.",
    image: "/img/redesign/local-growth-cutout.webp",
  },
];
const audiences = [
  {
    title: "Bedrijven",
    tag: "AI VOOR JE ORGANISATIE",
    icon: "users",
    text: "Minder zoekwerk. Slimmere processen. Een AI-omgeving waar je team mee vooruit kan.",
    to: "/diensten",
    cta: "Ontdek de diensten",
  },
  {
    title: "Makers & professionals",
    tag: "AI VOOR JE VAK",
    icon: "code",
    text: "Schrijven, ontwikkelen en maken met je eigen gereedschap. Op hardware die bij jouw werk past.",
    to: "/producten",
    cta: "Ontdek de producten",
  },
  {
    title: "IT-bedrijven & bureaus",
    tag: "AI VOOR JOUW KLANTEN",
    icon: "handshake",
    text: "Jij houdt de klantrelatie. AITJE brengt de AI-kennis en technische uitvoering mee.",
    to: "/diensten/voor-it-bedrijven",
    cta: "Ontdek de samenwerking",
  },
];
</script>

<template>
  <div class="home-page">
    <section class="home-hero">
      <HeroSkyCollage />
      <HeroDataFlow />
      <HeroEggVisual />
      <div class="container-page home-hero-content">
        <div class="home-hero-copy">
          <p class="eyebrow hero-eyebrow">
            <span class="signal-dot" aria-hidden="true" />
            <span>Nederlandse AI. Dichtbij. Soeverein.</span>
          </p>
          <h1>
            <span class="hero-title-line">Je partner</span>
            <span class="hero-title-line">
              in <span class="highlight-word hero-title-highlight">AI.<svg class="hero-title-underline" viewBox="0 0 160 26" preserveAspectRatio="none" fill="none" aria-hidden="true"><path d="M8 18 C48 8 108 8 152 13" stroke="currentColor" stroke-width="7" stroke-linecap="round" /></svg></span>
            </span>
          </h1>
          <p class="hero-intro">
            <span class="hero-intro-lead">
              Jouw AI-specialisten voor lokale AI, automatisering en slimmere workflows.
            </span>
            Met onafhankelijkheid als uitgangspunt.
          </p>
          <p class="hero-description">
            Wij regelen je AI-oplossing van advies tot installatie, inclusief de
            benodigde hardware of serveromgeving. Met lokale AI blijft je data in
            eigen beheer, zonder externe tokenkosten.
          </p>
          <div class="hero-actions">
            <UiButton to="/diensten" size="lg" arrow>Ontdek de diensten</UiButton>
            <UiButton to="/producten" variant="secondary" size="lg">
              Bekijk de producten
            </UiButton>
          </div>
          <a href="#ontdek" class="hero-scroll">
            <span>↓</span> Ontdek wat er kan
          </a>
        </div>
      </div>
    </section>

    <section id="ontdek" class="benefit-strip">
      <div class="container-page benefit-grid">
        <div v-for="benefit in benefits" :key="benefit.title" class="benefit">
          <AppIcon :name="benefit.icon" :size="26" />
          <div>
            <h2>{{ benefit.title }}</h2>
            <p>{{ benefit.text }}</p>
          </div>
        </div>
      </div>
    </section>

    <section class="home-about section-space">
      <div class="container-page home-about-layout">
        <div class="home-about-copy">
          <p class="eyebrow text-brand">Over AITJE</p>
          <h2>Wie we zijn</h2>
          <div class="home-about-prose">
            <p>
              <strong>Altijd dichtbij. Altijd beschikbaar. Volledig in eigen beheer.</strong>
              Met lokale AI-oplossingen blijf je onafhankelijk van internet,
              externe providers en platformstoringen. Je data blijft binnen je
              organisatie en je voorkomt onnodige abonnementskosten.
            </p>
            <p>
              <em>Wij helpen je AI slimmer, veiliger en goedkoper in te zetten:</em>
              met duidelijke producten, uitbreidingsmogelijkheden en persoonlijke
              begeleiding.
            </p>
            <p>De kracht van AI, zonder de controle uit handen te geven.</p>
          </div>
          <div class="mt-7 flex flex-wrap gap-3">
            <UiButton to="/visie" arrow class="w-full sm:w-auto">
              Ontdek onze visie
            </UiButton>
            <UiButton
              to="/over-aitje"
              variant="secondary"
              arrow
              class="w-full sm:w-auto"
            >
              Meer over ons
            </UiButton>
          </div>
        </div>
        <div class="home-about-video">
          <iframe
            src="https://www.youtube.com/embed/3ZJgaJGeRS4?start=70"
            title="AITJE video"
            loading="lazy"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            referrerpolicy="strict-origin-when-cross-origin"
            allowfullscreen
          />
        </div>
      </div>
    </section>

    <section class="section-space home-services">
      <div class="container-page">
        <div class="section-topline">
          <SectionHeading
            eyebrow="01 / Van vraag naar oplossing"
            title="Wat wil jij mogelijk maken?"
            intro="Onze AI-specialisten nemen het uitzoekwerk uit handen. Met advies, ontwikkeling en beheer helpen we je vooruit in een snel veranderend vakgebied."
          /><NuxtLink to="/diensten" class="text-link"
            >Alle diensten <AppIcon name="arrow-up-right" :size="18"
          /></NuxtLink>
        </div>
        <div class="home-service-grid">
          <NuxtLink
            v-for="service in homeServices"
            :key="service.slug"
            :to="`/diensten/${service.slug}`"
            class="home-service-card"
            :class="{
              'home-service-card--scan': service.slug === 'ai-scan',
              'home-service-card--installation': service.slug === 'installatie-en-inrichting',
              'home-service-card--safe': service.slug === 'veilig-ai-gebruik',
              'home-service-card--custom': service.slug === 'aitje-custom',
            }"
          >
            <div class="home-service-card-top">
              <div class="home-service-artwork" aria-hidden="true">
                <img
                  :src="service.illustration"
                  alt=""
                  width="1024"
                  height="1024"
                  loading="lazy"
                  decoding="async"
                />
              </div>
              <span class="home-service-arrow">
                <AppIcon name="arrow-up-right" :size="17" />
              </span>
            </div>
            <h3>{{ service.slug === 'aitje-custom' ? 'AITJE Custom' : service.name }}</h3>
            <p>{{ service.short }}</p>
          </NuxtLink>
        </div>
      </div>
    </section>

    <section class="nature-scene on-dark">
      <NatureSceneVisual />
      <div class="container-page nature-scene-layout">
        <div class="scene-caption">
          <span class="signal-dot" /> EIGEN KENNIS. EIGEN KRACHT.
        </div>
        <div class="nature-scene-copy">
          <p class="eyebrow text-brand">02 / Eigen regie</p>
          <h2>
            Je eigen AI.<br /><span>Een wereld <span class="scene-title-phrase">vol met</span> mogelijkheden.</span>
          </h2>
          <p>
            Je kennis is waardevol. Je gereedschap ook. AITJE helpt je AI
            gebruiken in een omgeving waar jij grip op houdt.
          </p>
          <p class="scene-secondary">
            Op je eigen hardware of server waar dat past. Met externe modellen
            wanneer die iets toevoegen. De taak bepaalt de oplossing.
          </p>
          <UiButton to="/faq" variant="light" arrow
            >Bekijk de veelgestelde vragen</UiButton
          >
        </div>
      </div>
    </section>

    <section v-if="availableProducts.length" class="section-space product-section">
      <div class="container-page">
        <div class="section-topline">
          <SectionHeading
            eyebrow="03 / Eigen AI-producten"
            title="Bewezen AI. Klaar voor jouw werk."
            intro="Het uitzoekwerk is al gedaan. Modellen, software en configuratie samen in een complete AI-omgeving. Bewezen in de praktijk, met volledige ondersteuning en documentatie. Uit te breiden via AITJE Custom."
          /><NuxtLink to="/producten" class="text-link"
            >Alle producten <AppIcon name="arrow-up-right" :size="18"
          /></NuxtLink>
        </div>
        <div class="product-pair">
          <ProductCard
            v-for="product in availableProducts"
            :key="product.slug"
            :product="product"
            :show-price="false"
          />
        </div>
        <div class="product-footnote">
          <span
            ><AppIcon name="check" :size="16" /> Gebruiksklaar laten opleveren
            of zelf installeren</span
          ><span
            ><AppIcon name="check" :size="16" /> Ondersteuning wanneer jij dat
            wilt</span
          >
        </div>
      </div>
    </section>

    <section class="section-space environment-section">
      <EnvironmentNature />
      <div class="container-page">
        <SectionHeading
          eyebrow="04 / De techniek, begrijpelijk"
          title="Jouw AI. Waar jij wilt werken."
          intro="Van een eigen apparaat tot een centrale server. Ontdek welke opstelling bij jouw situatie kan passen."
        />
        <div class="mt-10"><AiEnvironment /></div>
      </div>
    </section>

    <section class="section-space">
      <div class="container-page">
        <div class="section-topline">
          <SectionHeading
            eyebrow="05 / Voor wie"
            title="Voor het werk van morgen. En dat van vandaag."
          />
        </div>
        <div class="audience-grid">
          <NuxtLink
            v-for="(audience, i) in audiences"
            :key="audience.to"
            :to="audience.to"
            class="audience-card"
            :class="{ 'audience-dark': i === 2 }"
            ><AppIcon :name="audience.icon" :size="33" />
            <p class="eyebrow">{{ audience.tag }}</p>
            <h3>{{ audience.title }}</h3>
            <p>{{ audience.text }}</p>
            <span class="text-link"
              >{{ audience.cta
              }}<AppIcon name="arrow-up-right" :size="18" /></span
          ></NuxtLink>
        </div>
      </div>
    </section>

    <CasesSection
      :slugs="[
        'chatgpt-of-codex-in-je-eigen-organisatie',
        'coder-game-in-24-uur',
        '3d-productmodellen-met-ai',
      ]"
      title="Minder abstract. Meer mogelijk."
      intro="Van documenten doorzoeken tot software bouwen. Ontdek hoe AI aansluit op het dagelijkse werk."
    />

    <section class="section-space process-section home-process-section">
      <div class="container-page">
        <div class="home-process-header">
          <SectionHeading
            eyebrow="06 / Zo werkt samenwerken"
            title="Een helder plan. Een werkende oplossing."
          />
          <div class="home-process-art" aria-hidden="true">
            <img
              src="/img/redesign/services-cutout.webp"
              alt=""
              width="1024"
              height="1024"
              loading="lazy"
              decoding="async"
            />
          </div>
        </div>
        <StepList :steps="steps" class="home-process-steps" />
        <UiButton to="/diensten/ai-scan" variant="secondary" arrow class="mt-9"
          >Begin met een AI-scan</UiButton
        >
      </div>
    </section>

    <section class="section-space">
      <div class="container-page about-composition">
        <div class="about-image">
          <img
            src="/img/redesign/local-growth.webp"
            alt="Jong groen en een ei in het Nederlandse landschap bij ochtendlicht"
            width="1536"
            height="1024"
            loading="lazy"
          /><span class="image-caption"
            >LOKAAL GEWORTELD / RUIMTE OM TE GROEIEN</span
          >
        </div>
        <div>
          <AboutRoleHeading eyebrow="07 / Aangenaam. AITJE." highlight />
          <p class="mt-6 text-lg leading-relaxed text-muted">
            Een Nederlands AI-productbedrijf en specialist. Eigen producten,
            actuele kennis en mensen die bereikbaar blijven.
          </p>
          <p class="mt-4 leading-relaxed text-muted">
            Afhankelijkheid mag een bewuste keuze zijn. Niet een onbedoeld
            gevolg. Daarom brengt AITJE kennis, modellen en techniek dichter bij
            jouw werk.
          </p>
          <p class="mt-5 leading-relaxed text-muted">
            <strong class="mb-2 block font-semibold text-ink">
              AI wordt onmisbaar. Maar van wie ben je afhankelijk?
            </strong>
            Je team bouwt erop, je processen draaien ermee en steeds meer
            bedrijfskennis gaat erin. Wat gebeurt er als de aanbieder zijn
            prijzen verhoogt, de voorwaarden verandert of een dag uitvalt?
          </p>
          <div class="mt-8 flex flex-wrap gap-3">
            <UiButton to="/over-aitje" variant="dark" arrow
              >Leer AITJE kennen</UiButton
            ><UiButton to="/visie" variant="secondary">De visie</UiButton>
          </div>
        </div>
      </div>
    </section>

    <section class="section-space knowledge-section">
      <div class="container-page">
        <div class="section-topline">
          <SectionHeading
            eyebrow="08 / Kennis om verder te komen"
            title="AI begrijpen begint hier."
            intro="Wat is een model? Wat kan een agent? Heldere uitleg voor betere keuzes."
          /><NuxtLink to="/kenniscentrum" class="text-link"
            >Het kenniscentrum <AppIcon name="arrow-up-right" :size="18"
          /></NuxtLink>
        </div>
        <div class="mt-10 grid gap-6 md:grid-cols-3">
          <ArticleCard
            v-for="article in featured"
            :key="article.slug"
            :article="article"
          />
        </div>
      </div>
    </section>
    <CtaBanner />
  </div>
</template>
