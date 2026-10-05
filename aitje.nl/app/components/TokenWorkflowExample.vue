<script setup lang="ts">
const steps = [
  { icon: "code", title: "Code bereidt voor", text: "Data ophalen, filteren en berekenen." },
  { icon: "workflow", title: "Het juiste model", text: "Een extern, lokaal of edge-model, passend bij de stap." },
  { icon: "cpu", title: "LLM doet de taak", text: "Alleen de benodigde context en een heldere opdracht." },
  { icon: "check", title: "Output controleren", text: "Code valideert; kwaliteit wordt getest." },
];
</script>

<template>
  <section class="token-workflow-example bg-sand py-16 md:py-20">
    <div class="container-page">
      <SectionHeading
        eyebrow="Zo kan het slimmer"
        title="Laat code doen wat code kan."
        intro="Een workflow kan worden opgedeeld in kleinere taken. Code haalt de juiste gegevens op en doet berekeningen; het model krijgt een gerichte opdracht met alleen de benodigde informatie."
      />
      <ol class="token-workflow-steps mt-10">
        <li v-for="(step, index) in steps" :key="step.title" class="relative rounded-card border border-line bg-surface p-6">
          <div class="flex items-center justify-between">
            <span class="grid size-11 place-items-center rounded-2xl bg-brand text-ink">
              <AppIcon :name="step.icon" :size="22" />
            </span>
            <span class="font-mono text-xs text-muted">0{{ index + 1 }}</span>
          </div>
          <h3 class="mt-5 font-heading text-lg font-semibold">{{ step.title }}</h3>
          <p class="mt-2 text-sm leading-relaxed text-muted">{{ step.text }}</p>
        </li>
      </ol>
      <div class="mt-10 rounded-panel border border-line bg-surface p-7 md:p-9">
        <p class="eyebrow text-brand-ink">Illustratief rekenvoorbeeld</p>
        <h3 class="mt-3 font-heading text-2xl font-semibold">Van €4 naar €0,40 aan modelgebruik.</h3>
        <p class="mt-3 max-w-3xl leading-relaxed text-muted">
          Stel: een workflow gebruikt in totaal één miljoen tokens per eindresultaat.
          Door de taak op te delen, minder data mee te sturen en vaste stappen met
          code te doen, zijn voor een resultaat van dezelfde kwaliteit nog
          honderdduizend tokens nodig.
        </p>
        <dl class="mt-7 grid gap-4 md:grid-cols-2">
          <div class="rounded-card border border-line p-6">
            <dt class="font-semibold">Alle stappen via de LLM</dt>
            <dd class="mt-3 font-heading text-4xl font-bold">€4</dd>
            <dd class="mt-2 text-sm text-muted">1.000.000 tokens per eindresultaat</dd>
          </div>
          <div class="rounded-card bg-brand p-6 text-ink">
            <dt class="font-semibold">Code + gerichte modelcalls</dt>
            <dd class="mt-3 font-heading text-4xl font-bold">€0,40</dd>
            <dd class="mt-2 text-sm">100.000 tokens per eindresultaat</dd>
          </div>
        </dl>
        <p class="mt-5 text-sm leading-relaxed text-muted">
          Beide bedragen rekenen met hetzelfde fictieve tarief van €4 per miljoen
          tokens, voor input en output samen. Dit is geen klantresultaat of vaste
          besparingsbelofte. Code, hosting, ontwikkeling en beheer staan hier los
          van. In een echte vergelijking tellen ook kwaliteit, retries en
          mislukte resultaten mee.
        </p>
      </div>
      <div class="mt-8 grid gap-6 md:grid-cols-2">
        <div class="border-t border-line pt-6">
          <h3 class="font-heading text-xl font-semibold">Vergelijk met jouw eigen werk.</h3>
          <p class="mt-3 leading-relaxed text-muted">
            Een kleiner model kan goed passen bij een afgebakende taak, terwijl
            een complexere stap een krachtiger model vraagt. AITJE vergelijkt
            met jouw voorbeelden en telt ook controlewerk en extra pogingen mee.
          </p>
        </div>
        <div class="border-t border-line pt-6">
          <h3 class="font-heading text-xl font-semibold">Eén plek om je calls te beheren.</h3>
          <p class="mt-3 leading-relaxed text-muted">
            Een centrale API-laag kan modelkeuze, limieten, logging en foutafhandeling
            regelen. Zo gebruikt je workflow verschillende modellen zonder
            overal aparte koppelingen en instellingen te onderhouden.
          </p>
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped>
.token-workflow-steps {
  display: grid;
  grid-template-columns: repeat(4, minmax(0, 1fr));
  gap: 20px;
}
.token-workflow-steps li:not(:last-child)::after {
  content: "→";
  position: absolute;
  right: -17px;
  top: 42px;
  z-index: 1;
  color: var(--color-brand-ink);
  font-size: 20px;
}
@media (max-width: 1023px) {
  .token-workflow-steps { grid-template-columns: repeat(2, minmax(0, 1fr)); }
  .token-workflow-steps li:nth-child(2)::after { display: none; }
}
@media (max-width: 639px) {
  .token-workflow-steps { grid-template-columns: 1fr; }
  .token-workflow-steps li:not(:last-child)::after {
    display: block;
    content: "↓";
    right: 50%;
    top: auto;
    bottom: -22px;
  }
}
</style>
