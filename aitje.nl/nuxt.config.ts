// https://nuxt.com/docs/api/configuration/nuxt-config
import tailwindcss from "@tailwindcss/vite";

export default defineNuxtConfig({
  compatibilityDate: '2025-07-15',
  devtools: { enabled: true },
  modules: ['@nuxtjs/sitemap'],
  site: {
    url: process.env.NUXT_PUBLIC_SITE_URL || 'https://aitje.com',
  },
  sitemap: {
    xslColumns: [
      { label: 'URL', width: '65%' },
      { label: 'Last Modified', width: '25%' },
    ],
  },
  app: {
    head: {
      script: [
        {
          async: true,
          src: 'https://www.googletagmanager.com/gtag/js?id=G-Y2N2PJMB0D',
        },
        {
          key: "google-analytics-init",
          innerHTML: "window.dataLayer = window.dataLayer || []; function gtag(){dataLayer.push(arguments);} window.gtag = gtag; gtag('js', new Date()); gtag('config', 'G-Y2N2PJMB0D', { send_page_view: false });",
        },
      ],
    },
  },
  css: ['./app/assets/css/main.css'],
  runtimeConfig: {
    resendApiKey: process.env.RESEND_API_KEY,
    resendFromEmail: process.env.RESEND_FROM_EMAIL || "AITJE Contact <onboarding@resend.dev>",
    contactToEmail: process.env.CONTACT_TO_EMAIL || "info@aitje.nl",
    public: {
      siteUrl: process.env.NUXT_PUBLIC_SITE_URL || "https://aitje.com",
    },
  },
  vite: {
    plugins: [tailwindcss()],
  },
});
