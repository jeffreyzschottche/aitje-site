<script setup lang="ts">
import { coderCapabilities } from "@/content/coderCapabilities";
const selected = ref(0);
const current = computed(() => coderCapabilities[selected.value]!);
</script>
<template>
  <section id="alle-functies" class="coder-feature-map">
    <div class="container-page">
      <div class="cfm-heading">
        <p class="eyebrow text-brand-ink">
          Van de eerste taak tot het dagelijks beheer
        </p>
        <h2>Een coding agent.<br />Een complete omgeving eromheen.</h2>
        <p>
          De agent is het begin. Repositories, modellen, rechten, planning,
          skills, koppelingen en beheer maken hem bruikbaar voor je team. Bekijk
          wat er allemaal in Coder zit.
        </p>
      </div>
      <div class="cfm-layout">
        <div
          class="cfm-nav"
          role="group"
          aria-label="Bekijk alle mogelijkheden"
        >
          <button
            v-for="(group, i) in coderCapabilities"
            :key="group.name"
            type="button"
            :aria-pressed="selected === i"
            aria-controls="cfm-detail"
            @click="selected = i"
          >
            <AppIcon :name="group.icon" :size="20" /><span>{{
              group.name
            }}</span
            ><AppIcon name="arrow-right" :size="15" />
          </button>
          <div class="cfm-native-nav">
            <span>In de echte app</span>
            <p>
              Nieuwe taak · Mijn sessies · Wachtrij &amp; planning ·
              Instellingen
            </p>
          </div>
        </div>
        <div id="cfm-detail" class="cfm-detail">
          <div class="cfm-section-title">
            <span>0{{ selected + 1 }} / 05</span>
            <h3>{{ current.label }}</h3>
          </div>
          <div class="cfm-items">
            <article v-for="(item, i) in current.items" :key="item.name">
              <span>0{{ i + 1 }}</span>
              <div>
                <h4>{{ item.name }}</h4>
                <p>{{ item.text }}</p>
              </div>
            </article>
          </div>
          <div v-if="current.shot" class="cfm-proof">
            <CoderScreen
              :key="current.shot"
              :shot="current.shot"
              :path="current.path"
              :alt="current.label"
              theme="light"
            />
          </div>
          <div v-else class="cfm-ops">
            <div>
              <AppIcon name="server" :size="25" /><strong
                >Beheer op de eigen box</strong
              ><span>Systeem · Logboek · Support · Herstel</span>
            </div>
            <pre><code><span># Een handmatige back-up maken</span>
aitjectl backup now

<span># Diagnostiek voor ondersteuning</span>
aitjectl diag</code></pre>
          </div>
          <p class="cfm-caption">{{ current.caption }}</p>
        </div>
      </div>
      <p class="cfm-note">
        Gebaseerd op de huidige productfuncties. Beschikbaarheid van modellen,
        externe diensten, hardwarecapaciteit en aanvullende inrichting stemmen
        we af. De getoonde screenshots bevatten fictieve bedrijfsgegevens; de
        agenttaken in die opnamen zijn echt uitgevoerd.
      </p>
    </div>
  </section>
</template>
<style scoped>
.coder-feature-map {
  padding-block: 5.5rem;
  background: #f5f5ef;
  scroll-margin-top: 6rem;
}
.cfm-heading {
  max-width: 48rem;
  margin-bottom: 3rem;
}
.cfm-heading h2 {
  font: 700 clamp(2rem, 3.3vw, 3.1rem)/1.12 var(--font-heading);
  letter-spacing: -0.035em;
  margin: 1rem 0 1.5rem;
}
.cfm-heading > p:last-child {
  font-size: 1rem;
  color: #5f6f53;
  line-height: 1.85;
}
.cfm-layout {
  display: grid;
  grid-template-columns: 17rem 1fr;
  gap: 3rem;
  align-items: start;
}
.cfm-nav {
  position: sticky;
  top: 8rem;
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
}
.cfm-nav > button {
  display: flex;
  align-items: center;
  gap: 0.8rem;
  padding: 1rem;
  text-align: left;
  border: 1px solid #dbe1d2;
  border-radius: 0.7rem;
  font-size: 0.8rem;
  color: #5f714a;
  background: #f8f9f4;
  cursor: pointer;
}
.cfm-nav > button[aria-pressed="true"] {
  background: #27371e;
  color: #e2edcf;
  border-color: #27371e;
}
.cfm-nav > button > svg {
  flex-shrink: 0;
}
.cfm-nav > button > svg:last-child {
  margin-left: auto;
  opacity: 0.5;
}
.cfm-native-nav {
  padding: 1.2rem 0.8rem;
  margin-top: 0.8rem;
  border-top: 1px solid #d2dcc5;
}
.cfm-native-nav > span {
  font: 0.55rem var(--font-mono);
  text-transform: uppercase;
  letter-spacing: 0.1em;
  color: #63744d;
}
.cfm-native-nav p {
  font-size: 0.7rem;
  line-height: 1.8;
  color: #63744d;
  margin-top: 0.7rem;
}
.cfm-detail {
  min-width: 0;
}
.cfm-section-title {
  padding-bottom: 1rem;
  border-bottom: 1px solid #d2dcc5;
  margin-bottom: 1.4rem;
}
.cfm-section-title > span {
  font: 0.6rem var(--font-mono);
  color: #637a46;
}
.cfm-section-title h3 {
  font: 600 1.35rem/1.3 var(--font-heading);
  letter-spacing: -0.02em;
  margin-top: 0.5rem;
}
.cfm-items {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 1.5rem 2rem;
}
.cfm-items article {
  display: flex;
  align-items: flex-start;
  gap: 0.8rem;
}
.cfm-items article > span {
  font: 0.55rem var(--font-mono);
  color: #6c804f;
  margin-top: 0.3rem;
}
.cfm-items h4 {
  font: 600 0.85rem/1.5 var(--font-heading);
}
.cfm-items p {
  font-size: 0.75rem;
  color: #5e6e50;
  line-height: 1.9;
  margin-top: 0.5rem;
}
.cfm-proof {
  margin-top: 2rem;
  max-width: 51rem;
}
.cfm-caption {
  font-size: 0.64rem;
  color: #627252;
  line-height: 1.85;
  margin-top: 1rem;
}
.cfm-note {
  font-size: 0.65rem;
  color: #627252;
  line-height: 1.85;
  max-width: 65rem;
  margin-top: 2rem;
}
.cfm-ops {
  display: grid;
  grid-template-columns: 1fr 1fr;
  background: #23301c;
  color: #dce8ca;
  border: 1px solid #3a4c2c;
  border-radius: 1rem;
  overflow: hidden;
  margin-top: 2rem;
}
.cfm-ops > div {
  padding: 2rem;
  display: flex;
  flex-direction: column;
  gap: 1rem;
}
.cfm-ops > div > svg {
  color: #b8b060;
}
.cfm-ops strong {
  font-size: 0.85rem;
  font-weight: 500;
}
.cfm-ops > div > span {
  font-size: 0.65rem;
  color: #8fa778;
  line-height: 1.7;
}
.cfm-ops pre {
  font: 0.65rem/1.9 var(--font-mono);
  background: #1b2516;
  padding: 2rem 1.5rem;
  overflow: auto;
  color: #c0d2a5;
}
.cfm-ops code span {
  color: #728b59;
}
@media (max-width: 1000px) {
  .cfm-layout {
    grid-template-columns: 13rem 1fr;
    gap: 2rem;
  }
  .cfm-items {
    gap: 1.3rem;
  }
  .cfm-ops {
    grid-template-columns: 1fr;
  }
  .cfm-ops > div {
    padding: 1.3rem;
  }
  .cfm-ops pre {
    padding: 1.3rem;
  }
}
@media (max-width: 760px) {
  .coder-feature-map {
    padding-block: 3.5rem;
  }
  .cfm-layout {
    grid-template-columns: 1fr;
    gap: 1.5rem;
  }
  .cfm-nav {
    position: static;
    flex-direction: row;
    overflow-x: auto;
    padding-bottom: 0.5rem;
  }
  .cfm-nav > button {
    white-space: nowrap;
    flex-shrink: 0;
    padding: 0.8rem;
    font-size: 0.7rem;
  }
  .cfm-nav > button > svg:last-child,
  .cfm-native-nav {
    display: none;
  }
  .cfm-section-title h3 {
    font-size: 1.25rem;
  }
  .cfm-items {
    gap: 1.2rem;
  }
  .cfm-items p {
    font-size: 0.72rem;
  }
}
@media (max-width: 480px) {
  .cfm-items {
    grid-template-columns: 1fr;
  }
  .cfm-items h4 {
    font-size: 0.82rem;
  }
  .cfm-items article {
    gap: 0.65rem;
  }
}
</style>
