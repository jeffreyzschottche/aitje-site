<script setup lang="ts">
const selected = ref(0);
const tabs = [
  {
    name: "Quiz & leren",
    icon: "sparkles",
    scene: "chat-quiz",
    prompt: "Maak een korte quiz waarmee ik lokale AI begrijp.",
    title: "Kennis blijft beter hangen als je ermee oefent.",
    text: "Laat de assistent uitleg omzetten in vragen met feedback. In deze opname oefen je met het verschil tussen lokale AI, externe modellen en tokenkosten. Dezelfde vorm is bruikbaar voor opleidingen en onboarding.",
  },
  {
    name: "Grafieken & data",
    icon: "gauge",
    scene: "chat-visualisatie",
    prompt: "Visualiseer de servicevragen per team en vergelijk de weken.",
    title: "Maak de verdeling zichtbaar.",
    text: "Laat cijfers ordenen in tabellen en grafieken. Vergelijk perioden, filter gegevens en bekijk welke informatie onder een conclusie ligt. De assistent kan ook rekenen en analyseren met Python, als dat is toegestaan.",
  },
  {
    name: "Processen & diagrammen",
    icon: "workflow",
    scene: "chat-proces",
    prompt: "Maak ons aanvraagproces visueel en klikbaar.",
    title: "Een proces dat iedereen kan volgen.",
    text: "Werk een werkwijze uit als stappenplan of diagram. Laat zien wie aan zet is en wat de volgende stap vraagt. Diagrammen, SVG en interactieve weergaven maken complexe uitleg tastbaar.",
  },
  {
    name: "Rekenen & simuleren",
    icon: "cpu",
    scene: "intelligent-ui",
    prompt: "Maak een calculator waarmee ik zelf een scenario kan aanpassen.",
    title: "Verander een aanname. Zie het gevolg.",
    text: "Een schuif, keuzehulp of kleine simulatie maakt een uitleg concreet. Na het maken van de weergave verandert de uitkomst direct, zonder voor iedere klik opnieuw een model te raadplegen.",
  },
];
tabs.push({
  name: "Render & prototype",
  icon: "box",
  scene: "chat-render",
  prompt: "Render een volledige 3D Rubik’s Cube die ik kan draaien.",
  title: "Een volledige Rubik’s Cube, gerenderd in de chat.",
  text: "Een compleet 3×3-model met gekleurde vlakken, belichting en rotatie. Dit voorbeeld laat zien hoe een antwoord een echte 3D-weergave kan worden. Je kunt daarna om een andere weergave, uitleg of uitwerking vragen.",
});
const current = computed(() => tabs[selected.value]!);
</script>
<template>
  <section id="antwoorden" class="answer-lab">
    <div class="container-page">
      <div class="al-heading">
        <div>
          <p class="eyebrow text-brand-ink">Veel meer dan een tekstvak</p>
          <h2>Een antwoord dat je kunt<br />bekijken. Bedienen. Gebruiken.</h2>
        </div>
        <p>
          Vraag om een quiz, dashboard, diagram, berekening of interactieve
          uitleg. De chat kan tekst aanvullen met een gerenderd resultaat waar
          je direct mee werkt.
        </p>
      </div>
      <div class="al-tabs" role="group" aria-label="Kies een soort antwoord">
        <button
          v-for="(tab, i) in tabs"
          :key="tab.name"
          type="button"
          :aria-pressed="selected === i"
          aria-controls="al-example"
          @click="selected = i"
        >
          <AppIcon :name="tab.icon" :size="20" />{{ tab.name }}
        </button>
      </div>
      <div id="al-example" class="al-stage">
        <div class="al-product">
          <div class="al-prompt">
            <span>Jij vraagt</span>
            <p>“{{ current.prompt }}”</p>
          </div>
          <AssistantMedia
            :key="current.scene"
            :scene="current.scene"
            :title="current.name"
          />
        </div>
        <div class="al-description">
          <span class="al-label">{{ current.name }}</span>
          <h3>{{ current.title }}</h3>
          <p>{{ current.text }}</p>
        </div>
      </div>
      <div class="al-formats">
        <div>
          <AppIcon name="layout" :size="24" />
          <h3>Interactief renderen</h3>
          <p>
            HTML, interactieve uitleg en dashboards in een afgeschermde
            weergave. Je kunt het resultaat openen, bekijken en verder laten
            aanpassen.
          </p>
        </div>
        <div>
          <AppIcon name="code" :size="24" />
          <h3>Rekenen en analyseren</h3>
          <p>
            Python kan berekeningen uitvoeren, gegevens verwerken, grafieken
            maken en bestanden opleveren binnen de beschikbare sandbox.
          </p>
        </div>
        <div>
          <AppIcon name="file-search" :size="24" />
          <h3>Van antwoord naar bestand</h3>
          <p>
            Werk verder met PDF, DOCX, CSV, tekst, code of een diagram. Welke
            exports beschikbaar zijn, hangt af van het soort resultaat.
          </p>
        </div>
      </div>
      <p class="al-note">
        De opnamen tonen vooraf uitgewerkte voorbeelden in de echte
        productinterface. In de Assistent maakt het gekozen model de uitwerking;
        kwaliteit en beschikbare functies hangen af van model, opdracht en
        rechten. Het opbouwen van een uitgebreid antwoord kan extra modelrondes
        vragen.
      </p>
    </div>
  </section>
</template>
<style scoped>
.answer-lab {
  background: var(--color-sand);
  padding-block: 6rem 4rem;
  scroll-margin-top: 6rem;
}
.al-heading {
  display: grid;
  grid-template-columns: 1.25fr 1fr;
  gap: 4rem;
  align-items: end;
  margin-bottom: 3rem;
}
.al-heading > p {
  max-width: 29rem;
  font-size: 1.05rem;
}
.al-heading h2 {
  font-size: clamp(2rem, 3.2vw, 3.1rem);
  font-weight: 700;
  line-height: 1.14;
  margin-top: 1rem;
}
.al-heading p,
.al-description > p,
.al-formats p {
  color: var(--color-muted);
  line-height: 1.8;
}
.al-tabs {
  display: flex;
  border-bottom: 1px solid #d2d1c7;
  gap: 0.5rem;
  margin-bottom: 2.5rem;
  overflow-x: auto;
}
.al-tabs button {
  display: flex;
  align-items: center;
  gap: 0.7rem;
  white-space: nowrap;
  padding: 1.1rem 1.2rem;
  border-bottom: 3px solid transparent;
  cursor: pointer;
  font-size: 0.85rem;
}
.al-tabs button[aria-pressed="true"] {
  border-color: var(--color-ink);
  font-weight: 600;
  background: #fff7;
}
.al-stage {
  display: grid;
  grid-template-columns: 1.2fr 1fr;
  gap: 3rem;
  align-items: start;
}
.al-product {
  min-width: 0;
}
.al-prompt {
  background: #e1e0d6;
  border-radius: 1rem;
  padding: 1.2rem 1.5rem;
  margin-bottom: 1.25rem;
}
.al-prompt > span,
.al-label {
  font: 0.65rem var(--font-mono);
  letter-spacing: 0.08em;
  text-transform: uppercase;
  color: var(--color-brand-ink);
}
.al-prompt p {
  font-weight: 500;
  font-size: 0.92rem;
  margin-top: 0.5rem;
  line-height: 1.6;
}
.al-description h3 {
  font-size: 1.6rem;
  font-weight: 600;
  line-height: 1.3;
  margin: 1rem 0;
}
.al-description > p {
  font-size: 0.95rem;
}
.al-formats {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 2rem;
  border-top: 1px solid #d0cfc4;
  margin-top: 3rem;
  padding-top: 2.5rem;
}
.al-formats h3 {
  font-weight: 600;
  margin: 1rem 0 0.7rem;
}
.al-formats p {
  font-size: 0.85rem;
}
.al-note {
  font-size: 0.73rem;
  line-height: 1.75;
  color: var(--color-muted);
  margin-top: 2rem;
  max-width: 62rem;
}
@media (max-width: 900px) {
  .answer-lab {
    padding-top: 4rem;
  }
  .al-heading,
  .al-stage {
    grid-template-columns: 1fr;
    gap: 2rem;
  }
  .al-heading > p {
    max-width: 40rem;
  }
  .al-tabs button {
    padding: 1rem 0.7rem;
  }
  .al-formats {
    grid-template-columns: 1fr;
    gap: 1.5rem;
  }
}
@media (prefers-reduced-motion: reduce) {
}
</style>
