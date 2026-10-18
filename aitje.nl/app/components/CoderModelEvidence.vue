<script setup lang="ts">
import { coderEvidence as evidence } from "@/content/coderEvidence";
const { numberLocale } = useSiteLanguage();
const score = (value: number) =>
  new Intl.NumberFormat(numberLocale.value, {
    minimumFractionDigits: 1,
    maximumFractionDigits: 1,
  }).format(value);
</script>
<template>
  <section id="coder-modelkwaliteit" class="coder-model-evidence">
    <div class="container-page">
      <div class="cme-heading">
        <p class="eyebrow text-brand-ink">
          Hoe goed programmeren lokale modellen nu al?
        </p>
        <h2>Code die tests doorstaat.<br />Daar begint de beoordeling.</h2>
        <p>
          De lokale agent heeft al bugs gerepareerd, functies toegevoegd en
          tests geschreven. Je ziet dat in de echte productopnamen. Voor
          modelkeuze kijken we daarnaast naar eigen proeven én gepubliceerde
          benchmarks, met de taak en hardware erbij.
        </p>
      </div>
      <div class="cme-local">
        <div>
          <span class="cme-label"
            >AITJE-praktijkproef · {{ evidence.local.date }}</span
          >
          <h3>Een volledige agent-run<br />op de BOSGAME M6.</h3>
          <p>
            Drie Python-opdrachten, elk tweemaal per model, via de echte
            Coder-stack. Verborgen tests controleerden kortingscodes, een
            afrondingsbug en een CLI-tool. Zo beoordeel je een uitgevoerde taak
            in plaats van alleen de snelheid van losse tokens.
          </p>
          <p class="cme-small">
            {{ evidence.local.hardware }}. Kleine proef op één repository: zes
            runs per model, geen algemeen slagingspercentage voor alle
            programmeertaken. Doorlooptijden bevatten de modelwissel en zijn
            indicatief.
          </p>
        </div>
        <div class="cme-local-results">
          <article v-for="model in evidence.local.models" :key="model.name">
            <div>
              <strong>{{ model.name }}</strong
              ><span>{{ model.passed }} / {{ model.total }} runs geslaagd</span>
            </div>
            <div class="cme-pass-bar">
              <i
                v-for="i in model.total"
                :key="i"
                :class="{ 'cme-pass': i <= model.passed }"
              />
            </div>
            <p>
              Mediaan van indienen tot eindstatus:
              {{ model.medianSeconds }} seconden
            </p>
          </article>
          <a
            href="/evidence/coder-m6-comparison.json"
            target="_blank"
            rel="noopener"
            >Meetopzet en resultaten van de AITJE-proef
            <AppIcon name="arrow-up-right" :size="14"
          /></a>
        </div>
      </div>
      <div class="cme-published">
        <div>
          <span class="cme-label"
            >Gepubliceerde modelbenchmarks · Qwen3.8-27B en Opus 4.6 Max</span
          >
          <h3>Open modellen doen mee<br />aan serieus programmeerwerk.</h3>
          <p>
            Deze cijfers uit Qwens modelkaart laten verschillende sterke punten
            zien. Ze meten een andere opstelling dan de AITJE-proef hierboven.
            Een score voorspelt niet automatisch het resultaat op jullie code of
            op een bepaalde BOSGAME.
          </p>
        </div>
        <div class="cme-benchmark-grid">
          <article
            v-for="benchmark in evidence.published.benchmarks"
            :key="benchmark.name"
          >
            <h4>{{ benchmark.name }}</h4>
            <span>{{ benchmark.task }}</span>
            <div class="cme-score">
              <span>Qwen3.8</span>
              <div><i :style="{ width: `${benchmark.qwen}%` }" /></div>
              <strong>{{ score(benchmark.qwen) }}</strong>
            </div>
            <div class="cme-score cme-score-claude">
              <span>Opus 4.6</span>
              <div><i :style="{ width: `${benchmark.claude}%` }" /></div>
              <strong>{{ score(benchmark.claude) }}</strong>
            </div>
          </article>
        </div>
        <p class="cme-small">
          Schaal 0–100. Qwens eigen evaluatie; meetopzetten en agentharnassen
          verschillen. Bij SWE-bench Pro is de Opus-score overgenomen uit de
          officiële rapportage. Dit is geen BOSGAME-meting en geen garantie dat
          Qwen3.8 op iedere Coder-configuratie de standaard is. Quantisatie,
          context, tools en geheugen beïnvloeden de praktijk.
        </p>
        <a
          :href="evidence.published.source"
          target="_blank"
          rel="noopener noreferrer"
          >Bron: Qwen3.8-27B-modelkaart · gecontroleerd
          {{ evidence.published.checked }}
          <AppIcon name="arrow-up-right" :size="14"
        /></a>
      </div>
      <div class="cme-future">
        <AppIcon name="repeat" :size="27" />
        <div>
          <h3>Een model kan veranderen. Jullie werkwijze blijft bruikbaar.</h3>
          <p>
            Coder houdt modelkeuze los van de agent, de repositorykoppeling en
            de review. Een nieuw of kleiner model kan interessant zijn voor
            snelheid, geheugen of kwaliteit. AITJE test passende modellen met
            dezelfde soort opdrachten voordat we een nieuwe configuratie
            adviseren. De winst en het moment daarvan worden niet vooraf
            gegarandeerd; updates en modelinrichting spreken we apart af.
          </p>
        </div>
      </div>
    </div>
  </section>
</template>
<style scoped>
.coder-model-evidence {
  padding-block: 5rem;
  background: #e9eee0;
  scroll-margin-top: 6rem;
}
.cme-heading {
  max-width: 49rem;
  margin-bottom: 2.5rem;
}
.cme-heading h2 {
  font: 700 clamp(2rem, 3.3vw, 3.1rem)/1.13 var(--font-heading);
  letter-spacing: -0.035em;
  margin: 1rem 0 1.5rem;
}
.cme-heading > p:last-child {
  font-size: 1rem;
  line-height: 1.9;
  color: #5f7350;
}
.cme-local {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 3rem;
  padding: 2rem;
  border: 1px solid #bed0a8;
  border-radius: 1.3rem;
  background: #f6f8ee;
}
.cme-label {
  font: 0.58rem/1.9 var(--font-mono);
  text-transform: uppercase;
  letter-spacing: 0.07em;
  color: #5d7b41;
}
.cme-local h3,
.cme-published h3 {
  font: 600 1.65rem/1.2 var(--font-heading);
  letter-spacing: -0.025em;
  margin: 1rem 0;
}
.cme-local > div > p {
  font-size: 0.83rem;
  line-height: 1.95;
  color: #61794c;
}
.cme-small {
  font-size: 0.65rem !important;
  line-height: 1.95 !important;
  color: #63794f;
  margin-top: 1.2rem;
}
.cme-local-results {
  display: flex;
  flex-direction: column;
  gap: 1.4rem;
}
.cme-local-results article > div:first-child {
  display: flex;
  gap: 1rem;
  align-items: center;
  justify-content: space-between;
}
.cme-local-results strong {
  font: 0.75rem var(--font-mono);
  font-weight: 500;
}
.cme-local-results article > div > span {
  font-size: 0.68rem;
  color: #617e45;
}
.cme-pass-bar {
  display: grid;
  grid-template-columns: repeat(6, 1fr);
  gap: 5px;
  margin-top: 0.8rem;
}
.cme-pass-bar > i {
  height: 18px;
  border-radius: 3px;
  background: #dadfce;
  border: 1px solid #c2cbb4;
}
.cme-pass-bar > i.cme-pass {
  background: #789347;
  border-color: #789347;
}
.cme-local-results article > p {
  font-size: 0.64rem;
  line-height: 1.8;
  color: #61794b;
  margin-top: 0.7rem;
}
.cme-local-results > a,
.cme-published > a {
  display: inline-flex;
  align-items: center;
  gap: 0.4rem;
  font-size: 0.68rem;
  line-height: 1.9;
  color: #527633;
  text-decoration: underline;
  text-underline-offset: 3px;
}
.cme-published {
  padding-top: 3rem;
  margin-top: 3rem;
  border-top: 1px solid #bfcea9;
}
.cme-published > div:first-child {
  max-width: 49rem;
}
.cme-published > div > p {
  font-size: 0.83rem;
  line-height: 1.95;
  color: #60784b;
}
.cme-benchmark-grid {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 1rem;
  margin: 1.7rem 0;
}
.cme-benchmark-grid article {
  background: #f7f9ef;
  border: 1px solid #c3d1b0;
  border-radius: 0.8rem;
  padding: 1.3rem;
}
.cme-benchmark-grid h4 {
  font: 600 0.9rem/1.4 var(--font-heading);
}
.cme-benchmark-grid article > span {
  font-size: 0.6rem;
  line-height: 1.8;
  display: block;
  color: #657e4d;
  margin: 0.5rem 0 1rem;
}
.cme-score {
  display: grid;
  grid-template-columns: 3.4rem 1fr 2rem;
  align-items: center;
  gap: 0.4rem;
  margin-top: 0.8rem;
  font-size: 0.6rem;
  color: #5c7447;
}
.cme-score > div {
  height: 10px;
  background: #e1e9d4;
  border-radius: 3px;
  overflow: hidden;
}
.cme-score i {
  display: block;
  height: 100%;
  background: #7a944b;
  border-radius: 3px;
}
.cme-score-claude i {
  background: #929b8b;
}
.cme-score strong {
  text-align: right;
  font-variant-numeric: tabular-nums;
  font-weight: 600;
}
.cme-future {
  display: flex;
  gap: 1.1rem;
  align-items: flex-start;
  margin-top: 2rem;
  padding: 1.5rem;
  border: 1px solid #c0d1a7;
  border-radius: 1rem;
  background: #dde8cb;
}
.cme-future > svg {
  flex-shrink: 0;
  color: #648537;
}
.cme-future h3 {
  font: 600 1rem/1.5 var(--font-heading);
}
.cme-future p {
  font-size: 0.79rem;
  line-height: 1.95;
  color: #5c7745;
  margin-top: 0.7rem;
}
@media (max-width: 950px) {
  .cme-local {
    gap: 2rem;
    padding: 1.5rem;
  }
  .cme-benchmark-grid {
    grid-template-columns: 1fr;
  }
  .cme-benchmark-grid article {
    padding: 1.2rem;
  }
  .cme-score {
    grid-template-columns: 5rem 1fr 3rem;
    font-size: 0.7rem;
  }
}
@media (max-width: 700px) {
  .coder-model-evidence {
    padding-block: 3.5rem;
  }
  .cme-local {
    grid-template-columns: 1fr;
    gap: 1.5rem;
  }
  .cme-local h3,
  .cme-published h3 {
    font-size: 1.5rem;
  }
  .cme-future {
    padding: 1.2rem;
  }
  .cme-future > svg {
    width: 22px;
  }
  .cme-local-results strong {
    font-size: 0.65rem;
  }
}
</style>
