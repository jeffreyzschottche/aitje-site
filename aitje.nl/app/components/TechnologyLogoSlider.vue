<script setup lang="ts">
const paused = ref(false);
const brands = [
  { name: "NVIDIA", file: "nvidia", width: 126 },
  { name: "Dell", file: "dell", width: 58 },
  { name: "Hugging Face", file: "hugging-face", width: 38, label: true },
  { name: "Qwen", file: "qwen", width: 40, label: true },
  { name: "gpt-oss", file: "gpt-oss", width: 40, label: true },
  { name: "Kimi", file: "kimi", width: 94 },
  { name: "Mistral AI", file: "mistral", width: 128 },
  { name: "OpenAI", file: "openai", width: 116 },
  { name: "Gemini", file: "gemini", width: 104 },
  { name: "Google", file: "google", width: 106 },
  { name: "Ollama", file: "ollama", width: 34, label: true },
  { name: "vLLM", file: "vllm", width: 126 },
  { name: "Vulkan", file: "vulkan", width: 128 },
  { name: "Python", file: "python", width: 40, label: true },
  { name: "Linux", file: "linux", width: 40, label: true },
  { name: "PostgreSQL", file: "postgresql", width: 138 },
  { name: "Qdrant", file: "qdrant", width: 124 },
  { name: "Redis", file: "redis", width: 44, label: true },
  { name: "Supabase", file: "supabase", width: 140 },
  { name: "Intel", file: "intel", width: 90 },
  { name: "AMD", file: "amd", width: 108 },
  { name: "AWS", file: "aws", width: 76 },
  { name: "Nebius", file: "nebius", width: 128 },
  { name: "Hetzner", file: "hetzner", width: 38, label: true },
];
</script>

<template>
  <div
    class="technology-slider"
    :class="{ 'is-paused': paused }"
    :style="{ '--logo-duration': `${brands.length * 6.5}s` }"
  >
    <div class="technology-slider-heading">
      <p class="eyebrow"><span aria-hidden="true" />Technologie &amp; platforms</p>
      <button
        type="button"
        class="technology-slider-toggle"
        :aria-label="paused ? 'Logo’s laten schuiven' : 'Logo’s pauzeren'"
        :aria-pressed="paused"
        @click="paused = !paused"
      >
        <AppIcon :name="paused ? 'play' : 'pause'" :size="16" />
      </button>
    </div>
    <div class="technology-slider-window">
      <div class="technology-slider-track">
        <ul
          v-for="copy in 2"
          :key="copy"
          class="technology-slider-group"
          :aria-hidden="copy === 2 ? true : undefined"
          :aria-label="copy === 1 ? 'Technologie en platforms' : undefined"
        >
          <li v-for="brand in brands" :key="brand.file" class="technology-slider-brand">
            <img
              :src="`/img/technology/${brand.file}.svg`"
              :alt="brand.label || copy === 2 ? '' : brand.name"
              :width="brand.width"
              height="48"
              loading="lazy"
              decoding="async"
            />
            <span v-if="brand.label">{{ brand.name }}</span>
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>

<style scoped>
.technology-slider {
  margin-top: 3.5rem;
  padding-top: 2rem;
  border-top: 1px solid var(--color-line);
}
.technology-slider-heading {
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 1rem;
  margin-bottom: 1.25rem;
}
.technology-slider-heading .eyebrow {
  display: flex;
  align-items: center;
  gap: 0.65rem;
  color: var(--color-muted);
  font-size: 0.7rem;
  letter-spacing: 0.16em;
}
.technology-slider-heading .eyebrow span {
  width: 8px;
  height: 8px;
  flex: none;
  border-radius: 50%;
  background: var(--color-brand);
}
.technology-slider-toggle {
  display: grid;
  place-items: center;
  width: 38px;
  height: 38px;
  flex: none;
  border-radius: 50%;
  background: var(--color-brand);
  color: var(--color-ink);
  cursor: pointer;
}
.technology-slider-toggle:focus-visible {
  outline: 2px solid var(--color-ink);
  outline-offset: 4px;
}
.technology-slider-window {
  overflow: hidden;
  mask-image: linear-gradient(90deg, transparent, #000 3%, #000 97%, transparent);
}
.technology-slider-track {
  display: flex;
  width: max-content;
  animation: technology-scroll var(--logo-duration) linear infinite;
}
.technology-slider-group {
  display: flex;
  gap: 16px;
  padding-right: 16px;
  list-style: none;
}
.technology-slider-brand {
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 9px;
  width: 190px;
  height: 100px;
  flex: none;
  padding: 1rem;
  border: 1px solid var(--color-line);
  border-radius: 16px;
  background: var(--color-surface);
}
.technology-slider-brand img {
  height: 48px;
  object-fit: contain;
  flex: none;
}
.technology-slider-brand span {
  font-size: 0.85rem;
  font-weight: 600;
  white-space: nowrap;
}
.is-paused .technology-slider-track,
.technology-slider-window:hover .technology-slider-track {
  animation-play-state: paused;
}
@keyframes technology-scroll {
  to { transform: translateX(-50%); }
}
@media (max-width: 640px) {
  .technology-slider { margin-top: 2.5rem; }
  .technology-slider-brand { height: 88px; }
}
@media (prefers-reduced-motion: reduce) {
  .technology-slider-toggle { display: none; }
  .technology-slider-window { overflow-x: auto; mask-image: none; }
  .technology-slider-track { animation: none; }
  .technology-slider-group[aria-hidden="true"] { display: none; }
}
</style>
