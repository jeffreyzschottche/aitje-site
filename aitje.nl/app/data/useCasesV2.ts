export type UseCaseV2 = {
  slug: string;
  product: "assistent" | "coder";
  title: string;
  summary: string;
  context: string;
  contextTitle?: string;
  problem: string;
  problemTitle?: string;
  outcome: string;
  outcomeTitle?: string;
  practical: string;
  practicalTitle?: string;
  bullets: string[];
  image: string;
};

export const useCasesV2: Record<"nl" | "en", UseCaseV2[]> = {
  nl: [
    {
      slug: "interne-kennis-en-beleid",
      product: "assistent",
      title: "Vraag je eigen kennisbank om direct antwoord",
      summary:
        "Voor organisaties die veel gevoelige documenten, informatie en interne kennis hebben, te veel tijd verliezen aan handmatig opzoeken en wegens privacy of zorgvuldigheid niet zomaar alles met derden willen delen.",
      contextTitle: "Je eigen RAG",
      context:
        "AITJE Assistent past bij organisaties waar kennis verspreid staat over pdf's, beleidstukken, handleidingen, notulen of interne mappen. Onze oplossing maakt daar een lokale chatomgeving van, zonder dat je documenten naar een extern AI-platform hoeven. De kennis kan via ons eigen kennisbanksysteem lokaal worden geplaatst en bij voorkeur ook in versiebeheer worden beheerd.",
      problemTitle: "Wie kijkt er mee?",
      problem:
        "Wie kijkt er mee met de informatie die je medewerkers delen? En welke informatie delen je medewerkers eigenlijk? Bij externe AI-tools is dat niet altijd scherp genoeg, terwijl juist interne kennis, beleid en klantinformatie vaak zorgvuldig behandeld moeten worden.",
      outcomeTitle: "Wat verandert er met AITJE?",
      outcome:
        "Met AITJE Assistent wordt interne kennis opvragen via een lokale AI kosteloos en gemakkelijk. Medewerkers kunnen vragen stellen aan de eigen kennisbank, terwijl documenten en context binnen de lokale omgeving blijven.",
      practical:
        "Dit past goed wanneer je een AI wilt die slim genoeg is voor dagelijkse kennisvragen, een instelbare houding kan krijgen zoals bij grote aanbieders en waar gewenst ook het web kan raadplegen, maar waarbij je zelf grip houdt op de documenten en afspraken die de basis vormen.",
      bullets: [
        "Geschikt voor beleid, handleidingen en interne documentatie",
        "Helpt teams sneller antwoorden vinden",
        "Past bij organisaties die meer regie over hun data willen",
      ],
      image: "/images/boeken.png",
    },
    {
      slug: "gevoelige-data-lokaal-houden",
      product: "assistent",
      title: "Werk veilig met gevoelige gegevens",
      summary:
        "Voor teams die AI willen gebruiken met documenten, klantinformatie of interne kennis die niet naar externe platformen mag.",
      context:
        "Sommige informatie wil je wel doorzoekbaar en bruikbaar maken met AI, maar niet delen met een externe aanbieder. AITJE Assistent en Assistent+ zijn bedoeld voor dat soort omgevingen: lokaal draaien, lokaal vragen stellen en meer controle houden over de context.",
      problem:
        "Veel AI-tools sturen prompts, context en bestanden naar cloudplatformen. Voor gevoelige processen is dat niet altijd wenselijk of toegestaan.",
      outcome:
        "Met AITJE Assistent en Assistent+ blijft de kennisomgeving lokaal beschikbaar en verlaat gevoelige context je eigen systeem niet.",
      practical:
        "Dit past goed wanneer privacy, compliance of zorgvuldigheid belangrijker zijn dan gemak van een standaard cloudtool. Je houdt de AI dicht bij je eigen systeem en bepaalt zelf welke gegevens beschikbaar zijn.",
      bullets: [
        "Geschikt voor interne documenten en vertrouwelijke informatie",
        "Geen externe API nodig voor dagelijkse vragen",
        "Past bij organisaties die grip willen houden op hun data",
      ],
      image: "/images/ei-internet.png",
    },
    {
      slug: "dagelijkse-vragen-en-intern-gebruik",
      product: "assistent",
      title: "Een AI speciaal voor jouw organisatie",
      summary:
        "Voor teams die AI dagelijks willen gebruiken en tegelijk willen doorgroeien naar een oplossing die past bij hun eigen processen, wensen en toekomstplannen.",
      context:
        "AI wordt steeds belangrijker, maar ook steeds afhankelijker van externe platformen, prijzen en infrastructuur. De kosten kunnen stijgen en het stroomnet staat nu al onder druk. Met AITJE bouw je aan een eigen lokale AI-basis die kan meegroeien met specifieke wensen, zonder dat je organisatie haar AI-omgeving zomaar kwijt raakt.",
      problem:
        "Wanneer AI-gebruik volledig leunt op externe tools, ben je afhankelijk van prijswijzigingen, platformkeuzes, beschikbaarheid en regels van anderen. Dat maakt het lastig om een duurzame AI-werkwijze voor je organisatie op te bouwen.",
      outcome:
        "AITJE Assistent biedt een lokale AI-omgeving die je kunt uitbreiden voor jouw specifieke wensen. Zo ben je beter voorbereid op de toekomst en houd je toegang tot je eigen AI, ook wanneer externe diensten veranderen.",
      practical:
        "Dit past goed wanneer je AI niet alleen als losse tool ziet, maar als onderdeel van de toekomstige infrastructuur van je organisatie. Je begint praktisch, maar houdt ruimte om later verder te groeien met eigen kennis, workflows en lokale mogelijkheden.",
      bullets: [
        "Eén duidelijk startpunt voor dagelijks AI-gebruik",
        "Past bij teams die rust en regie willen in hun workflow",
        "Sterke basis voor verder lokaal werken met AI",
      ],
      image: "/images/golden-egg.png",
    },
    {
      slug: "dev-bureau-eigen-coding-agents",
      product: "coder",
      title: "Eigen coding agents voor web bureaus",
      summary:
        "Voor ontwikkelteams die coding agents willen inzetten zonder code, context of klantprojecten via externe AI-platformen te laten lopen.",
      context:
        "Voor dev bureaus kan een coding agent veel werk versnellen, maar klantcode en projectcontext zijn niet altijd geschikt voor externe platformen. AITJE Coder richt zich op teams die agents lokaal willen draaien en zelf willen bepalen welke code, context en regels beschikbaar zijn.",
      problem:
        "Bij klantwerk wil je niet altijd afhankelijk zijn van externe accounts, API-tokens of platformregels. Zeker niet wanneer repositories gevoelige logica bevatten.",
      outcome:
        "Met AITJE Coder draait het bureau eigen agents lokaal en houdt het meer controle over code, context en werkwijze.",
      practical:
        "Dit past goed bij web bureaus die AI willen inzetten in development, maar niet willen dat klantprojecten afhankelijk worden van externe agentplatformen of losse tokenbudgetten.",
      bullets: [
        "Eigen coding agents zonder externe AI-afhankelijkheid",
        "Geschikt voor bureaus met klantprojecten en vertrouwelijke code",
        "Meer regie over tooling, context en werkwijze",
      ],
      image: "/images/storing.png",
    },
    {
      slug: "nachtelijke-coding-agent-zonder-tokens",
      product: "coder",
      title: "Laat agents 's nachts lokaal doorwerken",
      summary:
        "Voor teams die vaste taken willen plannen in uren waarin niemand aan het werk is, zonder dat elke run API-kosten veroorzaakt.",
      context:
        "Niet al het ontwikkelwerk hoeft live naast een developer te gebeuren. Denk aan terugkerende verbeteringen, documentatie, refactors of voorbereidende analyses. Met AITJE Coder kun je agents laten werken binnen ingestelde uren, op lokale capaciteit en zonder tokenmeter per run.",
      problem:
        "Coding agents zijn nuttig, maar doorlopende API-kosten en handmatige startmomenten maken ze minder aantrekkelijk voor terugkerend werk.",
      outcome:
        "Met AITJE Coder kun je instellen in welke uren de agent aan taken werkt, zodat er ook tijdens de nacht output ontstaat op lokale capaciteit.",
      practical:
        "Dit past goed bij teams die terugkerend ontwikkelwerk willen plannen, zoals documentatie, refactors, analyses of onderhoudstaken die buiten werktijd voorbereid kunnen worden.",
      bullets: [
        "Taken plannen binnen ingestelde werkuren",
        "Geen tokenverbruik per nachtelijke run",
        "Geschikt voor terugkerende onderhouds- en verbeterwerkzaamheden",
      ],
      image: "/images/custom-suited.png",
    },
    {
      slug: "ai-council-met-subagents",
      product: "coder",
      title: "AI Council met subagents",
      summary:
        "Voor complexe doelen waarbij een manager-agent werk verdeelt over gespecialiseerde subagents en de voortgang bewaakt.",
      context:
        "Complexere doelen vragen vaak om meer dan één agent. AI Council gebruikt een manager-agent die het doel bewaakt en gespecialiseerde werkers inzet voor bijvoorbeeld analyse, implementatie, review of documentatie. Zo blijft het werk beter georganiseerd.",
      problem:
        "Een enkele agent mist vaak overzicht wanneer analyse, implementatie, review en documentatie tegelijk moeten gebeuren.",
      outcome:
        "Met AI Council orkestreert AITJE Coder meerdere agents rond één doel. De manager geeft updates en de werkers rapporteren per expertisegebied terug.",
      practical:
        "Dit past goed wanneer een opdracht meerdere expertises raakt en je overzicht wilt houden op voortgang, keuzes en deelresultaten zonder alles door één agent te laten doen.",
      bullets: [
        "Manager-agent houdt overzicht op het doel",
        "Subagents werken aan specifieke domeinen van expertise",
        "Duidelijke voortgangsupdates tijdens het werk",
      ],
      image: "/images/council-header.png",
    },
  ],
  en: [
    {
      slug: "internal-knowledge-and-policy",
      product: "assistent",
      title: "Ask your own knowledge base for direct answers",
      summary:
        "For organizations with many sensitive documents, information and internal knowledge that lose too much time on manual searching and cannot simply share everything with third parties because of privacy or care requirements.",
      contextTitle: "Your own RAG",
      context:
        "AITJE Assistent fits organizations where knowledge is spread across PDFs, policy documents, manuals, meeting notes or internal folders. Our solution turns that into a local chat environment without sending documents to an external AI platform. The knowledge can be placed locally through our own knowledge base system and, preferably, managed in version control.",
      problemTitle: "Who is looking along?",
      problem:
        "Who is looking along with the information your employees share? And what information are they sharing in the first place? With external AI tools, that is not always clear enough, while internal knowledge, policy and customer information often require careful handling.",
      outcomeTitle: "What changes with AITJE?",
      outcome:
        "With AITJE Assistent, retrieving internal knowledge through a local AI becomes simple and cost-efficient. Employees can ask questions to their own knowledge base while documents and context stay inside the local environment.",
      practical:
        "This fits well when you want an AI that is smart enough for daily knowledge questions, can have a configurable tone like the major providers and can optionally search the web, while you keep control over the documents and agreements it is based on.",
      bullets: [
        "Useful for policy, manuals and internal documentation",
        "Helps teams find answers faster",
        "Fits organizations that want more control over their data",
      ],
      image: "/images/boeken.png",
    },
    {
      slug: "keeping-sensitive-data-local",
      product: "assistent",
      title: "Work safely with sensitive data",
      summary:
        "For teams that want to use AI with documents, customer information or internal knowledge that should not be sent to external platforms.",
      context:
        "Some information should be searchable and usable with AI, but should not be shared with an external provider. AITJE Assistent and Assistent+ are designed for that kind of environment: local runtime, local questions and more control over the context.",
      problem:
        "Many AI tools send prompts, context and files to cloud platforms. For sensitive workflows, that is not always desirable or allowed.",
      outcome:
        "With AITJE Assistent and Assistent+, the knowledge environment stays local and sensitive context does not leave your own system.",
      practical:
        "This fits well when privacy, compliance or careful handling matter more than the convenience of a standard cloud tool. You keep AI close to your own system and decide which data is available.",
      bullets: [
        "Useful for internal documents and confidential information",
        "No external API required for daily questions",
        "Fits organizations that want stronger control over their data",
      ],
      image: "/images/ei-internet.png",
    },
    {
      slug: "daily-questions-and-internal-use",
      product: "assistent",
      title: "An AI built for your organization",
      summary:
        "For teams that want to use AI every day while growing toward a solution that fits their own processes, needs and future plans.",
      context:
        "AI is becoming more important, but also more dependent on external platforms, pricing and infrastructure. Costs can rise and power grids are already under pressure. With AITJE, you build your own local AI foundation that can grow with specific needs, without your organization suddenly losing its AI environment.",
      problem:
        "When AI usage fully depends on external tools, you depend on price changes, platform decisions, availability and rules set by others. That makes it harder to build a sustainable AI workflow for your organization.",
      outcome:
        "AITJE Assistent provides a local AI environment that can be expanded for your specific needs. That prepares you better for the future and keeps access to your own AI, even when external services change.",
      practical:
        "This fits well when you see AI not only as a separate tool, but as part of your organization's future infrastructure. You start practically while keeping room to grow with your own knowledge, workflows and local capabilities.",
      bullets: [
        "One clear starting point for daily AI use",
        "Fits teams that want more calm and control in their workflow",
        "A strong base for broader local AI use",
      ],
      image: "/images/golden-egg.png",
    },
    {
      slug: "dev-agency-running-own-coding-agents",
      product: "coder",
      title: "Own coding agents for web agencies",
      summary:
        "For development teams that want to use coding agents without sending code, context or client projects through external AI platforms.",
      context:
        "For dev agencies, a coding agent can speed up a lot of work, but client code and project context are not always suitable for external platforms. AITJE Coder is aimed at teams that want to run agents locally and decide which code, context and rules are available.",
      problem:
        "In client work, you do not always want to depend on external accounts, API tokens or platform rules, especially when repositories contain sensitive logic.",
      outcome:
        "With AITJE Coder, the agency runs its own agents locally and keeps more control over code, context and workflow.",
      practical:
        "This fits well for web agencies that want to use AI in development without making client projects dependent on external agent platforms or separate token budgets.",
      bullets: [
        "Own coding agents without external AI dependency",
        "Useful for agencies with client projects and confidential code",
        "More control over tooling, context and workflow",
      ],
      image: "/images/storing.png",
    },
    {
      slug: "overnight-coding-agent-without-tokens",
      product: "coder",
      title: "Let agents work locally overnight",
      summary:
        "For teams that want scheduled work to happen while nobody is online, without every run creating API costs.",
      context:
        "Not all development work has to happen live next to a developer. Recurring improvements, documentation, refactors and preparatory analysis can be scheduled. With AITJE Coder, agents can work within configured hours on local capacity without a token meter per run.",
      problem:
        "Coding agents are useful, but ongoing API costs and manual start moments make them less attractive for recurring work.",
      outcome:
        "With AITJE Coder, you can define the hours in which an agent works, so local capacity can produce output during the night.",
      practical:
        "This fits well for teams that want to schedule recurring development work, such as documentation, refactors, analysis or maintenance tasks that can be prepared outside working hours.",
      bullets: [
        "Schedule tasks within configured working hours",
        "No token usage for every overnight run",
        "Useful for recurring maintenance and improvement work",
      ],
      image: "/images/custom-suited.png",
    },
    {
      slug: "ai-council-with-subagents",
      product: "coder",
      title: "AI Council with subagents",
      summary:
        "For complex goals where a manager agent divides work across specialized subagents and keeps progress visible.",
      context:
        "More complex goals often need more than one agent. AI Council uses a manager agent to keep the goal in view and coordinate specialized workers for analysis, implementation, review or documentation, keeping the work better organized.",
      problem:
        "A single agent often loses overview when analysis, implementation, review and documentation need to happen at the same time.",
      outcome:
        "With AI Council, AITJE Coder orchestrates multiple agents around one goal. The manager sends updates and workers report back from their own domain of expertise.",
      practical:
        "This fits well when a task touches multiple areas of expertise and you want to keep progress, decisions and partial results visible instead of putting everything through one agent.",
      bullets: [
        "Manager agent keeps the overall goal in view",
        "Subagents work on specific expertise domains",
        "Clear progress updates while the work is running",
      ],
      image: "/images/council-header.png",
    },
  ],
};
