<script setup lang="ts">
import { assistantComparison as comparison } from "@/content/assistantComparison";
const { numberLocale } = useSiteLanguage();
const usd = (amount: number) =>
  new Intl.NumberFormat(numberLocale.value, {
    style: "currency",
    currency: "USD",
    maximumFractionDigits: 2,
    minimumFractionDigits: 0,
  }).format(amount);
const score = (amount: number) =>
  new Intl.NumberFormat(numberLocale.value, {
    minimumFractionDigits: 1,
    maximumFractionDigits: 1,
  }).format(amount);
const cost = (model: (typeof comparison.models)[number]) =>
  comparison.inputMillions * model.inputUsd +
  comparison.outputMillions * model.outputUsd;
</script>
<template>
  <section id="tokens-output" class="assistant-cost-output">
    <div class="container-page">
      <div class="co-heading">
        <div>
          <p class="eyebrow text-brand-ink">
            Tokengebruik, kosten en kwaliteit
          </p>
          <h2>Sterke output.<br />Lokale kosten.</h2>
        </div>
        <p>
          Bij lokale AI koop je de rekenomgeving. Je betaalt geen externe
          API-prijs voor iedere gelezen of geschreven token. Zo kan veelvuldig
          gebruik aantrekkelijk worden, terwijl jij het model, de hardware en
          het beheer kiest.
        </p>
      </div>
      <div class="co-highlight">
        <div class="co-zero">
          <span class="co-label">Externe tokenkosten · lokaal model</span
          ><strong>€0</strong><span>per miljoen input- én outputtokens</span>
          <p>
            Het model verwerkt vragen op jullie eigen apparaat of server.
            Software, hardware, stroom en beheer hebben hun eigen kosten.
          </p>
        </div>
        <div class="co-energy">
          <span class="co-label">BOSGAME · praktijkindicatie van AITJE</span
          ><strong>&lt; €0,40<span>stroom per dag</span></strong>
          <p>
            Bij intensief lokaal gebruik op de door AITJE geteste hardware.
            AITJE gebruikte onder meer een M5 met gpt-oss-120b en een M6 met
            Qwen3.8.
          </p>
          <small
            >Gerapporteerde praktijkervaring. Het stroomtarief, model, vermogen
            en gebruikspatroon bepalen jouw rekening. Dit is geen totale
            dagprijs inclusief aanschaf of software.</small
          >
        </div>
      </div>
      <div class="co-costs">
        <div class="co-cost-intro">
          <p class="eyebrow text-brand-ink">Input lezen. Output schrijven.</p>
          <h3>Wat kost hetzelfde<br />tokenvolume via een API?</h3>
          <p>
            Een voorbeeld met {{ comparison.inputMillions }} miljoen inputtokens
            en {{ comparison.outputMillions }} miljoen outputtokens. Bij een API
            betaal je voor beide. Bij lokale modelverwerking is de externe
            tokenrekening nul.
          </p>
          <div class="co-token-flow">
            <div>
              <AppIcon name="file-search" :size="25" /><strong
                >{{ comparison.inputMillions }}M</strong
              ><span>inputtokens</span>
            </div>
            <AppIcon name="arrow-right" :size="23" />
            <div>
              <AppIcon name="message" :size="25" /><strong
                >{{ comparison.outputMillions }}M</strong
              ><span>outputtokens</span>
            </div>
          </div>
          <p class="co-small">
            Input omvat ook meegestuurde context en gesprekshistorie.
            Redeneertokens en extra modelrondes kunnen het verbruik verhogen.
          </p>
        </div>
        <div class="co-table-wrap">
          <table>
            <caption>
              Standaard API-tarieven in USD · gecontroleerd
              {{
                comparison.checkedOn
              }}
            </caption>
            <thead>
              <tr>
                <th>Verwerking</th>
                <th>Input / 1M</th>
                <th>Output / 1M</th>
                <th>Dit volume</th>
              </tr>
            </thead>
            <tbody>
              <tr class="co-local-row">
                <th>AITJE · lokaal model<span>Externe API-kosten</span></th>
                <td>{{ usd(0) }}</td>
                <td>{{ usd(0) }}</td>
                <td>{{ usd(0) }}</td>
              </tr>
              <tr v-for="model in comparison.models" :key="model.name">
                <th>{{ model.name }}</th>
                <td>{{ usd(model.inputUsd) }}</td>
                <td>{{ usd(model.outputUsd) }}</td>
                <td>{{ usd(cost(model)) }}</td>
              </tr>
            </tbody>
          </table>
          <p>
            Vergelijking van hetzelfde tokenvolume, zonder caching,
            batchkorting, tools of belastingen. Modelkeuze, outputkwaliteit en
            snelheid verschillen. De lokale rij bevat geen hardware-, software-,
            stroom- of beheerkosten.
          </p>
          <a
            :href="comparison.pricingSource"
            target="_blank"
            rel="noopener noreferrer"
            >Bron: officiële Claude API-prijzen
            <AppIcon name="arrow-up-right" :size="15"
          /></a>
        </div>
      </div>
      <div class="co-benchmarks">
        <div class="co-bench-heading">
          <p class="eyebrow text-brand-ink">
            Qwen3.8-27B versus Claude Opus 4.6 Max
          </p>
          <h3>Een lokaal model kan<br />op hoog niveau meedoen.</h3>
          <p>
            Qwen3.8-27B scoort in de gepubliceerde vergelijking hoger bij
            instructies volgen en documentbegrip. Bij de twee onderstaande
            redeneer- en terminaltaken scoort Opus 4.6 hoger. De taak bepaalt
            welk model past.
          </p>
        </div>
        <div class="co-legend">
          <span><i />Qwen3.8-27B</span><span><i />Claude Opus 4.6 Max</span>
        </div>
        <div class="co-benchmark-grid">
          <article
            v-for="benchmark in comparison.benchmarks"
            :key="benchmark.name"
          >
            <div class="co-benchmark-title">
              <h4>{{ benchmark.description }}</h4>
              <span>{{ benchmark.name }}</span>
            </div>
            <div class="co-benchmark-row">
              <span>Qwen</span>
              <div><i :style="{ width: `${benchmark.qwen}%` }" /></div>
              <strong>{{ score(benchmark.qwen) }}</strong>
            </div>
            <div class="co-benchmark-row co-claude">
              <span>Claude</span>
              <div><i :style="{ width: `${benchmark.claude}%` }" /></div>
              <strong>{{ score(benchmark.claude) }}</strong>
            </div>
          </article>
        </div>
        <p class="co-small">
          Scores uit Qwens eigen modelkaart, schaal 0–100. Dit zijn geen
          metingen van de AITJE-installatie of de getoonde BOSGAME. Quantisatie,
          context, tools en hardware beïnvloeden de praktijk. De vergelijking
          gebruikt Opus 4.6 Max; de prijstabel noemt ook nieuwere
          Claude-versies.
        </p>
        <div class="co-sources">
          <a
            :href="comparison.benchmarkSource"
            target="_blank"
            rel="noopener noreferrer"
            >Qwen · modelkaart en meetopzet
            <AppIcon name="arrow-up-right" :size="15" /></a
          ><a
            :href="comparison.localSource"
            target="_blank"
            rel="noopener noreferrer"
            >Qwen3.8 lokaal via Ollama
            <AppIcon name="arrow-up-right" :size="15"
          /></a>
        </div>
      </div>
      <div class="co-practice">
        <AppIcon name="gauge" :size="28" />
        <div>
          <strong>De praktijk bij AITJE</strong>
          <p>
            Op de BOSGAME M5 rapporteert AITJE circa 8–12 outputtokens per
            seconde met een 4-bit 100B/120B-model. Op de M6 is Qwen3.8 intensief
            gebruikt tijdens de ontwikkeling van een mobiele app. We kiezen en
            testen de configuratie op jullie eigen soort werk.
          </p>
          <span
            >Praktijkindicatie van AITJE; geen algemene snelheidsgarantie voor
            alle modellen, contextlengtes of gebruikersaantallen.</span
          >
        </div>
      </div>
    </div>
  </section>
</template>
<style scoped>
.assistant-cost-output {
  padding-block: 5rem;
  background: #f3f4ed;
  scroll-margin-top: 6rem;
}
.co-heading {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 4rem;
  align-items: end;
  margin-bottom: 2.5rem;
}
.co-heading h2 {
  font-size: clamp(2rem, 3.5vw, 3.2rem);
  font-weight: 700;
  line-height: 1.12;
  margin: 1rem 0;
}
.co-heading > p {
  font-size: 1.05rem;
  line-height: 1.85;
  color: var(--color-muted);
}
.co-highlight {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 1.5rem;
}
.co-zero,
.co-energy {
  border-radius: 1.5rem;
  padding: 2rem;
}
.co-zero {
  background: #172210;
  color: #fff;
}
.co-energy {
  background: #e5ecd5;
  border: 1px solid #c1d29f;
}
.co-label {
  font: 0.65rem var(--font-mono);
  text-transform: uppercase;
  letter-spacing: 0.08em;
}
.co-zero > .co-label {
  color: #cadb9b;
}
.co-zero > strong {
  font: 700 5.8rem/1.1 var(--font-heading);
  display: block;
  letter-spacing: -0.06em;
  margin-top: 1rem;
}
.co-zero > span:last-of-type {
  font-size: 0.9rem;
  color: #d3dfc0;
}
.co-zero p {
  font-size: 0.85rem;
  line-height: 1.85;
  color: #b8c8a4;
  margin-top: 1.2rem;
}
.co-energy > strong {
  font: 700 3.3rem/1.2 var(--font-heading);
  display: block;
  letter-spacing: -0.04em;
  margin-top: 1.3rem;
}
.co-energy > strong > span {
  display: block;
  font-size: 1rem;
  letter-spacing: 0;
  font-weight: 500;
  margin-top: 0.5rem;
}
.co-energy p {
  font-size: 0.85rem;
  line-height: 1.85;
  margin-top: 1rem;
  color: #4f6040;
}
.co-energy small {
  display: block;
  font-size: 0.68rem;
  line-height: 1.8;
  margin-top: 1rem;
  color: #647353;
}
.co-costs {
  display: grid;
  grid-template-columns: 0.85fr 1.2fr;
  gap: 3rem;
  align-items: start;
  margin-top: 4rem;
}
.co-cost-intro h3,
.co-bench-heading h3 {
  font-size: clamp(1.7rem, 2.5vw, 2.3rem);
  line-height: 1.2;
  font-weight: 600;
  margin: 1rem 0;
}
.co-cost-intro > p:not(.eyebrow),
.co-bench-heading > p:not(.eyebrow) {
  font-size: 0.92rem;
  line-height: 1.9;
  color: var(--color-muted);
}
.co-token-flow {
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 1rem;
  margin-top: 1.5rem;
  padding: 1.3rem;
  background: #fff;
  border: 1px solid #d4ddc6;
  border-radius: 1rem;
}
.co-token-flow > div {
  display: grid;
  justify-items: center;
  gap: 0.5rem;
}
.co-token-flow strong {
  font: 600 1.8rem var(--font-heading);
}
.co-token-flow span {
  font-size: 0.7rem;
  color: #657453;
}
.co-token-flow > svg {
  color: #7f904e;
}
.co-small {
  font-size: 0.72rem !important;
  line-height: 1.8 !important;
  color: var(--color-muted);
  margin-top: 1.3rem;
}
.co-table-wrap {
  min-width: 0;
  overflow-x: auto;
}
.co-table-wrap table {
  width: 100%;
  border-collapse: separate;
  border-spacing: 0;
  white-space: nowrap;
  font-size: 0.8rem;
  background: white;
  border: 1px solid #cdd8bc;
  border-radius: 1rem;
  overflow: hidden;
}
.co-table-wrap caption {
  text-align: left;
  font: 0.6rem/1.8 var(--font-mono);
  color: #6c795c;
  padding: 0 0 1rem;
  white-space: normal;
}
.co-table-wrap th,
.co-table-wrap td {
  text-align: left;
  padding: 1.1rem 0.8rem;
  border-bottom: 1px solid #dce3d1;
}
.co-table-wrap thead th {
  font-size: 0.65rem;
  color: #647553;
  font-weight: 500;
}
.co-table-wrap tbody tr:last-child > * {
  border-bottom: 0;
}
.co-table-wrap tbody th {
  font-weight: 500;
}
.co-table-wrap td:last-child {
  font-weight: 700;
}
.co-table-wrap th span {
  display: block;
  font-size: 0.6rem;
  font-weight: 400;
  color: #6a7b57;
  margin-top: 0.3rem;
}
.co-local-row {
  background: #e7efd7;
}
.co-table-wrap > p {
  font-size: 0.68rem;
  line-height: 1.85;
  color: var(--color-muted);
  margin-top: 1rem;
}
.co-table-wrap > a,
.co-sources a {
  display: inline-flex;
  gap: 0.4rem;
  align-items: center;
  font-size: 0.72rem;
  color: #667b3e;
  text-decoration: underline;
  text-underline-offset: 3px;
  margin-top: 1rem;
}
.co-benchmarks {
  border-top: 1px solid #ccd8ba;
  margin-top: 3rem;
  padding-top: 3rem;
}
.co-bench-heading {
  max-width: 48rem;
}
.co-legend {
  display: flex;
  gap: 1.5rem;
  margin: 1.5rem 0;
  font-size: 0.75rem;
}
.co-legend > span {
  display: flex;
  gap: 0.5rem;
  align-items: center;
}
.co-legend i {
  height: 9px;
  width: 9px;
  border-radius: 2px;
  background: #799437;
}
.co-legend > span:last-child i {
  background: #8f94a2;
}
.co-benchmark-grid {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 1.2rem;
}
.co-benchmark-grid article {
  background: #fff;
  border: 1px solid #d6dfc9;
  border-radius: 1rem;
  padding: 1.4rem;
}
.co-benchmark-title {
  margin-bottom: 1.2rem;
}
.co-benchmark-title h4 {
  font-size: 0.95rem;
  font-weight: 600;
}
.co-benchmark-title > span {
  font: 0.6rem var(--font-mono);
  color: #748365;
  display: block;
  margin-top: 0.5rem;
}
.co-benchmark-row {
  display: grid;
  grid-template-columns: 3rem 1fr 2.7rem;
  align-items: center;
  gap: 0.8rem;
  margin: 0.7rem 0;
  font-size: 0.72rem;
}
.co-benchmark-row > div {
  height: 12px;
  border-radius: 3px;
  background: #eff2e8;
  overflow: hidden;
}
.co-benchmark-row i {
  display: block;
  height: 100%;
  background: #799437;
  border-radius: 3px;
}
.co-claude i {
  background: #8f94a2;
}
.co-benchmark-row > strong {
  text-align: right;
  font-variant-numeric: tabular-nums;
}
.co-sources {
  display: flex;
  gap: 1.5rem;
  flex-wrap: wrap;
}
.co-practice {
  display: flex;
  align-items: flex-start;
  gap: 1.3rem;
  margin-top: 3rem;
  padding: 1.7rem;
  border: 1px solid #c8d7b0;
  border-radius: 1.2rem;
  background: #eaf0e0;
}
.co-practice > svg {
  flex-shrink: 0;
  color: #6a8439;
}
.co-practice strong {
  font-weight: 600;
}
.co-practice p {
  font-size: 0.85rem;
  line-height: 1.85;
  color: #516441;
  margin-top: 0.7rem;
}
.co-practice span {
  display: block;
  font-size: 0.68rem;
  line-height: 1.8;
  margin-top: 0.8rem;
  color: #697c58;
}
@media (max-width: 900px) {
  .co-heading,
  .co-highlight,
  .co-costs {
    grid-template-columns: 1fr;
    gap: 1.5rem;
  }
  .co-costs {
    margin-top: 2.5rem;
  }
  .co-benchmark-grid {
    grid-template-columns: 1fr;
  }
}
@media (max-width: 480px) {
  .assistant-cost-output {
    padding-block: 3.5rem;
  }
  .co-zero,
  .co-energy {
    padding: 1.4rem;
  }
  .co-energy > strong {
    font-size: 2.7rem;
  }
  .co-zero > strong {
    font-size: 4.5rem;
  }
  .co-table-wrap table {
    font-size: 0.68rem;
  }
  .co-table-wrap th,
  .co-table-wrap td {
    padding: 0.8rem 0.5rem;
  }
  .co-legend {
    gap: 1rem;
    font-size: 0.65rem;
  }
  .co-practice {
    padding: 1.2rem;
    gap: 0.8rem;
  }
}
</style>
