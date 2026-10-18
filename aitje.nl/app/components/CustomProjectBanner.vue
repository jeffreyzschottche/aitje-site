<template>
  <section class="custom-project-banner on-dark" aria-labelledby="custom-project-title">
    <div class="custom-project-backdrop" aria-hidden="true">
      <img
        src="/img/services/nature-tech/aitje-custom.webp"
        alt=""
        width="1672"
        height="941"
        loading="lazy"
      />
    </div>

    <div class="container-page custom-project-inner">
      <div class="custom-project-art">
        <div class="custom-project-orbit" aria-hidden="true"><OrbitGraphic /></div>
        <ProductPackshot
          class="custom-project-box"
          src="/img/covers/v2/aitje-custom.webp"
          alt="AITJE Custom AI: een 3D-verpakking met een ekster die bouwt aan techniek naast het gloeiende AITJE-ei"
        />
      </div>

      <div class="custom-project-copy">
        <p class="custom-project-eyebrow">AITJE Custom / AI op maat</p>
        <h2 id="custom-project-title">Jouw idee.<span>Op jouw manier.</span></h2>
        <p class="custom-project-intro">
          Van een taak automatiseren tot je eigen app, AI-agent of 3D-ervaring.
          Wij helpen je de passende aanpak vinden en bouwen die rond jouw werk.
          Lokaal, op een server of met externe AI.
        </p>
        <div class="custom-project-route" aria-label="Van het eerste plan tot de oplevering">
          <span>Uitdenken</span><AppIcon name="arrow-right" :size="15" />
          <span>Bouwen</span><AppIcon name="arrow-right" :size="15" />
          <span>Opleveren</span>
        </div>
        <UiButton to="/diensten/aitje-custom" size="lg" arrow>Ontdek AITJE Custom</UiButton>
      </div>
    </div>
  </section>
</template>

<style scoped>
.custom-project-banner {
  position: relative;
  isolation: isolate;
  background: #0b1712;
  color: #fff;
}
.custom-project-backdrop {
  position: absolute;
  inset: 0;
  z-index: -1;
  overflow: hidden;
}
.custom-project-backdrop img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  object-position: center 56%;
  opacity: 0.8;
}
.custom-project-backdrop::after {
  content: "";
  position: absolute;
  inset: 0;
  background:
    linear-gradient(90deg, rgb(8 18 13 / 0.12), rgb(8 18 13 / 0.35) 38%, rgb(8 18 13 / 0.92) 65%, #0b1712),
    linear-gradient(0deg, rgb(8 18 13 / 0.6), transparent 45%);
}
.custom-project-inner {
  display: grid;
  grid-template-columns: 1.05fr 1fr;
  align-items: center;
  gap: 3.5rem;
  min-height: 550px;
}
.custom-project-art {
  position: relative;
  align-self: stretch;
  min-width: 0;
}
.custom-project-orbit {
  position: absolute;
  width: 116%;
  top: -9%;
  left: -8%;
  opacity: 0.65;
}
.custom-project-box {
  position: absolute;
  width: calc(100% + 4rem);
  max-width: 660px;
  left: -2rem;
  bottom: 0;
  filter: drop-shadow(0 30px 24px rgb(0 0 0 / 0.4));
}
.custom-project-copy {
  position: relative;
  padding-block: 4.5rem;
  max-width: 520px;
}
.custom-project-eyebrow {
  margin-bottom: 1.5rem;
  color: var(--color-brand);
  font-family: var(--font-mono);
  font-size: 0.75rem;
  letter-spacing: 0.15em;
  text-transform: uppercase;
}
.custom-project-copy h2 {
  font-family: var(--font-heading);
  font-size: clamp(2.2rem, 3.7vw, 3.5rem);
  font-weight: 700;
  line-height: 1.13;
  letter-spacing: -0.055em;
}
.custom-project-copy h2 span {
  display: block;
  color: var(--color-brand);
}
.custom-project-intro {
  margin-top: 1.5rem;
  max-width: 44ch;
  color: #d5ded5;
  font-size: 1.05rem;
  line-height: 1.8;
}
.custom-project-route {
  display: flex;
  align-items: center;
  gap: 0.75rem;
  margin-block: 1.75rem 2rem;
  color: #bfcbbd;
  font-family: var(--font-mono);
  font-size: 0.75rem;
}
.custom-project-route svg { color: var(--color-brand); }
@media (min-width: 768px) and (max-width: 1023px) {
  .custom-project-inner { gap: 1.75rem; min-height: 470px; }
  .custom-project-box { width: calc(100% + 5rem); left: -2.5rem; bottom: 2rem; }
  .custom-project-copy { padding-block: 3rem; }
  .custom-project-intro { font-size: 0.95rem; }
  .custom-project-route { gap: 0.5rem; font-size: 0.65rem; }
}
@media (max-width: 767px) {
  .custom-project-inner { grid-template-columns: 1fr; gap: 0; min-height: 0; }
  .custom-project-backdrop img { object-position: 44% top; opacity: 0.75; }
  .custom-project-backdrop::after {
    background: linear-gradient(180deg, rgb(8 18 13 / 0.08), rgb(8 18 13 / 0.3) 30%, rgb(8 18 13 / 0.96) 60%, #0b1712);
  }
  .custom-project-art { height: clamp(250px, 70vw, 390px); }
  .custom-project-box {
    width: min(100vw, 470px);
    max-width: none;
    left: 50%;
    bottom: -0.5rem;
    transform: translateX(-50%);
  }
  .custom-project-orbit { width: min(115vw, 530px); left: 50%; top: -3rem; transform: translateX(-50%); }
  .custom-project-copy { padding-block: 1.5rem 3rem; margin-inline: auto; text-align: center; }
  .custom-project-eyebrow { font-size: 0.65rem; margin-bottom: 1rem; }
  .custom-project-copy h2 { font-size: clamp(2rem, 8.5vw, 3rem); }
  .custom-project-intro { margin: 1.25rem auto 0; max-width: 38ch; font-size: 0.95rem; line-height: 1.75; text-wrap: balance; }
  .custom-project-route { justify-content: center; margin-block: 1.5rem; gap: 0.5rem; font-size: 0.7rem; }
}
</style>
