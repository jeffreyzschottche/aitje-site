<script setup lang="ts">
const selected = ref(0);
const mask = ref(true);
const readOnly = ref(true);
const maxActions = ref(3);
const examples = [
  {
    name: "Kennis lokaal houden",
    icon: "server",
    title: "HR-kennis blijft op de eigen omgeving.",
    text: "Kies categorieën die alleen door lokale modellen gebruikt mogen worden. Je kunt daarnaast schrijvende acties via koppelingen tegenhouden wanneer die kennis in het antwoord zit.",
  },
  {
    name: "Acties begrenzen",
    icon: "plug",
    title: "Ophalen mag. Wijzigen vraagt een andere inrichting.",
    text: "Blokkeer specifieke koppelingen, sta alleen lezen toe of begrens het aantal acties per antwoord. Deze regels gelden bovenop de toegang die je via rollen instelt.",
  },
  {
    name: "Antwoorden bewaken",
    icon: "shield",
    title: "Bepaal welke gegevens in een antwoord mogen staan.",
    text: "Laat herkende gegevens en ingestelde woorden maskeren of houd het antwoord tegen. Er zijn regels voor onder meer e-mailadressen, IBAN, BSN, telefoonnummers en creditcardnummers.",
  },
];
const current = computed(() => examples[selected.value]!);
</script>
<template>
  <div class="guardrails-story" id="guardrails">
    <div class="gs-heading">
      <div>
        <p class="eyebrow">Guardrails · afgedwongen in de software</p>
        <h3>Jullie regels.<br />Ook als de AI iets anders voorstelt.</h3>
      </div>
      <p>
        Een beheerder bepaalt meer dan toegang en budget. Met guardrails stel je
        harde grenzen in voor kennis, acties en antwoorden. Voor iedereen, een
        rol of specifieke personen.
      </p>
    </div>
    <div class="gs-tabs" role="group" aria-label="Bekijk de guardrails">
      <button
        v-for="(item, i) in examples"
        :key="item.name"
        type="button"
        :aria-pressed="selected === i"
        aria-controls="gs-preview"
        @click="selected = i"
      >
        <AppIcon :name="item.icon" :size="19" />{{ item.name }}
      </button>
    </div>
    <div class="gs-grid">
      <div id="gs-preview" class="gs-preview">
        <span class="gs-label">{{ current.name }}</span>
        <h4>{{ current.title }}</h4>
        <p>{{ current.text }}</p>
        <div v-if="selected === 0" class="gs-knowledge">
          <div class="gs-source">
            <AppIcon name="library" :size="22" /><strong
              >HR &amp; personeel</strong
            ><span>Regel: alleen lokaal</span>
          </div>
          <div class="gs-routes">
            <div>
              <AppIcon name="check" :size="19" /><span>Eigen lokaal model</span
              ><strong>Toegestaan</strong>
            </div>
            <div class="gs-blocked">
              <AppIcon name="x" :size="19" /><span>Extern model</span
              ><strong>Geblokkeerd</strong>
            </div>
          </div>
          <p class="gs-small">
            Een lokale kennisregel geldt ook als een rol externe modellen mag
            gebruiken.
          </p>
        </div>
        <div v-else-if="selected === 1" class="gs-actions">
          <label
            ><span>Koppelingen alleen lezen</span
            ><input v-model="readOnly" type="checkbox" /></label
          ><label for="gs-max"
            ><span>Maximum acties per antwoord</span
            ><input
              id="gs-max"
              v-model.number="maxActions"
              type="number"
              min="0"
              max="50"
          /></label>
          <div class="gs-action-result" aria-live="polite">
            <span><AppIcon name="check" :size="17" />Gegevens ophalen</span
            ><span
              ><AppIcon :name="readOnly ? 'x' : 'check'" :size="17" />{{
                readOnly
                  ? "Opslaan en versturen geblokkeerd"
                  : "Schrijvende acties binnen de overige rechten"
              }}</span
            ><small
              >{{ maxActions }} acties per antwoord in dit voorbeeld</small
            >
          </div>
        </div>
        <div v-else class="gs-output">
          <div class="gs-sample">
            <span>Voorbeeldantwoord</span>
            <p>Neem contact op met robin@example.test over Project Morgen.</p>
          </div>
          <div
            class="gs-action-buttons"
            role="group"
            aria-label="Wat doet de antwoordregel?"
          >
            <button type="button" :aria-pressed="mask" @click="mask = true">
              Maskeren</button
            ><button type="button" :aria-pressed="!mask" @click="mask = false">
              Tegenhouden
            </button>
          </div>
          <div class="gs-sample gs-result" aria-live="polite">
            <span>Wat de gebruiker ziet</span>
            <p>
              {{
                mask
                  ? "Neem contact op met [verborgen] over [verborgen]."
                  : "Dit antwoord is tegengehouden door een ingestelde regel."
              }}
            </p>
          </div>
        </div>
        <p class="gs-small">
          Websitevoorbeeld met fictieve gegevens. Herkenning volgt de ingestelde
          regels; controleer je inrichting met representatieve voorbeelden.
        </p>
      </div>
      <AssistantMedia
        scene="admin-guardrails"
        title="Guardrails instellen en een antwoord testen"
      />
    </div>
  </div>
</template>
<style scoped>
.guardrails-story {
  margin-top: 2.5rem;
  padding-top: 2.5rem;
  border-top: 1px solid #35432c;
  scroll-margin-top: 6rem;
}
.gs-heading {
  display: grid;
  grid-template-columns: 1.1fr 1fr;
  gap: 3rem;
  align-items: end;
}
.gs-heading .eyebrow {
  color: #facc15;
}
.gs-heading h3 {
  font-size: clamp(1.7rem, 2.7vw, 2.5rem);
  line-height: 1.2;
  font-weight: 600;
  margin: 1rem 0;
}
.gs-heading > p {
  font-size: 0.92rem;
  line-height: 1.9;
  color: #b9c5aa;
}
.gs-tabs {
  display: flex;
  gap: 0.5rem;
  border-bottom: 1px solid #3c4931;
  margin: 1.8rem 0;
  overflow-x: auto;
}
.gs-tabs button {
  display: flex;
  align-items: center;
  gap: 0.6rem;
  white-space: nowrap;
  padding: 1rem;
  font-size: 0.8rem;
  color: #b3c19f;
  border-bottom: 2px solid transparent;
  cursor: pointer;
}
.gs-tabs button[aria-pressed="true"] {
  color: #facc15;
  border-color: #facc15;
}
.gs-grid {
  display: grid;
  grid-template-columns: 1fr 1.05fr;
  gap: 2rem;
  align-items: start;
}
.gs-preview {
  background: #192014;
  border: 1px solid #3b4b2f;
  border-radius: 1.25rem;
  padding: 1.7rem;
  min-width: 0;
}
.gs-label {
  font: 0.6rem var(--font-mono);
  text-transform: uppercase;
  letter-spacing: 0.08em;
  color: #e4cf67;
}
.gs-preview h4 {
  font-size: 1.3rem;
  line-height: 1.4;
  font-weight: 600;
  margin: 1rem 0;
}
.gs-preview > p {
  color: #b1c09e;
  font-size: 0.83rem;
  line-height: 1.85;
}
.gs-knowledge,
.gs-actions,
.gs-output {
  margin-top: 1.5rem;
}
.gs-source {
  border: 1px solid #53653d;
  background: #252f1d;
  border-radius: 0.8rem;
  padding: 1.2rem;
  display: grid;
  gap: 0.6rem;
  justify-items: center;
  text-align: center;
}
.gs-source svg {
  color: #facc15;
}
.gs-source span {
  font: 0.65rem var(--font-mono);
  color: #c6d5b1;
}
.gs-routes {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 0.7rem;
  margin-top: 0.7rem;
}
.gs-routes > div {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 0.6rem;
  padding: 1rem;
  border: 1px solid #51663a;
  border-radius: 0.8rem;
  font-size: 0.75rem;
}
.gs-routes strong {
  color: #cde69d;
  font-weight: 500;
  font-size: 0.65rem;
}
.gs-routes .gs-blocked {
  border-color: #80543c;
}
.gs-routes .gs-blocked strong {
  color: #ecc4a7;
}
.gs-small {
  color: #98ab81 !important;
  font-size: 0.68rem !important;
  line-height: 1.8 !important;
  margin-top: 1.2rem;
}
.gs-actions label {
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 1rem;
  padding: 1rem 0;
  border-bottom: 1px solid #3c4b30;
  font-size: 0.8rem;
}
.gs-actions input[type="checkbox"] {
  accent-color: #facc15;
  width: 18px;
  height: 18px;
}
.gs-actions input[type="number"] {
  width: 4.5rem;
  border: 1px solid #4b5e38;
  background: #10180b;
  border-radius: 0.5rem;
  padding: 0.6rem;
}
.gs-action-result {
  display: grid;
  gap: 0.8rem;
  padding-top: 1.2rem;
}
.gs-action-result span {
  display: flex;
  gap: 0.6rem;
  align-items: center;
  font-size: 0.75rem;
}
.gs-action-result small {
  font-size: 0.68rem;
  color: #a4b78c;
}
.gs-sample {
  padding: 1rem;
  border: 1px solid #465535;
  border-radius: 0.8rem;
  background: #10170b;
}
.gs-sample > span {
  font: 0.58rem var(--font-mono);
  text-transform: uppercase;
  color: #aabd8f;
}
.gs-sample p {
  font-size: 0.8rem;
  line-height: 1.8;
  color: #d6e0c7;
  margin-top: 0.6rem;
  overflow-wrap: anywhere;
}
.gs-result {
  border-color: #7d7a35;
}
.gs-action-buttons {
  display: flex;
  gap: 0.5rem;
  padding-block: 0.8rem;
}
.gs-action-buttons button {
  border: 1px solid #53633e;
  border-radius: 0.5rem;
  padding: 0.6rem 0.8rem;
  font-size: 0.72rem;
  cursor: pointer;
}
.gs-action-buttons button[aria-pressed="true"] {
  background: #facc15;
  color: #10150a;
  border-color: #facc15;
}
.gs-grid :deep(figcaption) {
  color: #9eaf8a;
}
@media (max-width: 900px) {
  .gs-heading,
  .gs-grid {
    grid-template-columns: 1fr;
    gap: 1.5rem;
  }
  .gs-heading h3 {
    margin-bottom: 0;
  }
  .gs-tabs button {
    padding: 1rem 0.6rem;
    font-size: 0.7rem;
  }
  .gs-preview {
    padding: 1.2rem;
  }
}
</style>
