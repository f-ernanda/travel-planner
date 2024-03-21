FROM node:20-alpine as base

RUN addgroup -S -g 1001 nodejs \
    && adduser -S -G nodejs nextjs

COPY --chown=nodejs:nextjs node_modules node_modules
COPY --chown=nodejs:nextjs package.json package.json
COPY --chown=nodejs:nextjs public public
COPY --chown=nodejs:nextjs .next .next
COPY --chown=nodejs:nextjs prisma prisma
COPY --chown=nodejs:nextjs next.config.mjs next.config.mjs

USER nextjs

EXPOSE 80
ENV PORT 80

CMD npm start
