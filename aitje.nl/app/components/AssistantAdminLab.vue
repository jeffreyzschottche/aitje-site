<script setup lang="ts">
const { numberLocale } = useSiteLanguage();
const tab = ref("budget");
const roleIndex = ref(1);
const period = ref<"day" | "week" | "month" | "year">("month");
const external = ref(true);
const reasoning = ref(false);
const web = ref(false);
const hr = ref(false);
const personal = ref(false);
const personalAmount = ref(15);
const consumption = ref(74);
const tokenConsumption = ref(64);
const onLimit = ref("fallback");
const policies = reactive({
  day: { eur: 5, tokens: 50000 },
  week: { eur: 15, tokens: 250000 },
  month: { eur: 25, tokens: 1000000 },
  year: { eur: 250, tokens: 10000000 },
});
const periods = [
  { key: "day", name: "Dag" },
  { key: "week", name: "Week" },
  { key: "month", name: "Maand" },
  { key: "year", name: "Jaar" },
] as const;
const profiles = [
  {
    name: "Medewerker",
    eur: 0,
    tokens: 25000,
    external: false,
    reasoning: false,
    web: false,
    hr: false,
  },
  {
    name: "Klantenservice",
    eur: 25,
    tokens: 50000,
    external: true,
    reasoning: false,
    web: false,
    hr: false,
  },
  {
    name: "Analist",
    eur: 75,
    tokens: 150000,
    external: true,
    reasoning: true,
    web: true,
    hr: false,
  },
];
function chooseRole(i: number) {
  const r = profiles[i]!;
  roleIndex.value = i;
  policies.month.eur = r.eur;
  policies.day.tokens = r.tokens;
  external.value = r.external;
  reasoning.value = r.reasoning;
  web.value = r.web;
  hr.value = r.hr;
  personal.value = false;
}
const tabs = [
  {
    key: "budget",
    name: "Prijs- & tokencaps",
    icon: "gauge",
    scene: "admin-budget",
  },
  { key: "models", name: "Modeltoegang", icon: "cpu", scene: "admin-modellen" },
  {
    key: "knowledge",
    name: "Kennis & rollen",
    icon: "shield",
    scene: "categoriebeheer",
  },
  {
    key: "usage",
    name: "Inzicht & uitzonderingen",
    icon: "layout",
    scene: "admin-verbruik",
  },
];
const active = computed(() => tabs.find((t) => t.key === tab.value)!);
const money = (n: number) =>
  new Intl.NumberFormat(numberLocale.value, {
    style: "currency",
    currency: "EUR",
    maximumFractionDigits: 2,
  }).format(n);
const count = (n: number) =>
  new Intl.NumberFormat(numberLocale.value).format(n);
const cap = computed(() =>
  personal.value
    ? Math.max(0, Number(personalAmount.value) || 0)
    : Math.max(0, Number(policies[period.value].eur) || 0),
);
const spent = computed(() => (cap.value * consumption.value) / 100);
const reached = computed(() => consumption.value >= 100 || cap.value === 0);
const tokenReached = computed(
  () =>
    !personal.value &&
    (tokenConsumption.value >= 100 ||
      Number(policies[period.value].tokens) === 0),
);
const message = computed(() =>
  tokenReached.value
    ? "De tokengrens van deze gebruiker is bereikt. Nieuwe generatie wordt geblokkeerd, ook bij een lokaal model. Een lokale terugval omzeilt deze grens niet."
    : !external.value
      ? "Externe modellen staan uit voor deze voorbeeldrol. De gebruiker kiest uit de toegestane lokale modellen."
      : !reached.value
        ? "Het externe model kan worden gebruikt binnen de toegestane modellen en alle actieve budgetgrenzen."
        : onLimit.value === "fallback"
          ? "De externe eurogrens is bereikt. Terugvallen op een toegestaan lokaal model kan, zolang de tokenlimiet nog ruimte laat."
          : "De externe eurogrens is bereikt. Nieuwe externe generatie wordt geblokkeerd volgens de gekozen instelling.",
);
</script>
<template>
  <div class="admin-lab">
    <div class="ad-tabs" role="group" aria-label="Verken het beheer">
      <button
        v-for="item in tabs"
        :key="item.key"
        type="button"
        :aria-pressed="tab === item.key"
        aria-controls="ad-detail"
        @click="tab = item.key"
      >
        <AppIcon :name="item.icon" :size="20" />{{ item.name }}
      </button>
    </div>
    <div id="ad-detail" class="ad-grid">
      <div class="ad-panel">
        <div class="ad-panel-header">
          <span class="ad-label">Interactief beheervoorbeeld</span
          ><span class="ad-demo-tag">Fictieve instellingen</span>
        </div>
        <h3>Wat mag deze medewerker?</h3>
        <div class="ad-roles" role="group" aria-label="Kies een voorbeeldrol">
          <button
            v-for="(r, i) in profiles"
            :key="r.name"
            type="button"
            :aria-pressed="roleIndex === i"
            @click="chooseRole(i)"
          >
            {{ r.name }}
          </button>
        </div>
        <template v-if="tab === 'budget'">
          <p class="ad-context">
            Rolcaps bepalen de standaardgrenzen per gebruiker in deze rol. Stel
            euro’s én tokens in, per kalenderperiode.
          </p>
          <div class="ad-periods" role="group" aria-label="Budgetperiode">
            <button
              v-for="p in periods"
              :key="p.key"
              type="button"
              :aria-pressed="period === p.key"
              @click="period = p.key"
            >
              {{ p.name }}
            </button>
          </div>
          <div class="ad-budget-fields">
            <label for="ad-euro"
              >Externe kosten in euro<input
                id="ad-euro"
                v-model.number="policies[period].eur"
                type="number"
                min="0"
                max="1000000"
                step="1" /></label
            ><label for="ad-tokens"
              >Tokens, lokaal én extern<input
                id="ad-tokens"
                v-model.number="policies[period].tokens"
                type="number"
                min="0"
                max="1000000000000"
                step="1000"
            /></label>
          </div>
          <label class="ad-switch"
            ><input v-model="personal" type="checkbox" /><span
              >Persoonlijke uitzondering voor Robin</span
            ></label
          >
          <label v-if="personal" class="ad-personal" for="ad-personal-eur"
            >Eigen maandgrens in euro<input
              id="ad-personal-eur"
              v-model.number="personalAmount"
              type="number"
              min="0"
              max="1000000"
          /></label>
          <p v-if="personal" class="ad-small">
            Deze persoonlijke policy vervangt Robins rolcaps. Dit voorbeeld
            stelt alleen een eigen eurogrens per maand in; neem gewenste token-
            en andere periodegrenzen ook op in de persoonlijke policy.
          </p>
          <label for="ad-limit-action" class="ad-select-label"
            >Als de externe eurogrens is bereikt<select
              id="ad-limit-action"
              v-model="onLimit"
            >
              <option value="fallback">
                Terugvallen op toegestaan lokaal model
              </option>
              <option value="block">Externe generatie blokkeren</option>
            </select></label
          >
        </template>
        <template v-else-if="tab === 'models'">
          <p class="ad-context">
            Maak alleen de passende modellen beschikbaar. Stel het
            standaardmodel in en bepaal of extern gebruik is toegestaan.
          </p>
          <div class="ad-model-row">
            <AppIcon name="server" :size="23" />
            <div>
              <strong>Lokaal · algemeen</strong
              ><span>Standaard in deze voorbeeldinrichting</span>
            </div>
            <span class="ad-allowed">Aan</span>
          </div>
          <label class="ad-model-row"
            ><AppIcon name="cpu" :size="23" /><span
              ><strong>Lokaal · redeneren</strong
              ><span>Extra lokale modelkeuze voor complexere taken</span></span
            ><input v-model="reasoning" type="checkbox"
          /></label>
          <label class="ad-model-row"
            ><AppIcon name="globe" :size="23" /><span
              ><strong>Extern model toestaan</strong
              ><span>Eigen gegevensstroom en gebruikskosten</span></span
            ><input v-model="external" type="checkbox"
          /></label>
          <div class="ad-policy-note">
            <AppIcon name="shield" :size="19" />
            <p>
              Ook met externe toegang blijven de geselecteerde modellen,
              budgetten en privacyinstellingen gelden. Anonimisering kan
              verplicht worden ingesteld; controleer wat je verstuurt.
            </p>
          </div>
        </template>
        <template v-else-if="tab === 'knowledge'">
          <p class="ad-context">
            Een chatgebruiker hoeft niet de hele kennisbank te mogen lezen of
            beheren. Bepaal categorieën en de rol in het kennisbeheer apart.
          </p>
          <div class="ad-permission">
            <span>Bedrijfsinformatie</span><span class="ad-allowed">Lezen</span>
          </div>
          <div class="ad-permission">
            <span>Producten &amp; diensten</span
            ><span class="ad-allowed">Lezen</span>
          </div>
          <label class="ad-permission"
            ><span>HR &amp; personeel</span
            ><input v-model="hr" type="checkbox" /></label
          ><label class="ad-permission"
            ><span>Websearch gebruiken</span
            ><input v-model="web" type="checkbox"
          /></label>
          <div class="ad-policy-note">
            <AppIcon name="users" :size="19" />
            <p>
              Meerdere rollen tellen rechten bij elkaar op. Een extra rol die
              toegang verleent, kan dus toegang toevoegen. Voor budgetten geldt
              per periode en eenheid de ruimste rolcap, tenzij een persoonlijke
              policy is ingesteld.
            </p>
          </div>
        </template>
        <template v-else>
          <p class="ad-context">
            Bekijk kosten, tokens, aantallen vragen en het aandeel lokaal.
            Splits het verbruik uit per model, rol, gebruiker of functie en stel
            waar nodig een persoonlijke cap in.
          </p>
          <div class="ad-usage-metrics">
            <div><span>Externe kosten</span><strong>€18,40</strong></div>
            <div><span>Tokens</span><strong>372.000</strong></div>
            <div><span>Vragen</span><strong>186</strong></div>
            <div><span>Lokaal aandeel</span><strong>84%</strong></div>
          </div>
          <p class="ad-small">
            Fictieve gebruikscijfers om het beheerscherm uit te leggen.
          </p>
          <ul class="ad-checks">
            <li>
              <AppIcon name="check" :size="17" />Persoonlijke grenzen naast de
              rolconfiguratie
            </li>
            <li>
              <AppIcon name="check" :size="17" />Extra budgetgrenzen per externe
              provider
            </li>
            <li>
              <AppIcon name="check" :size="17" />API-sleutels met eigen scopes
              en limieten
            </li>
            <li>
              <AppIcon name="check" :size="17" />Technische logs en
              auditgebeurtenissen
            </li>
          </ul>
        </template>
        <div class="ad-user-view">
          <div class="ad-user-header">
            <AppIcon name="users" :size="18" /><strong>Dit ziet Robin</strong>
          </div>
          <div class="ad-chips">
            <span>Lokaal · algemeen</span
            ><span v-if="reasoning">Lokaal · redeneren</span
            ><span v-if="external">Extern · toegestaan model</span
            ><span v-if="hr">HR &amp; personeel</span
            ><span v-if="web">Websearch</span>
          </div>
          <template v-if="tab === 'budget'"
            ><div class="ad-budget-line">
              <span
                >Voorbeeldverbruik ·
                {{
                  personal
                    ? "Maand"
                    : periods.find((p) => p.key === period)!.name
                }}</span
              ><strong>{{ money(spent) }} / {{ money(cap) }}</strong>
            </div>
            <progress
              :value="Math.min(100, consumption)"
              max="100"
              aria-label="Gebruikt budget in de gekozen periode" /><label
              for="ad-used"
              class="ad-consumption"
              >Verken de grens <span>{{ consumption }}%</span></label
            ><input
              id="ad-used"
              v-model.number="consumption"
              type="range"
              min="0"
              max="100"
              step="1" /><template v-if="!personal"
              ><div class="ad-budget-line">
                <span>Tokens in + uit</span
                ><strong
                  >{{
                    count(
                      Math.round(
                        (policies[period].tokens * tokenConsumption) / 100,
                      ),
                    )
                  }}
                  / {{ count(policies[period].tokens) }}</strong
                >
              </div>
              <progress
                :value="tokenConsumption"
                max="100"
                aria-label="Gebruikte tokens" /><label
                for="ad-token-used"
                class="ad-consumption"
                >Verken de tokengrens
                <span>{{ tokenConsumption }}%</span></label
              ><input
                id="ad-token-used"
                v-model.number="tokenConsumption"
                type="range"
                min="0"
                max="100"
                step="1" /></template
          ></template>
          <p class="ad-state" aria-live="polite">
            <AppIcon
              :name="external && reached ? 'shield' : 'check'"
              :size="18"
            />{{ message }}
          </p>
        </div>
      </div>
      <div class="ad-evidence">
        <AssistantMedia
          :key="active.scene"
          :scene="active.scene"
          :title="active.name"
        />
        <div class="ad-explanation">
          <h3>
            {{
              tab === "budget"
                ? "Een eurogrens en een tokenlimiet doen elk iets anders."
                : tab === "models"
                  ? "De gebruiker kiest uit wat jij beschikbaar stelt."
                  : tab === "knowledge"
                    ? "De juiste kennis voor de juiste rol."
                    : "Sturen op werkelijk gebruik."
            }}
          </h3>
          <p v-if="tab === 'budget'">
            Eurocaps begrenzen externe AI-kosten. Tokencaps begrenzen
            verwerking, ook bij lokale modellen. Dag-, week-, maand- en
            jaargrenzen kunnen tegelijk gelden. Een lopend antwoord kan nog over
            een grens gaan; de grens stuurt de toelating van nieuwe generatie.
            Een bereikte persoonlijke tokengrens kan niet worden omzeild door
            lokaal verder te gaan.
          </p>
          <p v-else-if="tab === 'models'">
            Je kunt modellen afzonderlijk selecteren, een standaardmodel kiezen
            en externe modellen uitschakelen. Het verbruik is per model terug te
            zien. Kosten begrens je via gebruikers-, rol- en providerbudgetten.
          </p>
          <p v-else-if="tab === 'knowledge'">
            Orden bronnen in categorieën, stel de toegestane rollen in en kies
            of iemand kennis mag lezen, uploaden of beheren. Geef belangrijke
            bronnen meer prioriteit en controleer de herkomst van antwoorden.
          </p>
          <p v-else>
            Een rolcap is geen gezamenlijke pot voor het hele team.
            Providergrenzen gelden aanvullend voor de externe dienst. Met
            persoonlijke uitzonderingen regel je een andere verdeling waar dat
            nodig is.
          </p>
        </div>
      </div>
    </div>
    <div class="ad-rules">
      <article>
        <span>01 / KENNIS</span>
        <h3>Wie mag wat zien?</h3>
        <p>
          Categorieën, lees- en uploadrechten, rollen en gedeelde projectkennis.
          HR-informatie hoeft niet voor de hele organisatie beschikbaar te zijn.
        </p>
      </article>
      <article>
        <span>02 / MODELLEN</span>
        <h3>Welke modellen mogen mee?</h3>
        <p>
          Toegestane modellen, standaardkeuze, lokaal of extern en regels voor
          anonimisering. Websearch, uploads, sandbox, spraak en hulpmiddelen
          stel je afzonderlijk in.
        </p>
      </article>
      <article>
        <span>03 / VERBRUIK</span>
        <h3>Tot waar mag het gaan?</h3>
        <p>
          Euro’s en tokens per dag, week, maand en jaar. Een lege grens kan
          onbeperkt betekenen; nul laat geen nieuw gebruik binnen die grens toe.
        </p>
      </article>
      <article>
        <span>04 / CAPACITEIT</span>
        <h3>Wat kan de omgeving aan?</h3>
        <p>
          Gebruikers, gelijktijdige sessies, uploadgrootte en chatgeschiedenis.
          Uitzonderingen per rol of persoon helpen de hardware passend te
          gebruiken.
        </p>
      </article>
    </div>
    <div class="ad-scope-table">
      <div>
        <span class="ad-label">Een concrete inrichting</span>
        <h3>Een rolcap is het begin.<br />De grenzen werken samen.</h3>
        <p>
          Twaalf medewerkers met elk een rolcap van €25 per maand delen geen pot
          van €25. Een extra providerbudget kan het gezamenlijke externe gebruik
          bij die dienst begrenzen.
        </p>
      </div>
      <div class="ad-table-scroll">
        <table>
          <thead>
            <tr>
              <th>Waar stel je de grens?</th>
              <th>Fictief voorbeeld</th>
              <th>Wat regel je daarmee?</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <th>Per rol</th>
              <td>€25 per maand + 50.000 tokens per dag</td>
              <td>Standaardgrenzen per gebruiker in die rol.</td>
            </tr>
            <tr>
              <th>Per persoon</th>
              <td>Robin: €15 per maand</td>
              <td>Een persoonlijke policy die zijn rolcaps vervangt.</td>
            </tr>
            <tr>
              <th>Per provider</th>
              <td>€100 per maand voor de externe dienst</td>
              <td>Een extra gedeelde grens bij die provider.</td>
            </tr>
            <tr>
              <th>Per API-sleutel</th>
              <td>2 miljoen tokens per maand + 60 verzoeken per minuut</td>
              <td>
                Een eigen grens voor een app of koppeling, naast scopes en
                toegang.
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
    <details class="ad-detail">
      <summary>
        Hoe werken meerdere rollen en persoonlijke caps samen?<AppIcon
          name="chevron-down"
          :size="18"
        />
      </summary>
      <p>
        Rechten uit meerdere rollen worden samengevoegd. Voor een budgetgrens
        geldt de ruimste rolwaarde per periode en eenheid; een onbeperkte
        rolwaarde kan dus de grens verruimen. Een ingestelde persoonlijke
        budgetpolicy vervangt de rolcaps voor die gebruiker. Provider- en
        API-grenzen blijven daarnaast van toepassing. De server controleert de
        rechten en limieten.
      </p>
    </details>
    <details class="ad-detail">
      <summary>
        Hoe zit het met privacy, inzage en technisch beheer?<AppIcon
          name="chevron-down"
          :size="18"
        />
      </summary>
      <p>
        Richt bewaartermijnen, externe waarschuwingen en inzagebeleid bewust in.
        Een beheerder heeft niet vanzelf toegang tot ieder privégesprek.
        Chatinzage volgt de ingestelde rechten en meldingen. Technische logging
        is instelbaar, is bedoeld voor diagnose en hoort geen chatinhoud of
        geheimen te bevatten. AITJE helpt bij back-ups, systeemstatus en
        onderhoudsafspraken.
      </p>
    </details>
    <p class="ad-footnote">
      Alle instellingen, bedragen en gebruikscijfers hierboven zijn
      demonstratievoorbeelden. De knoppen veranderen alleen dit
      websitevoorbeeld.
    </p>
  </div>
</template>
<style scoped>
.admin-lab {
  margin-top: 3rem;
}
.ad-tabs {
  display: flex;
  overflow-x: auto;
  gap: 0.5rem;
  border-bottom: 1px solid #3c4234;
  margin-bottom: 2rem;
}
.ad-tabs button {
  padding: 1rem;
  display: flex;
  align-items: center;
  gap: 0.6rem;
  white-space: nowrap;
  border-bottom: 2px solid transparent;
  font-size: 0.83rem;
  cursor: pointer;
  color: #bbc3ae;
}
.ad-tabs button[aria-pressed="true"] {
  color: #facc15;
  border-color: #facc15;
}
.ad-grid {
  display: grid;
  grid-template-columns: 1fr 1.05fr;
  gap: 2rem;
  align-items: start;
}
.ad-panel {
  background: #1c2018;
  border: 1px solid #3b4331;
  border-radius: 1.4rem;
  padding: 1.7rem;
  min-width: 0;
}
.ad-panel-header {
  display: flex;
  justify-content: space-between;
  gap: 1rem;
  align-items: center;
}
.ad-label,
.ad-demo-tag {
  font: 0.58rem var(--font-mono);
  text-transform: uppercase;
  letter-spacing: 0.08em;
  color: #a5af95;
}
.ad-demo-tag {
  padding: 0.35rem 0.5rem;
  background: #2b3223;
  border-radius: 0.3rem;
  font-size: 0.52rem;
}
.ad-panel > h3 {
  font-size: 1.45rem;
  font-weight: 600;
  margin: 1.4rem 0;
}
.ad-roles {
  display: flex;
  gap: 0.3rem;
  background: #11150d;
  padding: 0.3rem;
  border-radius: 0.8rem;
}
.ad-roles button {
  padding: 0.7rem 0.5rem;
  flex: 1;
  font-size: 0.72rem;
  border-radius: 0.5rem;
  cursor: pointer;
  color: #c7cebd;
}
.ad-roles button[aria-pressed="true"] {
  background: #facc15;
  color: #111;
  font-weight: 600;
}
.ad-context {
  font-size: 0.83rem;
  color: #b0bba3;
  line-height: 1.8;
  margin: 1.3rem 0;
}
.ad-periods {
  display: flex;
  border-bottom: 1px solid #414c35;
  margin-bottom: 1.2rem;
}
.ad-periods button {
  flex: 1;
  padding: 0.65rem;
  font-size: 0.75rem;
  cursor: pointer;
  color: #b4bea7;
  border-bottom: 2px solid transparent;
}
.ad-periods button[aria-pressed="true"] {
  color: #facc15;
  border-color: #facc15;
}
.ad-budget-fields {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 1rem;
}
.ad-budget-fields label,
.ad-select-label,
.ad-personal {
  display: flex;
  flex-direction: column;
  gap: 0.6rem;
  color: #b6c0a7;
  font-size: 0.75rem;
}
.ad-panel input[type="number"],
.ad-panel select {
  background: #11160c;
  border: 1px solid #46523a;
  border-radius: 0.6rem;
  color: #fff;
  font: inherit;
  min-width: 0;
  padding: 0.75rem;
  width: 100%;
}
.ad-panel input[type="checkbox"] {
  accent-color: #facc15;
  width: 17px;
  height: 17px;
  flex-shrink: 0;
}
.ad-switch {
  display: flex;
  gap: 0.7rem;
  align-items: center;
  margin: 1.2rem 0;
  font-size: 0.8rem;
  color: #d1d8c7;
}
.ad-select-label {
  margin-top: 1.2rem;
}
.ad-small {
  color: #9ca98d;
  font-size: 0.7rem;
  line-height: 1.7;
  margin-top: 0.8rem;
}
.ad-user-view {
  background: #11160d;
  border: 1px solid #465336;
  padding: 1.2rem;
  border-radius: 1rem;
  margin-top: 1.5rem;
}
.ad-user-header {
  display: flex;
  gap: 0.6rem;
  align-items: center;
  font-size: 0.8rem;
}
.ad-user-header svg {
  color: #facc15;
}
.ad-chips {
  display: flex;
  flex-wrap: wrap;
  gap: 0.4rem;
  margin-top: 1rem;
}
.ad-chips span {
  border: 1px solid #4f5b3f;
  border-radius: 0.4rem;
  padding: 0.3rem 0.5rem;
  color: #c3d0b0;
  font-size: 0.65rem;
}
.ad-budget-line {
  display: flex;
  justify-content: space-between;
  gap: 0.7rem;
  margin-top: 1.5rem;
  font-size: 0.7rem;
  color: #a6b593;
}
.ad-budget-line strong {
  color: #facc15;
}
.ad-user-view progress {
  width: 100%;
  height: 7px;
  margin-top: 0.7rem;
  border: 0;
  border-radius: 20px;
  overflow: hidden;
  appearance: none;
  background: #333d2a;
}
.ad-user-view progress::-webkit-progress-bar {
  background: #333d2a;
}
.ad-user-view progress::-webkit-progress-value {
  background: #facc15;
  border-radius: 20px;
}
.ad-user-view progress::-moz-progress-bar {
  background: #facc15;
}
.ad-consumption {
  display: flex;
  justify-content: space-between;
  font-size: 0.65rem;
  color: #9caa8a;
  margin-top: 1rem;
}
.ad-user-view input[type="range"] {
  width: 100%;
  accent-color: #facc15;
  margin-top: 0.5rem;
}
.ad-state {
  display: flex;
  gap: 0.7rem;
  color: #b9c9a6;
  font-size: 0.73rem;
  line-height: 1.75;
  margin-top: 1rem;
}
.ad-state > svg {
  flex-shrink: 0;
  margin-top: 0.2rem;
  color: #facc15;
}
.ad-evidence {
  min-width: 0;
}
.ad-evidence :deep(figcaption) {
  color: #a9b39b;
}
.ad-explanation {
  padding: 1.5rem 0.5rem;
}
.ad-explanation h3 {
  font-weight: 600;
  line-height: 1.5;
  font-size: 1.12rem;
}
.ad-explanation p {
  font-size: 0.85rem;
  line-height: 1.85;
  color: #aebba0;
  margin-top: 0.9rem;
}
.ad-model-row {
  display: flex;
  align-items: center;
  gap: 1rem;
  border-bottom: 1px solid #3c4731;
  padding: 1.2rem 0;
  font-size: 0.8rem;
}
.ad-model-row > div,
.ad-model-row > span:not(.ad-allowed) {
  flex: 1;
}
.ad-model-row strong,
.ad-model-row span span {
  display: block;
}
.ad-model-row span span,
.ad-model-row div span {
  font-size: 0.72rem;
  line-height: 1.7;
  color: #a5b195;
  margin-top: 0.4rem;
}
.ad-allowed {
  color: #facc15;
  font: 0.65rem var(--font-mono);
}
.ad-policy-note {
  display: flex;
  gap: 0.8rem;
  padding: 1.1rem;
  background: #28311e;
  border-radius: 0.8rem;
  margin-top: 1.5rem;
}
.ad-policy-note > svg {
  flex-shrink: 0;
  color: #facc15;
  margin-top: 0.2rem;
}
.ad-policy-note p {
  font-size: 0.75rem;
  line-height: 1.8;
  color: #bac6aa;
}
.ad-permission {
  display: flex;
  justify-content: space-between;
  align-items: center;
  border-bottom: 1px solid #3a4630;
  padding: 1rem 0;
  font-size: 0.82rem;
}
.ad-usage-metrics {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 0.8rem;
}
.ad-usage-metrics > div {
  background: #11160c;
  padding: 1rem;
  border-radius: 0.7rem;
}
.ad-usage-metrics span {
  display: block;
  font-size: 0.65rem;
  color: #aab89a;
}
.ad-usage-metrics strong {
  font-family: var(--font-heading);
  font-size: 1.5rem;
  display: block;
  margin-top: 0.6rem;
}
.ad-checks {
  display: grid;
  gap: 0.9rem;
  margin-top: 1.5rem;
}
.ad-checks li {
  display: flex;
  gap: 0.7rem;
  font-size: 0.8rem;
  line-height: 1.5;
}
.ad-checks svg {
  flex-shrink: 0;
  color: #facc15;
}
.ad-rules {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 1.5rem;
  margin-top: 3rem;
  padding-top: 2rem;
  border-top: 1px solid #3c4632;
}
.ad-rules article > span {
  font: 0.6rem var(--font-mono);
  color: #facc15;
  letter-spacing: 0.05em;
}
.ad-rules h3 {
  font-size: 1rem;
  font-weight: 600;
  margin: 1rem 0;
}
.ad-rules p {
  font-size: 0.8rem;
  line-height: 1.85;
  color: #adb89f;
}
.ad-detail {
  border-top: 1px solid #3c4632;
  margin-top: 1.5rem;
  padding-top: 1rem;
}
.ad-detail summary {
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 1rem;
  cursor: pointer;
  font-size: 0.9rem;
  list-style: none;
  padding: 0.5rem 0;
}
.ad-detail p {
  color: #adb99e;
  font-size: 0.85rem;
  line-height: 1.85;
  max-width: 60rem;
  padding-block: 1rem;
}
.ad-footnote {
  font-size: 0.7rem;
  color: #929f82;
  line-height: 1.7;
  margin-top: 1.5rem;
}
@media (max-width: 1000px) {
  .ad-grid {
    grid-template-columns: 1fr;
  }
  .ad-rules {
    grid-template-columns: 1fr 1fr;
  }
  .ad-evidence {
    max-width: 50rem;
  }
}
@media (max-width: 480px) {
  .ad-panel {
    padding: 1rem;
  }
  .ad-panel-header {
    gap: 0.5rem;
  }
  .ad-demo-tag {
    display: none;
  }
  .ad-roles button {
    font-size: 0.65rem;
  }
  .ad-budget-fields {
    grid-template-columns: 1fr;
  }
  .ad-rules {
    grid-template-columns: 1fr;
  }
  .ad-tabs button {
    font-size: 0.75rem;
    padding: 0.9rem 0.6rem;
  }
  .ad-model-row {
    gap: 0.6rem;
  }
  .ad-panel select {
    font-size: 0.7rem;
  }
}
.ad-scope-table {
  display: grid;
  grid-template-columns: 0.75fr 1.3fr;
  gap: 2rem;
  border-top: 1px solid #3c4632;
  margin-top: 2.5rem;
  padding-top: 2.5rem;
}
.ad-scope-table h3 {
  font-size: 1.3rem;
  font-weight: 600;
  line-height: 1.4;
  margin: 1rem 0;
}
.ad-scope-table p {
  color: #adb99e;
  font-size: 0.82rem;
  line-height: 1.9;
}
.ad-table-scroll {
  overflow-x: auto;
}
.ad-scope-table table {
  width: 100%;
  text-align: left;
  border-collapse: collapse;
  font-size: 0.72rem;
  line-height: 1.7;
}
.ad-scope-table th,
.ad-scope-table td {
  padding: 0.9rem 0.65rem;
  border-bottom: 1px solid #3a4530;
  vertical-align: top;
}
.ad-scope-table thead th {
  font: 0.57rem var(--font-mono);
  text-transform: uppercase;
  letter-spacing: 0.06em;
  color: #a6b393;
  line-height: 1.7;
}
.ad-scope-table tbody th {
  color: #facc15;
  width: 21%;
  font-weight: 500;
}
.ad-scope-table td {
  color: #c0cbb3;
}
@media (max-width: 900px) {
  .ad-scope-table {
    grid-template-columns: 1fr;
  }
  .ad-scope-table table {
    min-width: 430px;
  }
}
</style>
