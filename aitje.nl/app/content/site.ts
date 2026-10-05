// Navigation, contact details and shared calls to action (pages/sitemap.md, besluiten 46, 49, 51).
import { availableProducts } from "./products";

export const contact = {
  email: "contact@aitje.com",
  // DUMMY — replace before launch (redesign/content/team.md).
  phone: "+31 6 12 34 56 78",
  phoneHref: "mailto:contact@aitje.com",
  phoneConfirmed: false,
  hours: "Maandag tot en met vrijdag, 09.00–18.00 uur",
};

export const mainCta = { label: "Bespreek je AI-vraag", to: "/contact" };
export const customNavLabel = "AITJE Custom / AI op maat";

export type NavLink = {
  label: string;
  to: string;
  description?: string;
  disabled?: boolean;
};
export type NavItem = { label: string; to: string; children?: NavLink[] };

export const contactLink = (topic: string, product?: string) => {
  const params = new URLSearchParams({ onderwerp: topic });
  if (product) params.set("product", product);
  return `/contact?${params.toString()}`;
};

export const footerGroups: { title: string; links: NavLink[] }[] = [
  {
    title: "Producten",
    links: [
      { label: "Alle producten", to: "/producten" },
      ...availableProducts.map((p) => ({
        label: p.name,
        to: `/producten/${p.slug}`,
      })),
    ],
  },
  {
    title: "Diensten",
    links: [
      { label: "Alle diensten", to: "/diensten" },
      { label: "AI-scan", to: "/diensten/ai-scan" },
      { label: "Token management & optimalisatie", to: "/diensten/token-management-en-optimalisatie" },
      { label: customNavLabel, to: "/diensten/aitje-custom" },
      {
        label: "Ondersteuning en onderhoud",
        to: "/diensten/ondersteuning-en-onderhoud",
      },
      {
        label: "Voor IT-bedrijven en bureaus",
        to: "/diensten/voor-it-bedrijven",
      },
    ],
  },
  {
    title: "Ontdek",
    links: [
      { label: "Cases", to: "/cases" },
      { label: "Kenniscentrum", to: "/kenniscentrum" },
      { label: "Veelgestelde vragen", to: "/faq" },
    ],
  },
  {
    title: "AITJE",
    links: [
      { label: "Over AITJE", to: "/over-aitje" },
      { label: "Visie", to: "/visie" },
      { label: "Contact", to: "/contact" },
    ],
  },
];
