<script setup lang="ts">
// AI-scan: confirmed scope in redesign/offer/services/ai-scan.md.
import { getService } from "@/content/services";
import ServicePageNav from "@/components/ServicePageNav.vue";

const service = getService("ai-scan")!;
const sections = [
  { label: "Wat is de scan?", href: "#wat-is-de-ai-scan" },
  { label: "Voorbeelden", href: "#voorbeelden" },
  { label: "De aanpak", href: "#aanpak" },
  { label: "Het rapport", href: "#oplevering" },
  { label: "Kosten & afspraken", href: "#dienst-prijs" },
];
const activeExample = ref(0);

const focusAreas = [
  { icon: "workflow", title: "Je werk", text: "Welke stappen kosten tijd, lopen vast of worden dubbel gedaan?" },
  { icon: "plug", title: "Je systemen", text: "Waar staat informatie en hoe gaat die van het ene systeem naar het andere?" },
  { icon: "gauge", title: "Je AI-gebruik", text: "Welke modellen en abonnementen gebruik je, en wat leveren ze op?" },
  { icon: "shield", title: "Je randvoorwaarden", text: "Welke data, controles en afhankelijkheden verdienen aandacht?" },
];

const examples = [
  {
    tab: "Kennis zoeken", icon: "library", title: "Het antwoord bestaat. Maar waar?",
    situation: "Een medewerker zoekt in e-mail, documenten en bedrijfssoftware om één klantvraag te beantwoorden.",
    question: "Kan AI die informatie bij elkaar brengen?",
    checks: ["Welke vragen komen vaak terug?", "Welke bronnen zijn actueel en betrouwbaar?", "Wie mag welke informatie gebruiken?"],
    direction: "Een eigen kennisassistent kan een richting zijn. De scan maakt duidelijk welke bronnen, koppelingen en toegangsregels daarvoor nodig zijn.",
    to: "/cases/documenten-doorzoeken-en-lakken", link: "Bekijk een kennisassistent in de praktijk",
    flow: ["Klantvraag", "Bronnen zoeken", "Informatie vergelijken", "Antwoord geven"],
  },
  {
    tab: "Terugkerend werk", icon: "repeat", title: "Elke keer dezelfde handelingen.",
    situation: "Een webshop kopieert productspecificaties, vult teksten aan, vertaalt ze en zet alles terug in het CMS.",
    question: "Welke stappen kunnen automatisch?",
    checks: ["Welke gegevens zijn al beschikbaar?", "Wat kan met code en waar is AI nuttig?", "Waar blijft controle door een medewerker nodig?"],
    direction: "Een workflow kan gegevens ophalen, AI een gerichte taak geven en het resultaat terugplaatsen. De scan onderzoekt waar dat in jouw proces zinvol is.",
    to: "/cases/productteksten-zonder-tokenkosten", link: "Bekijk een productworkflow in de praktijk",
    flow: ["Product ophalen", "Gegevens aanvullen", "Tekst vertalen", "CMS bijwerken"],
  },
  {
    tab: "AI-kosten", icon: "gauge", title: "Veel AI in huis. Weinig overzicht.",
    situation: "Een team gebruikt losse AI-abonnementen en model-API’s. Niemand ziet goed welke taak welk model en budget nodig heeft.",
    question: "Past de huidige AI bij het werk?",
    checks: ["Wie gebruikt welke AI en waarvoor?", "Hoe ontstaan de kosten per taak?", "Welke taken kunnen met een kleiner of lokaal model?"],
    direction: "Gedeeld modelbeheer of een betere verdeling van taken kan helpen. De scan brengt gebruik, kosten en afhankelijkheden eerst in kaart.",
    to: "/cases/chatgpt-of-codex-in-je-eigen-organisatie", link: "Bekijk gedeeld modelbeheer in de praktijk",
    flow: ["Taak bepalen", "Model kiezen", "Resultaat controleren", "Kosten volgen"],
  },
];

const selectedExample = computed(() => examples[activeExample.value]!);
const steps = [
  { title: "De vraag scherp krijgen", label: "Vooraf", text: "In een korte intake bespreek je het doel, de betrokken mensen en de processen die AITJE gaat bekijken." },
  { title: "Meekijken met je werk", label: "Onderzoeksdagdeel · circa 4 uur", text: "Gesprekken en concrete werkvoorbeelden laten zien hoe taken, systemen en informatie samenhangen. Dit kan op locatie of op afstand." },
  { title: "Kansen beoordelen", label: "Na het onderzoek", text: "AITJE weegt de mogelijkheden af tegen de moeite, kosten, risico’s en verwachte waarde voor jouw organisatie." },
  { title: "Een richting meegeven", label: "Praktisch rapport", text: "Je ontvangt de bevindingen, prioriteiten en aanbevolen vervolgstappen. Waar redelijk te berekenen, met een globale kosten- of besparingsinschatting." },
];

const reportItems = [
  { icon: "scan", title: "Het overzicht", text: "De onderzochte processen, systemen en het huidige AI-gebruik bij elkaar." },
  { icon: "sparkles", title: "De kansen", text: "Concrete mogelijkheden, met hun verwachte impact op werk, kwaliteit of kosten." },
  { icon: "compass", title: "De prioriteiten", text: "Wat verdient als eerste aandacht, en wat kan wachten?" },
  { icon: "arrow-right", title: "De volgende stap", text: "Een gerichte aanbeveling, inclusief aandachtspunten en eventueel verder onderzoek." },
];

function changeExample(index: number, event: KeyboardEvent) {
  let next = index;
  if (event.key === "ArrowRight") next = (index + 1) % examples.length;
  else if (event.key === "ArrowLeft") next = (index + examples.length - 1) % examples.length;
  else if (event.key === "Home") next = 0;
  else if (event.key === "End") next = examples.length - 1;
  else return;
  event.preventDefault();
  activeExample.value = next;
  (event.currentTarget as HTMLElement).parentElement?.querySelector<HTMLButtonElement>(`#scan-tab-${next}`)?.focus();
}

usePageSeo({
  title: `AI-scan: ${service.headline}`,
  description: service.seoDescription,
  image: service.image,
  breadcrumbs: [
    { name: "Diensten", path: "/diensten" },
    { name: "AI-scan", path: "/diensten/ai-scan" },
  ],
  faq: service.faq,
  schema: [{
    "@type": "Service", name: service.name, description: service.subline,
    provider: { "@id": `${useRuntimeConfig().public.siteUrl}/#organization` }, areaServed: "NL",
  }],
});
</script>

<template>
  <div class="ai-scan-page">
    <PageHero
      class="service-world-hero scan-hero"
      eyebrow="AI-scan"
      :title="service.headline"
      :subline="service.subline"
      :image="service.image"
      :background="service.background"
      image-alt="Een uil onderzoekt zijn omgeving naast het gloeiende AITJE-ei in een nest op een mossige rots"
      immersive
    >
      <template #before><NuxtLink to="/diensten" class="scan-back-link">← Alle diensten</NuxtLink></template>
      <div class="scan-hero-actions">
        <UiButton :to="service.cta.to" size="lg" arrow>{{ service.cta.label }}</UiButton>
        <p><strong>{{ service.price.label }}</strong><span>Excl. btw</span></p>
      </div>
    </PageHero>

    <ServicePageNav :highlights="service.highlights" :sections="sections" label="Op deze AI-scanpagina" />

    <section id="wat-is-de-ai-scan" class="scan-section scan-intro"><div class="container-page scan-split">
      <div class="scan-intro-copy">
        <p class="eyebrow text-brand-ink">Wat is een AI-scan?</p>
        <h2>Eerst je werk begrijpen.</h2>
        <p class="scan-copy">De AI-scan is een onderzoek naar hoe jouw organisatie werkt en waar AI iets kan toevoegen. AITJE kijkt met je mee: van een terugkerende taak tot de software, informatie en mensen erachter.</p>
        <p class="scan-copy">Zo wordt duidelijk waar een aanpassing zinvol is, wat daarvoor nodig is en waar je beter nog niets verandert. Je ontvangt een praktisch rapport waarmee je gericht kunt kiezen.</p>
        <div class="scan-intro-note"><AppIcon name="message" :size="22" /><p>Je hoeft nog geen AI-plan te hebben. Een taak die veel tijd kost, of twijfel over je huidige AI, is een goed vertrekpunt.</p></div>
      </div>
      <figure class="scan-workbench">
        <img :src="'/img/redesign/ai-scan-workbench.webp'" alt="Een uil bij een houten werktafel met verbonden proceskaarten, een vergrootglas en een gloeiend ei" width="1536" height="1024" loading="lazy" />
        <figcaption>Van losse handelingen naar zicht op het hele proces.</figcaption>
      </figure>
    </div></section>

    <section class="scan-section scan-focus"><div class="container-page">
      <div class="scan-heading-row"><div><p class="eyebrow text-brand-ink">Wat AITJE onderzoekt</p><h2>Het hele proces telt.</h2></div><p class="scan-copy">Waar komt een vraag binnen? Waar staat de informatie? Wie controleert het resultaat? AI wordt pas bruikbaar als die stappen op elkaar aansluiten.</p></div>
      <div class="scan-process-map" aria-label="Een voorbeeld van een werkproces">
        <span class="scan-map-label">Bijvoorbeeld een klantvraag</span>
        <ol><li><AppIcon name="message" :size="24" /><span>Vraag ontvangen</span></li><li><AppIcon name="search" :size="24" /><span>Informatie zoeken</span></li><li><AppIcon name="pen" :size="24" /><span>Antwoord maken</span></li><li><AppIcon name="check" :size="24" /><span>Controleren</span></li><li><AppIcon name="plug" :size="24" /><span>Verwerken</span></li></ol>
        <p>Per stap: wat doen mensen, wat kan software en waar helpt AI?</p>
      </div>
      <div class="scan-focus-grid"><article v-for="area in focusAreas" :key="area.title"><AppIcon :name="area.icon" :size="25" /><h3>{{ area.title }}</h3><p>{{ area.text }}</p></article></div>
    </div></section>

    <section id="voorbeelden" class="scan-section scan-examples"><div class="container-page">
      <div class="scan-heading-row"><div><p class="eyebrow text-brand-ink">Herkenbare vragen</p><h2>Waar loopt jouw team tegenaan?</h2></div><p class="scan-copy">De scan kan verschillende vragen onderzoeken. Kies een voorbeeld en zie wat AITJE bekijkt en welke richting daaruit kan volgen.</p></div>
      <div class="scan-tabs" role="tablist" aria-label="Voorbeelden van AI-scanvragen">
        <button v-for="(example, index) in examples" :id="`scan-tab-${index}`" :key="example.tab" type="button" role="tab" :aria-selected="activeExample === index" aria-controls="scan-example-panel" :tabindex="activeExample === index ? 0 : -1" @click="activeExample = index" @keydown="changeExample(index, $event)"><AppIcon :name="example.icon" :size="19" />{{ example.tab }}</button>
      </div>
      <div id="scan-example-panel" class="scan-example-panel" role="tabpanel" :aria-labelledby="`scan-tab-${activeExample}`" tabindex="0">
        <div class="scan-example-situation"><span class="scan-small-label">De situatie</span><h3>{{ selectedExample.title }}</h3><p>{{ selectedExample.situation }}</p><blockquote>“{{ selectedExample.question }}”</blockquote><ol class="scan-example-flow"><li v-for="(step, index) in selectedExample.flow" :key="step"><span>{{ String(index + 1).padStart(2, '0') }}</span>{{ step }}</li></ol></div>
        <div class="scan-example-research"><span class="scan-small-label">Dit onderzoekt AITJE</span><ul><li v-for="check in selectedExample.checks" :key="check"><AppIcon name="scan" :size="19" /><span>{{ check }}</span></li></ul><div class="scan-example-direction"><strong>Een mogelijke richting</strong><p>{{ selectedExample.direction }}</p></div><NuxtLink :to="selectedExample.to" class="scan-text-link">{{ selectedExample.link }} <AppIcon name="arrow-up-right" :size="18" /></NuxtLink></div>
      </div>
    </div></section>

    <section id="aanpak" class="scan-section scan-approach"><div class="container-page">
      <div class="scan-heading-row"><div><p class="eyebrow text-brand-ink">Hoe het werkt</p><h2>Meekijken. Afwegen. Richting geven.</h2></div><p class="scan-copy">Een korte intake, een onderzoeksdagdeel en een gerichte beoordeling. De scope, locatie en prijs stem je vooraf met AITJE af.</p></div>
      <ol class="scan-steps"><li v-for="(step, index) in steps" :key="step.title"><span class="scan-step-number">{{ String(index + 1).padStart(2, '0') }}</span><div><span class="scan-small-label">{{ step.label }}</span><h3>{{ step.title }}</h3><p>{{ step.text }}</p></div></li></ol>
      <div class="scan-access-note"><AppIcon name="shield" :size="24" /><div><strong>Jij bepaalt wat AITJE mag bekijken.</strong><p>De scan bestaat vooral uit gesprekken en procesonderzoek. Met jouw toestemming kijkt AITJE gericht mee in relevante software of voorbeelden. Volledige systeemtoegang is geen standaardvereiste.</p></div></div>
    </div></section>

    <section id="oplevering" class="scan-section scan-delivery"><div class="container-page scan-split">
      <div><p class="eyebrow text-brand">Wat je ontvangt</p><h2>Een rapport om mee verder te gaan.</h2><p class="scan-copy">Je krijgt een beknopt overzicht van de bevindingen, met onderbouwde kansen en een logische volgorde. Zo kun je beslissen waar je tijd en budget aan wilt besteden.</p><div class="scan-report-items"><div v-for="item in reportItems" :key="item.title"><AppIcon :name="item.icon" :size="22" /><div><h3>{{ item.title }}</h3><p>{{ item.text }}</p></div></div></div><p class="scan-report-note">Een globale kosten- of besparingsinschatting wordt toegevoegd waar die redelijk te berekenen is.</p></div>
      <div class="scan-report-visual" aria-label="Voorbeeld van de onderwerpen in een AI-scanrapport">
        <div class="scan-report-top"><span>AITJE / AI-SCAN</span><AppIcon name="scan" :size="28" /></div>
        <p class="scan-small-label">Voorbeeldopzet</p><h3>Van inzicht<br />naar een keuze.</h3>
        <div class="scan-report-overview"><span>01</span><div><strong>De huidige situatie</strong><p>Werk · systemen · AI-gebruik</p></div><AppIcon name="check" :size="18" /></div>
        <div class="scan-report-overview"><span>02</span><div><strong>Kansen &amp; afwegingen</strong><p>Waarde · haalbaarheid · aandachtspunten</p></div><AppIcon name="check" :size="18" /></div>
        <div class="scan-report-overview"><span>03</span><div><strong>Prioriteiten &amp; vervolgstappen</strong><p>Eerst onderzoeken · verbeteren · bouwen</p></div><AppIcon name="check" :size="18" /></div>
        <div class="scan-report-decision"><AppIcon name="compass" :size="26" /><div><strong>Wat past bij jouw organisatie?</strong><p>Van een kleine procesverbetering tot verder onderzoek of een eigen AI-oplossing.</p></div></div>
        <span class="scan-report-footer">Jouw bevindingen. Jouw vervolgstap.</span>
      </div>
    </div></section>

    <section id="dienst-prijs" class="scan-section scan-pricing"><div class="container-page scan-split">
      <div class="scan-price-block"><p class="eyebrow text-brand-ink">Kosten &amp; afspraken</p><h2>{{ service.price.label }}</h2><p class="scan-price-note">Excl. btw</p><p class="scan-copy">Een korte intake, een onderzoeksdagdeel van ongeveer vier uur, beoordeling en een praktisch rapport. De precieze scope en prijs worden vooraf afgesproken.</p><UiButton :to="service.cta.to" arrow>{{ service.cta.label }}</UiButton></div>
      <div class="scan-scope"><h3>De scan geeft richting.</h3><p>Een oplossing bouwen, installeren of uitgebreid technisch testen wordt apart afgesproken. De scan omvat geen volledig technisch ontwerp, bindende businesscase of juridisch advies.</p><div><AppIcon name="handshake" :size="23" /><p><strong>Je kiest zelf het vervolg.</strong> Het rapport is van jou. Je hoeft daarna geen opdracht bij AITJE af te nemen.</p></div></div>
    </div></section>

    <CasesSection :slugs="service.caseSlugs" title="Zo kan een oplossing eruitzien." intro="Deze uitgevoerde opdrachten laten zien hoe kennis, werkprocessen en AI-gebruik kunnen samenkomen in een concrete toepassing." />

    <section id="dienst-vragen" class="scan-section"><div class="container-page scan-faq-grid"><SectionHeading eyebrow="Veelgestelde vragen" title="Nog een vraag over de scan?"><NuxtLink to="/faq" class="scan-text-link">Alle veelgestelde vragen <AppIcon name="arrow-right" :size="17" /></NuxtLink></SectionHeading><FaqList :items="service.faq" /></div></section>

    <section class="scan-next"><div class="container-page"><p class="eyebrow text-brand-ink">Heb je al een concrete vraag?</p><h2>Dan kun je ook direct verder.</h2><div class="scan-next-links"><NuxtLink to="/diensten/advies-en-analyse"><AppIcon name="compass" :size="24" /><div><strong>Advies en analyse</strong><span>Een gerichte technische vraag laten onderzoeken.</span></div><AppIcon name="arrow-up-right" :size="18" /></NuxtLink><NuxtLink to="/diensten/aitje-custom"><AppIcon name="sparkles" :size="24" /><div><strong>AITJE Custom</strong><span>Een specifieke AI-oplossing laten bouwen.</span></div><AppIcon name="arrow-up-right" :size="18" /></NuxtLink><NuxtLink to="/diensten/token-management-en-optimalisatie"><AppIcon name="gauge" :size="24" /><div><strong>Token management &amp; optimalisatie</strong><span>Modelkeuze, workflows en AI-kosten verbeteren.</span></div><AppIcon name="arrow-up-right" :size="18" /></NuxtLink></div></div></section>

    <CtaBanner title="Waar kan AI jouw werk verbeteren?" text="Vertel waar je team tijd verliest of waar je over twijfelt. AITJE helpt je bepalen wat de scan voor jouw organisatie moet onderzoeken." :primary="service.cta" :secondary="{ label: 'Bespreek je AI-vraag', to: '/contact' }" />
  </div>
</template>

<style scoped>
.ai-scan-page { overflow: clip; }
.scan-hero { margin-bottom: 0; }
.scan-back-link { display: inline-block; margin-bottom: 1.5rem; color: rgb(255 255 255 / .8); font-size: .875rem; }
.scan-back-link:hover { color: var(--color-brand); }
.scan-hero-actions { display: flex; flex-wrap: wrap; align-items: center; gap: 1.3rem 1.7rem; margin-top: 2rem; }
.scan-hero-actions p { color: #d5d8d0; font-size: .78rem; line-height: 1.7; }
.scan-hero-actions strong { display: block; color: white; font: 700 1.2rem var(--font-heading); }
.scan-hero-actions span { display: block; margin-top: .3rem; }
.scan-section { padding-block: clamp(4rem, 7vw, 6.5rem); scroll-margin-top: 6rem; }
.scan-section h2,.scan-next h2 { margin-top: .9rem; font: 700 clamp(2rem, 3.4vw, 3.35rem)/1.13 var(--font-heading); letter-spacing: -.055em; }
.scan-section h3 { font-family: var(--font-heading); letter-spacing: -.035em; }
.scan-split { display: grid; grid-template-columns: minmax(0, 1fr) minmax(0, 1fr); align-items: center; gap: clamp(2.5rem, 5vw, 5rem); }
.scan-copy { margin-top: 1.3rem; color: var(--color-muted); font-size: 1rem; line-height: 1.8; }
.scan-intro-copy h2 { max-width: 25rem; }
.scan-intro-note { display: flex; gap: .9rem; align-items: start; margin-top: 1.7rem; padding-top: 1.4rem; border-top: 1px solid var(--color-line); }
.scan-intro-note svg { flex: none; color: #7c6410; }
.scan-intro-note p { color: var(--color-muted); font-size: .87rem; line-height: 1.7; }
.scan-workbench { min-width: 0; position: relative; }
.scan-workbench::before { content: ''; position: absolute; inset: 3% 2% 10%; z-index: -1; border-radius: 50%; background: radial-gradient(ellipse, #e5e7d5 0%, #f4f2e8 50%, transparent 70%); }
.scan-workbench img { display: block; width: 118%; max-width: none; margin-left: -9%; height: auto; }
.scan-workbench figcaption { margin-top: .8rem; color: var(--color-muted); text-align: center; font-size: .75rem; }
.scan-focus { background: #eeeee7; }
.scan-heading-row { display: grid; grid-template-columns: minmax(0, 1.1fr) minmax(0, .9fr); gap: 4rem; align-items: end; }
.scan-heading-row>.scan-copy { margin-top: 0; }
.scan-process-map { margin-top: 2.7rem; border-radius: 20px; padding: 1.5rem 2rem; background: #fff; border: 1px solid #ddded2; }
.scan-map-label,.scan-small-label { font: .68rem var(--font-mono); letter-spacing: .08em; text-transform: uppercase; }
.scan-map-label { color: var(--color-muted); }
.scan-process-map ol { display: grid; grid-template-columns: repeat(5,minmax(0,1fr)); gap: 1rem; margin-top: 1.8rem; }
.scan-process-map li { position: relative; display: flex; flex-direction: column; align-items: center; gap: .8rem; text-align: center; font-size: .83rem; font-weight: 600; }
.scan-process-map li>svg { box-sizing: content-box; padding: 1rem; border-radius: 50%; background: var(--color-brand); }
.scan-process-map li:not(:last-child)::after { content: '→'; position: absolute; right: -1rem; top: .8rem; font-size: 1.4rem; font-weight: 400; color: #9da294; }
.scan-process-map>p { border-top: 1px solid var(--color-line); margin-top: 1.6rem; padding-top: 1rem; text-align: center; font-size: .78rem; color: var(--color-muted); }
.scan-focus-grid { display: grid; grid-template-columns: repeat(4,minmax(0,1fr)); gap: 2rem; margin-top: 2.5rem; }
.scan-focus-grid article>svg { color: #5b7056; }
.scan-focus-grid h3 { margin-top: .9rem; font-size: 1.05rem; font-weight: 700; }
.scan-focus-grid p { margin-top: .5rem; color: var(--color-muted); font-size: .84rem; line-height: 1.75; }
.scan-examples { background: #fff; }
.scan-tabs { display: flex; flex-wrap: wrap; gap: .65rem; margin-top: 2rem; }
.scan-tabs button { display: inline-flex; align-items: center; gap: .65rem; border: 1px solid var(--color-line); border-radius: 30px; padding: .8rem 1.1rem; color: var(--color-ink); background: #f8f8f6; font-size: .87rem; font-weight: 600; cursor: pointer; }
.scan-tabs button:hover { border-color: #95813a; }
.scan-tabs button[aria-selected=true] { border-color: var(--color-brand); background: var(--color-brand); }
.scan-example-panel { display: grid; grid-template-columns: minmax(0,1fr) minmax(0,1fr); gap: 3rem; margin-top: 1.4rem; border: 1px solid var(--color-line); border-radius: 22px; overflow: hidden; background: #f8f8f6; }
.scan-example-situation { padding: 2rem 0 2rem 2rem; }
.scan-example-situation>.scan-small-label { color: #7c6410; }
.scan-example-situation h3 { margin-top: 1rem; font-size: clamp(1.5rem,2.5vw,2.1rem); font-weight: 700; line-height: 1.25; max-width: 25rem; }
.scan-example-situation>p { margin-top: 1rem; color: var(--color-muted); font-size: .9rem; line-height: 1.75; }
.scan-example-situation blockquote { margin-top: 1.3rem; border-left: 3px solid var(--color-brand); padding-left: 1rem; font-size: 1.05rem; font-weight: 600; line-height: 1.6; }
.scan-example-flow { display: grid; grid-template-columns: repeat(2,minmax(0,1fr)); gap: .65rem; margin-top: 1.7rem; }
.scan-example-flow li { display: flex; align-items: start; gap: .6rem; background: #eceee4; border-radius: 9px; padding: .7rem; font-size: .72rem; line-height: 1.5; }
.scan-example-flow span { font-family: var(--font-mono); color: #68775e; }
.scan-example-research { padding: 2rem; background: #e8ecdf; }
.scan-example-research>.scan-small-label { color: #475640; }
.scan-example-research ul { margin-top: 1.2rem; }
.scan-example-research li { display: flex; gap: .8rem; padding-block: .7rem; font-size: .86rem; line-height: 1.7; border-bottom: 1px solid #cbd2be; }
.scan-example-research li svg { flex: none; margin-top: .15rem; color: #5c704b; }
.scan-example-direction { margin-top: 1.5rem; }
.scan-example-direction strong { font-size: .86rem; }
.scan-example-direction p { margin-top: .5rem; color: var(--color-muted); font-size: .83rem; line-height: 1.8; }
.scan-text-link { display: inline-flex; align-items: center; gap: .5rem; margin-top: 1.5rem; font-size: .79rem; font-weight: 700; text-decoration: underline; text-decoration-color: var(--color-brand); text-underline-offset: 5px; }
.scan-text-link svg { flex: none; }
.scan-text-link:hover { text-decoration-color: currentColor; }
.scan-steps { display: grid; grid-template-columns: repeat(4,minmax(0,1fr)); gap: 1.8rem; margin-top: 3rem; }
.scan-steps li { border-top: 1px solid #c3ccbc; padding-top: 1.2rem; }
.scan-step-number { display: grid; place-items: center; width: 2.8rem; height: 2.8rem; border-radius: 50%; background: var(--color-brand); font: .8rem var(--font-mono); }
.scan-steps li>div { margin-top: 1.3rem; }
.scan-steps .scan-small-label { display: block; min-height: 2rem; color: #63725a; font-size: .6rem; line-height: 1.5; }
.scan-steps h3 { font-size: 1.1rem; font-weight: 700; line-height: 1.4; }
.scan-steps p { margin-top: .7rem; font-size: .84rem; color: var(--color-muted); line-height: 1.8; }
.scan-access-note { display: flex; gap: 1.1rem; margin-top: 2.5rem; padding-top: 1.4rem; border-top: 1px solid var(--color-line); }
.scan-access-note>svg { flex: none; color: #697b5c; }
.scan-access-note strong { font-size: .9rem; }
.scan-access-note p { margin-top: .4rem; color: var(--color-muted); font-size: .83rem; line-height: 1.75; max-width: 55rem; }
.scan-delivery { background: #102b23; color: white; }
.scan-delivery .scan-copy { color: #c8d6cc; }
.scan-report-items { display: grid; grid-template-columns: 1fr 1fr; gap: 1.5rem; margin-top: 2rem; }
.scan-report-items>div { display: flex; gap: .8rem; }
.scan-report-items svg { flex: none; color: var(--color-brand); }
.scan-report-items h3 { font-size: .93rem; font-weight: 700; }
.scan-report-items p { color: #bfcfc3; margin-top: .35rem; font-size: .78rem; line-height: 1.75; }
.scan-report-note { color: #bfcfc3; border-top: 1px solid #476052; margin-top: 2rem; padding-top: 1rem; font-size: .75rem; line-height: 1.75; }
.scan-report-visual { padding: 2rem; background: #f6f5ed; color: var(--color-ink); border-radius: 6px 20px 20px 6px; box-shadow: 10px 10px 0 #587057; transform: rotate(1.5deg); }
.scan-report-top { display: flex; align-items: center; justify-content: space-between; border-bottom: 1px solid #cbccbf; padding-bottom: 1rem; margin-bottom: 1.4rem; font: .68rem var(--font-mono); letter-spacing: .1em; }
.scan-report-top svg { color: #4b634a; }
.scan-report-visual>.scan-small-label { color: #69755d; }
.scan-report-visual>h3 { margin-top: .7rem; margin-bottom: 1.5rem; font-size: clamp(1.6rem,2.8vw,2.6rem); font-weight: 700; line-height: 1.15; }
.scan-report-overview { display: flex; align-items: center; gap: .9rem; padding-block: .95rem; border-top: 1px solid #d7d8ca; }
.scan-report-overview>span { color: #788569; font: .7rem var(--font-mono); }
.scan-report-overview strong { font-size: .81rem; }
.scan-report-overview p { margin-top: .3rem; color: #6c7265; font-size: .65rem; }
.scan-report-overview>svg { margin-left: auto; flex: none; color: #68845e; }
.scan-report-decision { display: flex; gap: .9rem; padding: 1.1rem; margin-top: 1.1rem; border-radius: 12px; background: var(--color-brand); }
.scan-report-decision>svg { flex: none; }
.scan-report-decision strong { font-size: .8rem; }
.scan-report-decision p { margin-top: .35rem; font-size: .72rem; line-height: 1.6; }
.scan-report-footer { display: block; margin-top: 1.3rem; color: #76816d; font: .6rem var(--font-mono); }
.scan-price-block h2 { font-size: clamp(2.7rem,4.4vw,4.3rem); }
.scan-price-note { margin-top: .5rem; color: var(--color-muted); font-size: .75rem; }
.scan-price-block .scan-copy { max-width: 31rem; }
.scan-price-block>a { margin-top: 1.7rem; }
.scan-scope { background: #eceee4; border-radius: 20px; padding: 2rem; }
.scan-scope h3 { font-size: 1.45rem; font-weight: 700; }
.scan-scope>p { margin-top: 1rem; color: var(--color-muted); font-size: .88rem; line-height: 1.8; }
.scan-scope>div { display: flex; gap: .9rem; margin-top: 1.5rem; padding-top: 1.2rem; border-top: 1px solid #cbd2be; }
.scan-scope>div svg { flex: none; color: #66764f; }
.scan-scope>div p { color: var(--color-muted); font-size: .83rem; line-height: 1.75; }
.scan-scope strong { display: block; color: var(--color-ink); }
.scan-faq-grid { display: grid; grid-template-columns: minmax(0,1fr) minmax(0,1.5fr); gap: 4rem; }
.scan-next { border-top: 1px solid var(--color-line); padding-block: 3.5rem 4.5rem; }
.scan-next h2 { font-size: clamp(1.5rem,2.5vw,2.3rem); }
.scan-next-links { display: grid; grid-template-columns: repeat(3,minmax(0,1fr)); gap: 1.5rem; margin-top: 2rem; }
.scan-next-links>a { display: flex; align-items: start; gap: .8rem; border-top: 1px solid var(--color-line); padding-top: 1.1rem; }
.scan-next-links svg { flex: none; }
.scan-next-links>a>svg:first-child { color: #74845d; }
.scan-next-links>a>svg:last-child { margin-left: auto; }
.scan-next-links strong { display: block; font-size: .87rem; }
.scan-next-links span { display: block; margin-top: .5rem; color: var(--color-muted); font-size: .78rem; line-height: 1.7; }
.scan-next-links a:hover strong { text-decoration: underline; text-underline-offset: 4px; }
.scan-tabs button:focus-visible,.scan-text-link:focus-visible,.scan-next-links a:focus-visible,.scan-back-link:focus-visible { outline: 2px solid #a38a0c; outline-offset: 5px; }
.scan-example-panel:focus-visible { outline: 2px solid #a38a0c; outline-offset: 4px; }
@media (max-width: 1023px) {
  .scan-heading-row { gap: 2rem; }
  .scan-split { gap: 2.5rem; }
  .scan-focus-grid,.scan-steps { grid-template-columns: repeat(2,minmax(0,1fr)); }
  .scan-example-panel { gap: 1.5rem; }
  .scan-report-items { grid-template-columns: 1fr; gap: 1rem; }
  .scan-next-links { grid-template-columns: 1fr; }
}
@media (max-width: 767px) {
  .scan-split,.scan-heading-row,.scan-example-panel,.scan-faq-grid { grid-template-columns: 1fr; gap: 2rem; }
  .scan-workbench { max-width: 35rem; }
  .scan-workbench img { width: 108%; margin-left: -4%; }
  .scan-process-map { padding: 1.3rem; }
  .scan-process-map ol { grid-template-columns: 1fr; gap: .9rem; margin-top: 1.1rem; }
  .scan-process-map li { flex-direction: row; gap: .8rem; text-align: left; font-size: .85rem; }
  .scan-process-map li>svg { width: 19px; height: 19px; padding: .7rem; }
  .scan-process-map li:not(:last-child)::after { content: ''; right: auto; top: 2.6rem; left: 1.28rem; height: 1rem; width: 1px; background: #b9c0ae; }
  .scan-focus-grid { gap: 1.5rem; }
  .scan-tabs { gap: .5rem; }
  .scan-tabs button { font-size: .77rem; padding: .65rem .9rem; }
  .scan-example-panel { gap: 0; }
  .scan-example-situation,.scan-example-research { padding: 1.4rem; }
  .scan-report-items { grid-template-columns: repeat(2,minmax(0,1fr)); }
  .scan-report-visual { transform: none; box-shadow: 6px 6px 0 #587057; padding: 1.5rem; }
  .scan-scope { padding: 1.5rem; }
}
@media (max-width: 479px) {
  .scan-steps { grid-template-columns: 1fr; gap: 1.5rem; }
  .scan-steps li { display: flex; gap: 1rem; }
  .scan-step-number { flex: none; }
  .scan-steps li>div { margin-top: 0; }
  .scan-steps .scan-small-label { min-height: 0; margin-bottom: .5rem; }
  .scan-report-items { grid-template-columns: 1fr; }
  .scan-report-overview { gap: .7rem; }
}
</style>
