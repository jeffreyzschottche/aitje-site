<script setup lang="ts">
import type { WorkshopVoiceStory } from "@/content/types";
import CaseWorkshopCosts from "@/components/CaseWorkshopCosts.vue";
const props = defineProps<{ story: WorkshopVoiceStory }>();
const selected = ref<number | null>(null);
const confirmed = ref(false);
const action = computed(() => selected.value === null ? null : props.story.actions[selected.value]);
function select(index: number) { selected.value = index; confirmed.value = false; }
</script>

<template>
  <div class="bob-case">
    <section class="section-space">
      <div class="container-page bob-intro-grid">
        <div>
          <p class="eyebrow text-brand-ink">Doorwerken. Gewoon vragen.</p>
          <h2 class="section-title mt-4">Je handen bij de auto.<br />Bob bij de informatie.</h2>
          <p class="bob-copy">{{ story.intro }}</p>
          <dl class="bob-facts"><div><dd>6</dd><dt>Android-tablets</dt></div><div><dd>100+</dd><dt>klanten per dag</dt></div><div><dd>1</dd><dt>lokale BOSGAME M6</dt></div></dl>
          <p class="bob-copy">“Hey Bob, Dirk hier.” De tablet wordt wakker en Bob reageert. Het gesprek blijft open, zodat een monteur kan doorvragen of een volgende actie kan laten voorbereiden.</p>
        </div>
        <figure class="bob-tablet-figure">
          <div class="bob-tablet">
            <div class="bob-camera" aria-hidden="true"></div>
            <div class="bob-tablet-screen">
              <div class="bob-tablet-top"><span>BOB <span>Werkplaatsassistent</span></span><span class="bob-live">Gesprek actief</span></div>
              <div class="bob-orb" aria-hidden="true"><div></div></div>
              <p class="bob-greeting">Hey ik ben Bob,<br />wat is er aan de hand?</p>
              <div v-if="action" class="bob-conversation" aria-live="polite">
                <p class="bob-person">Dirk</p><p class="bob-question">{{ action.question }}</p>
                <p class="bob-person">Bob</p><p>{{ action.reply }}</p>
                <button v-if="action.confirmation && !confirmed" type="button" class="bob-confirm" @click="confirmed = true">Oké, bevestig <AppIcon name="check" :size="16" /></button>
                <p v-if="confirmed" class="bob-confirmed"><AppIcon name="check" :size="16" /> Voorbeeldactie bevestigd</p>
              </div>
              <p v-else class="bob-tablet-hint">Technische vragen · Werkbonnen · Onderdelen</p>
              <div class="bob-wave" aria-hidden="true"><span v-for="n in 23" :key="n" :style="{ '--bar': `${10 + ((n * 17) % 29)}px`, '--delay': `${n * -0.09}s` }"></span></div>
            </div>
          </div>
          <figcaption>Voorbeeld van de bediening. Kies hieronder een taak om het gesprek te bekijken.</figcaption>
        </figure>
      </div>
    </section>

    <section class="section-space bob-tasks-section">
      <div class="container-page">
        <p class="eyebrow text-brand-ink">Wat monteurs aan Bob vragen</p>
        <h2 class="section-title mt-4">Van specificatie tot werkbon.</h2>
        <p class="bob-copy bob-task-intro">Dezelfde gesprekspartner, gekoppeld aan verschillende systemen. Bob gebruikt de context van de medewerker, het voertuig en de werkbon voor de juiste opdracht.</p>
        <div class="bob-tasks">
          <div v-for="(task, index) in story.actions" :key="task.title" class="bob-task" :class="{ 'is-selected': selected === index }">
            <div class="bob-task-heading"><span><AppIcon :name="task.icon" :size="24" /></span><h3>{{ task.title }}</h3></div>
            <blockquote>“{{ task.question }}”</blockquote><p>{{ task.description }}</p>
            <div class="bob-task-bottom"><span>{{ task.connection }}</span><button type="button" :aria-pressed="selected === index" @click="select(index)">Bekijk gesprek <AppIcon name="arrow-up-right" :size="16" /></button></div>
            <div v-if="selected === index" class="bob-task-response" aria-live="polite"><strong>Bob</strong><p>{{ task.reply }}</p><span v-if="task.confirmation">Eerst akkoord van de monteur.</span></div>
          </div>
        </div>
      </div>
    </section>

    <section class="section-space bob-hardware-section">
      <div class="container-page bob-hardware-grid">
        <figure class="bob-hardware-photo"><img :src="story.hardwareImage" alt="BOSGAME-computer met AITJE-logo als lokale rekenomgeving" width="1536" height="1024" loading="lazy" /><figcaption>Een eigen rekenomgeving op locatie, verbonden met de werkplaatstablets.</figcaption></figure>
        <div><p class="eyebrow text-brand-ink">Spraakverwerking op locatie</p><h2 class="section-title mt-4">Zes tablets.<br />Eén lokaal brein.</h2>
          <p class="bob-copy">Omdat de garage met gevoelige klant- en voertuiggegevens werkt, installeerde AITJE een BOSGAME M6 bij het bedrijf. De zes tablets hangen verspreid door de werkplaats en verbinden via het lokale netwerk met deze computer.</p>
          <p class="bob-copy">Op de BOSGAME draait Whisper lokaal om gesproken opdrachten naar tekst om te zetten. De verwerkingslaag vertaalt de opdracht naar een actie en stuurt die terug naar de tablet-app. Daar maken de API-koppelingen verbinding met de garagesoftware en technische databanken.</p>
          <div class="bob-hardware-note"><AppIcon name="mic" :size="24" /><p><strong>Whisper luistert. De software voert uit.</strong><br />Spraak naar tekst, medewerkers herkennen en tools aanroepen zijn afzonderlijke onderdelen van de oplossing.</p></div>
        </div>
      </div>
      <div class="container-page bob-architecture">
        <p class="eyebrow text-brand-ink">Zo loopt een opdracht</p>
        <ol><li><AppIcon name="mic" :size="26" /><strong>Hey Bob</strong><span>Een van de zes tablets</span></li><li><AppIcon name="cpu" :size="26" /><strong>BOSGAME M6</strong><span>Lokale transcriptie & actievoorstel</span></li><li><AppIcon name="workflow" :size="26" /><strong>De tablet-app</strong><span>Gerichte API- en toolcalls</span></li><li><AppIcon name="library" :size="26" /><strong>De juiste bron</strong><span>Haynes, Autodata, GMS of ERP</span></li></ol>
        <p class="bob-copy">De gevonden informatie of het actievoorstel verschijnt weer op de tablet, terwijl het gesprek doorgaat. De spraak wordt lokaal verwerkt; informatie uit externe databanken wordt via hun koppelingen opgehaald.</p>
      </div>
    </section>

    <CaseWorkshopCosts :costs="story.costs" />

    <section class="section-space bob-control-section">
      <div class="container-page bob-control-grid">
        <div><p class="eyebrow text-brand">De monteur houdt de regie</p><h2 class="section-title mt-4">Bob bereidt voor.<br />Jij zegt oké.</h2><p class="bob-copy">Voordat gegevens in het administratieve systeem worden weggeschreven, volgt een laatste controle. Bob legt de voorgenomen wijziging voor. Pas na het akkoord van de medewerker wordt deze vastgelegd.</p><p class="bob-copy">Lokale stemherkenning helpt om doorgaans meteen de juiste medewerker bij een opdracht te herkennen. Het systeem logt wie welke actie uitvoert, zodat wijzigingen herleidbaar blijven.</p></div>
        <div class="bob-approval"><span class="eyebrow">Voorbeeld · werkbon Ford Focus</span><p class="bob-approval-text">Voorbanden: 2 mm profiel.<br />Advies: binnenkort vervangen.</p><div class="bob-approval-person"><AppIcon name="users" :size="20" /> Medewerker: Dirk</div><div class="bob-approval-ok"><AppIcon name="check" :size="22" /> “Oké Bob, zet maar op de werkbon.”</div><p>Akkoord ontvangen → werkbon bijwerken → actie loggen</p></div>
      </div>
    </section>

    <section class="section-space"><div class="container-page bob-result"><p class="eyebrow text-brand-ink">Wat AITJE opleverde</p><h2 class="section-title mt-4">Een assistent die meewerkt.</h2><p class="bob-copy">Een applicatie op zes tablets, lokale spraakverwerking op de BOSGAME en verbindingen met de systemen die de garage al gebruikt. Technische informatie opvragen, bevindingen vastleggen en de balie informeren worden onderdeel van het gesprek tijdens het werk.</p><UiButton to="/diensten/aitje-custom" variant="secondary" arrow class="mt-6">Ook een workflow voor jouw werk?</UiButton></div></section>
  </div>
</template>

<style scoped>
.bob-copy { margin-top: 1.25rem; font-size: 1.04rem; line-height: 1.8; color: var(--color-muted); }
.bob-intro-grid, .bob-hardware-grid { display: grid; grid-template-columns: minmax(0,1fr) minmax(0,1fr); gap: clamp(2rem,5vw,5rem); align-items: center; }
.bob-facts { display: grid; grid-template-columns: repeat(3,minmax(0,1fr)); gap: 1rem; margin-block: 2rem; }
.bob-facts dd { font: 600 2.2rem var(--font-heading); letter-spacing: -.05em; }
.bob-facts dt { font-size: .8rem; margin-top: .5rem; color: var(--color-muted); }
.bob-tablet { position: relative; border: 12px solid #242a2b; border-radius: 35px; background: #101819; padding: 7px; box-shadow: 0 24px 50px #13241c25; }
.bob-camera { position: absolute; left: 50%; top: -8px; width: 5px; height: 5px; border-radius: 50%; background: #090d0e; }
.bob-tablet-screen { border-radius: 18px; padding: 1.5rem; background: radial-gradient(ellipse at 50% 40%,#1e3943 0%,#10262b 45%,#09191b 100%); color: white; }
.bob-tablet-top { display: flex; justify-content: space-between; align-items: center; gap: 1rem; font: 500 .7rem var(--font-mono); }
.bob-tablet-top > span:first-child { font-weight: 600; }
.bob-tablet-top > span:first-child span { display: block; margin-top: .4rem; font-size: .57rem; color: #bacdca; }
.bob-live { color: #bde4ac; font-size: .58rem; }
.bob-live::before { content: ''; display: inline-block; width: 5px; height: 5px; border-radius: 50%; background: #bde4ac; margin-right: .4rem; }
.bob-orb { position: relative; margin: 2.5rem auto 1.5rem; width: 135px; height: 135px; border-radius: 50%; background: conic-gradient(from 20deg,#7cdada,#7394ed,#ce95f3,#f9ce65,#7cdada); box-shadow: 0 0 45px #71aabd44; padding: 3px; animation: bob-breathe 4s ease-in-out infinite; }
.bob-orb div { width: 100%; height: 100%; border-radius: 50%; background: radial-gradient(ellipse at 35% 30%,#dcffffaa,transparent 40%),radial-gradient(ellipse at 60% 65%,#d393eeaa,transparent 55%),radial-gradient(ellipse at 20% 80%,#9beadccc,transparent 55%),#315569; box-shadow: inset 0 0 25px #e8ffeaaa; }
.bob-greeting { text-align: center; font: 500 clamp(1.3rem,2.2vw,1.8rem)/1.35 var(--font-heading); letter-spacing: -.03em; }
.bob-tablet-hint { text-align: center; font-size: .7rem; color: #adc4be; margin-top: 1rem; }
.bob-wave { display: flex; gap: 4px; align-items: center; justify-content: center; height: 45px; margin-top: 1.75rem; }
.bob-wave span { height: var(--bar); width: 3px; border-radius: 3px; background: linear-gradient(#afd3ee,#facc15); animation: bob-wave 1.3s var(--delay) ease-in-out infinite alternate; }
.bob-tablet-figure figcaption, .bob-hardware-photo figcaption { margin-top: 1rem; font-size: .75rem; line-height: 1.7; color: var(--color-muted); }
.bob-conversation { margin-top: 1.5rem; padding: 1rem; background: #ffffff0d; border: 1px solid #ffffff18; border-radius: 12px; font-size: .8rem; line-height: 1.7; }
.bob-conversation .bob-person { font: 500 .65rem var(--font-mono); color: #facc15; margin-block: .7rem .25rem; }
.bob-question { color: #becbc8; }
.bob-confirm { display: inline-flex; gap: .5rem; align-items: center; background: var(--color-brand); color: #111; padding: .7rem 1rem; border-radius: 50px; font-weight: 600; margin-top: 1rem; cursor: pointer; }
.bob-confirmed { display: flex; align-items: center; gap: .5rem; color: #bde4ac; margin-top: 1rem; }
.bob-tasks-section { background: var(--color-sand); }
.bob-task-intro { max-width: 780px; }
.bob-tasks { display: grid; grid-template-columns: repeat(3,minmax(0,1fr)); gap: 1.5rem; margin-top: 2.5rem; }
.bob-task { display: flex; flex-direction: column; border: 1px solid var(--color-line); border-radius: 20px; padding: 1.5rem; background: white; }
.bob-task.is-selected { border-color: #b8ba96; box-shadow: inset 0 3px var(--color-brand); }
.bob-task-heading { display: flex; align-items: center; gap: .8rem; }
.bob-task-heading > span { display: grid; place-items: center; width: 44px; height: 44px; background: var(--color-brand); border-radius: 12px; flex: none; }
.bob-task h3 { font: 600 1.02rem var(--font-heading); }
.bob-task blockquote { margin-block: 1.4rem 1rem; font-size: .98rem; line-height: 1.6; font-weight: 500; }
.bob-task > p { font-size: .86rem; line-height: 1.8; color: var(--color-muted); }
.bob-task-bottom { margin-top: auto; padding-top: 1.5rem; }
.bob-task-bottom > span { display: block; font: 400 .65rem/1.7 var(--font-mono); color: var(--color-muted); }
.bob-task-bottom button { display: inline-flex; align-items: center; gap: .5rem; font-size: .8rem; font-weight: 600; padding-block: .75rem .25rem; cursor: pointer; }
.bob-task-bottom button:focus-visible { outline: 2px solid var(--color-ink); outline-offset: 4px; }
.bob-task-response { border-top: 1px solid var(--color-line); margin-top: 1rem; padding-top: 1rem; font-size: .8rem; line-height: 1.7; }
.bob-task-response strong { font-family: var(--font-mono); }
.bob-task-response p { margin-block: .5rem; }
.bob-task-response span { font-size: .7rem; color: var(--color-muted); }
.bob-hardware-section { background: #fff; }
.bob-hardware-photo img { width: 100%; border-radius: 20px; }
.bob-hardware-note { display: flex; gap: 1rem; align-items: flex-start; padding-top: 1.5rem; border-top: 1px solid var(--color-line); margin-top: 1.5rem; }
.bob-hardware-note svg { flex: none; }
.bob-hardware-note p { font-size: .83rem; line-height: 1.8; color: var(--color-muted); }
.bob-hardware-note strong { color: var(--color-ink); }
.bob-architecture { margin-top: 4rem; }
.bob-architecture ol { display: grid; grid-template-columns: repeat(4,minmax(0,1fr)); gap: 1rem; margin-top: 1.5rem; }
.bob-architecture li { position: relative; display: flex; flex-direction: column; gap: .8rem; padding: 1.5rem; background: #eff2e8; border-radius: 14px; }
.bob-architecture li:not(:last-child)::after { content: '→'; position: absolute; right: -13px; top: 45%; z-index: 1; }
.bob-architecture li strong { font: 600 1rem var(--font-heading); }
.bob-architecture li span { font-size: .8rem; color: var(--color-muted); line-height: 1.6; }
.bob-architecture > p:last-child { max-width: 850px; font-size: .88rem; }
.bob-control-section { background: #102c25; color: white; }
.bob-control-grid { display: grid; grid-template-columns: minmax(0,1.2fr) minmax(0,1fr); gap: 4rem; align-items: center; }
.bob-control-section .bob-copy { color: #c3cec6; }
.bob-approval { border: 1px solid #4b6257; background: #1d3c32; border-radius: 20px; padding: 2rem; }
.bob-approval .eyebrow { font-size: .65rem; color: #c3cec6; }
.bob-approval-text { font: 500 1.3rem/1.5 var(--font-heading); margin-block: 1.5rem; }
.bob-approval-person { display: flex; gap: .75rem; align-items: center; color: #c3cec6; font-size: .8rem; }
.bob-approval-ok { display: flex; align-items: center; gap: .75rem; padding: 1rem; background: var(--color-brand); color: var(--color-ink); border-radius: 12px; margin-block: 1.5rem 1rem; font-size: .9rem; }
.bob-approval-ok svg { flex: none; }
.bob-approval > p:last-child { color: #c3cec6; font-size: .75rem; line-height: 1.8; }
.bob-result .bob-copy { max-width: 850px; }
@keyframes bob-breathe { 50% { transform: scale(1.04); box-shadow: 0 0 55px #71aabd77; } }
@keyframes bob-wave { to { transform: scaleY(.45); } }
@media(prefers-reduced-motion:reduce) { .bob-orb, .bob-wave span { animation: none; } }
@media(max-width:1023px) { .bob-intro-grid, .bob-hardware-grid, .bob-control-grid { grid-template-columns: 1fr; gap: 2.5rem; } .bob-tablet-figure { max-width: 570px; width: 100%; } .bob-tasks { grid-template-columns: repeat(2,minmax(0,1fr)); } .bob-hardware-photo { max-width: 620px; } }
@media(max-width:640px) { .bob-tasks { grid-template-columns: 1fr; } .bob-architecture ol { grid-template-columns: 1fr 1fr; } .bob-architecture li:nth-child(2)::after { display: none; } .bob-architecture li { padding: 1rem; } .bob-tablet-screen { padding: 1rem; } .bob-tablet { border-width: 10px; padding: 4px; border-radius: 28px; } .bob-orb { width: 110px; height: 110px; margin-top: 2rem; } .bob-facts dd { font-size: 1.9rem; } .bob-facts dt { font-size: .7rem; } .bob-approval { padding: 1.5rem; } .bob-tablet-hint { font-size: .6rem; } }
</style>
