# Nuxt Minimal Starter

Look at the [Nuxt documentation](https://nuxt.com/docs/getting-started/introduction) to learn more.

## Setup

Make sure to install dependencies:

```bash
# npm
npm install

# pnpm
pnpm install

# yarn
yarn install

# bun
bun install
```

## Development Server

Start the development server on `http://localhost:3000`:

```bash
# npm
npm run dev

# pnpm
pnpm dev

# yarn
yarn dev

# bun
bun run dev
```

## Production

Build the application for production:

```bash
# npm
npm run build

# pnpm
pnpm build

# yarn
yarn build

# bun
bun run build
```

Locally preview production build:

```bash
# npm
npm run preview

# pnpm
pnpm preview

# yarn
yarn preview

# bun
bun run preview
```

Check out the [deployment documentation](https://nuxt.com/docs/getting-started/deployment) for more information.

## English version

The public English site starts at `/en`. The NL/EN navigation toggle preserves the current page, query parameters and anchor. Both languages use the same Vue pages and content.

After editing Dutch copy, run `npm run translate:english` with `DEEPL_KEY` in the environment or the existing `.env`. DeepL translates missing strings into the checked-in English dictionary. Review corrections live in `shared/translations/overrides.en.json`. Run `npm run translations:check` before building. The key is used by the translation script only; website visitors never call DeepL.

See [language implementation notes](../redesign/languages.md) for routes, maintenance and contact-form scope.

## Product demonstrations and source copy

The Assistant and Coder pages use real product screenshots alongside clearly labelled website examples. Media provenance, source prompts and feature coverage are documented in [Assistant media](docs/assistant-page-media.md) and [Coder media](docs/coder-page-media.md). Readable HTML snapshots of the product copy are in [docs/product-copy](docs/product-copy/README.md).

Run `npm run demos:coder` after changing the source examples in `app/content/coder-demos/`. This rebuilds the standalone AURA WebGL scene, the Orbit projectboard and their downloadable source archives. The script uses the existing Three.js/esbuild dependencies and the local `zip` command. Generated examples are committed under `public/demos/coder/`.

## Search and AI-readable content

Prices are maintained in `app/content/pricing.ts`. Published products, services, cases and knowledge articles come from their existing content modules. `app/content/searchCatalog.ts` derives the page inventory automatically; do not add these pages separately to a sitemap or AI index.

Every Nuxt build (including direct `nuxt build`) generates `/llms.txt`, `/llms-full.txt`, their English versions under `/en`, and one Markdown alternative per published page under `/llms/pages`. Content and translation edits refresh these files during local development as well. Disabled products are excluded, and stale generated page snapshots are removed. Do not edit generated public files by hand.

`usePageSeo` emits linked Organization, WebSite and page entities, localized breadcrumbs, FAQ content and the appropriate product/service/article/list data. Prices and introduction conditions use the same current sources as the visible site. New products without a configured installation package do not receive an invented installation offer.

Useful checks:

```bash
npm run seo:generate  # Manual refresh, if needed
npm run seo:check     # Detect stale generated files
npm run seo:test      # Price edits and new/unpublished content in an isolated copy
npm run seo:audit -- --base-url http://127.0.0.1:3000
```

Translate new Dutch copy before production builds; the npm build command checks translation coverage. See [SEO and AI discovery notes](../redesign/seo-ai.md) for scope and limitations.
