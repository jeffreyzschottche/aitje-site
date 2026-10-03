<script setup lang="ts">
const questions = [
  { icon: "shield", title: "Data & privacy", question: "Wie kan bij welke informatie?" },
  { icon: "plug", title: "Modellen & koppelingen", question: "Hoe zit alles aan elkaar?" },
  { icon: "cpu", title: "Gebruik & kosten", question: "Wie bewaakt je tokenverbruik?" },
  { icon: "wrench", title: "Continuïteit & beheer", question: "Wie grijpt in als iets uitvalt?" },
];
</script>

<template>
  <section class="ai-awareness" aria-labelledby="ai-awareness-title">
    <div class="ai-awareness-panel">
      <div class="ai-awareness-content">
        <div class="ai-awareness-main">
          <div class="ai-awareness-copy">
            <p class="eyebrow">Van losse tools naar een bewuste aanpak</p>
            <h2 id="ai-awareness-title">
              Je gebruikt al AI.
              <span>Maar wie houdt het overzicht?</span>
            </h2>
            <p class="ai-awareness-intro">
              Een chatbot hier, een API daar, een agent in een workflow. AI
              groeit je organisatie binnen, vaak voordat iemand het geheel
              heeft ontworpen of het beheer heeft geregeld.
            </p>
            <p class="ai-awareness-detail">
              Ondertussen deel je data, betaal je voor tokens en bouw je op
              systemen van anderen. Wie weet hoe alles samenhangt en wat
              er gebeurt als een onderdeel wegvalt?
            </p>
          </div>

          <div class="ai-awareness-art">
            <img
              src="/img/redesign/vision-ai-awareness.webp"
              alt="Twee vogels bij een nest waarin plantenwortels, kabels en AI-hardware door elkaar groeien"
              width="1122"
              height="1402"
              loading="lazy"
            />
          </div>
        </div>

        <ul class="ai-awareness-questions" aria-label="Vragen voor grip op je AI-omgeving">
          <li v-for="item in questions" :key="item.title">
            <AppIcon :name="item.icon" :size="22" />
            <p class="ai-awareness-question-title">{{ item.title }}</p>
            <p class="ai-awareness-question">{{ item.question }}</p>
          </li>
        </ul>

        <div class="ai-awareness-next">
          <p>
            Grip begint met overzicht.
            <span>AITJE helpt je van losse AI-tools naar een doordachte, beheersbare omgeving.</span>
          </p>
          <UiButton to="/diensten/ai-scan" arrow>Breng je AI-gebruik in kaart</UiButton>
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped>
.ai-awareness { width: 100%; }
.ai-awareness-panel {
  position: relative;
  isolation: isolate;
  overflow: hidden;
  background: #101c16;
  color: #fff;
  padding-block: 48px 32px;
}
.ai-awareness-content {
  max-width: 1600px;
  margin-inline: auto;
  padding-inline: clamp(20px, 4vw, 80px);
}
.ai-awareness-panel::before {
  content: "";
  position: absolute;
  z-index: -1;
  inset: 0;
  background: radial-gradient(ellipse at 85% 30%, rgb(109 133 52 / 0.2), transparent 55%);
  pointer-events: none;
}
.ai-awareness-main {
  display: grid;
  grid-template-columns: 1.4fr 1fr;
  gap: 32px;
  align-items: center;
}
.ai-awareness-copy { position: relative; z-index: 1; padding-block: 8px; }
.ai-awareness-copy .eyebrow { color: #facc15; font-size: 11px; letter-spacing: 0.16em; }
.ai-awareness-copy h2 {
  margin-top: 24px;
  font-family: var(--font-heading);
  font-size: clamp(2.5rem, 3.5vw, 3.5rem);
  line-height: 1.06;
  letter-spacing: -0.045em;
  font-weight: 700;
  text-wrap: balance;
}
.ai-awareness-copy h2 span { display: block; color: #facc15; }
.ai-awareness-intro { margin-top: 24px; font-size: 18px; line-height: 1.7; color: #e1e8df; }
.ai-awareness-detail { margin-top: 18px; font-size: 16px; line-height: 1.7; color: #afbbae; }
.ai-awareness-art { position: relative; min-width: 0; }
.ai-awareness-art img { display: block; width: 100%; height: auto; max-height: 430px; object-fit: contain; }
.ai-awareness-questions {
  display: grid;
  grid-template-columns: repeat(4, minmax(0, 1fr));
  gap: 28px;
  margin-top: 24px;
}
.ai-awareness-questions li { border-top: 1px solid rgb(255 255 255 / 0.18); padding-top: 16px; }
.ai-awareness-questions svg { color: #facc15; }
.ai-awareness-question-title { margin-top: 14px; font-size: 15px; font-weight: 600; }
.ai-awareness-question { margin-top: 6px; font-size: 14px; line-height: 1.5; color: #afbbae; }
.ai-awareness-next {
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 32px;
  margin-top: 24px;
  padding-top: 20px;
  border-top: 1px solid rgb(255 255 255 / 0.18);
}
.ai-awareness-next p { max-width: 550px; font-size: 17px; font-weight: 600; }
.ai-awareness-next p span { display: block; margin-top: 6px; font-size: 14px; line-height: 1.6; font-weight: 400; color: #afbbae; }
.ai-awareness-next :deep(a) { flex-shrink: 0; }
@media (max-width: 900px) {
  .ai-awareness-main { grid-template-columns: 1fr 0.85fr; gap: 16px; }
  .ai-awareness-questions { grid-template-columns: repeat(2, minmax(0, 1fr)); }
  .ai-awareness-next { align-items: flex-start; flex-direction: column; gap: 20px; }
}
@media (max-width: 640px) {
  .ai-awareness-panel { padding-block: 36px 28px; }
  .ai-awareness-main { grid-template-columns: 1fr; gap: 12px; }
  .ai-awareness-copy { padding-block: 0; }
  .ai-awareness-copy h2 { font-size: clamp(2.15rem, 9vw, 3rem); }
  .ai-awareness-intro { font-size: 16px; margin-top: 24px; }
  .ai-awareness-detail { font-size: 15px; }
  .ai-awareness-art img { max-height: 340px; }
  .ai-awareness-questions { gap: 24px 16px; margin-top: 16px; }
  .ai-awareness-question-title { font-size: 14px; }
  .ai-awareness-question { font-size: 13px; }
  .ai-awareness-next :deep(a) { width: 100%; font-size: 14px; }
}
</style>
