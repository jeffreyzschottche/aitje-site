<template>
  <section id="kennis-rag" class="assistant-rag">
    <div class="container-page">
      <div class="rag-heading">
        <div>
          <p class="eyebrow text-brand-ink">
            Eigen kennis, onderbouwde antwoorden
          </p>
          <h2>De juiste passage.<br />Voor de juiste persoon.</h2>
        </div>
        <p>
          RAG betekent dat de Assistent eerst relevante informatie uit jullie
          kennisbank ophaalt en die meegeeft aan het antwoordmodel. Het model
          krijgt context uit jullie documenten. Je hoeft het taalmodel daarvoor
          niet opnieuw te trainen.
        </p>
      </div>
      <ol class="rag-pipeline">
        <li>
          <span>01</span><AppIcon name="file-search" :size="25" />
          <h3>Inlezen</h3>
          <p>
            Documenten, tabellen en scans worden omgezet naar tekst. Pagina’s en
            secties blijven herkenbaar; OCR helpt bij scans.
          </p>
        </li>
        <li>
          <span>02</span><AppIcon name="library" :size="25" />
          <h3>Indexeren</h3>
          <p>
            Passages krijgen een embedding: een numerieke weergave om op
            betekenis te zoeken. Tekst en vectoren staan lokaal in PostgreSQL +
            pgvector.
          </p>
        </li>
        <li>
          <span>03</span><AppIcon name="shield" :size="25" />
          <h3>Toegang filteren</h3>
          <p>
            De zoekopdracht houdt rekening met de rol, categorieën en
            documentrechten. Beschermde kennis wordt binnen de databasequery
            afgeschermd.
          </p>
        </li>
        <li>
          <span>04</span><AppIcon name="search" :size="25" />
          <h3>Zoeken en rangschikken</h3>
          <p>
            Zoeken op betekenis en Nederlandse trefwoorden wordt gecombineerd.
            Prioriteit, geldigheid en een reranker helpen de bruikbare passages
            bovenaan te krijgen.
          </p>
        </li>
        <li>
          <span>05</span><AppIcon name="message" :size="25" />
          <h3>Antwoorden met bronnen</h3>
          <p>
            De geselecteerde passages gaan naar het gekozen model. De gebruiker
            krijgt bronverwijzingen en kan de herkomst binnen de actuele rechten
            bekijken.
          </p>
        </li>
      </ol>
      <div class="rag-quality">
        <div>
          <p class="eyebrow text-brand-ink">Hoe goed werkt die RAG?</p>
          <h3>Je meet twee dingen:<br />vinden én beantwoorden.</h3>
          <p>
            Een goed antwoord begint bij de juiste bron. Daarom kun je in
            kennisbeheer een testvraag stellen, de rol kiezen en bekijken wat
            wordt gevonden of afgewezen. Sla verwachte bronnen op in een
            evaluatieset en herhaal de proef na wijzigingen.
          </p>
          <p>
            Daarna beoordelen we het antwoord zelf: klopt het met de bron,
            citeert het de juiste passage en erkent het wanneer informatie
            ontbreekt? Goede zoekresultaten alleen bewijzen nog geen correct
            geformuleerd antwoord.
          </p>
        </div>
        <dl class="rag-checks">
          <div>
            <dt>Vindt hij het juiste document?</dt>
            <dd>
              Controleer of de verwachte bron tussen de treffers zit en hoe hoog
              die staat. De evaluatie laat hit, recall en verandering ten
              opzichte van de vorige proef zien.
            </dd>
          </div>
          <div>
            <dt>Blijft afgeschermde kennis afgeschermd?</dt>
            <dd>
              Test dezelfde vraag met verschillende rollen. Ook het openen van
              een bron uit een oud gesprek controleert de huidige toegang
              opnieuw.
            </dd>
          </div>
          <div>
            <dt>Gokt hij als het antwoord ontbreekt?</dt>
            <dd>
              In de modus Alleen bedrijfskennis geeft een lege zoekuitkomst
              direct aan dat het niet in de kennisbank staat. Andere modi en
              modelantwoorden vragen hun eigen controle.
            </dd>
          </div>
          <div>
            <dt>Blijft de kwaliteit overeind na een wijziging?</dt>
            <dd>
              Test opnieuw na nieuwe documenten, andere prioriteiten of een
              embeddingwissel. Herindexering bouwt naast de actieve index en
              schakelt pas over wanneer de nieuwe index compleet is.
            </dd>
          </div>
        </dl>
      </div>
      <div class="rag-proof-note">
        <AppIcon name="file-search" :size="24" />
        <div>
          <h3>Een proef met jullie kennis geeft het relevante bewijs.</h3>
          <p>
            We publiceren hier geen algemeen nauwkeurigheidspercentage voor
            iedere kennisbank. De software bevat tests en een
            acceptatiehulpmiddel voor bronnen, rechten, onbekende vragen en
            antwoorden. De bestaande fictieve demo bewijst geen gemeten
            kwaliteit op jullie documenten. Bij de inrichting testen we met
            representatieve vragen, echte lokale modellen en de gekozen
            hardware.
          </p>
        </div>
      </div>
      <p class="rag-footnote">
        Leesbare documenten, actuele informatie, de juiste rechten en een
        passend embedding-, reranker- en antwoordmodel bepalen samen de
        kwaliteit. Een slecht leesbare scan of ontbrekende afspraak wordt niet
        vanzelf betrouwbare kennis.
      </p>
    </div>
  </section>
</template>
<style scoped>
.assistant-rag {
  padding-block: 5rem;
  background: #eeefe7;
  scroll-margin-top: 6rem;
}
.rag-heading {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 4rem;
  align-items: end;
  margin-bottom: 2.5rem;
}
.rag-heading h2 {
  font: 700 clamp(2rem, 3.3vw, 3.1rem)/1.13 var(--font-heading);
  letter-spacing: -0.035em;
  margin-top: 1rem;
}
.rag-heading > p {
  font-size: 1rem;
  line-height: 1.9;
  color: #5e6c53;
}
.rag-pipeline {
  display: grid;
  grid-template-columns: repeat(5, 1fr);
  gap: 1px;
  border: 1px solid #c7d2b9;
  border-radius: 1rem;
  overflow: hidden;
  list-style: none;
  padding: 0;
  background: #c7d2b9;
}
.rag-pipeline > li {
  padding: 1.5rem 1.1rem;
  background: #f8f9f2;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
}
.rag-pipeline li > span {
  font: 0.6rem var(--font-mono);
  color: #6e8353;
}
.rag-pipeline li > svg {
  color: #789447;
  margin: 1rem 0;
}
.rag-pipeline h3 {
  font: 600 0.86rem/1.4 var(--font-heading);
}
.rag-pipeline p {
  font-size: 0.72rem;
  line-height: 1.95;
  color: #617250;
  margin-top: 0.7rem;
}
.rag-quality {
  display: grid;
  grid-template-columns: 0.85fr 1.15fr;
  gap: 4rem;
  margin-top: 3rem;
}
.rag-quality h3 {
  font: 600 1.7rem/1.2 var(--font-heading);
  letter-spacing: -0.025em;
  margin: 1rem 0;
}
.rag-quality > div > p:not(.eyebrow) {
  font-size: 0.86rem;
  line-height: 1.95;
  color: #637453;
  margin-top: 1rem;
}
.rag-checks {
  border: 1px solid #c5d1b5;
  border-radius: 1rem;
  background: #e5ecd9;
  overflow: hidden;
}
.rag-checks > div {
  padding: 1.3rem 1.5rem;
  border-bottom: 1px solid #c8d6b8;
}
.rag-checks > div:last-child {
  border: 0;
}
.rag-checks dt {
  font-size: 0.84rem;
  font-weight: 600;
}
.rag-checks dd {
  font-size: 0.76rem;
  line-height: 1.95;
  color: #5b7147;
  margin-top: 0.5rem;
}
.rag-proof-note {
  display: flex;
  gap: 1rem;
  align-items: flex-start;
  padding: 1.5rem;
  border: 1px solid #c7d2b9;
  border-radius: 1rem;
  margin-top: 2rem;
  background: #f7f8f1;
}
.rag-proof-note > svg {
  flex-shrink: 0;
  color: #6f8b43;
}
.rag-proof-note h3 {
  font: 600 1rem/1.4 var(--font-heading);
}
.rag-proof-note p {
  font-size: 0.76rem;
  line-height: 1.95;
  color: #617351;
  margin-top: 0.6rem;
}
.rag-footnote {
  font-size: 0.65rem;
  line-height: 1.9;
  color: #647750;
  margin-top: 1.3rem;
  max-width: 65rem;
}
@media (max-width: 1050px) {
  .rag-pipeline {
    grid-template-columns: repeat(3, 1fr);
  }
  .rag-pipeline > li {
    padding: 1.3rem;
  }
  .rag-quality {
    gap: 2rem;
  }
}
@media (max-width: 760px) {
  .assistant-rag {
    padding-block: 3.5rem;
  }
  .rag-heading,
  .rag-quality {
    grid-template-columns: 1fr;
    gap: 1.3rem;
  }
  .rag-pipeline {
    grid-template-columns: 1fr 1fr;
  }
  .rag-pipeline > li:last-child {
    grid-column: 1/-1;
  }
  .rag-quality {
    margin-top: 2rem;
  }
  .rag-proof-note {
    padding: 1.2rem;
  }
}
@media (max-width: 420px) {
  .rag-pipeline {
    grid-template-columns: 1fr;
  }
  .rag-pipeline > li {
    display: grid;
    grid-template-columns: 2rem 1fr;
    gap: 0.5rem 1rem;
  }
  .rag-pipeline li > span {
    grid-column: 1;
    grid-row: 1;
  }
  .rag-pipeline li > svg {
    grid-column: 1;
    grid-row: 2;
    margin: 0.5rem 0;
  }
  .rag-pipeline h3 {
    grid-column: 2;
    grid-row: 1;
  }
  .rag-pipeline p {
    grid-column: 2;
    grid-row: 2;
    margin: 0;
  }
}
</style>
