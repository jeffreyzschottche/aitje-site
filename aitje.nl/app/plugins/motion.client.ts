// Page motion with GSAP: calm hero intros, photo parallax and a floating packshot.
// Everything is skipped when the visitor prefers reduced motion.
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

const HEROES = ".page-hero, .product-detail-hero, .case-story-hero";
const ART = ".service-scene, .page-hero-art, .product-packshot";

export default defineNuxtPlugin((nuxtApp) => {
  gsap.registerPlugin(ScrollTrigger);
  let ctx: gsap.Context | undefined;

  const animateHero = (hero: HTMLElement) => {
    const title = hero.querySelector("h1");
    const copy = title?.parentElement ? Array.from(title.parentElement.children) : [];
    const art = hero.querySelector<HTMLElement>(ART);
    const photo = hero.querySelector<HTMLElement>(".photo-bg");

    const intro = gsap.timeline({ defaults: { ease: "power3.out" } });
    if (photo) intro.fromTo(photo, { scale: 1.12, autoAlpha: 0 }, { scale: 1.02, autoAlpha: 1, duration: 1.6, ease: "power2.out" }, 0);
    if (copy.length) intro.from(copy, { y: 28, autoAlpha: 0, duration: 0.9, stagger: 0.08 }, 0.1);
    if (art) intro.from(art, { y: 40, scale: 0.94, autoAlpha: 0, duration: 1.2 }, 0.25);

    if (photo) {
      gsap.to(photo, {
        yPercent: 12,
        ease: "none",
        scrollTrigger: { trigger: hero, start: "top top", end: "bottom top", scrub: true },
      });
    }

    const packshot = hero.querySelector<HTMLElement>(".product-packshot");
    if (packshot) {
      gsap.to(packshot, { y: -10, rotation: -0.6, duration: 3.2, ease: "sine.inOut", yoyo: true, repeat: -1, delay: 1.3 });
    }
  };

  const run = () => {
    ctx?.revert();
    ctx = gsap.context(() => {
      const mm = gsap.matchMedia();
      mm.add("(prefers-reduced-motion: no-preference)", () => {
        document.querySelectorAll<HTMLElement>(HEROES).forEach(animateHero);
      });
    });
    ScrollTrigger.refresh();
  };

  nuxtApp.hook("page:finish", () => requestAnimationFrame(run));
});
