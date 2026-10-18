<script setup lang="ts">
import {
  euros,
  getInstalledProductOffer,
  pricing,
  productIntroductionNote,
} from "@/content/pricing";
import { contactLink } from "@/content/site";
const offer = getInstalledProductOffer("aitje-assistent")!;
const software = pricing.products["aitje-assistent"].software;
</script>
<template>
  <section id="prijs" class="assistant-pricing">
    <div class="container-page">
      <div class="ap-heading">
        <p class="eyebrow text-brand-ink">De investering in jullie eigen AI</p>
        <h2>Een complete omgeving.<br />Een prijs die je kunt volgen.</h2>
        <p>
          Je koopt AITJE Assistent per omgeving. De softwareprijs groeit niet
          per medewerker; de benodigde capaciteit stemmen we af op jullie
          gebruik.
        </p>
      </div>
      <div class="ap-main">
        <div class="ap-product">
          <div class="ap-product-scene">
            <span class="ap-ownership">Local AI · in eigen beheer</span
            ><ProductPackshot
              src="/img/covers/v2/aitje-assistent.webp"
              alt="AITJE Assistent-productverpakking"
              loading="lazy"
              class="ap-packshot"
            />
            <div class="ap-scene-tags">
              <span><AppIcon name="message" :size="16" />Chat</span
              ><span><AppIcon name="library" :size="16" />Kennis</span
              ><span><AppIcon name="shield" :size="16" />Beheer</span>
            </div>
          </div>
          <div class="ap-license">
            <AppIcon name="users" :size="26" />
            <div>
              <strong>Eén product voor jullie omgeving.</strong>
              <p>
                Blijvend gebruik van de opgeleverde versie. Gebruikers en
                gelijktijdig gebruik passen binnen de ingerichte hardware en
                limieten.
              </p>
            </div>
          </div>
        </div>
        <div class="ap-install">
          <div class="ap-offer-heading">
            <span class="ap-small-label">AITJE regelt het</span
            ><UiBadge tone="brand">Met basisinstallatie</UiBadge>
          </div>
          <p class="ap-price">{{ euros(offer.price) }}</p>
          <p class="ap-price-note">Product + basisinstallatie · excl. btw</p>
          <p class="hardware-cost-note">
            <AppIcon name="plus" :size="19" /> Hardware of hosting komt er apart
            bij · op offerte
          </p>
          <div class="ap-price-bars" aria-hidden="true">
            <span class="ap-software-bar" :style="{ flex: software }" /><span
              class="ap-install-bar"
              :style="{ flex: pricing.installation.from }"
            />
          </div>
          <dl class="ap-breakdown">
            <div>
              <dt><i class="ap-key-software" />AITJE Assistent-software</dt>
              <dd>{{ euros(software) }}</dd>
            </div>
            <div>
              <dt><i class="ap-key-install" />Installatie en inrichting</dt>
              <dd>vanaf {{ euros(pricing.installation.from) }}</dd>
            </div>
            <div v-if="offer.discount">
              <dt>Introductievoordeel</dt>
              <dd>−{{ euros(offer.discount) }}</dd>
            </div>
            <div class="ap-total">
              <dt>Product + basisinstallatie</dt>
              <dd>{{ euros(offer.price) }}</dd>
            </div>
          </dl>
          <p v-if="offer.introductory" class="ap-fine">
            Regulier vanaf {{ euros(offer.standard) }}.
            {{ productIntroductionNote }}
          </p>
          <UiButton
            :to="contactLink('product-regelen', 'aitje-assistent')"
            arrow
            size="lg"
            class="mt-6 w-full"
            >Laat AITJE het regelen</UiButton
          >
          <p class="ap-fine">
            Installeren op een vooraf afgestemde, geschikte omgeving, werking
            testen en uitleg geven. Korte nazorg spreken we af. De
            basisinstallatie is begroot op twee tot tweeënhalf uur.
          </p>
        </div>
      </div>
      <ProductDeploymentPicker product="aitje-assistent" />

      <div class="ap-complete">
        <div>
          <AppIcon name="message" :size="26" />
          <h3>De complete werkplek</h3>
          <p>
            Chat met lokale modellen, kennisbank met back-up, accounts en
            rollen, modelkeuze en werkstanden.
          </p>
        </div>
        <div>
          <AppIcon name="server" :size="26" />
          <h3>Lokale verwerking</h3>
          <p>
            Voor lokale modelverwerking is er geen externe AI-tokenrekening.
            Hardware, energie en beheer horen bij de totale kosten.
          </p>
        </div>
        <div>
          <AppIcon name="wrench" :size="26" />
          <h3>Hulp op jullie niveau</h3>
          <p>
            Ondersteuning en onderhoud zijn optioneel, vanaf
            {{ euros(pricing.support.core.monthly) }} per maand. Updates, nieuwe
            modellen en aanvullende inrichting spreken we apart af.
          </p>
        </div>
      </div>
      <div class="ap-options">
        <div class="ap-self">
          <AppIcon name="terminal" :size="30" />
          <div>
            <h3>Zelf installeren op geschikte hardware</h3>
            <p>
              De complete softwareomgeving voor {{ euros(software) }} per
              omgeving, excl. btw. Installatie en hardware zijn niet inbegrepen;
              hulp kun je apart afspreken.
            </p>
          </div>
          <UiButton
            :to="contactLink('zelfinstallatie', 'aitje-assistent')"
            variant="dark"
            arrow
            >Bestel voor zelfinstallatie</UiButton
          >
        </div>
        <details>
          <summary>
            Wat komt er eventueel aanvullend bij?<AppIcon
              name="chevron-down"
              :size="18"
            />
          </summary>
          <div class="ap-additions">
            <span
              ><AppIcon name="cpu" :size="19" />Hardware, serverhuur en
              energie</span
            ><span
              ><AppIcon name="library" :size="19" />Opschonen en uitgebreid
              inrichten van kennis</span
            ><span
              ><AppIcon name="plug" :size="19" />Koppelingen en maatwerk</span
            ><span
              ><AppIcon name="wrench" :size="19" />Updates, onderhoud en
              begeleiding</span
            ><span
              ><AppIcon name="globe" :size="19" />Externe API- en
              gebruikskosten</span
            ><span
              ><AppIcon name="compass" :size="19" />Reis-, locatie- en
              netwerkwerk</span
            >
          </div>
          <p>
            Alle bedragen zijn exclusief btw. Deze onderdelen worden vooraf
            apart begroot. Een demo of inventarisatie helpt de benodigde
            omgeving en inrichting bepalen.
          </p>
        </details>
      </div>
    </div>
  </section>
</template>
<style scoped>
.assistant-pricing {
  padding-block: 5rem;
  background: #eeefe8;
  scroll-margin-top: 6rem;
}
.ap-heading {
  max-width: 48rem;
  margin-bottom: 3rem;
}
.ap-heading h2 {
  font-size: clamp(2rem, 3.4vw, 3.2rem);
  line-height: 1.12;
  font-weight: 700;
  margin: 1rem 0 1.5rem;
}
.ap-heading > p:last-child {
  font-size: 1.05rem;
  line-height: 1.85;
  color: var(--color-muted);
}
.ap-main {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 2rem;
  align-items: stretch;
}
.ap-product {
  min-width: 0;
}
.ap-product-scene {
  position: relative;
  background:
    radial-gradient(ellipse at 50% 60%, #e6cf64a0, transparent 65%), #dfe5d0;
  border: 1px solid #cbd3b9;
  border-radius: 1.5rem;
  padding: 2rem;
  overflow: hidden;
  min-height: 28rem;
  display: flex;
  flex-direction: column;
  align-items: center;
}
.ap-ownership,
.ap-small-label {
  font: 0.65rem var(--font-mono);
  text-transform: uppercase;
  letter-spacing: 0.1em;
  color: #57663d;
}
.ap-packshot {
  width: 100%;
  max-width: 20rem;
  flex: 1;
  filter: drop-shadow(0 22px 20px #4b4d2430);
  margin-block: 1rem;
}
.ap-scene-tags {
  display: flex;
  gap: 0.6rem;
  justify-content: center;
}
.ap-scene-tags > span {
  display: flex;
  gap: 0.5rem;
  align-items: center;
  border: 1px solid #a5b386;
  background: #f4f7eb90;
  padding: 0.55rem 0.85rem;
  border-radius: 0.7rem;
  font-size: 0.75rem;
}
.ap-license {
  display: flex;
  gap: 1rem;
  padding: 1.5rem 0.3rem;
}
.ap-license > svg {
  flex-shrink: 0;
  color: #566d33;
}
.ap-license strong {
  font-size: 0.95rem;
}
.ap-license p {
  font-size: 0.82rem;
  line-height: 1.8;
  color: var(--color-muted);
  margin-top: 0.6rem;
}
.ap-install {
  padding: 2rem;
  background: #fff;
  border: 1px solid #cbd2bc;
  border-radius: 1.5rem;
}
.ap-offer-heading {
  display: flex;
  gap: 1rem;
  justify-content: space-between;
  align-items: center;
}
.ap-price {
  font: 700 4rem var(--font-heading);
  letter-spacing: -0.05em;
  margin-top: 1.5rem;
  line-height: 1.1;
}
.ap-price-note {
  font-size: 0.8rem;
  color: var(--color-muted);
  margin-top: 0.5rem;
}
.ap-price-bars {
  display: flex;
  gap: 5px;
  height: 13px;
  border-radius: 5px;
  overflow: hidden;
  margin-top: 2rem;
}
.ap-software-bar,
.ap-key-software {
  background: #27351c;
}
.ap-install-bar,
.ap-key-install {
  background: #e3bb18;
}
.ap-breakdown {
  margin-top: 1rem;
}
.ap-breakdown > div {
  display: flex;
  justify-content: space-between;
  gap: 1rem;
  padding: 0.9rem 0;
  border-bottom: 1px solid #dce1d3;
  font-size: 0.85rem;
}
.ap-breakdown dt {
  display: flex;
  gap: 0.5rem;
  align-items: center;
}
.ap-breakdown dd {
  font-weight: 600;
  white-space: nowrap;
}
.ap-breakdown i {
  width: 8px;
  height: 8px;
  border-radius: 2px;
  flex-shrink: 0;
}
.ap-breakdown .ap-total {
  font-weight: 600;
  font-size: 0.95rem;
  border-bottom: 0;
}
.ap-total dd {
  font-size: 1.1rem;
}
.ap-fine {
  font-size: 0.7rem;
  line-height: 1.8;
  color: var(--color-muted);
  margin-top: 1rem;
}
.ap-environment {
  display: grid;
  grid-template-columns: 1.1fr 1fr;
  gap: 3rem;
  border: 1px solid #cbd4bb;
  background: #f6f8f0;
  border-radius: 1.5rem;
  margin-top: 1.5rem;
  padding: 2rem;
  align-items: center;
}
.ap-environment h3 {
  font-weight: 600;
  font-size: 1.5rem;
  line-height: 1.35;
  margin: 1rem 0;
}
.ap-environment p:not(.eyebrow) {
  font-size: 0.85rem;
  line-height: 1.85;
  color: var(--color-muted);
  margin-top: 1rem;
}
.ap-environment-tabs {
  display: flex;
  gap: 0.4rem;
  flex-wrap: wrap;
}
.ap-environment-tabs button {
  display: flex;
  gap: 0.5rem;
  align-items: center;
  padding: 0.6rem 0.7rem;
  border: 1px solid #c7d3b3;
  border-radius: 0.6rem;
  font-size: 0.7rem;
  cursor: pointer;
}
.ap-environment-tabs button[aria-pressed="true"] {
  background: #e0e9cb;
  border-color: #7e945c;
}
.ap-cost-stack {
  display: grid;
  grid-template-columns: 1fr auto 1fr;
  gap: 0.8rem;
  align-items: center;
}
.ap-cost-stack > div {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 0.8rem;
  text-align: center;
  background: #fff;
  border: 1px solid #cbd8b7;
  border-radius: 1.1rem;
  padding: 1.5rem 1rem;
  min-height: 12rem;
}
.ap-cost-stack strong {
  font-size: 0.85rem;
}
.ap-cost-stack span:not(.ap-stack-plus) {
  font-size: 0.68rem;
  color: #6a785a;
  line-height: 1.6;
}
.ap-stack-plus {
  font-size: 1.5rem;
  color: #667b4a;
}
.ap-complete {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 2rem;
  margin-block: 2.5rem;
  padding-block: 1rem;
}
.ap-complete svg {
  color: #607743;
}
.ap-complete h3 {
  font-size: 1rem;
  font-weight: 600;
  margin: 1rem 0 0.7rem;
}
.ap-complete p {
  font-size: 0.85rem;
  line-height: 1.85;
  color: var(--color-muted);
}
.ap-self {
  display: flex;
  align-items: center;
  gap: 1.5rem;
  background: #fff;
  border: 1px solid #d0d8c3;
  border-radius: 1.2rem;
  padding: 1.5rem;
}
.ap-self > svg {
  flex-shrink: 0;
}
.ap-self > div {
  flex: 1;
}
.ap-self h3 {
  font-size: 1.1rem;
  font-weight: 600;
}
.ap-self p {
  font-size: 0.83rem;
  line-height: 1.8;
  color: var(--color-muted);
  margin-top: 0.5rem;
}
.ap-options details {
  border: 1px solid #c9d4b8;
  border-radius: 1rem;
  padding: 1.2rem 1.5rem;
  margin-top: 1rem;
}
.ap-options summary {
  display: flex;
  justify-content: space-between;
  gap: 1rem;
  list-style: none;
  cursor: pointer;
  font-weight: 500;
  font-size: 0.9rem;
}
.ap-additions {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 1rem;
  padding-top: 1.5rem;
}
.ap-additions > span {
  display: flex;
  gap: 0.7rem;
  align-items: center;
  font-size: 0.8rem;
  color: #4d5e39;
}
.ap-additions svg {
  flex-shrink: 0;
}
.ap-options details p {
  font-size: 0.75rem;
  line-height: 1.85;
  color: var(--color-muted);
  margin-top: 1.5rem;
}
@media (max-width: 1000px) {
  .ap-main,
  .ap-environment {
    grid-template-columns: 1fr;
    gap: 1.5rem;
  }
  .ap-product {
    display: grid;
    grid-template-columns: 1.1fr 1fr;
    gap: 1.5rem;
    align-items: center;
  }
  .ap-product-scene {
    min-height: 0;
    padding: 1.3rem;
  }
  .ap-packshot {
    max-width: 13rem;
  }
  .ap-license {
    padding: 0;
  }
  .ap-self {
    flex-wrap: wrap;
  }
  .ap-self > div {
    min-width: 60%;
  }
}
@media (max-width: 600px) {
  .assistant-pricing {
    padding-block: 3.5rem;
  }
  .ap-product {
    grid-template-columns: 1fr;
  }
  .ap-license {
    padding: 1rem 0.3rem;
  }
  .ap-packshot {
    max-width: 16rem;
  }
  .ap-install,
  .ap-environment {
    padding: 1.3rem;
  }
  .ap-price {
    font-size: 3.4rem;
  }
  .ap-cost-stack {
    gap: 0.4rem;
  }
  .ap-cost-stack > div {
    padding: 1rem 0.5rem;
  }
  .ap-complete,
  .ap-additions {
    grid-template-columns: 1fr;
  }
  .ap-offer-heading {
    gap: 0.4rem;
  }
  .ap-breakdown > div {
    font-size: 0.78rem;
  }
}
.hardware-cost-note {
  display: flex;
  align-items: center;
  gap: 0.5rem;
  padding: 0.85rem 1rem;
  margin: 1rem 0;
  background: #fff3be;
  border: 1px solid #e4ca59;
  border-radius: 0.8rem;
  font-size: 0.85rem;
  font-weight: 600;
  line-height: 1.6;
  color: #40370d;
}
.hardware-cost-note svg {
  flex-shrink: 0;
}
</style>
