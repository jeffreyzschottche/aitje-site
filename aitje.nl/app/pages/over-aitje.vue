<script setup lang="ts">
usePageSeo({
  title: "Over AITJE — De AI-specialist van dichtbij",
  description:
    "Een Nederlands AI-productbedrijf en specialist. AITJE onderzoekt, bouwt, installeert en blijft bereikbaar. Ontdek de mensen, expertise en visie achter AITJE.",
  image: "/img/redesign/about.webp",
  breadcrumbs: [{ name: "Over AITJE", path: "/over-aitje" }],
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
      eyebrow="Aangenaam. AITJE."
      title="Techniek in het hoofd. Jouw werk voor ogen."
      subline="AITJE is een Nederlands AI-productbedrijf en specialist. Eigen producten, praktisch advies en mensen die de techniek voor je kunnen regelen."
      image="/img/redesign/about.webp"
      immersive
      image-alt="Een uil en een raaf naast elkaar bij een nest met het gloeiende AITJE-ei op een rots met mos"
      ><UiButton to="/contact" arrow class="mt-8"
        >Maak kennis met AITJE</UiButton
      ></PageHero
    >
    <section class="section-space">
      <div class="container-page">
        <div class="about-composition">
          <SectionHeading
            eyebrow="De rol van AITJE"
            title="Voor computers de systeembeheerder. Voor AI: AITJE."
          />
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
    <section class="nature-scene on-dark about-nature">
      <img
        src="/img/redesign/raven-scene.webp"
        alt="Kraai en ei in een nest van natuur en techniek"
        width="1536"
        height="1024"
        loading="lazy"
      />
      <div class="container-page nature-scene-layout">
        <div class="scene-caption">
          <span class="signal-dot" /> KENNIS DIE JE VERDER BRENGT
        </div>
        <div class="nature-scene-copy">
          <p class="eyebrow text-brand">De overtuiging</p>
          <h2>AI dichtbij.<br /><span>De regie bij jou.</span></h2>
          <p>
            Afhankelijkheid mag een bewuste keuze zijn. Niet een onbedoeld
            gevolg.
          </p>
          <p class="scene-secondary">
            Daarom kijkt AITJE eerst naar eigen hardware en servers, en daarna
            naar Nederlandse, Europese of andere externe oplossingen die
            aantoonbaar passen.
          </p>
          <UiButton to="/visie" variant="light" arrow>Lees de visie</UiButton>
        </div>
      </div>
    </section>
    <section class="section-space">
      <div class="container-page">
        <SectionHeading
          eyebrow="De mensen achter de techniek"
          title="Twee oprichters. Eén gedeelde richting."
          intro="AI praktisch en toegankelijk maken vraagt om technische kennis én aandacht voor het werk van de klant. Die twee kanten komen samen bij AITJE."
        />
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
      </div>
    </section>
    <section class="section-space">
      <div class="container-page">
        <SectionHeading
          eyebrow="Samenwerken"
          title="Van eerste gesprek tot de volgende stap."
        /><StepList :steps="steps" class="mt-12" /><UiButton
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
