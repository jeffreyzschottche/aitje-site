<script setup lang="ts">
import { contactLink } from "@/content/site";
defineProps<{ product: string }>();
</script>
<template>
  <section class="aitje-inference-servers">
    <div class="container-page ais-layout">
      <div class="ais-copy">
        <p class="eyebrow">AITJE-servers · inference in het datacenter</p>
        <h2>Onze servers.<br />Jouw AI-workflow.</h2>
        <p>
          Geen eigen hardware nodig? AITJE biedt meerdere servers in datacenters
          waarop taalmodellen en coding agents draaien. Gebruik een ingerichte
          omgeving of inference via een endpoint, specifiek afgestemd op jullie
          workflow.
        </p>
        <NuxtLink :to="contactLink('product-regelen', product, 'aitje-servers')"
          >Bespreek een AITJE-server <AppIcon name="arrow-right" :size="18"
        /></NuxtLink>
      </div>
      <div class="ais-card">
        <div class="ais-server-stack" aria-hidden="true">
          <span><AppIcon name="server" :size="28" /><i /><i /><i /></span
          ><span><AppIcon name="cpu" :size="28" /><i /><i /><i /></span
          ><span><AppIcon name="workflow" :size="28" /><i /><i /><i /></span>
        </div>
        <strong
          >Richt je workflow op<br /><em>tot 100×</em> lagere
          API-kosten.</strong
        >
        <p>
          Besparingsdoel voor geschikte workflows, vergeleken met het gebruik
          van frontier-API’s van OpenAI, Anthropic en Gemini. We toetsen de
          modelkwaliteit, het volume en de kosten op jullie eigen taken; de
          onderbouwing en tarieven komen in je voorstel.
        </p>
        <div class="ais-tags">
          <span>Taalmodellen</span><span>Coding agents</span
          ><span>Inference API</span>
        </div>
        <small
          >Hosting, rekenkracht en inference worden apart begroot. De haalbare
          besparing verschilt per workflow en is geen algemene
          prijsgarantie.</small
        >
      </div>
    </div>
  </section>
</template>
<style scoped>
.aitje-inference-servers {
  background: #152010;
  color: #e9efdf;
  padding: 5rem 0;
}
.ais-layout {
  display: grid;
  grid-template-columns: minmax(0, 1fr) minmax(0, 1fr);
  gap: 4rem;
  align-items: center;
}
.ais-copy .eyebrow {
  color: #d5bc4e;
}
.ais-copy h2 {
  font: 700 clamp(2rem, 3.3vw, 3.1rem)/1.12 var(--font-heading);
  letter-spacing: -0.035em;
  margin: 1rem 0 1.4rem;
}
.ais-copy > p:last-of-type {
  color: #b5c3a8;
  font-size: 1rem;
  line-height: 1.9;
}
.ais-copy > a {
  display: inline-flex;
  align-items: center;
  gap: 0.7rem;
  min-height: 48px;
  padding: 0.8rem 1.25rem;
  border: 1px solid #7d8d5e;
  border-radius: 3rem;
  margin-top: 1.6rem;
  color: #f4d94d;
  font-size: 0.9rem;
  line-height: 1.5;
}
.ais-card {
  background: #22301c;
  border: 1px solid #45553a;
  border-radius: 1.5rem;
  padding: 2rem;
  min-width: 0;
}
.ais-server-stack {
  display: flex;
  gap: 0.6rem;
  margin-bottom: 1.6rem;
}
.ais-server-stack > span {
  display: flex;
  align-items: center;
  gap: 0.4rem;
  border: 1px solid #586547;
  border-radius: 0.7rem;
  padding: 0.7rem;
  background: linear-gradient(#38472d, #1c2917);
}
.ais-server-stack i {
  width: 3px;
  height: 3px;
  border-radius: 50%;
  background: #dcce76;
}
.ais-card > strong {
  display: block;
  font: 600 clamp(1.5rem, 2.4vw, 2.1rem)/1.3 var(--font-heading);
}
.ais-card em {
  font-style: normal;
  color: #f4d34e;
}
.ais-card > p {
  font-size: 0.83rem;
  line-height: 1.85;
  color: #b8c6ac;
  margin: 1.2rem 0;
}
.ais-tags {
  display: flex;
  flex-wrap: wrap;
  gap: 0.5rem;
  margin: 1rem 0;
}
.ais-tags > span {
  border: 1px solid #506143;
  border-radius: 2rem;
  padding: 0.4rem 0.7rem;
  font-size: 0.67rem;
  color: #d1dec5;
}
.ais-card small {
  display: block;
  font-size: 0.68rem;
  line-height: 1.8;
  color: #a4b794;
}
@media (max-width: 850px) {
  .ais-layout {
    grid-template-columns: 1fr;
    gap: 2rem;
  }
  .ais-card {
    padding: 1.4rem;
  }
}
@media (max-width: 400px) {
  .ais-server-stack {
    gap: 0.4rem;
  }
  .ais-server-stack > span {
    padding: 0.5rem;
  }
}
</style>
