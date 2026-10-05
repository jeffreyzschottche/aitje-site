<script setup lang="ts">
const topics = [
  { icon: "workflow", title: "De architectuur", text: "Welke stappen zijn nodig? Welke gegevens en systemen moeten samenwerken, en wat kan gewone code afhandelen?" },
  { icon: "cpu", title: "Modellen & kosten", text: "Welk model past bij de taak? Lokaal, via een API of gecombineerd, met de capaciteit en kosten in beeld." },
  { icon: "scan", title: "Testcases", text: "Hoe controleer je het resultaat? Ook ontbrekende data, verkeerde antwoorden en uitgevallen koppelingen horen in het testplan." },
  { icon: "shield", title: "Guardrails", text: "Wie mag wat? Wanneer moet een mens akkoord geven, wat wordt gelogd en wanneer stopt de workflow?" },
];
const flow = [
  { icon: "message", label: "Klantvraag", note: "Wat wordt gevraagd?" },
  { icon: "library", label: "Eigen kennis", note: "Alleen toegestane bronnen" },
  { icon: "bot", label: "Conceptantwoord", note: "Met herleidbare informatie" },
  { icon: "users", label: "Controle", note: "Een medewerker beslist" },
];
</script>

<template>
  <section class="advice-analysis-plan py-16 md:py-20">
    <div class="container-page">
      <SectionHeading
        eyebrow="Verder dan een goed idee"
        title="Ook de lastige vragen uitgedacht."
        intro="Een oplossing moet passen bij je werk én blijven werken als iets anders loopt dan verwacht. AITJE onderzoekt de onderdelen die jouw vraag nodig heeft."
      />
      <div class="advice-topics">
        <article v-for="topic in topics" :key="topic.title">
          <AppIcon :name="topic.icon" :size="27" />
          <h3>{{ topic.title }}</h3>
          <p>{{ topic.text }}</p>
        </article>
      </div>

      <figure class="advice-example">
        <figcaption>
          <div>
            <p class="eyebrow">Zo kan een plan eruitzien</p>
            <h3>“Kan AI onze klantvragen afhandelen?”</h3>
          </div>
          <span class="advice-example-label">Voorbeeld · klantcontact</span>
        </figcaption>
        <ol class="advice-flow" aria-label="Voorbeeldworkflow voor klantvragen">
          <li v-for="(step, index) in flow" :key="step.label">
            <span class="advice-flow-icon"><AppIcon :name="step.icon" :size="24" /></span>
            <strong>{{ step.label }}</strong>
            <span>{{ step.note }}</span>
            <AppIcon v-if="index < flow.length - 1" name="arrow-right" :size="20" class="advice-flow-arrow" />
          </li>
        </ol>
        <div class="advice-checks">
          <div><h4>Wat moet goed gaan?</h4><p>AITJE werkt uit hoe het antwoord de juiste kennis gebruikt en welke taken het systeem mag uitvoeren.</p></div>
          <div><h4>Wat als het misgaat?</h4><p>Geen passende bron, een verlopen document of een storing? Het plan beschrijft wanneer AI stopt of de vraag doorzet.</p></div>
          <div><h4>Hoe toets je dat?</h4><p>Testvragen, gewenste uitkomsten en een grens voor kosten en wachttijd maken de beoordeling concreet.</p></div>
        </div>
      </figure>
    </div>
  </section>
</template>

<style scoped>
.advice-analysis-plan { background: #eef0e7; }
.advice-topics { display: grid; grid-template-columns: repeat(4, minmax(0, 1fr)); gap: 2rem; margin-top: 2.5rem; }
.advice-topics article { border-top: 1px solid #ccd2c2; padding-top: 1.5rem; }
.advice-topics svg { color: #536c48; }
.advice-topics h3 { margin-top: 1rem; font: 700 1.15rem var(--font-heading); letter-spacing: -.035em; }
.advice-topics p { margin-top: .6rem; color: var(--color-muted); font-size: .9rem; line-height: 1.8; }
.advice-example { margin-top: 3rem; padding: 2rem; border-radius: 22px; background: #173a2d; color: #fff; }
.advice-example figcaption { display: flex; justify-content: space-between; align-items: center; gap: 1.5rem; }
.advice-example .eyebrow { color: var(--color-brand); }
.advice-example h3 { margin-top: .7rem; font: 700 clamp(1.25rem, 2.2vw, 1.8rem)/1.25 var(--font-heading); letter-spacing: -.04em; }
.advice-example-label { flex-shrink: 0; font-size: .75rem; color: #bbcebf; }
.advice-flow { display: grid; grid-template-columns: repeat(4, minmax(0, 1fr)); gap: 2rem; margin-top: 2rem; padding-bottom: 2rem; border-bottom: 1px solid #456352; }
.advice-flow li { position: relative; display: flex; flex-direction: column; align-items: flex-start; gap: .55rem; }
.advice-flow-icon { display: grid; place-items: center; width: 3rem; height: 3rem; margin-bottom: .3rem; border-radius: 12px; background: var(--color-brand); color: var(--color-ink); }
.advice-flow strong { font-family: var(--font-heading); font-size: 1rem; }
.advice-flow li > span:last-of-type { font-size: .8rem; color: #c7d8ca; line-height: 1.6; }
.advice-flow-arrow { position: absolute; right: 0; top: .9rem; color: #adc3ae; }
.advice-checks { display: grid; grid-template-columns: repeat(3, minmax(0, 1fr)); gap: 2rem; padding-top: 1.5rem; }
.advice-checks h4 { font: 700 1rem var(--font-heading); }
.advice-checks p { margin-top: .6rem; color: #c7d8ca; font-size: .85rem; line-height: 1.8; }
@media (max-width: 1023px) {
  .advice-topics { grid-template-columns: repeat(2, minmax(0, 1fr)); }
  .advice-example figcaption { align-items: flex-start; flex-direction: column; gap: .7rem; }
}
@media (max-width: 767px) {
  .advice-example { padding: 1.5rem; }
  .advice-topics { gap: 1.5rem; }
  .advice-flow { grid-template-columns: repeat(2, minmax(0, 1fr)); gap: 1.5rem; }
  .advice-flow-arrow { display: none; }
  .advice-checks { grid-template-columns: 1fr; gap: 1.3rem; }
}
@media (max-width: 479px) {
  .advice-flow { grid-template-columns: 1fr; gap: 1.2rem; }
  .advice-flow li { display: grid; grid-template-columns: 3rem minmax(0, 1fr); column-gap: 1rem; row-gap: .25rem; align-items: center; }
  .advice-flow-icon { grid-row: span 2; margin-bottom: 0; }
  .advice-flow strong { align-self: end; }
  .advice-flow li > span:last-of-type { align-self: start; }
}
@media (max-width: 359px) {
  .advice-topics { grid-template-columns: 1fr; }
  .advice-example { padding: 1.2rem; }
}
</style>
