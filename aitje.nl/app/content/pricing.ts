// Price model approved by the founder on 5 October 2026, updated on 6 October 2026.
// Introduction availability is confirmed in the quote; no remaining-slot counter.
export const introduction = {
  scan: { active: true, customerLimit: 10 },
  products: { active: true, customerLimit: 100 },
} as const;

export const pricing = {
  hourlyRate: 75,
  scan: { standard: 495, introductory: 395, researchHours: 4, totalHours: 6.5, processLimit: 3 },
  installation: { from: 199, hours: 2.5 },
  advice: { price: 150, hours: 2 },
  dataCheck: { from: 225, hours: 3 },
  costAnalysis: { from: 325, hours: 3 },
  guardrailCheck: { from: 299, hours: 4 },
  training: { price: 399, totalHours: 4, sessionHours: 2 },
  aiGuidelines: { from: 349, hours: 3 },
  products: {
    "aitje-assistent": { software: 499, introductoryInstalled: 599 },
    "aitje-coder": { software: 699, introductoryInstalled: 799 },
  },
  custom: { firstPhaseMinHours: 4, firstPhaseMaxHours: 8 },
  support: {
    core: { monthly: 49, minutes: 30 },
    plus: { monthly: 129, minutes: 90 },
    max: { monthly: 249, minutes: 180 },
  },
} as const;

const euroFormatter = new Intl.NumberFormat("nl-NL", { maximumFractionDigits: 0 });
export const euros = (amount: number) => `€${euroFormatter.format(amount)}`;
export const scanIntroductionNote = `Introductieaanbod voor de AI-scan voor de eerste ${introduction.scan.customerLimit} betaalde klanten. Beschikbaarheid wordt bevestigd in je offerte.`;
export const productIntroductionNote = `Introductieaanbod voor Assistent en Coder voor de eerste ${introduction.products.customerLimit} betaalde klanten. Beschikbaarheid wordt bevestigd in je offerte.`;
export const scanPrice = introduction.scan.active ? pricing.scan.introductory : pricing.scan.standard;

export function getInstalledProductOffer(slug: string) {
  const product = pricing.products[slug as keyof typeof pricing.products];
  if (!product) return undefined;
  const standard = product.software + pricing.installation.from;
  const price = introduction.products.active ? product.introductoryInstalled : standard;
  return { price, standard, discount: standard - price, introductory: introduction.products.active };
}

export function serviceTime(minutes: number) {
  return minutes < 60 ? `${minutes} minuten` : `${new Intl.NumberFormat("nl-NL").format(minutes / 60)} uur`;
}
