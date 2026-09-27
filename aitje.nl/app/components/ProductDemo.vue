<script setup lang="ts">
withDefaults(defineProps<{ kind?: "assistant" | "coder" }>(), {
  kind: "assistant",
});
const active = ref(0);
const prompts = ["Kennis terugvinden", "Samenvatten", "Een eerste concept"];
const examples = [
  {
    question: "Hoe vraagt een collega verlof aan?",
    answer:
      "Volgens de voorbeeldhandleiding dien je je aanvraag in via het personeelsportaal. Je leidinggevende beoordeelt de aanvraag. Na akkoord verschijnt het verlof in de teamplanning.",
    source: "Voorbeeld · personeelshandboek.pdf",
  },
  {
    question: "Vat deze projectnotities samen in drie acties.",
    answer:
      "1. Controleer de planning met het projectteam. 2. Verzamel de ontbrekende specificaties. 3. Bespreek de vervolgstappen tijdens het volgende overleg.",
    source: "Voorbeeld · projectnotities.txt",
  },
  {
    question: "Schrijf een korte mail over onze nieuwe werkwijze.",
    answer:
      "Hoi team, vanaf maandag gebruiken we één centrale plek voor onze projectdocumenten. Zo werkt iedereen met dezelfde informatie. In de bijlage vind je de stappen om te beginnen.",
    source: "Voorbeeld · interne communicatie",
  },
];
const steps = ["Project lezen", "Wijziging maken", "Controleren"];
</script>
<template>
  <div class="product-demo" :class="{ 'coder-demo': kind === 'coder' }">
    <div class="demo-toolbar">
      <span class="demo-dots"><i /><i /><i /></span
      ><span>{{
        kind === "coder"
          ? "AITJE Coder · lokale workflow"
          : "AITJE Assistent · je eigen kennis"
      }}</span
      ><AppIcon :name="kind === 'coder' ? 'terminal' : 'shield'" :size="16" />
    </div>
    <div v-if="kind === 'assistant'" class="demo-content">
      <div class="demo-tabs" aria-label="Kies een voorbeeld">
        <button
          v-for="(prompt, i) in prompts"
          :key="prompt"
          :aria-pressed="active === i"
          @click="active = i"
        >
          {{ prompt }}
        </button>
      </div>
      <div class="demo-chat" aria-live="polite">
        <div class="demo-question">{{ examples[active]!.question }}</div>
        <div class="demo-answer">
          <span class="demo-avatar"
            ><AppIcon name="sparkles" :size="18"
          /></span>
          <div>
            <strong>AITJE Assistent</strong>
            <p>{{ examples[active]!.answer }}</p>
            <span class="demo-source"
              ><AppIcon name="library" :size="13" />{{
                examples[active]!.source
              }}</span
            >
          </div>
        </div>
      </div>
    </div>
    <div v-else class="demo-content">
      <div class="demo-tabs" aria-label="Bekijk de stappen">
        <button
          v-for="(step, i) in steps"
          :key="step"
          :aria-pressed="active === i"
          @click="active = i"
        >
          0{{ i + 1 }} {{ step }}
        </button>
      </div>
      <div class="code-window" aria-live="polite">
        <p class="code-comment">// Voorbeeld van een lokale programmeertaak</p>
        <p>
          <span class="code-accent">opdracht</span> Voeg validatie toe aan het
          contactformulier.
        </p>
        <template v-if="active === 0"
          ><p class="code-comment">
            → Projectstructuur en bestaande code bekijken
          </p>
          <p>
            app/<br />
            └ components/<br />
            &nbsp; └ ContactForm.vue
          </p>
          <p class="code-accent">
            De bestaande velden en verzendlogica vormen de basis.
          </p></template
        ><template v-if="active === 1"
          ><p class="code-comment">→ Een gerichte wijziging voorbereiden</p>
          <pre><code>const isValid = computed(() =&gt;
  name.value.trim().length &gt; 0 &amp;&amp;
  email.value.includes('@')
)</code></pre></template
        ><template v-if="active === 2"
          ><p class="code-comment">
            → Controles uitvoeren en resultaat beoordelen
          </p>
          <p>
            ✓ Lege velden geven een melding<br />✓ Invoer blijft behouden<br />✓
            Verzenden na geldige invoer
          </p>
          <p class="code-accent">
            Jij beoordeelt de wijziging voordat je verdergaat.
          </p></template
        >
      </div>
    </div>
    <p class="demo-caption">
      Interactief voorbeeld ter uitleg · geen live AI of product-screenshot
    </p>
  </div>
</template>
