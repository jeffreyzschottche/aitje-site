<script setup lang="ts">
const step = ref(0);
const steps = [
  {
    name: "Beschrijf",
    shot: "composer",
    path: "/",
    title: "Je beschrijft de taak zoals je het een collega vraagt.",
    text: "Kies de repository en startbranch, typ de opdracht en druk op Enter. Onder Opties kies je het model, webzoeken, koppelingen en het aantal rondes. Met Inplannen zet je dezelfde opdracht op een vast moment.",
    points: [
      "Voorbeeldtaken en skills vullen het veld voor je in",
      "Een taak kan in meer dan één repository werken",
      "Elke taak start vanaf een schone kopie",
    ],
  },
  {
    name: "Agent werkt",
    shot: "taak-bezig",
    path: "/runs",
    title: "De agent werkt in een eigen, afgeschermde kopie.",
    text: "De agent krijgt een eigen werkmap in een container. Hij leest bestanden, draait commando's en tests en past code aan. Je volgt het live als leesbare stappen. Wat mislukt, staat er ook gewoon tussen.",
    points: [
      "Bekeken bestanden, commando's en tussenstappen per regel",
      "Loopt de agent in een herhaling, dan start de run één keer opnieuw",
      "Stoppen kan op elk moment, met bevestiging",
    ],
  },
  {
    name: "Verslag",
    shot: "taak-verslag",
    path: "/runs",
    title: "Je leest wat er mis was en hoe het is opgelost.",
    text: "Na afloop schrijft de agent een verslag: de oorzaak, de oplossing en de controle. In dit voorbeeld rondde round() €2,625 af op €2,62. Na de fix met ROUND_HALF_UP wordt het €2,63 en slagen alle 3 de tests.",
    points: [
      "Oorzaak, fix en verificatie in gewone taal",
      "Lijst van gewijzigde bestanden met regels erbij en eraf",
      "De ruwe gebeurtenissen onder Technische weergave",
    ],
  },
  {
    name: "Wijzigingen",
    shot: "taak-diff",
    path: "/runs?tab=wijzigingen",
    title: "Je ziet elke gewijzigde regel, naast of onder elkaar.",
    text: "Het tabblad Wijzigingen toont per bestand wat er weg gaat en wat erbij komt. Markeer een bestand als In orde of Niet in orde en zet er een opmerking bij. Zo review je zoals je dat bij een collega doet.",
    points: [
      "Per bestand een oordeel en een opmerking",
      "Naast elkaar of onder elkaar",
      "Opnieuw uitvoeren en twee runs vergelijken via het menu",
    ],
  },
  {
    name: "Jij beslist",
    shot: "taak-resultaat",
    path: "/runs",
    title: "Er verandert niets tot jij het goedkeurt.",
    text: "Goedkeuren & PR openen maakt een pull request bij GitHub, GitLab of Gitea, met je opmerking als tekst. Wijzigingen nodig keurt af of laat de agent opnieuw beginnen met jouw aanpassing.",
    points: [
      "Alleen een reviewer of beheerder kan goedkeuren",
      "GitHub zonder zelf een token te maken: eenmalig inloggen met een code",
      "Geen schrijfrecht? Dan maakt Coder een fork",
    ],
  },
];
const current = computed(() => steps[step.value]!);
</script>
<template>
  <section id="taak" class="coder-route">
    <div class="container-page">
      <div class="cr-heading">
        <div>
          <p class="eyebrow">Van opdracht tot pull request</p>
          <h2>Geef de opdracht.<br />Houd de regie.</h2>
          <p>
            Een taak voor AITJE Coder doorloopt altijd dezelfde vijf stappen. De
            agent doet het werk in een eigen kopie. Jij beoordeelt het resultaat
            en beslist wat er naar de repository gaat.
          </p>
        </div>
        <CoderArtwork class="cr-art" variant="workbench" scene="review" />
      </div>
      <div class="cr-steps" role="group" aria-label="Stappen van een taak">
        <button
          v-for="(item, i) in steps"
          :key="item.name"
          type="button"
          :aria-pressed="step === i"
          aria-controls="cr-detail"
          @click="step = i"
        >
          <span>0{{ i + 1 }}</span
          >{{ item.name }}
        </button>
      </div>
      <div id="cr-detail" class="cr-detail" aria-live="polite">
        <CoderScreen
          :key="current.shot"
          :shot="current.shot"
          :path="current.path"
          :alt="current.title"
        />
        <div class="cr-copy">
          <span class="cr-label">Stap 0{{ step + 1 }} van 05</span>
          <h3>{{ current.title }}</h3>
          <p>{{ current.text }}</p>
          <ul>
            <li v-for="point in current.points" :key="point">
              <AppIcon name="check" :size="17" />{{ point }}
            </li>
          </ul>
          <div class="cr-nav">
            <button
              type="button"
              :disabled="step === 0"
              @click="step = Math.max(0, step - 1)"
            >
              ← Vorige
            </button>
            <button
              type="button"
              :disabled="step === steps.length - 1"
              @click="step = Math.min(steps.length - 1, step + 1)"
            >
              Volgende stap →
            </button>
          </div>
        </div>
      </div>
      <p class="cr-caption">
        Echte schermen van AITJE Coder, gemaakt op 18 oktober 2026 op een
        AITJE-box met het model tiel-coder-35b. Bakkerij Demo en het project
        facturatie zijn fictief. De stappen tonen drie taken uit hetzelfde
        demoproject; stap 3 tot en met 5 horen bij dezelfde taak.
      </p>

      <div class="cr-films">
        <div>
          <h3>Van leeg veld naar een agent die werkt</h3>
          <p>
            Een opdracht typen, starten en de agent zien lezen. Bekeken
            bestanden zijn geel omlijnd.
          </p>
          <CoderMedia scene="opdracht" title="Een taak starten" />
        </div>
        <div>
          <h3>Van verslag naar goedkeuring</h3>
          <p>
            De status, het verslag met de tests en de gewijzigde regels. Daarna
            de knop die de pull request opent.
          </p>
          <CoderMedia scene="review" title="Een resultaat beoordelen" />
        </div>
      </div>
    </div>
  </section>
</template>
<style scoped>
.coder-route {
  background: #111111;
  color: #fff;
  padding-block: 6rem;
  scroll-margin-top: 6rem;
}
.coder-route .eyebrow {
  color: var(--color-brand);
}
.coder-route h2 {
  font-weight: 700;
  font-size: clamp(2rem, 3.4vw, 3.2rem);
  line-height: 1.12;
  margin-top: 1rem;
}
.coder-route p {
  color: #b7b7b0;
  line-height: 1.85;
}
.cr-heading {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 4rem;
  align-items: end;
  margin-bottom: 3rem;
}
.cr-heading > p {
  font-size: 1.05rem;
}
.cr-steps {
  display: grid;
  grid-template-columns: repeat(5, 1fr);
  gap: 1rem;
  border-top: 1px solid #34342f;
}
.cr-steps button {
  text-align: left;
  padding: 1.1rem 0.4rem;
  border-top: 2px solid transparent;
  margin-top: -1px;
  font-size: 0.9rem;
  cursor: pointer;
  color: #d8d8d2;
  transition:
    color 0.15s,
    border-color 0.15s;
}
.cr-steps button span {
  display: block;
  font: 0.68rem var(--font-mono);
  color: #8a8a83;
  margin-bottom: 0.6rem;
}
.cr-steps button[aria-pressed="true"] {
  border-color: var(--color-brand);
  color: var(--color-brand);
}
.cr-detail {
  display: grid;
  grid-template-columns: 1.55fr 1fr;
  gap: 3rem;
  align-items: center;
  margin-top: 2rem;
}
.cr-label {
  font: 0.68rem var(--font-mono);
  text-transform: uppercase;
  letter-spacing: 0.08em;
  color: var(--color-brand);
}
.cr-copy h3 {
  font-family: var(--font-heading);
  font-size: 1.55rem;
  font-weight: 600;
  line-height: 1.3;
  margin-block: 1rem;
}
.cr-copy > p {
  font-size: 0.95rem;
}
.cr-copy ul {
  display: grid;
  gap: 0.8rem;
  margin-top: 1.5rem;
}
.cr-copy li {
  display: flex;
  gap: 0.7rem;
  font-size: 0.85rem;
  line-height: 1.6;
  color: #e4e4de;
}
.cr-copy li svg {
  flex-shrink: 0;
  color: var(--color-brand);
  margin-top: 0.2rem;
}
.cr-nav {
  display: flex;
  gap: 0.6rem;
  margin-top: 2rem;
}
.cr-nav button {
  border: 1px solid #45453f;
  border-radius: 999px;
  padding: 0.6rem 1.1rem;
  font-size: 0.8rem;
  cursor: pointer;
}
.cr-nav button:last-child {
  background: var(--color-brand);
  border-color: var(--color-brand);
  color: #0b0b0b;
  font-weight: 600;
}
.cr-nav button:disabled {
  opacity: 0.35;
  cursor: default;
}
.coder-route .cr-caption {
  font-size: 0.72rem;
  line-height: 1.7;
  color: #8a8a83;
  margin-top: 1.5rem;
  max-width: 60rem;
}
.cr-films {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 2.5rem;
  margin-top: 4rem;
  padding-top: 3rem;
  border-top: 1px solid #34342f;
}
.cr-films h3 {
  font-family: var(--font-heading);
  font-weight: 600;
  font-size: 1.15rem;
}
.cr-films > div > p {
  font-size: 0.85rem;
  margin-block: 0.6rem 1.4rem;
}
.cr-films :deep(figcaption) {
  color: #8a8a83;
}
@media (max-width: 1000px) {
  .cr-heading,
  .cr-detail,
  .cr-films {
    grid-template-columns: 1fr;
    gap: 2rem;
  }
}
@media (max-width: 700px) {
  .coder-route {
    padding-block: 4rem;
  }
  .cr-steps {
    display: flex;
    overflow-x: auto;
    gap: 0.4rem;
  }
  .cr-steps button {
    flex: 0 0 auto;
    padding-inline: 0.6rem;
    font-size: 0.8rem;
  }
}
/* The owl and monitor cross the real section edge. */
.coder-route {
  position: relative;
  overflow: visible;
  padding-top: 3.5rem;
  background: #10170f;
}
.cr-heading {
  display: block;
  position: relative;
  min-height: 25rem;
  margin-bottom: 1rem;
}
.cr-heading > div {
  max-width: 42%;
  position: relative;
  z-index: 2;
}
.cr-heading > div > p:last-child {
  font-size: 0.95rem;
  margin-top: 1.4rem;
  color: #a6b69a;
}
.cr-art {
  position: absolute;
  right: -3.7rem;
  top: -11rem;
  width: 66%;
  max-width: none;
  z-index: 1;
}
@media (max-width: 1100px) {
  .coder-route {
    padding-top: 0;
  }
  .cr-heading {
    display: flex;
    flex-direction: column;
    min-height: 0;
    gap: 2rem;
  }
  .cr-heading > div {
    max-width: 100%;
    order: 2;
  }
  .cr-art {
    position: relative;
    right: auto;
    top: auto;
    order: 1;
    width: 100%;
    max-width: 44rem;
    align-self: center;
    margin-top: -4.5rem;
  }
  .cr-heading {
    margin-bottom: 2rem;
  }
}
@media (max-width: 480px) {
  .cr-art {
    width: 112%;
    align-self: center;
    margin-top: -3rem;
  }
  .cr-heading > div {
    padding-top: 0.5rem;
  }
}
</style>
