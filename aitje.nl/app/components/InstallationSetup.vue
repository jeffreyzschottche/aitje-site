<template>
  <section class="installation-setup section-space">
    <div class="container-page">
      <SectionHeading
        eyebrow="Welke omgeving past?"
        title="Het doel bepaalt de opstelling."
        intro="Je hoeft geen specifieke computer of aanbieder te kiezen. AITJE helpt de omgeving vinden waarin jouw software, modellen en kennisbank samen kunnen werken."
      />
      <AiEnvironment variant="installation" class="mt-10" />

      <div class="installation-preparation">
        <article>
          <span class="installation-icon"><AppIcon name="file-search" :size="25" /></span>
          <p class="eyebrow text-brand-ink">Vóór de implementatie</p>
          <h3>Eerst alles klaarzetten.</h3>
          <p>Welke hardware is er al, wie regelt de servertoegang en welke documenten moeten worden aangeleverd? Dat spreekt AITJE vooraf met je af, zodat beperkingen tijdig naar voren komen.</p>
          <ul>
            <li><AppIcon name="check" :size="17" />Gegevens van bestaande hardware delen</li>
            <li><AppIcon name="check" :size="17" />Servertoegang en netwerk afstemmen</li>
            <li><AppIcon name="check" :size="17" />Handleidingen en trainingsmateriaal aanleveren</li>
          </ul>
        </article>
        <article>
          <span class="installation-icon"><AppIcon name="workflow" :size="25" /></span>
          <p class="eyebrow text-brand-ink">Een bewuste architectuur</p>
          <h3>Een vaste aanpak. Ruimte om af te wijken.</h3>
          <p>Voor Assistent en Coder gebruikt AITJE vaste werkwijzen en installatierichtlijnen. De keuzes voor software, modellen, opslag en toegang zijn op elkaar afgestemd.</p>
          <p>Past jouw situatie daar niet helemaal bij? Dan beoordeelt AITJE wat een andere inrichting betekent voor capaciteit, koppelingen en beheer. De afwijkingen en werkzaamheden worden vooraf afgesproken.</p>
          <div class="installation-product-links">
            <NuxtLink to="/producten/aitje-assistent">AITJE Assistent <AppIcon name="arrow-up-right" :size="16" /></NuxtLink>
            <NuxtLink to="/producten/aitje-coder">AITJE Coder <AppIcon name="arrow-up-right" :size="16" /></NuxtLink>
          </div>
        </article>
      </div>
    </div>
  </section>
</template>

<style scoped>
.installation-setup { background: #eef0e7; }
.installation-preparation { display: grid; grid-template-columns: repeat(2, minmax(0, 1fr)); gap: 4rem; margin-top: 3rem; }
.installation-preparation article { position: relative; border-top: 1px solid #cbd2c2; padding-top: 1.5rem; }
.installation-icon { display: grid; place-items: center; width: 2.8rem; height: 2.8rem; border-radius: 12px; background: var(--color-brand); margin-bottom: 1rem; }
.installation-preparation h3 { margin-top: .8rem; font: 700 clamp(1.4rem, 2.2vw, 1.8rem)/1.2 var(--font-heading); letter-spacing: -.04em; }
.installation-preparation h3 ~ p { margin-top: 1rem; color: var(--color-muted); font-size: .94rem; line-height: 1.8; }
.installation-preparation ul { display: grid; gap: .8rem; margin-top: 1.2rem; font-size: .86rem; }
.installation-preparation li { display: flex; align-items: flex-start; gap: .6rem; line-height: 1.7; }
.installation-preparation li svg { flex-shrink: 0; margin-top: .2rem; color: #536c48; }
.installation-product-links { display: flex; flex-wrap: wrap; gap: .8rem 1.5rem; margin-top: 1.2rem; }
.installation-product-links a { display: inline-flex; gap: .4rem; align-items: center; font-size: .86rem; font-weight: 600; }
.installation-product-links a:hover { text-decoration: underline; text-underline-offset: 4px; }
.installation-product-links a:focus-visible { outline: 2px solid var(--color-ink); outline-offset: 5px; }
@media (max-width: 767px) {
  .installation-preparation { grid-template-columns: 1fr; gap: 2rem; }
}
</style>
