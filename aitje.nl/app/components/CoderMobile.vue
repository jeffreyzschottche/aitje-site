<script setup lang="ts">
const selected = ref(0);
const views = [
  { name: "Taken volgen", shot: undefined },
  { name: "Reviewen", shot: "taak-resultaat" },
  { name: "Verslag lezen", shot: "taak-verslag" },
];
</script>
<template>
  <section id="mobiel" class="coder-mobile">
    <div class="container-page cmo-container">
      <div class="cmo-copy">
        <p class="eyebrow">Eén omgeving · desktop en mobiel</p>
        <h2>Je agent werkt.<br />Jij houdt overzicht.</h2>
        <p>
          Een taak indienen, het resultaat bekijken of de gewijzigde bestanden
          beoordelen. Ook op je telefoon, via dezelfde web-app. Het model en de
          code blijven op de gekozen serveromgeving; je telefoon is de toegang.
        </p>
        <div
          class="cmo-tabs"
          role="group"
          aria-label="Bekijk Coder op de telefoon"
        >
          <button
            v-for="(view, i) in views"
            :key="view.name"
            type="button"
            :aria-pressed="selected === i"
            @click="selected = i"
          >
            {{ view.name }}
          </button>
        </div>
        <div class="cmo-route">
          <span><AppIcon name="smartphone" :size="18" />Browser</span
          ><AppIcon name="arrow-right" :size="16" /><span
            ><AppIcon name="server" :size="18" />Eigen omgeving</span
          >
        </div>
        <p class="cmo-note">
          Binnen het eigen netwerk. Toegang van buitenaf richten we in met een
          VPN of afgesproken beveiligde toegang en HTTPS.
        </p>
      </div>
      <CoderArtwork
        :key="selected"
        class="cmo-art"
        variant="mobile"
        scene="telefoon"
        :shot="views[selected]!.shot"
      />
    </div>
  </section>
</template>
<style scoped>
.coder-mobile {
  position: relative;
  background: #10170f;
  color: #fff;
  padding-block: 4.5rem;
  overflow: visible;
  scroll-margin-top: 6rem;
}
.cmo-container {
  position: relative;
  min-height: 29rem;
}
.cmo-copy {
  width: 43%;
  position: relative;
  z-index: 2;
}
.cmo-copy .eyebrow {
  color: #d4bd56;
  font-size: 0.65rem;
}
.cmo-copy h2 {
  font: 700 clamp(2rem, 3.3vw, 3.1rem)/1.13 var(--font-heading);
  letter-spacing: -0.04em;
  margin: 1.1rem 0 1.5rem;
}
.cmo-copy > p:not(.eyebrow) {
  font-size: 0.95rem;
  line-height: 1.9;
  color: #a7b49b;
}
.cmo-tabs {
  display: flex;
  flex-wrap: wrap;
  gap: 0.5rem;
  margin-top: 1.8rem;
}
.cmo-tabs > button {
  min-height: 44px;
  font-size: 0.7rem;
  padding: 0.6rem 0.8rem;
  border: 1px solid #435237;
  border-radius: 2rem;
  color: #bdcbae;
  cursor: pointer;
}
.cmo-tabs > button[aria-pressed="true"] {
  background: #d3bc55;
  color: #19210f;
  border-color: #d3bc55;
}
.cmo-route {
  display: flex;
  align-items: center;
  gap: 1rem;
  border-top: 1px solid #34412b;
  padding-top: 1.3rem;
  margin-top: 1.8rem;
  color: #8da66c;
  font-size: 0.7rem;
}
.cmo-route > span {
  display: flex;
  align-items: center;
  gap: 0.5rem;
}
.cmo-copy > .cmo-note {
  font-size: 0.65rem !important;
  line-height: 1.8 !important;
  color: #7b8e6b !important;
  margin-top: 1rem;
  max-width: 26rem;
}
.cmo-art {
  position: absolute;
  right: -4.5rem;
  top: -11rem;
  width: 68%;
  max-width: none;
  z-index: 1;
}
@media (max-width: 1100px) {
  .coder-mobile {
    padding-block: 0 3rem;
  }
  .cmo-container {
    display: flex;
    flex-direction: column;
  }
  .cmo-copy {
    width: 100%;
    order: 2;
  }
  .cmo-art {
    position: relative;
    right: auto;
    top: auto;
    width: 90%;
    max-width: 40rem;
    align-self: center;
    margin-top: -5.5rem;
    margin-bottom: 1.8rem;
  }
  .cmo-copy > p {
    max-width: 36rem;
  }
}
@media (max-width: 480px) {
  .cmo-art {
    width: 118%;
    margin-top: -3.5rem;
    margin-bottom: 1.4rem;
  }
  .cmo-tabs > button {
    font-size: 0.65rem;
    padding: 0.6rem 0.7rem;
  }
}
</style>
