<script setup lang="ts">
const selected = ref(0);
const views = [
  {
    name: "Chat",
    icon: "message",
    image: "chat-visualisatie.png",
    route: "/c/",
    title: "De werkplek voor je team",
    text: "Vragen, schrijven, rekenen en interactieve resultaten. Met je documenten en de modellen die voor jouw rol beschikbaar zijn.",
  },
  {
    name: "Kennis",
    icon: "library",
    image: "kennis-documenten.png",
    route: "/kennis",
    title: "De kennis van je organisatie",
    text: "Documenten en bronnen verwerken, ordenen en actueel houden. Met categorieën, prioriteit en toegangsrechten.",
  },
  {
    name: "Beheer",
    icon: "layout",
    image: "admin-modellen.png",
    route: "/admin",
    title: "De regie bij je organisatie",
    text: "Gebruikers, rollen, modellen, gebruikslimieten en systeeminstellingen in dezelfde omgeving beheren.",
  },
];
const view = computed(() => views[selected.value]!);
</script>
<template>
  <div class="assistant-workspace">
    <div class="aw-toolbar">
      <span class="aw-label">Drie werkplekken. Eén omgeving.</span>
      <div role="group" aria-label="Bekijk de productonderdelen">
        <button
          v-for="(item, i) in views"
          :key="item.name"
          type="button"
          :aria-pressed="selected === i"
          aria-controls="aw-screen"
          @click="selected = i"
        >
          <AppIcon :name="item.icon" :size="17" />{{ item.name }}
        </button>
      </div>
    </div>
    <div class="aw-stage">
      <div class="aw-monitor">
        <div class="aw-address">
          <span class="aw-camera" aria-hidden="true" /><span
            >AITJE Assistent <span class="aw-path">{{ view.route }}</span></span
          ><span class="aw-status">Eigen omgeving</span>
        </div>
        <div id="aw-screen" class="aw-image">
          <img
            :key="view.image"
            :src="`/img/assistant/screenshots/${view.image}`"
            :alt="view.title"
            width="1440"
            height="1000"
            loading="lazy"
          />
        </div>
      </div>
      <div class="aw-foot" aria-hidden="true" />
      <div class="aw-caption" aria-live="polite">
        <strong>{{ view.title }}</strong>
        <p>{{ view.text }}</p>
      </div>
    </div>
    <p class="aw-note">
      Echte productinterface met fictieve gegevens. De bereikbare onderdelen en
      functies volgen de rechten van je account.
    </p>
  </div>
</template>
<style scoped>
.assistant-workspace {
  margin-top: 3rem;
}
.aw-toolbar {
  display: flex;
  justify-content: space-between;
  gap: 1.5rem;
  align-items: center;
  margin-bottom: 1.5rem;
}
.aw-label {
  font: 0.7rem var(--font-mono);
  text-transform: uppercase;
  letter-spacing: 0.07em;
  color: var(--color-muted);
}
.aw-toolbar > div {
  display: flex;
  flex-wrap: wrap;
  gap: 0.3rem;
  max-width: 100%;
  padding: 0.3rem;
  border: 1px solid var(--color-line);
  border-radius: 0.9rem;
  background: white;
}
.aw-toolbar button {
  display: flex;
  min-height: 44px;
  gap: 0.5rem;
  align-items: center;
  border-radius: 0.6rem;
  padding: 0.65rem 1rem;
  cursor: pointer;
  font-size: 0.8rem;
}
.aw-toolbar button[aria-pressed="true"] {
  background: var(--color-ink);
  color: #fff;
}
.aw-stage {
  position: relative;
  border-radius: 1.5rem;
  background:
    radial-gradient(ellipse at 65% 35%, #e9e4c8, transparent 70%), #e8e8e0;
  padding: 2.5rem 4rem 1.5rem;
}
.aw-monitor {
  border: 9px solid #292c25;
  border-bottom-width: 16px;
  border-radius: 1.1rem;
  overflow: hidden;
  box-shadow: 0 30px 50px -30px #20241570;
  background: #171916;
  max-width: 59rem;
  margin: auto;
}
.aw-address {
  height: 2.5rem;
  display: flex;
  gap: 0.8rem;
  align-items: center;
  justify-content: space-between;
  padding: 0 1rem;
  color: #c7cdbe;
  font: 0.6rem var(--font-mono);
  background: #252922;
}
.aw-camera {
  width: 5px;
  height: 5px;
  border-radius: 50%;
  background: #5d6751;
}
.aw-path {
  color: #94a480;
  margin-left: 0.7rem;
}
.aw-status {
  font-size: 0.55rem;
  color: #a8b599;
}
.aw-image {
  aspect-ratio: 1.75;
  overflow: hidden;
}
.aw-image img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  object-position: top;
}
.aw-foot {
  width: 30%;
  height: 0.5rem;
  background: linear-gradient(90deg, #a5a898, #dedfd6, #a5a898);
  border-radius: 0 0 90% 90%;
  margin: 0 auto;
  box-shadow: 0 8px 10px #363e2920;
}
.aw-caption {
  margin: 1.8rem auto 0;
  max-width: 40rem;
  text-align: center;
}
.aw-caption strong {
  font-family: var(--font-heading);
  font-size: 1.1rem;
}
.aw-caption p {
  font-size: 0.82rem;
  line-height: 1.75;
  color: var(--color-muted);
  margin-top: 0.5rem;
}
.aw-note {
  font-size: 0.7rem;
  color: var(--color-muted);
  line-height: 1.7;
  margin-top: 0.9rem;
}
@media (max-width: 650px) {
  .aw-toolbar {
    align-items: flex-start;
    flex-direction: column;
    gap: 1rem;
  }
  .aw-stage {
    padding: 1.2rem 0.7rem;
  }
  .aw-monitor {
    border-width: 5px;
    border-bottom-width: 9px;
    border-radius: 0.7rem;
  }
  .aw-status {
    display: none;
  }
  .aw-address {
    height: 1.7rem;
    font-size: 0.5rem;
    padding: 0 0.5rem;
  }
  .aw-image {
    aspect-ratio: 1.44;
  }
  .aw-toolbar button {
    padding: 0.6rem 1rem;
  }
}
</style>
