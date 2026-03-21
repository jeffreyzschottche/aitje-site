FROM node:22.12.0-bookworm-slim AS builder

WORKDIR /app

COPY package.json package-lock.json ./

# Force optional native packages to be installed for Nuxt/OXC on Linux.
RUN npm ci --include=optional

COPY . .

ENV NODE_ENV=production

RUN npm run build

FROM node:22.12.0-bookworm-slim AS runner

WORKDIR /app

ENV NODE_ENV=production
ENV HOST=0.0.0.0
ENV PORT=3000

COPY --from=builder /app/.output ./.output
COPY --from=builder /app/public ./public

EXPOSE 3000

CMD ["node", ".output/server/index.mjs"]
