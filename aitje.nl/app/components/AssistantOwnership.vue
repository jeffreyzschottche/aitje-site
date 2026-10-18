<script setup lang="ts">
import { contactLink } from "@/content/site";
const workflow = ref(0);
const flows = [
  {
    name: "Eigen werkwijze",
    icon: "pen",
    scene: "admin-skills",
    title: "Zo werken wij. Zo helpt de assistent.",
    text: "Geef terugkerende opdrachten een vaste aanpak. Skills bewaren instructies voor bijvoorbeeld een voorstel, klantantwoord of overlegverslag. Je bepaalt welke rollen ze mogen gebruiken.",
    chips: ["Vaste structuur", "Jullie toon", "Herbruikbare instructies"],
    result: "Een voorstel volgens jullie aanpak",
  },
  {
    name: "Eigen focus",
    icon: "compass",
    scene: "admin-modes",
    title: "Een andere taak. Een passende instelling.",
    text: "Met modes stem je de assistent af op een soort werk. Kies instructies, modelvoorkeuren, kennis en hulpmiddelen die bij de taak passen. De gebruiker werkt binnen de beschikbare rolrechten.",
    chips: ["Modelvoorkeur", "Instructies", "Toegestane hulpmiddelen"],
    result: "Een passende werkstand voor je team",
  },
  {
    name: "Eigen omgeving",
    icon: "server",
    scene: "admin-netwerk",
    title: "De toegang op orde. De verwerking bij jullie.",
    text: "Maak de ingerichte omgeving bereikbaar voor je team via het eigen netwerk, VPN of beveiligde webtoegang. Chat, kennisbank en lokaal model staan bij de organisatie of op de afgesproken server.",
    chips: [
      "Eigen apparaat of server",
      "Browsertoegang",
      "Beheerde bereikbaarheid",
    ],
    result: "Je team werkt in de eigen AI-omgeving",
  },
];
const flow = computed(() => flows[workflow.value]!);
const delivery = ref(0);
const deliveries = [
  {
    name: "Toepassing",
    icon: "message",
    title: "Begin bij werk dat ertoe doet.",
    text: "We brengen de gebruikers, werkvragen en gegevensstromen in kaart. Je ziet welke kennis nodig is en welke onderdelen lokaal of online werken.",
    label: "Jullie vraagset",
    items: [
      "Een vraag uit je eigen kennis",
      "Een tekst of document uitwerken",
      "Een terugkerende voorbereiding",
    ],
  },
  {
    name: "Omgeving",
    icon: "server",
    title: "De rekenkracht op de juiste plek.",
    text: "AITJE stemt apparaat of server, modellen en bereikbaarheid op het gebruik af. Bestaande geschikte hardware kan het vertrekpunt zijn.",
    label: "Jullie omgeving",
    items: [
      "Lokaal model en kennisindex",
      "Netwerk en browsertoegang",
      "Passende capaciteit voor gelijktijdig gebruik",
    ],
  },
  {
    name: "Inrichting",
    icon: "shield",
    title: "Kennis, rechten en regels samen.",
    text: "We richten de afgesproken bronnen en rollen in. Je bepaalt welke modellen, functies en guardrails voor jullie werk gelden.",
    label: "Jullie inrichting",
    items: [
      "Categorieën en kennisrechten",
      "Modellen en gebruikslimieten",
      "Guardrails en privacybeleid",
    ],
  },
  {
    name: "Overdracht",
    icon: "handshake",
    title: "Een omgeving waar je mee verder kunt.",
    text: "We testen met jullie werkvragen, geven uitleg en spreken nazorg af. Uitgebreide kennisinrichting, koppelingen en onderhoud worden apart begroot.",
    label: "Jullie oplevering",
    items: [
      "Antwoord en bron controleren",
      "Wachttijd en gelijktijdig gebruik beoordelen",
      "Uitleg en afspraken voor beheer",
    ],
  },
];
const stage = computed(() => deliveries[delivery.value]!);
</script>
<template>
  <div class="assistant-ownership">
    <section class="ao-workflows">
      <div class="container-page">
        <div class="ao-heading">
          <p class="eyebrow text-brand-ink">
            Een assistent die past bij je organisatie
          </p>
          <h2>Jullie werkwijze.<br />Jullie eigen AI-omgeving.</h2>
          <p>
            Een eigen assistent krijgt waarde door de inrichting. Je combineert
            bedrijfskennis, instructies en hulpmiddelen met de grenzen die
            jullie nodig hebben.
          </p>
        </div>
        <div class="ao-tabs" role="group" aria-label="Bekijk de inrichting">
          <button
            v-for="(item, i) in flows"
            :key="item.name"
            type="button"
            :aria-pressed="workflow === i"
            aria-controls="ao-workflow"
            @click="workflow = i"
          >
            <AppIcon :name="item.icon" :size="20" />{{ item.name }}
          </button>
        </div>
        <div class="ao-workflow-grid" id="ao-workflow">
          <AssistantMedia
            :key="flow.scene"
            :scene="flow.scene"
            :title="flow.name"
          />
          <div class="ao-workflow-copy">
            <h3>{{ flow.title }}</h3>
            <p>{{ flow.text }}</p>
            <div class="ao-recipe">
              <span class="ao-small-label"
                >Van inrichting naar dagelijks werk</span
              >
              <div class="ao-recipe-source">
                <AppIcon :name="flow.icon" :size="22" /><strong>{{
                  flow.name
                }}</strong>
              </div>
              <span class="ao-connector" aria-hidden="true">↓</span>
              <div class="ao-recipe-engine">
                <AppIcon name="bot" :size="29" /><strong
                  >AITJE Assistent</strong
                >
                <div>
                  <span v-for="chip in flow.chips" :key="chip">{{ chip }}</span>
                </div>
              </div>
              <span class="ao-connector" aria-hidden="true">↓</span>
              <div class="ao-recipe-result">
                <AppIcon name="check" :size="18" />{{ flow.result }}
              </div>
            </div>
          </div>
        </div>
        <div class="ao-custom">
          <AppIcon name="plug" :size="30" />
          <div>
            <h3>Je bestaande systemen kunnen meedoen.</h3>
            <p>
              Uploads en koppelingen kunnen lokale opslag, Drive, Microsoft,
              mail of een eigen proces ontsluiten. Per bron stemmen we toegang,
              synchronisatie en eventuele maatwerkontwikkeling af. Skills geven
              instructies; koppelingen geven toegestane functies.
            </p>
          </div>
          <UiButton to="/diensten/aitje-custom" variant="secondary" arrow
            >Bespreek jullie toepassing</UiButton
          >
        </div>
      </div>
    </section>
    <section class="ao-edge">
      <div class="container-page ao-edge-grid">
        <div>
          <p class="eyebrow">Local AI · on edge · on-premise</p>
          <h2>De AI draait waar<br />jullie haar nodig hebben.</h2>
          <p>
            Op een eigen apparaat, in jullie serverruimte of op een afgesproken
            serveromgeving. Het lokale model en de kennisverwerking draaien
            daar. Je laptop en telefoon zijn de ingang.
          </p>
          <div class="ao-edge-tags">
            <span><AppIcon name="server" :size="16" />Eigen rekenomgeving</span
            ><span><AppIcon name="library" :size="16" />Eigen kennisbank</span
            ><span
              ><AppIcon name="shield" :size="16" />Eigen toegangsbeleid</span
            >
          </div>
          <p class="ao-edge-note">
            Met geïnstalleerde lokale modellen en ingelezen kennis blijft de
            lokale basis bruikbaar zonder internet, zolang server en netwerk
            beschikbaar zijn. Externe modellen, websearch en cloudsync hebben
            een verbinding nodig.
          </p>
        </div>
        <div class="ao-edge-visual">
          <span class="ao-small-label">In eigen beheer</span>
          <div class="ao-edge-core">
            <div class="ao-server-tower" aria-hidden="true">
              <i /><i /><i /><span />
            </div>
            <div>
              <strong>Jullie AITJE</strong
              ><span>Model + kennis + verwerking</span>
            </div>
          </div>
          <div class="ao-edge-wire" aria-hidden="true" />
          <div class="ao-edge-clients">
            <div><AppIcon name="layout" :size="31" /><span>Werkplek</span></div>
            <div><AppIcon name="phone" :size="31" /><span>Onderweg</span></div>
            <div><AppIcon name="users" :size="31" /><span>Je team</span></div>
          </div>
          <div class="ao-control-band">
            <AppIcon name="shield" :size="19" />Rollen · modellen · caps ·
            guardrails
          </div>
        </div>
      </div>
    </section>
    <section class="ao-delivery container-page">
      <div class="ao-heading">
        <p class="eyebrow text-brand-ink">
          Van eerste vraag tot eigen AI-werkplek
        </p>
        <h2>AITJE brengt het samen.<br />Jullie gaan ermee werken.</h2>
        <p>
          We kiezen en testen de configuratie op jullie toepassingen.
          Antwoordkwaliteit, brongebruik en wachttijd beoordelen we met
          representatief werk en passend gelijktijdig gebruik.
        </p>
      </div>
      <div
        class="ao-delivery-tabs"
        role="group"
        aria-label="Bekijk het installatieproces"
      >
        <button
          v-for="(item, i) in deliveries"
          :key="item.name"
          type="button"
          :aria-pressed="delivery === i"
          aria-controls="ao-delivery-detail"
          @click="delivery = i"
        >
          <span>0{{ i + 1 }}</span
          ><AppIcon :name="item.icon" :size="22" /><strong>{{
            item.name
          }}</strong>
        </button>
      </div>
      <div class="ao-delivery-detail" id="ao-delivery-detail">
        <div>
          <h3>{{ stage.title }}</h3>
          <p>{{ stage.text }}</p>
          <UiButton
            :to="contactLink('demo', 'aitje-assistent')"
            arrow
            class="mt-6"
            >Bespreek jullie eigen AI-omgeving</UiButton
          >
        </div>
        <div class="ao-delivery-board">
          <span class="ao-small-label">{{ stage.label }}</span>
          <div v-for="(item, i) in stage.items" :key="item">
            <span>0{{ i + 1 }}</span
            ><strong>{{ item }}</strong
            ><AppIcon name="check" :size="18" />
          </div>
          <p>Vooraf afstemmen. Inrichten. Samen controleren.</p>
        </div>
      </div>
    </section>
  </div>
</template>
<style scoped>
.ao-workflows {
  padding-block: 5rem;
  background: var(--color-sand);
}
.ao-heading {
  max-width: 48rem;
  margin-bottom: 2.5rem;
}
.assistant-ownership h2 {
  font-weight: 700;
  font-size: clamp(2rem, 3.5vw, 3.25rem);
  line-height: 1.12;
  margin-block: 1rem 1.5rem;
}
.ao-heading > p:last-child {
  font-size: 1.05rem;
  line-height: 1.85;
  color: var(--color-muted);
}
.ao-tabs {
  display: flex;
  gap: 0.5rem;
  border-bottom: 1px solid #cccfc3;
  margin-bottom: 2rem;
  overflow-x: auto;
}
.ao-tabs button {
  display: flex;
  gap: 0.6rem;
  align-items: center;
  padding: 1rem 1.2rem;
  border-bottom: 3px solid transparent;
  white-space: nowrap;
  font-size: 0.82rem;
  cursor: pointer;
}
.ao-tabs button[aria-pressed="true"] {
  border-color: #111;
  font-weight: 600;
}
.ao-workflow-grid {
  display: grid;
  grid-template-columns: 1.15fr 1fr;
  gap: 3rem;
  align-items: start;
}
.ao-workflow-copy h3 {
  font-weight: 600;
  font-size: 1.6rem;
  line-height: 1.35;
}
.ao-workflow-copy > p {
  font-size: 0.95rem;
  line-height: 1.9;
  color: var(--color-muted);
  margin-top: 1rem;
}
.ao-recipe {
  padding: 1.5rem;
  background: #fff;
  border: 1px solid #d7dbcd;
  border-radius: 1.4rem;
  margin-top: 1.5rem;
}
.ao-small-label {
  font: 0.65rem var(--font-mono);
  text-transform: uppercase;
  letter-spacing: 0.08em;
  color: #697455;
}
.ao-recipe-source,
.ao-recipe-result {
  display: flex;
  gap: 0.7rem;
  align-items: center;
  border: 1px solid #dce0d4;
  padding: 1rem;
  border-radius: 0.8rem;
  font-size: 0.85rem;
  margin-top: 1rem;
}
.ao-connector {
  display: block;
  text-align: center;
  color: #9d860e;
  padding-block: 0.5rem;
}
.ao-recipe-engine {
  border: 1px solid #697443;
  border-radius: 1rem;
  background: #eef0e5;
  padding: 1.2rem;
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  gap: 0.7rem;
}
.ao-recipe-engine > div {
  display: flex;
  gap: 0.4rem;
  flex-wrap: wrap;
  width: 100%;
  margin-top: 0.5rem;
}
.ao-recipe-engine > div > span {
  font-size: 0.65rem;
  border: 1px solid #c8d0b5;
  padding: 0.3rem 0.5rem;
  border-radius: 0.4rem;
}
.ao-recipe-result {
  margin: 0;
  background: #f9f5df;
  border-color: #e1d39c;
}
.ao-custom {
  display: flex;
  gap: 1.5rem;
  align-items: center;
  padding: 2rem 0 0;
  border-top: 1px solid #ccd0c1;
  margin-top: 3rem;
}
.ao-custom > svg {
  flex-shrink: 0;
}
.ao-custom > div {
  flex: 1;
  min-width: 0;
}
.ao-custom h3 {
  font-size: 1.1rem;
  font-weight: 600;
}
.ao-custom p {
  font-size: 0.85rem;
  line-height: 1.85;
  color: var(--color-muted);
  margin-top: 0.7rem;
}
.ao-edge {
  background: #192313;
  color: #fff;
  padding-block: 5rem;
}
.ao-edge .eyebrow {
  color: #facc15;
}
.ao-edge-grid {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 4rem;
  align-items: center;
}
.ao-edge p {
  color: #bac8ad;
  line-height: 1.9;
  font-size: 0.98rem;
}
.ao-edge-tags {
  display: flex;
  gap: 0.5rem;
  flex-wrap: wrap;
  margin-top: 1.5rem;
}
.ao-edge-tags span {
  display: flex;
  align-items: center;
  gap: 0.5rem;
  border: 1px solid #4c603a;
  padding: 0.55rem 0.7rem;
  border-radius: 0.6rem;
  font-size: 0.68rem;
}
.ao-edge .ao-edge-note {
  font-size: 0.75rem;
  margin-top: 1.5rem;
  color: #a0b18e;
}
.ao-edge-visual {
  padding: 2rem;
  border: 1px solid #607246;
  border-radius: 1.5rem;
  background:
    radial-gradient(ellipse at 50% 35%, #475c24, transparent 65%), #141e0e;
  box-shadow: inset 0 0 60px #050a0440;
}
.ao-edge-visual > .ao-small-label {
  color: #cbdbac;
}
.ao-edge-core {
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 2rem;
  padding: 2rem 0 1rem;
}
.ao-server-tower {
  transform: perspective(550px) rotateY(-18deg);
  width: 95px;
  height: 140px;
  border: 2px solid #78865e;
  border-radius: 0.8rem;
  background: linear-gradient(100deg, #454e36, #121a0e);
  box-shadow: 15px 15px 30px #0005;
  padding: 1rem;
  position: relative;
}
.ao-server-tower i {
  display: block;
  height: 12px;
  border-radius: 0.2rem;
  border: 1px solid #718159;
  background: repeating-linear-gradient(90deg, #222c19 0 2px, #525e40 2px 3px);
  margin-bottom: 0.6rem;
}
.ao-server-tower > span {
  position: absolute;
  bottom: 1rem;
  left: 1rem;
  width: 6px;
  height: 6px;
  border-radius: 50%;
  background: #facc15;
  box-shadow: 0 0 12px #facc15;
}
.ao-edge-core strong {
  font: 600 1.6rem var(--font-heading);
}
.ao-edge-core > div:last-child > span {
  display: block;
  margin-top: 0.6rem;
  font-size: 0.72rem;
  color: #b5c59e;
}
.ao-edge-wire {
  height: 2.5rem;
  width: 1px;
  background: #b6c76b;
  margin: auto;
}
.ao-edge-clients {
  display: flex;
  justify-content: space-around;
  border-top: 1px solid #647a44;
  padding-top: 1.5rem;
}
.ao-edge-clients > div {
  display: grid;
  justify-items: center;
  gap: 0.7rem;
  font-size: 0.7rem;
  color: #c2d4aa;
}
.ao-control-band {
  display: flex;
  gap: 0.6rem;
  align-items: center;
  justify-content: center;
  border-top: 1px solid #425631;
  margin-top: 1.8rem;
  padding-top: 1.2rem;
  color: #d4e2bb;
  font-size: 0.73rem;
}
.ao-delivery {
  padding-block: 5rem;
}
.ao-delivery-tabs {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 0.7rem;
}
.ao-delivery-tabs button {
  display: flex;
  gap: 0.8rem;
  align-items: center;
  text-align: left;
  border: 1px solid #d6dccc;
  background: #eef0e9;
  padding: 1.2rem;
  border-radius: 1rem;
  cursor: pointer;
  font-size: 0.8rem;
}
.ao-delivery-tabs button > span {
  font: 0.65rem var(--font-mono);
  color: #7a866a;
}
.ao-delivery-tabs button[aria-pressed="true"] {
  border-color: #839259;
  background: #e6edce;
}
.ao-delivery-detail {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 4rem;
  align-items: center;
  padding-top: 2.5rem;
}
.ao-delivery-detail h3 {
  font-size: 1.8rem;
  font-weight: 600;
  line-height: 1.3;
}
.ao-delivery-detail > div > p {
  font-size: 0.95rem;
  line-height: 1.85;
  color: var(--color-muted);
  margin-top: 1rem;
}
.ao-delivery-board {
  background: #f0f2e9;
  border: 1px solid #cfd9bd;
  border-radius: 1.25rem;
  padding: 1.5rem;
}
.ao-delivery-board > div {
  display: flex;
  gap: 0.8rem;
  align-items: center;
  padding: 1.1rem 0.7rem;
  background: #fff;
  margin-top: 0.7rem;
  border: 1px solid #dce2d2;
  border-radius: 0.7rem;
  font-size: 0.8rem;
}
.ao-delivery-board > div > span {
  font: 0.65rem var(--font-mono);
  color: #7f8d6d;
}
.ao-delivery-board svg {
  margin-left: auto;
  flex-shrink: 0;
  color: #6f813d;
}
.ao-delivery-board > p {
  font-size: 0.7rem !important;
}
@media (max-width: 1000px) {
  .ao-workflow-grid,
  .ao-edge-grid,
  .ao-delivery-detail {
    grid-template-columns: 1fr;
    gap: 2rem;
  }
  .ao-custom {
    flex-wrap: wrap;
  }
  .ao-delivery-tabs {
    grid-template-columns: 1fr 1fr;
  }
  .ao-edge-visual {
    max-width: 40rem;
    width: 100%;
    margin: auto;
  }
}
@media (max-width: 480px) {
  .ao-workflows,
  .ao-edge,
  .ao-delivery {
    padding-block: 3.5rem;
  }
  .ao-tabs button {
    padding: 0.9rem 0.6rem;
    font-size: 0.72rem;
  }
  .ao-edge-visual {
    padding: 1.2rem;
  }
  .ao-edge-core {
    gap: 1rem;
  }
  .ao-edge-core strong {
    font-size: 1.25rem;
  }
  .ao-delivery-tabs button {
    flex-wrap: wrap;
    padding: 0.9rem;
  }
  .ao-delivery-tabs button strong {
    width: 100%;
  }
  .ao-delivery-tabs button svg {
    margin-left: auto;
  }
}
</style>
