<script setup lang="ts">
// Partner route: redesign/pages/partners.md and redesign/strategy/partner-model.md.
import { contactLink } from "@/content/site";

const cta = { label: "Bespreek een klantvraag", to: contactLink("samenwerken") };

usePageSeo({
  title: "AI-specialist voor IT-bedrijven en bureaus",
  description: "Jouw klanten vragen om AI. AITJE helpt IT-bedrijven en bureaus met onderzoek, bouw en beheer van AI-oplossingen. Jij houdt de klantrelatie en de regie.",
  image: "/img/redesign/partners.webp",
  breadcrumbs: [
    { name: "Diensten", path: "/diensten" },
    { name: "Voor IT-bedrijven en bureaus", path: "/diensten/voor-it-bedrijven" },
  ],
});

const routes = [
  {
    number: "01", icon: "server", audience: "Systeembeheer & infrastructuur",
    question: "Kunnen medewerkers onze documenten met AI doorzoeken op onze eigen server?",
    partner: "Jij kent de klant, de infrastructuur en de beheereisen.",
    aitje: "AITJE kiest passende hardware en modellen, richt de AI-omgeving in en ondersteunt het beheer.",
    to: "/diensten/installatie-en-inrichting", link: "Bekijk installatie en inrichting",
  },
  {
    number: "02", icon: "globe", audience: "Websites & webshops",
    question: "Kan onze website vragen beantwoorden met kennis uit het CMS?",
    partner: "Jij beheert de website, het CMS en het contact met de klant.",
    aitje: "AITJE maakt de kennis doorzoekbaar en bouwt de afgesproken AI-koppeling.",
    to: "/diensten/aitje-custom", link: "Bekijk AI op maat",
  },
  {
    number: "03", icon: "code", audience: "Apps & softwareontwikkeling",
    question: "Welk AI-model past in onze app, en wat kost een verzoek?",
    partner: "Jij beheert het product, de code en de klantafspraken.",
    aitje: "AITJE ontwerpt de AI-workflow, kiest modellen en maakt de kosten per taak inzichtelijk.",
    to: "/diensten/token-management-en-optimalisatie", link: "Bekijk tokenoptimalisatie",
  },
];

const responsibilities = [
  { topic: "De klantvraag", partner: "Brengt de vraag en de bestaande omgeving in kaart.", aitje: "Onderzoekt de AI-mogelijkheden en haalbaarheid." },
  { topic: "Offerte & facturatie", partner: "Offreert aan de klant, factureert en bepaalt de marge.", aitje: "Bevestigt scope en prijs, en factureert jouw bedrijf." },
  { topic: "Uitvoering", partner: "Houdt contact met de klant en levert het eigen deel.", aitje: "Bouwt of installeert het afgesproken AI-deel." },
  { topic: "Na oplevering", partner: "Blijft het eerste aanspreekpunt.", aitje: "Ondersteunt bij technische vragen volgens afspraak." },
];

const projectSteps = [
  { number: "01", title: "Deel de klantvraag", text: "Wat wil de klant bereiken? Welke systemen, data en randvoorwaarden zijn er?" },
  { number: "02", title: "Krijg een voorstel", text: "AITJE onderzoekt wat nodig is en bevestigt de werkzaamheden, aannames en prijs voor jouw offerte." },
  { number: "03", title: "Lever samen op", text: "AITJE bouwt het AI-deel en legt technische keuzes vast. Jij verzorgt de klantcommunicatie." },
  { number: "04", title: "Blijf aanspreekpunt", text: "Jij helpt de klant verder. AITJE ondersteunt bij het afgesproken technische vervolg." },
];

const visibility = [
  { title: "Op de achtergrond", text: "Een oplossing op maat kan onder jouw naam worden geleverd." },
  { title: "Samen zichtbaar", text: "Jullie presenteren de opdracht als samenwerking." },
  { title: "Direct technisch contact", text: "AITJE spreekt met de klant over techniek; de commerciële relatie blijft bij jou." },
];
</script>

<template>
  <div class="it-partner-page">
    <PageHero
      class="service-world-hero partner-hero"
      eyebrow="Voor IT-bedrijven en bureaus"
      title="AI voor jouw klanten. AITJE bouwt mee."
      subline="Je hoeft niet elk AI-vraagstuk zelf op te lossen. Jij houdt de klantrelatie en de regie. AITJE onderzoekt, bouwt en ondersteunt het afgesproken AI-deel."
      image="/img/redesign/partners.webp"
      background="/img/services/nature-tech/voor-it-bedrijven.webp"
      immersive
      image-alt="Een raaf en een roodborstje verbinden samen een kabel op een houten brug, met het AITJE-ei tussen hen in"
    >
      <template #before><NuxtLink to="/diensten" class="partner-back-link">← Alle diensten</NuxtLink></template>
      <div class="partner-hero-actions">
        <UiButton :to="cta.to" size="lg" arrow>{{ cta.label }}</UiButton>
        <a href="#samenwerking" class="partner-hero-secondary">Bekijk de samenwerking <AppIcon name="arrow-right" :size="17" /></a>
      </div>
    </PageHero>

    <section class="partner-promise" aria-label="Kern van de samenwerking"><div class="container-page partner-promise-inner">
      <strong>Jouw klantrelatie.</strong><span aria-hidden="true">+</span><strong>AITJE als AI-specialist.</strong><p>Van haalbaarheid tot bouw en technisch vervolg.</p>
    </div></section>

    <section id="klantvragen" class="partner-section partner-routes"><div class="container-page">
      <div class="partner-heading-grid"><div><p class="eyebrow text-brand-ink">Waar AITJE bij helpt</p><h2>Een AI-vraag van je klant. Wat nu?</h2></div><p>Of je nu servers beheert, websites bouwt of apps ontwikkelt: AITJE voegt specialistische AI-kennis en uitvoering toe aan jouw dienstverlening.</p></div>
      <div class="partner-route-grid"><article v-for="route in routes" :key="route.number" class="partner-route">
        <div class="partner-route-top"><span>{{ route.number }}</span><span class="partner-route-icon"><AppIcon :name="route.icon" :size="25" /></span></div>
        <h3>{{ route.audience }}</h3><p class="partner-route-question">“{{ route.question }}”</p>
        <dl><div><dt>Jij</dt><dd>{{ route.partner }}</dd></div><div><dt>AITJE</dt><dd>{{ route.aitje }}</dd></div></dl>
        <NuxtLink :to="route.to" class="partner-text-link">{{ route.link }} <AppIcon name="arrow-up-right" :size="18" /></NuxtLink>
      </article></div>
    </div></section>

    <section id="samenwerking" class="partner-section partner-roles"><div class="container-page partner-roles-grid">
      <div class="partner-roles-intro"><p class="eyebrow text-brand">De rolverdeling</p><h2>Jij houdt de regie.<br /><span>AITJE bouwt mee.</span></h2><p>AITJE werkt als technische onderaannemer binnen jouw opdracht. Eerst worden het AI-deel, de prijs en de verantwoordelijkheden afgesproken. Daarna kun jij een helder voorstel aan je klant doen.</p><div class="partner-roles-note"><AppIcon name="handshake" :size="23" /><span>Jij bepaalt je eigen marge en factureert de klant. AITJE factureert jouw bedrijf.</span></div></div>
      <div class="partner-role-board"><div class="partner-role-board-head"><span>In de opdracht</span><strong>Jouw bedrijf</strong><strong>AITJE</strong></div><div v-for="item in responsibilities" :key="item.topic" class="partner-role-row"><span>{{ item.topic }}</span><p>{{ item.partner }}</p><p>{{ item.aitje }}</p></div><p class="partner-board-foot">De precieze taken en contactlijnen worden per opdracht afgesproken.</p></div>
    </div></section>

    <section class="partner-section partner-example"><div class="container-page partner-example-grid">
      <div><p class="eyebrow text-brand-ink">Zo kan een opdracht lopen</p><h2>“Kunnen bezoekers vragen stellen over onze producten?”</h2><p class="partner-body-copy">Een webbureau beheert de website van een klant. Die klant wil bezoekers direct antwoord geven op basis van productinformatie en documenten. Het bureau verzorgt de website; AITJE bouwt de AI-functie.</p><div class="partner-example-split"><div><span>Het bureau</span><p>Maakt de offerte, verzorgt de klantcommunicatie en bepaalt hoe de functie in de website past.</p></div><div><span>AITJE</span><p>Beoordeelt de bronnen, kiest de AI-opstelling en bouwt de afgesproken koppeling.</p></div></div><p class="partner-example-caption">Voorbeeld van een mogelijke samenwerking.</p></div>
      <div class="partner-example-visual" aria-label="Van bestaande website en klantkennis naar een AI-functie"><div class="partner-example-source"><AppIcon name="globe" :size="26" /><div><strong>Website & CMS</strong><span>Bestaande omgeving van het bureau</span></div></div><div class="partner-example-connector"><span>bevat</span><AppIcon name="arrow-right" :size="20" /></div><div class="partner-example-source"><AppIcon name="library" :size="26" /><div><strong>Documenten & productkennis</strong><span>De informatie van de klant</span></div></div><div class="partner-example-connector"><span>wordt bruikbaar via</span><AppIcon name="arrow-right" :size="20" /></div><div class="partner-example-result"><AppIcon name="message" :size="27" /><div><strong>AI-functie in de website</strong><span>Bureau + AITJE, ieder vanuit zijn eigen vak</span></div></div></div>
    </div></section>

    <section class="partner-section partner-tech"><div class="container-page partner-tech-grid">
      <div><p class="eyebrow text-brand-ink">Technisch samenwerken</p><h2>AI die past in de bestaande omgeving.</h2><p class="partner-body-copy">De website, server of app van je klant is het vertrekpunt. AITJE kijkt naar systemen, gegevens en beheer voordat het een model of infrastructuur kiest.</p><div class="partner-tech-links"><NuxtLink to="/producten/aitje-assistent">AITJE Assistent <AppIcon name="arrow-up-right" :size="16" /></NuxtLink><NuxtLink to="/producten/aitje-coder">AITJE Coder <AppIcon name="arrow-up-right" :size="16" /></NuxtLink><NuxtLink to="/diensten/aitje-custom">AI op maat <AppIcon name="arrow-up-right" :size="16" /></NuxtLink></div></div>
      <ul class="partner-tech-list"><li><AppIcon name="server" :size="23" /><div><strong>Hardware & hosting</strong><p>Eigen apparatuur, een server of een externe dienst wanneer die beter bij de opdracht past.</p></div></li><li><AppIcon name="plug" :size="23" /><div><strong>Systemen & API’s</strong><p>Aansluiten op de website, app, kennisbank of bestaande bedrijfssoftware.</p></div></li><li><AppIcon name="shield" :size="23" /><div><strong>Data & toegang</strong><p>Bespreken welke gegevens waar verwerkt worden en wie toegang nodig heeft.</p></div></li><li><AppIcon name="gauge" :size="23" /><div><strong>Modellen & kosten</strong><p>De modelkeuze en workflow afstemmen op kwaliteit, gebruik en kosten per resultaat.</p></div></li></ul>
    </div></section>

    <section class="partner-section partner-process"><div class="container-page"><div class="partner-heading-grid"><div><p class="eyebrow text-brand-ink">Van klantvraag naar oplevering</p><h2>Eerst duidelijkheid. Dan jouw offerte.</h2></div><p>AITJE bakent het technische AI-deel af voordat jij het aan je klant aanbiedt. Hoeveel onderzoek nodig is, hangt af van de vraag.</p></div><ol class="partner-step-list"><li v-for="step in projectSteps" :key="step.number"><span>{{ step.number }}</span><h3>{{ step.title }}</h3><p>{{ step.text }}</p></li></ol><div class="partner-process-cta"><p>Al een AI-vraag van een klant? De oplossing hoeft nog niet vast te staan.</p><UiButton :to="cta.to" arrow>{{ cta.label }}</UiButton></div></div></section>

    <section class="partner-section partner-followup"><div class="container-page partner-followup-grid">
      <div><p class="eyebrow text-brand-ink">Bij de klant</p><h2>Jij bepaalt hoe AITJE aansluit.</h2><p class="partner-body-copy">Op de achtergrond of samen in gesprek: per opdracht spreken jullie af wie de klant waarvoor benadert.</p><ul class="partner-visibility"><li v-for="item in visibility" :key="item.title"><AppIcon name="check" :size="19" /><div><strong>{{ item.title }}</strong><p>{{ item.text }}</p></div></li></ul><p class="partner-small-note">Vaste AITJE-producten behouden hun naam. Oplossingen op maat kunnen waar passend onder jouw naam worden geleverd.</p></div>
      <div class="partner-aftercare"><p class="eyebrow text-brand">Na oplevering</p><h3>De klant belt jou. Jij kunt op AITJE terugvallen.</h3><p>Dagelijkse vragen lopen via jouw bedrijf. Bij storingen, modelwissels of uitbreidingen helpt AITJE met het afgesproken AI-deel.</p><div class="partner-aftercare-list"><span>Losse vervolgopdracht</span><span>Afgesproken ondersteuning of SLA</span></div><p>Leg vooraf vast wie waarvoor bereikbaar is. Dan weet jouw klant waar hij terechtkan.</p><NuxtLink to="/diensten/ondersteuning-en-onderhoud">Bekijk ondersteuning en onderhoud <AppIcon name="arrow-up-right" :size="18" /></NuxtLink></div>
    </div></section>

    <CasesSection :slugs="['3d-productmodellen-met-ai', 'chatgpt-of-codex-in-je-eigen-organisatie', 'productteksten-zonder-tokenkosten']" title="Bekijk wat AITJE bouwt." intro="Van koppelingen met bestaande software tot lokale modellen en voordelige AI-workflows. Bekijk hoe die techniek in echte opdrachten is ingezet." />
    <CtaBanner title="Een klant vraagt om AI?" text="Vertel wat de klant wil bereiken en welk deel jouw bedrijf verzorgt. AITJE denkt mee over het technische AI-deel." :primary="cta" />
  </div>
</template>

<style scoped>
.partner-hero { margin-bottom: 0; }
.partner-back-link { display: inline-block; margin-bottom: 1.5rem; color: rgb(255 255 255 / .8); font-size: .875rem; }
.partner-back-link:hover,.partner-hero-secondary:hover { color: var(--color-brand); }
.partner-hero-actions { display: flex; align-items: center; flex-wrap: wrap; gap: 1.3rem; margin-top: 2rem; }
.partner-hero-secondary { display: inline-flex; align-items: center; gap: .5rem; color: white; font-size: .875rem; font-weight: 600; }
.partner-promise { background: var(--color-brand); }
.partner-promise-inner { display: flex; align-items: center; flex-wrap: wrap; gap: .7rem 1rem; padding-block: 1.3rem; }
.partner-promise strong { font: 700 clamp(1.1rem, 2vw, 1.55rem) var(--font-heading); letter-spacing: -.04em; }
.partner-promise-inner>span { opacity: .45; font-size: 1.4rem; }
.partner-promise p { margin-left: auto; max-width: 18rem; font-size: .78rem; line-height: 1.5; }
.partner-section { padding-block: clamp(4rem, 7vw, 6.5rem); }
.partner-section h2 { margin-top: .8rem; font: 700 clamp(2rem, 3.4vw, 3.3rem)/1.12 var(--font-heading); letter-spacing: -.055em; }
.partner-section h3 { font-family: var(--font-heading); letter-spacing: -.035em; }
.partner-heading-grid { display: grid; grid-template-columns: minmax(0, 1.15fr) minmax(0, .85fr); align-items: end; gap: 4rem; }
.partner-heading-grid>p,.partner-body-copy { color: var(--color-muted); line-height: 1.8; font-size: 1rem; }
.partner-routes { background: #f8f8f6; }
.partner-route-grid { display: grid; grid-template-columns: repeat(3, minmax(0, 1fr)); gap: 1.2rem; margin-top: 3rem; }
.partner-route { display: flex; flex-direction: column; min-width: 0; padding: 1.7rem; border: 1px solid var(--color-line); border-radius: 20px; background: white; }
.partner-route-top { display: flex; justify-content: space-between; align-items: start; color: var(--color-muted); font: .75rem var(--font-mono); }
.partner-route-icon { display: grid; place-items: center; width: 3.2rem; height: 3.2rem; border-radius: 14px; background: var(--color-brand); color: var(--color-ink); }
.partner-route h3 { max-width: 17rem; margin-top: 1.6rem; font-size: 1.38rem; font-weight: 700; line-height: 1.25; }
.partner-route-question { min-height: 5.3rem; margin-top: 1rem; font-size: .91rem; font-weight: 500; line-height: 1.65; }
.partner-route dl { border-top: 1px solid var(--color-line); padding-top: 1rem; margin-top: .9rem; }
.partner-route dl>div { display: grid; grid-template-columns: 3.3rem minmax(0, 1fr); gap: .5rem; padding-block: .5rem; }
.partner-route dt { color: #7c6410; font-size: .77rem; font-weight: 700; }
.partner-route dd { color: var(--color-muted); font-size: .79rem; line-height: 1.65; }
.partner-text-link { display: inline-flex; align-items: center; gap: .4rem; width: fit-content; margin-top: auto; padding-top: 1.4rem; font-size: .78rem; font-weight: 700; }
.partner-text-link:hover { text-decoration: underline; text-underline-offset: 4px; }
.partner-roles { background: #102b23; color: white; }
.partner-roles-grid,.partner-example-grid,.partner-tech-grid,.partner-followup-grid { display: grid; grid-template-columns: minmax(0, 1fr) minmax(0, 1fr); gap: clamp(2.5rem, 5vw, 5rem); align-items: center; }
.partner-roles h2 span { color: var(--color-brand); }
.partner-roles-intro>p:not(.eyebrow) { max-width: 31rem; margin-top: 1.4rem; color: #cfdbd2; line-height: 1.8; }
.partner-roles-note { display: flex; gap: 1rem; align-items: start; max-width: 29rem; margin-top: 2rem; border-top: 1px solid #4c6658; padding-top: 1.4rem; line-height: 1.7; font-size: .87rem; }
.partner-roles-note svg { flex: none; color: var(--color-brand); }
.partner-role-board { min-width: 0; border: 1px solid #446254; border-radius: 20px; background: #1b3b2e; overflow: hidden; }
.partner-role-board-head,.partner-role-row { display: grid; grid-template-columns: minmax(0, .8fr) repeat(2, minmax(0, 1fr)); gap: .9rem; padding-inline: 1.3rem; }
.partner-role-board-head { align-items: center; min-height: 4rem; background: var(--color-brand); color: var(--color-ink); font-size: .72rem; }
.partner-role-board-head strong { font-size: .85rem; }
.partner-role-row { padding-block: 1.1rem; border-bottom: 1px solid #446254; }
.partner-role-row>span { color: var(--color-brand); font-size: .76rem; font-weight: 700; }
.partner-role-row p { color: #d8e1d8; font-size: .77rem; line-height: 1.55; }
.partner-board-foot { padding: 1rem 1.3rem; color: #b7cbb7; font-size: .7rem; line-height: 1.5; }
.partner-example { background: #efeee9; }
.partner-example h2 { max-width: 37rem; }
.partner-body-copy { margin-top: 1.3rem; }
.partner-example-split { display: grid; grid-template-columns: 1fr 1fr; gap: 1.3rem; margin-top: 1.7rem; }
.partner-example-split>div { border-top: 2px solid #c9c8bc; padding-top: 1rem; }
.partner-example-split span { font-size: .8rem; font-weight: 700; }
.partner-example-split p { margin-top: .55rem; color: var(--color-muted); font-size: .79rem; line-height: 1.7; }
.partner-example-caption,.partner-small-note { margin-top: 1.3rem; color: var(--color-muted); font-size: .72rem; line-height: 1.65; }
.partner-example-visual { padding: 2rem; border-radius: 25px; background: #fff; border: 1px solid #dfded6; box-shadow: 0 24px 48px rgb(25 32 22 / .06); }
.partner-example-source,.partner-example-result { display: flex; align-items: center; gap: 1rem; padding: 1.1rem 1.2rem; border: 1px solid var(--color-line); border-radius: 14px; }
.partner-example-source>svg,.partner-example-result>svg { flex: none; }
.partner-example-source strong,.partner-example-result strong { display: block; font-size: .93rem; }
.partner-example-source span,.partner-example-result span { display: block; margin-top: .35rem; color: var(--color-muted); font-size: .71rem; line-height: 1.5; }
.partner-example-connector { display: flex; gap: .7rem; justify-content: center; align-items: center; height: 2.8rem; color: #69755f; font-size: .7rem; }
.partner-example-connector svg { transform: rotate(90deg); }
.partner-example-result { background: var(--color-brand); border-color: var(--color-brand); }
.partner-example-result span { color: #453b18; }
.partner-tech { background: white; }
.partner-tech-links { display: flex; flex-wrap: wrap; gap: .5rem; margin-top: 1.7rem; }
.partner-tech-links a { display: inline-flex; align-items: center; gap: .35rem; padding: .65rem .85rem; border: 1px solid var(--color-line); border-radius: 30px; font-size: .72rem; font-weight: 600; }
.partner-tech-links a:hover { border-color: var(--color-ink); }
.partner-tech-list li { display: flex; gap: 1.2rem; padding-block: 1.1rem; border-top: 1px solid var(--color-line); }
.partner-tech-list li:last-child { border-bottom: 1px solid var(--color-line); }
.partner-tech-list svg { flex: none; color: #697955; }
.partner-tech-list strong { font-size: .92rem; }
.partner-tech-list p { margin-top: .4rem; color: var(--color-muted); font-size: .79rem; line-height: 1.7; }
.partner-process { background: #e8ecdf; }
.partner-step-list { display: grid; grid-template-columns: repeat(4, minmax(0, 1fr)); gap: 2rem; margin-top: 3rem; }
.partner-step-list li { border-top: 1px solid #b9c5b0; padding-top: 1rem; }
.partner-step-list li>span { display: grid; place-items: center; width: 2.55rem; height: 2.55rem; background: var(--color-brand); border-radius: 50%; font: .75rem var(--font-mono); }
.partner-step-list h3 { margin-top: 1.2rem; font-size: 1.02rem; font-weight: 700; }
.partner-step-list p { margin-top: .65rem; color: var(--color-muted); font-size: .81rem; line-height: 1.75; }
.partner-process-cta { display: flex; justify-content: space-between; align-items: center; gap: 1.5rem; margin-top: 3rem; padding-top: 1.7rem; border-top: 1px solid #b9c5b0; }
.partner-process-cta p { font-size: .87rem; font-weight: 600; }
.partner-followup { background: #f8f8f6; }
.partner-visibility { margin-top: 1.7rem; }
.partner-visibility li { display: flex; gap: .85rem; padding-block: .9rem; border-top: 1px solid var(--color-line); }
.partner-visibility svg { flex: none; color: #8d7110; }
.partner-visibility strong { font-size: .88rem; }
.partner-visibility p { margin-top: .25rem; color: var(--color-muted); font-size: .79rem; line-height: 1.6; }
.partner-aftercare { padding: 2rem; border-radius: 22px; background: #161e1a; color: white; }
.partner-aftercare h3 { margin-top: .85rem; font-size: clamp(1.4rem, 2.5vw, 2rem); font-weight: 700; line-height: 1.2; }
.partner-aftercare>p:not(.eyebrow) { margin-top: 1.1rem; color: #c6d2c8; font-size: .85rem; line-height: 1.75; }
.partner-aftercare-list { display: flex; flex-wrap: wrap; gap: .5rem; margin-top: 1.5rem; }
.partner-aftercare-list span { border: 1px solid #557060; border-radius: 50px; padding: .5rem .7rem; color: #e6efe5; font-size: .7rem; }
.partner-aftercare>a { display: inline-flex; align-items: center; gap: .5rem; margin-top: 1.6rem; color: var(--color-brand); font-size: .8rem; font-weight: 600; }
.partner-hero-secondary:focus-visible,.partner-back-link:focus-visible,.partner-text-link:focus-visible,.partner-tech-links a:focus-visible,.partner-aftercare>a:focus-visible { outline: 2px solid var(--color-brand); outline-offset: 4px; }
@media (max-width: 1023px) {
  .partner-heading-grid,.partner-roles-grid,.partner-example-grid,.partner-tech-grid,.partner-followup-grid { grid-template-columns: 1fr; gap: 2.5rem; }
  .partner-route-grid { grid-template-columns: repeat(2, minmax(0, 1fr)); }
  .partner-promise p { margin-left: 0; flex-basis: 100%; }
  .partner-example-visual { max-width: 650px; width: 100%; }
}
@media (max-width: 767px) {
  .partner-route-grid,.partner-step-list { grid-template-columns: 1fr; }
  .partner-route-question { min-height: 0; }
  .partner-step-list { gap: 1.6rem; }
  .partner-process-cta { align-items: flex-start; flex-direction: column; }
  .partner-role-board-head { display: none; }
  .partner-role-row { display: block; padding: 1.25rem; }
  .partner-role-row>span { display: block; margin-bottom: .8rem; font-size: .85rem; }
  .partner-role-row p { margin-top: .65rem; font-size: .84rem; }
  .partner-role-row p::before { display: block; margin-bottom: .2rem; color: #a9c4ae; font: .66rem var(--font-mono); letter-spacing: .08em; }
  .partner-role-row p:first-of-type::before { content: 'JOUW BEDRIJF'; }
  .partner-role-row p:last-of-type::before { content: 'AITJE'; }
}
@media (max-width: 479px) {
  .partner-promise-inner { gap: .35rem .6rem; }
  .partner-example-split { grid-template-columns: 1fr; }
  .partner-example-visual,.partner-aftercare { padding: 1.3rem; }
}
</style>
