<script setup lang="ts">
const tab = ref(0);
const tabs = [
  {
    name: "Repositories",
    icon: "code",
    shot: "repositories",
    path: "/instellingen/repositories",
    title: "Jij bepaalt in welke code de agent mag werken.",
    text: "Verbind een repository één keer en regel de toegang per repository: inloggen bij GitHub met een code, een token, of intrekken. Zonder toegang kan de agent een openbare repository lezen, maar geen pull request openen.",
    points: [
      "GitHub, GitLab en Gitea, ook een eigen Git-server met een eigen certificaat",
      "Twee repositories koppelen voor taken die in beide werken",
      "Toegangstokens staan versleuteld in de database",
    ],
  },
  {
    name: "Skills",
    icon: "pen",
    shot: "skills",
    path: "/instellingen/skills",
    title: "Een vaste werkwijze voor terugkerend werk.",
    text: "Een skill is een beschreven aanpak: zo schrijven wij tests, zo upgraden wij een dependency, zo reviewen wij een pull request. Maak je eigen skills of importeer een SKILL.md. Met Gebruiken staat de opdracht meteen klaar.",
    points: [
      "Vier skills meegeleverd met AITJE",
      "Per repository in te stellen en aan of uit te zetten",
      "Een skill bevat instructies en geeft geen extra rechten",
    ],
  },
  {
    name: "Koppelingen",
    icon: "plug",
    shot: "koppelingen",
    path: "/instellingen/koppelingen",
    title: "Je eigen tools erbij via MCP, per taak aangevinkt.",
    text: "Verbind Coder met je eigen tools via het Model Context Protocol. Kies een server uit de registry of voeg je eigen server toe. Een koppeling doet pas mee als je hem bij een taak aanvinkt.",
    points: [
      "De beheerder voegt toe, test, zet uit en haalt weg",
      "Eigen koppelingen van developers staan standaard uit",
      "Wat de agent aan een koppeling doorgeeft, kan code bevatten",
    ],
  },
  {
    name: "Budgetten",
    icon: "gauge",
    shot: "budgetten",
    path: "/instellingen/budgetten",
    title: "Grenzen aan gebruik, ook als je externe modellen toestaat.",
    text: "Stel geld- en tokenbudgetten in voor het bedrijf, een gebruiker, een aanbieder of een model, per dag, week, maand of jaar. Lokale modellen kosten hier €0. Voor externe modellen vul je de EUR-tarieven zelf in.",
    points: [
      "Alle passende plafonds gelden tegelijk, over IDE, CLI en agents",
      "Kies wat er bij de grens gebeurt: weigeren of sessies laten afronden",
      "Kostenoverzicht per aanbieder, model of gebruiker",
    ],
  },
  {
    name: "Sessies",
    icon: "terminal",
    shot: "sessies",
    path: "/sessies",
    title: "Ook het werk vanuit je editor blijft zichtbaar.",
    text: "Mijn sessies toont je werk vanuit Aider, OpenCode en andere clients, met modelverzoeken, tokens en Git-context. Een beheerder ziet de sessies van alle gebruikers in het logboek.",
    points: [
      "Repository, branch en taaknaam via de sessielauncher",
      "Het overzicht bewaart geen prompts of antwoorden",
      "Geweigerde of mislukte verzoeken staan erbij",
    ],
  },
  {
    name: "Assistent",
    icon: "sparkles",
    shot: "assistent",
    path: "/",
    title: "Bedien Coder in gewone taal.",
    text: "Op elke pagina opent Ctrl J een assistent die vragen over de omgeving beantwoordt, zoals welke taken klaarstaan voor review. Handelingen die een bevestiging vragen, laat hij eerst als kaart zien.",
    points: [
      "Antwoorden met stappen en een link naar de juiste pagina",
      "Het gesprek staat alleen in het geheugen van je tabblad",
      "Goedkeuren blijft een handeling van een mens",
    ],
  },
];
const current = computed(() => tabs[tab.value]!);
const roles = [
  {
    name: "Developer",
    text: "Taken indienen, de agent volgen en wijzigingen bekijken. Werkt met een eigen sleutel in de editor.",
  },
  {
    name: "Reviewer",
    text: "Daarnaast resultaten goedkeuren of afkeuren. Goedkeuren opent de pull request.",
  },
  {
    name: "Beheerder",
    text: "Daarnaast gebruikers, rollen, instellingen, supporttoegang en het logboek. De eigenaar van de box beheert accounts en sleutels.",
  },
];
</script>
<template>
  <section id="regie" class="coder-control">
    <div class="container-page">
      <div class="cc-heading">
        <p class="eyebrow">Toegang, werkwijze en verbruik</p>
        <h2>Geef je team ruimte.<br />Houd zelf de regie.</h2>
        <p>
          AITJE Coder is meer dan een model op een server. De beheeromgeving
          bepaalt wie in welke code mag werken, met welke werkwijze en
          hulpmiddelen, en binnen welke grenzen.
        </p>
      </div>
      <div class="cc-tabs" role="group" aria-label="Bekijk de instellingen">
        <button
          v-for="(item, i) in tabs"
          :key="item.name"
          type="button"
          :aria-pressed="tab === i"
          aria-controls="cc-detail"
          @click="tab = i"
        >
          <AppIcon :name="item.icon" :size="18" />{{ item.name }}
        </button>
      </div>
      <div id="cc-detail" class="cc-detail" aria-live="polite">
        <div class="cc-copy">
          <h3>{{ current.title }}</h3>
          <p>{{ current.text }}</p>
          <ul>
            <li v-for="point in current.points" :key="point">
              <AppIcon name="check" :size="17" />{{ point }}
            </li>
          </ul>
        </div>
        <CoderScreen
          :key="current.shot"
          :shot="current.shot"
          :path="current.path"
          :alt="current.title"
        />
      </div>

      <div class="cc-roles">
        <div class="cc-roles-intro">
          <AppIcon name="users" :size="26" />
          <h3>Eén account per persoon. Drie rollen.</h3>
          <p>
            Iedere developer krijgt een eigen account en een persoonlijke
            sleutel met eigen limieten. Uitnodigen gaat met een link of
            QR-code die 24 uur werkt. Elke beheerhandeling komt in gewone
            woorden in het logboek.
          </p>
        </div>
        <ol>
          <li v-for="role in roles" :key="role.name">
            <strong>{{ role.name }}</strong>
            <span>{{ role.text }}</span>
          </li>
        </ol>
      </div>

      <div class="cc-film">
        <div>
          <p class="eyebrow">In één montage</p>
          <h3>Vijf instellingen, kort achter elkaar.</h3>
          <p>
            Repositories, skills, koppelingen, budgetten en sessies. De gele
            rand wijst telkens de regel aan die bepaalt wat de agent mag.
          </p>
        </div>
        <CoderMedia
          scene="instellingen"
          title="Instellingen van AITJE Coder"
          caption="Echte instellingenpagina's van het demo-account (rol reviewer). Een beheerder ziet daarnaast Gebruikers, Logboek, Support en Systeem."
        />
      </div>
    </div>
  </section>
</template>
<style scoped>
.coder-control {
  background: #111111;
  color: #fff;
  padding-block: 6rem;
  scroll-margin-top: 6rem;
}
.coder-control .eyebrow {
  color: var(--color-brand);
}
.coder-control h2 {
  font-weight: 700;
  font-size: clamp(2rem, 3.4vw, 3.2rem);
  line-height: 1.12;
  margin-block: 1rem 1.5rem;
}
.coder-control p {
  color: #b7b7b0;
  line-height: 1.85;
}
.cc-heading {
  max-width: 48rem;
  margin-bottom: 2.5rem;
}
.cc-heading > p:last-child {
  font-size: 1.05rem;
}
.cc-tabs {
  display: flex;
  gap: 0.4rem;
  overflow-x: auto;
  border-bottom: 1px solid #34342f;
}
.cc-tabs button {
  display: flex;
  align-items: center;
  gap: 0.55rem;
  padding: 1rem 1.1rem;
  border-bottom: 2px solid transparent;
  margin-bottom: -1px;
  white-space: nowrap;
  font-size: 0.82rem;
  color: #d8d8d2;
  cursor: pointer;
}
.cc-tabs button[aria-pressed="true"] {
  border-color: var(--color-brand);
  color: var(--color-brand);
  font-weight: 600;
}
.cc-detail {
  display: grid;
  grid-template-columns: 1fr 1.55fr;
  gap: 3rem;
  align-items: center;
  padding-top: 2.5rem;
}
.cc-copy h3 {
  font-family: var(--font-heading);
  font-size: 1.55rem;
  font-weight: 600;
  line-height: 1.3;
  margin-bottom: 1rem;
}
.cc-copy > p {
  font-size: 0.95rem;
}
.cc-copy ul {
  display: grid;
  gap: 0.8rem;
  margin-top: 1.5rem;
}
.cc-copy li {
  display: flex;
  gap: 0.7rem;
  font-size: 0.85rem;
  line-height: 1.6;
  color: #e4e4de;
}
.cc-copy li svg {
  flex-shrink: 0;
  color: var(--color-brand);
  margin-top: 0.2rem;
}
.cc-roles {
  display: grid;
  grid-template-columns: 1fr 1.3fr;
  gap: 3rem;
  margin-top: 4rem;
  padding: 2.5rem;
  border: 1px solid #34342f;
  border-radius: 1.5rem;
  background: #1a1a1a;
}
.cc-roles-intro > svg {
  color: var(--color-brand);
}
.cc-roles-intro h3 {
  font-family: var(--font-heading);
  font-size: 1.3rem;
  font-weight: 600;
  margin-block: 1rem 0.8rem;
}
.cc-roles-intro p {
  font-size: 0.88rem;
}
.cc-roles ol {
  display: grid;
  gap: 0.7rem;
}
.cc-roles li {
  display: grid;
  grid-template-columns: 7.5rem 1fr;
  gap: 1rem;
  padding: 1.1rem 1.2rem;
  border-radius: 0.9rem;
  background: #262626;
  border: 1px solid #34342f;
}
.cc-roles li strong {
  font-size: 0.9rem;
}
.cc-roles li span {
  font-size: 0.82rem;
  line-height: 1.7;
  color: #b7b7b0;
}
.cc-film {
  display: grid;
  grid-template-columns: 1fr 1.55fr;
  gap: 3rem;
  align-items: center;
  margin-top: 4rem;
}
.cc-film h3 {
  font-family: var(--font-heading);
  font-size: 1.4rem;
  font-weight: 600;
  margin-block: 0.8rem;
}
.cc-film p:not(.eyebrow) {
  font-size: 0.9rem;
}
.cc-film :deep(figcaption) {
  color: #8a8a83;
}
@media (max-width: 1000px) {
  .cc-detail,
  .cc-roles,
  .cc-film {
    grid-template-columns: 1fr;
    gap: 2rem;
  }
  .cc-detail .coder-screen {
    grid-row: 1;
  }
}
@media (max-width: 600px) {
  .coder-control {
    padding-block: 4rem;
  }
  .cc-roles {
    padding: 1.3rem;
  }
  .cc-roles li {
    grid-template-columns: 1fr;
    gap: 0.4rem;
  }
}
</style>
