export type UseCaseV2 = {
  slug: string;
  title: string;
  summary: string;
  problem: string;
  outcome: string;
  bullets: string[];
  image: string;
};

export const useCasesV2: Record<"nl" | "en", UseCaseV2[]> = {
  nl: [
    {
      slug: "interne-kennis-en-beleid",
      title: "Interne kennis en beleid sneller terugvinden",
      summary:
        "Voor organisaties die veel documenten, afspraken en interne kennis hebben, maar te veel tijd verliezen aan zoeken.",
      problem:
        "Medewerkers weten dat de informatie ergens staat, maar niet waar. Daardoor duurt werken langer en blijft kennis versnipperd.",
      outcome:
        "Met AITJE Assistent wordt interne kennis sneller vindbaar en bruikbaarder voor dagelijkse vragen.",
      bullets: [
        "Geschikt voor beleid, handleidingen en interne documentatie",
        "Helpt teams sneller antwoorden vinden",
        "Past bij organisaties die meer regie over hun data willen",
      ],
      image: "/images/boeken.png",
    },
    {
      slug: "maatwerk-en-agentic-workflows",
      title: "Maatwerk en agentic workflows",
      summary:
        "Voor organisaties die weten dat standaardproducten niet genoeg zijn, maar ook geen vaag maatwerktraject willen.",
      problem:
        "De vraag is vaak concreet, maar de juiste combinatie van hardware, software en proces ontbreekt.",
      outcome:
        "Met AITJE Custom kijkt AITJE mee naar een passende aanpak rond Edge AI, hardware en workflows.",
      bullets: [
        "Strategische vertaalslag van idee naar oplossing",
        "Alternatieve hardware als standaard niet past",
        "Gericht op praktische inzet in de organisatie",
      ],
      image: "/images/aitje-custom.png",
    },
    {
      slug: "dagelijkse-vragen-en-intern-gebruik",
      title: "Dagelijkse vragen en intern gebruik op een eigen AI-omgeving",
      summary:
        "Voor teams die AI dagelijks willen gebruiken zonder steeds afhankelijk te zijn van losse externe tools.",
      problem:
        "Medewerkers schakelen tussen verschillende tools, accounts en platformen, waardoor kennis versnipperd raakt en gebruik onrustig wordt.",
      outcome:
        "AITJE Assistent biedt een vaste lokale omgeving voor vragen, documentwerk en dagelijkse AI-taken binnen de organisatie.",
      bullets: [
        "Eén duidelijk startpunt voor dagelijks AI-gebruik",
        "Past bij teams die rust en regie willen in hun workflow",
        "Sterke basis voor verder lokaal werken met AI",
      ],
      image: "/images/aitje-client-screens.png",
    },
    {
      slug: "lokale-ai-binnen-eigen-infrastructuur",
      title: "Lokale AI binnen de eigen infrastructuur draaien",
      summary:
        "Voor organisaties die AI dichter op hun eigen omgeving willen zetten in plaats van volledig op externe platformen te leunen.",
      problem:
        "Privacy, continuiteit en afhankelijkheid van cloudpartijen maken standaard AI-tools niet altijd logisch voor intern gebruik.",
      outcome:
        "Met AITJE Cube en AITJE OS ontstaat een werkbare lokale basis voor AI-gebruik op eigen hardware.",
      bullets: [
        "Interessant voor organisaties met meer eisen aan controle",
        "Geeft een stevigere basis voor continuïteit en eigen beheer",
        "Sluit aan op teams die lokaal willen starten of opschalen",
      ],
      image: "/images/aitje-assistent-cube-v2.jpg",
    },
  ],
  en: [
    {
      slug: "internal-knowledge-and-policy",
      title: "Finding internal knowledge and policy faster",
      summary:
        "For organizations with a lot of documents, agreements and internal knowledge that is hard to find quickly.",
      problem:
        "Employees know the information exists somewhere, but not where. That slows down work and leaves knowledge fragmented.",
      outcome:
        "With AITJE Assistent, internal knowledge becomes easier to find and more useful in day-to-day work.",
      bullets: [
        "Useful for policy, manuals and internal documentation",
        "Helps teams find answers faster",
        "Fits organizations that want more control over their data",
      ],
      image: "/images/boeken.png",
    },
    {
      slug: "custom-and-agentic-workflows",
      title: "Custom setups and agentic workflows",
      summary:
        "For organizations that know standard products are not enough, but do not want a vague custom project either.",
      problem:
        "The need is concrete, but the right mix of hardware, software and process is still missing.",
      outcome:
        "With AITJE Custom, AITJE helps shape a fitting approach around Edge AI, hardware and workflows.",
      bullets: [
        "Strategic translation from idea to workable solution",
        "Alternative hardware when standard is not enough",
        "Focused on practical use inside the organization",
      ],
      image: "/images/aitje-custom.png",
    },
    {
      slug: "daily-questions-and-internal-use",
      title: "A dedicated local AI environment for daily internal work",
      summary:
        "For teams that want to use AI every day without depending on a scattered set of external tools.",
      problem:
        "Employees move between separate tools, accounts and platforms, which fragments knowledge and makes usage feel inconsistent.",
      outcome:
        "AITJE Assistent provides one local environment for questions, document work and practical daily AI tasks inside the organization.",
      bullets: [
        "One clear starting point for daily AI use",
        "Fits teams that want more calm and control in their workflow",
        "A strong base for broader local AI use",
      ],
      image: "/images/aitje-client-screens.png",
    },
    {
      slug: "running-local-ai-in-your-own-infrastructure",
      title: "Running local AI inside your own infrastructure",
      summary:
        "For organizations that want AI closer to their own environment instead of relying fully on external platforms.",
      problem:
        "Privacy, continuity and cloud dependency make standard AI tools less logical for some internal use cases.",
      outcome:
        "With AITJE Cube and AITJE OS, organizations get a workable local base for AI on their own hardware.",
      bullets: [
        "Relevant for organizations with stronger control requirements",
        "Creates a more solid foundation for continuity and ownership",
        "Fits teams that want to start or scale locally",
      ],
      image: "/images/aitje-assistent-cube-v2.jpg",
    },
  ],
};
