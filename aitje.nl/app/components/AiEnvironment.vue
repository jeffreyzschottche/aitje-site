<script setup lang="ts">
const selected = ref(0);
const options = [
  {
    name: "Op je eigen hardware",
    label: "LOKAAL",
    icon: "cpu",
    title: "Dicht bij je werk. In jouw omgeving.",
    text: "Een geschikte Mac of pc op kantoor. Je lokale modellen verwerken vragen en documenten op je eigen apparaat.",
    points: [
      "Eigen hardware of geleverd door AITJE",
      "Lokale kern werkt zonder internet",
      "Capaciteit afgestemd op jouw gebruik",
    ],
    nodes: ["Jouw team", "Eigen apparaat", "Lokaal model"],
    note: "Internet blijft nodig voor online functies, downloads en externe diensten.",
  },
  {
    name: "Op een eigen server",
    label: "EIGEN SERVER",
    icon: "server",
    title: "Eén omgeving. Ruimte voor je team.",
    text: "Een centrale AI-omgeving voor meerdere werkplekken. Op je eigen server of op zorgvuldig gekozen Nederlandse of Europese infrastructuur.",
    points: [
      "Accounts en toegang in eigen beheer",
      "Capaciteit passend bij gelijktijdig gebruik",
      "AITJE helpt kiezen, installeren en onderhouden",
    ],
    nodes: ["Werkplekken", "Eigen server", "AI + kennisbank"],
    note: "Serverhuur, netwerk en beheer zijn aparte kosten. Een gehuurde server betaal je rechtstreeks aan de aanbieder.",
  },
  {
    name: "Een slimme combinatie",
    label: "HYBRIDE",
    icon: "plug",
    title: "Lokaal waar het kan. Extern waar het helpt.",
    text: "Sommige taken vragen om een extern model. AITJE combineert dit met lokale stappen en beperkt welke gegevens worden doorgestuurd.",
    points: [
      "Een passend model voor iedere taak",
      "Gegevens vooraf selecteren of anonimiseren",
      "Inzicht in kosten en afhankelijkheden",
    ],
    nodes: ["Jouw gegevens", "Lokale selectie", "Gekozen model"],
    note: "Externe modellen en online tools kunnen gebruikskosten en verwerking buiten je eigen omgeving meebrengen.",
  },
];
const current = computed(() => options[selected.value]!);
</script>
<template>
  <div class="environment">
    <div class="environment-options" aria-label="Kies een AI-opstelling">
      <button
        v-for="(option, index) in options"
        :key="option.name"
        type="button"
        :aria-pressed="selected === index"
        :class="{ active: selected === index }"
        @click="selected = index"
      >
        <AppIcon :name="option.icon" :size="20" /><span>{{ option.name }}</span
        ><AppIcon name="arrow-up-right" :size="17" />
      </button>
    </div>
    <div class="environment-body" aria-live="polite">
      <div>
        <p class="eyebrow text-brand-ink">{{ current.label }}</p>
        <h3>{{ current.title }}</h3>
        <p>{{ current.text }}</p>
        <CheckList :items="current.points" class="mt-6" />
      </div>
      <div class="environment-diagram">
        <p class="eyebrow">Zo loopt je vraag</p>
        <div
          v-for="(node, index) in current.nodes"
          :key="node"
          class="flow-node"
        >
          <span>{{ String(index + 1).padStart(2, "0") }}</span
          ><AppIcon
            :name="['users', current.icon, 'cpu'][index]!"
            :size="22"
          /><strong>{{ node }}</strong
          ><AppIcon
            v-if="index < 2"
            class="flow-arrow"
            name="chevron-down"
            :size="18"
          />
        </div>
        <p class="environment-note">{{ current.note }}</p>
      </div>
    </div>
  </div>
</template>
