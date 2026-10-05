<script setup lang="ts">
const role = ref("medewerker");
const documents = [
  { name: "Interne handleidingen", financeOnly: false },
  { name: "Projectinformatie", financeOnly: false },
  { name: "Financiële overzichten", financeOnly: true },
];
const measures = [
  { icon: "repeat", title: "Een nieuwe context", text: "Gescheiden sessies per taak of klant, met bewust ingesteld geheugen. Eerdere gesprekken worden niet onnodig meegestuurd." },
  { icon: "server", title: "Provider & bewaarbeleid", text: "Traininginstellingen uitschakelen waar mogelijk en afspraken over bewaartermijnen of zero-data retention controleren. Gevoelige stappen kunnen lokaal blijven." },
  { icon: "shield", title: "Guardrails & manipulatie", text: "Een filterlaag voor invoer en bronnen, beperkte toolrechten en controle op acties. Ook buiten het model worden grenzen afgedwongen." },
  { icon: "gauge", title: "Budget & rate limiting", text: "Budgetcontrole vóór calls, grenzen per gebruiker en taak en een maximum aan herhalingen. Met stopmomenten bij overschrijding." },
  { icon: "users", title: "Controle vóór uitvoering", text: "Uitvoer valideren met code, broncontrole of een tweede model. Voor belangrijke acties geeft een medewerker eerst akkoord: human in the loop." },
  { icon: "file-search", title: "Logging & sleutelbeheer", text: "Gebruiker, model, bevestiging en actie vastleggen. Logtoegang en bewaartermijnen afspreken, en API-sleutels afschermen met beperkte rechten." },
];
</script>

<template>
  <section class="safe-ai-controls section-space">
    <div class="container-page">
      <SectionHeading eyebrow="Eerst de gegevens, dan het model" title="Deel alleen wat nodig is." intro="AITJE kan gegevens lokaal voorbereiden voordat een extern frontier-model wordt aangeroepen. Persoonsgegevens en andere herkenbare details worden verwijderd of vervangen, en de noodzakelijke context wordt geselecteerd." />
      <figure class="safe-data-example">
        <figcaption><AppIcon name="shield" :size="22" />Illustratief voorbeeld: gegevens voorbereiden vóór verzending</figcaption>
        <div class="safe-data-comparison">
          <div><h3>In je eigen systeem</h3><p class="safe-data-line"><span>Naam</span>Voorbeeldklant</p><p class="safe-data-line"><span>E-mail</span>klant@example.invalid</p><p class="safe-data-line"><span>Vraag</span>Hoe reset ik mijn apparaat?</p></div>
          <AppIcon name="arrow-right" :size="25" class="safe-data-arrow" />
          <div class="safe-data-payload"><h3>Naar het externe model</h3><p class="safe-data-line"><span>Vraag</span>Hoe reset ik mijn apparaat?</p><p class="safe-data-result"><AppIcon name="check" :size="18" />Alleen de benodigde vraag blijft over.</p></div>
        </div>
        <p class="safe-data-note">Een naam verwijderen is niet altijd genoeg. Als de overige tekst iemand herkenbaar maakt, vraagt ook die context om een aanpassing. Labels gebruiken kan pseudonimisatie zijn; dat is niet vanzelf volledige anonimisatie.</p>
      </figure>

      <div class="safe-role-example">
        <div><p class="eyebrow text-brand-ink">Role-based access</p><h3>Rechten bepalen de kennis.</h3><p>De applicatie controleert wie de gebruiker is en welke documenten, categorieën en tekststukken deze mag gebruiken. Pas daarna haalt RAG de toegestane kennis op.</p><p>Het model krijgt afgeschermde gegevens dus niet eerst te zien. Dezelfde toegangscontrole hoort bij gekoppelde tools en acties.</p></div>
        <div class="safe-role-preview">
          <p class="safe-preview-label">Illustratieve rolverdeling</p>
          <div class="safe-role-selector" aria-label="Bekijk kennis per rol"><button v-for="option in [{ id: 'medewerker', name: 'Medewerker' }, { id: 'finance', name: 'Financeteam' }]" :key="option.id" type="button" :aria-pressed="role === option.id" :class="{ active: role === option.id }" @click="role = option.id">{{ option.name }}</button></div>
          <ul aria-live="polite"><li v-for="document in documents" :key="document.name" :class="{ blocked: document.financeOnly && role !== 'finance' }"><AppIcon :name="document.financeOnly && role !== 'finance' ? 'shield' : 'check'" :size="20" /><div><strong>{{ document.name }}</strong><span>{{ document.financeOnly && role !== 'finance' ? 'Uitgesloten van de zoekopdracht' : 'Beschikbaar voor RAG' }}</span></div></li></ul>
          <p class="safe-role-note">De toegang wordt in de applicatie afgedwongen, vóór retrieval en bij iedere toolcall.</p>
        </div>
      </div>

      <div class="safe-measures-heading"><p class="eyebrow text-brand-ink">Meer dan één controle</p><h3>Begrens ook de rest van de workflow.</h3></div>
      <div class="safe-measures"><article v-for="measure in measures" :key="measure.title"><AppIcon :name="measure.icon" :size="25" /><h4>{{ measure.title }}</h4><p>{{ measure.text }}</p></article></div>
      <p class="safe-controls-note">De maatregelen worden op jouw omgeving afgestemd en getest. RAG en een extra beoordelingsmodel kunnen helpen bij bron- en kwaliteitscontrole; belangrijke uitkomsten krijgen waar nodig ook menselijke beoordeling.</p>
    </div>
  </section>
</template>

<style scoped>
.safe-ai-controls { background: #eef0e7; }
.safe-data-example { margin-top: 2.5rem; border-radius: 22px; background: #173a2d; padding: 2rem; color: #fff; }
.safe-data-example figcaption { display: flex; align-items: center; gap: .8rem; font-size: .85rem; color: var(--color-brand); line-height: 1.6; }
.safe-data-example figcaption svg { flex-shrink: 0; }
.safe-data-comparison { display: grid; grid-template-columns: minmax(0, 1fr) auto minmax(0, 1fr); gap: 2rem; align-items: center; margin-top: 1.5rem; }
.safe-data-comparison > div { border: 1px solid #456352; border-radius: 14px; padding: 1.5rem; }
.safe-data-comparison h3 { margin-bottom: 1.2rem; font: 700 1.1rem var(--font-heading); }
.safe-data-line { display: grid; grid-template-columns: 3.5rem minmax(0, 1fr); gap: .7rem; margin-top: .8rem; font-size: .9rem; line-height: 1.6; overflow-wrap: anywhere; }
.safe-data-line > span { color: #adc8b4; }
.safe-data-payload { background: #244a39; }
.safe-data-result { display: flex; align-items: center; gap: .6rem; margin-top: 1rem; font-size: .84rem; color: #dae8d9; }
.safe-data-result svg { flex-shrink: 0; }
.safe-data-arrow { color: var(--color-brand); }
.safe-data-note { margin-top: 1.3rem; max-width: 58rem; color: #c7d8ca; font-size: .82rem; line-height: 1.8; }
.safe-role-example { display: grid; grid-template-columns: minmax(0, 1fr) minmax(0, 1fr); align-items: center; gap: 4rem; margin-top: 3.5rem; }
.safe-role-example h3, .safe-measures-heading h3 { margin-top: .8rem; font: 700 clamp(1.5rem, 2.6vw, 2rem)/1.2 var(--font-heading); letter-spacing: -.04em; }
.safe-role-example h3 ~ p { margin-top: 1rem; color: var(--color-muted); font-size: .95rem; line-height: 1.8; }
.safe-role-preview { padding: 1.8rem; border: 1px solid #cbd2c2; border-radius: 22px; background: #fff; }
.safe-preview-label { font-size: .78rem; color: var(--color-muted); }
.safe-role-selector { display: flex; flex-wrap: wrap; gap: .5rem; margin-top: .9rem; }
.safe-role-selector button { border: 1px solid var(--color-line); border-radius: 999px; background: #fff; padding: .7rem 1rem; font-size: .88rem; font-weight: 600; cursor: pointer; }
.safe-role-selector button.active { border-color: var(--color-brand); background: var(--color-brand); }
.safe-role-selector button:hover:not(.active) { border-color: var(--color-ink); }
.safe-role-selector button:focus-visible { outline: 2px solid var(--color-ink); outline-offset: 4px; }
.safe-role-preview ul { display: grid; gap: .9rem; margin-top: 1.5rem; }
.safe-role-preview li { display: flex; align-items: center; gap: 1rem; border-top: 1px solid var(--color-line); padding-top: 1rem; }
.safe-role-preview li svg { flex-shrink: 0; color: #426d4b; }
.safe-role-preview strong { display: block; font-family: var(--font-heading); font-size: .95rem; }
.safe-role-preview li span { display: block; margin-top: .3rem; color: var(--color-muted); font-size: .8rem; }
.safe-role-preview li.blocked svg { color: #887452; }
.safe-role-preview li.blocked strong { color: #7a756d; }
.safe-role-note { margin-top: 1.4rem; color: var(--color-muted); font-size: .8rem; line-height: 1.8; }
.safe-measures-heading { margin-top: 3.5rem; }
.safe-measures { display: grid; grid-template-columns: repeat(3, minmax(0, 1fr)); gap: 2rem; margin-top: 1.8rem; }
.safe-measures article { border-top: 1px solid #cbd2c2; padding-top: 1.4rem; }
.safe-measures svg { color: #536c48; }
.safe-measures h4 { margin-top: 1rem; font: 700 1.1rem var(--font-heading); }
.safe-measures p { margin-top: .6rem; color: var(--color-muted); font-size: .88rem; line-height: 1.8; }
.safe-controls-note { margin-top: 1.8rem; max-width: 60rem; color: var(--color-muted); font-size: .82rem; line-height: 1.8; }
@media (max-width: 1023px) { .safe-role-example { gap: 2rem; } .safe-measures { grid-template-columns: repeat(2, minmax(0, 1fr)); } }
@media (max-width: 767px) {
  .safe-data-example { padding: 1.5rem; }
  .safe-data-comparison { grid-template-columns: 1fr; gap: 1rem; }
  .safe-data-comparison > div { padding: 1.2rem; }
  .safe-data-arrow { justify-self: center; transform: rotate(90deg); }
  .safe-role-example { grid-template-columns: 1fr; }
  .safe-role-preview { padding: 1.5rem; }
  .safe-measures { gap: 1.5rem; }
}
@media (max-width: 479px) { .safe-measures { grid-template-columns: 1fr; } }
</style>
