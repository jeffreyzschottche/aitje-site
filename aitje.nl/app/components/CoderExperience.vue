<script setup lang="ts">
import { contactLink } from "@/content/site";

const mode = ref(0);
const modes = [
  {
    icon: "workflow",
    title: "Taken voor de agent",
    where: "In de web-app van jullie omgeving",
    question: "Repareer de btw-afronding en zorg dat alle tests slagen.",
    answer:
      "Je geeft een taak in gewone taal. De agent werkt zelfstandig in een eigen kopie van de repository en legt het resultaat ter review voor. Geschikt voor tests, bugs, kleine features en dependency-updates.",
  },
  {
    icon: "terminal",
    title: "Een agent in je terminal of editor",
    where: "Claude Code, OpenCode, Codex, Aider, Cline",
    question: "Leg uit hoe de CSV-export werkt en voeg een kolom toe.",
    answer:
      "De coding agent die je team al gebruikt, praat met jullie eigen model-endpoint op hardware, een server of in de cloud. Jij blijft in de loop en keurt elke stap goed op de manier van je eigen tool.",
  },
  {
    icon: "code",
    title: "Aanvullen en vragen tijdens het typen",
    where: "Continue, Zed en andere editors",
    question: "Schrijf de docstring voor deze functie.",
    answer:
      "Een klein, snel model vult aan terwijl je typt. Voor vragen en uitleg gebruik je het grotere model. Beide staan in jullie modelomgeving klaar.",
  },
];
const screen = ref(0);
const screenDevice = ref<"desktop" | "phone">("desktop");
const screenTheme = ref<"light" | "dark">("dark");
const screens = [
  {
    name: "Nieuwe taak",
    icon: "plus",
    shot: "composer-leeg",
    path: "/",
    title: "Wat wil je laten doen?",
    text: "Eén invoerveld, de repository en startbranch ernaast en voorbeeldtaken eronder. Links staat wat klaar is voor review.",
  },
  {
    name: "Een taak",
    icon: "workflow",
    shot: "taak-resultaat",
    path: "/runs",
    title: "Het verloop van de agent, stap voor stap",
    text: "De opdracht, alles wat de agent heeft bekeken en gedraaid, en onderaan de knoppen waarmee jij beslist.",
  },
  {
    name: "Wachtrij",
    icon: "repeat",
    shot: "wachtrij-bezig",
    path: "/queue",
    title: "Wat wacht, wat draait en wat is ingepland",
    text: "Zet taken in een andere volgorde, pauzeer de wachtrij of plan een taak elke werkdag of week in.",
  },
  {
    name: "Instellingen",
    icon: "wrench",
    shot: "skills",
    path: "/instellingen/skills",
    title: "Repositories, skills, koppelingen en budgetten",
    text: "Hier bepaal je in welke code de agent werkt, met welke werkwijze en binnen welke grenzen.",
  },
];
const view = computed(() => screens[screen.value]!);
const hasPhone = computed(() =>
  ["composer-leeg", "taak-resultaat"].includes(view.value.shot),
);
watch(screen, () => {
  if (!hasPhone.value) screenDevice.value = "desktop";
});

const online = ref(false);
const flows = [
  {
    what: "Opdrachten en code",
    local:
      "Blijven op de box wanneer je een lokaal model gebruikt. Dat is de standaard.",
  },
  {
    what: "Pakketten installeren",
    local:
      "De agent mag het internet op om pakketten te installeren. Jullie netwerk is afgeschermd: geen NAS, printers of servers.",
  },
  {
    what: "Op het web zoeken",
    local:
      "Via een zoekdienst op de box. Alleen de zoekvraag gaat naar buiten, niet je opdracht of code. Per box of per taak uit te zetten.",
  },
  {
    what: "Een goedgekeurde wijziging",
    local:
      "Gaat als pull request naar jullie Git-server: GitHub, GitLab of Gitea.",
  },
  {
    what: "Externe modellen",
    local:
      "Standaard uit. Een beheerder kan een aanbieder toevoegen en per gebruiker toestaan. Wie zo'n model kiest, stuurt opdracht en code naar die aanbieder.",
  },
  {
    what: "MCP-koppelingen",
    local:
      "Alleen bij taken waarvoor je ze aanvinkt. Wat de agent doorgeeft, kan code bevatten.",
  },
  {
    what: "Meldingen",
    local:
      "Status en een vaste reden bij een mislukte taak. Nooit code of foutmeldingen naar een chatkanaal.",
  },
  {
    what: "Telemetrie en support",
    local:
      "Telemetrie staat standaard uit. Support op afstand loopt via een tunnel die jullie zelf aan- en uitzetten.",
  },
];

const clients = [
  {
    name: "Claude Code",
    note: "Rechtstreeks, via de Anthropic Messages-API van de box",
  },
  { name: "OpenCode", note: "Aanbevolen, met kant-en-klare configuratie" },
  { name: "Codex CLI", note: "Configuratie via aitje-coder config codex" },
  { name: "Aider", note: "Ook met sessies in het overzicht" },
  { name: "Cline · Roo Code · Kilo Code", note: "In VS Code" },
  { name: "Continue · Zed", note: "Aanvullen en chat in je editor" },
];

const delivery = ref(0);
const deliveries = [
  {
    name: "Toepassing",
    icon: "message",
    title: "Begin bij het werk dat blijft liggen.",
    text: "We kijken welke repositories meedoen, wie ermee werkt en welke taken je wilt uitbesteden. Zo kiezen we de box en het model die erbij passen.",
    label: "Jullie vraagset",
    items: [
      "Repositories en Git-server",
      "Aantal developers en gelijktijdig gebruik",
      "Drie representatieve taken voor de proef",
    ],
  },
  {
    name: "Box",
    icon: "server",
    title: "De rekenkracht op jullie netwerk.",
    text: "We installeren de box, zetten het certificaat klaar en maken hem bereikbaar in jullie netwerk. De box herkent zelf welke uitvoering het is en stelt zich daarop in.",
    label: "Jullie omgeving",
    items: [
      "32 GB voor één developer of 128 GB voor een team",
      "Bereikbaar via de browser op het eigen netwerk",
      "Agent afgeschermd van de rest van het netwerk",
    ],
  },
  {
    name: "Inrichting",
    icon: "shield",
    title: "Repositories, rollen en spelregels.",
    text: "We verbinden de repositories, maken accounts en rollen aan en zetten skills, budgetten en meldingen klaar. Daarna koppelen we de editors van je developers.",
    label: "Jullie inrichting",
    items: [
      "Repositories en toegang voor pull requests",
      "Rollen, sleutels en budgetten",
      "Editors en CLI via /connect",
    ],
  },
  {
    name: "Overdracht",
    icon: "handshake",
    title: "Samen controleren met jullie eigen taken.",
    text: "We draaien jullie representatieve taken, beoordelen het resultaat en de wachttijd en leggen uit hoe review, wachtrij en beheer werken. Nazorg en updates spreken we af.",
    label: "Jullie oplevering",
    items: [
      "Eigen taken uitgevoerd en beoordeeld",
      "Uitleg voor developers en beheerder",
      "Afspraken over updates en support",
    ],
  },
];
const stage = computed(() => deliveries[delivery.value]!);
</script>

<template>
  <div class="coder-story">
    <nav class="product-jumpnav" aria-label="Op deze productpagina">
      <div class="container-page">
        <a href="#werking">Voor je team</a
        ><a href="#codevoorbeelden">Code &amp; resultaat</a
        ><a href="#taak">Een taak</a><a href="#wachtrij">Wachtrij</a
        ><a href="#tools">Je eigen tools</a
        ><a href="#omgeving">Eigen omgeving</a><a href="#regie">Beheer</a
        ><a href="#alle-functies">Alle functies</a
        ><a href="#repository-planning">Git &amp; planning</a
        ><a href="#coder-ai-station">AI Station</a
        ><a href="#coder-modelkwaliteit">Modellen</a
        ><a href="#lokale-kosten">Lokale kosten</a
        ><a href="#modelverwerking">Inference</a><a href="#prijs">Prijs</a
        ><a href="#product-vragen">Vragen</a>
      </div>
    </nav>

    <AiStationLabel product="coder" />

    <section id="werking" class="cx-section container-page">
      <div class="cx-intro">
        <p class="eyebrow text-brand-ink">
          Local AI · on-premise · in eigen beheer
        </p>
        <h2>Een eigen AI-omgeving<br />die code schrijft.</h2>
        <p>
          AITJE Coder is een complete omgeving voor coding agents op jullie
          gekozen hardware of server. Het taalmodel rekent in die omgeving of
          via een bewust gekozen extern endpoint. Developers geven taken in
          gewone taal, werken met hun eigen tools en keuren elk resultaat goed
          voordat er iets in de repository verandert.
        </p>
      </div>
      <div class="cx-modes">
        <div
          class="cx-mode-list"
          role="group"
          aria-label="Kies een manier van werken"
        >
          <button
            v-for="(item, i) in modes"
            :key="item.title"
            type="button"
            :aria-pressed="mode === i"
            aria-controls="cx-mode"
            @click="mode = i"
          >
            <AppIcon :name="item.icon" :size="23" /><span
              ><strong>{{ item.title }}</strong
              ><small>{{ item.where }}</small></span
            ><AppIcon name="arrow-right" :size="18" />
          </button>
        </div>
        <div id="cx-mode" class="cx-mode" aria-live="polite">
          <span class="cx-label">Een herkenbare opdracht</span>
          <p class="cx-question">“{{ modes[mode]!.question }}”</p>
          <p>{{ modes[mode]!.answer }}</p>
          <span class="cx-caption"
            >Drie manieren van werken op dezelfde box. Je kunt ze naast elkaar
            gebruiken.</span
          >
        </div>
      </div>

      <div class="cx-workspace">
        <div class="cx-toolbar">
          <span class="cx-label"
            >Eén web-app. Alles van één taak op één plek.</span
          >
          <div role="group" aria-label="Bekijk de schermen">
            <button
              v-for="(item, i) in screens"
              :key="item.name"
              type="button"
              :aria-pressed="screen === i"
              aria-controls="cx-screen"
              @click="screen = i"
            >
              <AppIcon :name="item.icon" :size="16" />{{ item.name }}
            </button>
          </div>
        </div>
        <div class="cx-device-controls">
          <div role="group" aria-label="Kies het schermformaat">
            <button
              type="button"
              :aria-pressed="screenDevice === 'desktop'"
              @click="screenDevice = 'desktop'"
            >
              <AppIcon name="layout" :size="15" />Desktop</button
            ><button
              type="button"
              :aria-pressed="screenDevice === 'phone'"
              :disabled="!hasPhone"
              @click="screenDevice = 'phone'"
            >
              <AppIcon name="phone" :size="15" />Telefoon
            </button>
          </div>
          <div role="group" aria-label="Kies het productthema">
            <button
              type="button"
              :aria-pressed="screenTheme === 'dark'"
              @click="screenTheme = 'dark'"
            >
              Donker</button
            ><button
              type="button"
              :aria-pressed="screenTheme === 'light'"
              @click="screenTheme = 'light'"
            >
              Licht
            </button>
          </div>
        </div>
        <div
          id="cx-screen"
          class="cx-stage"
          :class="{ 'cx-stage-phone': screenDevice === 'phone' }"
        >
          <CoderScreen
            :key="`${view.shot}-${screenDevice}-${screenTheme}`"
            :shot="view.shot"
            :path="view.path"
            :alt="view.title"
            :theme="screenTheme"
            :phone="screenDevice === 'phone'"
          />
          <div class="cx-stage-caption" aria-live="polite">
            <strong>{{ view.title }}</strong>
            <p>{{ view.text }}</p>
          </div>
        </div>
        <p class="cx-caption">
          Echte productopnamen, met een fictief demoproject. Kies desktop of de
          beschikbare telefoonopname en bekijk beide thema’s.
        </p>
      </div>

      <div class="cx-features">
        <div>
          <AppIcon name="shield" :size="22" />
          <h3>Niets verandert zonder review</h3>
          <p>
            De agent werkt in een eigen kopie. Pas na jouw goedkeuring gaat er
            een pull request naar de repository.
          </p>
        </div>
        <div>
          <AppIcon name="wifi-off" :size="22" />
          <h3>Geen tokenrekening per opdracht</h3>
          <p>
            Lokale modellen draaien op de box. De agent mag itereren tot de
            tests slagen, zonder teller bij een cloudaanbieder.
          </p>
        </div>
        <div>
          <AppIcon name="phone" :size="22" />
          <h3>Ook vanaf je telefoon</h3>
          <p>
            De web-app werkt op elk scherm binnen je netwerk. Bekijk een
            resultaat en keur het goed vanaf je telefoon.
          </p>
        </div>
        <div>
          <AppIcon name="globe" :size="22" />
          <h3>Vier talen, twee thema's</h3>
          <p>
            De interface in het Nederlands, Engels, Duits en Frans, donker of
            licht. Opdrachten geef je in je eigen taal.
          </p>
        </div>
      </div>
    </section>

    <CoderCodeStudio />

    <CoderTaskRoute />

    <CoderRepositoryWorkflow />

    <CoderLocalValue />

    <section id="wachtrij" class="cx-section container-page cx-split">
      <div>
        <p class="eyebrow text-brand-ink">Wachtrij, planning en rondes</p>
        <h2>Werkt door terwijl<br />jij iets anders doet.</h2>
        <p>
          Zet taken in de wachtrij of plan ze vooruit. De agent werkt ze één
          voor één af. Het resultaat staat klaar voor review wanneer jij er weer
          bent.
        </p>
        <ul class="cx-points">
          <li>
            <AppIcon name="repeat" :size="20" />
            <div>
              <strong>Inplannen zoals het jullie uitkomt</strong
              ><span
                >Elke werkdag, dag of week, één keer op een datum, bij een push,
                bij een issue uit GitHub Issues of Linear, of met een eigen
                cron-schema.</span
              >
            </div>
          </li>
          <li>
            <AppIcon name="workflow" :size="20" />
            <div>
              <strong>Rondes achter elkaar</strong
              ><span
                >Laat de agent 2 tot 20 keer doorwerken op zijn eigen resultaat.
                Jij beoordeelt alleen het eindresultaat.</span
              >
            </div>
          </li>
          <li>
            <AppIcon name="users" :size="20" />
            <div>
              <strong>Developers gaan voor</strong
              ><span
                >Wie in de editor of chat met het model werkt, gaat voor.
                Wachtende taken starten zodra het stil is, en uiterlijk 10
                minuten na het indienen.</span
              >
            </div>
          </li>
          <li>
            <AppIcon name="mail" :size="20" />
            <div>
              <strong>Een melding als het klaar is</strong
              ><span
                >Per mail, Slack, Teams of Mattermost, bij klaar voor review,
                bij mislukken met de reden erbij en na het mergen.</span
              >
            </div>
          </li>
        </ul>
      </div>
      <CoderMedia
        scene="wachtrij"
        title="Wachtrij & planning"
        caption="Echte wachtrijpagina. De melding bovenaan verscheen tijdens de opnamen echt, omdat er tegelijk in de chat werd gewerkt. Mattermost en mail zijn getest tegen echte servers; Slack en Teams nog niet."
      />
    </section>

    <CoderMobile />

    <section id="tools" class="cx-tools">
      <div class="container-page">
        <div class="cx-heading">
          <p class="eyebrow text-brand-ink">Je eigen tools</p>
          <h2>Werk met de coding agents<br />die je team al kent.</h2>
          <p>
            De box spreekt de taal van de bekende tools. Je verandert alleen het
            adres en de sleutel; je workflow blijft hetzelfde.
          </p>
        </div>
        <div class="cx-tools-grid">
          <div class="cx-clients">
            <div v-for="client in clients" :key="client.name">
              <AppIcon name="terminal" :size="18" />
              <strong>{{ client.name }}</strong>
              <span>{{ client.note }}</span>
            </div>
            <p class="cx-caption">
              Voor elk van deze tools staat een configuratie klaar. Lange
              sessies in Claude Code, OpenCode, Codex en Aider worden
              automatisch samengevat voordat ze vastlopen.
            </p>
          </div>
          <div class="cx-connect">
            <span class="cx-label">Koppelen in drie regels</span>
            <pre><code><span class="cx-comment"># eenmalig: de CLI van de box</span>
curl -fsSL http://aitje-coder.local/connect/cli | bash
aitje-coder connect aitje-coder.local
<span class="cx-comment"># configuratie voor je tool, en een sessie met Git-context</span>
aitje-coder config opencode
aitje-coder session --taak "Bug oplossen" opencode</code></pre>
            <p>
              Liever klikken? De pagina <code>/connect</code> op de box geeft
              het certificaat, je persoonlijke sleutel en een kant-en-klare
              configuratie per tool.
            </p>
          </div>
        </div>
        <div class="cx-tools-bottom">
          <div>
            <CoderScreen
              shot="sessies"
              path="/sessies"
              alt="Mijn sessies: werk vanuit clients met modelverzoeken en tokens"
              theme="light"
            />
            <h3>Ook editorwerk is zichtbaar</h3>
            <p>
              Mijn sessies toont het werk vanuit je eigen tools, met
              modelverzoeken, tokens, repository en branch. Prompts en
              antwoorden worden daar niet bewaard.
            </p>
          </div>
          <div class="cx-honest">
            <AppIcon name="search" :size="24" />
            <h3>Wat tools zelf naar buiten sturen</h3>
            <p>
              Ook met de box als adres maken sommige tools uit zichzelf contact
              met hun maker: een modelcatalogus, telemetrie of een versiecheck.
              Dat is geen prompt en geen code. We hebben het per tool gemeten.
              <code>/connect</code> geeft bij elke tool de instelling die het
              uitzet. Voor Continue vonden we geen schakelaar.
            </p>
          </div>
          <CoderMedia
            scene="telefoon"
            title="Op je telefoon"
            portrait
            caption="Echte schermen op een telefoon, binnen het eigen netwerk."
          />
        </div>
      </div>
    </section>

    <section id="omgeving" class="cx-section container-page">
      <div class="cx-split">
        <div>
          <p class="eyebrow text-brand-ink">Jouw omgeving, jouw code</p>
          <h2>
            Jullie AI, jullie keuze.<br />Van eigen hardware tot cloudserver.
          </h2>
          <p>
            AITJE Coder draait op een BOSGAME, een geschikte Mac mini, jullie
            eigen lokale server, een cloudserver of een externe omgeving. We
            kunnen applicatie en modellen samen installeren of inference via een
            afzonderlijk endpoint inrichten. Jullie kiezen waar je je
            onafhankelijker door voelt; AITJE stemt hardware, toegang en beheer
            daarop af.
          </p>
          <div class="cx-tiers">
            <div>
              <span class="cx-label">32 GB</span>
              <strong>Voor één developer</strong>
              <p>
                Eén agenttaak tegelijk. Standaard met tiel-coder-35b, dat tot
                128k tokens per gesprek onthoudt. Op echte hardware doorgemeten.
              </p>
            </div>
            <div>
              <span class="cx-label">128 GB</span>
              <strong>Voor een team</strong>
              <p>
                Meer geheugen voor grotere modellen en meer gebruik tegelijk.
                Metingen op deze uitvoering volgen; we stemmen de capaciteit af
                in de proef.
              </p>
            </div>
          </div>
        </div>
        <div class="cx-infra">
          <div class="cx-toggle" role="group" aria-label="Kies wat je ziet">
            <button
              type="button"
              :aria-pressed="!online"
              @click="online = false"
            >
              Eigen modelomgeving</button
            ><button
              type="button"
              :aria-pressed="online"
              @click="online = true"
            >
              Met online functies
            </button>
          </div>
          <div class="cx-flow">
            <div>
              <AppIcon name="layout" :size="24" /><strong
                >Je laptop of telefoon</strong
              ><span>Browser · terminal · editor</span>
            </div>
            <span class="cx-flow-line"
              >↓ eigen netwerk of beveiligde verbinding</span
            >
            <div class="cx-box">
              <AppIcon name="server" :size="28" /><strong
                >Jullie AITJE Coder-omgeving</strong
              >
              <span
                >Lokaal model · agent in een afgeschermde container · web-app ·
                database</span
              >
            </div>
            <template v-if="online">
              <span class="cx-flow-line">↓ alleen wat jullie aanzetten</span>
              <div class="cx-external">
                <span
                  ><AppIcon name="code" :size="16" />Git-server voor pull
                  requests</span
                >
                <span
                  ><AppIcon name="package" :size="16" />Pakketregisters voor de
                  agent</span
                >
                <span
                  ><AppIcon name="search" :size="16" />Zoekvraag via de
                  zoekdienst</span
                >
                <span
                  ><AppIcon name="plug" :size="16" />Aangevinkte
                  MCP-koppelingen</span
                >
                <span
                  ><AppIcon name="globe" :size="16" />Externe modellen, als
                  toegestaan</span
                >
                <span
                  ><AppIcon name="mail" :size="16" />Meldingen zonder code</span
                >
              </div>
            </template>
          </div>
          <p class="cx-caption" aria-live="polite">
            {{
              online
                ? "Online functies zijn per onderdeel aan of uit te zetten. Externe modellen staan standaard uit en vragen toestemming van een beheerder per gebruiker."
                : "Met een lokaal model blijven opdrachten en code op de box. Programmeren met de geïnstalleerde modellen werkt ook zonder internet, zolang box en netwerk beschikbaar zijn."
            }}
          </p>
        </div>
      </div>
      <div class="cx-flows">
        <h3>Wat verlaat jullie omgeving, en wanneer?</h3>
        <dl>
          <div v-for="row in flows" :key="row.what">
            <dt>{{ row.what }}</dt>
            <dd>{{ row.local }}</dd>
          </div>
        </dl>
      </div>
    </section>

    <AiStationArchitecture product="coder" />

    <ProductModelRoutes product="coder" />

    <CoderControl />

    <CoderFeatureMap />

    <CoderModelEvidence />

    <section class="cx-delivery container-page">
      <div class="cx-heading">
        <p class="eyebrow text-brand-ink">
          Van eerste gesprek tot eerste pull request
        </p>
        <h2>AITJE zet het neer.<br />Jullie gaan ermee werken.</h2>
        <p>
          We kiezen en testen de configuratie met jullie taken. Kwaliteit,
          wachttijd en gelijktijdig gebruik beoordelen we op representatief
          werk.
        </p>
      </div>
      <div
        class="cx-delivery-tabs"
        role="group"
        aria-label="Bekijk de invoering"
      >
        <button
          v-for="(item, i) in deliveries"
          :key="item.name"
          type="button"
          :aria-pressed="delivery === i"
          aria-controls="cx-delivery-detail"
          @click="delivery = i"
        >
          <span>0{{ i + 1 }}</span
          ><AppIcon :name="item.icon" :size="22" /><strong>{{
            item.name
          }}</strong>
        </button>
      </div>
      <div
        id="cx-delivery-detail"
        class="cx-delivery-detail"
        aria-live="polite"
      >
        <div>
          <h3>{{ stage.title }}</h3>
          <p>{{ stage.text }}</p>
          <UiButton :to="contactLink('demo', 'aitje-coder')" arrow class="mt-6"
            >Plan een demo met jullie code</UiButton
          >
        </div>
        <div class="cx-board">
          <span class="cx-label">{{ stage.label }}</span>
          <div v-for="(item, i) in stage.items" :key="item">
            <span>0{{ i + 1 }}</span
            ><strong>{{ item }}</strong
            ><AppIcon name="check" :size="18" />
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<style scoped>
.cx-section {
  padding-block: 6rem;
  scroll-margin-top: 6rem;
}
.coder-story h2 {
  font-size: clamp(2rem, 3.3vw, 3.1rem);
  line-height: 1.12;
  font-weight: 700;
  margin-block: 1.1rem 1.5rem;
}
.coder-story h3 {
  font-weight: 600;
  font-size: 1.1rem;
}
.coder-story p {
  line-height: 1.8;
  color: var(--color-muted);
}
.coder-story code {
  font-family: var(--font-mono);
  font-size: 0.85em;
}
.cx-label {
  font: 0.68rem var(--font-mono);
  letter-spacing: 0.07em;
  text-transform: uppercase;
  color: var(--color-muted);
}
.coder-story .cx-caption {
  display: block;
  font-size: 0.75rem;
  line-height: 1.65;
  color: var(--color-muted);
  margin-top: 1rem;
}
.cx-intro,
.cx-heading {
  max-width: 48rem;
  margin-bottom: 3rem;
}
.cx-intro > p:last-child,
.cx-heading > p:last-child,
.cx-split > div > p:not(.eyebrow):not(.cx-caption) {
  font-size: 1.05rem;
}
.cx-split {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 4rem;
  align-items: center;
}
.cx-split > * {
  min-width: 0;
}
.coder-story button {
  cursor: pointer;
  transition:
    background 0.15s,
    color 0.15s,
    border-color 0.15s;
}

/* Manieren van werken */
.cx-modes {
  display: grid;
  grid-template-columns: 1fr 1.15fr;
  border: 1px solid var(--color-line);
  border-radius: 1.5rem;
  overflow: hidden;
  background: #fff;
}
.cx-mode-list {
  padding: 1rem;
  display: grid;
  align-content: center;
  gap: 0.5rem;
}
.cx-mode-list button {
  display: flex;
  align-items: center;
  gap: 1rem;
  text-align: left;
  padding: 1.2rem 1.3rem;
  border-radius: 0.8rem;
}
.cx-mode-list button > span {
  flex: 1;
  display: grid;
  gap: 0.25rem;
}
.cx-mode-list small {
  font-size: 0.75rem;
  color: var(--color-muted);
}
.cx-mode-list button[aria-pressed="true"] {
  background: var(--color-brand);
}
.cx-mode-list button[aria-pressed="true"] small {
  color: #3f3a1a;
}
.cx-mode {
  background: var(--color-sand);
  padding: 2.5rem;
}
.coder-story .cx-question {
  font-family: var(--font-heading);
  font-size: 1.5rem;
  color: var(--color-ink);
  font-weight: 600;
  line-height: 1.45;
  margin-block: 1.2rem;
}

/* Web-app */
.cx-workspace {
  margin-top: 3.5rem;
}
.cx-toolbar {
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 1.5rem;
  margin-bottom: 1.5rem;
}
.cx-toolbar > div {
  display: flex;
  gap: 0.3rem;
  padding: 0.3rem;
  border: 1px solid var(--color-line);
  border-radius: 0.9rem;
  background: #fff;
  overflow-x: auto;
}
.cx-toolbar button {
  display: flex;
  align-items: center;
  gap: 0.5rem;
  border-radius: 0.6rem;
  padding: 0.6rem 0.95rem;
  font-size: 0.8rem;
  white-space: nowrap;
}
.cx-toolbar button[aria-pressed="true"] {
  background: var(--color-ink);
  color: #fff;
}
.cx-stage {
  border-radius: 1.5rem;
  background:
    radial-gradient(ellipse at 60% 30%, #f3e8b4, transparent 70%), #e9e8e2;
  padding: 2.5rem 4rem 2rem;
}
.cx-stage .coder-screen {
  max-width: 60rem;
  margin: auto;
}
.cx-stage-caption {
  max-width: 40rem;
  margin: 1.6rem auto 0;
  text-align: center;
}
.cx-stage-caption strong {
  font-family: var(--font-heading);
  font-size: 1.1rem;
}
.cx-stage-caption p {
  font-size: 0.85rem;
  margin-top: 0.4rem;
}
.cx-features {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 2rem;
  margin-top: 3rem;
  padding-top: 2rem;
  border-top: 1px solid var(--color-line);
}
.cx-features svg {
  color: var(--color-brand-ink);
}
.cx-features h3 {
  font-size: 0.95rem;
  margin: 1rem 0 0.6rem;
}
.cx-features p {
  font-size: 0.82rem;
}

/* Wachtrij */
.cx-points {
  display: grid;
  gap: 1.3rem;
  margin-top: 2rem;
}
.cx-points li {
  display: flex;
  gap: 0.9rem;
}
.cx-points svg {
  flex-shrink: 0;
  color: var(--color-brand-ink);
  margin-top: 0.15rem;
}
.cx-points strong {
  display: block;
  font-size: 0.92rem;
}
.cx-points span {
  display: block;
  font-size: 0.84rem;
  line-height: 1.75;
  color: var(--color-muted);
  margin-top: 0.3rem;
}

/* Tools */
.cx-tools {
  background: var(--color-sand);
  padding-block: 6rem;
  scroll-margin-top: 6rem;
}
.cx-tools-grid {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 2rem;
  align-items: start;
}
.cx-clients {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 0.7rem;
}
.cx-clients > div {
  display: grid;
  gap: 0.4rem;
  padding: 1.1rem 1.2rem;
  background: #fff;
  border: 1px solid var(--color-line);
  border-radius: 1rem;
}
.cx-clients svg {
  color: var(--color-brand-ink);
}
.cx-clients strong {
  font-size: 0.9rem;
}
.cx-clients span {
  font-size: 0.76rem;
  line-height: 1.6;
  color: var(--color-muted);
}
.cx-clients .cx-caption {
  grid-column: 1 / -1;
  margin-top: 0.3rem;
}
.cx-connect {
  background: #111;
  color: #e4e4de;
  border-radius: 1.4rem;
  padding: 1.8rem;
  min-width: 0;
}
.cx-connect .cx-label {
  color: var(--color-brand);
}
.cx-connect pre {
  margin-top: 1.2rem;
  overflow-x: auto;
  font: 0.78rem/1.9 var(--font-mono);
  white-space: pre;
}
.cx-comment {
  color: #8a8a83;
}
.coder-story .cx-connect p {
  color: #b7b7b0;
  font-size: 0.85rem;
  margin-top: 1.2rem;
  padding-top: 1.2rem;
  border-top: 1px solid #34342f;
}
.cx-tools-bottom {
  display: grid;
  grid-template-columns: minmax(0, 1.4fr) minmax(0, 1fr) minmax(0, 0.8fr);
  gap: 2.5rem;
  margin-top: 4rem;
  align-items: start;
}
.cx-tools-bottom > * {
  min-width: 0;
}
.cx-tools-bottom h3 {
  margin: 1.4rem 0 0.6rem;
}
.cx-tools-bottom p {
  font-size: 0.86rem;
}
.cx-honest {
  border: 1px solid #d6d4cc;
  background: #f8f8f6;
  border-radius: 1.3rem;
  padding: 1.6rem;
}
.cx-honest svg {
  color: var(--color-brand-ink);
}
.cx-honest h3 {
  margin-top: 1rem;
}

/* Omgeving */
.cx-tiers {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 1rem;
  margin-top: 2rem;
}
.cx-tiers > div {
  border: 1px solid var(--color-line);
  border-radius: 1rem;
  padding: 1.2rem;
  background: #fff;
}
.cx-tiers .cx-label {
  color: var(--color-brand-ink);
}
.cx-tiers strong {
  display: block;
  margin-top: 0.5rem;
  font-size: 0.95rem;
}
.cx-tiers p {
  font-size: 0.8rem !important;
  line-height: 1.7;
  margin-top: 0.5rem;
}
.cx-infra {
  border: 1px solid var(--color-line);
  border-radius: 1.5rem;
  padding: 2rem;
  background: #fff;
}
.cx-toggle {
  display: flex;
  gap: 0.35rem;
  background: #0b0b0b09;
  padding: 0.35rem;
  border-radius: 0.9rem;
}
.cx-toggle button {
  flex: 1;
  padding: 0.7rem 1rem;
  border-radius: 0.65rem;
  font-size: 0.85rem;
}
.cx-toggle button[aria-pressed="true"] {
  background: var(--color-brand);
  font-weight: 600;
}
.cx-flow {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 0.7rem;
  padding-top: 1.5rem;
}
.cx-flow > div {
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  gap: 0.5rem;
  width: 100%;
  padding: 1rem;
}
.cx-flow > div > span {
  font-size: 0.8rem;
  color: var(--color-muted);
}
.cx-flow .cx-box {
  background: #f5f4ec;
  border: 1px solid #d9d8c5;
  border-radius: 1rem;
}
.cx-flow-line {
  font-size: 0.75rem;
  color: var(--color-brand-ink);
}
.cx-flow .cx-external {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 0.5rem;
  border: 1px dashed #c6a200;
  border-radius: 1rem;
  text-align: left;
}
.cx-external span {
  display: flex;
  align-items: center;
  gap: 0.5rem;
  font-size: 0.76rem !important;
  color: var(--color-ink) !important;
}
.cx-external svg {
  flex-shrink: 0;
  color: var(--color-brand-ink);
}
.cx-flows {
  margin-top: 4rem;
}
.cx-flows h3 {
  font-family: var(--font-heading);
  font-size: 1.4rem;
  margin-bottom: 1.5rem;
}
.cx-flows dl {
  border-top: 1px solid var(--color-line);
}
.cx-flows dl > div {
  display: grid;
  grid-template-columns: 15rem 1fr;
  gap: 2rem;
  padding: 1.1rem 0;
  border-bottom: 1px solid var(--color-line);
}
.cx-flows dt {
  font-weight: 600;
  font-size: 0.9rem;
}
.cx-flows dd {
  font-size: 0.88rem;
  line-height: 1.75;
  color: var(--color-muted);
}

/* Betrouwbaarheid */
.cx-reliability {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 1rem;
}
.cx-reliability > div {
  border: 1px solid var(--color-line);
  background: #fff;
  border-radius: 1.2rem;
  padding: 1.6rem;
}
.cx-reliability svg {
  color: var(--color-brand-ink);
}
.cx-reliability h3 {
  font-size: 1rem;
  margin: 1rem 0 0.5rem;
}
.cx-reliability p {
  font-size: 0.84rem;
}

/* Prestaties */
.cx-proof {
  background: var(--color-sand);
  padding-block: 6rem;
  scroll-margin-top: 6rem;
}
.cx-runs {
  background: #fff;
  border: 1px solid var(--color-line);
  border-radius: 1.5rem;
  padding: 1.8rem;
  overflow-x: auto;
}
.cx-runs .cx-label {
  color: var(--color-brand-ink);
}
.cx-runs table {
  width: 100%;
  border-collapse: collapse;
  margin-top: 1.2rem;
  font-size: 0.82rem;
}
.cx-runs th {
  text-align: left;
  font: 0.65rem var(--font-mono);
  text-transform: uppercase;
  letter-spacing: 0.05em;
  color: var(--color-muted);
  padding: 0 0.6rem 0.7rem 0;
}
.cx-runs td {
  padding: 0.85rem 0.6rem 0.85rem 0;
  border-top: 1px solid var(--color-line);
  vertical-align: top;
}
.cx-runs td:first-child {
  font-weight: 600;
}
.cx-runs td:nth-child(n + 3) {
  font-family: var(--font-mono);
  font-size: 0.76rem;
  white-space: nowrap;
}
.cx-limits {
  margin-top: 3.5rem;
  padding-top: 2.5rem;
  border-top: 1px solid #d6d4cc;
}
.cx-limits h3 {
  font-family: var(--font-heading);
  font-size: 1.3rem;
}
.cx-limits ul {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 1rem 3rem;
  margin-top: 1.5rem;
}
.cx-limits li {
  display: flex;
  gap: 0.7rem;
  font-size: 0.86rem;
  line-height: 1.7;
  color: var(--color-muted);
}
.cx-limits svg {
  flex-shrink: 0;
  color: var(--color-brand-ink);
  margin-top: 0.25rem;
}

/* Invoering */
.cx-delivery {
  padding-block: 6rem;
}
.cx-delivery-tabs {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 0.7rem;
}
.cx-delivery-tabs button {
  display: flex;
  gap: 0.8rem;
  align-items: center;
  text-align: left;
  border: 1px solid var(--color-line);
  background: #fff;
  padding: 1.2rem;
  border-radius: 1rem;
  font-size: 0.85rem;
}
.cx-delivery-tabs button > span {
  font: 0.65rem var(--font-mono);
  color: var(--color-muted);
}
.cx-delivery-tabs button[aria-pressed="true"] {
  border-color: var(--color-ink);
  background: var(--color-brand);
}
.cx-delivery-detail {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 4rem;
  align-items: center;
  padding-top: 2.5rem;
}
.cx-delivery-detail h3 {
  font-family: var(--font-heading);
  font-size: 1.7rem;
  line-height: 1.3;
}
.cx-delivery-detail > div > p {
  font-size: 0.95rem;
  margin-top: 1rem;
}
.cx-board {
  background: var(--color-sand);
  border: 1px solid var(--color-line);
  border-radius: 1.25rem;
  padding: 1.5rem;
}
.cx-board > div {
  display: flex;
  gap: 0.8rem;
  align-items: center;
  padding: 1.1rem 0.8rem;
  margin-top: 0.7rem;
  background: #fff;
  border: 1px solid var(--color-line);
  border-radius: 0.7rem;
  font-size: 0.82rem;
}
.cx-board > div > span {
  font: 0.65rem var(--font-mono);
  color: var(--color-muted);
}
.cx-board svg {
  margin-left: auto;
  flex-shrink: 0;
  color: var(--color-brand-ink);
}

@media (max-width: 1000px) {
  .cx-split,
  .cx-modes,
  .cx-tools-grid,
  .cx-delivery-detail {
    grid-template-columns: 1fr;
    gap: 2.5rem;
  }
  .cx-features,
  .cx-reliability {
    grid-template-columns: 1fr 1fr;
  }
  .cx-tools-bottom {
    grid-template-columns: 1fr 1fr;
  }
  .cx-tools-bottom > :first-child {
    grid-column: 1 / -1;
  }
  .cx-delivery-tabs {
    grid-template-columns: 1fr 1fr;
  }
  .cx-stage {
    padding: 1.5rem;
  }
}
@media (max-width: 650px) {
  .cx-section,
  .cx-tools,
  .cx-proof,
  .cx-delivery {
    padding-block: 4rem;
  }
  .cx-features,
  .cx-reliability,
  .cx-clients,
  .cx-tiers,
  .cx-tools-bottom,
  .cx-limits ul {
    grid-template-columns: 1fr;
  }
  .cx-toolbar {
    flex-direction: column;
    align-items: flex-start;
    gap: 1rem;
  }
  .cx-toolbar > div {
    max-width: 100%;
  }
  .cx-stage {
    padding: 0.8rem;
    border-radius: 1rem;
  }
  .cx-mode {
    padding: 1.5rem;
  }
  .cx-mode-list button {
    padding: 1rem;
  }
  .cx-infra,
  .cx-runs,
  .cx-connect {
    padding: 1.25rem;
  }
  .cx-flow .cx-external {
    grid-template-columns: 1fr;
  }
  .cx-flows dl > div {
    grid-template-columns: 1fr;
    gap: 0.4rem;
  }
  .cx-toggle button {
    padding: 0.65rem 0.5rem;
    font-size: 0.75rem;
  }
}
@media (max-width: 480px) {
  .cx-delivery-tabs {
    grid-template-columns: 1fr;
  }
}
@media (prefers-reduced-motion: reduce) {
  .coder-story button {
    transition: none;
  }
}
.cx-limits summary {
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 1rem;
  cursor: pointer;
  font-size: 0.9rem;
  font-weight: 500;
  color: #4c5c3e;
  list-style: none;
}
.cx-limits summary::-webkit-details-marker {
  display: none;
}
.cx-limits[open] summary {
  margin-bottom: 1.2rem;
}
.cx-device-controls {
  display: flex;
  justify-content: space-between;
  gap: 1rem;
  margin: 0.7rem 0 1.2rem;
}
.cx-device-controls > div {
  display: flex;
  gap: 0.4rem;
}
.cx-device-controls button {
  display: flex;
  align-items: center;
  gap: 0.4rem;
  border: 1px solid #d5dccb;
  padding: 0.45rem 0.7rem;
  border-radius: 2rem;
  color: #70815d;
  font-size: 0.65rem;
  cursor: pointer;
}
.cx-device-controls button[aria-pressed="true"] {
  background: #2c3c23;
  color: #e3edcf;
  border-color: #2c3c23;
}
.cx-device-controls button:disabled {
  opacity: 0.35;
  cursor: default;
}
.cx-stage.cx-stage-phone {
  grid-template-columns: 1fr 1fr;
  align-items: center;
  background: #e9eddf;
  padding: 2rem 3rem;
  border: 1px solid #d2dcc3;
  border-radius: 1.3rem;
}
.cx-stage.cx-stage-phone .coder-screen {
  width: 17rem;
  max-width: 100%;
  justify-self: center;
}
.cx-stage.cx-stage-phone .cx-stage-caption {
  max-width: 27rem;
}
#wachtrij {
  padding-bottom: 12rem;
}
@media (max-width: 760px) {
  .cx-stage.cx-stage-phone {
    grid-template-columns: 1fr;
    padding: 1.3rem;
    gap: 1.5rem;
  }
  .cx-device-controls {
    gap: 0.5rem;
  }
  .cx-device-controls button {
    font-size: 0.6rem;
    padding: 0.45rem 0.6rem;
  }
  .cx-stage.cx-stage-phone .coder-screen {
    width: 15rem;
  }
  #wachtrij {
    padding-bottom: 7rem;
  }
}
</style>
