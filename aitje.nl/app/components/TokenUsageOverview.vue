<script setup lang="ts">
const uses = [
  { icon: "pen", title: "Content", text: "Teksten schrijven, vertalen en productinformatie aanvullen." },
  { icon: "library", title: "Kennis", text: "Documenten doorzoeken, vragen beantwoorden en informatie samenvatten." },
  { icon: "image", title: "Beeld & media", text: "Beelden, audio of video genereren en bewerken." },
  { icon: "code", title: "Code", text: "Software bouwen, code onderzoeken en ontwikkeltaken uitvoeren." },
];

const opportunities = [
  { icon: "users", title: "Abonnementen & budgetten", text: "Meerdere kleinere abonnementen, een gedeeld modelbudget of API-gebruik: wat past bij het daadwerkelijke gebruik?" },
  { icon: "cpu", title: "Modellen per taak", text: "Een geavanceerd extern model, een kleiner lokaal model of verwerking op het apparaat zelf. Kwaliteit en capaciteit bepalen de keuze." },
  { icon: "bot", title: "Agents die werk verdelen", text: "Een cluster van gespecialiseerde agents kan taken opdelen. AITJE beoordeelt wat die samenwerking oplevert en wat de extra calls kosten." },
  { icon: "workflow", title: "Kleinere, gerichte stappen", text: "Alleen relevante gegevens meegeven, opdrachten afbakenen en vaste stappen met code uitvoeren. Zo hoeft de LLM minder te verwerken." },
  { icon: "gauge", title: "Verbruik onder controle", text: "Kosten toewijzen aan taken of teams, met passende budgetten, limieten en logging voor het afgesproken gebruik." },
];
</script>

<template>
  <section class="token-usage-overview py-16 md:py-20">
    <div class="container-page">
      <SectionHeading
        eyebrow="De hele organisatie in beeld"
        title="Waar gaat je AI-budget naartoe?"
        intro="AITJE kijkt naar wie AI gebruikt, waarvoor en via welke tools. Dat gaat verder dan één model of één API-koppeling."
      />
      <div class="token-use-grid">
        <article v-for="use in uses" :key="use.title">
          <span class="token-use-icon"><AppIcon :name="use.icon" :size="23" /></span>
          <h3>{{ use.title }}</h3><p>{{ use.text }}</p>
        </article>
      </div>
      <p class="token-meter-note">Niet alles wordt in tokens afgerekend. Ook abonnementskosten, beeldcredits, minuten en andere verbruikseenheden tellen mee. De vergelijking draait om de kosten per bruikbaar resultaat.</p>

      <div class="token-opportunity-grid">
        <div><p class="eyebrow text-brand-ink">Waar optimalisatie mogelijk is</p><h3>De taak bepaalt<br />de inrichting.</h3><p>Een goedkopere tokenprijs zegt weinig als het model meer pogingen nodig heeft. Daarom bekijkt AITJE de hele taak: kwaliteit, snelheid, verbruik en de systemen eromheen.</p></div>
        <ul><li v-for="opportunity in opportunities" :key="opportunity.title"><AppIcon :name="opportunity.icon" :size="23" /><div><h4>{{ opportunity.title }}</h4><p>{{ opportunity.text }}</p></div></li></ul>
      </div>

      <aside class="token-scan-scope" aria-label="De relatie met de AI-scan">
        <div><span class="token-scope-label">Onderdeel van de AI-scan</span><h3>Eerst overzicht.</h3><p>De AI-scan inventariseert je huidige AI-gebruik en abonnementen en benoemt mogelijke optimalisaties. Dat geeft richting aan het vervolg.</p><NuxtLink to="/diensten/ai-scan">Bekijk de AI-scan <AppIcon name="arrow-right" :size="17" /></NuxtLink></div>
        <div><span class="token-scope-label">Als losse dienst</span><h3>Daarna gericht verbeteren.</h3><p>Een diepere analyse, modeltests en aanpassingen aan workflows of beheer spreek je apart af. Je kunt ook direct met deze dienst beginnen.</p><span class="token-scope-note">Scope en prijs vooraf afgestemd.</span></div>
      </aside>
    </div>
  </section>
</template>

<style scoped>
.token-usage-overview { background: #f0f1e9; }
.token-use-grid { display: grid; grid-template-columns: repeat(4,minmax(0,1fr)); gap: 1.8rem; margin-top: 2rem; }
.token-use-grid article { border-top: 1px solid #ccd2c2; padding-top: 1.3rem; }
.token-use-icon { display: grid; place-items: center; width: 2.8rem; height: 2.8rem; border-radius: 12px; background: var(--color-brand); }
.token-use-grid h3 { margin-top: .9rem; font: 700 1.1rem var(--font-heading); letter-spacing: -.035em; }
.token-use-grid p { margin-top: .5rem; color: var(--color-muted); font-size: .84rem; line-height: 1.75; }
.token-meter-note { margin-top: 1.6rem; max-width: 60rem; color: var(--color-muted); font-size: .76rem; line-height: 1.75; }
.token-opportunity-grid { display: grid; grid-template-columns: minmax(0,.8fr) minmax(0,1.2fr); gap: 4rem; margin-top: 3.5rem; }
.token-opportunity-grid>div>h3 { margin-top: .8rem; font: 700 clamp(1.7rem,3vw,2.8rem)/1.15 var(--font-heading); letter-spacing: -.05em; }
.token-opportunity-grid>div>p:last-child { margin-top: 1.1rem; max-width: 28rem; color: var(--color-muted); font-size: .92rem; line-height: 1.8; }
.token-opportunity-grid li { display: flex; gap: 1rem; padding-block: 1rem; border-top: 1px solid #ccd2c2; }
.token-opportunity-grid li:last-child { border-bottom: 1px solid #ccd2c2; }
.token-opportunity-grid li>svg { flex: none; color: #667952; }
.token-opportunity-grid h4 { font: 700 .94rem var(--font-heading); letter-spacing: -.025em; }
.token-opportunity-grid li p { margin-top: .4rem; color: var(--color-muted); font-size: .81rem; line-height: 1.75; }
.token-scan-scope { display: grid; grid-template-columns: repeat(2,minmax(0,1fr)); gap: 3rem; padding: 2rem; margin-top: 3rem; background: #15362a; border-radius: 20px; color: white; }
.token-scope-label { color: var(--color-brand); font: .66rem var(--font-mono); letter-spacing: .06em; text-transform: uppercase; }
.token-scan-scope h3 { margin-top: .75rem; font: 700 1.45rem var(--font-heading); letter-spacing: -.04em; }
.token-scan-scope p { margin-top: .7rem; color: #ccd8cf; font-size: .85rem; line-height: 1.8; }
.token-scan-scope a { display: inline-flex; align-items: center; gap: .5rem; margin-top: 1.2rem; color: var(--color-brand); font-size: .82rem; font-weight: 600; }
.token-scan-scope a:hover { text-decoration: underline; text-underline-offset: 4px; }
.token-scan-scope a:focus-visible { outline: 2px solid var(--color-brand); outline-offset: 5px; }
.token-scope-note { display: block; margin-top: 1.2rem; color: #aabdac; font-size: .75rem; }
@media (max-width: 1023px) {
  .token-use-grid { grid-template-columns: repeat(2,minmax(0,1fr)); }
  .token-opportunity-grid { gap: 2.5rem; }
}
@media (max-width: 767px) {
  .token-opportunity-grid,.token-scan-scope { grid-template-columns: 1fr; gap: 2rem; }
  .token-scan-scope { padding: 1.5rem; }
  .token-use-grid { gap: 1.2rem; }
}
</style>
