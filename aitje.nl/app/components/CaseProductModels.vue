<script setup lang="ts">
import type { ProductModelsStory } from "@/content/types";
import ProductModelViewer from "./ProductModelViewer.vue";
const props = defineProps<{ story: ProductModelsStory }>();
const selected = ref(0);
const activeStep = ref(0);
const model = computed(() => props.story.models[selected.value]!);
const step = computed(() => props.story.workflow[activeStep.value]!);
const money = (amount: number) => new Intl.NumberFormat("nl-NL", { style: "currency", currency: "EUR", maximumFractionDigits: amount < 10 ? 2 : 0 }).format(amount);
const catalogExample = 10000;
</script>

<template>
  <div class="product-models-story">
    <section class="border-y border-line bg-brand">
      <div class="container-page grid gap-7 py-9 md:grid-cols-3">
        <div><p class="metric">10.000+</p><p class="mt-2 text-sm">Producten in de catalogus van de partner</p></div>
        <div><p class="metric">11–18 cent</p><p class="mt-2 text-sm">API-kosten per product na optimalisatie</p></div>
        <div><p class="metric">Circa 60%</p><p class="mt-2 text-sm">Lagere totale kosten, inclusief workflow-uren</p></div>
      </div>
    </section>

    <section class="py-16 md:py-24">
      <div class="container-page">
        <div class="grid gap-10 lg:grid-cols-[.85fr_1.15fr] lg:items-center">
          <div>
            <p class="eyebrow text-brand-ink">De vraag</p>
            <h2>Een grote catalogus.<br />Een model per product.</h2>
            <p v-for="paragraph in story.intro" :key="paragraph" class="mt-5 text-base leading-relaxed text-muted">{{ paragraph }}</p>
            <p class="mt-6 border-l-4 border-brand pl-4 font-medium">De oplossing combineert software engineering met een coding agent: vaste stappen in code, gerichte opdrachten voor AI.</p>
          </div>
          <div>
            <div class="mb-4 flex flex-wrap gap-2" role="group" aria-label="Kies een 3D-productmodel">
              <button v-for="(choice, index) in story.models" :key="choice.src" type="button" class="model-choice" :aria-pressed="selected === index" @click="selected = index">{{ choice.name }}</button>
            </div>
            <ProductModelViewer :src="model.src" :name="model.name" poster="/img/cases/contact-lead.png" />
            <p class="mt-4 text-sm font-medium">{{ model.text }}</p>
            <p class="mt-2 text-xs leading-relaxed text-muted">Deze illustratieve 3D-voorbeelden zijn voor deze pagina gemaakt op basis van de aangeleverde productfoto. Het zijn geen gevalideerde CAD-modellen uit de klantcatalogus.</p>
          </div>
        </div>
      </div>
    </section>

    <section class="bg-white py-16 md:py-20">
      <div class="container-page">
        <p class="eyebrow text-brand-ink">De workflow</p>
        <h2>Van WordPress naar Blender.<br />Van Blender naar je website.</h2>
        <p class="mt-5 max-w-3xl text-muted leading-relaxed">De coding agent werkt automatisch via OpenCode. De modelcalls gaan naar GPT-6 Astra via de OpenAI-API; Blender MCP verbindt de agent met Blender. De stappen rondom de modelcalls geven richting aan het werk.</p>
        <div class="mt-10 grid gap-3 md:grid-cols-5" role="group" aria-label="Bekijk de stappen van de workflow">
          <button v-for="(item, index) in story.workflow" :key="item.title" type="button" class="workflow-step" :aria-pressed="activeStep === index" aria-controls="model-workflow-detail" @click="activeStep = index">
            <span class="flex items-center justify-between"><span class="font-mono text-xs">0{{ index + 1 }}</span><AppIcon :name="item.icon" :size="23" /></span>
            <span class="mt-5 block text-sm font-semibold">{{ item.title }}</span>
          </button>
        </div>
        <div id="model-workflow-detail" class="mt-5 rounded-panel bg-sand p-7 md:p-9" aria-live="polite">
          <h3 class="font-heading text-xl font-bold">{{ step.title }}</h3>
          <p class="mt-3 max-w-4xl text-muted leading-relaxed">{{ step.text }}</p>
          <p class="mt-5 inline-flex items-center gap-3 text-sm font-medium"><AppIcon name="arrow-right" :size="20" />{{ step.output }}</p>
        </div>
      </div>
    </section>

    <section class="py-16 md:py-24">
      <div class="container-page grid gap-12 lg:grid-cols-2">
        <div>
          <p class="eyebrow text-brand-ink">De optimalisatie</p>
          <h2>Minder uitzoeken.<br />Meer uitvoeren.</h2>
          <p class="mt-5 text-muted leading-relaxed">In de eerste aanpak kreeg de coding agent veel vrijheid om zelf te zoeken, te plannen en het hele proces te bedenken. Dat kostte circa €9 aan API-gebruik per model. Bij duizenden producten telt iedere herhaalde stap op.</p>
          <p class="mt-5 text-muted leading-relaxed">AITJE legde de werkwijze vast in gestructureerde Markdown-bestanden en koppelde de opdrachten aan het CMS. Productdata komen via een gerichte toolcall binnen. Modelleerregels, export en controles volgen een vaste structuur. Zo gaat minder context naar het model en zijn minder omwegen nodig.</p>
          <p class="mt-6 border-l-4 border-brand pl-4 font-medium">AITJE Coder draait op de eigen werkplek. Het gebruikte AI-model draait via een externe API. De besparing komt hier uit de geoptimaliseerde workflow.</p>
        </div>
        <div class="rounded-panel bg-ink p-7 text-white md:p-9">
          <div class="mb-6 flex items-center justify-between border-b border-white/15 pb-5"><span class="font-mono text-xs text-brand">.md / WERKINSTRUCTIES</span><AppIcon name="code" :size="24" /></div>
          <div v-for="instruction in story.instructions" :key="instruction.file" class="instruction-row">
            <span class="font-mono text-sm text-brand">{{ instruction.file }}</span>
            <p class="mt-2 text-sm leading-relaxed text-white/75">{{ instruction.purpose }}</p>
          </div>
          <p class="mt-6 text-xs leading-relaxed text-white/55">Schematische indeling ter uitleg van de aanpak; dit zijn geen gedeelde bestanden van de klant.</p>
        </div>
      </div>
    </section>

    <section class="border-y border-line bg-white py-16 md:py-20">
      <div class="container-page">
        <div class="grid gap-6 md:grid-cols-[1.2fr_1fr] md:items-end">
          <div><p class="eyebrow text-brand-ink">De kosten</p><h2>Van €9 naar<br /><span class="cost-highlight">€0,11–€0,18.</span></h2></div>
          <p class="max-w-xl text-muted leading-relaxed">Dezelfde productopdracht, met een beter ingerichte workflow. De bedragen hieronder betreffen het API-gebruik per product. De totale oplossing bevat ook het bouwen, optimaliseren en laten draaien van de workflow.</p>
        </div>
        <div class="mt-9 overflow-x-auto rounded-panel border border-line">
          <table class="w-full text-left text-sm">
            <caption class="bg-sand px-6 py-4 text-left text-muted">API-kosten · indicatieve doorrekening voor {{ catalogExample.toLocaleString('nl-NL') }} producten</caption>
            <thead><tr><th>Aanpak</th><th>Per product</th><th>Bij 10.000 producten</th></tr></thead>
            <tbody>
              <tr><td>Agent bedenkt de workflow zelf</td><td>Circa {{ money(story.costs.initialPerProductEur) }}</td><td>Circa {{ money(story.costs.initialPerProductEur * catalogExample) }}</td></tr>
              <tr class="bg-brand/25"><td class="font-semibold">Geoptimaliseerde AITJE-workflow</td><td class="font-semibold">{{ money(story.costs.optimizedPerProductEur[0]) }}–{{ money(story.costs.optimizedPerProductEur[1]) }}</td><td class="font-semibold">{{ money(story.costs.optimizedPerProductEur[0] * catalogExample) }}–{{ money(story.costs.optimizedPerProductEur[1] * catalogExample) }}</td></tr>
            </tbody>
          </table>
        </div>
        <p class="mt-4 text-xs leading-relaxed text-muted">Deze doorrekening laat de schaal zien; het is geen claim dat alle 10.000 producten al zijn verwerkt. De API-kosten dalen circa 98–99%. Dat percentage geldt voor API-gebruik, niet voor de volledige projectkosten.</p>
        <div class="mt-9 grid gap-6 md:grid-cols-2">
          <div class="rounded-panel bg-brand p-7 md:p-9"><p class="metric">{{ story.costs.totalSavingPercent }}% goedkoper</p><h3 class="mt-4 font-heading text-lg font-semibold">Ook wanneer de workflow-uren meetellen.</h3><p class="mt-3 text-sm leading-relaxed">Volgens de kostenvergelijking van deze opdracht viel de totale oplossing circa 60% lager uit dan de oorspronkelijke aanpak waarbij de agent zelf het proces bedacht.</p></div>
          <div class="rounded-panel border border-line p-7 md:p-9"><p class="eyebrow text-brand-ink">De handmatige route</p><h3 class="mt-4 font-heading text-xl font-bold">Circa €1.000 voor acht beelden.</h3><p class="mt-3 text-sm text-muted leading-relaxed">Dat was de offerte van traditionele 3D-modelleurs. Een serie van acht gerenderde beelden is een andere oplevering dan één GLB-model; we gebruiken die offerte daarom als context voor de keuze, niet als rechtstreeks vergelijkbare prijs per model.</p></div>
        </div>
      </div>
    </section>

    <section class="py-16 md:py-20">
      <div class="container-page grid gap-10 lg:grid-cols-[1.2fr_.8fr] lg:items-center">
        <div><p class="eyebrow text-brand-ink">Het resultaat</p><h2>Een productpresentatie<br />die mee kan groeien.</h2><p class="mt-5 max-w-3xl text-muted leading-relaxed">De workflow maakt 3D-productmodellen op basis van bestaande productinformatie en tekeningen. GLB houdt het resultaat bruikbaar buiten Blender, Three.js toont het model op de website en GSAP verzorgt de beweging. De koppeling met het CMS houdt product en uitvoer bij elkaar.</p><p class="mt-5 max-w-3xl text-muted leading-relaxed">Voor een catalogus met duizenden contactsnoeren maakt die combinatie het verschil: een herhaalbaar proces, beheersbare API-kosten en een model dat klanten zelf van meerdere kanten kunnen bekijken.</p></div>
        <div class="rounded-panel bg-sand p-8"><AppIcon name="box" :size="38" /><h3 class="mt-5 font-heading text-xl font-bold">Een coding agent voor jouw workflow?</h3><p class="mt-3 text-sm leading-relaxed text-muted">AITJE verbindt je data, gereedschap en AI-model en optimaliseert de stappen die zich blijven herhalen.</p><UiButton to="/producten/aitje-coder" arrow class="mt-6">Ontdek AITJE Coder</UiButton><NuxtLink to="/diensten/token-management-en-optimalisatie" class="mt-5 block text-sm font-medium underline underline-offset-4">Token management & optimalisatie</NuxtLink></div>
      </div>
    </section>
  </div>
</template>

<style scoped>
h2{margin-top:1rem;font-family:var(--font-heading);font-size:clamp(1.8rem,3.3vw,3rem);font-weight:700;line-height:1.12;letter-spacing:-.04em}.metric{font-family:var(--font-heading);font-size:clamp(1.7rem,3vw,2.7rem);font-weight:700;line-height:1.05;letter-spacing:-.035em}.model-choice{border:1px solid var(--color-line);border-radius:999px;padding:.65rem .9rem;font-size:.75rem;font-weight:600;background:white;cursor:pointer}.model-choice[aria-pressed=true]{background:var(--color-brand);border-color:var(--color-brand)}.workflow-step{border:1px solid var(--color-line);border-radius:18px;padding:1.3rem;text-align:left;cursor:pointer;transition:background .2s}.workflow-step[aria-pressed=true]{background:var(--color-brand);border-color:var(--color-brand)}.model-choice:focus-visible,.workflow-step:focus-visible{outline:2px solid #a38700;outline-offset:4px}.instruction-row+.instruction-row{margin-top:1.1rem;padding-top:1.1rem;border-top:1px solid #ffffff1c}.cost-highlight{background:var(--color-brand);box-decoration-break:clone;padding:0 .1em}th,td{padding:1.3rem 1.5rem;border-bottom:1px solid var(--color-line)}th{font-weight:600}tbody tr:last-child td{border-bottom:0}@media(max-width:767px){.workflow-step{padding:1rem}.workflow-step>span:last-child{margin-top:.5rem}.workflow-step>span:first-child{justify-content:start;gap:1rem}th,td{padding:1rem;min-width:130px}th:first-child,td:first-child{min-width:205px}}
</style>
