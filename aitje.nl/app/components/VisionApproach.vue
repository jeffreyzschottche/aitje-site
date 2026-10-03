<script setup lang="ts">
const selected = ref(0);
const routeButtons = ref<HTMLButtonElement[]>([]);
const options = [
  {
    name: "Eigen apparaat", icon: "cpu", title: "Dicht bij je werk.",
    short: "Je AI draait op een geschikte Mac of pc. Je vragen en documenten worden op je eigen apparaat verwerkt.",
    nodes: ["Jouw team", "Eigen apparaat", "Lokaal model"], icons: ["users", "cpu", "bot"],
    tags: ["Eigen hardware", "Lokale verwerking", "Passende capaciteit"],
    details: "Je kunt geschikte eigen hardware gebruiken of hardware via AITJE laten leveren. De capaciteit stemmen we af op jouw gebruik. De lokale kern werkt zonder internet, zolang het apparaat en de benodigde lokale verbindingen beschikbaar zijn.",
    note: "Online functies, downloads en externe diensten hebben internet nodig.",
  },
  {
    name: "Eigen server", icon: "server", title: "Eén plek voor je team.",
    short: "Een centrale AI-omgeving voor meerdere werkplekken. Op je eigen server of gekozen Nederlandse of Europese infrastructuur.",
    nodes: ["Werkplekken", "Eigen server", "AI + kennisbank"], icons: ["users", "server", "library"],
    tags: ["Centrale omgeving", "Eigen toegangsbeheer", "Ruimte voor je team"],
    details: "Accounts en toegang blijven in eigen beheer. De capaciteit hangt af van hoeveel mensen tegelijk werken. AITJE helpt je de server te kiezen, installeren en onderhouden. Serverhuur, netwerk en beheer zijn aparte kosten; een gehuurde server betaal je rechtstreeks aan de aanbieder.",
    note: "Ook een eigen server vraagt om netwerk, capaciteit en beheer.",
  },
  {
    name: "Een combinatie", icon: "plug", title: "Kiezen per taak.",
    short: "Lokaal waar het kan, een extern model waar het helpt. Je kiest bewust welke gegevens naar welke dienst gaan.",
    nodes: ["Jouw gegevens", "Lokale selectie", "Gekozen model"], icons: ["library", "code", "cpu"],
    tags: ["Gerichte context", "Bewuste modelkeuze", "Inzicht in kosten"],
    details: "Sommige taken vragen om een extern model. AITJE combineert dit met lokale stappen, selecteert relevante gegevens en kan anonimiseren waar dat bij de taak past. We maken de kosten en afhankelijkheden inzichtelijk. Externe modellen en online tools kunnen gebruikskosten en verwerking buiten je eigen omgeving meebrengen.",
    note: "Externe modellen kunnen extra kosten en externe dataverwerking meebrengen.",
  },
];
const current = computed(() => options[selected.value]!);
function navigateOptions(event: KeyboardEvent, index: number) {
  const next = event.key === "ArrowRight" ? (index + 1) % options.length
    : event.key === "ArrowLeft" ? (index + options.length - 1) % options.length
    : event.key === "Home" ? 0 : event.key === "End" ? options.length - 1 : undefined;
  if (next === undefined) return;
  event.preventDefault();
  selected.value = next;
  routeButtons.value[next]?.focus();
}
const roles = [
  { title: "Onderzoeken", short: "Wat past bij jouw werk?", icon: "scan", text: "We onderzoeken je vraag, de mogelijkheden en de beperkingen. Je ziet welke aanpak past en welke keuzes daarbij horen.", to: "/diensten/ai-scan", link: "Bekijk de AI-scan" },
  { title: "Bouwen", short: "Van idee naar toepassing.", icon: "code", text: "We brengen modellen, software en koppelingen samen. Met een bestaand product waar dat past, of een oplossing op maat voor jouw werk.", to: "/diensten/aitje-custom", link: "Bekijk AI op maat" },
  { title: "Inrichten", short: "Gebruiksklaar in jouw omgeving.", icon: "server", text: "We installeren de oplossing op passende hardware of een server, richten de toegang in en leggen uit hoe je ermee werkt.", to: "/diensten/installatie-en-inrichting", link: "Bekijk installatie en inrichting" },
  { title: "Beheren", short: "Bereikbaar na oplevering.", icon: "wrench", text: "Ook na de installatie kun je hulp, updates en onderhoud afspreken. We helpen je de omgeving bruikbaar te houden wanneer je werk of de techniek verandert.", to: "/diensten/ondersteuning-en-onderhoud", link: "Bekijk ondersteuning en onderhoud" },
];
</script>

<template>
  <div class="vision-approach">
    <section class="vision-setup" aria-labelledby="vision-setup-title">
      <div class="container-page">
        <div class="vision-section-heading">
          <p class="eyebrow text-brand-ink">Eigen beheer</p>
          <h2 id="vision-setup-title">Jouw AI. Jouw opstelling.</h2>
          <p>Grip op je data, kennis en techniek. De opstelling volgt jouw werk.</p>
        </div>
        <div class="vision-setup-grid">
          <figure class="vision-setup-art">
            <img src="/img/redesign/infrastructure-cutout.webp" alt="Eigen AI-apparaten tussen planten, mos en steen" width="1122" height="1122" loading="lazy" />
            <figcaption><AppIcon name="shield" :size="17" /> Toegang en controle in eigen beheer</figcaption>
          </figure>
          <div class="vision-setup-control">
            <div class="vision-setup-tabs" role="tablist" aria-label="Kies je AI-opstelling">
              <button
                v-for="(option, index) in options" :id="`vision-route-${index}`" :key="option.name"
                ref="routeButtons" type="button" role="tab" :aria-selected="selected === index"
                aria-controls="vision-route-panel" :tabindex="selected === index ? 0 : -1"
                :class="{ active: selected === index }" @click="selected = index" @keydown="navigateOptions($event, index)"
              ><AppIcon :name="option.icon" :size="18" />{{ option.name }}</button>
            </div>
            <div id="vision-route-panel" role="tabpanel" :aria-labelledby="`vision-route-${selected}`" tabindex="0" class="vision-route-panel">
              <h3>{{ current.title }}</h3>
              <p class="vision-route-short">{{ current.short }}</p>
              <ol class="vision-route-flow" aria-label="Zo loopt je vraag">
                <li v-for="(node, index) in current.nodes" :key="node">
                  <span class="vision-flow-icon" :class="{ 'is-model': index === 2 }"><AppIcon :name="current.icons[index]!" :size="25" /></span>
                  <span>{{ node }}</span>
                  <AppIcon v-if="index < 2" class="vision-flow-arrow" name="arrow-right" :size="18" aria-hidden="true" />
                </li>
              </ol>
              <ul class="vision-route-tags" aria-label="Kenmerken"><li v-for="tag in current.tags" :key="tag"><AppIcon name="check" :size="14" />{{ tag }}</li></ul>
              <details :key="selected" class="vision-details">
                <summary>Praktische details <AppIcon name="plus" :size="17" /></summary>
                <p>{{ current.details }}</p>
              </details>
              <p class="vision-route-note">{{ current.note }}</p>
            </div>
          </div>
        </div>
        <details class="vision-details vision-own-management">
          <summary>Wat bedoelen we met eigen beheer? <AppIcon name="plus" :size="17" /></summary>
          <p>Eigen beheer betekent dat je toegang en controle houdt over de kennis, functionaliteit, data en infrastructuur waarop je vertrouwt. Dat kan op verschillende manieren. Eigen beheer is het doel, niet één techniek. AITJE is niet tegen cloud of externe modellen: de taak bepaalt de oplossing.</p>
        </details>
      </div>
    </section>

    <section class="vision-models" aria-labelledby="vision-models-title">
      <div class="container-page vision-models-grid">
        <div class="vision-model-copy">
          <p class="eyebrow text-brand-ink">Modellen & workflows</p>
          <h2 id="vision-models-title">De taak bepaalt het model.</h2>
          <div class="vision-principle">
            <AppIcon name="box" :size="24" />
            <div><h3>Open source als basis.</h3><p>Vrijheid om aan te passen en zelf te beheren. Een extern model blijft een bewuste optie.</p>
              <details class="vision-details"><summary>Waarom open source? <AppIcon name="plus" :size="16" /></summary><p>Open-source technologie is vaak beter in eigen beheer te houden, schaalbaar zonder kosten per gebruiker en aanpasbaar aan je werk. Het is een sterke voorkeur, geen dogma: een gesloten of extern model mag, wanneer het voor een taak aantoonbaar meer waarde levert.</p></details>
            </div>
          </div>
          <div class="vision-principle">
            <AppIcon name="workflow" :size="24" />
            <div><h3>Klein waar het kan.</h3><p>Code doet het vaste werk. AI krijgt de juiste informatie voor één gerichte taak.</p>
              <details class="vision-details"><summary>Hoe werkt dat? <AppIcon name="plus" :size="16" /></summary><p>Niet elke taak heeft het duurste AI-model nodig. Een goed ingerichte workflow verdeelt een taak in stappen, gebruikt eigen kennis en laat een kleiner model betrouwbaar werken. Lokaal kost iedere extra poging geen externe tokens; hardware, stroom en beheer blijven wel kosten.</p><NuxtLink to="/kenniscentrum/wat-is-een-workflow">Lees over workflows <AppIcon name="arrow-up-right" :size="16" /></NuxtLink></details>
            </div>
          </div>
        </div>
        <div class="vision-model-visual">
          <img src="/img/redesign/token-management-cutout.webp" alt="Een lokale server en klein apparaat verbonden met gerichte gegevensstromen tussen natuur en technologie" width="1280" height="1280" loading="lazy" />
          <ol class="vision-model-flow" aria-label="Een gerichte AI-workflow">
            <li><AppIcon name="code" :size="22" /><strong>Code</strong><span>Haalt data op</span></li>
            <li><AppIcon name="cpu" :size="22" /><strong>Passend model</strong><span>Doet de AI-taak</span></li>
            <li><AppIcon name="check" :size="22" /><strong>Controle</strong><span>Toetst het resultaat</span></li>
          </ol>
          <NuxtLink to="/diensten/token-management-en-optimalisatie" class="vision-model-link">Token management & optimalisatie <AppIcon name="arrow-up-right" :size="18" /></NuxtLink>
          <details class="vision-details vision-model-details"><summary>Grip op je model-API’s <AppIcon name="plus" :size="16" /></summary><p>Modelkeuze, API-calls en workflows slimmer inrichten. Minder onnodige tokens, met kwaliteit en kosten per eindresultaat in beeld. Frontier, lokaal of op een edge-apparaat: de taak bepaalt het model. Code doet het vaste werk; AI krijgt gerichte context.</p></details>
        </div>
      </div>
    </section>

    <section class="vision-partner" aria-labelledby="vision-partner-title">
      <div class="container-page">
        <div class="vision-partner-grid">
          <div class="vision-partner-intro">
            <p class="eyebrow text-brand-ink">De rol van AITJE</p>
            <h2 id="vision-partner-title">Jij kiest. Wij regelen.</h2>
            <p>Van de eerste vraag tot een werkende omgeving. Met hulp wanneer je die nodig hebt.</p>
            <img src="/img/redesign/about-cutout.webp" alt="Een uil en een kraai samen bij het AITJE-ei, tussen varens en mos" width="1024" height="1024" loading="lazy" />
          </div>
          <div class="vision-partner-steps">
            <details v-for="(role, index) in roles" :key="role.title" class="vision-role">
              <summary><span class="vision-role-number">0{{ index + 1 }}</span><span class="vision-role-icon"><AppIcon :name="role.icon" :size="23" /></span><span class="vision-role-copy"><strong>{{ role.title }}</strong><span>{{ role.short }}</span></span><AppIcon name="plus" :size="18" /></summary>
              <div class="vision-role-detail"><p>{{ role.text }}</p><NuxtLink :to="role.to">{{ role.link }} <AppIcon name="arrow-up-right" :size="16" /></NuxtLink></div>
            </details>
            <details class="vision-details vision-partner-details"><summary>Waarom één AI-partner? <AppIcon name="plus" :size="16" /></summary><p>Voor computers was er de systeembeheerder, voor internet het webbureau. AITJE combineert die rollen voor AI: onderzoeken wat past, het bouwen en installeren, en bereikbaar blijven. Adviseur, bouwer, installateur en beheerder in één.</p></details>
          </div>
        </div>
        <div class="vision-human">
          <span class="vision-human-icon"><AppIcon name="users" :size="25" /></span>
          <div><p class="eyebrow text-brand-ink">Mens aan het stuur</p><h3>Jij bepaalt wat AI doet.</h3><p>Wij maken de mogelijkheden, grenzen en gevolgen duidelijk. De keuzes blijven bij jou.</p>
            <details class="vision-details"><summary>Mens en automatisering <AppIcon name="plus" :size="16" /></summary><p>AITJE legt mogelijkheden, beperkingen en gevolgen uit en ontwerpt een oplossing die verantwoord werkt. De beslissing over hoe AI het werk van mensen verandert, blijft bij jou.</p></details>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<style scoped>
.vision-approach h2, .vision-approach h3, .vision-role-copy strong { font-family: var(--font-heading); }
.vision-approach h2 { font-size: clamp(1.9rem, 3.1vw, 2.75rem); line-height: 1.12; letter-spacing: -0.04em; font-weight: 650; text-wrap: balance; }
.vision-approach .eyebrow { font-size: 11px; }
.vision-setup { padding-block: 72px 56px; }
.vision-section-heading { max-width: 680px; }
.vision-section-heading h2 { margin-top: 14px; }
.vision-section-heading > p:last-child { margin-top: 16px; font-size: 17px; line-height: 1.6; color: var(--color-muted); }
.vision-setup-grid { display: grid; grid-template-columns: 0.9fr 1.2fr; align-items: center; gap: 60px; margin-top: 24px; }
.vision-setup-art { position: relative; margin: 0; padding-bottom: 12px; }
.vision-setup-art img { width: 100%; max-height: 390px; object-fit: contain; display: block; }
.vision-setup-art figcaption { display: flex; gap: 8px; justify-content: center; align-items: center; font-size: 12px; color: var(--color-muted); }
.vision-setup-art figcaption svg { color: var(--color-brand-ink); }
.vision-setup-tabs { display: flex; gap: 6px; padding-bottom: 16px; border-bottom: 1px solid var(--color-line); }
.vision-setup-tabs button { display: flex; align-items: center; justify-content: center; gap: 7px; flex: 1; padding: 11px 8px; border-radius: 999px; font-size: 13px; font-weight: 600; border: 1px solid transparent; transition: background-color 150ms; }
.vision-setup-tabs button:hover { background: var(--color-sand); }
.vision-setup-tabs button.active { background: #facc15; color: #111; }
.vision-setup-tabs button:focus-visible, .vision-route-panel:focus-visible, .vision-approach summary:focus-visible { outline: 2px solid var(--color-ink); outline-offset: 4px; }
.vision-route-panel { padding-top: 24px; }
.vision-route-panel h3 { font-size: 25px; font-weight: 600; letter-spacing: -0.035em; }
.vision-route-short { font-size: 16px; line-height: 1.65; color: var(--color-muted); margin-top: 10px; max-width: 520px; min-height: 80px; }
.vision-route-flow { display: grid; grid-template-columns: repeat(3, minmax(0, 1fr)); margin-block: 20px; }
.vision-route-flow li { display: flex; flex-direction: column; align-items: center; gap: 10px; position: relative; font-size: 12px; font-weight: 600; text-align: center; }
.vision-flow-icon { display: grid; place-items: center; width: 58px; height: 58px; border: 1px solid var(--color-line); border-radius: 16px; background: #fff; }
.vision-flow-icon.is-model { background: #facc15; border-color: #facc15; }
.vision-flow-arrow { position: absolute; right: -9px; top: 20px; color: var(--color-muted); }
.vision-route-tags { display: flex; flex-wrap: wrap; gap: 8px 16px; margin-block: 20px; font-size: 12px; color: var(--color-muted); }
.vision-route-tags li { display: flex; gap: 5px; align-items: center; }
.vision-route-tags svg { color: var(--color-brand-ink); }
.vision-details { font-size: 13px; }
.vision-details summary { display: flex; align-items: center; gap: 10px; width: fit-content; cursor: pointer; list-style: none; font-weight: 600; padding-block: 8px; }
.vision-approach summary::-webkit-details-marker { display: none; }
.vision-details[open] > summary > svg, .vision-role[open] > summary > svg { transform: rotate(45deg); }
.vision-details > p { max-width: 700px; margin-block: 8px 16px; line-height: 1.75; color: var(--color-muted); font-size: 14px; }
.vision-details a, .vision-role-detail a { display: inline-flex; align-items: center; gap: 6px; font-size: 13px; font-weight: 600; text-decoration: underline; text-decoration-color: #facc15; text-underline-offset: 4px; }
.vision-route-note { font-size: 11px; line-height: 1.6; color: var(--color-muted); margin-top: 8px; }
.vision-own-management { margin-top: 20px; padding-top: 12px; border-top: 1px solid var(--color-line); }
.vision-models { background: var(--color-sand); padding-block: 56px; }
.vision-models-grid { display: grid; grid-template-columns: 1fr 1fr; gap: 80px; align-items: center; }
.vision-model-copy h2 { max-width: 400px; margin-top: 14px; }
.vision-principle { display: flex; align-items: flex-start; gap: 16px; margin-top: 30px; }
.vision-principle > svg { flex-shrink: 0; margin-top: 3px; color: var(--color-brand-ink); }
.vision-principle h3 { font-size: 19px; font-weight: 600; letter-spacing: -0.025em; }
.vision-principle > div > p { max-width: 390px; margin-top: 8px; font-size: 15px; line-height: 1.6; color: var(--color-muted); }
.vision-principle .vision-details { margin-top: 6px; }
.vision-model-visual > img { display: block; margin-inline: auto; width: 100%; max-height: 310px; object-fit: contain; }
.vision-model-flow { display: grid; grid-template-columns: repeat(3, minmax(0, 1fr)); padding: 18px 12px; background: #fff; border: 1px solid var(--color-line); border-radius: 18px; }
.vision-model-flow li { display: flex; flex-direction: column; align-items: center; gap: 6px; text-align: center; position: relative; }
.vision-model-flow li:not(:last-child)::after { content: "→"; position: absolute; top: 8px; right: -7px; color: var(--color-brand-ink); }
.vision-model-flow svg { color: var(--color-brand-ink); }
.vision-model-flow strong { font-size: 13px; font-weight: 600; }
.vision-model-flow span { font-size: 11px; color: var(--color-muted); }
.vision-model-link { display: flex; align-items: center; justify-content: center; gap: 8px; font-size: 13px; font-weight: 600; margin-top: 18px; text-decoration: underline; text-decoration-color: #facc15; text-underline-offset: 4px; }
.vision-model-details { margin-top: 6px; }
.vision-model-details > summary { margin-inline: auto; font-weight: 400; color: var(--color-muted); }
.vision-partner { padding-block: 64px; }
.vision-partner-grid { display: grid; grid-template-columns: 1fr 1fr; gap: 80px; align-items: center; }
.vision-partner-intro h2 { margin-top: 14px; }
.vision-partner-intro > p:last-of-type { margin-top: 14px; max-width: 390px; font-size: 16px; line-height: 1.65; color: var(--color-muted); }
.vision-partner-intro > img { display: block; width: 100%; max-width: 330px; max-height: 290px; object-fit: contain; margin-top: 12px; }
.vision-role { border-top: 1px solid var(--color-line); }
.vision-role:last-of-type { border-bottom: 1px solid var(--color-line); }
.vision-role summary { display: flex; align-items: center; gap: 16px; padding-block: 22px; cursor: pointer; list-style: none; }
.vision-role-number { font: 400 12px var(--font-mono); color: var(--color-muted); }
.vision-role-icon { display: grid; place-items: center; width: 44px; height: 44px; flex-shrink: 0; background: #facc15; border-radius: 14px; }
.vision-role-copy { display: flex; flex-direction: column; gap: 5px; flex: 1; min-width: 0; }
.vision-role-copy strong { font-size: 20px; font-weight: 600; letter-spacing: -0.025em; }
.vision-role-copy > span { font-size: 13px; color: var(--color-muted); }
.vision-role summary > svg { flex-shrink: 0; }
.vision-role-detail { padding: 0 0 22px 102px; }
.vision-role-detail p { margin-bottom: 14px; font-size: 14px; line-height: 1.7; color: var(--color-muted); }
.vision-partner-details { margin-top: 12px; }
.vision-human { display: flex; align-items: flex-start; gap: 20px; margin-top: 28px; padding: 24px 0 0; border-top: 1px solid var(--color-line); }
.vision-human-icon { display: grid; place-items: center; flex-shrink: 0; width: 52px; height: 52px; border-radius: 50%; background: #facc15; }
.vision-human h3 { margin-top: 6px; font-size: 24px; font-weight: 600; letter-spacing: -0.025em; }
.vision-human div > p:not(.eyebrow) { margin-top: 8px; font-size: 15px; line-height: 1.65; color: var(--color-muted); }
.vision-human .vision-details { margin-top: 5px; }
@media (max-width: 1023px) {
  .vision-setup-grid { gap: 28px; grid-template-columns: 0.8fr 1.2fr; }
  .vision-models-grid, .vision-partner-grid { gap: 36px; }
  .vision-setup-tabs button { flex-direction: column; font-size: 12px; }
  .vision-route-short { min-height: 104px; }
  .vision-role summary { gap: 12px; }
  .vision-role-detail { padding-left: 90px; }
}
@media (max-width: 767px) {
  .vision-setup, .vision-partner { padding-block: 44px; }
  .vision-models { padding-block: 40px; }
  .vision-setup-grid, .vision-models-grid, .vision-partner-grid { grid-template-columns: 1fr; gap: 24px; }
  .vision-setup-art img { max-height: 240px; }
  .vision-setup-tabs button { padding-inline: 5px; }
  .vision-route-panel { padding-top: 20px; }
  .vision-route-short { min-height: 104px; }
  .vision-route-tags { gap: 8px 12px; }
  .vision-route-flow { margin-block: 18px; }
  .vision-setup-art figcaption { font-size: 11px; }
  .vision-model-copy h2 { max-width: 320px; }
  .vision-principle { margin-top: 24px; gap: 12px; }
  .vision-model-visual > img { max-height: 270px; }
  .vision-partner-intro > img { max-width: 230px; max-height: 200px; margin-inline: auto; }
  .vision-role summary { gap: 12px; padding-block: 18px; }
  .vision-role-number { font-size: 10px; }
  .vision-role-copy strong { font-size: 19px; }
  .vision-role-copy > span { font-size: 12px; }
  .vision-role-detail { padding-left: 0; }
  .vision-human { gap: 14px; }
  .vision-human-icon { width: 42px; height: 42px; }
  .vision-human h3 { font-size: 21px; }
}
</style>
