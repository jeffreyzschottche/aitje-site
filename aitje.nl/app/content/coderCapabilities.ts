// Checked against AITJE_Coder's webclient routes, operator manual and implementation on 2026-10-18.
export const coderCapabilities = [
  {
    name: "Agent & review",
    icon: "workflow",
    label: "Van nieuwe taak tot beoordeeld resultaat",
    shot: "taak-verslag",
    path: "/runs",
    caption:
      "Echte opname: verslag en gewijzigde bestanden van de lokale bugfix.",
    items: [
      {
        name: "Taken en meerdere repositories",
        text: "Kies repository, startbranch, model en webzoeken. Werk waar nodig over gekoppelde repositories, in een eigen afgeschermde werkmap.",
      },
      {
        name: "Live verloop en stoppen",
        text: "Volg bestanden, commando’s, tests en fouten. Stop een taak met bevestiging; een vastgelopen herhaling krijgt een begrensde herstart.",
      },
      {
        name: "Review per bestand",
        text: "Bekijk wijzigingen naast of onder elkaar. Geef per bestand een oordeel en opmerking. Vergelijk runs of laat een aanpassing opnieuw uitvoeren.",
      },
      {
        name: "Goedkeuring en Git",
        text: "Een reviewer opent de pull request naar GitHub, GitLab of Gitea. GitHub-login met een code en een fork bij ontbrekend schrijfrecht worden ondersteund.",
      },
      {
        name: "Wachtrij, planning en rondes",
        text: "Orden of pauzeer de rij. Plan eenmalig, dagelijks, wekelijks of via cron. Start bij een push of GitHub-/Linear-issue en laat meerdere rondes doorwerken.",
      },
      {
        name: "Voorrang voor interactief werk",
        text: "Werk je zelf in een editor of chat, dan krijgt dat voorrang op de batchtaken. De wachtrij maakt zichtbaar wat wacht, draait of op review staat.",
      },
    ],
  },
  {
    name: "Tools & modellen",
    icon: "terminal",
    label: "De omgeving voor je bestaande ontwikkelwerk",
    shot: "sessies",
    path: "/sessies",
    caption:
      "Echte opname: client-sessies met modelverzoeken, tokens en Git-context.",
    items: [
      {
        name: "Terminal en editor",
        text: "Configuraties voor Claude Code, OpenCode, Codex CLI, Aider, Cline, Roo Code, Kilo Code, Continue en Zed. Koppel via /connect of de CLI.",
      },
      {
        name: "Lokale modellen en aanvullen",
        text: "Een gekozen coder-model voor agentwerk en een klein model voor inline completion. De box biedt compatibele model-API’s, waaronder de native Messages-API.",
      },
      {
        name: "Mijn sessies",
        text: "Zie repository, branch, taaknaam, modelverzoeken en tokengebruik vanuit je tools. De sessietelling bewaart geen prompts of antwoorden.",
      },
      {
        name: "Langere gesprekken",
        text: "Ondersteunde clients kunnen context samenvatten voordat het venster vol raakt. Modelwissels, context en gelijktijdigheid stemmen we af op het geheugen.",
      },
      {
        name: "Chat en hulpassistent",
        text: "Stel een losse modelvraag bij Chat. Open met Ctrl J de ingebouwde hulpassistent voor taken, planning en uitleg; bevestigingsplichtige acties vragen je akkoord.",
      },
      {
        name: "Desktop, mobiel en taal",
        text: "Dezelfde web-app op een groot of klein scherm, licht of donker. Nederlands, Engels, Duits en Frans; telefoon en laptop zijn de toegang tot de box.",
      },
    ],
  },
  {
    name: "Team & budgetten",
    icon: "users",
    label: "Rechten en grenzen voor jullie organisatie",
    shot: "budgetten",
    path: "/instellingen/budgetten",
    caption:
      "Echte opname: Budgetten & kosten van het demo-account. Beheerinstellingen hangen af van je rol.",
    items: [
      {
        name: "Accounts, rollen en uitnodigingen",
        text: "Developer, reviewer en beheerder hebben eigen bevoegdheden. Nodig uit met een tijdelijke link of QR-code, wijzig rollen of blokkeer een account.",
      },
      {
        name: "Repositorytoegang per persoon",
        text: "Kies exact welke Git-URL’s een developer mag gebruiken en of die zelf repositories mag verbinden. Ingetrokken toegang blokkeert nieuw werk en verder streamen.",
      },
      {
        name: "Persoonlijke sleutels en limieten",
        text: "Beheer sleutels en stel modeltoegang, externe modellen, token- en aanvraaglimieten in. Editor, CLI en tijdelijke agentkeys vallen onder dezelfde controle.",
      },
      {
        name: "Geld- en tokenbudgetten",
        text: "Begrens het bedrijf, een gebruiker, een aanbieder of een model per dag, week, maand, jaar of voortschrijdende uren. Alle passende plafonds gelden tegelijk.",
      },
      {
        name: "Gedrag bij de grens",
        text: "Weiger nieuwe verzoeken of geef bestaande sessies een beperkte afrondtijd met eventueel extra budget. Herstel via de periode, wachttijd of vrijgave door een beheerder.",
      },
      {
        name: "Gebruik en modeltarieven",
        text: "Bekijk kosten per gebruiker, model of aanbieder. Externe tarieven voor input, output en cache voer je zelf in. Historische tellingen behouden het oorspronkelijke tarief.",
      },
    ],
  },
  {
    name: "Skills & koppelingen",
    icon: "plug",
    label: "Laat de agent aansluiten op jullie werkwijze",
    shot: "koppelingen",
    path: "/instellingen/koppelingen",
    caption:
      "Echte opname: MCP-koppelingen. Een koppeling doet pas mee als je die voor de taak selecteert.",
    items: [
      {
        name: "Eigen skills en SKILL.md",
        text: "Gebruik meegeleverde werkwijzen, maak eigen instructies of importeer een SKILL.md. Stel de beschikbaarheid per repository in; een skill geeft geen extra rechten.",
      },
      {
        name: "MCP-registry en eigen servers",
        text: "Voeg toegestane tools toe, test een koppeling en schakel die uit of verwijder die. Selecteer per taak welke koppelingen de agent krijgt.",
      },
      {
        name: "Meldingen en gebeurtenissen",
        text: "Stel per repository e-mail of Slack-, Teams- en Mattermost-webhooks in. Meld klaar voor review, mislukken of mergen, met status en zonder meegestuurde code.",
      },
      {
        name: "Webzoeken en netwerk",
        text: "Webzoeken is per box of taak te regelen. De zoekvraag gaat naar buiten. De agent kan toegestane internetdiensten gebruiken terwijl het interne netwerk wordt afgeschermd.",
      },
      {
        name: "Eigen Git-server",
        text: "Verbind GitHub, GitLab of Gitea, ook met een eigen certificaat. Toegang en webhooks worden passend ingericht voor jullie netwerk en Git-omgeving.",
      },
      {
        name: "Maatwerk van AITJE",
        text: "Geïnstalleerde uitbreidingen hebben eigen toegang, instellingen en dagmaximum. Schrijvende maatwerkformulieren vragen bevestiging. Ontwikkeling en koppelingen worden apart begroot.",
      },
    ],
  },
  {
    name: "Beheer & continuïteit",
    icon: "server",
    label: "Een eigen omgeving die je kunt beheren",
    shot: null,
    path: "/instellingen/systeem",
    caption:
      "Overzicht van productfuncties; de opdrachten hieronder zijn beheercommando’s, geen live systeemstatus.",
    items: [
      {
        name: "Systeem en modelkeuze",
        text: "Regel het standaardmodel en de capaciteit voor agenttaken. De lokale beheerconsole blijft ook bij storingen beschikbaar. De box start na een stroomuitval weer op.",
      },
      {
        name: "Back-up en herstel",
        text: "Een nachtelijke databaseback-up, standaard 14 dagen bewaard. Gemiste back-ups worden ingehaald. Handmatig back-uppen en herstellen kan via de beheerhulpmiddelen.",
      },
      {
        name: "Updates en herstelpad",
        text: "Updates gebruiken een ondertekend manifest en een gezondheidscontrole. Bij een ongezonde nieuwe versie kan de box naar de vorige terug.",
      },
      {
        name: "Logboek en bewaartermijnen",
        text: "Beheerhandelingen komen in het auditlog. Gedetailleerde agent- en sessiegegevens hebben een bewaartermijn; inhoudsloze kostentellingen blijven langer bewaard.",
      },
      {
        name: "Support en telemetrie",
        text: "Jullie bepalen de toegang voor support op afstand. Gebruikscijfers delen staat standaard uit. Diagnostiek en een optionele handmatige gezondheidsmelding helpen bij onderhoud.",
      },
      {
        name: "Afscherming en begrenzing",
        text: "Agentwerk draait in een container met CPU-, geheugen- en schijflimieten. Geheimen zijn versleuteld opgeslagen. Een waakhond helpt vastgelopen diensten te herstellen.",
      },
    ],
  },
] as const;
