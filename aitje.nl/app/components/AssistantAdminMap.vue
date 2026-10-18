<script setup lang="ts">
const group = ref(0);
const groups = [
  {
    name: "Dagelijks gebruik",
    scene: "admin-modes",
    intro: "Van gebruikers uitnodigen tot een passende werkstand voor je team.",
    items: [
      {
        name: "Dashboard",
        text: "Gezondheid, gebruik en aandachtspunten van de installatie.",
      },
      {
        name: "Gebruikers",
        text: "Accounts, rollen, blokkeren en toegang herstellen.",
      },
      {
        name: "Rollen",
        text: "Kennis, modellen, tools en gebruiksgrenzen per doelgroep.",
      },
      {
        name: "Modellen & providers",
        text: "Lokale modellen beheren en externe diensten bewust toestaan.",
      },
      {
        name: "Verbruik",
        text: "Vragen, tokens en kosten uitsplitsen en caps instellen.",
      },
      {
        name: "Geplande taken",
        text: "Status, belasting en kosten volgen; taken pauzeren of stoppen.",
      },
      {
        name: "Modes & skills",
        text: "Werkstanden en herbruikbare instructies voor jullie aanpak.",
      },
      {
        name: "Koppelingen & maatwerk",
        text: "Toegestane hulpmiddelen en organisatiespecifieke uitbreidingen.",
      },
    ],
  },
  {
    name: "Toezicht",
    scene: "admin-guardrails",
    intro: "Houd zicht op de werking en stel grenzen bovenop de rolrechten.",
    items: [
      {
        name: "Audit",
        text: "Terugzien welke beheeracties en gebeurtenissen plaatsvonden.",
      },
      {
        name: "Logs",
        text: "Technische problemen onderzoeken met instelbare logging.",
      },
      {
        name: "Limieten",
        text: "Sessies, uploads en geschiedenis afstemmen op de capaciteit.",
      },
      {
        name: "Privacy",
        text: "Bewaartermijnen, waarschuwingen en inzagebeleid inrichten.",
      },
      {
        name: "Guardrails",
        text: "Kennis lokaal houden, acties begrenzen en antwoorden bewaken.",
      },
    ],
  },
  {
    name: "Instellingen",
    scene: "admin-netwerk",
    intro:
      "De omgeving past in jullie organisatie, netwerk en beheerafspraken.",
    items: [
      {
        name: "Branding",
        text: "Naam, logo en taal van jullie eigen omgeving.",
      },
      {
        name: "Netwerk",
        text: "Adressen, bereikbaarheid en beveiligde toegang beheren.",
      },
      {
        name: "API & apps",
        text: "Sleutels, scopes, IP-grenzen, snelheid en gebruikscaps.",
      },
      {
        name: "Systeem",
        text: "Versie, services, diagnose, updates en support.",
      },
      {
        name: "Hulpassistent",
        text: "Hulpmodel, beschikbaarheid en toegang voor medewerkers.",
      },
      {
        name: "Kennisbeheer",
        text: "Van beheer direct naar documenten, bronnen en zoekinstellingen.",
      },
    ],
  },
];
const current = computed(() => groups[group.value]!);
</script>
<template>
  <div class="admin-map">
    <div class="an-heading">
      <p class="eyebrow">De complete beheernavigatie</p>
      <h3>Een eigen AI-omgeving.<br />Ook achter de schermen.</h3>
    </div>
    <div class="an-tabs" role="group" aria-label="Verken alle beheerdelen">
      <button
        v-for="(item, i) in groups"
        :key="item.name"
        type="button"
        :aria-pressed="group === i"
        aria-controls="an-detail"
        @click="group = i"
      >
        {{ item.name }}
      </button>
    </div>
    <div id="an-detail" class="an-grid">
      <div>
        <p class="an-intro">{{ current.intro }}</p>
        <dl>
          <div v-for="item in current.items" :key="item.name">
            <dt>{{ item.name }}</dt>
            <dd>{{ item.text }}</dd>
          </div>
        </dl>
      </div>
      <AssistantMedia
        :key="current.scene"
        :scene="current.scene"
        :title="current.name"
      />
    </div>
  </div>
</template>
<style scoped>
.admin-map {
  margin-top: 3rem;
  padding-top: 2.5rem;
  border-top: 1px solid #3b4b2e;
}
.an-heading .eyebrow {
  color: #facc15;
}
.an-heading h3 {
  font-weight: 600;
  font-size: clamp(1.8rem, 2.6vw, 2.5rem);
  line-height: 1.2;
  margin-top: 1rem;
}
.an-tabs {
  display: flex;
  gap: 0.5rem;
  overflow-x: auto;
  border-bottom: 1px solid #3b4b2e;
  margin: 1.5rem 0;
}
.an-tabs button {
  padding: 0.9rem 1.2rem;
  white-space: nowrap;
  border-bottom: 2px solid transparent;
  font-size: 0.82rem;
  cursor: pointer;
  color: #b6c6a2;
}
.an-tabs button[aria-pressed="true"] {
  color: #facc15;
  border-color: #facc15;
}
.an-grid {
  display: grid;
  grid-template-columns: 1fr 1.1fr;
  gap: 2.5rem;
  align-items: start;
}
.an-intro {
  color: #bfcdaf;
  font-size: 0.88rem;
  line-height: 1.85;
  margin-bottom: 1rem;
}
.an-grid dl > div {
  display: grid;
  grid-template-columns: 8rem 1fr;
  gap: 1rem;
  padding: 0.85rem 0;
  border-bottom: 1px solid #35462a;
  font-size: 0.75rem;
  line-height: 1.8;
}
.an-grid dt {
  font-weight: 500;
  color: #e4ebdc;
}
.an-grid dd {
  color: #a9bb95;
}
.an-grid :deep(figcaption) {
  color: #a4b68e;
}
@media (max-width: 900px) {
  .an-grid {
    grid-template-columns: 1fr;
    gap: 2rem;
  }
}
@media (max-width: 480px) {
  .an-grid dl > div {
    grid-template-columns: 6rem 1fr;
    gap: 0.6rem;
  }
  .an-tabs button {
    padding: 0.9rem 0.6rem;
    font-size: 0.72rem;
  }
}
</style>
