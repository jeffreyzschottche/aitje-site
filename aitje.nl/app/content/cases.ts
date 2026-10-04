// Cases (redesign/content/cases.md, pages/cases.md, pages/case.md, besluit 51).
import type { CaseStudy } from "./types";
import { getProduct } from "./products";
import { productEnrichmentCase } from "./caseProductEnrichment";
import { workshopVoiceCase } from "./caseWorkshopVoice";
import { realEstateCase } from "./caseRealEstate";
import { productModelsCase } from "./caseProductModels";
import { gameLevelsCase } from "./caseGameLevels";
import { councilHubCase } from "./caseCouncilHub";
import { developmentAgencyCase } from "./caseDevelopmentAgency";

export const cases: CaseStudy[] = [
  developmentAgencyCase,
  councilHubCase,
  gameLevelsCase,
  productModelsCase,
  realEstateCase,
  workshopVoiceCase,
  productEnrichmentCase,
];

// Keep case stories, but remove links to unpublished products.
for (const item of cases) {
  item.offer = item.offer.filter((offer) =>
    !offer.to.startsWith("/producten/")
      || Boolean(getProduct(offer.to.slice("/producten/".length))),
  );
}

export const getCase = (slug: string) => cases.find((c) => c.slug === slug);
export const getCases = (slugs: string[] = []) =>
  slugs.map(getCase).filter((c): c is CaseStudy => Boolean(c));
