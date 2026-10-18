<script setup lang="ts">
import { contactLink } from "@/content/site";
</script>
<template>
  <section id="externe-ai-privacy" class="assistant-external-privacy">
    <div class="container-page">
      <div class="aep-main">
        <div>
          <p class="eyebrow text-brand">OpenAI / Claude · lokale privacylaag</p>
          <h2>Een extern model.<br />Eerst lokaal anonimiseren.</h2>
          <p>
            Gebruik OpenAI of Claude binnen dezelfde Assistent, als jullie
            beheerder dat toestaat. Vóór de modelaanroep vervangt AITJE herkende
            persoonsgegevens lokaal door codes; het antwoord krijgt op jullie
            omgeving de oorspronkelijke waarden terug.
          </p>
          <ul>
            <li>
              <AppIcon name="shield" :size="19" />Anonimisering per rol
              verplicht stellen
            </li>
            <li>
              <AppIcon name="users" :size="19" />Modeltoegang en kosten per
              gebruiker begrenzen
            </li>
            <li>
              <AppIcon name="search" :size="19" />Per antwoord bekijken wat naar
              de provider ging
            </li>
          </ul>
        </div>
        <figure>
          <img
            src="/img/assistant/v4/privacy-gateway.webp"
            alt="3D-conceptillustratie van een lokale AITJE-server met een privacyschild vóór externe AI-verwerking"
            width="1536"
            height="1024"
            loading="lazy"
          />
          <figcaption>
            Conceptillustratie · lokale maskering vóór externe inferentie
          </figcaption>
        </figure>
      </div>
      <div class="aep-example">
        <div>
          <span>01 / In jullie omgeving</span
          ><code>Mail Noor de Vries op noor@voorbeeld.nl</code>
        </div>
        <AppIcon name="arrow-right" :size="22" />
        <div>
          <span>02 / Naar het gekozen externe model</span
          ><code>Mail [PERSOON_1] op [EMAIL_1]</code>
        </div>
        <p>
          Fictief tekstvoorbeeld. De vertaaltabel blijft in jullie
          AITJE-omgeving.
        </p>
      </div>
      <details>
        <summary>
          Wat beschermt deze privacylaag precies?
          <AppIcon name="chevron-down" :size="18" />
        </summary>
        <p>
          Dit is omkeerbare pseudonimisering van herkende tekst, geen garantie
          dat alle informatie anoniem is. Niet-herkende inhoud en
          bedrijfsgeheimen kunnen meegaan; naamherkenning vraagt het lokale
          herkenningsmodel. Met anonimiseren aan worden afbeeldingen
          overgeslagen. Webzoeken en MCP-koppelingen hebben eigen rechten en
          vallen niet automatisch onder deze modelschakelaar.
        </p>
      </details>
      <NuxtLink
        class="aep-cta"
        :to="contactLink('demo-endpoint', 'aitje-assistent')"
        >Bekijk externe AI met jullie privacybeleid
        <AppIcon name="arrow-right" :size="17"
      /></NuxtLink>
    </div>
  </section>
</template>
<style scoped>
.assistant-external-privacy {
  padding: 6rem 0 4rem;
  background: #101b0f;
  color: #e8efdf;
  scroll-margin-top: 6rem;
  overflow: clip;
}
.aep-main {
  display: grid;
  grid-template-columns: minmax(0, 1fr) minmax(0, 1.2fr);
  gap: 1.5rem;
  align-items: center;
}
.aep-main h2 {
  font: 700 clamp(2rem, 3.3vw, 3.1rem)/1.12 var(--font-heading);
  letter-spacing: -0.035em;
  margin: 1rem 0 1.5rem;
}
.aep-main p {
  font-size: 1rem;
  line-height: 1.9;
  color: #b8c8ad;
}
.aep-main ul {
  display: grid;
  gap: 0.8rem;
  margin-top: 1.5rem;
  font-size: 0.84rem;
  color: #cbd9bf;
}
.aep-main li {
  display: flex;
  gap: 0.6rem;
  align-items: center;
}
.aep-main li > svg {
  flex-shrink: 0;
  color: #e5c94e;
}
.aep-main figure {
  position: relative;
  margin-top: -6rem;
  margin-right: -3rem;
}
.aep-main img {
  display: block;
  width: 100%;
  height: auto;
}
.aep-main figcaption {
  text-align: center;
  font-size: 0.6rem;
  color: #95aa85;
  margin-top: -1rem;
}
.aep-example {
  display: grid;
  grid-template-columns: minmax(0, 1fr) auto minmax(0, 1fr);
  gap: 1rem;
  align-items: center;
  border: 1px solid #3b4d30;
  border-radius: 1rem;
  background: #1a2915;
  padding: 1.5rem;
  margin: 2.5rem 0 1.5rem;
}
.aep-example > div {
  min-width: 0;
}
.aep-example span {
  display: block;
  font: 0.6rem var(--font-mono);
  text-transform: uppercase;
  color: #b4c49f;
  margin-bottom: 0.6rem;
}
.aep-example code {
  font-size: 0.8rem;
  white-space: normal;
  overflow-wrap: anywhere;
  color: #e4d28a;
}
.aep-example > p {
  grid-column: 1/-1;
  font-size: 0.7rem;
  color: #a1b68f;
  line-height: 1.7;
}
.assistant-external-privacy details {
  padding: 1rem 0;
  border-block: 1px solid #34462b;
}
.assistant-external-privacy summary {
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 1rem;
  cursor: pointer;
  list-style: none;
  font-size: 0.85rem;
}
.assistant-external-privacy details p {
  max-width: 65rem;
  color: #aebfa2;
  font-size: 0.8rem;
  line-height: 1.9;
  margin-top: 1rem;
}
.aep-cta {
  display: inline-flex;
  align-items: center;
  gap: 0.7rem;
  min-height: 48px;
  color: #eed04f;
  font-size: 0.88rem;
  margin-top: 1.5rem;
}
@media (max-width: 900px) {
  .aep-main {
    grid-template-columns: 1fr;
  }
  .aep-main figure {
    margin: 0;
    max-width: 45rem;
    justify-self: center;
  }
  .aep-main figcaption {
    margin-top: 0;
  }
}
@media (max-width: 600px) {
  .aep-example {
    grid-template-columns: 1fr;
    padding: 1.2rem;
  }
  .aep-example > svg {
    transform: rotate(90deg);
    margin: 0.4rem 0;
  }
}
</style>
