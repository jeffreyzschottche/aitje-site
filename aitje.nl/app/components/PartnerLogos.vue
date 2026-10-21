<script setup lang="ts">
const partners = [
  {
    name: "GT Edge AI",
    logo: "/img/partners/gtedge-ai-white.webp",
    width: 720,
    height: 238,
    url: "https://gtedge.ai",
    text: "AITJE en GT Edge AI zijn partners. We organiseren samen evenementen en adviseren elkaar over lokale AI.",
  },
  {
    name: "NVIDIA Developer Program",
    logo: "/img/partners/nvidia-white.svg",
    width: 164,
    height: 30,
    url: "https://developer.nvidia.com/developer-program",
    text: "AITJE is lid van het NVIDIA Developer Program. Dat geeft toegang tot NVIDIA's SDK's, tools en technische kennis voor AI op NVIDIA-hardware.",
  },
];
</script>

<template>
  <div class="partner-logos">
    <p class="eyebrow"><span aria-hidden="true" />Partners</p>
    <ul class="partner-logos-list">
      <li v-for="partner in partners" :key="partner.url">
        <a
          :href="partner.url"
          target="_blank"
          rel="noopener noreferrer"
          class="partner-card"
          :aria-label="`${partner.name} (opent in nieuw tabblad)`"
        >
          <img
            :src="partner.logo"
            :alt="partner.name"
            :width="partner.width"
            :height="partner.height"
            loading="lazy"
            decoding="async"
          />
          <span class="partner-card-info">
            <span>{{ partner.text }}</span>
            <span class="partner-card-link">
              Bekijk {{ partner.name }}
              <AppIcon name="arrow-up-right" :size="15" />
            </span>
          </span>
        </a>
      </li>
    </ul>
  </div>
</template>

<style scoped>
.partner-logos {
  margin-top: 3.5rem;
  padding-top: 2rem;
  border-top: 1px solid var(--color-line);
}
.partner-logos .eyebrow {
  display: flex;
  align-items: center;
  gap: 0.65rem;
  margin-bottom: 1.25rem;
  color: var(--color-muted);
  font-size: 0.7rem;
  letter-spacing: 0.16em;
}
.partner-logos .eyebrow span {
  width: 8px;
  height: 8px;
  flex: none;
  border-radius: 50%;
  background: var(--color-brand);
}
.partner-logos-list {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(min(100%, 320px), 1fr));
  gap: 16px;
  list-style: none;
}
.partner-card {
  position: relative;
  display: grid;
  place-items: center;
  height: 168px;
  padding: 1.75rem;
  overflow: hidden;
  border-radius: 16px;
  background: #07100f;
  color: #fff;
}
.partner-card img {
  width: auto;
  max-width: 82%;
  max-height: 72px;
  transition: opacity 0.25s ease, transform 0.25s ease;
}
.partner-card-info {
  position: absolute;
  inset: 0;
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 0.85rem;
  padding: 1.5rem 1.75rem;
  background: #07100f;
  font-size: 0.9rem;
  line-height: 1.55;
  color: #e0e5dc;
  opacity: 0;
  transform: translateY(8px);
  transition: opacity 0.25s ease, transform 0.25s ease;
}
.partner-card-link {
  display: inline-flex;
  align-items: center;
  gap: 0.35rem;
  font-weight: 600;
  color: #facc15;
}
.partner-card:hover img,
.partner-card:focus-visible img {
  opacity: 0;
  transform: scale(0.96);
}
.partner-card:hover .partner-card-info,
.partner-card:focus-visible .partner-card-info {
  opacity: 1;
  transform: none;
}
.partner-card:focus-visible {
  outline: 2px solid var(--color-ink);
  outline-offset: 4px;
}
/* Geen hover op touchscreens: logo en uitleg onder elkaar tonen */
@media (hover: none) {
  .partner-card {
    height: auto;
    gap: 1.25rem;
  }
  .partner-card img {
    max-height: 56px;
  }
  .partner-card-info {
    position: static;
    padding: 0;
    opacity: 1;
    transform: none;
  }
  .partner-card:hover img {
    opacity: 1;
    transform: none;
  }
}
@media (prefers-reduced-motion: reduce) {
  .partner-card img,
  .partner-card-info {
    transition: none;
  }
}
</style>
