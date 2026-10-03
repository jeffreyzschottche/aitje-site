<script setup lang="ts">
usePageSeo({
  title: "Over AITJE — De AI-specialist van dichtbij",
  description:
    "Een Nederlands AI-productbedrijf en specialist. AITJE onderzoekt, bouwt, installeert en blijft bereikbaar. Ontdek de mensen, expertise en visie achter AITJE.",
  image: "/img/redesign/about.webp",
  breadcrumbs: [{ name: "Over AITJE", path: "/over-aitje" }],
});
useHead({
  link: [{ rel: "preload", as: "image", href: "/img/redesign/about-connected-forest.webp", fetchpriority: "high" }],
});
const strengths = [
  {
    title: "Eigen producten",
    text: "Assistent en Coder brengen modellen, software en inrichting samen. Het uitzoekwerk zit al in het product.",
    icon: "box",
  },
  {
    title: "Brede AI-kennis",
    text: "Van een adviesvraag tot een eigen workflow. De taak bepaalt welke techniek iets toevoegt.",
    icon: "cpu",
  },
  {
    title: "Eigen regie",
    text: "AI op je eigen hardware of server waar dat past. Met inzicht in de keuzes, kosten en afhankelijkheden.",
    icon: "shield",
  },
  {
    title: "Menselijk contact",
    text: "Iemand om mee te denken, keuzes te bespreken en hulp mee af te spreken. Ook na de oplevering.",
    icon: "message",
  },
];
const fields = [
  { title: "Interface & ontwerp", icon: "pen" },
  { title: "Hardware & servers", icon: "server" },
  { title: "Software & koppelingen", icon: "code" },
  { title: "Data & kennisbanken", icon: "library" },
  { title: "Netwerk & beveiliging", icon: "shield" },
];
const steps = [
  { title: "Kennismaken", text: "Je vraag, je werk en wat je wilt bereiken." },
  {
    title: "Onderzoeken",
    text: "Een scan of concreet voorstel voor een passende oplossing.",
  },
  { title: "Opleveren", text: "Bouwen, installeren, testen en uitleggen." },
  {
    title: "Verder helpen",
    text: "Losse hulp of ondersteuning en onderhoud, naar behoefte.",
  },
];
</script>
<template>
  <div>
    <PageHero
      class="about-forest-hero"
      eyebrow="Aangenaam. AITJE."
      title="Jouw partner in AI. Van idee tot uitvoering."
      subline="AITJE is een Nederlands AI-productbedrijf en specialist. Eigen producten, praktisch advies en mensen die de techniek voor je kunnen regelen."
      image="/img/redesign/about.webp"
      background="/img/redesign/about-connected-forest.webp"
      dark
      immersive
      image-alt="Een uil en een raaf naast elkaar bij een nest met het gloeiende AITJE-ei op een rots met mos"
      >
      <template #title>
        Jouw partner in AI. <span class="about-forest-title">Van idee tot uitvoering.</span>
      </template>
      <UiButton to="/contact" arrow class="mt-8"
        >Maak kennis met AITJE</UiButton
      ></PageHero
    >
    <section class="section-space">
      <div class="container-page">
        <div class="about-composition">
          <AboutRoleHeading />
          <div class="space-y-5 text-lg leading-relaxed text-muted">
            <p>
              AI ontwikkelt zich snel. Welke modellen zijn bruikbaar? Wat kan op
              je eigen hardware? En hoe maak je van losse tools iets dat je
              dagelijks kunt gebruiken?
            </p>
            <p>
              AITJE onderzoekt de mogelijkheden, bouwt wat nodig is en levert
              het werkend op. Van een gerichte adviesvraag tot een complete
              omgeving.
            </p>
          </div>
        </div>
        <div class="mt-14 grid gap-7 sm:grid-cols-2 lg:grid-cols-4">
          <div
            v-for="strength in strengths"
            :key="strength.title"
            class="border-t border-line pt-7"
          >
            <AppIcon :name="strength.icon" :size="28" />
            <h3 class="mt-5 font-heading text-xl font-semibold">
              {{ strength.title }}
            </h3>
            <p class="mt-3 text-sm leading-relaxed text-muted">
              {{ strength.text }}
            </p>
          </div>
        </div>
      </div>
    </section>
    <AitjeFilm placement="about" full />
    <section class="about-workshop on-dark">
      <img
        class="about-workshop-image"
        src="/img/redesign/about-hens-workshop.webp"
        alt="Twee kippen bij een werkplaats in het bos, met bouwtekeningen, een kruiwagen en een kleine computer verbonden met gouden kabels"
        width="1672"
        height="941"
        loading="lazy"
      />
      <div class="container-page about-workshop-layout">
        <div class="about-workshop-copy">
          <p class="eyebrow text-brand">De overtuiging</p>
          <h2>Grip op<br /><span>wat je gebruikt.</span></h2>
          <p>
            Weten waar je data blijft, waarvoor je betaalt en wie je helpt als
            iets uitvalt. Dat hoort voor ons bij een werkende AI-oplossing.
          </p>
          <UiButton to="/visie" variant="light" arrow>Lees de visie</UiButton>
        </div>
      </div>
    </section>
    <section class="section-space">
      <div class="container-page">
        <div class="about-founders-intro">
          <SectionHeading
            eyebrow="De mensen achter de techniek"
            title="Twee oprichters. Een netwerk van specialisten."
            intro="Achter AITJE staan twee oprichters en een vast netwerk van partners. Van hardwareontwerpers en softwareontwikkelaars tot netwerkbeheerders en specialisten in beveiliging, ontwerp en implementatie. Zo brengen we voor elk onderdeel de juiste mensen samen rond één doel: een oplossing die werkt voor jou."
          />
          <img
            class="about-founders-photo"
            src="/img/redesign/aitje-founders.png"
            alt="Kees links en Jeffrey rechts, de twee oprichters van AITJE, in hun kantoor"
            width="1376"
            height="876"
            loading="lazy"
            decoding="async"
          />
        </div>
        <div class="founder-panels mt-10">
          <div class="founder-panel">
            <AppIcon name="code" :size="36" />
            <h3>Techniek &amp; producten</h3>
            <p>
              Modellen onderzoeken, software bouwen en de onderdelen op elkaar
              afstemmen. Van het eerste experiment tot een omgeving die klaar is
              voor gebruik.
            </p>
          </div>
          <div class="founder-panel">
            <AppIcon name="handshake" :size="36" />
            <h3>Klanten &amp; implementatie</h3>
            <p>
              De vraag begrijpen, keuzes uitleggen en de oplossing in het
              dagelijkse werk laten passen. Met aandacht voor inrichting, uitleg
              en het vervolg.
            </p>
          </div>
        </div>
      </div>
    </section>
    <section class="section-space environment-section">
      <div class="container-page">
        <SectionHeading
          eyebrow="Het netwerk"
          title="De juiste kennis voor de vraag."
          intro="AITJE werkt met professionals uit verschillende vakgebieden. Per opdracht komt de expertise samen die de oplossing nodig heeft."
        />
        <div class="expertise-network">
          <div v-for="field in fields" :key="field.title">
            <AppIcon :name="field.icon" :size="34" :stroke-width="1.3" />
            <h3>{{ field.title }}</h3>
          </div>
        </div>
        <TechnologyLogoSlider />
      </div>
    </section>
    <section class="section-space about-collaboration">
      <div class="container-page">
        <div class="about-collaboration-intro">
          <SectionHeading
            class="about-collaboration-heading"
            eyebrow="Samenwerken"
            title="Van eerste gesprek tot de volgende stap."
          />
          <div class="about-collaboration-perch" aria-hidden="true">
            <img
              src="/img/redesign/about-robin-branch.png"
              alt=""
              width="1536"
              height="1024"
              loading="lazy"
              decoding="async"
            />
          </div>
        </div>
        <StepList :steps="steps" class="mt-12" /><UiButton
          to="/diensten"
          variant="secondary"
          arrow
          class="mt-9"
          >Ontdek de diensten</UiButton
        >
      </div>
    </section>
    <CtaBanner
      title="Vertel wat je wilt bereiken."
      text="Een concreet idee of een eerste vraag: AITJE denkt met je mee over wat mogelijk is."
      :secondary="{ label: 'Veelgestelde vragen', to: '/faq' }"
    />
  </div>
</template>

<style scoped>
.about-founders-intro {
  display: grid;
  grid-template-columns: 1.1fr 1fr;
  align-items: center;
  gap: clamp(2rem, 4vw, 4rem);
}
.about-founders-photo {
  display: block;
  width: 100%;
  height: auto;
  border-radius: 24px;
  border: 1px solid var(--color-line);
}
@media (max-width: 1023px) {
  .about-founders-intro {
    grid-template-columns: 1fr;
  }
}
.about-collaboration {
  overflow: hidden;
}
.about-collaboration-intro {
  position: relative;
  min-height: clamp(240px, 19vw, 300px);
}
.about-collaboration-heading {
  max-width: 55%;
}
.about-collaboration-perch {
  position: absolute;
  top: -40px;
  right: calc(50% - 50vw - 24px);
  width: clamp(440px, 44vw, 800px);
  pointer-events: none;
}
.about-collaboration-perch img {
  width: 100%;
  height: auto;
}
@media (max-width: 767px) {
  .about-collaboration-intro {
    min-height: auto;
  }
  .about-collaboration-heading {
    max-width: none;
  }
  .about-collaboration-perch {
    --perch-width: clamp(440px, 75vw, 560px);
    position: relative;
    top: auto;
    right: auto;
    width: var(--perch-width);
    margin: 1rem 0 -1rem;
    margin-left: calc(50% + 50vw + 24px - var(--perch-width));
  }
}
.about-workshop {
  position: relative;
  isolation: isolate;
  overflow: hidden;
  background: #07100f;
  color: #fff;
}
.about-workshop-image {
  position: absolute;
  inset-block: 0;
  left: 50%;
  transform: translateX(-50%);
  width: 100%;
  max-width: 2200px;
  height: 100%;
  object-fit: cover;
  object-position: left center;
  z-index: -2;
}
.about-workshop::before {
  content: "";
  position: absolute;
  inset: 0;
  z-index: -1;
  background: linear-gradient(90deg, transparent 35%, rgb(7 16 15 / 0.55) 52%, rgb(7 16 15 / 0.85) 63%, #07100f 90%);
}
.about-workshop-layout {
  display: grid;
  grid-template-columns: 1fr 0.85fr;
  align-items: center;
  gap: 70px;
  min-height: clamp(620px, 42vw, 850px);
  padding-block: 85px;
}
.about-workshop-copy {
  grid-column: 2;
  max-width: 520px;
}
.about-workshop-copy h2 {
  font-size: clamp(2rem, 3.5vw, 3.6rem);
  line-height: 1.12;
  font-weight: 600;
  margin-top: 24px;
}
.about-workshop-copy h2 span {
  color: #facc15;
}
.about-workshop-copy > p:not(.eyebrow) {
  margin-top: 24px;
  font-size: 1rem;
  line-height: 1.8;
  color: #e0e5dc;
}
.about-workshop-copy > p.scene-secondary {
  margin-top: 16px;
  font-size: 0.9rem;
  color: #b7c1b6;
}
.about-workshop-copy > a {
  margin-top: 26px;
}
@media (min-width: 2200px) {
  .about-workshop-image {
    mask-image: linear-gradient(90deg, transparent, #000 14%, #000 80%, transparent);
  }
}
@media (max-width: 767px) {
  .about-workshop-image {
    position: relative;
    inset: auto;
    transform: none;
    max-width: none;
    height: auto;
    aspect-ratio: 1.1;
    object-position: 15% center;
  }
  .about-workshop::before {
    inset-block: 0 auto;
    height: calc(100vw / 1.1 + 1px);
    background: linear-gradient(180deg, transparent 65%, #07100f 100%);
  }
  .about-workshop-layout {
    display: block;
    min-height: auto;
    padding-block: 12px 55px;
  }
  .about-workshop-copy {
    max-width: none;
  }
  .about-workshop-copy h2 {
    font-size: clamp(2rem, 8vw, 2.7rem);
  }
}
.about-forest-hero {
  background: #08191b;
  border-bottom: 0;
  margin-bottom: 0;
}
.about-forest-title {
  color: #facc15;
}
.about-forest-hero :deep(.photo-bg) {
  object-position: 64% center;
  filter: saturate(1.03) contrast(1.02);
}
.about-forest-hero :deep(.photo-wash) {
  background:
    linear-gradient(90deg, rgb(4 16 18 / 0.82), rgb(4 16 18 / 0.64) 34%, rgb(4 16 18 / 0.25) 58%, transparent 78%),
    linear-gradient(180deg, rgb(4 16 18 / 0.22), transparent 35%, rgb(4 16 18 / 0.5) 100%);
}
.about-forest-hero :deep(.page-hero-intro) {
  color: #e1e7df;
}
.about-forest-hero :deep(.service-scene) {
  width: 108%;
  margin-left: -4%;
}
.about-forest-hero :deep(.service-scene-orbit) {
  opacity: 0.2;
}
.about-forest-hero :deep(.service-scene-subject) {
  filter: drop-shadow(0 20px 28px rgb(0 0 0 / 0.3));
}
@media (max-width: 767px) {
  .about-forest-hero :deep(.photo-bg) {
    object-position: 76% center;
  }
  .about-forest-hero :deep(.photo-wash) {
    background: linear-gradient(180deg, rgb(4 16 18 / 0.9), rgb(4 16 18 / 0.82) 40%, rgb(4 16 18 / 0.12) 75%, rgb(4 16 18 / 0.42));
  }
  .about-forest-hero :deep(.service-scene) {
    width: 100%;
    margin-left: 0;
  }
}
</style>
