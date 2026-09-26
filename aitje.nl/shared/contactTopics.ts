// Contact form topics, shared by the contact page and /api/contact (redesign/pages/contact.md, besluit 51).

export const contactTopics = [
  { key: "ai-vraag", label: "Ik wil mijn AI-vraag bespreken" },
  { key: "product-regelen", label: "Ik wil een product laten regelen", needsProduct: true },
  { key: "demo", label: "Ik wil een demo aanvragen", needsProduct: true },
  { key: "zelfinstallatie", label: "Ik wil een product bestellen voor zelfinstallatie", needsProduct: true },
  { key: "ai-scan", label: "Ik wil een AI-scan" },
  { key: "ai-verbeteren", label: "Ik wil bestaande AI verbeteren" },
  { key: "ai-op-maat", label: "Ik wil AI op maat" },
  { key: "veilig-ai", label: "Ik wil AI veiliger gebruiken" },
  { key: "sla", label: "Ik wil ondersteuning en onderhoud" },
  { key: "samenwerken", label: "Ik ben een IT-bedrijf of bureau en wil samenwerken" },
  { key: "interesse", label: "Ik heb interesse in een product in ontwikkeling", needsProduct: true },
  { key: "anders", label: "Anders" },
] as const;

export type ContactTopicKey = (typeof contactTopics)[number]["key"];

export const contactProducts = [
  { slug: "aitje-assistent", name: "AITJE Assistent" },
  { slug: "aitje-coder", name: "AITJE Coder" },
  { slug: "aitje-manager", name: "AITJE Manager" },
  { slug: "aitje-notulist", name: "AITJE Notulist" },
  { slug: "aitje-prepper", name: "AITJE Prepper" },
  { slug: "aitje-3d", name: "AITJE 3D" },
  { slug: "aitje-beeld", name: "AITJE Beeld" },
  { slug: "aitje-video", name: "AITJE Video" },
  { slug: "aitje-muziek", name: "AITJE Muziek" },
] as const;

export const findTopic = (key: string) => contactTopics.find((t) => t.key === key);
export const findContactProduct = (slug: string) => contactProducts.find((p) => p.slug === slug);
