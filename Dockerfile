FROM node:20-alpine as base

FROM base as deps
#https://github.com/nodejs/docker-node/tree/b4117f9333da4138b03a546ec926ef50a31506c3#nodealpine
RUN apk add --no-cache libc6-compat
WORKDIR /app
COPY package*.json ./
RUN npm ci

FROM base as builder
WORKDIR /app
COPY --from=deps /app/node_modules ./node_modules
COPY . .
RUN npx prisma db push && npx prisma generate
RUN npm run build

FROM base as runner
ENV NODE_ENV=production
WORKDIR /app

RUN addgroup -S -g 1001 nodejs \
    && adduser -S -G nodejs nextjs

COPY --from=builder  /app/node_modules ./node_modules
COPY --from=builder  /app/package.json ./package.json
COPY --from=builder  /app/public ./public
COPY --from=builder --chown=nodejs:nextjs /app/.next ./.next
COPY --from=builder --chown=nodejs:nextjs /app/prisma ./prisma
COPY --from=builder --chown=nodejs:nextjs /app/.env ./.env
COPY --from=builder --chown=nodejs:nextjs /app/next.config.mjs ./next.config.mjs

USER nextjs

EXPOSE 80
ENV PORT 80

CMD npm start
