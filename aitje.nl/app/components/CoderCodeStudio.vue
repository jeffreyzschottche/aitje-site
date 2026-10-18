<script setup lang="ts">
import aura from "@/content/coder-demos/aura.js?raw";
import auraHtml from "@/content/coder-demos/aura.html?raw";
import board from "@/content/coder-demos/board.js?raw";
import boardHtml from "@/content/coder-demos/board.html?raw";
import invoice from "@/content/coder-demos/invoice.py?raw";
const selected = ref(0);
const fileIndex = ref(0);
const copied = ref(false);
const demos = [
  {
    name: "3D & interactie",
    icon: "box",
    label: "Three.js · JavaScript · WebGL",
    title: "Een idee dat je van alle kanten kunt bekijken.",
    prompt:
      "Bouw een premium 3D-productpresentatie van een kinetisch object: drie messing ringen rond een glazen kern, op een donkere sokkel. Voeg echt licht, zachte schaduwen, materiaalkeuze, rotatie en een exploded view toe. Maak het responsive en respecteer minder bewegen.",
    result:
      "Draai het object, wissel tussen messing, staal en koper en bekijk hoe de ringen in elkaar zitten. De broncode hiernaast bouwt de scène die je ziet.",
    url: "/demos/coder/aura.html",
    files: [
      { name: "aura.js", source: aura },
      { name: "index.html", source: auraHtml },
    ],
    points: [
      "Geometrie, materialen en belichting in code",
      "Bediening met muis, aanraking en toetsenbord",
      "Zelfstandig project, verder uit te bouwen",
    ],
  },
  {
    name: "Webapp & interface",
    icon: "layout",
    label: "JavaScript · HTML · CSS",
    title: "Van opdracht naar een bruikbare interface.",
    prompt:
      "Maak een strak projectboard voor een klein ontwikkelteam. Gebruik vier kolommen, filteren op team en zoeken. Laat taken via een knop naar de volgende stap gaan. Zorg voor een nette mobiele weergave en toegankelijke bediening, zonder externe diensten.",
    result:
      "Zoek een taak, filter op Frontend of verplaats een kaart. Het board werkt echt in je browser. De data zijn fictief en blijven voor deze demo in het geheugen.",
    url: "/demos/coder/board.html",
    files: [
      { name: "board.js", source: board },
      { name: "index.html", source: boardHtml },
    ],
    points: [
      "Werkende interactie en filters",
      "Een verzorgde mobiele layout",
      "Leesbare code zonder externe backend",
    ],
  },
  {
    name: "Bugfix & tests",
    icon: "file-search",
    label: "Python · Decimal · review",
    title: "Ook het kleine verschil moet kloppen.",
    prompt:
      "De btw wordt verkeerd afgerond: een bezorging van 12,50 euro tegen 21% geeft 2,62 euro btw, dat moet 2,63 zijn. Repareer de afronding en zorg dat alle tests slagen.",
    result:
      "Deze fix is daadwerkelijk uitgevoerd door de lokale agent. In de productopname zie je de gewijzigde regels en het verslag: alle drie de tests slagen. Hier staat een leesbare uitwerking van dezelfde afrondingslogica.",
    url: "",
    files: [{ name: "btw.py", source: invoice }],
    points: [
      "Een echte taak op de BOSGAME M6",
      "Het codeverschil is zichtbaar ter review",
      "Een mens beslist over de pull request",
    ],
  },
];
const current = computed(() => demos[selected.value]!);
const currentFile = computed(
  () => current.value.files[fileIndex.value] ?? current.value.files[0]!,
);
watch(selected, () => {
  fileIndex.value = 0;
  copied.value = false;
});
const lines = computed(() => currentFile.value.source.trimEnd().split("\n"));
function tokens(line: string) {
  const expression =
    /("(?:[^"\\]|\\.)*"|'(?:[^'\\]|\\.)*'|`[^`]*`|\/\/.*$|#.*$|\b(?:import|from|const|let|function|return|new|if|else|for|of|class|def|in|await|async|export|true|false|null|None)\b|\b\d+(?:\.\d+)?\b)/g;
  return line
    .split(expression)
    .filter(Boolean)
    .map((text) => ({
      text,
      type: /^(\/\/|#)/.test(text)
        ? "comment"
        : /^["'`]/.test(text)
          ? "string"
          : /^\d/.test(text)
            ? "number"
            : /^(import|from|const|let|function|return|new|if|else|for|of|class|def|in|await|async|export|true|false|null|None)$/.test(
                  text,
                )
              ? "keyword"
              : "",
    }));
}
let copyTimer: ReturnType<typeof setTimeout> | undefined;
async function copyCode() {
  try {
    await navigator.clipboard.writeText(currentFile.value.source);
    copied.value = true;
    clearTimeout(copyTimer);
    copyTimer = setTimeout(() => (copied.value = false), 2000);
  } catch {
    copied.value = false;
  }
}
function downloadCode() {
  const blob = new Blob([currentFile.value.source], {
    type: "text/plain;charset=utf-8",
  });
  const url = URL.createObjectURL(blob);
  const link = document.createElement("a");
  link.href = url;
  link.download = currentFile.value.name;
  link.click();
  setTimeout(() => URL.revokeObjectURL(url), 1000);
}
onBeforeUnmount(() => clearTimeout(copyTimer));
</script>
<template>
  <section id="codevoorbeelden" class="coder-code-studio">
    <div class="container-page">
      <div class="cstudio-heading">
        <div>
          <p class="eyebrow text-brand-ink">Wat je vraagt. Wat de code doet.</p>
          <h2>Dit kun je AITJE Coder<br />laten bouwen.</h2>
        </div>
        <p>
          Een coding agent schrijft bestanden, voert code uit en werkt verder
          aan het resultaat. Bekijk een 3D-scène, een kleine webapp en een echte
          bugfix. Met de opdracht én de code erbij.
        </p>
      </div>
      <div
        class="cstudio-tabs"
        role="group"
        aria-label="Kies een codevoorbeeld"
      >
        <button
          v-for="(demo, i) in demos"
          :key="demo.name"
          type="button"
          :aria-pressed="selected === i"
          @click="selected = i"
        >
          <AppIcon :name="demo.icon" :size="20" />{{ demo.name
          }}<span>0{{ i + 1 }}</span>
        </button>
      </div>
      <div class="cstudio-prompt">
        <span class="cstudio-label">De opdracht</span>
        <p>“{{ current.prompt }}”</p>
        <span class="cstudio-stack">{{ current.label }}</span>
      </div>
      <div class="cstudio-workspace">
        <div class="cstudio-editor">
          <div class="cstudio-editor-top">
            <span><i /><i /><i /></span><span>Broncode</span
            ><button type="button" @click="copyCode">
              {{ copied ? "Gekopieerd" : "Kopieer code" }}
            </button>
          </div>
          <div
            class="cstudio-file-tabs"
            role="group"
            aria-label="Kies een bronbestand"
          >
            <button
              v-for="(file, i) in current.files"
              :key="file.name"
              type="button"
              :aria-pressed="fileIndex === i"
              @click="fileIndex = i"
            >
              {{ file.name }}</button
            ><span>{{ lines.length }} regels</span>
          </div>
          <pre
            tabindex="0"
            aria-label="Broncode van het voorbeeld"
          ><code><span v-for="(line,i) in lines" :key="i" class="cstudio-code-line"><span class="cstudio-line-number" aria-hidden="true">{{i+1}}</span><span><span v-for="(token,j) in tokens(line)" :key="j" :class="token.type">{{token.text}}</span>{{line?'':' '}}</span>
</span></code></pre>
          <div class="cstudio-editor-foot">
            <a
              v-if="current.url"
              :href="
                selected === 0
                  ? '/demos/coder/aura-example.zip'
                  : '/demos/coder/board-example.zip'
              "
              download
              >Compleet voorbeeld ↓</a
            >
            <span v-else>{{ currentFile.name }}</span>
            <button type="button" @click="downloadCode">
              Download bestand <AppIcon name="chevron-down" :size="13" />
            </button>
          </div>
        </div>
        <div class="cstudio-result">
          <div class="cstudio-result-bar">
            <span class="cstudio-live-dot" /><span>Het resultaat</span
            ><span>{{
              selected === 2
                ? "Echte productopname"
                : "Voorbeeldgeneratie · prompt naar code"
            }}</span>
          </div>
          <iframe
            v-if="current.url"
            :key="current.url"
            :src="current.url"
            :title="current.title"
            loading="lazy"
            sandbox="allow-scripts allow-same-origin"
            class="cstudio-frame"
          />
          <div v-else class="cstudio-fix">
            <div class="cstudio-fix-summary">
              <span>€12,50 × 21%</span>
              <div>
                <del>€2,62</del><AppIcon name="arrow-right" :size="20" /><strong
                  >€2,63</strong
                >
              </div>
              <p>Decimal · ROUND_HALF_UP</p>
            </div>
            <CoderScreen
              shot="taak-diff"
              alt="De echte diff van de btw-bugfix in AITJE Coder"
            />
            <div class="cstudio-tests">
              <AppIcon name="check" :size="17" /><span
                >Alle 3 de tests slagen · uit het echte agentverslag</span
              >
            </div>
          </div>
        </div>
      </div>
      <div class="cstudio-caption">
        <div>
          <span class="cstudio-label">{{ current.label }}</span>
          <h3>{{ current.title }}</h3>
          <p>{{ current.result }}</p>
        </div>
        <ul>
          <li v-for="point in current.points" :key="point">
            <AppIcon name="check" :size="16" />{{ point }}
          </li>
        </ul>
      </div>
      <p class="cstudio-note">
        De 3D-scène en webapp zijn speciaal voor deze pagina uitgewerkt. Ze
        tonen soorten programmeerwerk, geen gemeten output van een specifieke
        lokale modelrun. De bugfix en productopnamen komen uit de echte
        Coder-demo met fictieve bedrijfsgegevens. Model, opdracht en controles
        bepalen het resultaat.
      </p>
    </div>
  </section>
</template>
<style scoped>
.coder-code-studio {
  padding: 5.5rem 0 8rem;
  background: #eceee4;
  scroll-margin-top: 6rem;
}
.cstudio-heading {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 5rem;
  align-items: end;
  margin-bottom: 2.7rem;
}
.cstudio-heading h2 {
  font: 700 clamp(2rem, 3.5vw, 3.2rem)/1.13 var(--font-heading);
  letter-spacing: -0.04em;
  margin-top: 1rem;
}
.cstudio-heading > p {
  font-size: 1rem;
  line-height: 1.85;
  color: #69745e;
}
.cstudio-tabs {
  display: flex;
  gap: 0.75rem;
  margin-bottom: 1.4rem;
  overflow-x: auto;
}
.cstudio-tabs > button {
  flex: 1;
  display: flex;
  align-items: center;
  gap: 0.7rem;
  white-space: nowrap;
  text-align: left;
  border: 1px solid #d0d8c2;
  border-radius: 0.8rem;
  padding: 1rem 1.3rem;
  background: #f8f9f2;
  font-size: 0.8rem;
  cursor: pointer;
}
.cstudio-tabs > button[aria-pressed="true"] {
  background: #25321f;
  border-color: #25321f;
  color: #e9efd9;
}
.cstudio-tabs > button > span {
  margin-left: auto;
  font: 0.6rem var(--font-mono);
  opacity: 0.5;
}
.cstudio-prompt {
  padding: 1.5rem 1.7rem;
  background: #e0e5d4;
  border: 1px solid #cbd5ba;
  border-radius: 1rem 1rem 0 0;
}
.cstudio-label {
  font: 0.6rem var(--font-mono);
  letter-spacing: 0.1em;
  text-transform: uppercase;
  color: #637446;
}
.cstudio-prompt p {
  font-size: 0.9rem;
  line-height: 1.8;
  color: #3b4c2d;
  margin-top: 0.6rem;
  max-width: 65rem;
}
.cstudio-stack {
  font: 0.57rem var(--font-mono);
  color: #5f7348;
  display: block;
  margin-top: 0.9rem;
}
.cstudio-workspace {
  display: grid;
  grid-template-columns: 0.8fr 1.2fr;
  min-width: 0;
  align-items: stretch;
  border: 1px solid #c5cfb5;
  border-top: 0;
  border-radius: 0 0 1rem 1rem;
  overflow: hidden;
}
.cstudio-editor {
  background: #192019;
  min-width: 0;
  color: #dbe4cf;
  display: flex;
  flex-direction: column;
}
.cstudio-editor-top,
.cstudio-result-bar {
  display: flex;
  align-items: center;
  gap: 0.8rem;
  padding: 1rem;
  font: 0.6rem var(--font-mono);
  border-bottom: 1px solid #34402d;
  min-height: 3rem;
}
.cstudio-editor-top > span:first-child {
  display: flex;
  gap: 4px;
}
.cstudio-editor-top i {
  width: 5px;
  height: 5px;
  background: #687950;
  border-radius: 50%;
}
.cstudio-editor-top i:first-child {
  background: #ceb54e;
}
.cstudio-editor-top > button {
  min-height: 44px;
  margin-left: auto;
  font-size: 0.6rem;
  color: #abbf8d;
  cursor: pointer;
}
.cstudio-file-tabs {
  display: flex;
  align-items: center;
  border-bottom: 1px solid #303b2a;
  background: #151b15;
}
.cstudio-file-tabs button {
  min-height: 44px;
  padding: 0.8rem 1rem;
  border-bottom: 2px solid transparent;
  font: 0.6rem var(--font-mono);
  color: #899b77;
  cursor: pointer;
}
.cstudio-file-tabs button[aria-pressed="true"] {
  border-bottom-color: #cbb44e;
  color: #d9e5c8;
}
.cstudio-file-tabs > span {
  margin-left: auto;
  margin-right: 1rem;
  font: 0.55rem var(--font-mono);
  color: #637855;
}
.cstudio-editor pre {
  margin: 0;
  overflow: auto;
  flex: 1;
  height: 450px;
  max-height: 520px;
  padding: 1rem 0;
  font: 11px/1.85 var(--font-mono);
  tab-size: 2;
  outline-offset: -4px;
}
.cstudio-code-line {
  display: flex;
  min-width: max-content;
  white-space: pre;
  padding-right: 1.5rem;
}
.cstudio-line-number {
  display: inline-block;
  width: 3.6em;
  text-align: right;
  padding-right: 1.4em;
  color: #8fa67a;
  user-select: none;
  flex-shrink: 0;
}
.cstudio-code-line .comment {
  color: #879f73;
}
.cstudio-code-line .string {
  color: #bacb8a;
}
.cstudio-code-line .number {
  color: #e7b778;
}
.cstudio-code-line .keyword {
  color: #d1a4db;
}
.cstudio-editor-foot {
  display: flex;
  align-items: center;
  gap: 1rem;
  padding: 0.8rem 1rem;
  font: 0.55rem var(--font-mono);
  color: #80956a;
  border-top: 1px solid #34402d;
}
.cstudio-editor-foot > a {
  display: inline-flex;
  align-items: center;
  min-height: 44px;
  color: #b3c88f;
  text-decoration: underline;
  text-underline-offset: 3px;
}
.cstudio-editor-foot > button {
  display: flex;
  min-height: 44px;
  align-items: center;
  gap: 0.4rem;
  margin-left: auto;
  color: #b3c88f;
  cursor: pointer;
}
.cstudio-result {
  min-width: 0;
  background: #e8e9df;
}
.cstudio-result-bar {
  border-color: #cbd4bd;
  color: #5c7048;
  gap: 0.55rem;
  font-size: 0.55rem;
  min-height: 3rem;
  background: #f4f6ee;
}
.cstudio-result-bar > span:last-child {
  margin-left: auto;
  color: #65794d;
}
.cstudio-live-dot {
  width: 5px;
  height: 5px;
  border-radius: 50%;
  background: #8ba557;
}
.cstudio-frame {
  width: 100%;
  height: 640px;
  display: block;
  border: 0;
}
.cstudio-caption {
  display: grid;
  grid-template-columns: 1.1fr 1fr;
  gap: 4rem;
  margin-top: 2rem;
}
.cstudio-caption h3 {
  font: 600 1.3rem/1.35 var(--font-heading);
  letter-spacing: -0.025em;
  margin: 0.7rem 0;
}
.cstudio-caption p {
  font-size: 0.85rem;
  line-height: 1.85;
  color: #5f6f50;
}
.cstudio-caption ul {
  list-style: none;
  padding: 0;
  margin: 1rem 0;
  display: flex;
  flex-direction: column;
  gap: 1rem;
}
.cstudio-caption li {
  display: flex;
  gap: 0.7rem;
  align-items: center;
  font-size: 0.75rem;
  color: #61734d;
}
.cstudio-caption li > svg {
  flex-shrink: 0;
  color: #819849;
}
.cstudio-note {
  font-size: 0.67rem;
  line-height: 1.9;
  color: #62744e;
  margin-top: 1.5rem;
  max-width: 66rem;
}
.cstudio-fix {
  padding: 1.3rem;
}
.cstudio-fix-summary {
  padding: 0.8rem 1rem 1.4rem;
  text-align: center;
}
.cstudio-fix-summary > span {
  font: 0.65rem var(--font-mono);
  color: #72825f;
}
.cstudio-fix-summary > div {
  display: flex;
  gap: 1.5rem;
  justify-content: center;
  align-items: center;
  margin-top: 0.7rem;
}
.cstudio-fix-summary del {
  font-size: 1.5rem;
  color: #a8957b;
}
.cstudio-fix-summary strong {
  font: 700 2.4rem var(--font-heading);
  color: #4e6d32;
}
.cstudio-fix-summary p {
  font: 0.55rem var(--font-mono);
  color: #82966d;
  margin-top: 0.6rem;
}
.cstudio-tests {
  display: flex;
  gap: 0.5rem;
  margin-top: 1rem;
  padding: 0.8rem;
  border: 1px solid #c2d1ad;
  border-radius: 0.6rem;
  color: #638044;
  background: #e2ebd3;
  font-size: 0.62rem;
}
.cstudio-tabs button:focus-visible,
.cstudio-editor button:focus-visible {
  outline: 2px solid #bb9d35;
  outline-offset: -4px;
}
@media (max-width: 1000px) {
  .cstudio-workspace {
    grid-template-columns: 0.9fr 1.1fr;
  }
  .cstudio-heading {
    gap: 2rem;
  }
  .cstudio-frame {
    height: 640px;
  }
  .cstudio-editor pre {
    font-size: 11px;
  }
  .cstudio-tabs > button {
    padding: 1rem 0.85rem;
  }
}
@media (max-width: 760px) {
  .coder-code-studio {
    padding-block: 4rem 6rem;
  }
  .cstudio-heading,
  .cstudio-caption {
    grid-template-columns: 1fr;
    gap: 1rem;
  }
  .cstudio-workspace {
    display: flex;
    flex-direction: column;
  }
  .cstudio-result {
    order: -1;
  }
  .cstudio-editor pre {
    height: 300px;
    max-height: 300px;
  }
  .cstudio-frame {
    height: 640px;
  }
  .cstudio-tabs > button {
    flex: none;
  }
  .cstudio-prompt {
    padding: 1.2rem;
  }
  .cstudio-caption {
    gap: 0.5rem;
  }
  .cstudio-note {
    font-size: 0.63rem;
  }
}
@media (max-width: 420px) {
  .cstudio-frame {
    height: 570px;
  }
  .cstudio-result-bar {
    font-size: 0.48rem;
    padding: 0.8rem;
  }
  .cstudio-caption h3 {
    font-size: 1.2rem;
  }
  .cstudio-tabs > button {
    font-size: 0.73rem;
  }
}
</style>
