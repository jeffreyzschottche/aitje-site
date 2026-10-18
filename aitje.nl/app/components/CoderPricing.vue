<script setup lang="ts">
import { euros, getInstalledProductOffer, pricing, productIntroductionNote } from "@/content/pricing";
import { contactLink } from "@/content/site";

const offer = getInstalledProductOffer("aitje-coder")!;
const software = pricing.products["aitje-coder"].software;
const environment = ref(0);
const environments = [
  {
    name: "Box voor één developer",
    icon: "cpu",
    title: "Compact, voor één developer.",
    text: "Een box met 32 GB geheugen draait één agenttaak tegelijk, naast aanvullen en chat in de editor. Op deze uitvoering is AITJE Coder doorgemeten. De hardware staat apart in je offerte.",
  },
  {
    name: "Box voor een team",
    icon: "server",
    title: "Meer geheugen voor een team.",
    text: "Een box met 128 GB geheugen is bedoeld voor meer developers en zwaardere modellen. Metingen op deze uitvoering volgen. We stemmen capaciteit en gelijktijdig gebruik af in de proef.",
  },
  {
    name: "Eigen hardware",
    icon: "wrench",
    title: "Benut wat er al staat.",
    text: "We beoordelen vooraf of jullie hardware geschikt is voor het model, de agent en het verwachte gebruik. Capaciteit, energie en beheer blijven onderdeel van de afweging.",
  },
];
const current = computed(() => environments[environment.value]!);
</script>
<template>
  <section id="prijs" class="coder-pricing">
    <div class="container-page">
      <div class="cp-heading">
        <p class="eyebrow text-brand-ink">De investering in jullie eigen coding agents</p>
        <h2>Eén keer betalen.<br />Geen teller per opdracht.</h2>
        <p>
          Je koopt AITJE Coder per omgeving. Voor lokaal modelgebruik is er geen
          externe tokenrekening. Hardware, energie en onderhoud horen wel bij
          de totale kosten; die maken we vooraf zichtbaar.
        </p>
      </div>
      <div class="cp-main">
        <div class="cp-product">
          <div class="cp-scene">
            <span class="cp-small-label">Local AI · in eigen beheer</span>
            <ProductPackshot src="/img/covers/v2/aitje-coder.webp" alt="AITJE Coder-productverpakking" loading="lazy" class="cp-packshot" />
            <div class="cp-tags">
              <span><AppIcon name="workflow" :size="16" />Agent</span>
              <span><AppIcon name="terminal" :size="16" />Eigen tools</span>
              <span><AppIcon name="shield" :size="16" />Beheer</span>
            </div>
          </div>
          <div class="cp-license">
            <AppIcon name="users" :size="26" />
            <div>
              <strong>Eén product voor jullie omgeving.</strong>
              <p>Blijvend gebruik van de opgeleverde versie. Het aantal gebruikers en taken tegelijk past binnen de capaciteit van de box.</p>
            </div>
          </div>
        </div>
        <div class="cp-install">
          <div class="cp-offer-heading">
            <span class="cp-small-label">AITJE regelt het</span>
            <UiBadge tone="brand">Met basisinstallatie</UiBadge>
          </div>
          <p class="cp-price">{{ euros(offer.price) }}</p>
          <p class="cp-price-note">Product + basisinstallatie · excl. btw</p>
          <div class="cp-bars" aria-hidden="true">
            <span class="cp-software" :style="{ flex: software }" /><span class="cp-installation" :style="{ flex: pricing.installation.from }" />
          </div>
          <dl class="cp-breakdown">
            <div><dt><i class="cp-software" />AITJE Coder-software</dt><dd>{{ euros(software) }}</dd></div>
            <div><dt><i class="cp-installation" />Installatie en inrichting</dt><dd>vanaf {{ euros(pricing.installation.from) }}</dd></div>
            <div v-if="offer.discount"><dt>Introductievoordeel</dt><dd>−{{ euros(offer.discount) }}</dd></div>
            <div class="cp-total"><dt>Product + basisinstallatie</dt><dd>{{ euros(offer.price) }}</dd></div>
          </dl>
          <p v-if="offer.introductory" class="cp-fine">Regulier vanaf {{ euros(offer.standard) }}. {{ productIntroductionNote }}</p>
          <UiButton :to="contactLink('product-regelen', 'aitje-coder')" arrow size="lg" class="mt-6 w-full">Laat AITJE het regelen</UiButton>
          <p class="cp-fine">Installeren op een vooraf afgestemde, geschikte box, de werking testen en uitleg geven. Korte nazorg spreken we af. De basisinstallatie is begroot op twee tot tweeënhalf uur.</p>
        </div>
      </div>

      <div class="cp-environment">
        <div>
          <p class="eyebrow text-brand-ink">De software krijgt een eigen plek</p>
          <h3>{{ current.title }}</h3>
          <div class="cp-environment-tabs" role="group" aria-label="Kies een omgeving">
            <button v-for="(item, i) in environments" :key="item.name" type="button" :aria-pressed="environment === i" @click="environment = i">
              <AppIcon :name="item.icon" :size="18" />{{ item.name }}
            </button>
          </div>
          <p>{{ current.text }}</p>
        </div>
        <div class="cp-stack">
          <div><AppIcon :name="current.icon" :size="29" /><strong>{{ current.name }}</strong><span>Hardware · apart begroot</span></div>
          <span class="cp-plus" aria-hidden="true">+</span>
          <div><AppIcon name="package" :size="27" /><strong>AITJE Coder</strong><span>Software en afgesproken inrichting</span></div>
        </div>
      </div>

      <div class="cp-complete">
        <div>
          <AppIcon name="workflow" :size="26" />
          <h3>De complete omgeving</h3>
          <p>Lokale modellen, de agent met review en pull requests, wachtrij en planning, de koppeling met je eigen tools en het beheer.</p>
        </div>
        <div>
          <AppIcon name="server" :size="26" />
          <h3>Lokale verwerking</h3>
          <p>Geen externe tokenkosten voor lokale modellen. Sta je externe modellen toe, dan rekent die aanbieder zelf af; budgetten begrenzen dat.</p>
        </div>
        <div>
          <AppIcon name="lifebuoy" :size="26" />
          <h3>Hulp op jullie niveau</h3>
          <p>Ondersteuning en onderhoud zijn optioneel, vanaf {{ euros(pricing.support.core.monthly) }} per maand. Updates en nieuwe modellen spreken we apart af.</p>
        </div>
      </div>

      <div class="cp-options">
        <div class="cp-self">
          <AppIcon name="terminal" :size="30" />
          <div>
            <h3>Zelf installeren op geschikte hardware</h3>
            <p>De complete softwareomgeving voor {{ euros(software) }} per omgeving, excl. btw. Installatie en hardware zijn niet inbegrepen; hulp kun je apart afspreken.</p>
          </div>
          <UiButton :to="contactLink('zelfinstallatie', 'aitje-coder')" variant="dark" arrow>Bestel voor zelfinstallatie</UiButton>
        </div>
        <details>
          <summary>Wat komt er eventueel aanvullend bij?<AppIcon name="chevron-down" :size="18" /></summary>
          <div class="cp-additions">
            <span><AppIcon name="cpu" :size="19" />De box of andere hardware, en energie</span>
            <span><AppIcon name="code" :size="19" />Koppelen van extra Git-servers en repositories</span>
            <span><AppIcon name="plug" :size="19" />Eigen uitbreidingen en koppelingen op maat</span>
            <span><AppIcon name="wrench" :size="19" />Updates, nieuwe modellen en begeleiding</span>
            <span><AppIcon name="globe" :size="19" />Kosten van externe modellen, als je die toestaat</span>
            <span><AppIcon name="compass" :size="19" />Reis-, locatie- en netwerkwerk</span>
          </div>
          <p>Alle bedragen zijn exclusief btw. Deze onderdelen worden vooraf apart begroot. Een demo helpt bepalen welke box en inrichting passen.</p>
        </details>
      </div>
    </div>
  </section>
</template>
<style scoped>
.coder-pricing {
  padding-block: 5rem;
  background: #eeefe8;
  scroll-margin-top: 6rem;
}
.cp-heading {
  max-width: 48rem;
  margin-bottom: 3rem;
}
.cp-heading h2 {
  font-size: clamp(2rem, 3.4vw, 3.2rem);
  line-height: 1.12;
  font-weight: 700;
  margin: 1rem 0 1.5rem;
}
.cp-heading > p:last-child {
  font-size: 1.05rem;
  line-height: 1.85;
  color: var(--color-muted);
}
.cp-main {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 2rem;
}
.cp-product {
  min-width: 0;
}
.cp-scene {
  background: radial-gradient(ellipse at 50% 60%, #e6cf64a0, transparent 65%), #e4e3dc;
  border: 1px solid #d3d1c6;
  border-radius: 1.5rem;
  padding: 2rem;
  min-height: 28rem;
  display: flex;
  flex-direction: column;
  align-items: center;
}
.cp-small-label {
  font: 0.65rem var(--font-mono);
  text-transform: uppercase;
  letter-spacing: 0.1em;
  color: #5f5f5a;
}
.cp-packshot {
  width: 100%;
  max-width: 20rem;
  flex: 1;
  filter: drop-shadow(0 22px 20px #3a382430);
  margin-block: 1rem;
}
.cp-tags {
  display: flex;
  gap: 0.6rem;
  flex-wrap: wrap;
  justify-content: center;
}
.cp-tags > span {
  display: flex;
  gap: 0.5rem;
  align-items: center;
  border: 1px solid #bdbbb0;
  background: #f8f8f690;
  padding: 0.55rem 0.85rem;
  border-radius: 0.7rem;
  font-size: 0.75rem;
}
.cp-license {
  display: flex;
  gap: 1rem;
  padding: 1.5rem 0.3rem;
}
.cp-license > svg {
  flex-shrink: 0;
}
.cp-license strong {
  font-size: 0.95rem;
}
.cp-license p {
  font-size: 0.82rem;
  line-height: 1.8;
  color: var(--color-muted);
  margin-top: 0.6rem;
}
.cp-install {
  padding: 2rem;
  background: #fff;
  border: 1px solid #d3d1c6;
  border-radius: 1.5rem;
}
.cp-offer-heading {
  display: flex;
  gap: 1rem;
  justify-content: space-between;
  align-items: center;
}
.cp-price {
  font: 700 4rem var(--font-heading);
  letter-spacing: -0.05em;
  margin-top: 1.5rem;
  line-height: 1.1;
}
.cp-price-note {
  font-size: 0.8rem;
  color: var(--color-muted);
  margin-top: 0.5rem;
}
.cp-bars {
  display: flex;
  gap: 5px;
  height: 13px;
  border-radius: 5px;
  overflow: hidden;
  margin-top: 2rem;
}
.cp-software {
  background: #1a1a1a;
}
.cp-installation {
  background: #e3bb18;
}
.cp-breakdown {
  margin-top: 1rem;
}
.cp-breakdown > div {
  display: flex;
  justify-content: space-between;
  gap: 1rem;
  padding: 0.9rem 0;
  border-bottom: 1px solid #e2e1dc;
  font-size: 0.85rem;
}
.cp-breakdown dt {
  display: flex;
  gap: 0.5rem;
  align-items: center;
}
.cp-breakdown dd {
  font-weight: 600;
  white-space: nowrap;
}
.cp-breakdown i {
  width: 8px;
  height: 8px;
  border-radius: 2px;
  flex-shrink: 0;
}
.cp-breakdown .cp-total {
  font-weight: 600;
  font-size: 0.95rem;
  border-bottom: 0;
}
.cp-total dd {
  font-size: 1.1rem;
}
.cp-fine {
  font-size: 0.7rem;
  line-height: 1.8;
  color: var(--color-muted);
  margin-top: 1rem;
}
.cp-environment {
  display: grid;
  grid-template-columns: 1.1fr 1fr;
  gap: 3rem;
  border: 1px solid #d3d1c6;
  background: #f8f8f6;
  border-radius: 1.5rem;
  margin-top: 1.5rem;
  padding: 2rem;
  align-items: center;
}
.cp-environment h3 {
  font-weight: 600;
  font-size: 1.5rem;
  line-height: 1.35;
  margin: 1rem 0;
}
.cp-environment p:not(.eyebrow) {
  font-size: 0.85rem;
  line-height: 1.85;
  color: var(--color-muted);
  margin-top: 1rem;
}
.cp-environment-tabs {
  display: flex;
  gap: 0.4rem;
  flex-wrap: wrap;
}
.cp-environment-tabs button {
  display: flex;
  gap: 0.5rem;
  align-items: center;
  padding: 0.6rem 0.75rem;
  border: 1px solid #d3d1c6;
  border-radius: 0.6rem;
  font-size: 0.72rem;
  cursor: pointer;
}
.cp-environment-tabs button[aria-pressed="true"] {
  background: var(--color-brand);
  border-color: #c6a200;
}
.cp-stack {
  display: grid;
  grid-template-columns: 1fr auto 1fr;
  gap: 0.8rem;
  align-items: center;
}
.cp-stack > div {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 0.8rem;
  text-align: center;
  background: #fff;
  border: 1px solid #d3d1c6;
  border-radius: 1.1rem;
  padding: 1.5rem 1rem;
  min-height: 12rem;
}
.cp-stack strong {
  font-size: 0.85rem;
}
.cp-stack span:not(.cp-plus) {
  font-size: 0.68rem;
  color: var(--color-muted);
  line-height: 1.6;
}
.cp-plus {
  font-size: 1.5rem;
  color: var(--color-muted);
}
.cp-complete {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 2rem;
  margin-block: 2.5rem;
  padding-block: 1rem;
}
.cp-complete svg {
  color: var(--color-brand-ink);
}
.cp-complete h3 {
  font-size: 1rem;
  font-weight: 600;
  margin: 1rem 0 0.7rem;
}
.cp-complete p {
  font-size: 0.85rem;
  line-height: 1.85;
  color: var(--color-muted);
}
.cp-self {
  display: flex;
  align-items: center;
  gap: 1.5rem;
  background: #fff;
  border: 1px solid #d3d1c6;
  border-radius: 1.2rem;
  padding: 1.5rem;
}
.cp-self > svg {
  flex-shrink: 0;
}
.cp-self > div {
  flex: 1;
}
.cp-self h3 {
  font-size: 1.1rem;
  font-weight: 600;
}
.cp-self p {
  font-size: 0.83rem;
  line-height: 1.8;
  color: var(--color-muted);
  margin-top: 0.5rem;
}
.cp-options details {
  border: 1px solid #d3d1c6;
  border-radius: 1rem;
  padding: 1.2rem 1.5rem;
  margin-top: 1rem;
}
.cp-options summary {
  display: flex;
  justify-content: space-between;
  gap: 1rem;
  list-style: none;
  cursor: pointer;
  font-weight: 500;
  font-size: 0.9rem;
}
.cp-additions {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 1rem;
  padding-top: 1.5rem;
}
.cp-additions > span {
  display: flex;
  gap: 0.7rem;
  align-items: center;
  font-size: 0.8rem;
}
.cp-additions svg {
  flex-shrink: 0;
  color: var(--color-brand-ink);
}
.cp-options details p {
  font-size: 0.75rem;
  line-height: 1.85;
  color: var(--color-muted);
  margin-top: 1.5rem;
}
@media (max-width: 1000px) {
  .cp-main,
  .cp-environment {
    grid-template-columns: 1fr;
    gap: 1.5rem;
  }
  .cp-product {
    display: grid;
    grid-template-columns: 1.1fr 1fr;
    gap: 1.5rem;
    align-items: center;
  }
  .cp-scene {
    min-height: 0;
    padding: 1.3rem;
  }
  .cp-packshot {
    max-width: 13rem;
  }
  .cp-license {
    padding: 0;
  }
  .cp-self {
    flex-wrap: wrap;
  }
  .cp-self > div {
    min-width: 60%;
  }
}
@media (max-width: 600px) {
  .coder-pricing {
    padding-block: 3.5rem;
  }
  .cp-product {
    grid-template-columns: 1fr;
  }
  .cp-license {
    padding: 1rem 0.3rem;
  }
  .cp-packshot {
    max-width: 16rem;
  }
  .cp-install,
  .cp-environment {
    padding: 1.3rem;
  }
  .cp-price {
    font-size: 3.4rem;
  }
  .cp-stack {
    gap: 0.4rem;
  }
  .cp-stack > div {
    padding: 1rem 0.5rem;
  }
  .cp-complete,
  .cp-additions {
    grid-template-columns: 1fr;
  }
  .cp-breakdown > div {
    font-size: 0.78rem;
  }
}
</style>
