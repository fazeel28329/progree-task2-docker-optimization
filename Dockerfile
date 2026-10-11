# Stage 1: Install production dependencies
FROM node:22-alpine AS builder

WORKDIR /app

COPY package*.json ./

RUN npm ci --omit=dev && npm cache clean --force


# Stage 2: Create optimized production image
FROM node:22-alpine AS production

ENV NODE_ENV=production
ENV PORT=3000

WORKDIR /app

COPY --from=builder /app/node_modules ./node_modules

COPY package*.json ./
COPY app.js ./

USER node

EXPOSE 3000

CMD ["node", "app.js"]