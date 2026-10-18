<template>
  <section id="lokale-kosten" class="coder-local-value">
    <div class="container-page">
      <div class="clv-heading">
        <div>
          <p class="eyebrow text-brand-ink">Lees. Bouw. Test. Verbeter.</p>
          <h2>De tokens tellen door.<br />De externe rekening niet.</h2>
        </div>
        <p>
          Een coding agent gebruikt context, schrijft code en probeert opnieuw.
          Bij een lokaal model gebeurt dat op jullie eigen rekenkracht. Ook als
          een opdracht veel modelrondes vraagt.
        </p>
      </div>
      <div class="clv-board">
        <div class="clv-price">
          <span>Lokale modelverwerking</span><strong>€0</strong>
          <p>externe tokenkosten<br />per opdracht en per miljoen tokens</p>
        </div>
        <div class="clv-flow">
          <div>
            <span>01</span><AppIcon name="file-search" :size="23" /><strong
              >Code lezen</strong
            ><small>Bestanden en context</small>
          </div>
          <AppIcon name="arrow-right" :size="18" />
          <div>
            <span>02</span><AppIcon name="code" :size="23" /><strong
              >Bouwen</strong
            ><small>Bestanden wijzigen</small>
          </div>
          <AppIcon name="arrow-right" :size="18" />
          <div>
            <span>03</span><AppIcon name="repeat" :size="23" /><strong
              >Controleren</strong
            ><small>Testen en verbeteren</small>
          </div>
          <div class="clv-local">
            <AppIcon name="server" :size="16" />Alle modelrondes op de eigen box
            of server
          </div>
        </div>
      </div>
      <div class="clv-details">
        <p>
          De agent gebruikt wél tokens. Bij lokale inferentie koop je daarvoor
          geen tokens in bij een externe AI-aanbieder. De beschikbare hardware,
          context en ingestelde gebruiksgrenzen bepalen hoeveel werk tegelijk
          past.
        </p>
        <p>
          Software, hardware, stroom en onderhoud hebben eigen kosten. Kies je
          bewust een extern model, dan gelden de tarieven van die aanbieder en
          de ingestelde budgetten.
        </p>
        <a href="#prijs"
          >Bekijk de volledige prijsopbouw
          <AppIcon name="arrow-right" :size="15"
        /></a>
      </div>
    </div>
  </section>
</template>
<style scoped>
.coder-local-value {
  padding: 5rem 0;
  background: #f2f2ea;
  scroll-margin-top: 6rem;
}
.clv-heading {
  display: grid;
  grid-template-columns: 1.1fr 1fr;
  gap: 4rem;
  align-items: end;
  margin-bottom: 2.5rem;
}
.clv-heading h2 {
  font: 700 clamp(2rem, 3.3vw, 3.1rem)/1.12 var(--font-heading);
  letter-spacing: -0.035em;
  margin: 1rem 0;
}
.clv-heading > p {
  font-size: 1rem;
  line-height: 1.85;
  color: #5e6d50;
}
.clv-board {
  display: grid;
  grid-template-columns: 0.65fr 1.35fr;
  background: #1c2917;
  color: #eef3e5;
  border-radius: 1.5rem;
  overflow: hidden;
  border: 1px solid #36472b;
}
.clv-price {
  padding: 2rem 2.5rem;
  background: #25351e;
  border-right: 1px solid #415330;
}
.clv-price > span {
  font: 0.6rem var(--font-mono);
  text-transform: uppercase;
  letter-spacing: 0.1em;
  color: #a6bb86;
}
.clv-price > strong {
  display: block;
  font: 700 6.5rem/1.15 var(--font-heading);
  letter-spacing: -0.08em;
  margin: 0.8rem 0;
}
.clv-price p {
  font-size: 0.8rem;
  line-height: 1.8;
  color: #b5c7a0;
}
.clv-flow {
  display: grid;
  grid-template-columns: 1fr auto 1fr auto 1fr;
  align-items: center;
  gap: 1rem;
  padding: 2rem 2.3rem;
}
.clv-flow > div:not(.clv-local) {
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 0.7rem;
}
.clv-flow > div > span {
  font: 0.6rem var(--font-mono);
  color: #647c4d;
}
.clv-flow > div > svg {
  color: #c0b35e;
}
.clv-flow strong {
  font-size: 0.85rem;
  font-weight: 500;
}
.clv-flow small {
  font-size: 0.62rem;
  color: #8da17b;
  line-height: 1.7;
}
.clv-flow > svg {
  color: #526e3b;
}
.clv-local {
  grid-column: 1/-1;
  border-top: 1px solid #374b29;
  padding-top: 1.2rem;
  font: 0.6rem var(--font-mono);
  color: #a3b987;
  display: flex;
  align-items: center;
  gap: 0.6rem;
}
.clv-details {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 1rem 3rem;
  margin-top: 1.8rem;
}
.clv-details p {
  font-size: 0.77rem;
  color: #5f6f51;
  line-height: 1.85;
}
.clv-details a {
  display: flex;
  align-items: center;
  gap: 0.5rem;
  font-size: 0.73rem;
  color: #6a7e45;
  text-decoration: underline;
  text-underline-offset: 3px;
}
@media (max-width: 900px) {
  .clv-heading {
    grid-template-columns: 1fr;
    gap: 1rem;
  }
  .clv-price {
    padding: 2rem 1.5rem;
  }
  .clv-flow {
    padding: 2rem 1.5rem;
    gap: 0.6rem;
  }
  .clv-flow strong {
    font-size: 0.75rem;
  }
  .clv-flow small {
    font-size: 0.55rem;
  }
}
@media (max-width: 650px) {
  .coder-local-value {
    padding-block: 3.5rem;
  }
  .clv-board {
    grid-template-columns: 1fr;
  }
  .clv-price {
    border-right: 0;
    border-bottom: 1px solid #415330;
  }
  .clv-price > strong {
    font-size: 5.5rem;
  }
  .clv-details {
    grid-template-columns: 1fr;
    gap: 0.9rem;
  }
  .clv-flow {
    gap: 0.6rem;
    padding: 1.7rem 1.3rem;
  }
  .clv-flow small {
    font-size: 0.5rem;
  }
}
</style>
