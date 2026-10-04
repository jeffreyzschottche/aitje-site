// https://nuxt.com/docs/api/configuration/nuxt-config
import tailwindcss from "@tailwindcss/vite";

const redirect = (to: string) => ({ redirect: { to, statusCode: 301 } });

export default defineNuxtConfig({
  compatibilityDate: "2025-07-15",
  devtools: { enabled: true },
  modules: ["@nuxtjs/sitemap"],
  site: {
    url: process.env.NUXT_PUBLIC_SITE_URL || "https://aitje.com",
  },
  sitemap: {
    sources: ["/api/__sitemap__/urls"],
    xslColumns: [
      { label: "URL", width: "65%" },
      { label: "Last Modified", width: "25%" },
    ],
  },
  app: {
    head: {
      htmlAttrs: { lang: "nl" },
      link: [
        { rel: "icon", href: "/favicon.ico" },
        { rel: "preconnect", href: "https://fonts.googleapis.com" },
        { rel: "preconnect", href: "https://fonts.gstatic.com", crossorigin: "" },
        {
          rel: "stylesheet",
          href: "https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600&family=JetBrains+Mono:wght@400;500&family=Sora:wght@500;600;700&display=swap",
        },
      ],
      meta: [{ name: "theme-color", content: "#0B0B0B" }],
      script: [
        {
          async: true,
          src: "https://www.googletagmanager.com/gtag/js?id=G-Y2N2PJMB0D",
        },
        {
          key: "google-analytics-init",
          innerHTML:
            "window.dataLayer = window.dataLayer || []; function gtag(){dataLayer.push(arguments);} window.gtag = gtag; gtag('js', new Date()); gtag('config', 'G-Y2N2PJMB0D', { send_page_view: false });",
        },
      ],
    },
  },
  css: ["./app/assets/css/main.css"],
  routeRules: {
    // Cases replace the old use-case and case routes (besluit 51).
    "/use-cases": redirect("/cases"),
    "/use-cases/**": redirect("/cases"),
    "/cases/thuiszorg-voice-rapportage": redirect("/cases"),
    "/cases/boekenwinkel-rag-isbn": redirect("/cases"),
    "/cases/it-beheer-lokale-coding-agents": redirect("/cases/coder-game-in-24-uur"),
    "/cases/rijschool-whatsapp-notulist": redirect("/cases"),
    "/cases/orders-uit-email-automatisch": redirect("/cases/3d-productmodellen-met-ai"),
    "/cases/chatgpt-in-je-eigen-organisatie": redirect("/cases/chatgpt-of-codex-in-je-eigen-organisatie"),

    // Old service routes.
    "/diensten/consultancy": redirect("/diensten/advies-en-analyse"),
    "/diensten/ai-strategie": redirect("/diensten/ai-scan"),
    "/diensten/sla": redirect("/diensten/ondersteuning-en-onderhoud"),
    "/aitje-custom": redirect("/diensten/aitje-custom"),
    "/producten/aitje-custom": redirect("/diensten/aitje-custom"),
    "/oplossingen": redirect("/diensten"),

    // Old product and catalog routes.
    // Old Assistent module pages (a /** rule would also match the product page itself).
    "/producten/aitje-assistent/aitje-os": redirect("/producten/aitje-assistent"),
    "/producten/aitje-assistent/aitje-client": redirect("/producten/aitje-assistent"),
    "/producten/aitje-assistent/kennisbank": redirect("/producten/aitje-assistent"),
    "/producten/hardware": redirect("/producten"),
    "/producten/hardware/**": redirect("/producten"),
    "/producten/software": redirect("/producten"),
    "/producten/software/**": redirect("/producten"),
    "/aitje": redirect("/producten"),
    "/aitje-pro": redirect("/producten"),
    "/shop": redirect("/producten"),
    "/roadmap": redirect("/producten"),
    "/academy": redirect("/kenniscentrum"),
  },
  runtimeConfig: {
    resendApiKey: process.env.RESEND_API_KEY,
    resendWebhookSecret: process.env.RESEND_WEBHOOK_SECRET,
    resendInboundEmail: process.env.RESEND_INBOUND_EMAIL || "contact@aitje.com",
    resendFromEmail: process.env.RESEND_FROM_EMAIL || "AITJE <contact@aitje.com>",
    contactToEmail: process.env.CONTACT_TO_EMAIL || "contact@aitje.com",
    public: {
      siteUrl: process.env.NUXT_PUBLIC_SITE_URL || "https://aitje.com",
    },
  },
  vite: {
    plugins: [tailwindcss()],
  },
});
