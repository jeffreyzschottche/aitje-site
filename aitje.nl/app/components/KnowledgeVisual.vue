<script setup lang="ts">
const props = defineProps<{ slug: string; topic: string; large?: boolean }>();
const diagrams: Record<
  string,
  { icon: string; left: string; core: string; right: string; label: string }
> = {
  "wat-is-een-llm": {
    icon: "message",
    left: "Jouw vraag",
    core: "Taalmodel",
    right: "Antwoord",
    label: "VAN TAAL NAAR MOGELIJKHEDEN",
  },
  "wat-is-local-ai": {
    icon: "cpu",
    left: "Jouw data",
    core: "Lokaal AI",
    right: "Jouw werk",
    label: "DICHTBIJ. IN EIGEN BEHEER.",
  },
  "wat-is-een-ai-agent": {
    icon: "bot",
    left: "Opdracht",
    core: "Agent",
    right: "Actie",
    label: "VAN EEN VRAAG NAAR EEN TAAK",
  },
  "wat-is-rag": {
    icon: "library",
    left: "Bronnen",
    core: "Zoeken",
    right: "Antwoord",
    label: "ANTWOORDEN MET JE EIGEN KENNIS",
  },
  "wat-is-een-workflow": {
    icon: "repeat",
    left: "Invoer",
    core: "Stappen",
    right: "Resultaat",
    label: "SLIMMER WERK, STAP VOOR STAP",
  },
  "wat-is-een-api": {
    icon: "plug",
    left: "Systeem A",
    core: "API",
    right: "Systeem B",
    label: "LAAT JE SYSTEMEN SAMENWERKEN",
  },
  "wat-is-een-webhook": {
    icon: "plug",
    left: "Gebeurtenis",
    core: "Webhook",
    right: "Actie",
    label: "EEN SIGNAAL. EEN VOLGENDE STAP.",
  },
};
const diagram = computed(
  () =>
    diagrams[props.slug] ?? {
      icon:
        props.topic === "Je eigen AI-omgeving"
          ? "server"
          : props.topic === "Koppelen en bouwen"
            ? "plug"
            : "sparkles",
      left: "Informatie",
      core: props.topic === "Je eigen AI-omgeving" ? "Je omgeving" : "AI",
      right: "Toepassing",
      label: props.topic.toUpperCase(),
    },
);
</script>
<template>
  <div
    class="knowledge-visual"
    :class="[{ 'knowledge-visual-large': large }, `visual-${diagram.icon}`]"
    aria-hidden="true"
  >
    <span class="knowledge-visual-label">{{ diagram.label }}</span
    ><OrbitGraphic />
    <div class="knowledge-nodes">
      <span>{{ diagram.left }}</span
      ><i />
      <div>
        <AppIcon
          :name="diagram.icon"
          :size="large ? 45 : 30"
          :stroke-width="1.3"
        /><strong>{{ diagram.core }}</strong>
      </div>
      <i /><span>{{ diagram.right }}</span>
    </div>
    <div class="knowledge-visual-footer">
      <span>AITJE / KENNISCENTRUM</span><span>+</span>
    </div>
  </div>
</template>
