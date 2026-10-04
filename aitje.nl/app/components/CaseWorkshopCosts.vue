<script setup lang="ts">
import type { WorkshopVoiceStory } from "@/content/types";
const props = defineProps<{ costs: WorkshopVoiceStory["costs"] }>();
const cars = ref(6);
const calls = ref(30);
const days = ref(22);
const seconds = ref(15);
const inputTokens = ref(2000);
const outputTokens = ref(400);
const tools = ref(2);
const exchange = ref(0.90);
const power = ref(50);
const tabletPower = ref(5);
const idlePower = ref(5);
const tabletIdlePower = ref(1);
const electricity = ref(0.30);
const selectedModel = ref(1);
const positive = (value: number) => Math.max(0, Number(value) || 0);
const perDay = computed(() => 6 * positive(cars.value) * positive(calls.value));
const monthlyCalls = computed(() => perDay.value * positive(days.value));
const minutes = computed(() => monthlyCalls.value * positive(seconds.value) / 60);
const whisperUsd = computed(() => minutes.value * props.costs.whisperMinuteUsd);
const activeHours = computed(() => Math.min(720, positive(days.value) * 8));
const idleHours = computed(() => 720 - activeHours.value);
const boxKwh = computed(() => (activeHours.value * positive(power.value) + idleHours.value * positive(idlePower.value)) / 1000);
const tabletsKwh = computed(() => 6 * (activeHours.value * positive(tabletPower.value) + idleHours.value * positive(tabletIdlePower.value)) / 1000);
const boxCost = computed(() => boxKwh.value * positive(electricity.value));
const tabletCost = computed(() => tabletsKwh.value * positive(electricity.value));
const rows = computed(() => props.costs.models.map(model => {
  const textUsd = monthlyCalls.value * (positive(inputTokens.value) * model.inputUsd + positive(outputTokens.value) * model.outputUsd) / 1e6;
  const apiEur = (textUsd + whisperUsd.value) * positive(exchange.value);
  return { ...model, textUsd, apiEur, saving: apiEur - boxCost.value };
}));
const selected = computed(() => rows.value[selectedModel.value]!);
const euro = (value: number) => new Intl.NumberFormat("nl-NL", { style: "currency", currency: "EUR" }).format(value);
const usd = (value: number) => new Intl.NumberFormat("nl-NL", { style: "currency", currency: "USD" }).format(value);
const number = (value: number) => new Intl.NumberFormat("nl-NL", { maximumFractionDigits: 1 }).format(value);
const payback = computed(() => selected.value.saving > 0 ? `${number(props.costs.hardwareEur / selected.value.saving)} maanden` : "Geen terugverdientijd");
</script>

<template>
  <section class="section-space bob-costs">
    <div class="container-page">
      <div class="cost-heading">
        <div><p class="eyebrow text-brand-ink">Eigen hardware. Geen externe AI-meter.</p><h2 class="section-title mt-4">Wat kost een gesprek met Bob?</h2></div>
        <div class="hardware-price"><span>Eenmalige hardware</span><strong>{{ euro(costs.hardwareEur) }}</strong></div>
      </div>
      <p class="cost-intro">Whisper draait op de BOSGAME M6. Spraak en acties worden lokaal verwerkt, zonder externe kosten per audiominuut of AI-token. Een opdracht via het eigen netwerk heeft dus geen OpenAI-prijs. De koppelingen met garagesoftware en technische databanken blijven onderdeel van de oplossing.</p>
      <p class="cost-intro"><strong>De hardware kostte eenmalig {{ euro(costs.hardwareEur) }}. De externe AI-kosten zijn €0.</strong><br />Voor de BOSGAME en alle zes tablets samen komt de stroom in dit rekenvoorbeeld op {{ euro(boxCost + tabletCost) }} per maand. Dit zijn hardware- en gebruikskosten; ontwikkeling, onderhoud en softwarelicenties vallen hier buiten.</p>

      <div class="cost-table-wrap"><table class="cost-table"><caption>Geschatte maandkosten bij dit gebruik · Whisper-transcriptie + tekstmodel voor acties</caption><thead><tr><th scope="col">Oplossing</th><th scope="col">Input / 1M</th><th scope="col">Output / 1M</th><th scope="col">Spraak / maand</th><th scope="col">Tekstmodel / maand</th><th scope="col">AI-totaal / maand</th></tr></thead><tbody><tr class="local-row"><th scope="row">Whisper + lokale verwerking</th><td>$0</td><td>$0</td><td>$0</td><td>$0</td><td>€0 + stroom</td></tr><tr v-for="row in rows" :key="row.name"><th scope="row">Whisper API + {{ row.name }}</th><td>{{ usd(row.inputUsd) }}</td><td>{{ usd(row.outputUsd) }}</td><td>{{ usd(whisperUsd) }}</td><td>{{ usd(row.textUsd) }}</td><td>{{ euro(row.apiEur) }}</td></tr></tbody></table></div>

      <div class="cost-calculator">
        <div class="cost-controls">
          <div class="scenario-label"><AppIcon name="gauge" :size="20" /><strong>Rekenvoorbeeld · pas het gebruik aan</strong></div>
          <p>Zes monteurs, 5–8 auto’s per monteur per dag en 15–40 opdrachten per auto. Dat is ongeveer <strong>450–1.920 opdrachten per dag</strong>. De auto’s zijn hier per monteur gerekend; dit is een gebruiksschatting, geen uitlezing van de logs.</p>
          <div class="cost-sliders">
            <label for="bob-cars">Auto’s per monteur per dag <strong>{{ cars }}</strong><input id="bob-cars" v-model.number="cars" type="range" min="5" max="8" step="1" /></label>
            <label for="bob-calls">Opdrachten per auto <strong>{{ calls }}</strong><input id="bob-calls" v-model.number="calls" type="range" min="15" max="40" step="1" /></label>
          </div>
          <dl class="cost-volume"><div><dt>Opdrachten per maand</dt><dd>{{ number(monthlyCalls) }}</dd></div><div><dt>Audiominuten per maand</dt><dd>{{ number(minutes) }}</dd></div><div><dt>Lokale toolcalls per maand</dt><dd>{{ number(monthlyCalls * positive(tools)) }}</dd></div></dl>
          <details class="cost-assumptions">
            <summary>Gespreksduur, tokens & stroom aanpassen</summary>
            <p>Alle waarden hieronder zijn aannames. Audiotijd is de totale ingestuurde opname per opdracht, inclusief vervolgvragen. Tokens omvatten alle modelbeurten, context en toolresultaten bij elkaar.</p>
            <div class="cost-fields">
              <label>Werkdagen / maand<input v-model.number="days" type="number" min="0" max="30" /></label>
              <label>Audioseconden / opdracht<input v-model.number="seconds" type="number" min="0" /></label>
              <label>Inputtokens / opdracht<input v-model.number="inputTokens" type="number" min="0" step="100" /></label>
              <label>Outputtokens / opdracht<input v-model.number="outputTokens" type="number" min="0" step="100" /></label>
              <label>Toolcalls / opdracht<input v-model.number="tools" type="number" min="0" /></label>
              <label>Euro per dollar (aanname)<input v-model.number="exchange" type="number" min="0" step="0.01" /></label>
              <label>BOSGAME actief · watt<input v-model.number="power" type="number" min="0" /></label>
              <label>BOSGAME in rust · watt<input v-model.number="idlePower" type="number" min="0" /></label>
              <label>Per tablet actief · watt<input v-model.number="tabletPower" type="number" min="0" /></label>
              <label>Per tablet in rust · watt<input v-model.number="tabletIdlePower" type="number" min="0" /></label>
              <label>Stroom · euro / kWh<input v-model.number="electricity" type="number" min="0" step="0.01" /></label>
            </div>
          </details>
        </div>

        <div class="cost-outcome">
          <label for="bob-model">Vergelijk met Whisper API +</label><select id="bob-model" v-model.number="selectedModel"><option v-for="(model, index) in costs.models" :key="model.name" :value="index">{{ model.name }}</option></select>
          <span class="outcome-label">{{ selected.saving >= 0 ? 'Minder terugkerende rekenkosten' : 'Meer terugkerende rekenkosten' }}</span>
          <strong class="outcome-amount" data-bob-saving>{{ euro(Math.abs(selected.saving)) }}<small>/ maand</small></strong>
          <p>In dit rekenvoorbeeld, na aftrek van de stroom voor de BOSGAME.</p>
          <dl><div><dt>Cloud: AI + stroom tablets</dt><dd>{{ euro(selected.apiEur + tabletCost) }}</dd></div><div><dt>Lokaal: stroom hele opstelling</dt><dd>{{ euro(boxCost + tabletCost) }}</dd></div><div><dt>Verschil per jaar</dt><dd>{{ euro(selected.saving * 12) }}</dd></div><div><dt>Hardware terugverdiend na</dt><dd>{{ payback }}</dd></div></dl>
          <p class="outcome-footnote">De volledige €2.000 hardware wordt afgezet tegen het maandelijkse verschil in rekenkosten. Ontwikkeling, onderhoud en bestaande softwarelicenties zijn hierin niet meegenomen.</p>
        </div>
      </div>

      <div class="cost-notes">
        <div><AppIcon name="cpu" :size="22" /><h3>Een compacte lokale computer</h3><p>De gelinkte BOSGAME M6 heeft een Ryzen AI 9 HX370, Radeon 890M, 32 GB DDR5 en 1 TB SSD. Voor de CPU noemt BOSGAME 45–65 W TDP. Dat is geen gemeten verbruik van de hele computer. De berekening gebruikt {{ power }} W actief en {{ idlePower }} W in rust, met acht actieve uren per werkdag en een maand van dertig dagen.</p><p>De zes tablets komen samen op {{ number(tabletsKwh) }} kWh per maand; de BOSGAME op {{ number(boxKwh) }} kWh. Tabletstroom telt aan beide kanten mee.</p><a href="https://www.bosgamepc.com/products/bosgame-m6-hx370-ai-pc-radeon-890m-32gb-ddr5-1tb-pcie-4.0-ssd-mini-pc" target="_blank" rel="noopener noreferrer">BOSGAME-specificaties ↗</a></div>
        <div><AppIcon name="workflow" :size="22" /><h3>Veel acties, gerichte koppelingen</h3><p>{{ number(perDay) }} opdrachten per dag, met in dit voorbeeld {{ tools }} lokale toolcalls per opdracht. Die toolcalls hebben geen OpenAI-tokenprijs. Abonnementen of kosten bij Haynes, Autodata en andere gekoppelde leveranciers vallen daar buiten.</p><p>De cloudvergelijking gebruikt standaardtarieven, zonder caching of batchkorting. Gesproken antwoorden via een betaalde spraakgenerator, belastingen en eventuele extra diensten zijn niet inbegrepen. Het precieze lokale Whisper-formaat en actie-model zijn hier niet gespecificeerd; dit is een kostenvergelijking, geen test van gelijke modelkwaliteit.</p><p class="cost-sources">Tarieven gecontroleerd op 4 oktober 2026: <a href="https://developers.openai.com/api/docs/models/whisper-1" target="_blank" rel="noopener noreferrer">Whisper · $0,006 per minuut</a> en <a href="https://developers.openai.com/api/docs/pricing" target="_blank" rel="noopener noreferrer">OpenAI-modeltarieven</a>.</p></div>
      </div>
    </div>
  </section>
</template>

<style scoped>
.bob-costs{background:#eef1e8}.cost-heading{display:flex;align-items:center;justify-content:space-between;gap:2rem}.hardware-price{flex:none;border-left:1px solid #c8cdbc;padding-left:2rem}.hardware-price span{display:block;font-size:.8rem;color:var(--color-muted)}.hardware-price strong{display:block;font:600 2rem var(--font-heading);margin-top:.5rem}.cost-intro{max-width:850px;margin-top:1.5rem;font-size:1rem;line-height:1.8;color:var(--color-muted)}.cost-calculator{display:grid;grid-template-columns:minmax(0,1.3fr) minmax(0,1fr);margin-top:2.5rem;border-radius:24px;overflow:hidden;border:1px solid #d2d8c9}.cost-controls{padding:2rem;background:white}.scenario-label{display:flex;gap:.75rem;align-items:center;font-size:.95rem}.scenario-label svg{flex:none}.cost-controls>p,.cost-assumptions>p{font-size:.83rem;line-height:1.8;color:var(--color-muted);margin-top:1rem}.cost-sliders{display:grid;gap:1.5rem;margin-block:2rem}.cost-sliders label{display:block;font-size:.85rem}.cost-sliders strong{float:right}.cost-sliders input{display:block;width:100%;margin-top:1rem;accent-color:#d9af00;cursor:pointer}.cost-volume{display:grid;grid-template-columns:repeat(3,minmax(0,1fr));gap:1rem;border-top:1px solid var(--color-line);padding-top:1.25rem}.cost-volume dt{font-size:.65rem;line-height:1.5;color:var(--color-muted)}.cost-volume dd{font:600 1.3rem var(--font-heading);margin-top:.5rem}.cost-assumptions{margin-top:1.5rem;border-top:1px solid var(--color-line);padding-top:1.25rem}.cost-assumptions summary{cursor:pointer;font-size:.8rem;font-weight:600}.cost-fields{display:grid;grid-template-columns:1fr 1fr;gap:1rem;margin-top:1rem}.cost-fields label{font-size:.7rem;line-height:1.6}.cost-fields input{display:block;width:100%;background:#f7f8f4;border:1px solid #d7dbd1;border-radius:8px;padding:.6rem;margin-top:.3rem;font-size:.9rem}.cost-outcome{padding:2rem;background:#17392e;color:white}.cost-outcome>label{font-size:.75rem;color:#d6e0d6}.cost-outcome select{display:block;width:100%;background:#284c3e;color:white;border:1px solid #597260;border-radius:10px;padding:.75rem;margin-top:.5rem;font-size:1rem}.outcome-label{display:block;color:#d6e0d6;font-size:.8rem;margin-top:2rem}.outcome-amount{display:block;font:600 clamp(2rem,4vw,3.3rem) var(--font-heading);letter-spacing:-.05em;color:var(--color-brand);margin-top:.75rem}.outcome-amount small{font-size:.8rem;font-weight:400;letter-spacing:0;margin-left:.5rem}.cost-outcome>p{font-size:.8rem;line-height:1.7;color:#d6e0d6;margin-top:.7rem}.cost-outcome dl{margin-top:1.5rem}.cost-outcome dl>div{display:flex;justify-content:space-between;gap:1rem;padding-block:.8rem;border-bottom:1px solid #466354;font-size:.78rem}.cost-outcome dd{text-align:right;font-weight:600}.cost-outcome .outcome-footnote{font-size:.7rem;margin-top:1rem}.cost-table-wrap{overflow-x:auto;margin-top:2rem;border-radius:14px;background:white;border:1px solid #d2d8c9}.cost-table{width:100%;min-width:780px;text-align:left;font-size:.8rem}.cost-table caption{text-align:left;padding:1.25rem;font-weight:600;font-size:.9rem}.cost-table th,.cost-table td{padding:1rem;border-top:1px solid #e6e9e0;white-space:nowrap}.cost-table thead th{font-size:.7rem;color:var(--color-muted)}.cost-table tbody th{font-weight:600}.local-row{background:#fff5c2}.cost-notes{display:grid;grid-template-columns:minmax(0,1fr) minmax(0,1fr);gap:3rem;margin-top:2.5rem}.cost-notes h3{font:600 1rem var(--font-heading);margin-top:.8rem}.cost-notes p{font-size:.8rem;line-height:1.8;color:var(--color-muted);margin-top:.8rem}.cost-notes a{display:inline;font-size:.75rem;text-decoration:underline;text-underline-offset:3px}.cost-notes>div>a{display:inline-block;margin-top:.8rem}input:focus-visible,select:focus-visible,summary:focus-visible{outline:2px solid #bc9900;outline-offset:4px}@media(max-width:1023px){.cost-calculator{grid-template-columns:1fr}.cost-heading{align-items:flex-start}.cost-notes{gap:2rem}}@media(max-width:640px){.cost-heading{display:block}.hardware-price{border-left:0;padding-left:0;margin-top:1.5rem}.cost-controls,.cost-outcome{padding:1.25rem}.cost-volume{gap:.5rem}.cost-volume dd{font-size:1.1rem}.cost-notes{grid-template-columns:1fr}.cost-fields{gap:.75rem}.cost-sliders label{font-size:.8rem}}
</style>
