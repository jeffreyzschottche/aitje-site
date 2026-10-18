<template>
  <section id="eigen-hardware" class="assistant-hardware">
    <div class="container-page">
      <div class="ah-heading">
        <div>
          <p class="eyebrow text-brand-ink">Local AI · on edge · on-premise</p>
          <h2>Je eigen AI.<br />Op je bureau. Of je eigen server.</h2>
        </div>
        <p>
          AITJE Assistent draait op een compacte computer op locatie of een
          geschikte Linux-server in jullie eigen omgeving. Je team werkt gewoon
          via de browser. AITJE stemt de hardware, modellen en inrichting af op
          jullie gebruik.
        </p>
      </div>
      <div class="ah-options">
        <article class="ah-option ah-edge">
          <div class="ah-option-label">
            <span>01 / Op locatie</span><span>On edge</span>
          </div>
          <figure class="ah-product">
            <img
              src="/img/assistant/v3/bosgame-aitje.webp"
              alt="Twee BOSGAME mini-pc’s in zilver en blauw, met een AITJE-sticker"
              width="1536"
              height="1024"
              loading="lazy"
            />
          </figure>
          <div class="ah-copy">
            <h3>Een kleine computer.<br />Een eigen AI-omgeving.</h3>
            <p>
              Een BOSGAME met passend geheugen kan het lokale model en de
              Assistent op locatie draaien. Jullie documenten, kennisbank en
              verwerking blijven binnen de ingerichte omgeving zolang je lokale
              diensten gebruikt.
            </p>
            <div class="ah-chips">
              <span>Lokaal model</span><span>Eigen kennisbank</span
              ><span>Browsertoegang</span>
            </div>
          </div>
        </article>
        <article class="ah-option ah-server">
          <div class="ah-option-label">
            <span>02 / Eigen infrastructuur</span><span>On-premise</span>
          </div>
          <figure class="ah-product ah-server-product">
            <img
              src="/img/assistant/v3/linux-aitje.webp"
              alt="AITJE Linux-server met monitor en terminalweergave"
              width="1536"
              height="1024"
              loading="lazy"
            />
            <div
              class="ah-terminal"
              aria-label="Illustratie van een lokale modelopdracht in een Linux-terminal"
            >
              <div class="ah-terminal-bar">
                <span /><span /><span /><i>Linux · lokale AI</i>
              </div>
              <code><span class="ah-prompt">$</span> aitje run qwen3.8</code>
              <div class="ah-terminal-model">
                <span>Qwen3.8</span><span>LOCAL</span>
              </div>
              <div class="ah-terminal-route">
                <span>AITJE Assistent</span><span>↓</span
                ><span>Jullie model · jullie kennis</span>
              </div>
              <p>
                Opdrachtvoorbeeld
                <span aria-hidden="true" class="ah-caret">▌</span>
              </p>
            </div>
          </figure>
          <div class="ah-copy">
            <h3>Dezelfde Assistent.<br />Op jullie eigen server.</h3>
            <p>
              Gebruik geschikte eigen servercapaciteit en opslag. We stemmen
              bereikbaarheid, toegang en modelverwerking af met jullie IT.
              Gebruikers hoeven zelf geen model op hun laptop of telefoon te
              installeren.
            </p>
            <div class="ah-chips">
              <span>Linux-server</span><span>Eigen netwerk</span
              ><span>Centraal beheer</span>
            </div>
          </div>
        </article>
      </div>
      <div class="ah-footnote">
        <p>
          Productillustraties van mogelijke installaties. De gekozen
          configuratie en capaciteit staan in je offerte; hardware is apart
          begroot.
        </p>
        <a href="#tokens-output"
          >Bekijk tokenkosten en modelprestaties
          <AppIcon name="chevron-down" :size="16"
        /></a>
      </div>
    </div>
  </section>
</template>

<style scoped>
.assistant-hardware {
  padding-block: 4.5rem;
  background: #f2f1e9;
  scroll-margin-top: 6rem;
}
.ah-heading {
  display: grid;
  grid-template-columns: 1.3fr 1fr;
  gap: 4rem;
  align-items: end;
  margin-bottom: 2.5rem;
}
.ah-heading h2 {
  font-size: clamp(2rem, 3.3vw, 3.1rem);
  line-height: 1.13;
  font-weight: 700;
  margin-top: 1rem;
  letter-spacing: -0.035em;
}
.ah-heading > p {
  font-size: 1rem;
  line-height: 1.85;
  color: var(--color-muted);
}
.ah-options {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 1.5rem;
}
.ah-option {
  min-width: 0;
  overflow: hidden;
  border: 1px solid #d7d8cb;
  border-radius: 1.5rem;
  background: #e9ebdf;
  position: relative;
}
.ah-server {
  background: #e1e7d8;
}
.ah-option-label {
  position: relative;
  z-index: 1;
  display: flex;
  justify-content: space-between;
  gap: 1rem;
  padding: 1.5rem 1.5rem 0;
  font: 0.6rem var(--font-mono);
  text-transform: uppercase;
  letter-spacing: 0.06em;
  color: #5d6c4b;
}
.ah-option-label > span:last-child {
  color: #607f36;
}
.ah-product {
  position: relative;
  margin: -0.5rem -0.5rem -1.5rem;
}
.ah-product > img {
  display: block;
  width: 100%;
  height: auto;
}
.ah-copy {
  padding: 0 2rem 2rem;
  position: relative;
  z-index: 1;
}
.ah-copy h3 {
  font-size: 1.5rem;
  line-height: 1.25;
  font-weight: 600;
  letter-spacing: -0.025em;
}
.ah-copy > p {
  font-size: 0.86rem;
  line-height: 1.85;
  color: #616c55;
  margin-top: 1rem;
}
.ah-chips {
  display: flex;
  gap: 0.5rem;
  flex-wrap: wrap;
  margin-top: 1.3rem;
}
.ah-chips > span {
  font: 0.58rem var(--font-mono);
  padding: 0.45rem 0.65rem;
  background: #ffffff80;
  border: 1px solid #c5cfb5;
  border-radius: 2rem;
  color: #5c7046;
}
.ah-terminal {
  position: absolute;
  left: 36.3%;
  top: 19%;
  width: 59.6%;
  height: 48.6%;
  overflow: hidden;
  border-radius: 0.1rem;
  background: #141b15;
  box-sizing: border-box;
  padding: 3% 3.5%;
  color: #d9e5cb;
  font-family: var(--font-mono);
  font-size: clamp(0.45rem, 0.74vw, 0.7rem);
}
.ah-terminal-bar {
  display: flex;
  align-items: center;
  gap: 0.3em;
  margin-bottom: 1.8em;
  color: #93a288;
  font-size: 0.8em;
}
.ah-terminal-bar > span {
  width: 0.45em;
  height: 0.45em;
  border-radius: 50%;
  background: #778664;
}
.ah-terminal-bar > span:first-child {
  background: #dfb743;
}
.ah-terminal-bar > i {
  margin-left: auto;
  font-style: normal;
  white-space: nowrap;
}
.ah-terminal code {
  font: inherit;
  display: block;
  white-space: nowrap;
  color: #cde5a5;
}
.ah-prompt {
  color: #d7b541;
}
.ah-terminal-model {
  display: flex;
  justify-content: space-between;
  margin-top: 1.3em;
  font-size: 0.9em;
  gap: 1em;
}
.ah-terminal-model > span:last-child {
  color: #b5cc7d;
  font-size: 0.8em;
  border: 1px solid #546c36;
  border-radius: 0.3em;
  padding: 0.1em 0.5em;
}
.ah-terminal-route {
  display: flex;
  flex-direction: column;
  gap: 0.4em;
  font-size: 0.85em;
  color: #8fa77b;
  margin-top: 1.3em;
}
.ah-terminal-route > span:first-child {
  color: #dce9cd;
}
.ah-terminal > p {
  margin-top: 1.2em;
  font-size: 0.65em;
  color: #788c6a;
}
.ah-caret {
  color: #b7cd8d;
  animation: ah-blink 1.2s step-end infinite;
}
.ah-footnote {
  display: flex;
  justify-content: space-between;
  gap: 2rem;
  align-items: start;
  margin-top: 1.5rem;
  font-size: 0.68rem;
  line-height: 1.8;
  color: var(--color-muted);
}
.ah-footnote p {
  max-width: 36rem;
}
.ah-footnote a {
  display: flex;
  align-items: center;
  gap: 0.5rem;
  color: #667c43;
  text-decoration: underline;
  text-underline-offset: 3px;
}
@keyframes ah-blink {
  50% {
    opacity: 0;
  }
}
@media (prefers-reduced-motion: reduce) {
  .ah-caret {
    animation: none;
  }
}
@media (max-width: 900px) {
  .ah-heading {
    grid-template-columns: 1fr;
    gap: 1.3rem;
  }
  .ah-copy {
    padding: 0 1.3rem 1.5rem;
  }
  .ah-copy h3 {
    font-size: 1.3rem;
  }
  .ah-terminal {
    font-size: 0.48rem;
  }
  .ah-footnote {
    display: block;
  }
  .ah-footnote a {
    margin-top: 0.8rem;
  }
}
@media (max-width: 680px) {
  .assistant-hardware {
    padding-block: 3rem;
  }
  .ah-options {
    grid-template-columns: 1fr;
  }
  .ah-terminal {
    font-size: clamp(0.5rem, 2vw, 0.8rem);
  }
  .ah-option-label {
    padding: 1.3rem 1.3rem 0;
  }
  .ah-product {
    margin-top: 0;
  }
  .ah-copy {
    padding-top: 0.5rem;
  }
}
</style>
