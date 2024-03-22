FROM node:20-alpine as base
ARG DATABASE_URL

FROM base as deps
RUN apk add --no-cache libc6-compat
WORKDIR /app
COPY package*.json ./
RUN npm ci

FROM base as builder
WORKDIR /app
COPY --from=deps /app/node_modules ./node_modules
COPY . .
RUN touch .env
COPY <<EOF .env
DATABASE_URL="$DATABASE_URL"
EOF
RUN npx prisma generate && npm run build

FROM base as runner
ENV NODE_ENV=production
WORKDIR /app

RUN addgroup -S -g 1001 nodejs \
    && adduser -S -G nodejs nextjs

COPY --from=builder /app/public ./public
COPY --from=builder --chown=nextjs:nodejs /app/.next/standalone ./
COPY --from=builder --chown=nextjs:nodejs /app/.next/static ./.next/static
COPY --from=builder --chown=nodejs:nextjs /app/next.config.mjs ./next.config.mjs
COPY --from=builder --chown=nodejs:nextjs /app/prisma ./prisma
COPY --from=builder --chown=nodejs:nextjs /app/.env ./.env

USER nextjs
EXPOSE 80
ENV PORT 80

CMD HOSTNAME="0.0.0.0" node server.js
