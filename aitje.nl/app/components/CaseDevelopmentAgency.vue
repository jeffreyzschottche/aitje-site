<script setup lang="ts">
import type { DevelopmentAgencyStory } from "@/content/types";

const props = defineProps<{ story: DevelopmentAgencyStory }>();
const selectedTask = ref(0);
const online = ref(true);
const task = computed(() => props.story.tasks[selectedTask.value]!);
const oldMonthly = computed(() => props.story.costs.subscriptions * props.story.costs.subscriptionMonthlyEur);
const saving = computed(() => oldMonthly.value - props.story.costs.sharedMonthlyEur);
const savingPercent = computed(() => Math.round(saving.value / oldMonthly.value * 100));
const eur = (amount: number) => new Intl.NumberFormat("nl-NL", { style: "currency", currency: "EUR", maximumFractionDigits: 0 }).format(amount);
</script>

<template>
  <div class="agency-case">
    <section class="agency-metrics bg-brand">
      <div class="container-page"><dl>
        <div><dt>Modellen om uit te kiezen</dt><dd>{{ story.modelCount }}</dd></div>
        <div><dt>Gezamenlijk API-budget</dt><dd>{{ eur(story.costs.sharedMonthlyEur) }} <span>/ maand</span></dd></div>
        <div><dt>Minder modelbudget</dt><dd>Circa {{ savingPercent }}%</dd></div>
      </dl></div>
    </section>

    <section class="section-space"><div class="container-page agency-split">
      <div><p class="eyebrow text-brand-ink">De vraag van het developmentbureau</p><h2>AI voor het team.<br />Grip op het gebruik.</h2><p v-for="paragraph in story.intro" :key="paragraph" class="agency-copy">{{ paragraph }}</p></div>
      <div class="agency-budget-visual">
        <p class="eyebrow">Van losse accounts naar één pot</p>
        <div class="agency-seats" aria-label="Negen afzonderlijke abonnementen"><span v-for="seat in story.costs.subscriptions" :key="seat"><AppIcon name="users" :size="20" /><small>€200</small></span></div>
        <div class="agency-budget-before"><span>{{ story.costs.subscriptions }} abonnementen</span><strong>{{ eur(oldMonthly) }} <small>/ maand</small></strong></div>
        <div class="agency-budget-after"><AppIcon name="workflow" :size="28" /><div><span>Eén gezamenlijke tokenpot</span><strong>{{ eur(story.costs.sharedMonthlyEur) }} <small>/ maand</small></strong></div></div>
        <p>Het team deelt de capaciteit. Bij het huidige gebruik blijft er vaak nog budget over.</p>
      </div>
    </div></section>

    <section class="section-space agency-routing-section"><div class="container-page">
      <div class="agency-split"><div><p class="eyebrow text-brand-ink">De taak bepaalt het model</p><h2>Een team van modellen.<br />Eén manier van werken.</h2><p class="agency-copy">DeepSeek, Claude, Codex en kleinere open-source codingmodellen zijn beschikbaar binnen dezelfde werkomgeving. De developers kunnen kiezen wat bij de opdracht past. Het LLM-managementsysteem verbindt die keuzes met het gedeelde budget en de lokale rekenomgeving.</p><p class="agency-copy">AITJE bouwde hiervoor een agentomgeving met OpenCode en OpenRouter. De gedachte is vergelijkbaar met modelorkestratie zoals bij Sakana Fugu: verschillende modellen als een samenwerkende pool inzetten. Voor dit bureau is die aanpak ingericht rond de eigen projecten, documentatie en werkwijze.</p></div>
        <div class="agency-router-visual">
          <div class="agency-router-entry"><AppIcon name="terminal" :size="24" /><div><strong>De developer</strong><span>Opdracht + projectcontext</span></div></div>
          <div class="agency-router-core"><AppIcon name="workflow" :size="30" /><strong>AITJE modelbeheer</strong><span>OpenCode · OpenRouter · eigen endpoints</span></div>
          <div class="agency-router-branches"><div><AppIcon name="globe" :size="22" /><strong>Externe modellen</strong><span>DeepSeek · Claude · Codex</span><small>Gezamenlijk API-budget</small></div><div><AppIcon name="cpu" :size="22" /><strong>Lokale specialisten</strong><span>BOSGAME M5 + server</span><small>Geen externe tokenkosten</small></div></div>
          <p class="agency-caption">{{ story.modelCount }} modelkeuzes binnen één beheerde omgeving.</p>
        </div>
      </div>
      <div class="agency-task-demo">
        <div><p class="eyebrow text-brand-ink">Van gesprek naar uitvoering</p><h3>Assistent denkt mee.<br />Coder werkt ermee.</h3><p class="agency-copy">De chat is ook de voorbereiding voor het codewerk. De Assistent helpt een vraag uitwerken en verzamelt de projectcontext. Coder krijgt de relevante skills en documentatie mee, zodat de agent weet hoe dit bureau bouwt.</p><div class="agency-buttons" role="group" aria-label="Bekijk de werkwijze per soort taak"><button v-for="(item, index) in story.tasks" :key="item.label" type="button" :aria-pressed="selectedTask === index" aria-controls="agency-task-detail" @click="selectedTask = index">{{ item.label }}</button></div></div>
        <div id="agency-task-detail" class="agency-task-panel" aria-live="polite"><div class="agency-panel-header"><span class="agency-dot" /><strong>Projectwerkplek</strong><span>Assistent + Coder</span></div><p class="agency-task-question">{{ task.question }}</p><div class="agency-task-route"><AppIcon name="workflow" :size="21" /><strong>{{ task.route }}</strong></div><p>{{ task.context }}</p><div class="agency-task-result"><AppIcon name="check" :size="20" /><p>{{ task.result }}</p></div><small>Schematische voorbeelden van de werkwijze.</small></div>
      </div>
    </div></section>

    <section class="section-space"><div class="container-page">
      <p class="eyebrow text-brand-ink">De verbinding tussen de onderdelen</p><h2>Dezelfde context.<br />Van vraag tot taak.</h2>
      <ol class="agency-workflow"><li v-for="(stage, index) in story.workflow" :key="stage.title"><div><span>0{{ index + 1 }}</span><AppIcon :name="stage.icon" :size="24" /></div><h3>{{ stage.title }}</h3><p>{{ stage.text }}</p></li></ol>
    </div></section>

    <section class="section-space bg-white"><div class="container-page agency-split">
      <div><p class="eyebrow text-brand-ink">De koppeling met Asana</p><h2>Een taak afgerond.<br />Wat heeft AI gekost?</h2><p class="agency-copy">Bij losse chataccounts verdwijnen de kosten achter een maandabonnement. In deze omgeving is het modelgebruik terug te leiden naar de opdracht in Asana: welk model is ingezet, hoeveel tokens zijn verwerkt en wat kostte dat om de taak af te krijgen?</p><p class="agency-copy">Zo kan het bureau modelkeuzes bijstellen op basis van het eigen werk. Gespecialiseerde lokale modellen nemen geschikt codewerk over; externe modellen blijven beschikbaar voor taken waarvoor ze meerwaarde hebben. Beschikbare kortingen, bonuscredits en gebruikslimieten worden meegenomen bij het beheren van de modeltoegang.</p></div>
      <div class="agency-asana-visual"><div class="agency-asana-header"><span class="agency-asana-mark" aria-hidden="true"><i /><i /><i /></span><div><strong>Asana-taak</strong><span>Modelgebruik hoort bij de opdracht</span></div></div><dl><div><dt>Project & taak</dt><dd>De opdracht in de repository</dd></div><div><dt>Ingezet model</dt><dd>De gekozen lokale of externe route</dd></div><div><dt>Tokenverbruik</dt><dd>De verwerkte input en output</dd></div><div><dt>Modelkosten</dt><dd>Terug te leiden naar deze taak</dd></div></dl><div class="agency-asana-footer"><AppIcon name="gauge" :size="22" /><span>Van één tokenpot naar inzicht per opdracht.</span></div><p class="agency-caption">Welke gegevens bij de taak samenkomen; geen gedeeld klantdossier.</p></div>
    </div></section>

    <section class="section-space agency-local-section"><div class="container-page agency-split">
      <figure class="agency-hardware"><img :src="story.hardwareImage" alt="Zilveren BOSGAME M5 met AITJE-logo voor lokale Assistent en Coder" width="1536" height="1024" loading="lazy" /><figcaption>BOSGAME M5, aangevuld met een eigen server voor de AI-omgeving.</figcaption></figure>
      <div><p class="eyebrow text-brand-ink">Een lokale basis voor beide</p><h2>Internet valt weg.<br />Het codewerk hoeft niet stil.</h2><p class="agency-copy">De BOSGAME M5 en server maken de lokale modellen beschikbaar voor zowel Assistent als Coder. Codebase-documentatie en skills blijven in de eigen omgeving bruikbaar. Een developer kan daardoor ook bij internetuitval doorwerken met een lokaal codingmodel of de Assistent om hulp vragen.</p><div class="agency-buttons" role="group" aria-label="Werken met en zonder internet"><button type="button" :aria-pressed="online" aria-controls="agency-network-detail" @click="online = true">Met internet</button><button type="button" :aria-pressed="!online" aria-controls="agency-network-detail" @click="online = false">Zonder internet</button></div><div id="agency-network-detail" class="agency-network-detail" aria-live="polite"><AppIcon :name="online ? 'globe' : 'wifi-off'" :size="25" /><div><h3>{{ online ? 'De volledige modelpool' : 'Lokale modellen blijven werken' }}</h3><p>{{ online ? 'Lokale modellen én externe API’s zijn beschikbaar. Asana en andere online koppelingen zijn bereikbaar. Bij uitval of een limiet bij één aanbieder blijft een andere ingestelde modelroute beschikbaar, zolang die bereikbaar is.' : 'Assistent en Coder gebruiken de beschikbare lokale modellen, projectdocumentatie en bestanden op het eigen netwerk. Externe modellen, Asana en andere online diensten zijn pas weer bereikbaar zodra er internet is.' }}</p></div></div></div>
    </div></section>

    <section class="section-space agency-cost-section"><div class="container-page">
      <div class="agency-split"><div><p class="eyebrow text-brand">Het verschil in modelbudget</p><h2>€1.800 aan abonnementen.<br /><span>€350 voor het hele team.</span></h2><p class="agency-copy">Het bureau heeft de negen afzonderlijke abonnementen vervangen door een gezamenlijke tokenpot van €350 per maand. De developers gebruiken gedurende de werkdag verschillende modellen. Bij het huidige gebruik is dat budget vaak niet helemaal nodig.</p><p class="agency-copy">Het voordeel ontstaat door de combinatie: gespecialiseerde lokale modellen, gerichte projectcontext en beheerd API-gebruik. Het zwaarste externe model hoeft daardoor niet iedere stap te doen.</p></div><div class="agency-cost-comparison"><div><span>Voorheen · 9 × €200</span><strong>{{ eur(oldMonthly) }}</strong><small>Per maand aan afzonderlijke abonnementen</small><div class="agency-cost-bar"><span /></div></div><div class="agency-cost-current"><span>Nu · gedeeld API-budget</span><strong>{{ eur(story.costs.sharedMonthlyEur) }}</strong><small>Per maand voor het hele team</small><div class="agency-cost-bar"><span :style="{ width: `${story.costs.sharedMonthlyEur / oldMonthly * 100}%` }" /></div></div><p><strong>{{ eur(saving) }} minder per maand</strong><span>Circa {{ savingPercent }}% lager modelbudget</span></p></div></div>
      <p class="agency-cost-note">Vergelijking van het eerdere abonnementsbedrag met het ingestelde API-budget voor dit bureau. Hardware, server, stroom, inrichting en beheer vallen daarbuiten. Lokale verwerking kent geen externe tokenrekening; betaalde modelcalls komen uit de gezamenlijke pot.</p>
    </div></section>

    <section class="section-space"><div class="container-page agency-conclusion"><div><p class="eyebrow text-brand-ink">De samenwerking maakt het verschil</p><h2>Chatten, bouwen en beheren.<br />Het hoort bij elkaar.</h2><p class="agency-copy">Deze case brengt de AITJE-producten samen: Assistent voor het gesprek en de voorbereiding, Coder voor het werk in de codebase en modelbeheer voor de keuze, beschikbaarheid en kosten. Het developmentbureau houdt ruimte om nieuwe modellen te gebruiken, met een eigen lokale basis om op terug te vallen.</p></div><div class="agency-conclusion-actions"><UiButton to="/contact" arrow>Bespreek jouw AI-omgeving</UiButton><NuxtLink to="/diensten/token-management-en-optimalisatie">Bekijk token management & optimalisatie <AppIcon name="arrow-up-right" :size="18" /></NuxtLink></div></div></section>
  </div>
</template>

<style scoped>
h2 { margin-top: 1rem; font: 700 clamp(1.8rem, 3.2vw, 2.9rem)/1.15 var(--font-heading); letter-spacing: -.045em; }
h3 { font: 600 1.2rem/1.3 var(--font-heading); letter-spacing: -.025em; }
.agency-copy { margin-top: 1.25rem; font-size: 1rem; line-height: 1.85; color: var(--color-muted); }
.agency-split { display: grid; grid-template-columns: minmax(0, 1fr) minmax(0, 1fr); align-items: center; gap: 4rem; }
.agency-metrics { padding-block: 2rem; }
.agency-metrics dl { display: grid; grid-template-columns: .7fr 1.1fr 1fr; gap: 2rem; }
.agency-metrics dt { font-size: .8rem; }
.agency-metrics dd { margin-top: .6rem; font: 700 clamp(2rem, 3.5vw, 3rem)/1.1 var(--font-heading); letter-spacing: -.05em; }
.agency-metrics dd span { font-size: .9rem; font-weight: 500; letter-spacing: -.02em; }
.agency-budget-visual { padding: 2rem; border: 1px solid #cdd4c1; border-radius: 22px; background: #edf0e5; }
.agency-budget-visual .eyebrow { font-size: .65rem; }
.agency-seats { display: grid; grid-template-columns: repeat(9, minmax(0, 1fr)); gap: .4rem; margin-top: 1.5rem; }
.agency-seats>span { display: flex; flex-direction: column; gap: .55rem; align-items: center; padding-block: .9rem; border: 1px solid #d9decf; border-radius: 9px; background: white; }
.agency-seats small { font-size: .55rem; }
.agency-budget-before { display: flex; flex-wrap: wrap; justify-content: space-between; gap: .8rem; align-items: center; margin-block: 1.4rem; }
.agency-budget-before>span { font-size: .8rem; color: var(--color-muted); }
.agency-budget-before strong { font: 600 1.5rem var(--font-heading); }
.agency-budget-before small,.agency-budget-after small { font-size: .75rem; font-weight: 400; }
.agency-budget-after { display: flex; gap: 1.5rem; align-items: center; padding: 1.5rem; background: var(--color-brand); border-radius: 14px; }
.agency-budget-after svg { flex: none; }
.agency-budget-after span { font-size: .8rem; }
.agency-budget-after strong { display: block; margin-top: .5rem; font: 700 2rem var(--font-heading); letter-spacing: -.045em; }
.agency-budget-visual>p:last-child { margin-top: 1rem; font-size: .8rem; line-height: 1.7; color: var(--color-muted); }
.agency-routing-section { background: #e9eddf; }
.agency-router-visual { max-width: 580px; width: 100%; justify-self: center; }
.agency-router-entry { display: flex; gap: 1rem; align-items: center; width: fit-content; margin-inline: auto; padding: 1.2rem 2rem; border: 1px solid #c7cfbb; border-radius: 14px; background: white; }
.agency-router-entry strong { font-size: .9rem; }
.agency-router-entry span { display: block; margin-top: .3rem; color: var(--color-muted); font-size: .7rem; }
.agency-router-core { display: flex; flex-direction: column; align-items: center; gap: .8rem; margin-top: 2rem; padding: 2rem 1rem; border-radius: 18px; background: #173a2d; color: white; position: relative; }
.agency-router-core::before { content: ''; position: absolute; height: 2rem; width: 1px; top: -2rem; left: 50%; background: #8d9c7a; }
.agency-router-core svg { color: var(--color-brand); }
.agency-router-core strong { font: 600 1.2rem var(--font-heading); }
.agency-router-core span { font-size: .7rem; color: #d0dbca; text-align: center; }
.agency-router-branches { display: grid; grid-template-columns: minmax(0, 1fr) minmax(0, 1fr); gap: 1rem; margin-top: 1rem; }
.agency-router-branches>div { display: flex; flex-direction: column; align-items: center; text-align: center; gap: .75rem; padding: 1.4rem .8rem; border: 1px solid #c7cfbb; border-radius: 14px; background: #f9faf6; }
.agency-router-branches svg { color: #536047; }
.agency-router-branches strong { font-size: .85rem; }
.agency-router-branches span,.agency-router-branches small { font-size: .65rem; line-height: 1.5; color: var(--color-muted); }
.agency-router-branches small { border-radius: 50px; padding: .35rem .6rem; background: #e9eddf; color: #34513a; }
.agency-caption { margin-top: 1rem; font-size: .7rem; color: var(--color-muted); line-height: 1.7; }
.agency-task-demo { display: grid; grid-template-columns: minmax(0, .85fr) minmax(0, 1.15fr); align-items: center; gap: 3rem; margin-top: 4rem; padding-top: 3.5rem; border-top: 1px solid #c7cfbb; }
.agency-task-demo h3 { font-size: clamp(1.6rem, 2.4vw, 2.1rem); margin-top: 1rem; }
.agency-buttons { display: flex; flex-wrap: wrap; gap: .5rem; margin-top: 1.5rem; }
.agency-buttons button { padding: .75rem 1rem; background: white; border: 1px solid #c7cfbb; border-radius: 50px; font-size: .75rem; cursor: pointer; }
.agency-buttons button[aria-pressed=true] { background: var(--color-brand); border-color: var(--color-brand); }
.agency-buttons button:focus-visible { outline: 2px solid #9b7c00; outline-offset: 4px; }
.agency-task-panel { padding: 1.75rem; border-radius: 20px; background: #15352a; color: white; }
.agency-panel-header { display: flex; gap: .7rem; flex-wrap: wrap; align-items: center; font-size: .75rem; }
.agency-panel-header>span:last-child { color: #b9ccb8; margin-left: auto; font-size: .65rem; }
.agency-dot { width: 7px; height: 7px; border-radius: 50%; background: var(--color-brand); }
.agency-task-question { margin-top: 1.5rem; padding: 1.15rem; border-radius: 12px; background: #284d3e; font-size: .95rem; line-height: 1.7; }
.agency-task-route { display: flex; gap: .7rem; align-items: center; margin-top: 1.5rem; color: var(--color-brand); font-size: .85rem; }
.agency-task-route svg { flex: none; }
.agency-task-panel>p:not(.agency-task-question) { margin-top: .9rem; font-size: .85rem; line-height: 1.8; color: #d3dfcf; }
.agency-task-result { display: flex; align-items: start; gap: .7rem; border-top: 1px solid #44614d; padding-top: 1.1rem; margin-top: 1.2rem; font-size: .8rem; line-height: 1.8; }
.agency-task-result svg { color: var(--color-brand); flex: none; margin-top: .2rem; }
.agency-task-panel>small { display: block; margin-top: 1.2rem; color: #b9ccb8; font-size: .65rem; }
.agency-workflow { display: grid; grid-template-columns: repeat(4, minmax(0, 1fr)); gap: 2rem; margin-top: 2.5rem; }
.agency-workflow li { border-top: 1px solid var(--color-line); padding-top: 1.2rem; }
.agency-workflow li>div { display: flex; justify-content: space-between; align-items: center; margin-bottom: 1.4rem; }
.agency-workflow li>div span { font: .75rem var(--font-mono); color: var(--color-muted); }
.agency-workflow p { margin-top: .8rem; font-size: .85rem; color: var(--color-muted); line-height: 1.8; }
.agency-asana-visual { padding: 2rem; border: 1px solid var(--color-line); border-radius: 20px; background: #fafaf7; }
.agency-asana-header { display: flex; align-items: center; gap: 1rem; }
.agency-asana-mark { position: relative; display: block; flex: none; width: 36px; height: 32px; }
.agency-asana-mark i { position: absolute; width: 14px; height: 14px; border-radius: 50%; background: #ed6965; }
.agency-asana-mark i:first-child { top: 0; left: 11px; }
.agency-asana-mark i:nth-child(2) { bottom: 0; left: 1px; }
.agency-asana-mark i:last-child { bottom: 0; right: 1px; }
.agency-asana-header strong { font: 600 1.1rem var(--font-heading); }
.agency-asana-header div>span { display: block; margin-top: .4rem; color: var(--color-muted); font-size: .7rem; }
.agency-asana-visual dl { margin-top: 1.5rem; }
.agency-asana-visual dl>div { display: grid; grid-template-columns: .8fr 1.2fr; gap: 1rem; border-top: 1px solid var(--color-line); padding-block: 1.1rem; font-size: .8rem; line-height: 1.65; }
.agency-asana-visual dt { color: var(--color-muted); }
.agency-asana-visual dd { font-weight: 500; }
.agency-asana-footer { display: flex; gap: .8rem; align-items: center; background: var(--color-brand); padding: 1rem; border-radius: 10px; font-size: .8rem; line-height: 1.6; }
.agency-asana-footer svg { flex: none; }
.agency-local-section { background: white; border-top: 1px solid var(--color-line); }
.agency-hardware img { display: block; width: 100%; height: auto; }
.agency-hardware figcaption { margin-top: 1rem; font-size: .75rem; line-height: 1.7; color: var(--color-muted); }
.agency-network-detail { display: flex; gap: 1rem; padding: 1.3rem; background: #edf0e5; border-radius: 14px; margin-top: 1.2rem; }
.agency-network-detail>svg { flex: none; margin-top: .15rem; }
.agency-network-detail h3 { font-size: .95rem; }
.agency-network-detail p { font-size: .82rem; line-height: 1.8; margin-top: .7rem; color: var(--color-muted); }
.agency-cost-section { background: #14362a; color: white; }
.agency-cost-section h2 span { color: var(--color-brand); }
.agency-cost-section .agency-copy { color: #d3dfcf; }
.agency-cost-comparison { padding: 2rem; background: #244b3a; border: 1px solid #53705b; border-radius: 20px; }
.agency-cost-comparison>div>span { color: #d3dfcf; font-size: .75rem; }
.agency-cost-comparison strong { display: block; font: 700 clamp(2rem, 3.4vw, 3rem)/1.2 var(--font-heading); letter-spacing: -.05em; margin-top: .6rem; }
.agency-cost-comparison small { display: block; color: #d3dfcf; font-size: .7rem; margin-top: .5rem; }
.agency-cost-bar { height: 8px; border-radius: 50px; background: #436651; margin-top: 1.1rem; overflow: hidden; }
.agency-cost-bar span { display: block; width: 100%; height: 100%; background: #a2b7a5; border-radius: 50px; }
.agency-cost-current { margin-top: 2rem; }
.agency-cost-current strong { color: var(--color-brand); }
.agency-cost-current .agency-cost-bar span { background: var(--color-brand); }
.agency-cost-comparison>p { border-top: 1px solid #53705b; padding-top: 1.1rem; margin-top: 1.5rem; }
.agency-cost-comparison>p strong { font-size: 1.2rem; letter-spacing: -.03em; }
.agency-cost-comparison>p span { display: block; color: #d3dfcf; font-size: .75rem; margin-top: .5rem; }
.agency-cost-note { border-top: 1px solid #53705b; padding-top: 1.5rem; margin-top: 2.5rem; color: #c2d3bd; font-size: .75rem; line-height: 1.8; }
.agency-conclusion { display: grid; grid-template-columns: minmax(0, 1.3fr) minmax(0, .7fr); align-items: center; gap: 4rem; }
.agency-conclusion-actions { display: flex; flex-direction: column; align-items: start; gap: 1.5rem; }
.agency-conclusion-actions>a:last-child { display: flex; gap: .5rem; font-size: .8rem; font-weight: 500; }
.agency-conclusion-actions>a:last-child svg { flex: none; }
@media (max-width: 1023px) {
  .agency-split,.agency-task-demo,.agency-conclusion { grid-template-columns: minmax(0, 1fr); gap: 2.5rem; }
  .agency-workflow { grid-template-columns: repeat(2, minmax(0, 1fr)); }
  .agency-budget-visual,.agency-asana-visual,.agency-hardware { width: 100%; max-width: 650px; }
}
@media (max-width: 640px) {
  .agency-metrics dl { grid-template-columns: minmax(0, 1fr); gap: 1.4rem; }
  .agency-metrics dd { font-size: 2rem; }
  .agency-budget-visual,.agency-task-panel,.agency-asana-visual,.agency-cost-comparison { padding: 1.3rem; }
  .agency-seats { grid-template-columns: repeat(3, minmax(0, 1fr)); gap: .5rem; }
  .agency-seats>span { flex-direction: row; justify-content: center; gap: .5rem; padding-block: .7rem; }
  .agency-budget-after { padding: 1rem; gap: 1rem; }
  .agency-router-branches>div { padding: 1.1rem .6rem; }
  .agency-router-branches strong { font-size: .75rem; }
  .agency-workflow { gap: 1.5rem; }
  .agency-workflow h3 { font-size: 1rem; }
  .agency-asana-visual dl>div { grid-template-columns: minmax(0, 1fr); gap: .35rem; }
  .agency-buttons button { font-size: .7rem; padding: .65rem .8rem; }
  .agency-network-detail { padding: 1rem; gap: .7rem; }
}
</style>
