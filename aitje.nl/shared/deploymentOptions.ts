// One source for product configuration, contact-prefill validation and enquiry emails.
export const deploymentGroups = [
  { key: "hardware", label: "Hardware op locatie" },
  { key: "server", label: "Server, cloud of datacenter" },
  { key: "advies", label: "Samen een oplossing kiezen" },
] as const;

export const deploymentOptions = [
  {
    key: "bosgame-m5",
    group: "hardware",
    label: "BOSGAME M5",
    icon: "cpu",
    description:
      "Compacte AI-computer met een ruime geheugenconfiguratie voor lokale modellen. Model, geheugen en gelijktijdig gebruik stemmen we vooraf af.",
    extra: "Hardware apart op offerte",
  },
  {
    key: "bosgame-m6",
    group: "hardware",
    label: "BOSGAME M6",
    icon: "cpu",
    description:
      "Compacte lokale AI-omgeving voor een passend model en jullie dagelijkse werk. We kiezen de configuratie op basis van jullie taken.",
    extra: "Hardware apart op offerte",
  },
  {
    key: "mac-mini-m6",
    group: "hardware",
    label: "Mac mini · M6",
    icon: "monitor",
    description:
      "Apple Silicon voor lokale AI op een compacte Mac. We toetsen modelondersteuning, geheugen en installatie aan jullie workflow.",
    extra: "Mac en inrichting apart op offerte",
  },
  {
    key: "mac-mini-m5-pro",
    group: "hardware",
    label: "Mac mini · M5 Pro",
    icon: "monitor",
    description:
      "Een Mac mini met meer geheugenmogelijkheden voor geschikte lokale modellen. De gekozen uitvoering en software-inrichting staan in je offerte.",
    extra: "Mac en inrichting apart op offerte",
  },
  {
    key: "eigen-hardware",
    group: "hardware",
    label: "Eigen hardware gebruiken",
    icon: "wrench",
    description:
      "Hebben jullie al een geschikte computer of GPU-workstation? We beoordelen wat daarop past en richten de omgeving daarop in.",
    extra: "Geschiktheid en eventuele extra inrichting op offerte",
  },
  {
    key: "eigen-server",
    group: "server",
    label: "Eigen lokale server",
    icon: "server",
    description:
      "Op jullie eigen server, on premise of in een eigen datacenteromgeving. Toegang, opslag, modelcapaciteit en beheer stemmen we met jullie IT af.",
    extra: "Extra servercapaciteit en inrichting op offerte",
  },
  {
    key: "hetzner",
    group: "server",
    label: "Hetzner · VPS of server",
    icon: "globe",
    description:
      "Een eigen cloudomgeving bij Hetzner. De applicatie kan op een VPS; voor de modellen kiezen we passende CPU/GPU-capaciteit of een afzonderlijk inference-endpoint.",
    extra: "Serverhuur en modelverwerking apart op offerte",
  },
  {
    key: "digitalocean",
    group: "server",
    label: "DigitalOcean · cloud of GPU",
    icon: "globe",
    description:
      "De AITJE-omgeving op cloudcapaciteit, met waar nodig GPU-rekenkracht of een gekoppeld model-endpoint. We kiezen capaciteit en bereikbaarheid voor jullie gebruik.",
    extra: "Cloudcapaciteit en modelverwerking apart op offerte",
  },
  {
    key: "aitje-servers",
    group: "server",
    label: "Een server van AITJE",
    icon: "server",
    description:
      "Gebruik AITJE-servers in datacenters voor taalmodellen, coding agents en inference via een endpoint. De omgeving wordt ingericht voor jullie workflow.",
    extra: "Hosting, capaciteit en inference op offerte",
  },
  {
    key: "maatwerk-omgeving",
    group: "advies",
    label: "Zoek met ons een passende oplossing",
    icon: "compass",
    description:
      "Eigen hardware, een externe server, cloud of een combinatie: vertel waar jullie onafhankelijker van willen worden. AITJE zoekt een passende technische en financiële inrichting.",
    extra: "Oplossing en totale investering op offerte",
  },
] as const;

export const findDeploymentOption = (key: string) =>
  deploymentOptions.find((option) => option.key === key);
