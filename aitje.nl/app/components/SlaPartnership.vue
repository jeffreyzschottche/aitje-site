<script setup lang="ts">
const selected = ref(0);
const activities = [
  { icon: "cpu", title: "Modellen beheren", text: "Passende ontwikkelingen beoordelen, een model testen en de gekozen versie installeren of bijwerken." },
  { icon: "file-search", title: "Prompts & skills", text: "Instructies voor terugkerend werk maken en verbeteren, met gerichte context en passende controles." },
  { icon: "gauge", title: "AI-APK & analyses", text: "Je inrichting periodiek beoordelen. Op verzoek deelt AITJE relevante analyses om keuzes beter te onderbouwen." },
];
const messages = [
  { tab: "Een model voor je stack", subject: "Is dit model interessant voor jouw kennisbank?", text: "Een nieuw kandidaatmodel kan goed aansluiten op het doorzoeken van documenten. AITJE heeft een relevante vergelijking die je kunt bekijken.", next: "Samen beoordelen of een test met jouw vragen zinvol is. Installeren gebeurt in overleg, binnen de beschikbare service-uren of na een apart voorstel." },
  { tab: "Een workflow met demo", subject: "Een bestaande aanpak voor je terugkerende werk", text: "Een workflow voor vergelijkbaar werk combineert het ophalen van gegevens, een gerichte modeltaak en een controle door een medewerker. Een beschikbare demo laat zien hoe die stappen samenwerken.", next: "Bekijken welke onderdelen passen bij jouw proces en koppelingen. Je krijgt een voorstel voor de benodigde aanpassingen voordat de implementatie begint." },
];
const message = computed(() => messages[selected.value]!);
</script>

<template>
  <section class="sla-partnership section-space">
    <div class="container-page">
      <SectionHeading eyebrow="Meer dan technische hulp" title="Meedenken dat bij jouw werk past." intro="Je hoeft ontwikkelingen niet allemaal zelf te volgen. AITJE kent je opstelling en helpt bepalen wat relevant is, wat beter kan en welke volgende stap de moeite waard is." />
      <div class="sla-activities"><article v-for="activity in activities" :key="activity.title"><AppIcon :name="activity.icon" :size="27" /><h3>{{ activity.title }}</h3><p>{{ activity.text }}</p></article></div>

      <div class="sla-message-example">
        <div>
          <p class="eyebrow text-brand-ink">Persoonlijke updates</p><h3>Relevant voor jouw omgeving.</h3>
          <p>Een ontwikkeling wordt gekoppeld aan jouw modellen, systemen en werkzaamheden. AITJE deelt wat die voor je kan betekenen, met een analyse of demo waar die beschikbaar is.</p>
          <dl class="sla-mail-cadence"><div><dt>Core & Plus</dt><dd>1× per maand</dd></div><div><dt>Max</dt><dd>2× per maand</dd></div></dl>
          <p class="sla-cadence-note">Max voegt een passend toepassingsidee en kwartaaloverleg toe. Je geeft aan welke analyses je wilt ontvangen en welke ideeën aansluiten op je werk.</p>
        </div>
        <div class="sla-email-preview">
          <div class="sla-example-selector" aria-label="Bekijk een voorbeeldbericht"><button v-for="(item, index) in messages" :key="item.tab" type="button" :aria-pressed="selected === index" :class="{ active: selected === index }" @click="selected = index">{{ item.tab }}</button></div>
          <div class="sla-email-body" aria-live="polite"><p class="sla-preview-label"><AppIcon name="mail" :size="18" />Voorbeeld van een persoonlijk bericht</p><h4>{{ message.subject }}</h4><p>{{ message.text }}</p><div class="sla-email-next"><span>Een mogelijke volgende stap</span><p>{{ message.next }}</p></div></div>
        </div>
      </div>

      <aside class="sla-workflow-reuse">
        <div><p class="eyebrow">Verder met een bestaande aanpak</p><h3>Herbruikbare workflow. Minder bouwwerk.</h3><p>AITJE heeft regelmatig een aanpak voor vergelijkbaar werk die kan worden aangepast aan jouw organisatie. Je krijgt een businesscase en, waar beschikbaar, een demo. Hergebruik en kennis van je omgeving kunnen de implementatie goedkoper maken dan een volledig nieuw Custom-traject.</p></div>
        <div class="sla-reuse-next"><AppIcon name="workflow" :size="34" /><p>Kleine aanpassingen kunnen binnen je service-uren passen. Meer werk krijgt vooraf een scope en prijs, zodat je weet wat de volgende stap kost.</p><NuxtLink to="/cases/3d-productmodellen-met-ai">Bekijk een workflowcase <AppIcon name="arrow-up-right" :size="16" /></NuxtLink></div>
      </aside>
    </div>
  </section>
</template>

<style scoped>
.sla-partnership { background: #eef0e7; }
.sla-activities { display: grid; grid-template-columns: repeat(3, minmax(0, 1fr)); gap: 2rem; margin-top: 2rem; }
.sla-activities article { border-top: 1px solid #cbd2c2; padding-top: 1.5rem; }
.sla-activities svg { color: #536c48; }
.sla-activities h3 { margin-top: 1rem; font: 700 1.15rem var(--font-heading); letter-spacing: -.03em; }
.sla-activities p { margin-top: .6rem; color: var(--color-muted); font-size: .9rem; line-height: 1.8; }
.sla-message-example { display: grid; grid-template-columns: minmax(0, 1fr) minmax(0, 1.1fr); gap: 3.5rem; align-items: center; margin-top: 3.5rem; }
.sla-message-example h3, .sla-workflow-reuse h3 { margin-top: .8rem; font: 700 clamp(1.5rem, 2.6vw, 2rem)/1.2 var(--font-heading); letter-spacing: -.04em; }
.sla-message-example h3 ~ p { margin-top: 1rem; color: var(--color-muted); font-size: .94rem; line-height: 1.8; }
.sla-mail-cadence { display: flex; flex-wrap: wrap; gap: 1.5rem 3rem; margin-top: 1.5rem; }
.sla-mail-cadence dt { color: var(--color-muted); font-size: .8rem; }
.sla-mail-cadence dd { margin-top: .4rem; font: 700 1.35rem var(--font-heading); }
.sla-message-example p.sla-cadence-note { font-size: .82rem; }
.sla-email-preview { border: 1px solid #cbd2c2; border-radius: 22px; overflow: hidden; background: #fff; }
.sla-example-selector { display: grid; grid-template-columns: repeat(2, minmax(0, 1fr)); border-bottom: 1px solid var(--color-line); }
.sla-example-selector button { padding: 1rem; font-size: .84rem; font-weight: 600; cursor: pointer; }
.sla-example-selector button.active { background: var(--color-brand); }
.sla-example-selector button:hover:not(.active) { background: #f3f4ed; }
.sla-example-selector button:focus-visible { outline: 2px solid var(--color-ink); outline-offset: -5px; }
.sla-email-body { padding: 1.7rem; }
.sla-preview-label { display: flex; gap: .6rem; align-items: center; font-size: .76rem; color: var(--color-muted); }
.sla-preview-label svg { flex-shrink: 0; }
.sla-email-body h4 { margin-top: 1.2rem; font: 700 1.25rem/1.3 var(--font-heading); letter-spacing: -.03em; }
.sla-email-body h4 ~ p, .sla-email-next p { margin-top: .8rem; font-size: .88rem; line-height: 1.8; color: var(--color-muted); }
.sla-email-next { border-top: 1px solid var(--color-line); padding-top: 1rem; margin-top: 1.3rem; }
.sla-email-next > span { font-size: .82rem; font-weight: 600; }
.sla-workflow-reuse { display: grid; grid-template-columns: minmax(0, 1.3fr) minmax(0, 1fr); gap: 3rem; margin-top: 3rem; padding: 2rem; border-radius: 22px; background: #173a2d; color: #fff; }
.sla-workflow-reuse .eyebrow { color: var(--color-brand); }
.sla-workflow-reuse p:not(.eyebrow) { margin-top: 1rem; color: #c7d8ca; font-size: .88rem; line-height: 1.8; }
.sla-reuse-next > svg { color: var(--color-brand); }
.sla-reuse-next a { display: inline-flex; align-items: center; gap: .5rem; margin-top: 1rem; color: var(--color-brand); font-size: .85rem; font-weight: 600; }
.sla-reuse-next a:hover { text-decoration: underline; text-underline-offset: 4px; }
.sla-reuse-next a:focus-visible { outline: 2px solid var(--color-brand); outline-offset: 5px; }
@media (max-width: 1023px) { .sla-message-example { gap: 2rem; } }
@media (max-width: 767px) {
  .sla-activities, .sla-message-example, .sla-workflow-reuse { grid-template-columns: 1fr; gap: 2rem; }
  .sla-workflow-reuse { padding: 1.5rem; }
  .sla-email-body { padding: 1.5rem; }
}
</style>
