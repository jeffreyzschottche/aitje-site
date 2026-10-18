<script setup lang="ts">
import { contactLink } from "@/content/site";
defineProps<{ product: "assistant" | "coder" }>();
</script>
<template>
  <section id="modelverwerking" class="model-routes">
    <div class="container-page">
      <div class="mr-heading">
        <p class="eyebrow text-brand-ink">
          Kies je rekenkracht én je modelaanbieder
        </p>
        <h2>Local AI als basis.<br />Externe inference als keuze.</h2>
        <p>
          Waar AITJE draait en waar het taalmodel rekent, zijn twee keuzes.
          Alles op eigen hardware, een model op jullie server of een gekoppeld
          inference-endpoint: we richten de combinatie in die past bij jullie
          werk.
        </p>
      </div>
      <div class="mr-options">
        <article>
          <AppIcon name="cpu" :size="29" /><span>01 / Eigen modelomgeving</span>
          <h3>Op je hardware of server</h3>
          <p>
            Het model draait op jullie BOSGAME, Mac mini, lokale server of eigen
            cloudcapaciteit. De verwerking blijft in die gekozen omgeving; bij
            eigen inferentie is er geen externe API-tokenrekening.
          </p>
          <a href="#prijs"
            >Kies hardware of hosting <AppIcon name="arrow-right" :size="16"
          /></a>
        </article>
        <article class="mr-nebius">
          <AppIcon name="globe" :size="29" /><span
            >02 / Nebius Token Factory</span
          >
          <h3>Krachtige open modellen via API</h3>
          <p>
            Gebruik frontier open modellen zoals de beschikbare Kimi-,
            DeepSeek-, Qwen- en GPT-OSS-modellen via beheerde inference. AITJE
            helpt met het model, de endpointkoppeling, toegang en
            gebruiksbudgetten.
          </p>
          <p class="mr-small">
            Externe verwerking en tarieven per gebruik. Publieke endpoints
            hebben geen vaste landgarantie; een vereiste locatie stemmen we
            afzonderlijk af.
          </p>
          <a
            href="https://docs.tokenfactory.nebius.com/api-reference/introduction"
            target="_blank"
            rel="noopener noreferrer"
            >Nebius · API en modellen <AppIcon name="arrow-up-right" :size="16"
          /></a>
        </article>
        <article>
          <AppIcon name="plug" :size="29" /><span
            >03 / Externe modelaanbieders</span
          >
          <h3>OpenAI, Claude en andere providers</h3>
          <p v-if="product === 'assistant'">
            Laat medewerkers toegestane externe modellen kiezen, naast de lokale
            AI. Bij Assistent kan de beheerder vooraf lokaal anonimiseren
            verplicht stellen, modelrechten bepalen en kosten begrenzen.
          </p>
          <p v-else>
            Een extern model of compatibel endpoint kan onderdeel zijn van
            jullie inrichting. We stemmen providerondersteuning, modelkwaliteit,
            toegang en betaalde API-kosten vooraf af op de agent en jullie
            workflow.
          </p>
          <a v-if="product === 'assistant'" href="#externe-ai-privacy"
            >Bekijk lokale anonimisering
            <AppIcon name="arrow-right" :size="16" /></a
          ><NuxtLink v-else :to="contactLink('demo-endpoint', 'aitje-coder')"
            >Bespreek jullie modelkeuze <AppIcon name="arrow-right" :size="16"
          /></NuxtLink>
        </article>
      </div>
    </div>
  </section>
</template>
<style scoped>
.model-routes {
  padding: 5rem 0;
  background: #f1f3eb;
  scroll-margin-top: 6rem;
}
.mr-heading {
  max-width: 53rem;
  margin-bottom: 2.5rem;
}
.mr-heading h2 {
  font: 700 clamp(2rem, 3.3vw, 3.1rem)/1.12 var(--font-heading);
  letter-spacing: -0.035em;
  margin: 1rem 0 1.3rem;
}
.mr-heading > p:last-child {
  color: #56634b;
  line-height: 1.9;
  font-size: 1rem;
}
.mr-options {
  display: grid;
  grid-template-columns: repeat(3, minmax(0, 1fr));
  gap: 1rem;
}
.mr-options article {
  display: flex;
  flex-direction: column;
  gap: 1rem;
  padding: 1.7rem;
  border: 1px solid #d1d8c4;
  border-radius: 1.3rem;
  background: #fff;
  min-width: 0;
}
.mr-options article > span {
  font: 0.63rem var(--font-mono);
  text-transform: uppercase;
  letter-spacing: 0.08em;
  color: #667851;
}
.mr-options h3 {
  font: 600 1.3rem/1.35 var(--font-heading);
}
.mr-options p {
  font-size: 0.88rem;
  line-height: 1.85;
  color: #59674e;
}
.mr-options .mr-small {
  font-size: 0.72rem;
}
.mr-options a {
  display: flex;
  gap: 0.4rem;
  align-items: center;
  margin-top: auto;
  padding-top: 0.5rem;
  min-height: 44px;
  font-size: 0.78rem;
  font-weight: 600;
}
.mr-options .mr-nebius {
  background: #e7eddb;
  border-color: #b4c598;
}
@media (max-width: 900px) {
  .mr-options {
    grid-template-columns: 1fr;
  }
  .mr-options article {
    padding: 1.5rem;
  }
}
</style>
