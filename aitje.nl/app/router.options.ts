import type { RouterConfig } from "@nuxt/schema";
import { START_LOCATION } from "vue-router";
import { useNuxtApp } from "#app";

export default {
  scrollBehavior(to, from) {
    // Filters on the current page should keep their position.
    if (to.path === from.path && !to.hash && !from.hash) return false;

    const position = () => {
      if (to.hash) {
        const element = document.getElementById(decodeURIComponent(to.hash.slice(1)));
        if (element) {
          return {
            el: element,
            top: (Number.parseFloat(getComputedStyle(element).scrollMarginTop) || 0)
              + (Number.parseFloat(getComputedStyle(document.documentElement).scrollPaddingTop) || 0),
            behavior: "instant" as const,
          };
        }
      }
      // Jump directly: the site's smooth anchor scrolling must not animate
      // a new page from the previous page's footer back to the header.
      return { left: 0, top: 0, behavior: "instant" as const };
    };

    if (to.path === from.path || from === START_LOCATION) return position();

    const nuxtApp = useNuxtApp();
    return new Promise<ReturnType<typeof position>>((resolve) => {
      const hook = nuxtApp._runningTransition
        ? "page:transition:finish"
        : "page:loading:end";
      nuxtApp.hooks.hookOnce(hook, () => {
        requestAnimationFrame(() => resolve(position()));
      });
    });
  },
} satisfies RouterConfig;
