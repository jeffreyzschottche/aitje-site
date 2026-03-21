const GOOGLE_ANALYTICS_ID = "G-Y2N2PJMB0D";

declare global {
  interface Window {
    dataLayer: unknown[];
    gtag?: (...args: unknown[]) => void;
  }
}

export default defineNuxtPlugin((nuxtApp) => {
  const trackPageView = (url: string) => {
    if (typeof window.gtag !== "function") {
      return;
    }

    window.gtag("config", GOOGLE_ANALYTICS_ID, {
      page_path: url,
      page_location: window.location.href,
      page_title: document.title,
    });
  };

  nuxtApp.hook("page:finish", () => {
    trackPageView(window.location.pathname + window.location.search);
  });
});
