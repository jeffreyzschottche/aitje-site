<script setup lang="ts">
import type { ProductEnrichmentStory } from "@/content/types";
import CaseTokenCosts from "@/components/CaseTokenCosts.vue";

const props = defineProps<{ story: ProductEnrichmentStory }>();
const selected = ref(0);
const step = computed(() => props.story.workflow[selected.value]!);
const totalUsd = computed(() => props.story.run.hours * props.story.run.hourlyUsd);
const number = (value: number, digits = 0) => value.toLocaleString("nl-NL", { maximumFractionDigits: digits });
const dollars = (value: number, digits = 2) => `$${value.toLocaleString("nl-NL", { minimumFractionDigits: digits, maximumFractionDigits: digits })}`;
const metrics = computed(() => [
  { value: number(props.story.run.products), label: "producten verwerkt" },
  { value: `${props.story.run.hours} uur`, label: "eerste catalogusrun" },
  { value: dollars(totalUsd.value), label: "GPU-rekenkosten" },
  { value: `${props.story.markets.length} markten`, label: "vertalingen in het CMS" },
]);
</script>

<template>
  <div class="product-enrichment-story">
    <section class="case-run-summary">
      <div class="container-page">
        <p class="eyebrow text-brand-ink">De eerste verwerking</p>
        <dl class="case-run-metrics">
          <div v-for="metric in metrics" :key="metric.label">
            <dt>{{ metric.label }}</dt><dd>{{ metric.value }}</dd>
          </div>
        </dl>
      </div>
    </section>

    <section class="section-space">
      <div class="container-page case-story-split">
        <div>
          <p class="eyebrow text-brand-ink">De vraag achter de opdracht</p>
          <h2 class="section-title mt-4">{{ story.challenge.title }}</h2>
          <p v-for="paragraph in story.challenge.paragraphs" :key="paragraph" class="case-story-copy">{{ paragraph }}</p>
        </div>
        <div class="case-choice-visual">
          <div class="case-choice-before">
            <p class="eyebrow">Van productomschrijving</p>
            <AppIcon name="package" :size="34" />
            <span>De informatie die er al was</span>
          </div>
          <div class="case-choice-arrow" aria-hidden="true"><AppIcon name="arrow-right" :size="24" /></div>
          <div class="case-choice-after">
            <p class="eyebrow">Naar echte keuzehulp</p>
            <div class="case-specifications">
              <span v-for="specification in story.challenge.specifications" :key="specification">{{ specification }}</span>
            </div>
            <div class="case-choice-insight"><AppIcon name="phone" :size="24" /><p>Welke telefoon laadt snel?<br /><strong>En welke minder snel?</strong></p></div>
            <p class="case-choice-caption">Technische gegevens worden bruikbare informatie voor de klant.</p>
          </div>
        </div>
      </div>
    </section>

    <section class="section-space case-workflow-section">
      <div class="container-page">
        <div class="case-section-intro">
          <p class="eyebrow text-brand-ink">Wat AITJE bouwde</p>
          <h2 class="section-title mt-4">Eén workflow. Van CMS naar CMS.</h2>
          <p class="case-story-copy">Een gekoppeld proces voor analyse, laaddata, verrijking en vertaling. Bekijk per stap wat er gebeurt.</p>
        </div>
        <div class="case-workflow-controls" role="group" aria-label="Bekijk de stappen van de productworkflow">
          <button v-for="(stage, index) in story.workflow" :key="stage.title" type="button" :aria-pressed="selected === index" aria-controls="product-workflow-detail" @click="selected = index">
            <span class="case-workflow-index">0{{ index + 1 }}</span>
            <AppIcon :name="stage.icon" :size="26" />
            <span>{{ stage.title }}</span>
            <AppIcon v-if="index < story.workflow.length - 1" name="arrow-right" :size="18" class="case-workflow-arrow" />
          </button>
        </div>
        <div id="product-workflow-detail" class="case-workflow-detail" aria-live="polite" aria-atomic="true">
          <div><p class="eyebrow text-brand-ink">Stap 0{{ selected + 1 }}</p><h3>{{ step.title }}</h3><p class="case-story-copy">{{ step.text }}</p></div>
          <div class="case-workflow-output"><AppIcon name="check" :size="24" /><p class="eyebrow">Deze stap levert op</p><p>{{ step.output }}</p></div>
        </div>

        <div class="case-toolcalling">
          <div>
            <p class="eyebrow text-brand-ink">Toolcalling, begrijpelijk uitgelegd</p>
            <h2 class="case-story-subtitle">AI die informatie kan ophalen.</h2>
            <p v-for="paragraph in story.toolCalling" :key="paragraph" class="case-story-copy">{{ paragraph }}</p>
          </div>
          <div class="case-connections">
            <p class="eyebrow">Drie verbindingen in de architectuur</p>
            <div v-for="connection in story.connections" :key="connection.title" class="case-connection">
              <span><AppIcon :name="connection.icon" :size="24" /></span>
              <div><h3>{{ connection.title }}</h3><p>{{ connection.text }}</p></div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <section class="section-space">
      <div class="container-page">
        <p class="eyebrow text-brand-ink">Wat de webshop nu kan</p>
        <h2 class="section-title mt-4">Meer dan betere teksten.</h2>
        <div class="case-outcomes">
          <div v-for="outcome in story.outcomes" :key="outcome.title"><AppIcon :name="outcome.icon" :size="30" /><h3>{{ outcome.title }}</h3><p>{{ outcome.text }}</p></div>
        </div>
        <div class="case-market-strip">
          <div><p class="eyebrow">Ook voor klanten over de grens</p><p>{{ story.translation }}</p></div>
          <ul aria-label="Markten met vertaalde productinformatie"><li v-for="market in story.markets" :key="market.code"><span>{{ market.code }}</span>{{ market.name }}</li></ul>
        </div>
      </div>
    </section>

    <section class="section-space case-compute-section on-dark">
      <div class="container-page case-story-split">
        <div>
          <p class="eyebrow text-brand">De praktijkbenchmark</p>
          <h2 class="section-title mt-4">6.900 producten.<br />Eén verwerkingsronde.</h2>
          <p class="case-story-copy">De GPU-VPS draaide {{ story.run.hours }} uur voor het analyseren, verrijken en vertalen van de catalogus. Het publiceren naar het CMS liep tijdens die verwerking mee.</p>
          <div class="case-hardware"><AppIcon name="cpu" :size="28" /><div><strong>{{ story.run.gpu }} · {{ story.run.memory }}</strong><span>{{ story.run.precision }}</span></div></div>
          <p class="case-story-copy">{{ story.hosting }}</p>
        </div>
        <div class="case-run-calculation">
          <p class="eyebrow">GPU-kosten van deze run</p>
          <p class="case-cost-formula">{{ story.run.hours }} uur × {{ dollars(story.run.hourlyUsd) }}</p>
          <p class="case-cost-total">{{ dollars(totalUsd) }}</p>
          <dl class="case-cost-details">
            <div><dt>Per verwerkt product</dt><dd>{{ dollars(totalUsd / story.run.products, 4) }}</dd></div>
            <div><dt>Gemiddeld per uur</dt><dd>≈ {{ number(story.run.products / story.run.hours) }} producten</dd></div>
            <div><dt>Gemiddeld per minuut</dt><dd>≈ {{ number(story.run.products / story.run.hours / 60, 1) }} producten</dd></div>
          </dl>
          <p class="case-cost-note">Berekend uit de projectcijfers: {{ number(story.run.products) }} producten, {{ story.run.hours }} uur en {{ dollars(story.run.hourlyUsd) }} per uur. Alleen de GPU-rekenkosten; ontwikkeling, opslag en overige hosting vallen hier buiten. De doorvoer geldt voor de hele workflow, niet voor één losse modelaanroep.</p>
        </div>
      </div>
    </section>

    <section class="section-space">
      <div class="container-page">
        <div class="case-section-intro">
          <p class="eyebrow text-brand-ink">De modelkeuze</p>
          <h2 class="section-title mt-4">Waarom Gemma 4 31B?</h2>
          <p class="case-story-copy">{{ story.modelChoice[0] }}</p>
        </div>
        <div class="case-model-comparison">
          <div class="case-model-cards">
            <div class="case-model-selected"><p class="eyebrow">Gebruikt in deze opdracht</p><h3>Gemma 4 31B</h3><p>Dense model</p><span>Inhoudelijke analyse &amp; verrijking</span></div>
            <div><p class="eyebrow">Een alternatief</p><h3>Gemma 4 26B A4B</h3><p>Mixture-of-Experts</p><span>Interessant voor snelle verwerking</span></div>
          </div>
          <div class="case-benchmark-window" tabindex="0" role="region" aria-label="Vergelijking van Gemma-modelbenchmarks">
            <table class="case-benchmark-table">
              <caption>Gepubliceerde modelbenchmarks · hoger is beter</caption>
              <thead><tr><th scope="col">Benchmark</th><th scope="col">31B</th><th scope="col">26B A4B</th></tr></thead>
              <tbody><tr v-for="benchmark in story.modelBenchmarks" :key="benchmark.label"><th scope="row">{{ benchmark.label }}<span>{{ benchmark.task }}</span></th><td>{{ number(benchmark.dense, 1) }}%</td><td>{{ number(benchmark.moe, 1) }}%</td></tr></tbody>
            </table>
          </div>
        </div>
        <div class="case-model-context">
          <p>{{ story.modelChoice[1] }}</p>
          <div><p>{{ story.modelNotes }}</p><a :href="story.modelSource.url" target="_blank" rel="noopener noreferrer">{{ story.modelSource.name }} <AppIcon name="arrow-up-right" :size="15" /></a></div>
        </div>
      </div>
    </section>

    <section class="section-space case-frontier-section">
      <div class="container-page">
        <div class="case-section-intro"><p class="eyebrow text-brand-ink">Waar open modellen dichtbij komen</p><h2 class="section-title mt-4">Klein verschil. Per taak bekeken.</h2><p class="case-story-copy">Op sommige tests ligt een open Gemma-model dicht bij een recente GPT-variant. Hieronder drie voorbeelden uit de vergelijking met GPT-6 Luna op Low.</p></div>
        <div class="case-benchmark-window case-frontier-table" tabindex="0" role="region" aria-label="Geselecteerde benchmarks, Gemma 26B A4B en GPT-6 Luna Low">
          <table class="case-benchmark-table"><caption>Selectie uit Artificial Analysis · hoger is beter</caption><thead><tr><th scope="col">Benchmark</th><th scope="col">{{ story.frontierComparison.gemma }}</th><th scope="col">{{ story.frontierComparison.frontier }}</th></tr></thead><tbody><tr v-for="benchmark in story.frontierComparison.rows" :key="benchmark.label"><th scope="row">{{ benchmark.label }}<span>{{ benchmark.task }}</span></th><td>{{ benchmark.gemma }}%</td><td>{{ benchmark.frontier }}%</td></tr></tbody></table>
        </div>
        <div class="case-frontier-note"><p>{{ story.frontierComparison.note }}</p><a :href="story.frontierComparison.source" target="_blank" rel="noopener noreferrer">Artificial Analysis · modelvergelijking <AppIcon name="arrow-up-right" :size="15" /></a></div>
      </div>
    </section>

    <CaseTokenCosts :story="story" />

    <section class="section-space case-sync-section">
      <div class="container-page">
        <div class="case-section-intro"><p class="eyebrow text-brand-ink">De workflow blijft doorwerken</p><h2 class="section-title mt-4">Elke week de nieuwe producten mee.</h2><p class="case-story-copy">De eerste catalogus is verwerkt. De wekelijkse synchronisatie is actief en gebruikt dezelfde keten voor producten die nog ontbreken in het analysesysteem.</p></div>
        <ol class="case-sync-steps"><li v-for="(stage, index) in story.sync" :key="stage.title"><span>0{{ index + 1 }}</span><h3>{{ stage.title }}</h3><p>{{ stage.text }}</p></li></ol>
        <div class="case-conclusion"><AppIcon name="workflow" :size="36" /><p>{{ story.conclusion }}</p><UiButton to="/diensten/token-management-en-optimalisatie" variant="secondary" arrow>Ontdek de aanpak</UiButton></div>
      </div>
    </section>
  </div>
</template>

<style scoped>
.case-run-summary { padding-block: 3rem; border-bottom: 1px solid var(--color-line); }
.case-run-metrics { display: grid; grid-template-columns: repeat(4, 1fr); gap: 2rem; margin-top: 1.5rem; }
.case-run-metrics > div { display: flex; flex-direction: column-reverse; gap: 0.5rem; border-left: 2px solid var(--color-brand); padding-left: 1.25rem; }
.case-run-metrics dd { font: 600 clamp(1.7rem, 3vw, 2.5rem)/1.15 var(--font-heading); letter-spacing: -0.04em; }
.case-run-metrics dt { color: var(--color-muted); font-size: 0.9rem; }
.case-story-split { display: grid; grid-template-columns: 1.1fr 1fr; gap: clamp(2.5rem, 6vw, 5rem); align-items: center; }
.case-story-copy { margin-top: 1.25rem; font-size: 1.05rem; line-height: 1.8; color: var(--color-muted); }
.case-section-intro { max-width: 760px; }
.case-story-subtitle { margin-top: 1rem; font: 600 clamp(1.6rem, 2.4vw, 2.2rem)/1.2 var(--font-heading); letter-spacing: -0.035em; }
.case-choice-visual { position: relative; background: #efeee6; padding: 2rem; border-radius: 24px; }
.case-choice-before { display: grid; grid-template-columns: auto 1fr; align-items: center; gap: 1rem; color: var(--color-muted); }
.case-choice-before .eyebrow { grid-column: 1 / -1; }
.case-choice-arrow { display: flex; justify-content: center; margin-block: 1rem; transform: rotate(90deg); }
.case-choice-after { background: white; border: 1px solid var(--color-line); border-radius: 16px; padding: 1.5rem; }
.case-specifications { display: flex; flex-wrap: wrap; gap: 0.5rem; margin-block: 1rem 1.5rem; }
.case-specifications span { padding: 0.4rem 0.7rem; border-radius: 6px; background: #f7f3db; font-size: 0.78rem; }
.case-choice-insight { display: flex; align-items: center; gap: 1rem; border-top: 1px solid var(--color-line); padding-top: 1.25rem; line-height: 1.6; }
.case-choice-insight svg { flex: none; }
.case-choice-caption { margin-top: 1rem; font-size: 0.8rem; line-height: 1.6; color: var(--color-muted); }
.case-workflow-section, .case-sync-section { background: var(--color-sand); }
.case-workflow-controls { display: grid; grid-template-columns: repeat(5, 1fr); margin-top: 2.5rem; gap: 1rem; }
.case-workflow-controls button { position: relative; display: flex; flex-direction: column; align-items: flex-start; gap: 0.9rem; border: 1px solid var(--color-line); border-radius: 14px; background: white; padding: 1.25rem; font-weight: 600; cursor: pointer; text-align: left; }
.case-workflow-controls button[aria-pressed="true"] { background: var(--color-brand); border-color: var(--color-brand); }
.case-workflow-controls button:focus-visible { outline: 2px solid var(--color-ink); outline-offset: 4px; }
.case-workflow-index { font: 400 0.7rem var(--font-mono); }
.case-workflow-arrow { position: absolute; top: 1.2rem; right: 1rem; }
.case-workflow-detail { display: grid; grid-template-columns: 1.4fr 1fr; align-items: center; gap: 2.5rem; padding: 2rem; margin-top: 1rem; border: 1px solid var(--color-line); border-radius: 18px; background: white; min-height: 245px; }
.case-workflow-detail h3 { margin-top: 0.75rem; font: 600 1.5rem var(--font-heading); }
.case-workflow-detail .case-story-copy { font-size: 0.97rem; }
.case-workflow-output { padding: 1.5rem; border-radius: 12px; background: #f4f6ec; }
.case-workflow-output .eyebrow { margin-block: 0.9rem 0.7rem; font-size: 0.65rem; }
.case-workflow-output > p:last-child { font-size: 1.05rem; font-weight: 600; line-height: 1.5; }
.case-toolcalling { display: grid; grid-template-columns: 1fr 1fr; gap: clamp(2rem, 5vw, 4rem); margin-top: 4.5rem; align-items: start; }
.case-connections { padding: 2rem; border-radius: 20px; border: 1px solid var(--color-line); background: white; }
.case-connections > .eyebrow { font-size: 0.67rem; line-height: 1.7; }
.case-connection { display: flex; gap: 1rem; margin-top: 1.5rem; }
.case-connection > span { display: grid; place-items: center; width: 48px; height: 48px; flex: none; border-radius: 12px; background: var(--color-brand); }
.case-connection h3 { font-weight: 600; }
.case-connection p { margin-top: 0.4rem; color: var(--color-muted); font-size: 0.9rem; line-height: 1.7; }
.case-outcomes { display: grid; grid-template-columns: repeat(3, 1fr); gap: 2.5rem; margin-top: 3rem; }
.case-outcomes > div { border-top: 1px solid var(--color-line); padding-top: 1.5rem; }
.case-outcomes h3 { margin-block: 1.25rem 0.75rem; font: 600 1.25rem var(--font-heading); }
.case-outcomes p { color: var(--color-muted); line-height: 1.8; }
.case-market-strip { display: grid; grid-template-columns: 1fr 0.9fr; gap: 2.5rem; align-items: center; margin-top: 3rem; background: #eef1e6; border-radius: 20px; padding: 2rem; }
.case-market-strip > div > p:last-child { margin-top: 1rem; color: var(--color-muted); font-size: 0.93rem; line-height: 1.8; }
.case-market-strip ul { display: grid; grid-template-columns: repeat(2, 1fr); gap: 1rem; }
.case-market-strip li { display: flex; align-items: center; gap: 0.75rem; font-size: 0.85rem; }
.case-market-strip li span { display: grid; place-items: center; width: 46px; height: 46px; background: white; border-radius: 50%; font: 500 0.85rem var(--font-mono); }
.case-compute-section { background: #102c25; color: white; }
.case-compute-section .case-story-copy { color: #c3cec6; }
.case-hardware { display: flex; align-items: center; gap: 1rem; margin-top: 1.75rem; color: var(--color-brand); }
.case-hardware span { display: block; margin-top: 0.4rem; color: #c3cec6; font-size: 0.85rem; }
.case-run-calculation { background: #1a3930; border: 1px solid #3d554a; border-radius: 24px; padding: clamp(1.5rem, 3vw, 2.5rem); }
.case-cost-formula { font-family: var(--font-mono); color: #c3cec6; margin-top: 1.5rem; }
.case-cost-total { font: 600 clamp(3rem, 5vw, 4.5rem)/1.2 var(--font-heading); color: var(--color-brand); letter-spacing: -0.05em; margin-block: 0.6rem 1.75rem; }
.case-cost-details > div { display: flex; justify-content: space-between; gap: 1rem; padding-block: 0.9rem; border-top: 1px solid #3d554a; font-size: 0.87rem; }
.case-cost-details dt { color: #c3cec6; }
.case-cost-details dd { font-weight: 600; text-align: right; }
.case-cost-note { color: #b1c0b7; margin-top: 1.5rem; font-size: 0.77rem; line-height: 1.8; }
.case-model-comparison { display: grid; grid-template-columns: 0.85fr 1.6fr; align-items: start; gap: 2.5rem; margin-top: 2.5rem; }
.case-model-cards { display: grid; gap: 1rem; }
.case-model-cards > div { padding: 1.5rem; border-radius: 16px; border: 1px solid var(--color-line); }
.case-model-cards .case-model-selected { background: #eef1e6; border-color: #c9d2bb; }
.case-model-cards .eyebrow { font-size: 0.65rem; }
.case-model-cards h3 { font: 600 1.3rem var(--font-heading); margin-block: 1rem 0.5rem; }
.case-model-cards p:not(.eyebrow), .case-model-cards span { font-size: 0.84rem; color: var(--color-muted); }
.case-model-cards span { display: block; margin-top: 1rem; }
.case-benchmark-window { overflow-x: auto; min-width: 0; }
.case-benchmark-table { width: 100%; border-collapse: collapse; text-align: left; font-size: 0.9rem; }
.case-benchmark-table caption { text-align: left; padding-bottom: 1rem; font-weight: 600; }
.case-benchmark-table th, .case-benchmark-table td { padding: 1rem 0.8rem; border-bottom: 1px solid var(--color-line); }
.case-benchmark-table thead th { font-weight: 600; background: var(--color-sand); }
.case-benchmark-table th:first-child { width: 62%; }
.case-benchmark-table th span { display: block; font-weight: 400; font-size: 0.75rem; color: var(--color-muted); margin-top: 0.3rem; }
.case-benchmark-table th:not(:first-child), .case-benchmark-table td { white-space: nowrap; text-align: right; }
.case-benchmark-table td:first-of-type { font-weight: 600; background: #f4f6ed; }
.case-model-context { display: grid; grid-template-columns: 1fr 1fr; gap: 2.5rem; margin-top: 2rem; font-size: 0.9rem; line-height: 1.8; color: var(--color-muted); }
.case-model-context > div { font-size: 0.8rem; }
.case-model-context a { display: inline-flex; gap: 0.5rem; align-items: center; margin-top: 1rem; color: var(--color-ink); text-decoration: underline; text-decoration-color: var(--color-brand); text-underline-offset: 4px; }
.case-sync-steps { display: grid; grid-template-columns: repeat(3, 1fr); gap: 2.5rem; margin-top: 2.5rem; }
.case-frontier-section { padding-top: 0; }
.case-frontier-table { margin-top: 2rem; }
.case-frontier-table table { min-width: 660px; }
.case-frontier-table th:first-child { width: 45%; }
.case-frontier-table thead th:not(:first-child) { white-space: normal; max-width: 240px; }
.case-frontier-note { max-width: 850px; margin-top: 1.25rem; font-size: 0.8rem; line-height: 1.8; color: var(--color-muted); }
.case-frontier-note a { display: inline-flex; align-items: center; gap: 0.5rem; margin-top: 0.75rem; color: var(--color-ink); text-decoration: underline; text-decoration-color: var(--color-brand); text-underline-offset: 4px; }
.case-sync-steps li > span { display: grid; place-items: center; width: 44px; height: 44px; background: var(--color-brand); border-radius: 50%; font: 400 0.85rem var(--font-mono); }
.case-sync-steps h3 { font: 600 1.1rem var(--font-heading); margin-block: 1rem 0.75rem; }
.case-sync-steps p { color: var(--color-muted); font-size: 0.93rem; line-height: 1.8; }
.case-conclusion { display: flex; align-items: center; gap: 1.5rem; border-top: 1px solid var(--color-line); margin-top: 3rem; padding-top: 2rem; }
.case-conclusion > svg { flex: none; }
.case-conclusion p { flex: 1; color: var(--color-muted); font-size: 0.95rem; line-height: 1.8; }
.case-conclusion > a { flex: none; }
@media (max-width: 1023px) {
  .case-story-split, .case-toolcalling, .case-model-comparison { grid-template-columns: 1fr; }
  .case-choice-visual { max-width: 620px; }
  .case-model-cards { grid-template-columns: 1fr 1fr; }
  .case-conclusion { flex-wrap: wrap; }
  .case-conclusion > a { margin-left: 60px; }
}
@media (max-width: 640px) {
  .case-run-metrics { grid-template-columns: 1fr 1fr; gap: 1.5rem; }
  .case-run-metrics > div { padding-left: 0.75rem; }
  .case-run-metrics dt { font-size: 0.75rem; }
  .case-workflow-controls { grid-template-columns: repeat(3, 1fr); gap: 0.6rem; }
  .case-workflow-controls button { padding: 0.9rem; font-size: 0.78rem; gap: 0.75rem; }
  .case-workflow-arrow { display: none; }
  .case-workflow-detail, .case-market-strip, .case-model-context, .case-model-cards { grid-template-columns: 1fr; gap: 1.5rem; }
  .case-workflow-detail, .case-connections, .case-choice-visual, .case-market-strip { padding: 1.25rem; }
  .case-outcomes, .case-sync-steps { grid-template-columns: 1fr; gap: 2rem; }
  .case-cost-details > div { font-size: 0.78rem; }
  .case-benchmark-table { min-width: 440px; }
  .case-benchmark-window:focus-visible { outline: 2px solid var(--color-ink); outline-offset: 3px; }
  .case-conclusion { display: block; }
  .case-conclusion p { margin-block: 1rem 1.5rem; }
  .case-conclusion > a { margin-left: 0; }
}
</style>
