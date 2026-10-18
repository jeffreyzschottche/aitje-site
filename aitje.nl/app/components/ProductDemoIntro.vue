<script setup lang="ts">
import { contactLink } from "@/content/site";
import { getProductTrailer } from "@/content/productTrailers";

const props = defineProps<{ kind: "assistant" | "coder" }>();
const isCoder = computed(() => props.kind === "coder");
const product = computed(() =>
  isCoder.value ? "aitje-coder" : "aitje-assistent",
);
const trailer = computed(() => getProductTrailer(product.value)!);
const videoUrl = computed(() => trailer.value.embedUrl);
const watchUrl = computed(() => trailer.value.watchUrl);
</script>

<template>
  <section class="product-demo-intro" aria-labelledby="product-demo-heading">
    <div class="container-page pdi-layout">
      <div class="pdi-copy">
        <p class="eyebrow text-brand-ink">Local AI · On edge · On premise</p>
        <h2 v-if="isCoder" id="product-demo-heading">
          Laat AI bouwen.<br />Jij houdt de regie.
        </h2>
        <h2 v-else id="product-demo-heading">
          Jullie kennis.<br />Jullie eigen AI.
        </h2>
        <p v-if="isCoder" class="pdi-description">
          AITJE Coder is een AI Station met een autonome coding agent die code
          schrijft, tests uitvoert en pull requests voorbereidt in jullie
          repositories. Lokale AI-modellen draaien on edge of on premise op
          eigen hardware of een eigen server: jullie code in eigen beheer,
          zonder externe API-tokenkosten voor lokale modelverwerking.
        </p>
        <p v-else class="pdi-description">
          AITJE Chat Assistent is jullie eigen AI Station voor chat, spraak en
          antwoorden uit bedrijfskennis met RAG. Lokale AI-modellen draaien on
          edge of on premise op eigen hardware of een eigen server, met jullie
          data, toegangsrechten en beheer in eigen hand.
        </p>
        <div class="pdi-demo-options">
          <NuxtLink
            :to="contactLink('demo-fysiek', product)"
            class="pdi-demo-option pdi-demo-physical"
          >
            <span class="pdi-demo-icon"
              ><AppIcon name="cpu" :size="22" /><AppIcon
                name="arrow-up-right"
                :size="18"
            /></span>
            <strong>Vraag een demo op locatie aan</strong>
            <span
              >Wij komen bij jullie langs met hardware voor een persoonlijke
              demo.</span
            >
          </NuxtLink>
          <NuxtLink
            :to="contactLink('demo-endpoint', product)"
            class="pdi-demo-option"
          >
            <span class="pdi-demo-icon"
              ><AppIcon name="plug" :size="22" /><AppIcon
                name="arrow-up-right"
                :size="18"
            /></span>
            <strong>Vraag een demo-endpoint aan</strong>
            <span
              >Probeer de AI op afstand via een demo-endpoint. We stemmen de
              toegang met je af.</span
            >
          </NuxtLink>
        </div>
      </div>
      <figure class="pdi-video">
        <div class="pdi-player">
          <iframe
            :src="videoUrl"
            :title="
              isCoder
                ? 'AITJE Coder — producttrailer'
                : 'AITJE Chat Assistent — producttrailer'
            "
            width="1280"
            height="720"
            loading="lazy"
            allow="
              accelerometer;
              autoplay;
              clipboard-write;
              encrypted-media;
              gyroscope;
              picture-in-picture;
              web-share;
            "
            referrerpolicy="strict-origin-when-cross-origin"
            allowfullscreen
          />
        </div>
        <figcaption>
          <span v-if="isCoder">Bekijk AITJE Coder in actie</span>
          <span v-else>Ontdek AITJE Chat Assistent</span>
          <a :href="watchUrl" target="_blank" rel="noopener noreferrer"
            >Bekijk op YouTube <AppIcon name="arrow-up-right" :size="14"
          /></a>
        </figcaption>
      </figure>
    </div>
  </section>
</template>

<style scoped>
.product-demo-intro {
  padding-block: clamp(3rem, 6vw, 6rem);
  background: var(--color-surface);
  border-bottom: 1px solid var(--color-line);
}
.pdi-layout {
  display: grid;
  grid-template-columns: minmax(0, 0.95fr) minmax(0, 1.2fr);
  gap: clamp(2rem, 4vw, 4.5rem);
  align-items: center;
}
.pdi-copy h2 {
  font: 700 clamp(2rem, 3vw, 3rem) / 1.12 var(--font-heading);
  letter-spacing: -0.04em;
  margin-block: 1.1rem 1.5rem;
}
.pdi-description {
  color: var(--color-muted);
  font-size: 1rem;
  line-height: 1.85;
}
.pdi-demo-options {
  display: grid;
  grid-template-columns: repeat(2, minmax(0, 1fr));
  gap: 0.75rem;
  margin-top: 2rem;
}
.pdi-demo-option {
  display: flex;
  flex-direction: column;
  gap: 0.75rem;
  padding: 1.15rem;
  border: 1px solid var(--color-line);
  border-radius: 1.15rem;
  background: var(--color-page);
  color: var(--color-ink);
  transition:
    border-color 150ms,
    background-color 150ms;
}
.pdi-demo-option:hover {
  border-color: var(--color-ink);
  background: var(--color-sand);
}
.pdi-demo-physical {
  background: #fef9dd;
  border-color: #e9d77a;
}
.pdi-demo-physical:hover {
  background: #fef2b5;
}
.pdi-demo-icon {
  display: flex;
  align-items: center;
  justify-content: space-between;
}
.pdi-demo-option strong {
  font-size: 0.95rem;
  line-height: 1.45;
}
.pdi-demo-option > span:last-child {
  color: var(--color-muted);
  font-size: 0.78rem;
  line-height: 1.65;
}
.pdi-video {
  min-width: 0;
}
.pdi-player {
  aspect-ratio: 16 / 9;
  overflow: hidden;
  border: 1px solid var(--color-line);
  border-radius: 1.4rem;
  background: #101710;
  box-shadow: 0 24px 60px -32px #14200c66;
}
.pdi-player iframe {
  display: block;
  width: 100%;
  height: 100%;
  border: 0;
}
.pdi-video figcaption {
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: space-between;
  gap: 0.4rem 1rem;
  margin-top: 1rem;
  font-size: 0.75rem;
  color: var(--color-muted);
}
.pdi-video figcaption a {
  display: inline-flex;
  align-items: center;
  gap: 0.3rem;
  min-height: 44px;
  text-decoration: underline;
  text-underline-offset: 3px;
}
@media (max-width: 1000px) {
  .pdi-layout {
    grid-template-columns: 1fr;
  }
  .pdi-copy {
    max-width: 45rem;
  }
}
@media (max-width: 480px) {
  .pdi-demo-options {
    grid-template-columns: 1fr;
  }
  .pdi-player {
    border-radius: 0.85rem;
  }
}
</style>
