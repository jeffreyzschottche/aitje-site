import type { Product, Service } from "../content/types";
import { getInstalledProductOffer, productIntroductionNote, pricing, scanIntroductionNote, introduction } from "../content/pricing";

const pricedOffer = (name: string, amount: number, description: string, from = false, monthly = false) => ({
  "@type": "Offer",
  name,
  description,
  ...(!from ? { price: amount, priceCurrency: "EUR" } : {}),
  priceSpecification: {
    "@type": monthly ? "UnitPriceSpecification" : "PriceSpecification",
    [from ? "minPrice" : "price"]: amount,
    priceCurrency: "EUR",
    valueAddedTaxIncluded: false,
    ...(monthly ? { billingDuration: "P1M", unitText: "maand" } : {}),
  },
});

export function productStructuredData(product: Product) {
  const installed = getInstalledProductOffer(product.slug);
  return {
    "@type": "Product",
    name: product.name,
    description: product.subline,
    image: product.image,
    sku: product.slug,
    brand: { "@type": "Brand", name: "AITJE" },
    ...(product.status === "available" && product.price !== undefined ? {
      offers: [
        { ...pricedOffer(product.name, product.price, "Los product voor zelfinstallatie. Hardware, serverhuur en installatie apart. Eén aankoop per omgeving, zonder licentieprijs per gebruiker."), availability: "https://schema.org/InStock" },
        ...(installed ? [{
          ...pricedOffer(`${product.name} met basisinstallatie`, installed.price, `Basisinstallatie, testen, uitleg en afgesproken korte nazorg. Hardware, serverhuur en aanvullende inrichting worden apart begroot. ${installed.introductory ? productIntroductionNote : ""}`, !installed.introductory),
          availability: installed.introductory ? "https://schema.org/LimitedAvailability" : "https://schema.org/InStock",
        }] : []),
      ],
    } : {}),
  };
}

export function serviceStructuredData(service: Service) {
  const offers: Record<string, unknown>[] = [];
  if (service.slug === "ondersteuning-en-onderhoud") {
    for (const [level, plan] of Object.entries(pricing.support)) {
      offers.push(pricedOffer(`AITJE ${level[0]!.toUpperCase()}${level.slice(1)}`, plan.monthly, service.price.note, false, true));
    }
  } else if (service.parts?.length) {
    // Only publish prices actually stated for a scoped part of this service.
    for (const part of service.parts) {
      const match = part.price.match(/^(Vanaf )?€([\d.]+)$/);
      if (match) offers.push(pricedOffer(part.name, Number(match[2]!.replaceAll(".", "")), part.text, Boolean(match[1])));
    }
  } else {
    const match = service.price.label.match(/^(Vanaf )?€([\d.]+)$/);
    if (match) offers.push(pricedOffer(service.name, Number(match[2]!.replaceAll(".", "")), `${service.price.note}${service.slug === "ai-scan" && introduction.scan.active ? ` ${scanIntroductionNote}` : ""}`, Boolean(match[1])));
  }
  return {
    "@type": "Service",
    name: service.name,
    serviceType: service.name,
    description: service.subline,
    image: service.image,
    areaServed: { "@type": "Country", identifier: "NL", name: "Nederland" },
    ...(offers.length ? { offers } : {}),
  };
}
