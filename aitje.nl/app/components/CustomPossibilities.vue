<script setup lang="ts">
import { customPossibilities, customToolGroups, customEnvironments, customDesignChoices } from "@/content/custom";
import { contactLink } from "@/content/site";

const selectedEnvironment = ref<(typeof customEnvironments)[number]["id"]>("lokaal");
const environment = computed(() => customEnvironments.find(item => item.id === selectedEnvironment.value)!);
</script>

<template>
  <section id="mogelijkheden" class="custom-possibilities section-space scroll-mt-24" aria-labelledby="custom-possibilities-title">
    <div class="container-page">
      <SectionHeading
        eyebrow="Wat wil jij makkelijker maken?"
        title="Van die ene taak tot jouw eigen AI-toepassing."
        intro="Je hoeft nog geen tool, model of server te kiezen. Vertel wat je wilt bereiken, wat nu veel tijd kost of waar je vastloopt. Samen zoeken we uit wat past."
      />
      <div class="custom-possibility-grid">
        <article v-for="item in customPossibilities" :key="item.title" class="custom-possibility-card" :class="`custom-possibility-card--${item.tone}`">
          <div class="custom-possibility-art" aria-hidden="true">
            <span><AppIcon :name="item.icon" :size="23" /></span>
            <img :src="item.image" alt="" width="1024" height="1024" loading="lazy" />
          </div>
          <h3>{{ item.title }}</h3>
          <p>{{ item.text }}</p>
          <ul aria-label="Voorbeelden">
            <li v-for="example in item.examples" :key="example">{{ example }}</li>
          </ul>
        </article>
      </div>
      <div class="custom-start-small">
        <div>
          <h3>Een idee, een irritante taak of een half werkend prototype is genoeg.</h3>
          <p>Wij helpen je wegwijs worden, kiezen een haalbare eerste stap en maken de uren en kosten vooraf duidelijk.</p>
        </div>
        <UiButton :to="contactLink('ai-op-maat')" arrow>Vertel ons je idee</UiButton>
      </div>
    </div>
  </section>

  <section id="custom-omgeving" class="custom-environment section-space scroll-mt-24" aria-labelledby="custom-environment-title">
    <div class="container-page">
      <div class="custom-environment-heading">
        <SectionHeading
          eyebrow="Jouw situatie bepaalt de aanpak"
          title="Lokaal, op een server of met externe AI."
          intro="De beste oplossing begint bij jouw werk, gegevens en budget. AITJE zoekt de passende combinatie van modellen, software en infrastructuur en kan de benodigde omgeving voor je regelen."
        />
        <p class="custom-environment-prompt"><AppIcon name="compass" :size="22" />Je hoeft het zelf nog niet te weten.</p>
      </div>

      <div class="custom-environment-picker" role="group" aria-label="Bekijk waar je AI kan draaien">
        <button v-for="item in customEnvironments" :key="item.id" type="button" :aria-pressed="selectedEnvironment === item.id" aria-controls="custom-environment-panel" @click="selectedEnvironment = item.id">
          <AppIcon :name="item.icon" :size="18" />{{ item.label }}
        </button>
      </div>

      <div id="custom-environment-panel" class="custom-environment-panel" aria-live="polite" aria-atomic="true">
        <div class="custom-environment-copy">
          <p class="eyebrow">{{ environment.location }}</p>
          <h3>{{ environment.title }}</h3>
          <p>{{ environment.text }}</p>
          <div class="custom-workflow-preview" aria-label="Voorbeeld van een gecontroleerde AI-workflow">
            <span><AppIcon name="file-search" :size="19" />Jouw taak</span>
            <AppIcon name="arrow-right" :size="18" />
            <span class="custom-workflow-model"><AppIcon :name="environment.icon" :size="21" />{{ environment.model }}</span>
            <AppIcon name="arrow-right" :size="18" />
            <span><AppIcon name="check" :size="20" />Controle &amp; actie</span>
          </div>
          <p class="custom-environment-examples">{{ environment.examples }}</p>
        </div>
        <dl class="custom-environment-facts">
          <div><dt><AppIcon name="shield" :size="21" />Je gegevens</dt><dd>{{ environment.data }}</dd></div>
          <div><dt><AppIcon name="gauge" :size="21" />Je kosten</dt><dd>{{ environment.costs }}</dd></div>
        </dl>
      </div>

      <div class="custom-tools-heading">
        <h3>De bouwstenen kunnen verschillen. Het doel blijft van jou.</h3>
        <p>Dit zijn voorbeelden van de mogelijkheden. We kiezen wat bij je toepassing past en kunnen ook je bestaande tools en omgeving gebruiken.</p>
      </div>
      <div class="custom-tool-groups">
        <article v-for="group in customToolGroups" :key="group.title">
          <AppIcon :name="group.icon" :size="25" />
          <h4>{{ group.title }}</h4>
          <p>{{ group.text }}</p>
          <ul><li v-for="tool in group.tools" :key="tool">{{ tool }}</li></ul>
        </article>
      </div>
    </div>
  </section>

  <section class="custom-design-choices section-space" aria-labelledby="custom-design-title">
    <div class="container-page">
      <SectionHeading
        eyebrow="Slimmer werken met AI"
        title="Minder gedoe. Meer grip."
        intro="Automatiseren moet je werk makkelijker maken. Daarom kijken we ook naar wat je deelt, wat je betaalt en hoe je de oplossing straks zelf kunt gebruiken."
      />
      <div class="custom-design-grid">
        <article v-for="choice in customDesignChoices" :key="choice.title">
          <span><AppIcon :name="choice.icon" :size="25" /></span>
          <h3>{{ choice.title }}</h3>
          <p>{{ choice.text }}</p>
        </article>
      </div>
    </div>
  </section>
</template>

<style scoped>
.custom-possibilities { padding-top: 1rem; }
.custom-possibility-grid { display: grid; grid-template-columns: repeat(3, minmax(0, 1fr)); gap: 1.25rem; margin-top: 2.75rem; }
.custom-possibility-card { display: flex; flex-direction: column; padding: 1.75rem; border: 1px solid var(--color-line); border-radius: var(--radius-panel); background: var(--color-surface); }
.custom-possibility-card--yellow { background: var(--color-brand); border-color: var(--color-brand); }
.custom-possibility-card--green { background: radial-gradient(ellipse at top right, #305d46, transparent 75%), #15372c; border-color: #315345; color: white; }
.custom-possibility-art { position: relative; display: flex; align-items: center; justify-content: center; height: 155px; margin-bottom: 1.5rem; }
.custom-possibility-art > span { position: absolute; left: 0; top: .3rem; display: grid; place-items: center; width: 43px; height: 43px; border-radius: 14px; background: #f1f2ec; color: #48553d; }
.custom-possibility-card--yellow .custom-possibility-art > span { background: rgb(255 255 255 / .45); color: var(--color-ink); }
.custom-possibility-card--green .custom-possibility-art > span { background: rgb(255 255 255 / .09); color: var(--color-brand); }
.custom-possibility-art img { width: 190px; height: 165px; object-fit: contain; filter: drop-shadow(0 12px 10px rgb(11 11 11 / .08)); }
.custom-possibility-card h3 { font: 600 clamp(1.15rem, 1.7vw, 1.5rem)/1.3 var(--font-heading); letter-spacing: -.035em; }
.custom-possibility-card > p { margin-top: 1rem; color: var(--color-muted); font-size: .9rem; line-height: 1.8; }
.custom-possibility-card--yellow > p { color: #453c16; }
.custom-possibility-card--green > p { color: #d2dfd5; }
.custom-possibility-card > ul { display: flex; flex-wrap: wrap; gap: .45rem; padding-top: 1.4rem; margin-top: auto; list-style: none; }
.custom-possibility-card > ul li { padding: .35rem .6rem; border: 1px solid #dde2d6; border-radius: 999px; color: #59634c; font-size: .65rem; line-height: 1.5; }
.custom-possibility-card--yellow > ul li { border-color: rgb(63 47 0 / .2); color: #473d14; }
.custom-possibility-card--green > ul li { border-color: #4c6c57; color: #dbe8d8; }
.custom-start-small { display: flex; align-items: center; justify-content: space-between; gap: 2rem; margin-top: 2rem; padding-top: 2rem; border-top: 1px solid var(--color-line); }
.custom-start-small > div { max-width: 720px; }
.custom-start-small h3 { font: 600 1.2rem/1.5 var(--font-heading); }
.custom-start-small p { margin-top: .7rem; color: var(--color-muted); font-size: .9rem; line-height: 1.75; }
.custom-start-small > :last-child { flex-shrink: 0; }
.custom-environment { background: #edf0e7; }
.custom-environment-heading { display: grid; grid-template-columns: minmax(0, 1fr) 230px; gap: 3rem; align-items: end; }
.custom-environment-prompt { display: flex; align-items: start; gap: .7rem; font: 500 .86rem/1.6 var(--font-heading); color: #586a4e; }
.custom-environment-prompt svg { flex-shrink: 0; }
.custom-environment-picker { display: flex; flex-wrap: wrap; gap: .6rem; margin-top: 2.5rem; }
.custom-environment-picker button { display: inline-flex; align-items: center; justify-content: center; gap: .6rem; padding: .9rem 1.2rem; border: 1px solid #cbd5c0; border-radius: 999px; background: #f8faf3; color: #42533b; font-size: .86rem; font-weight: 600; cursor: pointer; transition: background .2s ease, color .2s ease; }
.custom-environment-picker button[aria-pressed="true"] { background: var(--color-brand); border-color: #cfab0c; color: var(--color-ink); }
.custom-environment-picker button:focus-visible { outline: 2px solid #2c4c36; outline-offset: 4px; }
.custom-environment-panel { display: grid; grid-template-columns: minmax(0, 1.4fr) minmax(0, 1fr); margin-top: 1.25rem; border: 1px solid #cbd5c0; border-radius: var(--radius-panel); overflow: hidden; background: white; }
.custom-environment-copy { padding: clamp(1.5rem, 3vw, 2.5rem); }
.custom-environment-copy > .eyebrow { font-size: .65rem; color: #687a57; }
.custom-environment-copy h3 { margin-top: .9rem; font: 600 clamp(1.4rem, 2.5vw, 2rem)/1.3 var(--font-heading); letter-spacing: -.04em; }
.custom-environment-copy > p:not(.eyebrow) { margin-top: 1.15rem; color: var(--color-muted); font-size: .9rem; line-height: 1.8; }
.custom-workflow-preview { display: flex; align-items: center; justify-content: space-between; gap: .5rem; margin-top: 1.75rem; padding: 1.1rem .8rem; border: 1px solid #dce3d3; border-radius: 15px; background: #f6f8f1; }
.custom-workflow-preview > svg { color: #738261; flex-shrink: 0; }
.custom-workflow-preview > span { display: flex; align-items: center; justify-content: center; flex-direction: column; gap: .6rem; flex: 1; text-align: center; font-size: .66rem; line-height: 1.5; color: #506042; }
.custom-workflow-preview .custom-workflow-model { font-weight: 600; color: #263d26; }
.custom-workflow-model > svg { color: #917400; }
.custom-environment-copy > .custom-environment-examples { font-size: .78rem !important; }
.custom-environment-facts { padding: clamp(1.5rem, 3vw, 2.5rem); background: #183b2d; color: white; }
.custom-environment-facts > div + div { margin-top: 1.7rem; padding-top: 1.7rem; border-top: 1px solid #4b6850; }
.custom-environment-facts dt { display: flex; align-items: center; gap: .65rem; font: 600 1rem var(--font-heading); }
.custom-environment-facts dt svg { color: var(--color-brand); }
.custom-environment-facts dd { margin-top: .9rem; color: #d1ddcd; font-size: .85rem; line-height: 1.85; }
.custom-tools-heading { display: flex; align-items: start; justify-content: space-between; gap: 3rem; margin-top: 3.5rem; }
.custom-tools-heading h3 { max-width: 560px; font: 600 clamp(1.4rem, 2.5vw, 1.9rem)/1.35 var(--font-heading); letter-spacing: -.035em; }
.custom-tools-heading p { max-width: 470px; color: #63735a; font-size: .85rem; line-height: 1.8; }
.custom-tool-groups { display: grid; grid-template-columns: repeat(3, minmax(0, 1fr)); gap: 1.75rem; margin-top: 2rem; }
.custom-tool-groups article { border-top: 1px solid #c7d1bd; padding-top: 1.5rem; }
.custom-tool-groups article > svg { color: #647b4e; }
.custom-tool-groups h4 { margin-top: .9rem; font: 600 1rem/1.5 var(--font-heading); }
.custom-tool-groups p { color: #66745d; font-size: .8rem; line-height: 1.8; margin-top: .6rem; }
.custom-tool-groups ul { display: flex; flex-wrap: wrap; gap: .5rem; margin-top: 1.2rem; list-style: none; }
.custom-tool-groups li { padding: .45rem .65rem; border: 1px solid #c9d5be; background: #f8faf5; border-radius: 9px; color: #465a3b; font-size: .7rem; }
.custom-design-grid { display: grid; grid-template-columns: repeat(3, minmax(0, 1fr)); gap: 2.75rem; margin-top: 2.5rem; }
.custom-design-grid article > span { display: grid; place-items: center; width: 52px; height: 52px; border-radius: 15px; background: var(--color-brand); }
.custom-design-grid h3 { margin-top: 1.1rem; font: 600 1.2rem/1.4 var(--font-heading); }
.custom-design-grid p { margin-top: .8rem; color: var(--color-muted); font-size: .9rem; line-height: 1.85; }
@media (max-width: 1023px) {
  .custom-possibility-grid { grid-template-columns: repeat(2, minmax(0, 1fr)); }
  .custom-start-small { align-items: start; flex-direction: column; gap: 1.25rem; }
  .custom-environment-heading { grid-template-columns: minmax(0, 1fr); gap: 1.3rem; }
  .custom-environment-panel { grid-template-columns: minmax(0, 1fr); }
  .custom-environment-facts { display: grid; grid-template-columns: repeat(2, minmax(0, 1fr)); gap: 2rem; }
  .custom-environment-facts > div + div { margin-top: 0; padding-top: 0; border-top: 0; }
  .custom-tools-heading { flex-direction: column; gap: 1rem; }
  .custom-tool-groups { grid-template-columns: minmax(0, 1fr); gap: 1.8rem; }
  .custom-design-grid { gap: 1.5rem; }
}
@media (max-width: 599px) {
  .custom-possibility-grid { grid-template-columns: minmax(0, 1fr); }
  .custom-possibility-card { padding: 1.5rem; }
  .custom-possibility-art { height: 125px; margin-bottom: 1.2rem; }
  .custom-possibility-art img { width: 155px; height: 140px; }
  .custom-possibility-card h3 { font-size: 1.25rem; }
  .custom-environment-picker { gap: .5rem; }
  .custom-environment-picker button { padding: .75rem 1rem; font-size: .75rem; }
  .custom-environment-facts { grid-template-columns: minmax(0, 1fr); gap: 1.5rem; }
  .custom-environment-facts > div + div { padding-top: 1.5rem; border-top: 1px solid #4b6850; }
  .custom-workflow-preview { gap: .3rem; padding: .9rem .5rem; }
  .custom-workflow-preview > span { font-size: .6rem; }
  .custom-workflow-preview > svg { width: 14px; }
  .custom-design-grid { grid-template-columns: minmax(0, 1fr); gap: 2rem; }
}
</style>
