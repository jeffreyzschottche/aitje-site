<script setup lang="ts">
import type { ProductEnrichmentStory } from "@/content/types";

const props = defineProps<{ story: ProductEnrichmentStory }>();
const scenario = ref<"reported" | "schema">("reported");
const characterMillions = ref<number | string>("");
const euros = (value: number) => `€ ${value.toLocaleString("nl-NL", { minimumFractionDigits: 2, maximumFractionDigits: 2 })}`;
const deeplEstimate = computed(() => {
  const volume = Number(characterMillions.value);
  if (characterMillions.value === "" || !Number.isFinite(volume) || volume < 0 || volume > 50) return null;
  const plan = props.story.tokenCosts.deepl;
  return plan.monthlyEur + Math.max(0, volume - plan.includedMillions) * plan.extraMillionEur;
});
const input = computed(() => props.story.tokenCosts.turns.reduce((sum, turn) => sum + turn.input, 0));
const output = computed(() => props.story.tokenCosts.turns.reduce((sum, turn) => sum + turn.output, 0));
const total = computed(() => input.value + output.value);
const volumes = computed(() => scenario.value === "schema"
  ? [total.value * props.story.run.products / 1e6]
  : props.story.tokenCosts.reportedMillions);
const inputMillions = computed(() => volumes.value.map(volume => volume * input.value / total.value));
const outputMillions = computed(() => volumes.value.map(volume => volume * output.value / total.value));
const number = (value: number, digits = 0) => value.toLocaleString("nl-NL", { maximumFractionDigits: digits });
const usd = (value: number) => `$${value.toLocaleString("nl-NL", { minimumFractionDigits: 2, maximumFractionDigits: 2 })}`;
const range = (values: number[], format: (n: number) => string) => values.map(format).join(" – ");
const cost = (inputRate: number, outputRate: number) => volumes.value.map((_, i) => inputMillions.value[i]! * inputRate + outputMillions.value[i]! * outputRate);
</script>

<template>
  <section class="section-space case-token-section">
    <div class="container-page">
      <div class="token-intro">
        <p class="eyebrow text-brand-ink">Het verschil in rekenkosten</p>
        <h2 class="section-title mt-4">Miljoenen tokens.<br />Eén serverrekening.</h2>
        <p>Voor deze verwerking is ongeveer {{ story.tokenCosts.reportedMillions[0] }}–{{ story.tokenCosts.reportedMillions[1] }} miljoen tokens gebruikt, inclusief input en output. Gemma draaide op de eigen GPU-VPS. De modeltokens kregen geen afzonderlijke API-prijs: de GPU-rekening bleef {{ usd(story.run.hourlyUsd * story.run.hours) }} voor {{ story.run.hours }} uur.</p>
      </div>

      <details class="token-turns">
        <summary>Waarom één product meerdere keren inputtokens gebruikt <AppIcon name="chevron-down" :size="20" /></summary>
        <p>Bij een volgende beurt leest het model ook eerdere berichten en toolresultaten. Hieronder het benaderde verloop per product; de geschiedenis telt bij iedere input opnieuw mee.</p>
        <div class="token-turn-grid">
          <div v-for="(turn, index) in story.tokenCosts.turns" :key="turn.title">
            <span class="eyebrow">Turn 0{{ index + 1 }}</span><h3>{{ turn.title }}</h3>
            <dl><div><dt>Input</dt><dd>≈ {{ number(turn.input) }}</dd></div><div><dt>Output</dt><dd>≈ {{ number(turn.output) }}</dd></div></dl>
            <p>{{ turn.inputDetail }}</p><p>{{ turn.outputDetail }}</p>
          </div>
        </div>
        <p><strong>Per product: ≈ {{ number(input) }} input + {{ number(output) }} output = {{ number(total) }} tokens.</strong><br />Voor {{ number(story.run.products) }} producten is dat {{ number(input * story.run.products / 1e6, 3) }} miljoen input en {{ number(output * story.run.products / 1e6, 3) }} miljoen output: {{ number(total * story.run.products / 1e6, 3) }} miljoen totaal. Het schema is een benadering; het opgegeven totale projectverbruik ligt op 68–75 miljoen.</p>
      </details>

      <div class="token-table-heading"><h3>Wat zou hetzelfde tokenvolume via een API kosten?</h3>
        <div class="token-scenarios" role="group" aria-label="Grondslag voor de kostenvergelijking">
          <button type="button" :aria-pressed="scenario === 'reported'" @click="scenario = 'reported'">68–75 miljoen tokens</button>
          <button type="button" :aria-pressed="scenario === 'schema'" @click="scenario = 'schema'">Schema × 6.900 producten</button>
        </div>
      </div>
      <div class="token-volumes" aria-live="polite">
        <span><strong>{{ range(inputMillions, value => number(value, 3)) }}M</strong> inputtokens</span>
        <span><strong>{{ range(outputMillions, value => number(value, 3)) }}M</strong> outputtokens</span>
      </div>
      <div class="token-table-window" tabindex="0" role="region" aria-label="API-kostenvergelijking, horizontaal scrollbaar">
        <table>
          <caption>USD · standaard API-tarieven, gecontroleerd op {{ story.tokenCosts.checkedOn }}</caption>
          <thead><tr><th scope="col">Model</th><th scope="col">Input / 1M</th><th scope="col">Output / 1M</th><th scope="col">Inputkosten</th><th scope="col">Outputkosten</th><th scope="col">Totaal</th></tr></thead>
          <tbody>
            <tr class="token-gemma-row"><th scope="row">Gemma 4 31B <span>Deze opdracht · eigen GPU-VPS</span></th><td>{{ usd(0) }}</td><td>{{ usd(0) }}</td><td>{{ usd(0) }}</td><td>{{ usd(0) }}</td><td>{{ usd(story.run.hours * story.run.hourlyUsd) }}<span>serverhuur</span></td></tr>
            <tr v-for="model in story.tokenCosts.models" :key="model.name"><th scope="row"><a :href="model.source" target="_blank" rel="noopener noreferrer">{{ model.name }} <AppIcon name="arrow-up-right" :size="12" /></a></th><td>{{ usd(model.inputUsd) }}</td><td>{{ usd(model.outputUsd) }}</td><td>{{ range(cost(model.inputUsd, 0), usd) }}</td><td>{{ range(cost(0, model.outputUsd), usd) }}</td><td>{{ range(cost(model.inputUsd, model.outputUsd), usd) }}</td></tr>
          </tbody>
        </table>
      </div>
      <p class="token-assumptions">Rekenvoorbeeld: inputmiljoenen × inputtarief + outputmiljoenen × outputtarief. Voor 68–75 miljoen gebruiken we dezelfde input/outputverhouding als het schema; de werkelijke verdeling is niet afzonderlijk gemeten. Zonder caching- of batchkortingen, aanvullende reasoningtokens, tools, btw en overige infrastructuur. Andere modellen tokeniseren en verwerken anders: dit zijn kostenramingen, geen uitgevoerde API-runs.</p>
      <div class="token-takeaway"><AppIcon name="workflow" :size="28" /><p><strong>De taak bepaalt de oplossing.</strong> Voor deze opdracht kozen we een eigen Gemma-omgeving voor analyse, verrijking en vertaling. Kwaliteit, koppelingen en controle wegen mee, naast de prijs. De tabel vergelijkt de kosten met de geselecteerde API-modellen.</p></div>
      <div class="token-deepl">
        <div><p class="eyebrow text-brand-ink">En DeepL?</p><h3>Een prijs per teken.</h3><p>DeepL rekent voor vertaling met brontekens, niet met input- en outputtokens. De 68–75 miljoen modeltokens bevatten ook prompts, toolcalls en eerdere context. Dat volume kun je niet als DeepL-vertaalvolume factureren.</p>
          <dl><div><dt>API Growth · per maand</dt><dd>{{ euros(story.tokenCosts.deepl.monthlyEur) }}</dd></div><div><dt>Inbegrepen</dt><dd>{{ story.tokenCosts.deepl.includedMillions }} miljoen tekens</dd></div><div><dt>Per extra miljoen tekens</dt><dd>{{ euros(story.tokenCosts.deepl.extraMillionEur) }}</dd></div></dl>
          <p class="token-deepl-note">Nederlands maandpakket, inclusief btw, gecontroleerd op {{ story.tokenCosts.checkedOn }}. Dit betreft alleen vertalen; productanalyse, laaddata en CMS-publicatie vragen daarnaast een eigen workflow.</p><a :href="story.tokenCosts.deepl.source" target="_blank" rel="noopener noreferrer">DeepL · API-tarieven <AppIcon name="arrow-up-right" :size="14" /></a>
        </div>
        <div class="token-deepl-calculator"><p class="eyebrow">Reken een vertaalvolume door</p><label for="deepl-character-millions">Miljoen brontekens in één maand</label><input id="deepl-character-millions" v-model="characterMillions" type="number" min="0" max="50" step="0.01" placeholder="Bijvoorbeeld 5" aria-describedby="deepl-volume-note" />
          <div class="token-deepl-result" aria-live="polite"><strong>{{ deeplEstimate === null ? 'Vul een volume in' : euros(deeplEstimate) }}</strong><span v-if="deeplEstimate !== null">maandpakket + extra tekens</span></div>
          <p id="deepl-volume-note">Maandprijs + max(0, volume − inbegrepen tekens) × tekentarief. Tel de brontekens van alle vertaalrequests samen. Het tekenvolume van deze opdracht is niet opgegeven, dus we presenteren hiervoor geen fictieve projectfactuur.</p>
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped>
.case-token-section { background: #faf9f2; }
.token-intro { max-width: 780px; }
.token-intro > p:last-child { margin-top: 1.5rem; color: var(--color-muted); line-height: 1.8; font-size: 1.05rem; }
.token-turns { margin-block: 2rem 3rem; background: white; border: 1px solid var(--color-line); border-radius: 18px; padding: 1.5rem; }
.token-turns summary { display: flex; align-items: center; justify-content: space-between; gap: 1rem; font-weight: 600; cursor: pointer; list-style: none; }
.token-turns summary::-webkit-details-marker { display: none; }
.token-turns[open] summary > svg { transform: rotate(180deg); }
.token-turns > p { margin-top: 1.5rem; color: var(--color-muted); font-size: 0.9rem; line-height: 1.8; }
.token-turn-grid { display: grid; grid-template-columns: repeat(3, minmax(0, 1fr)); gap: 1rem; margin-top: 1.5rem; }
.token-turn-grid > div { padding: 1.25rem; border-radius: 12px; background: #f3f5ec; }
.token-turn-grid .eyebrow { font-size: 0.7rem; }
.token-turn-grid h3 { margin-block: 1rem; font-weight: 600; }
.token-turn-grid dl > div { display: flex; justify-content: space-between; gap: 1rem; margin-block: 0.5rem; font-size: 0.85rem; }
.token-turn-grid dd { font-weight: 600; }
.token-turn-grid p { margin-top: 0.8rem; font-size: 0.8rem; line-height: 1.6; color: var(--color-muted); }
.token-table-heading { display: flex; justify-content: space-between; flex-wrap: wrap; align-items: center; gap: 1.25rem; }
.token-table-heading h3 { font: 600 1.35rem/1.4 var(--font-heading); max-width: 400px; }
.token-scenarios { display: flex; flex-wrap: wrap; gap: 0.5rem; }
.token-scenarios button { padding: 0.8rem 1rem; border-radius: 100px; border: 1px solid var(--color-line); background: white; font-size: 0.85rem; cursor: pointer; }
.token-scenarios button[aria-pressed="true"] { background: var(--color-brand); border-color: var(--color-brand); }
.token-scenarios button:focus-visible, .token-turns summary:focus-visible, .token-table-window:focus-visible { outline: 2px solid var(--color-ink); outline-offset: 4px; }
.token-volumes { display: flex; flex-wrap: wrap; gap: 1.5rem; margin-block: 1.5rem; font-size: 0.85rem; color: var(--color-muted); }
.token-volumes strong { color: var(--color-ink); }
.token-table-window { overflow-x: auto; border: 1px solid var(--color-line); border-radius: 16px; background: white; }
table { width: 100%; min-width: 930px; border-collapse: collapse; font-size: 0.82rem; }
caption { text-align: left; padding: 1rem 1.25rem; font-size: 0.75rem; color: var(--color-muted); }
th, td { text-align: right; padding: 1rem; border-top: 1px solid var(--color-line); white-space: nowrap; }
thead th { background: #f3f2e9; font-weight: 500; }
th:first-child { text-align: left; }
td:last-child { font-weight: 600; }
th a { display: inline-flex; gap: 0.3rem; align-items: center; text-decoration: underline; text-decoration-color: #ddd9bf; text-underline-offset: 4px; }
th span, td span { display: block; margin-top: 0.35rem; font-size: 0.7rem; font-weight: 400; color: var(--color-muted); }
.token-gemma-row { background: #fff4af; }
.token-assumptions { margin-top: 1rem; color: var(--color-muted); font-size: 0.77rem; line-height: 1.8; }
.token-takeaway { display: flex; align-items: flex-start; gap: 1rem; margin-top: 2rem; padding-top: 1.5rem; border-top: 1px solid var(--color-line); }
.token-takeaway svg { flex: none; }
.token-takeaway p { font-size: 0.92rem; line-height: 1.8; color: var(--color-muted); }
.token-takeaway strong { color: var(--color-ink); }
.token-deepl { display: grid; grid-template-columns: 1.25fr 1fr; gap: 3rem; margin-top: 3rem; padding: 2rem; border-radius: 20px; border: 1px solid var(--color-line); background: white; }
.token-deepl h3 { font: 600 1.6rem var(--font-heading); margin-block: 1rem; }
.token-deepl p:not(.eyebrow) { font-size: 0.9rem; line-height: 1.8; color: var(--color-muted); }
.token-deepl dl { margin-block: 1.5rem; }
.token-deepl dl > div { display: flex; justify-content: space-between; gap: 1rem; padding-block: 0.7rem; border-top: 1px solid var(--color-line); font-size: 0.85rem; }
.token-deepl dd { font-weight: 600; text-align: right; }
.token-deepl p.token-deepl-note { font-size: 0.75rem; }
.token-deepl a { display: inline-flex; align-items: center; gap: 0.5rem; margin-top: 0.75rem; font-size: 0.8rem; text-decoration: underline; text-decoration-color: var(--color-brand); text-underline-offset: 4px; }
.token-deepl-calculator { border-radius: 14px; padding: 1.5rem; background: #f3f5ec; min-width: 0; }
.token-deepl-calculator .eyebrow { font-size: 0.7rem; line-height: 1.7; }
.token-deepl-calculator label { display: block; font-size: 0.85rem; margin-block: 1.25rem 0.5rem; }
.token-deepl-calculator input { display: block; width: 100%; padding: 0.85rem; background: white; border: 1px solid #b8c2a6; border-radius: 8px; }
.token-deepl-result { margin-block: 1.25rem; }
.token-deepl-result strong { display: block; font: 600 1.7rem var(--font-heading); }
.token-deepl-result span { font-size: 0.75rem; color: var(--color-muted); }
.token-deepl-calculator #deepl-volume-note { font-size: 0.75rem; }
@media(max-width: 1023px) { .token-deepl { grid-template-columns: 1fr; gap: 1.5rem; } }
@media(max-width: 640px) { .token-deepl { padding: 1.25rem; } }
@media(max-width: 640px) { .token-turn-grid { grid-template-columns: 1fr; } .token-turns { padding: 1.25rem; } .token-table-heading h3 { font-size: 1.2rem; } }
</style>
