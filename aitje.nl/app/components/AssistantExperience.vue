<script setup lang="ts">
import { contactLink } from "@/content/site";

const hybrid = ref(false);
const scenario = ref(0);
const knowledgeStep = ref(0);
const taskStep = ref(0);
const scenarios = [
  {
    icon: "library",
    title: "De juiste kennis vinden",
    question: "Wat is onze werkwijze bij een spoedaanvraag?",
    answer:
      "Zoek in de toegestane werkinstructies en krijg een antwoord met verwijzing naar de gebruikte documenten.",
  },
  {
    icon: "pen",
    title: "Van eerste idee naar voorstel",
    question: "Maak van deze notities een helder voorstel.",
    answer:
      "Laat de assistent structuur aanbrengen, een eerste versie schrijven en de toon aanpassen aan de lezer.",
  },
  {
    icon: "repeat",
    title: "Je werkdag voorbereiden",
    question: "Zet iedere werkdag een overzicht voor mij klaar.",
    answer:
      "Plan een terugkerende opdracht met toegestane bronnen. De server voert die op het afgesproken moment uit.",
  },
];
const knowledge = [
  {
    title: "Een bron toevoegen",
    text: "Begin met een handleiding, document of afgesproken bronkoppeling. Voor dit voorbeeld gebruiken we een fictief servicehandboek.",
    label: "Servicehandboek.pdf",
    icon: "file-search",
  },
  {
    title: "Kennis ordenen",
    text: "Groepeer informatie in categorieën en geef belangrijke bronnen meer gewicht. Hier valt de werkinstructie onder Klantenservice.",
    label: "Categorie · Klantenservice",
    icon: "library",
  },
  {
    title: "Toegang instellen",
    text: "Koppel de categorie aan een toegestane rol. Een medewerker gebruikt alleen de kennis die voor die rol beschikbaar is.",
    label: "Rol · Servicemedewerker",
    icon: "shield",
  },
  {
    title: "Een antwoord met herkomst",
    text: "Bij een spoedaanvraag registreer je de melding en neem je contact op met de dienstcoördinator. Controleer de volledige instructie in de bron.",
    label: "Bron · Servicehandboek, § 4.2",
    icon: "message",
  },
];
const tasks = [
  {
    time: "08:55",
    title: "Jij plant de opdracht",
    text: "Iedere werkdag om 09:00: maak een overzicht van de toegestane servicevragen. Jij kiest de bronnen en de opdracht.",
  },
  {
    time: "09:00",
    title: "De server voert uit",
    text: "De taak draait met de rechten van de eigenaar. De server en taakverwerking moeten aanstaan; je browser mag dicht.",
  },
  {
    time: "09:02*",
    title: "Je ontvangt een melding",
    text: "Het resultaat verschijnt als melding, met tekst of een downloadbaar document. Je controleert het voordat je ermee verder werkt.",
  },
];
</script>

<template>
  <div class="assistant-story">
    <nav class="product-jumpnav" aria-label="Op deze productpagina">
      <div class="container-page">
        <a href="#werking">Voor je team</a
        ><a href="#mogelijkheden">Bedrijfskennis</a
        ><a href="#eigen-hardware">Eigen hardware</a
        ><a href="#kennis-rag">Kennis &amp; RAG</a
        ><a href="#tokens-output">Tokens &amp; output</a
        ><a href="#regie">Beheer</a><a href="#prijs">Prijs &amp; installatie</a
        ><a href="#product-vragen">Vragen</a>
      </div>
    </nav>

    <AiStationLabel product="assistant" />

    <AssistantHardware />

    <section id="werking" class="as-section container-page">
      <div class="as-intro">
        <p class="eyebrow text-brand-ink">
          Local AI · on edge · in eigen beheer
        </p>
        <h2>De kennis van je bedrijf.<br />De AI van je bedrijf.</h2>
        <p>
          Een complete AI-werkomgeving voor je team: chat, eigen kennis en
          beheer. Het model en de verwerking draaien lokaal, op jullie apparaat
          of server. Medewerkers openen de Assistent in hun browser; jullie
          bepalen de toegang, modellen en spelregels.
        </p>
      </div>
      <div class="as-workday">
        <div
          class="as-scenarios"
          role="group"
          aria-label="Kies een werkvoorbeeld"
        >
          <button
            v-for="(item, i) in scenarios"
            :key="item.title"
            type="button"
            :aria-pressed="scenario === i"
            aria-controls="as-work-example"
            @click="scenario = i"
          >
            <AppIcon :name="item.icon" :size="23" /><span>{{ item.title }}</span
            ><AppIcon name="arrow-right" :size="18" />
          </button>
        </div>
        <div id="as-work-example" class="as-work-example" aria-live="polite">
          <span class="as-label">Een herkenbare werkvraag</span>
          <p class="as-question">“{{ scenarios[scenario]!.question }}”</p>
          <p>{{ scenarios[scenario]!.answer }}</p>
          <span class="as-caption"
            >Voorbeelden van gebruik; geen live chat.</span
          >
        </div>
      </div>
      <AssistantWorkspace />
      <div class="as-daily-features">
        <div>
          <AppIcon name="message" :size="22" />
          <h3>Schrijven en doorvragen</h3>
          <p>
            Vat samen, herschrijf en werk ideeën uit. Zoek eerdere gesprekken
            terug en bouw voort op je context.
          </p>
        </div>
        <div>
          <AppIcon name="library" :size="22" />
          <h3>Projecten en bestanden</h3>
          <p>
            Bundel gesprekken, instructies en documenten per klant of onderwerp.
            Deel ze binnen de ingestelde rechten.
          </p>
        </div>
        <div>
          <AppIcon name="mic" :size="22" />
          <h3>Ook met je stem</h3>
          <p>
            Dicteer een vraag en laat antwoorden voorlezen, met beschikbare
            spraakdiensten en de juiste browserrechten.
          </p>
        </div>
        <div>
          <AppIcon name="globe" :size="22" />
          <h3>Meertalig samenwerken</h3>
          <p>
            Een interface in Nederlands, Engels, Duits en Frans. Antwoordtaal en
            taalkwaliteit hangen af van je model.
          </p>
        </div>
      </div>
    </section>

    <section id="mogelijkheden" class="as-dark as-overlap as-knowledge-section">
      <div class="container-page">
        <div class="as-split as-feature-intro">
          <div>
            <p class="eyebrow">Jullie kennis, bruikbaar gemaakt</p>
            <h2>Van verspreide documenten<br />naar bruikbare antwoorden.</h2>
            <p>
              Breng bestanden en gekoppelde bronnen samen. Orden kennis, bepaal
              wie erbij mag en geef belangrijke informatie meer gewicht. Je team
              kan ermee werken vanuit de chat.
            </p>
          </div>
          <AssistantArtwork
            class="as-art as-art-v2"
            variant="knowledge"
            scene="categoriebeheer"
            alt="3D-illustratie van de AITJE-uil naast een laptop met het echte kennisbeheer"
          />
        </div>
        <div class="as-knowledge-route">
          <div
            class="as-step-buttons"
            role="group"
            aria-label="Van bron naar antwoord"
          >
            <button
              v-for="(item, i) in knowledge"
              :key="item.title"
              type="button"
              :aria-pressed="knowledgeStep === i"
              aria-controls="as-knowledge-detail"
              @click="knowledgeStep = i"
            >
              <span>0{{ i + 1 }}</span
              >{{ item.title }}
            </button>
          </div>
          <div
            id="as-knowledge-detail"
            class="as-source-answer"
            aria-live="polite"
          >
            <AppIcon :name="knowledge[knowledgeStep]!.icon" :size="26" />
            <div>
              <span class="as-source-label">{{
                knowledge[knowledgeStep]!.label
              }}</span>
              <h3>{{ knowledge[knowledgeStep]!.title }}</h3>
              <p>{{ knowledge[knowledgeStep]!.text }}</p>
            </div>
          </div>
          <p class="as-caption">
            Illustratieve kennisroute met fictieve gegevens; geen live
            modelantwoord.
          </p>
        </div>
        <div class="as-knowledge-detail">
          <div>
            <p class="eyebrow">Een kennisbank waar je op kunt bouwen</p>
            <h3>
              Uploaden is het begin.<br />Bruikbare kennis is het resultaat.
            </h3>
            <p>
              Documenten worden verwerkt tot doorzoekbare passages. De assistent
              haalt bij je vraag relevante, toegestane informatie op en gebruikt
              die als context. Je hoeft het chatmodel daarvoor niet opnieuw te
              trainen.
            </p>
            <ul class="as-knowledge-points">
              <li>
                <AppIcon name="scan" :size="20" />
                <div>
                  <strong>Documenten, tabellen en scans</strong
                  ><span
                    >Verwerk tekst en documentstructuur, met OCR waar nodig.
                    Slecht leesbare scans en complexe tabellen vragen
                    controle.</span
                  >
                </div>
              </li>
              <li>
                <AppIcon name="library" :size="20" />
                <div>
                  <strong>Categorieën, prioriteit en actualiteit</strong
                  ><span
                    >Orden bronnen, geef belangrijke kennis meer gewicht en houd
                    wijzigingen, geldigheid en synchronisatie in de gaten.</span
                  >
                </div>
              </li>
              <li>
                <AppIcon name="shield" :size="20" />
                <div>
                  <strong>Toegang hoort bij de bron</strong
                  ><span
                    >Bepaal welke rollen kennis mogen gebruiken. Lees-, upload-
                    en beheerrechten zijn afzonderlijk in te richten.</span
                  >
                </div>
              </li>
            </ul>
          </div>
          <AssistantMedia
            scene="categoriebeheer"
            title="Kennis ordenen en rollen toewijzen"
          />
        </div>
        <div class="as-knowledge-bottom">
          <div>
            <span>01</span><strong>Bronnen toevoegen</strong>
            <p>
              Uploads en afgesproken koppelingen met opslag, Drive, Microsoft of
              e-mail.
            </p>
          </div>
          <div>
            <span>02</span><strong>Lokaal doorzoekbaar</strong>
            <p>
              Indexeren op betekenis, met documentstructuur en eventueel een
              extra zoekbeoordeling.
            </p>
          </div>
          <div>
            <span>03</span><strong>Antwoorden controleren</strong>
            <p>
              Bronverwijzingen helpen de herkomst terugvinden. Het
              oorspronkelijke document blijft leidend.
            </p>
          </div>
        </div>
      </div>
    </section>

    <AssistantRag />

    <section id="omgeving" class="as-section container-page as-split">
      <div>
        <p class="eyebrow text-brand-ink">Jouw omgeving, jouw modelkeuze</p>
        <h2>Op eigen hardware.<br />Of op een server die past.</h2>
        <p>
          Je laptop of telefoon is de toegang. Het model en de kennisbank
          draaien in de ingerichte omgeving. AITJE helpt bij capaciteit,
          installatie en bereikbaarheid via het eigen netwerk, VPN of beveiligde
          webtoegang.
        </p>
        <p>
          De lokale basis werkt zonder internet als de modellen zijn
          geïnstalleerd en de server en het netwerk beschikbaar zijn. Externe
          bronnen synchroniseren vraagt wel een verbinding.
        </p>
      </div>
      <div class="as-infrastructure">
        <div class="as-toggle" role="group" aria-label="Kies de modelroute">
          <button type="button" :aria-pressed="!hybrid" @click="hybrid = false">
            Lokaal</button
          ><button type="button" :aria-pressed="hybrid" @click="hybrid = true">
            Lokaal + extern
          </button>
        </div>
        <div class="as-flow">
          <div>
            <AppIcon name="layout" :size="25" /><strong>Je browser</strong
            ><span>Laptop · tablet · telefoon</span>
          </div>
          <span class="as-flow-line">↓</span>
          <div class="as-own-environment">
            <AppIcon name="server" :size="28" /><strong
              >Jullie AITJE-omgeving</strong
            ><span>Lokaal model + eigen kennisbank</span>
          </div>
          <template v-if="hybrid"
            ><span class="as-flow-line">↓ optioneel, met toestemming</span>
            <div class="as-external">
              <AppIcon name="globe" :size="24" /><strong
                >Extern model of online hulpmiddel</strong
              ><span>Via internet · eigen voorwaarden en kosten</span>
            </div></template
          >
        </div>
        <p class="as-caption" aria-live="polite">
          {{
            hybrid
              ? "Bij externe functies kunnen de benodigde vraag en context naar die dienst gaan. Modeltoegang en gebruik worden vooraf ingesteld."
              : "De modelverwerking en kennisbank blijven binnen de eigen omgeving. Voor deze lokale route is geen externe AI-aanroep nodig."
          }}
        </p>
      </div>
    </section>

    <AiStationArchitecture product="assistant" />

    <ProductModelRoutes product="assistant" />

    <AssistantAnswerLab />

    <AssistantCostOutput />

    <AssistantExternalPrivacy />

    <section id="regie" class="as-dark as-overlap as-control-section">
      <div class="container-page">
        <div class="as-split as-feature-intro">
          <div>
            <p class="eyebrow">Rollen, modellen en kosten</p>
            <h2>Geef je team ruimte.<br />Houd zelf de regie.</h2>
            <p>
              Bepaal wie welke kennis, modellen en hulpmiddelen mag gebruiken.
              Stel euro- en tokencaps in, bewaak gegevens met guardrails en houd
              zicht op je eigen AI-omgeving.
            </p>
          </div>
          <AssistantArtwork
            class="as-art as-art-v2"
            variant="control"
            scene="admin-modellen"
            alt="3D-illustratie van een server en monitor met de echte AITJE-modelinstellingen"
          />
        </div>
        <AssistantGuardrails />
        <AssistantAdminLab />
        <AssistantAdminMap />
      </div>
    </section>

    <section class="as-section container-page as-split">
      <div>
        <p class="eyebrow text-brand-ink">Voorbereiding die alvast gebeurt</p>
        <h2>Je ochtendoverzicht<br />kan al klaarstaan.</h2>
        <p>
          Plan terugkerende opdrachten met toegestane bronnen. Het resultaat
          verschijnt als melding, met tekst of een downloadbaar document. Ook
          wanneer je browser dicht is.
        </p>
        <p class="as-caption">
          Een mailboxkoppeling en andere externe bronnen worden apart afgestemd.
          Ze vragen een verbinding en de juiste toegangsrechten.
        </p>
      </div>
      <div class="as-task">
        <span class="as-label">Voorbeeld · het serviceoverzicht</span>
        <div
          class="as-timeline"
          role="group"
          aria-label="Stappen van een geplande taak"
        >
          <button
            v-for="(item, i) in tasks"
            :key="item.time"
            type="button"
            :aria-pressed="taskStep === i"
            aria-controls="as-task-detail"
            @click="taskStep = i"
          >
            <span>{{ item.time }}</span
            >{{ item.title }}
          </button>
        </div>
        <div id="as-task-detail" aria-live="polite">
          <h3>{{ tasks[taskStep]!.title }}</h3>
          <p>{{ tasks[taskStep]!.text }}</p>
        </div>
        <p class="as-caption">
          Illustratief scenario. *Tijdstip van de melding is een voorbeeld, geen
          gemeten doorlooptijd.
        </p>
      </div>
    </section>

    <section class="as-product-screens container-page">
      <div>
        <p class="eyebrow text-brand-ink">Van document naar dagelijks werk</p>
        <h2>Chat. Kennis. Beheer.<br />Eén samenhangende omgeving.</h2>
        <p>
          Een bron in de kennisbank wordt bruikbaar in de chat. Een rol bepaalt
          wie ermee mag werken. Een geplande taak gebruikt dezelfde afgesproken
          rechten.
        </p>
      </div>
      <div class="as-screen-pair">
        <AssistantMedia
          scene="kennis-documenten"
          title="Documenten in je kennisbank"
        /><AssistantMedia
          scene="taken-overzicht"
          title="Geplande taken en resultaten"
        />
      </div>
    </section>

    <AssistantOwnership />
  </div>
</template>

<style scoped>
.as-section {
  padding-block: 6rem;
  scroll-margin-top: 6rem;
}
.assistant-story h2 {
  font-size: clamp(2rem, 3.3vw, 3.1rem);
  line-height: 1.12;
  font-weight: 700;
  margin-block: 1.1rem 1.5rem;
}
.assistant-story h3 {
  font-weight: 600;
  font-size: 1.1rem;
}
.assistant-story p {
  line-height: 1.8;
  color: var(--color-muted);
}
.as-intro {
  max-width: 47rem;
  margin-bottom: 3rem;
}
.as-intro > p:last-child,
.as-split > div > p:not(.eyebrow):not(.as-caption) {
  font-size: 1.06rem;
}
.as-split {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 4rem;
  align-items: center;
}
.as-split > div {
  min-width: 0;
}
.as-split > div > p + p {
  margin-top: 1rem;
}
.as-label,
.as-source-label {
  font-family: var(--font-mono);
  font-size: 0.7rem;
  letter-spacing: 0.07em;
  text-transform: uppercase;
}
.as-caption,
.assistant-story figcaption {
  display: block;
  font-size: 0.75rem !important;
  line-height: 1.65 !important;
  color: var(--color-muted);
  margin-top: 1rem;
}
.as-workday {
  display: grid;
  grid-template-columns: 1fr 1.2fr;
  border: 1px solid var(--color-line);
  border-radius: 1.5rem;
  overflow: hidden;
  background: white;
}
.as-scenarios {
  padding: 1rem;
  display: grid;
  align-content: center;
  gap: 0.5rem;
}
.as-scenarios button {
  display: flex;
  align-items: center;
  gap: 1rem;
  text-align: left;
  padding: 1.3rem;
  border-radius: 0.8rem;
  font-weight: 600;
}
.as-scenarios button span {
  flex: 1;
}
.assistant-story button {
  cursor: pointer;
  transition:
    background 0.15s,
    color 0.15s;
}
.as-scenarios button[aria-pressed="true"] {
  background: var(--color-brand);
}
.as-work-example {
  background: var(--color-sand);
  padding: 2.5rem;
}
.assistant-story .as-question {
  font-family: var(--font-heading);
  font-size: 1.55rem;
  color: var(--color-ink);
  font-weight: 600;
  line-height: 1.5;
  margin-block: 1.2rem;
}
.as-dark {
  background: #111310;
  color: #fff;
  padding-block: 5rem;
  scroll-margin-top: 7rem;
}
.as-dark p,
.as-dark figcaption {
  color: #b9bcb3;
}
.as-dark .eyebrow,
.as-dark .as-source-label {
  color: var(--color-brand);
}
.as-overlap {
  margin-top: 5rem;
}
.as-feature-intro {
  position: relative;
  min-height: 18rem;
}
.as-art {
  position: relative;
  margin-top: -10rem;
  pointer-events: none;
}
.as-art figcaption {
  text-align: center;
  margin-top: -1.5rem;
  position: relative;
}
.as-knowledge-route {
  margin-top: 3rem;
  border-top: 1px solid #383c32;
  padding-top: 2rem;
}
.as-step-buttons {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 1rem;
}
.as-step-buttons button {
  text-align: left;
  border-bottom: 2px solid #414739;
  padding: 1rem 0.5rem;
  font-size: 0.9rem;
}
.as-step-buttons button span {
  display: block;
  color: #909887;
  font-family: var(--font-mono);
  font-size: 0.7rem;
  margin-bottom: 0.8rem;
}
.as-step-buttons button[aria-pressed="true"] {
  border-color: var(--color-brand);
  color: var(--color-brand);
}
.as-source-answer {
  display: flex;
  gap: 1.5rem;
  align-items: flex-start;
  max-width: 55rem;
  min-height: 12rem;
  padding-block: 2rem;
}
.as-source-answer > svg {
  color: var(--color-brand);
  flex-shrink: 0;
  margin-top: 0.4rem;
}
.as-source-answer h3 {
  margin: 0.7rem 0;
}
.as-toggle {
  display: flex;
  flex-wrap: wrap;
  gap: 0.35rem;
  background: #0b0b0b09;
  padding: 0.35rem;
  border-radius: 0.9rem;
}
.as-toggle button {
  padding: 0.7rem 1rem;
  border-radius: 0.65rem;
  font-size: 0.85rem;
  flex: 1;
}
.as-toggle button[aria-pressed="true"] {
  background: var(--color-brand);
  color: #111;
  font-weight: 600;
}
.as-infrastructure,
.as-task {
  border: 1px solid var(--color-line);
  border-radius: 1.5rem;
  padding: 2rem;
  background: #fff;
}
.as-flow {
  display: flex;
  align-items: center;
  flex-direction: column;
  padding-top: 1.5rem;
  gap: 0.75rem;
}
.as-flow > div {
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  gap: 0.6rem;
  padding: 1rem;
  width: 100%;
}
.as-flow > div > span {
  font-size: 0.8rem;
  color: var(--color-muted);
}
.as-flow .as-own-environment {
  background: #f5f4ec;
  border: 1px solid #d9d8c5;
  border-radius: 1rem;
}
.as-flow .as-external {
  border: 1px dashed #c6a200;
  border-radius: 1rem;
}
.as-flow-line {
  font-size: 0.75rem;
  color: var(--color-brand-ink);
}
.as-timeline {
  display: grid;
  gap: 0.5rem;
  margin-block: 1.5rem;
}
.as-timeline button {
  padding: 1rem;
  display: flex;
  align-items: center;
  gap: 1rem;
  text-align: left;
  border-radius: 0.75rem;
  background: var(--color-page);
  font-size: 0.9rem;
}
.as-timeline button span {
  font-family: var(--font-mono);
  font-size: 0.75rem;
}
.as-timeline button[aria-pressed="true"] {
  background: var(--color-brand);
}
.as-task #as-task-detail {
  min-height: 10rem;
}
.as-task h3 {
  margin-bottom: 1rem;
}
@media (min-width: 1000px) {
  .as-feature-intro > div {
    position: relative;
    z-index: 1;
  }
  .as-art {
    margin-right: -2rem;
  }
  .as-dark .as-feature-intro {
    gap: 1rem;
  }
}
@media (max-width: 900px) {
  .as-section {
    padding-block: 4rem;
  }
  .as-split {
    grid-template-columns: 1fr;
    gap: 2.5rem;
  }
  .as-art {
    grid-row: 1;
    max-width: 34rem;
    width: 100%;
    margin: -8rem auto 1rem;
  }
  .as-feature-intro {
    gap: 1rem;
  }
  .as-dark {
    padding-block: 3rem;
  }
  .as-overlap {
    margin-top: 5rem;
  }
  .as-workday {
    grid-template-columns: 1fr;
  }
  .as-step-buttons {
    grid-template-columns: repeat(2, 1fr);
    gap: 0.5rem;
  }
}
@media (max-width: 480px) {
  .as-section {
    padding-block: 3rem;
  }
  .as-work-example {
    padding: 1.5rem;
  }
  .as-scenarios button {
    padding: 1rem;
  }
  .as-art {
    margin-top: -6rem;
  }
  .as-overlap {
    margin-top: 4rem;
  }
  .as-infrastructure,
  .as-task {
    padding: 1.25rem;
  }
  .as-toggle button {
    padding: 0.65rem 0.5rem;
    font-size: 0.75rem;
  }
  .as-source-answer {
    min-height: 17rem;
  }
  .as-task #as-task-detail {
    min-height: 12rem;
  }
}
@media (prefers-reduced-motion: reduce) {
  .assistant-story button {
    transition: none;
  }
}

.as-daily-features {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 2rem;
  margin-top: 3rem;
  padding-top: 2rem;
  border-top: 1px solid var(--color-line);
}
.as-daily-features h3 {
  margin: 1rem 0 0.7rem;
  font-size: 0.95rem;
}
.as-daily-features p {
  font-size: 0.82rem;
}
.as-art-v2 {
  width: 125%;
  max-width: none;
  margin-left: -8%;
  margin-top: -7rem;
}
.as-knowledge-detail {
  display: grid;
  grid-template-columns: 1fr 1.15fr;
  gap: 3rem;
  align-items: center;
  margin-top: 2.5rem;
  padding-top: 2rem;
  border-top: 1px solid #3b4332;
}
.as-knowledge-detail h3 {
  font-size: 1.8rem;
  line-height: 1.3;
  margin-block: 1rem;
}
.as-knowledge-detail > div > p {
  font-size: 0.9rem;
}
.as-knowledge-points {
  margin-top: 1.5rem;
  display: grid;
  gap: 1.4rem;
}
.as-knowledge-points li {
  display: flex;
  gap: 0.8rem;
}
.as-knowledge-points svg {
  flex-shrink: 0;
  color: var(--color-brand);
  margin-top: 0.1rem;
}
.as-knowledge-points strong {
  display: block;
  font-size: 0.85rem;
}
.as-knowledge-points span {
  display: block;
  font-size: 0.8rem;
  line-height: 1.8;
  color: #aebb9f;
  margin-top: 0.4rem;
}
.as-knowledge-bottom {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 2rem;
  margin-top: 3rem;
  border-top: 1px solid #3b4332;
  padding-top: 2rem;
}
.as-knowledge-bottom > div > span {
  font: 0.65rem var(--font-mono);
  color: var(--color-brand);
  display: block;
  margin-bottom: 1rem;
}
.as-knowledge-bottom strong {
  font-size: 0.9rem;
}
.as-knowledge-bottom p {
  font-size: 0.8rem;
  margin-top: 0.5rem;
}
.as-knowledge-detail :deep(figcaption) {
  color: #abb69d;
}
.as-product-screens {
  padding-bottom: 5rem;
}
.as-product-screens > div:first-child {
  max-width: 43rem;
}
.as-screen-pair {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 2rem;
  margin-top: 2.5rem;
}
@media (max-width: 1000px) {
  .as-daily-features {
    grid-template-columns: 1fr 1fr;
  }
  .as-knowledge-detail {
    grid-template-columns: 1fr;
  }
  .as-art-v2 {
    width: 100%;
    max-width: 40rem;
    margin: -7rem auto 0;
  }
}
@media (max-width: 600px) {
  .as-daily-features,
  .as-knowledge-bottom,
  .as-screen-pair {
    grid-template-columns: 1fr;
  }
  .as-art-v2 {
    margin-top: -5.5rem;
  }
  .as-screen-pair {
    gap: 2.5rem;
  }
}

/* Physical foregrounds cross the actual section boundary, independent of text height. */
.as-overlap {
  margin-top: 0;
  position: relative;
  overflow: visible;
  padding-top: 4rem;
}
.as-feature-intro {
  display: block;
  min-height: 23rem;
  padding-right: 54%;
  position: relative;
}
.as-feature-intro > div {
  position: relative;
  z-index: 3;
}
.as-feature-intro > .as-art-v2 {
  position: absolute;
  right: -4rem;
  top: -13.5rem;
  width: 64%;
  max-width: none;
  margin: 0;
  z-index: 2;
  pointer-events: auto;
}
.as-control-section .as-feature-intro > .as-art-v2 {
  top: -10.5rem;
}
.as-knowledge-section .as-knowledge-route {
  margin-top: 1rem;
}
@media (max-width: 1100px) {
  .as-overlap {
    padding-top: 0;
  }
  .as-feature-intro {
    display: flex;
    flex-direction: column;
    min-height: 0;
    padding-right: 0;
  }
  .as-feature-intro > .as-art-v2 {
    position: relative;
    top: auto;
    right: auto;
    width: 100%;
    max-width: 40rem;
    order: -1;
    margin: -7.5rem auto 0.5rem;
  }
  .as-control-section .as-feature-intro > .as-art-v2 {
    top: auto;
    margin-top: -5.5rem;
  }
  .as-feature-intro > div {
    width: 100%;
  }
  .as-knowledge-route {
    margin-top: 2rem;
  }
}
@media (max-width: 480px) {
  .as-feature-intro > .as-art-v2 {
    margin-top: -4.5rem;
  }
  .as-control-section .as-feature-intro > .as-art-v2 {
    margin-top: -3rem;
  }
  .as-feature-intro {
    gap: 1.5rem;
  }
}
</style>
