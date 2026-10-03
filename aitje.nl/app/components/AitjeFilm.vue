<script setup lang="ts">
withDefaults(defineProps<{
  placement: "home" | "about" | "vision";
  full?: boolean;
}>(), { full: false });

const videoUrl = (full: boolean) =>
  `https://www.youtube.com/embed/3ZJgaJGeRS4${full ? "?start=0" : "?start=70"}`;
</script>

<template>
  <section :class="['aitje-film', `aitje-film--${placement}`]">
    <div v-if="placement === 'home'" class="container-page aitje-film-home">
      <div class="aitje-film-copy">
        <p class="eyebrow">Over AITJE</p>
        <h2>Wie we zijn</h2>
        <p>
          Altijd dichtbij. Altijd beschikbaar. Volledig in eigen beheer.
          Ontdek hoe AITJE AI slimmer, veiliger en praktischer maakt.
        </p>
      </div>
      <div class="aitje-film-player">
        <iframe
          :src="videoUrl(full)"
          title="AITJE video — bekijk de trailer"
          loading="lazy"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          referrerpolicy="strict-origin-when-cross-origin"
          allowfullscreen
        />
      </div>
    </div>

    <div v-else-if="placement === 'about'" class="container-page aitje-film-about">
      <div class="aitje-film-about-copy">
        <p class="eyebrow">AITJE in beeld</p>
        <h2>Een kijkje achter de techniek.</h2>
        <p>
          Bekijk de volledige video en ontdek hoe AITJE werkt aan AI die
          dichtbij, beschikbaar en in eigen beheer blijft.
        </p>
      </div>
      <div class="aitje-film-player">
        <iframe
          :src="videoUrl(true)"
          title="De volledige AITJE video"
          loading="lazy"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          referrerpolicy="strict-origin-when-cross-origin"
          allowfullscreen
        />
      </div>
    </div>

    <div v-else class="container-page aitje-film-vision">
      <div class="aitje-film-vision-heading">
        <p class="eyebrow">Onze visie, in beeld</p>
        <h2>De kracht van AI. <span class="text-brand">Zelfstandig en soeverein.</span></h2>
        <p>
          Zelf bepalen waar je AI draait, wie bij je data kan en welke
          technologie je gebruikt. Dat is de toekomst waar AITJE aan bouwt.
        </p>
        <p>Bekijk de video en ontdek onze visie.</p>
      </div>
      <div class="aitje-film-player">
        <iframe
          :src="videoUrl(true)"
          title="De volledige AITJE video over eigen regie met AI"
          loading="lazy"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          referrerpolicy="strict-origin-when-cross-origin"
          allowfullscreen
        />
      </div>
    </div>
  </section>
</template>
