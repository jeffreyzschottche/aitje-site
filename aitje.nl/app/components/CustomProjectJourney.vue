<script setup lang="ts">
import type { Service } from "@/content/types";

defineProps<{
  steps: Service["steps"];
  deliverables: Service["deliverables"];
}>();

const icons = ["compass", "server", "code", "scan", "globe", "handshake"];
const outputs = ["Een uitvoerbaar plan", "Een passende architectuur", "Een werkende versie", "Een getoetste oplossing", "Feedback verwerkt", "Klaar voor gebruik"];
</script>

<template>
  <section id="aanpak" class="custom-project-journey scroll-mt-24 section-space" aria-labelledby="custom-project-title">
    <div class="container-page">
      <div class="custom-project-heading">
        <div>
          <p class="eyebrow mb-4 text-brand-ink">Eén compleet traject</p>
          <h2 id="custom-project-title" class="section-title">Alles wat jouw project nodig heeft.</h2>
          <p class="mt-5 text-lg leading-relaxed text-muted">De fases sluiten op elkaar aan. Je ziet tussentijds wat werkt en beslist mee over keuzes, aanpassingen en de volgende stap.</p>
        </div>
        <span class="custom-project-label"><AppIcon name="sparkles" :size="19" />Op maat voor jouw werk</span>
      </div>

      <ol class="custom-project-stages">
        <li v-for="(step, index) in steps" :key="step.title">
          <div class="custom-stage-top">
            <span class="custom-stage-number">{{ String(index + 1).padStart(2, '0') }}</span>
            <span class="custom-stage-line" aria-hidden="true" />
            <AppIcon :name="icons[index]" :size="24" />
          </div>
          <h3>{{ step.title }}</h3>
          <p>{{ step.text }}</p>
          <span class="custom-stage-output"><AppIcon name="check" :size="15" />{{ outputs[index] }}</span>
        </li>
      </ol>

      <div class="custom-feedback-loop">
        <span class="custom-feedback-icon"><AppIcon name="repeat" :size="27" /></span>
        <div>
          <h3>Feedback wordt onderdeel van de oplossing.</h3>
          <p>Gebruikers proberen de toepassing, AITJE verwerkt de afgesproken feedback en test opnieuw. Zo werk je toe naar het eindproduct dat je samen hebt bepaald.</p>
        </div>
        <p class="custom-feedback-budget">Scope, uren en budget<br /><strong>vooraf afgesproken</strong></p>
      </div>
      <p class="custom-prototype-note">Bij een nieuw of onzeker idee kan een prototype eerst de werking aantonen. Daarna volgt de uitwerking naar het afgesproken eindproduct.</p>
    </div>
  </section>

  <section id="oplevering" class="custom-project-delivery scroll-mt-24 section-space" aria-labelledby="custom-delivery-title">
    <div class="container-page custom-delivery-layout">
      <div>
        <p class="eyebrow text-brand-ink">Wat je krijgt</p>
        <h2 id="custom-delivery-title" class="section-title">Een oplossing die je<br />in gebruik kunt nemen.</h2>
        <p class="custom-delivery-intro">Je spreekt vooraf af welke functies en controles nodig zijn. De oplevering brengt de onderdelen samen tot jouw werkende toepassing.</p>
        <CheckList :items="deliverables" class="mt-7" />
      </div>
      <div class="custom-delivery-visual">
        <div class="custom-delivery-art" aria-hidden="true">
          <OrbitGraphic />
          <img src="/img/redesign/cases-workflow-workbench.webp" alt="" width="1536" height="1024" loading="lazy" />
        </div>
        <div class="custom-delivery-ownership">
          <span><AppIcon name="package" :size="23" /></span>
          <div>
            <h3>Jouw project. Jouw maatwerk.</h3>
            <p>De afgesproken klantspecifieke oplossing wordt van jou. AITJE draagt de bijbehorende code, configuratie en documentatie over; bestaande producten en externe onderdelen houden hun eigen gebruiksvoorwaarden.</p>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped>
.custom-project-journey { background: #eef0e7; }
.custom-project-heading { display: flex; align-items: start; justify-content: space-between; gap: 2rem; }
.custom-project-heading > :first-child { max-width: 740px; }
.custom-project-label { display: inline-flex; align-items: center; gap: .6rem; flex-shrink: 0; padding: .75rem 1rem; border: 1px solid #cbd2c2; border-radius: 999px; color: #42533b; font-size: .8rem; }
.custom-project-stages { display: grid; grid-template-columns: repeat(3, minmax(0, 1fr)); gap: 2.5rem 3rem; margin-top: 3rem; padding: 0; list-style: none; }
.custom-stage-top { display: flex; align-items: center; gap: 1.1rem; color: #526747; }
.custom-stage-number { display: grid; place-items: center; width: 45px; height: 45px; flex-shrink: 0; border-radius: 50%; background: var(--color-brand); color: var(--color-ink); font: 500 .82rem var(--font-mono); }
.custom-stage-line { height: 1px; flex: 1; background: #cbd2c2; }
.custom-project-stages h3 { margin-top: 1.2rem; font: 600 1.2rem/1.3 var(--font-heading); letter-spacing: -.035em; }
.custom-project-stages li > p { margin-top: .7rem; font-size: .94rem; line-height: 1.75; color: var(--color-muted); }
.custom-stage-output { display: flex; align-items: center; gap: .4rem; margin-top: .9rem; color: #4e6343; font-size: .78rem; font-weight: 500; }
.custom-feedback-loop { display: flex; align-items: center; gap: 1.5rem; margin-top: 3rem; padding: 1.8rem 2rem; border-radius: var(--radius-panel); background: #173a2d; color: white; }
.custom-feedback-icon { display: grid; place-items: center; width: 52px; height: 52px; flex-shrink: 0; border: 1px solid #52705a; border-radius: 50%; color: var(--color-brand); }
.custom-feedback-loop > div { flex: 1; }
.custom-feedback-loop h3 { font: 600 1.15rem/1.4 var(--font-heading); letter-spacing: -.03em; }
.custom-feedback-loop div p { max-width: 680px; margin-top: .65rem; color: #d0ddcf; font-size: .9rem; line-height: 1.7; }
.custom-feedback-budget { padding-left: 1.5rem; border-left: 1px solid #52705a; font-size: .8rem; line-height: 1.8; color: #d0ddcf; flex-shrink: 0; }
.custom-feedback-budget strong { color: var(--color-brand); font-weight: 500; }
.custom-prototype-note { max-width: 820px; margin-top: 1.2rem; color: var(--color-muted); font-size: .82rem; line-height: 1.7; }
.custom-delivery-layout { display: grid; grid-template-columns: 1.1fr 1fr; align-items: center; gap: clamp(2rem, 5vw, 5rem); }
.custom-delivery-layout h2 { margin-top: .8rem; }
.custom-delivery-intro { max-width: 560px; margin-top: 1.2rem; color: var(--color-muted); font-size: 1rem; line-height: 1.75; }
.custom-delivery-art { position: relative; aspect-ratio: 1.2; }
.custom-delivery-art > :first-child { position: absolute; inset: 0; width: 100%; height: 100%; opacity: .35; }
.custom-delivery-art img { position: relative; width: 100%; height: 100%; object-fit: contain; }
.custom-delivery-ownership { display: flex; align-items: start; gap: 1rem; padding-top: 1.5rem; border-top: 1px solid var(--color-line); }
.custom-delivery-ownership > span { flex-shrink: 0; color: #526747; }
.custom-delivery-ownership h3 { font: 600 1rem/1.4 var(--font-heading); }
.custom-delivery-ownership p { margin-top: .5rem; color: var(--color-muted); font-size: .86rem; line-height: 1.75; }
@media (max-width: 1023px) {
  .custom-project-heading { display: block; }
  .custom-project-label { margin-top: 1.5rem; }
  .custom-project-stages { grid-template-columns: repeat(2, minmax(0, 1fr)); }
  .custom-feedback-loop { flex-wrap: wrap; }
  .custom-feedback-budget { flex-basis: 100%; padding: 1rem 0 0; border-left: 0; border-top: 1px solid #52705a; }
  .custom-feedback-budget br { display: none; }
  .custom-feedback-budget strong { margin-left: .5rem; }
  .custom-delivery-layout { grid-template-columns: minmax(0, 1fr); }
  .custom-delivery-visual { max-width: 620px; width: 100%; margin-inline: auto; }
}
@media (max-width: 599px) {
  .custom-project-stages { grid-template-columns: minmax(0, 1fr); gap: 1.7rem; margin-top: 2rem; }
  .custom-project-stages li { display: grid; grid-template-columns: 45px minmax(0, 1fr); column-gap: 1rem; }
  .custom-stage-top { grid-row: span 3; align-items: start; }
  .custom-stage-top > :not(.custom-stage-number) { display: none; }
  .custom-project-stages h3 { margin-top: .5rem; font-size: 1.05rem; }
  .custom-project-stages li > p { font-size: .9rem; }
  .custom-stage-output { margin-top: .7rem; }
  .custom-feedback-loop { padding: 1.4rem; gap: 1rem; }
  .custom-feedback-loop > div { flex-basis: 100%; }
  .custom-feedback-budget strong { display: block; margin-left: 0; }
  .custom-delivery-art { aspect-ratio: 1.1; }
}
</style>
