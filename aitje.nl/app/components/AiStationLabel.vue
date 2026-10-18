<script setup lang="ts">
defineProps<{ product: "assistant" | "coder" }>();
</script>
<template>
  <div class="station-product-label">
    <div class="container-page">
      <AppIcon name="server" :size="23" />
      <div>
        <strong>{{
          product === "assistant"
            ? "AITJE Chat Assistent AI Station"
            : "AITJE Coder AI Station"
        }}</strong>
        <p>
          {{
            product === "assistant"
              ? "Chat, bedrijfskennis en beheer op jullie eigen computer of server."
              : "Coding agents, lokale modellen en beheer op jullie eigen computer of server."
          }}
        </p>
      </div>
      <a
        :href="
          product === 'assistant'
            ? '#assistent-ai-station'
            : '#coder-ai-station'
        "
        >Bekijk waar alles draait <AppIcon name="arrow-right" :size="15"
      /></a>
    </div>
  </div>
</template>
<style scoped>
.station-product-label {
  background: #e9eddf;
  border-block: 1px solid #ced8bf;
}
.station-product-label > .container-page {
  display: flex;
  align-items: center;
  gap: 1rem;
  padding-block: 1.3rem;
}
.station-product-label > .container-page > svg {
  color: #6d8844;
  flex-shrink: 0;
}
.station-product-label strong {
  font-size: 0.78rem;
  font-weight: 600;
  color: #334626;
}
.station-product-label p {
  font-size: 0.72rem !important;
  color: #5b7049 !important;
  line-height: 1.7 !important;
  margin-top: 0.3rem;
}
.station-product-label a {
  margin-left: auto;
  display: flex;
  align-items: center;
  gap: 0.5rem;
  font-size: 0.65rem;
  color: #557338;
  text-decoration: underline;
  text-underline-offset: 3px;
  white-space: nowrap;
}
@media (max-width: 700px) {
  .station-product-label > .container-page {
    flex-wrap: wrap;
    gap: 0.7rem 1rem;
  }
  .station-product-label > .container-page > div {
    flex: 1;
  }
  .station-product-label a {
    margin-left: 2.4rem;
    font-size: 0.62rem;
  }
  .station-product-label strong {
    font-size: 0.72rem;
  }
  .station-product-label p {
    font-size: 0.67rem !important;
  }
}
</style>
