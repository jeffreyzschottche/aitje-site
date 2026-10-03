<script setup lang="ts">
import type { KnowledgeArticleVisual } from "@/data/knowledgeArticles";

const props = defineProps<{ slug: string; topic: string; visual?: KnowledgeArticleVisual; large?: boolean }>();
const diagrams: Record<string, KnowledgeArticleVisual> = {
  "wat-is-een-llm": { icon: "message", left: "Jouw vraag", core: "Taalmodel", right: "Antwoord", label: "Van taal naar mogelijkheden" },
  "wat-is-edge-ai": { icon: "cpu", left: "Sensor of invoer", core: "AI op het apparaat", right: "Direct verwerken", label: "Rekenen waar de gegevens ontstaan" },
  "wat-is-local-ai": { icon: "cpu", left: "Jouw data", core: "Lokale AI", right: "Jouw werk", label: "Dichtbij. In eigen beheer." },
  "wat-is-on-premise-ai": { icon: "server", left: "Jouw team", core: "Eigen server", right: "Eigen omgeving", label: "AI binnen je organisatie" },
  "white-label-hardware-aitje-software": { icon: "box", left: "Hardware", core: "AITJE-software", right: "Werkende omgeving", label: "Apparaat en software samenbrengen" },
  "wat-is-rag": { icon: "library", left: "Vraag en bronnen", core: "Relevante passages", right: "Antwoord met context", label: "Eerst zoeken. Dan een antwoord maken." },
  "wat-is-context": { icon: "message", left: "Vraag en informatie", core: "Context", right: "Gerichter antwoord", label: "Wat het model meekrijgt, maakt verschil" },
  "wat-is-een-context-window": { icon: "scan", left: "Invoer en gesprek", core: "Tokenlimiet", right: "Ruimte voor uitvoer", label: "Invoer en uitvoer delen de beschikbare ruimte" },
  "wat-is-een-ai-agent": { icon: "bot", left: "Opdracht", core: "Agent en tools", right: "Actie of resultaat", label: "Van een vraag naar een taak" },
  "wat-zijn-embeddings": { icon: "scan", left: "Tekst of afbeelding", core: "Getallenreeks", right: "Gelijkenis zoeken", label: "Betekenis vergelijken met getallen" },
  "wat-is-prompt-engineering": { icon: "message", left: "Doel en context", core: "Duidelijke opdracht", right: "Bruikbaar antwoord", label: "Een betere vraag geeft richting" },
  "wat-is-een-api": { icon: "plug", left: "Systeem A", core: "API-verzoek", right: "Systeem B", label: "Laat je systemen samenwerken" },
  "wat-is-een-webhook": { icon: "plug", left: "Gebeurtenis", core: "Automatisch signaal", right: "Volgende actie", label: "Een gebeurtenis zet iets in beweging" },
  "wat-is-een-backend": { icon: "server", left: "Verzoek", core: "Logica en data", right: "Antwoord", label: "Het werk achter de interface" },
  "wat-is-een-frontend": { icon: "code", left: "Gebruiker", core: "Interface", right: "Verzoek aan backend", label: "Waar je met je toepassing werkt" },
  "wat-is-cloud": { icon: "server", left: "Je toepassing", core: "Externe servers", right: "Online dienst", label: "Rekenkracht bij een andere organisatie" },
  "wat-is-een-workflow": { icon: "repeat", left: "Invoer", core: "Verbonden stappen", right: "Resultaat", label: "Slimmer werk, stap voor stap" },
};

const diagram = computed(() => props.visual ?? diagrams[props.slug] ?? {
  icon: "sparkles", left: "Informatie", core: "AI", right: "Toepassing", label: props.topic,
});
</script>

<template>
  <figure class="knowledge-diagram" :class="{ 'knowledge-diagram-large': large }" :aria-label="`${diagram.left} → ${diagram.core} → ${diagram.right}`">
    <figcaption class="knowledge-diagram-heading">
      <span class="knowledge-diagram-kicker"><span /> Het idee in beeld</span>
      <p>{{ diagram.label }}</p>
    </figcaption>
    <div class="knowledge-diagram-flow">
      <div class="knowledge-diagram-node">
        <span class="knowledge-diagram-step">01 / INVOER</span>
        <strong>{{ diagram.left }}</strong>
      </div>
      <span class="knowledge-diagram-connector" aria-hidden="true"><AppIcon name="arrow-right" :size="22" /></span>
      <div class="knowledge-diagram-node knowledge-diagram-core">
        <span class="knowledge-diagram-step">02 / KERN</span>
        <AppIcon :name="diagram.icon" :size="36" :stroke-width="1.5" aria-hidden="true" />
        <strong>{{ diagram.core }}</strong>
      </div>
      <span class="knowledge-diagram-connector" aria-hidden="true"><AppIcon name="arrow-right" :size="22" /></span>
      <div class="knowledge-diagram-node">
        <span class="knowledge-diagram-step">03 / UITKOMST</span>
        <strong>{{ diagram.right }}</strong>
      </div>
    </div>
  </figure>
</template>

<style scoped>
.knowledge-diagram { padding: 24px; margin: 0; background: #14251f; color: #fff; }
.knowledge-diagram-large { padding: 32px 40px 40px; }
.knowledge-diagram-heading { display: flex; align-items: center; justify-content: space-between; gap: 24px; }
.knowledge-diagram-kicker { display: inline-flex; align-items: center; gap: 9px; flex-shrink: 0; font: 10px var(--font-mono); letter-spacing: .12em; text-transform: uppercase; color: #facc15; }
.knowledge-diagram-kicker > span { width: 6px; height: 6px; border-radius: 50%; background: #facc15; }
.knowledge-diagram-heading p { max-width: 55%; color: #b9c8c0; font-size: 12px; line-height: 1.6; text-align: right; }
.knowledge-diagram-flow { display: grid; grid-template-columns: 1fr 52px 1.2fr 52px 1fr; align-items: center; margin-top: 28px; }
.knowledge-diagram-node { display: flex; flex-direction: column; justify-content: center; gap: 14px; min-height: 126px; padding: 22px; border: 1px solid #3f544b; border-radius: 14px; background: #20352b; }
.knowledge-diagram-step { font: 9px var(--font-mono); letter-spacing: .12em; color: #9fb5a9; }
.knowledge-diagram-node strong { font-size: 16px; line-height: 1.45; font-weight: 600; overflow-wrap: anywhere; }
.knowledge-diagram-core { align-items: center; min-height: 164px; text-align: center; border-color: #facc15; background: #facc15; color: #14251f; box-shadow: 0 8px 24px #0002; }
.knowledge-diagram-core .knowledge-diagram-step { color: #4b4926; }
.knowledge-diagram-connector { display: flex; align-items: center; justify-content: center; color: #facc15; }
@media (max-width: 767px) {
  .knowledge-diagram, .knowledge-diagram-large { padding: 24px 20px; }
  .knowledge-diagram-heading { align-items: flex-start; flex-direction: column; gap: 9px; }
  .knowledge-diagram-heading p { max-width: 100%; text-align: left; font-size: 11px; }
  .knowledge-diagram-flow { grid-template-columns: minmax(0, 1fr); margin-top: 22px; }
  .knowledge-diagram-node { min-height: 90px; padding: 18px 20px; gap: 10px; }
  .knowledge-diagram-core { min-height: 140px; }
  .knowledge-diagram-node strong { font-size: 15px; }
  .knowledge-diagram-connector { height: 36px; }
  .knowledge-diagram-connector :deep(svg) { transform: rotate(90deg); }
}
</style>
