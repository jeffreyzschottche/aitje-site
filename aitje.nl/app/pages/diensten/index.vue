<script setup lang="ts">
// One overview of the eight services; copy and layout: redesign/pages/services.md.
import { services, partnerService, serviceIllustrations } from "@/content/services";
import { contactLink } from "@/content/site";

usePageSeo({
  title: "Diensten",
  description:
    "Alle diensten van AITJE in één overzicht: AI-scan, tokenoptimalisatie, advies, installatie, bestaande AI verbeteren, veilig gebruik, maatwerk en onderhoud.",
  breadcrumbs: [{ name: "Diensten", path: "/diensten" }],
});
useHead({
  link: [{ rel: "preload", as: "image", href: "/img/redesign/services-nature-tech-bridge.webp", fetchpriority: "high" }],
});

const overview: Record<string, { action: string; text: string }> = {
  "ai-scan": {
    action: "Verkennen",
    text: "Een praktisch rapport dat laat zien waar AI jouw werk kan verbeteren en welke stappen het meeste opleveren.",
  },
  "token-management-en-optimalisatie": {
    action: "Besparen",
    text: "Inzicht in je AI-kosten en een slimmere verdeling van abonnementen, modellen en taken binnen je workflow.",
  },
  "advies-en-analyse": {
    action: "Uitdenken",
    text: "Een concreet antwoord op je AI-vraag, met een uitgewerkt plan, kosten, risico’s en controles.",
  },
  "installatie-en-inrichting": {
    action: "Inrichten",
    text: "Je AI-software en modellen gebruiksklaar geïnstalleerd op passende hardware of een server, nieuw of bestaand.",
  },
  "optimalisatie": {
    action: "Verbeteren",
    text: "Je bestaande chatbot, kennisbank of agent verbeteren met gerichte aanpassingen aan instructies, kennis, code en modellen.",
  },
  "veilig-ai-gebruik": {
    action: "Beschermen",
    text: "Praktische maatregelen om te bepalen welke data AI mag gebruiken, welke acties zijn toegestaan en wie controleert.",
  },
  "aitje-custom": {
    action: "Bouwen",
    text: "Een workflow, agent of complete AI-toepassing op maat, verbonden met de systemen waarmee jij werkt.",
  },
  "ondersteuning-en-onderhoud": {
    action: "Beheren",
    text: "Een vast aanspreekpunt voor onderhoud, modelbeheer, prompts, skills en persoonlijk advies over volgende verbeteringen.",
  },
};
const serviceCards = services.map(service => ({
  ...service,
  ...overview[service.slug],
  image: serviceIllustrations[service.slug],
  priceLabel: service.slug === "veilig-ai-gebruik"
    ? `Datalocatiecheck ${service.price.label}`
    : service.price.label,
}));
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

    <section class="services-overview" aria-labelledby="services-overview-title">
      <div class="container-page">
        <div class="services-overview-heading">
          <div>
            <p class="eyebrow text-brand-ink">Wat AITJE voor je doet</p>
            <h2 id="services-overview-title" class="section-title">Welke hulp heb jij nodig?</h2>
            <p>Ontdekken, bouwen of verbeteren. Kies wat aansluit op jouw vraag.</p>
          </div>
          <span class="services-overview-count">{{ serviceCards.length }} diensten <span aria-hidden="true">/</span> los of samen</span>
        </div>

        <div class="services-overview-grid">
          <NuxtLink
            v-for="service in serviceCards"
            :key="service.slug"
            :to="`/diensten/${service.slug}`"
            class="service-summary"
            :class="{
              'service-summary-scan': service.slug === 'ai-scan',
              'service-summary-installation': service.slug === 'installatie-en-inrichting',
              'service-summary-safe on-dark': service.slug === 'veilig-ai-gebruik',
              'service-summary-custom on-dark': service.slug === 'aitje-custom',
            }"
          >
            <div class="service-summary-visual" aria-hidden="true">
              <span class="service-summary-action"><AppIcon :name="service.icon" :size="16" />{{ service.action }}</span>
              <img :src="service.image" alt="" width="1024" height="1024" loading="lazy" />
            </div>
            <div class="service-summary-copy">
              <h3>{{ service.name }}</h3>
              <p>{{ service.text }}</p>
            </div>
            <div class="service-summary-footer">
              <span>{{ service.priceLabel }}</span>
              <span class="service-summary-arrow"><AppIcon name="arrow-up-right" :size="19" /></span>
            </div>
          </NuxtLink>
        </div>
        <p class="services-price-note">Prijzen excl. btw. De werkzaamheden en prijs stem je vooraf af; hardware, hosting en modelgebruik worden apart begroot.</p>

        <div class="services-choice-note">
          <p>Je kunt bij elke dienst beginnen. AITJE helpt je bepalen wat past.</p>
          <NuxtLink :to="contactLink('ai-vraag')" class="text-link">Bespreek je AI-vraag<AppIcon name="arrow-right" :size="18" /></NuxtLink>
        </div>
      </div>
    </section>

    <section class="services-working" aria-labelledby="services-working-title">
      <div class="container-page">
        <div class="services-working-heading">
          <p class="eyebrow text-brand-ink">Zo werkt de samenwerking</p>
          <h2 id="services-working-title" class="section-title">Van jouw vraag<br />naar de volgende stap.</h2>
          <p>Een losse sessie of een volledig traject: je weet vooraf wat AITJE doet en wat dat kost.</p>
        </div>
        <ol class="services-working-steps">
          <li><span class="services-step-number">01</span><div><h3>Je vraag scherp krijgen</h3><p>Het werk, je systemen en wat je wilt bereiken vormen het vertrekpunt.</p></div></li>
          <li><span class="services-step-number">02</span><div><h3>Een aanpak afspreken</h3><p>Je krijgt duidelijke keuzes, werkzaamheden en kosten om akkoord op te geven.</p></div></li>
          <li><span class="services-step-number">03</span><div><h3>Uitvoeren en verder helpen</h3><p>AITJE onderzoekt, bouwt of verbetert en kan het beheer daarna verzorgen.</p></div></li>
        </ol>
      </div>
    </section>

    <section class="services-partner" aria-labelledby="services-partner-title">
      <div class="container-page services-partner-layout">
        <div class="services-partner-art" aria-hidden="true">
          <OrbitGraphic />
          <img src="/img/redesign/partners-cutout.webp" alt="" width="1024" height="1024" loading="lazy" />
        </div>
        <div class="services-partner-copy">
          <p class="eyebrow text-brand-ink">Voor IT-bedrijven en bureaus</p>
          <h2 id="services-partner-title" class="section-title">Jouw klant.<br />AITJE als AI-specialist.</h2>
          <p>Jij verzorgt de IT, website of app. AITJE denkt mee over AI-vragen en kan de oplossing voor jouw klanten bouwen en beheren. Jij houdt de klantrelatie.</p>
          <UiButton :to="`/diensten/${partnerService.slug}`" variant="primary" arrow>Ontdek de samenwerking</UiButton>
        </div>
      </div>
    </section>

    <CasesSection
      title="Zo ziet dat er in de praktijk uit."
      intro="Eigen kennis doorzoekbaar maken, productteksten verrijken of systemen verbinden: bekijk wat AITJE voor andere organisaties heeft gebouwd."
      :slugs="['productteksten-zonder-tokenkosten', 'documenten-doorzoeken-en-lakken', 'council-hub']"
    />

    <CtaBanner
      title="Niet zeker welke dienst past?"
      text="Vertel wat je wilt bereiken. AITJE denkt mee over de route die bij je past, ook als die klein begint."
    />
  </div>
</template>

<style scoped>
.services-overview {
  padding-block: 1.5rem 4rem;
}
.services-overview-heading {
  display: flex;
  align-items: end;
  justify-content: space-between;
  gap: 1.5rem;
  margin-bottom: 2rem;
}
.services-overview-heading h2,
.services-working-heading h2,
.services-partner-copy h2 {
  margin-top: 0.75rem;
}
.services-overview-heading p:last-child,
.services-working-heading > p:last-child {
  margin-top: 1rem;
  color: var(--color-muted);
  font-size: 1rem;
  line-height: 1.65;
}
.services-overview-count {
  display: inline-flex;
  gap: 0.65rem;
  flex-shrink: 0;
  color: var(--color-muted);
  font-size: 0.8rem;
  padding-bottom: 0.3rem;
}
.services-overview-count span {
  color: var(--color-brand-ink);
}
.services-overview-grid {
  display: grid;
  grid-template-columns: repeat(4, minmax(0, 1fr));
  gap: 1rem;
}
.service-summary {
  display: flex;
  flex-direction: column;
  min-width: 0;
  padding: 1.3rem;
  border: 1px solid var(--color-line);
  border-radius: var(--radius-panel);
  background: var(--color-surface);
  transition: border-color 180ms ease, box-shadow 180ms ease, transform 180ms ease;
}
.service-summary-scan {
  background: var(--color-brand);
  border-color: var(--color-brand);
}
.service-summary-scan .service-summary-copy p {
  color: #403a21;
}
.service-summary-safe {
  background:
    radial-gradient(ellipse at 85% 0%, rgb(115 117 119 / 0.28), transparent 60%),
    linear-gradient(145deg, #292b2d, #101112);
  border-color: #343638;
  color: white;
}
.service-summary-custom {
  background: #18372d;
  border-color: #18372d;
  color: white;
}
.service-summary-visual {
  position: relative;
  height: 148px;
  margin-bottom: 1.1rem;
}
.service-summary-action {
  position: relative;
  display: inline-flex;
  align-items: center;
  gap: 0.4rem;
  z-index: 1;
  font-size: 0.73rem;
  font-weight: 500;
  color: #625f4e;
}
.service-summary-custom .service-summary-action,
.service-summary-safe .service-summary-action {
  color: #efda8c;
}
.service-summary-visual img {
  position: absolute;
  right: -0.3rem;
  bottom: -0.25rem;
  width: 100%;
  height: 126px;
  object-fit: contain;
  transition: transform 250ms ease;
}
.service-summary-copy {
  flex: 1;
}
.service-summary-copy h3 {
  min-height: 2.6em;
  font-size: 1.22rem;
  line-height: 1.3;
  font-weight: 600;
}
.service-summary-copy p {
  margin-top: 0.7rem;
  font-size: 0.93rem;
  line-height: 1.6;
  color: var(--color-muted);
}
.service-summary-custom .service-summary-copy p {
  color: #d5e2d9;
}
.service-summary-safe .service-summary-copy p {
  color: #d6d6d3;
}
.service-summary-footer {
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 0.75rem;
  margin-top: 1.25rem;
  padding-top: 1rem;
  border-top: 1px solid rgb(11 11 11 / 0.1);
  font-size: 0.78rem;
  line-height: 1.5;
  font-weight: 500;
}
.service-summary-custom .service-summary-footer,
.service-summary-safe .service-summary-footer {
  border-top-color: rgb(255 255 255 / 0.2);
}
.service-summary-arrow {
  display: grid;
  place-items: center;
  flex-shrink: 0;
  width: 30px;
  height: 30px;
  border-radius: 50%;
  background: #f3f2ec;
  color: var(--color-ink);
  transition: background 180ms ease;
}
.service-summary-scan .service-summary-arrow {
  background: rgb(255 255 255 / 0.8);
}
.service-summary-custom .service-summary-arrow,
.service-summary-safe .service-summary-arrow {
  background: var(--color-brand);
}
.service-summary:hover,
.service-summary:focus-visible {
  border-color: #aeaf96;
  box-shadow: var(--shadow-card);
  transform: translateY(-3px);
}
.service-summary:hover .service-summary-arrow,
.service-summary:focus-visible .service-summary-arrow {
  background: var(--color-brand);
}
.service-summary-scan:hover .service-summary-arrow,
.service-summary-scan:focus-visible .service-summary-arrow {
  background: white;
}
.service-summary:hover .service-summary-visual img {
  transform: translateY(-3px) scale(1.025);
}
.services-price-note {
  max-width: 900px;
  margin-top: 1.25rem;
  font-size: 0.78rem;
  line-height: 1.65;
  color: var(--color-muted);
}
.services-choice-note {
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 1.5rem;
  margin-top: 1.8rem;
  padding: 1.1rem 1.4rem;
  border-radius: var(--radius-card);
  background: #eeeee7;
}
.services-choice-note p {
  font-size: 0.92rem;
  line-height: 1.6;
}
.services-working {
  padding-block: 2rem 5rem;
}
.services-working > .container-page {
  display: grid;
  grid-template-columns: 1fr 1fr;
  align-items: center;
  gap: clamp(2rem, 6vw, 6rem);
}
.services-working-heading > p:last-child {
  max-width: 440px;
}
.services-working-steps {
  margin: 0;
  padding: 0;
  list-style: none;
}
.services-working-steps li {
  position: relative;
  display: flex;
  gap: 1.4rem;
  padding-block: 1.3rem;
}
.services-working-steps li + li {
  border-top: 1px solid var(--color-line);
}
.services-step-number {
  display: grid;
  place-items: center;
  flex-shrink: 0;
  width: 42px;
  height: 42px;
  border-radius: 50%;
  background: var(--color-brand);
  font: 500 0.8rem var(--font-mono);
}
.services-working-steps h3 {
  font-size: 1rem;
  font-weight: 600;
  line-height: 1.4;
}
.services-working-steps p {
  margin-top: 0.5rem;
  font-size: 0.93rem;
  line-height: 1.65;
  color: var(--color-muted);
}
.services-partner {
  overflow: hidden;
  background: #e8edde;
}
.services-partner-layout {
  display: grid;
  grid-template-columns: 1fr 1.1fr;
  align-items: center;
  gap: clamp(2rem, 5vw, 5rem);
  padding-block: 3.5rem;
}
.services-partner-art {
  position: relative;
  width: 100%;
  max-width: 400px;
  margin-inline: auto;
  aspect-ratio: 1.2;
}
.services-partner-art > :first-child {
  position: absolute;
  inset: 0;
  width: 100%;
  height: 100%;
  opacity: 0.4;
}
.services-partner-art img {
  position: relative;
  width: 100%;
  height: 100%;
  object-fit: contain;
}
.services-partner-copy > p:not(.eyebrow) {
  max-width: 520px;
  margin-block: 1.5rem 1.7rem;
  color: #485242;
  font-size: 1rem;
  line-height: 1.75;
}
@media (max-width: 1099px) {
  .services-overview-grid {
    grid-template-columns: repeat(2, minmax(0, 1fr));
  }
  .service-summary {
    position: relative;
    padding-top: 3.4rem;
  }
  .service-summary-visual {
    position: static;
    height: 0;
    margin: 0;
  }
  .service-summary-action {
    position: absolute;
    top: 1.2rem;
    left: 1.3rem;
  }
  .service-summary-visual img {
    right: 0.8rem;
    bottom: auto;
    top: 3rem;
    width: 92px;
    height: 110px;
  }
  .service-summary-copy {
    padding-right: 100px;
  }
  .service-summary-copy h3 {
    min-height: 0;
    font-size: 1.15rem;
  }
  .service-summary-copy p {
    font-size: 0.91rem;
  }
}
@media (max-width: 767px) {
  .services-overview {
    padding-block: 1.5rem 3rem;
  }
  .services-overview-heading {
    display: block;
  }
  .services-overview-count {
    margin-top: 1rem;
  }
  .services-overview-grid {
    grid-template-columns: minmax(0, 1fr);
    gap: 0.8rem;
  }
  .service-summary-safe {
    grid-row: 4;
  }
  .service-summary-installation {
    grid-row: 6;
  }
  .service-summary-copy h3 {
    font-size: 1.2rem;
  }
  .service-summary-footer {
    margin-top: 1rem;
    padding-top: 0.8rem;
  }
  .services-choice-note {
    display: block;
    padding-inline: 1.1rem;
  }
  .services-choice-note a {
    margin-top: 0.4rem;
  }
  .services-working {
    padding-block: 1rem 3rem;
  }
  .services-working > .container-page {
    grid-template-columns: minmax(0, 1fr);
    gap: 1.5rem;
  }
  .services-working-steps li {
    gap: 1rem;
  }
  .services-partner-layout {
    grid-template-columns: minmax(0, 1fr);
    gap: 1rem;
    padding-block: 2.5rem 3rem;
  }
  .services-partner-art {
    max-width: 290px;
  }
}
@media (max-width: 359px) {
  .service-summary {
    padding-inline: 1.1rem;
  }
  .service-summary-action {
    left: 1.1rem;
  }
  .service-summary-copy {
    padding-right: 75px;
  }
  .service-summary-visual img {
    width: 72px;
    right: 0.5rem;
  }
  .service-summary-copy h3 {
    font-size: 1.05rem;
  }
}
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
