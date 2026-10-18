<template>
  <section id="repository-planning" class="coder-repository-workflow">
    <div class="container-page">
      <div class="crw-heading">
        <div>
          <p class="eyebrow text-brand-ink">
            Aansluiten op jullie ontwikkelproces
          </p>
          <h2>AI-code die past<br />in jullie Git-werkwijze.</h2>
        </div>
        <p>
          Een los codeblok is pas het begin. Coder verbindt de opdracht met de
          repository, de startbranch, de gewijzigde bestanden en de review. Zo
          kan je team het resultaat behandelen als een normale codewijziging.
        </p>
      </div>
      <ol class="crw-git-flow">
        <li>
          <AppIcon name="git-branch" :size="24" /><strong
            >Jullie repository</strong
          ><span>Een gekozen uitgangspunt</span>
        </li>
        <li>
          <AppIcon name="box" :size="24" /><strong>Eigen werkkopie</strong
          ><span>De agent leest, wijzigt en test</span>
        </li>
        <li>
          <AppIcon name="file-search" :size="24" /><strong>Jouw review</strong
          ><span>Diff, verslag en opmerkingen</span>
        </li>
        <li>
          <AppIcon name="git-pull-request" :size="24" /><strong
            >Pull request</strong
          ><span>Na menselijke goedkeuring</span>
        </li>
        <li>
          <AppIcon name="check" :size="24" /><strong>Jullie mergeproces</strong
          ><span>Eigen checks en afspraken</span>
        </li>
      </ol>
      <div class="crw-benefits">
        <article>
          <h3>Je beoordeelt de echte wijziging.</h3>
          <p>
            De agent werkt op de code die je aanwijst. In de diff zie je iedere
            gewijzigde regel. Het verslag vertelt wat is onderzocht, aangepast
            en getest. Je kunt per bestand commentaar geven en om een nieuwe
            poging vragen.
          </p>
        </article>
        <article>
          <h3>De pull request houdt het controleerbaar.</h3>
          <p>
            De goedgekeurde wijziging krijgt een plek in jullie
            Git-geschiedenis. Collega’s kunnen reviewen, bestaande CI kan de
            branch controleren en jullie eigen mergebeleid blijft de laatste
            stap. Een geopende pull request is nog geen automatische merge of
            publicatie.
          </p>
        </article>
        <article>
          <h3>Een agent krijgt afgebakende toegang.</h3>
          <p>
            De beheerder bepaalt welke repositories een developer mag gebruiken
            en of die zelf repositories mag verbinden. De agent werkt in een
            eigen werkmap. Voor toegang tot Git wordt de afgesproken verbinding
            ingericht, met tokens of een ondersteunde GitHub-login.
          </p>
        </article>
        <article>
          <h3>Het resultaat blijft van jullie team.</h3>
          <p>
            Code, tests en geschiedenis blijven gewone projectbestanden en
            Git-wijzigingen. Je kunt de wijziging verder aanpassen, afwijzen of
            via jullie eigen proces terugdraaien. Je hoeft het werk niet uit een
            chat te kopiëren om er een beoordeelbare wijziging van te maken.
          </p>
        </article>
      </div>
      <div class="crw-planning">
        <div>
          <p class="eyebrow text-brand-ink">
            Een coding agent met een werkritme
          </p>
          <h3>Je hoeft niet voor iedere taak<br />op Starten te drukken.</h3>
          <p>
            Plan onderhoud, controles of een concrete programmeeropdracht op de
            serveromgeving. De server zet het werk op het juiste moment in de wachtrij; je
            browser mag dicht. Het resultaat verschijnt weer bij de taken die je
            kunt reviewen.
          </p>
          <ul class="crw-schedules">
            <li>
              <span>Maandag · 07:00</span
              ><strong>Wekelijkse controle van dependencies</strong
              ><small>Het echte geplande voorbeeld uit de productopname.</small>
            </li>
            <li>
              <span>Elke werkdag · voorbeeld</span
              ><strong>Draai de tests en onderzoek wat faalt</strong
              ><small
                >Een eigen opdracht, met de bronnen en rechten van de
                eigenaar.</small
              >
            </li>
            <li>
              <span>Bij een gebeurtenis</span
              ><strong>Een push of een nieuw issue als startpunt</strong
              ><small
                >Via een ingerichte webhook voor de ondersteunde
                Git-/issue-omgeving.</small
              >
            </li>
          </ul>
        </div>
        <div class="crw-schedule-screen">
          <CoderScreen
            shot="wachtrij"
            path="/queue"
            alt="Echte wachtrij van Coder met de wekelijkse geplande dependencycontrole"
            theme="light"
          />
          <p>
            Echte productopname met een fictief demoproject. De geplande taak is
            zichtbaar onder Ingepland.
          </p>
        </div>
      </div>
      <div class="crw-schedule-types">
        <span>Eenmalig</span><span>Dagelijks</span><span>Werkdagen</span
        ><span>Wekelijks</span><span>Eigen cron-schema</span
        ><span>Bij een push</span><span>GitHub-issue</span
        ><span>Linear-issue</span>
      </div>
      <p class="crw-note">
        De serveromgeving en taakverwerking moeten beschikbaar zijn. Een planning gebruikt
        de rechten en grenzen van de eigenaar. Externe repositories en webhooks
        moeten bereikbaar zijn. Met meerdere rondes kan de agent doorwerken aan
        de opdracht; beoordelen en publiceren blijven onderdeel van het
        afgesproken reviewproces.
      </p>
    </div>
  </section>
</template>
<style scoped>
.coder-repository-workflow {
  padding-block: 5rem;
  background: #f7f7f1;
  scroll-margin-top: 6rem;
}
.crw-heading {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 4rem;
  align-items: end;
  margin-bottom: 2.5rem;
}
.crw-heading h2 {
  font: 700 clamp(2rem, 3.3vw, 3.1rem)/1.13 var(--font-heading);
  letter-spacing: -0.035em;
  margin-top: 1rem;
}
.crw-heading > p {
  font-size: 1rem;
  line-height: 1.9;
  color: #5f6e53;
}
.crw-git-flow {
  list-style: none;
  display: grid;
  grid-template-columns: repeat(5, 1fr);
  gap: 1px;
  background: #bccbac;
  border: 1px solid #bccbac;
  border-radius: 1rem;
  overflow: hidden;
  padding: 0;
}
.crw-git-flow > li {
  display: flex;
  flex-direction: column;
  gap: 1rem;
  padding: 1.5rem 1.1rem;
  background: #e8eedc;
}
.crw-git-flow li:nth-child(4) {
  background: #dce8c6;
}
.crw-git-flow svg {
  color: #658e3c;
}
.crw-git-flow strong {
  font-size: 0.83rem;
  font-weight: 600;
}
.crw-git-flow span {
  font-size: 0.65rem;
  line-height: 1.8;
  color: #60784a;
}
.crw-benefits {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 2rem 3rem;
  margin-top: 2.5rem;
}
.crw-benefits h3 {
  font: 600 1rem/1.5 var(--font-heading);
}
.crw-benefits p {
  font-size: 0.83rem;
  line-height: 1.95;
  color: #60734f;
  margin-top: 0.7rem;
}
.crw-planning {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 3rem;
  margin-top: 3rem;
  padding-top: 3rem;
  border-top: 1px solid #cfdbc1;
  align-items: center;
}
.crw-planning h3 {
  font: 600 1.75rem/1.2 var(--font-heading);
  letter-spacing: -0.03em;
  margin: 1rem 0;
}
.crw-planning > div > p:not(.eyebrow) {
  font-size: 0.84rem;
  line-height: 1.95;
  color: #617451;
}
.crw-schedules {
  list-style: none;
  padding: 0;
  margin-top: 1.5rem;
  display: flex;
  flex-direction: column;
  gap: 0.8rem;
}
.crw-schedules li {
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
  border: 1px solid #cdd9bf;
  border-radius: 0.7rem;
  padding: 1rem 1.2rem;
  background: #eff3e8;
}
.crw-schedules li > span {
  font: 0.55rem var(--font-mono);
  color: #5c7942;
}
.crw-schedules strong {
  font-size: 0.78rem;
  font-weight: 500;
}
.crw-schedules small {
  font-size: 0.66rem;
  line-height: 1.9;
  color: #657c51;
}
.crw-schedule-screen {
  min-width: 0;
}
.crw-schedule-screen > p {
  font-size: 0.65rem !important;
  color: #63794f !important;
  margin-top: 1rem;
}
.crw-schedule-types {
  display: flex;
  gap: 0.5rem;
  flex-wrap: wrap;
  margin-top: 1.7rem;
}
.crw-schedule-types > span {
  font: 0.56rem var(--font-mono);
  padding: 0.55rem 0.7rem;
  border: 1px solid #cad7b9;
  color: #5b7841;
  border-radius: 2rem;
}
.crw-note {
  font-size: 0.66rem;
  line-height: 1.95;
  color: #657c51;
  margin-top: 1.5rem;
  max-width: 65rem;
}
@media (max-width: 900px) {
  .crw-heading {
    grid-template-columns: 1fr;
    gap: 1.2rem;
  }
  .crw-git-flow {
    grid-template-columns: repeat(3, 1fr);
  }
  .crw-planning {
    gap: 2rem;
  }
  .crw-benefits {
    gap: 1.5rem 2rem;
  }
}
@media (max-width: 650px) {
  .coder-repository-workflow {
    padding-block: 3.5rem;
  }
  .crw-git-flow {
    grid-template-columns: 1fr 1fr;
  }
  .crw-git-flow li:last-child {
    grid-column: 1/-1;
  }
  .crw-benefits,
  .crw-planning {
    grid-template-columns: 1fr;
  }
  .crw-planning h3 {
    font-size: 1.55rem;
  }
}
@media (max-width: 420px) {
  .crw-git-flow {
    grid-template-columns: 1fr;
  }
  .crw-git-flow > li {
    display: grid;
    grid-template-columns: 2rem 1fr;
    gap: 0.4rem 1rem;
    padding: 1.2rem;
  }
  .crw-git-flow svg {
    grid-row: 1/3;
  }
  .crw-git-flow strong,
  .crw-git-flow span {
    grid-column: 2;
  }
}
</style>
