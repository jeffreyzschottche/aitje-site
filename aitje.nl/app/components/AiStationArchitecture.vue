<script setup lang="ts">
const props = defineProps<{ product: "assistant" | "coder" }>();
const assistant = computed(() => props.product === "assistant");
</script>
<template>
  <section
    :id="assistant ? 'assistent-ai-station' : 'coder-ai-station'"
    class="ai-station-architecture"
  >
    <div class="container-page">
      <div class="asa-heading">
        <div>
          <p class="eyebrow text-brand-ink">
            {{
              assistant
                ? "AITJE Chat Assistent AI Station"
                : "AITJE Coder AI Station"
            }}
          </p>
          <h2>
            Een eigen AI Station.<br />Modellen, software en data bij elkaar.
          </h2>
        </div>
        <p>
          {{
            assistant
              ? "Een ingerichte AI-werkomgeving voor chat, bedrijfskennis en beheer. Het lokale model, de kennisverwerking en de vaste opslag draaien op de afgesproken computer of server."
              : "Een ingerichte ontwikkelomgeving voor coding agents. Het lokale model, de agent en het beheer draaien op de afgesproken computer of server. Developers verbinden hun browser, terminal of editor met die omgeving."
          }}
        </p>
      </div>
      <div class="asa-blueprint">
        <div class="asa-browser">
          <div>
            <AppIcon name="monitor" :size="30" /><AppIcon
              name="smartphone"
              :size="21"
            />
          </div>
          <strong>Je werkplek</strong
          ><span>{{
            assistant
              ? "Browser op laptop of telefoon"
              : "Browser, terminal of editor"
          }}</span>
        </div>
        <div class="asa-connection">
          <span>Beveiligde verbinding</span
          ><AppIcon name="arrow-right" :size="23" /><small
            >HTTPS · toegang per gebruiker</small
          >
        </div>
        <div class="asa-machine">
          <div class="asa-machine-head">
            <AppIcon name="server" :size="23" /><strong
              >Jullie AI Station</strong
            ><span>Op locatie / eigen server / cloud</span>
          </div>
          <div class="asa-machine-grid">
            <div>
              <AppIcon name="layout" :size="23" /><strong>AITJE-software</strong
              ><span>{{
                assistant ? "Chat, kennis en beheer" : "Agents, taken en review"
              }}</span>
            </div>
            <div>
              <AppIcon name="cpu" :size="23" /><strong>Lokaal model</strong
              ><span>Rekenwerk op eigen hardware</span>
            </div>
            <div>
              <AppIcon name="server" :size="23" /><strong>{{
                assistant ? "PostgreSQL + pgvector" : "PostgreSQL"
              }}</strong
              ><span>{{
                assistant
                  ? "Database én vectorindex"
                  : "Gebruikers, taken en beheer"
              }}</span>
            </div>
            <div>
              <AppIcon name="file-search" :size="23" /><strong>{{
                assistant ? "Lokale bestanden" : "Git en werkmappen"
              }}</strong
              ><span>{{
                assistant
                  ? "Documenten en bijlagen"
                  : "Repositorykopieën en code"
              }}</span>
            </div>
          </div>
        </div>
      </div>
      <div class="asa-explanation">
        <article>
          <h3>Waar staat de database?</h3>
          <p v-if="assistant">
            In de standaard lokale installatie draait PostgreSQL op het AI
            Station. Accounts, rollen, gesprekken en kennisgegevens worden daar
            opgeslagen. De vectoropslag is pgvector in diezelfde
            PostgreSQL-database: de doorzoekbare passages, hun embeddings en de
            bijbehorende rechten horen bij jullie eigen omgeving.
          </p>
          <p v-else>
            In de standaard appliance-installatie draait PostgreSQL als lokale
            dienst in de Coder-omgeving, met een eigen blijvend datavolume. Daar
            staan gebruikers, taken, planningen, reviewgegevens en de
            gebruikstellingen. Repositories en de werkmappen van de agent staan
            afzonderlijk op lokale opslag.
          </p>
        </article>
        <article>
          <h3>Wat staat op het apparaat van de gebruiker?</h3>
          <p>
            {{
              assistant
                ? "De browser opent de web-app en toont de informatie waarvoor de gebruiker toegang heeft. De centrale database, kennisindex en modelverwerking staan op het ingerichte Station. Een telefoon hoeft zelf geen groot taalmodel te draaien."
                : "De browser bedient de web-app. Een terminal of editor kan met een persoonlijke sleutel het model op de box gebruiken; de bestanden van die client kunnen op de developerwerkplek staan. Bij taken via de Coder-webapp werkt de agent in zijn eigen werkmap op de box."
            }}
          </p>
        </article>
        <article>
          <h3>Wat houdt de beheerder in de hand?</h3>
          <p>
            {{
              assistant
                ? "Wie kan inloggen, welke kennis en modellen per rol beschikbaar zijn, welke hulpmiddelen zijn toegestaan en waar gebruiks- en kostengrenzen liggen. Guardrails bewaken afgesproken kennis-, actie- en antwoordregels. Inzage en logging volgen het ingestelde beleid."
                : "Wie taken mag indienen of goedkeuren, welke repositories een developer mag gebruiken, welke modellen en tools toegankelijk zijn en welke limieten gelden. Budgetten, persoonlijke sleutels, supporttoegang en het logboek worden centraal beheerd."
            }}
          </p>
        </article>
        <article>
          <h3>Wat levert het AI Station op?</h3>
          <p>
            {{
              assistant
                ? "Eén gedeelde omgeving voor jullie team, met eigen kennis, toegangsrechten en lokale modelverwerking. AITJE kiest en test de combinatie van hardware, model en inrichting op de vragen die jullie werkelijk stellen."
                : "Rekenkracht en agentwerk in eigen beheer, met de repositories en reviewafspraken van het team. AITJE selecteert en test modellen en stelt de tools, rechten en wachtrij in. Je team kan bouwen zonder een externe tokenrekening voor lokale inferentie."
            }}
          </p>
        </article>
      </div>
      <div class="asa-outage">
        <AppIcon name="wifi-off" :size="27" />
        <div>
          <h3>Als een externe AI-dienst een storing heeft</h3>
          <p>
            {{
              assistant
                ? "Het geïnstalleerde lokale model en de al ingelezen kennis hebben die externe modeldienst niet nodig. Chat en lokaal zoeken kunnen beschikbaar blijven zolang het Station, de lokale diensten en jullie netwerk werken. Nieuwe synchronisatie met Drive of Microsoft, webzoeken en externe modellen hebben hun eigen verbinding nodig."
                : "Het lokale model is beschikbaar zonder een externe model-API. Werken met lokaal aanwezige code kan doorgaan zolang box, lokale diensten en netwerk werken. Een nieuwe clone, pakketdownload of pull request bij een externe Git-dienst kan wel op die dienst moeten wachten. Lokale inference en externe Git-bereikbaarheid zijn afzonderlijke afhankelijkheden."
            }}
          </p>
        </div>
      </div>
      <details class="asa-technical">
        <summary>
          Technische opslag in de standaardinstallatie
          <AppIcon name="chevron-down" :size="17" />
        </summary>
        <dl v-if="assistant">
          <div>
            <dt>Vectoren en passages</dt>
            <dd>
              PostgreSQL met pgvector; actieve embeddings in
              <code>chunk_vectors</code>, passages in <code>chunks</code>.
            </dd>
          </div>
          <div>
            <dt>Originele kennisbestanden</dt>
            <dd>
              <code>/var/lib/aitje/files/knowledge/</code>, buiten de webroot.
              Bijlagen en overige bestanden hebben hun eigen opslag.
            </dd>
          </div>
          <div>
            <dt>Eigen serveromgeving</dt>
            <dd>
              De concrete opslaglocatie, back-ups en toegang worden bij de
              installatie met jullie IT afgestemd.
            </dd>
          </div>
        </dl>
        <dl v-else>
          <div>
            <dt>Database</dt>
            <dd>
              Lokale PostgreSQL-dienst met een blijvend
              <code>postgres-data</code>-volume.
            </dd>
          </div>
          <div>
            <dt>Git en agentwerk</dt>
            <dd>
              Standaard onder <code>/var/aitje/repos</code> en
              <code>/var/aitje/work</code>.
            </dd>
          </div>
          <div>
            <dt>Modelgewichten</dt>
            <dd>
              Lokale modelcache in een afzonderlijk blijvend volume. Geen
              modeldownload per opdracht.
            </dd>
          </div>
        </dl>
      </details>
      <p class="asa-note">
        AI Station beschrijft de ingerichte combinatie van omgeving, model en
        software. De softwareprijs, installatie en benodigde hardware of hosting
        staan afzonderlijk in de prijsopbouw en offerte.
      </p>
    </div>
  </section>
</template>
<style scoped>
.ai-station-architecture {
  padding: 5rem 0;
  background: #f2f3ed;
  scroll-margin-top: 6rem;
}
.asa-heading {
  display: grid;
  grid-template-columns: 1.15fr 1fr;
  gap: 4rem;
  align-items: end;
  margin-bottom: 2.4rem;
}
.asa-heading h2 {
  font: 700 clamp(1.9rem, 3.1vw, 2.9rem)/1.15 var(--font-heading);
  margin: 1rem 0;
  letter-spacing: -0.035em;
}
.asa-heading > p {
  font-size: 0.98rem;
  line-height: 1.9;
  color: #5e6d53;
}
.asa-blueprint {
  display: grid;
  grid-template-columns: 0.7fr 0.55fr 1.75fr;
  align-items: center;
  gap: 1.3rem;
  padding: 2rem;
  background: #e4ead8;
  border: 1px solid #c6d4b2;
  border-radius: 1.4rem;
}
.asa-browser {
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  gap: 0.9rem;
  padding: 1.5rem 1rem;
  background: #f6f8ef;
  border: 1px solid #c5d2b3;
  border-radius: 1rem;
}
.asa-browser > div {
  display: flex;
  align-items: end;
  gap: 0.7rem;
  color: #78994c;
}
.asa-browser strong {
  font-size: 0.9rem;
  font-weight: 600;
}
.asa-browser > span {
  font-size: 0.65rem;
  line-height: 1.8;
  color: #667b50;
}
.asa-connection {
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  gap: 0.7rem;
  color: #6d854e;
}
.asa-connection > span {
  font: 0.6rem var(--font-mono);
}
.asa-connection > small {
  font-size: 0.54rem;
  line-height: 1.8;
}
.asa-machine {
  background: #26361e;
  border: 1px solid #435b30;
  color: #e1edcf;
  border-radius: 1rem;
  overflow: hidden;
}
.asa-machine-head {
  display: flex;
  gap: 0.7rem;
  align-items: center;
  padding: 1.2rem;
  border-bottom: 1px solid #435b30;
}
.asa-machine-head > svg {
  color: #d2bb59;
}
.asa-machine-head strong {
  font-size: 0.83rem;
  font-weight: 500;
}
.asa-machine-head > span {
  margin-left: auto;
  font: 0.48rem var(--font-mono);
  color: #9bb97a;
}
.asa-machine-grid {
  display: grid;
  grid-template-columns: 1fr 1fr;
  padding: 1.4rem;
  gap: 1.8rem 1rem;
}
.asa-machine-grid > div {
  display: flex;
  flex-direction: column;
  gap: 0.65rem;
  min-width: 0;
}
.asa-machine-grid svg {
  color: #a7bb75;
}
.asa-machine-grid strong {
  font-size: 0.75rem;
  font-weight: 500;
}
.asa-machine-grid span {
  font-size: 0.6rem;
  line-height: 1.8;
  color: #aac493;
}
.asa-explanation {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 2rem 3rem;
  margin-top: 2.5rem;
}
.asa-explanation h3,
.asa-outage h3 {
  font: 600 1.05rem/1.4 var(--font-heading);
}
.asa-explanation p {
  font-size: 0.83rem;
  line-height: 1.95;
  color: #617154;
  margin-top: 0.8rem;
}
.asa-outage {
  display: flex;
  align-items: flex-start;
  gap: 1.2rem;
  padding: 1.5rem 1.7rem;
  margin-top: 2.5rem;
  background: #e4ecd7;
  border: 1px solid #c4d5ac;
  border-radius: 1rem;
}
.asa-outage > svg {
  flex-shrink: 0;
  color: #6c8645;
}
.asa-outage p {
  font-size: 0.79rem;
  line-height: 1.95;
  color: #5d714a;
  margin-top: 0.6rem;
}
.asa-technical {
  margin-top: 1.8rem;
  padding: 1rem 1.3rem;
  border: 1px solid #ced8c0;
  border-radius: 0.8rem;
}
.asa-technical summary {
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 1rem;
  font-size: 0.78rem;
  list-style: none;
  cursor: pointer;
  color: #5c7047;
}
.asa-technical summary::-webkit-details-marker {
  display: none;
}
.asa-technical dl {
  display: grid;
  gap: 1rem;
  margin-top: 1.3rem;
}
.asa-technical dl > div {
  display: grid;
  grid-template-columns: 12rem 1fr;
  gap: 1rem;
  font-size: 0.72rem;
  line-height: 1.9;
  color: #617454;
}
.asa-technical dt {
  font-weight: 600;
}
.asa-technical code {
  font-size: 0.85em;
  overflow-wrap: anywhere;
}
.asa-note {
  font-size: 0.65rem;
  line-height: 1.9;
  color: #657759;
  margin-top: 1.5rem;
  max-width: 65rem;
}
@media (max-width: 900px) {
  .asa-heading {
    grid-template-columns: 1fr;
    gap: 1rem;
  }
  .asa-blueprint {
    grid-template-columns: 1fr 2fr;
    padding: 1.4rem;
    gap: 1rem;
  }
  .asa-connection {
    display: none;
  }
  .asa-explanation {
    gap: 1.5rem 2rem;
  }
  .asa-machine-head > span {
    display: none;
  }
}
@media (max-width: 600px) {
  .ai-station-architecture {
    padding-block: 3.5rem;
  }
  .asa-blueprint {
    grid-template-columns: 1fr;
  }
  .asa-browser {
    padding: 1rem;
  }
  .asa-browser > div {
    display: none;
  }
  .asa-browser > span {
    max-width: none;
  }
  .asa-explanation {
    grid-template-columns: 1fr;
    gap: 1.5rem;
  }
  .asa-outage {
    padding: 1.2rem;
    gap: 0.8rem;
  }
  .asa-outage > svg {
    width: 21px;
  }
  .asa-technical dl > div {
    grid-template-columns: 1fr;
    gap: 0.3rem;
  }
  .asa-machine-grid {
    padding: 1.2rem;
    gap: 1.3rem 1rem;
  }
}
</style>
