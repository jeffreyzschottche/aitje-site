<script setup lang="ts">
const selected = ref(0);
const panels = [
  {
    name: "Workflows & agents", icon: "workflow", title: "Laat je agent minder opnieuw uitvinden.",
    intro: "Heldere instructies en bestaande software geven een agent houvast. AITJE bekijkt hoe de taak, de context en de hulpmiddelen op elkaar aansluiten.",
    methods: [
      { title: "Skills & rules", text: "Een vaste werkwijze, taakgrenzen en controles, passend bij je agent." },
      { title: "Mappen & Markdown", text: "Een logische agentstructuur met gerichte code- en projectdocumentatie." },
      { title: "Herbruikbare code", text: "Bestaande functies en snippets inzetten voor werk dat iedere keer hetzelfde is." },
      { title: "Tool calling", text: "Gegevens gericht ophalen en acties via code uitvoeren, met alleen de benodigde context voor de LLM." },
    ],
    diagramTitle: "Bijvoorbeeld voor een coding agent",
    nodes: [
      { icon: "file-search", title: "rules.md", text: "Werkwijze, grenzen en controles" },
      { icon: "library", title: "skills/ + docs/", text: "Taakinstructies en codebasedocumentatie" },
      { icon: "code", title: "snippets/ + tools/", text: "Herbruikbare functies en koppelingen" },
    ],
    note: "Illustratieve mappenstructuur. De inrichting en bestandsnamen worden afgestemd op de agent die je gebruikt.",
    links: [{ label: "Tool calling uitgelegd", to: "/kenniscentrum/wat-is-tool-calling" }],
  },
  {
    name: "Kennis & RAG", icon: "library", title: "Maak de juiste kennis beter vindbaar.",
    intro: "Een ander chatmodel helpt weinig als de verkeerde tekst wordt opgehaald. AITJE kan de kennisbank herontwerpen en de zoekketen opnieuw inrichten.",
    methods: [
      { title: "Structuur & actualiteit", text: "Documenten opschonen en indelen op categorie, datum, prioriteit en toegangsrechten." },
      { title: "Tekststukken & context", text: "Documenten in bruikbare stukken verdelen, met de informatie die nodig is om ze goed te begrijpen." },
      { title: "Embeddings & vectordatabase", text: "Een passend embeddingmodel kiezen en de index en zoekinstellingen verbeteren. Waar nodig opnieuw verwerken en indexeren." },
      { title: "Zoektaal & selectie", text: "Meertalige vragen, zoekformulering, filters en rangschikking afstemmen op je documenten en gebruikers." },
    ],
    diagramTitle: "Van document naar gerichte context",
    nodes: [
      { icon: "library", title: "Geordende bronnen", text: "Categorie, datum en toegangsrechten" },
      { icon: "cpu", title: "Tekststukken & embeddings", text: "Verwerkt voor de gekozen zoekmethode" },
      { icon: "search", title: "Selectie uit de vectordatabase", text: "Relevante passages bij de vraag" },
      { icon: "bot", title: "Context voor het model", text: "De opgehaalde kennis voor het antwoord" },
    ],
    note: "AITJE test met jouw vragen welke bronnen worden gevonden, of ze actueel zijn en of de juiste toegangsrechten worden toegepast.",
    links: [{ label: "Wat is RAG?", to: "/kenniscentrum/wat-is-rag" }],
  },
  {
    name: "Het model", icon: "cpu", title: "Stem het model af op de taak.",
    intro: "Soms is een andere instructie of modelkeuze genoeg. Soms vraagt je toepassing om een aangepaste modelversie. AITJE onderzoekt wat de aanpassing werkelijk oplevert.",
    methods: [
      { title: "Modelkeuze per stap", text: "Een passend model voor elke taak, met kwaliteit, snelheid en kosten in beeld." },
      { title: "Fine-tuning", text: "Het taakgedrag verder trainen met geschikte voorbeelden van de gewenste werkwijze en uitvoer." },
      { title: "Abliteration", text: "Waar passend: weigeringsgedrag aanpassen bij een model met beschikbare gewichten, voor legitieme taken die onnodig worden afgewezen." },
      { title: "Vergelijken & controleren", text: "De aangepaste versie testen op dezelfde taken, inclusief foutgevallen en de controles van de toepassing." },
    ],
    diagramTitle: "Een aanpassing die je kunt beoordelen",
    nodes: [
      { icon: "file-search", title: "Jouw voorbeeldtaken", text: "Gewenste uitkomsten en foutgevallen" },
      { icon: "cpu", title: "Oorspronkelijke & aangepaste versie", text: "Dezelfde taken en beoordelingscriteria" },
      { icon: "gauge", title: "Vergelijk het resultaat", text: "Kwaliteit, snelheid, verbruik en correctiewerk" },
    ],
    note: "Fine-tuning en abliteration veranderen modelgedrag. Actuele bedrijfskennis, toegangsrechten en controles blijven onderdeel van de omringende oplossing.",
    links: [{ label: "Fine-tuning uitgelegd", to: "/kenniscentrum/wat-is-fine-tuning" }, { label: "Abliteration uitgelegd", to: "/kenniscentrum/wat-is-abliteration" }],
  },
];
const current = computed(() => panels[selected.value]!);
</script>

<template>
  <section class="optimization-options section-space">
    <div class="container-page">
      <SectionHeading eyebrow="Waar kan het beter?" title="De hele oplossing telt mee." intro="De winst zit vaak in hoe je AI het werk aanbiedt. AITJE bekijkt de instructies, de kennis en de code rondom het model, én het model zelf." />
      <div class="optimization-selector" aria-label="Kies een optimalisatiegebied">
        <button v-for="(panel, index) in panels" :key="panel.name" type="button" :aria-pressed="selected === index" :class="{ active: selected === index }" @click="selected = index"><AppIcon :name="panel.icon" :size="21" />{{ panel.name }}</button>
      </div>
      <div class="optimization-panel" aria-live="polite">
        <div>
          <h3>{{ current.title }}</h3><p class="optimization-panel-intro">{{ current.intro }}</p>
          <dl class="optimization-methods"><div v-for="method in current.methods" :key="method.title"><dt>{{ method.title }}</dt><dd>{{ method.text }}</dd></div></dl>
          <div v-if="current.links.length" class="optimization-links"><NuxtLink v-for="link in current.links" :key="link.to" :to="link.to">{{ link.label }} <AppIcon name="arrow-up-right" :size="16" /></NuxtLink></div>
        </div>
        <figure class="optimization-diagram">
          <figcaption>{{ current.diagramTitle }}</figcaption>
          <ol><li v-for="(node, index) in current.nodes" :key="node.title"><span class="optimization-node-icon"><AppIcon :name="node.icon" :size="22" /></span><div><strong>{{ node.title }}</strong><p>{{ node.text }}</p></div><AppIcon v-if="index < current.nodes.length - 1" name="chevron-down" class="optimization-node-arrow" :size="18" /></li></ol>
          <p class="optimization-note">{{ current.note }}</p>
        </figure>
      </div>
      <p class="optimization-measure"><AppIcon name="gauge" :size="22" /><span><strong>Vergelijk kosten per bruikbaar resultaat.</strong> Minder calls of een kleiner model kan helpen. Ook kwaliteit, controlewerk, hosting en extra pogingen tellen mee.</span></p>
    </div>
  </section>
</template>

<style scoped>
.optimization-options { background: #eef0e7; }
.optimization-selector { display: flex; flex-wrap: wrap; gap: .65rem; margin-top: 2rem; }
.optimization-selector button { display: inline-flex; align-items: center; gap: .6rem; border: 1px solid #cbd2c2; border-radius: 999px; padding: .9rem 1.2rem; font-size: .95rem; font-weight: 600; background: #fff; cursor: pointer; }
.optimization-selector button.active { background: var(--color-brand); border-color: var(--color-brand); }
.optimization-selector button:hover:not(.active) { border-color: var(--color-ink); }
.optimization-selector button:focus-visible { outline: 2px solid var(--color-ink); outline-offset: 4px; }
.optimization-panel { display: grid; grid-template-columns: minmax(0, 1.1fr) minmax(0, 1fr); align-items: start; gap: 3.5rem; margin-top: 2.5rem; }
.optimization-panel h3 { font: 700 clamp(1.5rem, 2.6vw, 2rem)/1.2 var(--font-heading); letter-spacing: -.04em; }
.optimization-panel-intro { margin-top: 1rem; color: var(--color-muted); font-size: .96rem; line-height: 1.8; }
.optimization-methods { margin-top: 1.3rem; }
.optimization-methods > div { border-top: 1px solid #cbd2c2; padding-block: 1rem; }
.optimization-methods dt { font: 700 1rem var(--font-heading); }
.optimization-methods dd { margin-top: .4rem; color: var(--color-muted); font-size: .88rem; line-height: 1.8; }
.optimization-links { display: flex; flex-wrap: wrap; gap: .7rem 1.5rem; margin-top: .5rem; }
.optimization-links a { display: inline-flex; align-items: center; gap: .4rem; font-size: .85rem; font-weight: 600; text-decoration: underline; text-underline-offset: 4px; }
.optimization-links a:focus-visible { outline: 2px solid var(--color-ink); outline-offset: 4px; }
.optimization-diagram { border-radius: 22px; background: #173a2d; padding: 2rem; color: #fff; }
.optimization-diagram figcaption { font: 700 1.1rem/1.4 var(--font-heading); }
.optimization-diagram ol { display: grid; gap: 2.3rem; margin-top: 1.8rem; }
.optimization-diagram li { display: flex; position: relative; gap: 1rem; align-items: center; }
.optimization-node-icon { display: grid; place-items: center; flex-shrink: 0; width: 2.8rem; height: 2.8rem; border-radius: 12px; background: var(--color-brand); color: var(--color-ink); }
.optimization-diagram strong { font-family: var(--font-heading); font-size: .97rem; overflow-wrap: anywhere; }
.optimization-diagram li p { margin-top: .3rem; color: #c7d8ca; font-size: .82rem; line-height: 1.6; }
.optimization-node-arrow { position: absolute; bottom: -1.6rem; left: .85rem; color: #a9c5ac; }
.optimization-note { margin-top: 1.8rem; border-top: 1px solid #456352; padding-top: 1.2rem; color: #c7d8ca; font-size: .82rem; line-height: 1.8; }
.optimization-measure { display: flex; gap: .8rem; align-items: flex-start; border-top: 1px solid #cbd2c2; padding-top: 1.4rem; margin-top: 2rem; color: var(--color-muted); font-size: .88rem; line-height: 1.8; }
.optimization-measure svg { flex-shrink: 0; margin-top: .2rem; color: #536c48; }
.optimization-measure strong { color: var(--color-ink); }
@media (max-width: 1023px) { .optimization-panel { gap: 2rem; } }
@media (max-width: 767px) {
  .optimization-panel { grid-template-columns: 1fr; }
  .optimization-selector { gap: .5rem; }
  .optimization-selector button { padding: .75rem 1rem; font-size: .86rem; }
  .optimization-diagram { padding: 1.5rem; }
}
</style>
