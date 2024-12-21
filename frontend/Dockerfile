# ---- Base Stage ----
FROM oven/bun:latest as base
WORKDIR /usr/src/app

COPY package.json bun.lockb tsconfig.json vite.config.ts ./
# Add any additional config files needed (e.g., tsconfig.app.json, etc.)
# If you have multiple tsconfig files, they are usually not big, so:
COPY tsconfig.* ./
COPY eslint.config.js ./

RUN bun install

COPY src ./src
COPY public ./public
COPY index.html ./
COPY theme.ts ./

# ---- Build Stage (Production) ----
FROM base as builder
# Ensure "build" script in package.json: "build": "vite build"
RUN bun run build

# ---- Production Stage ----
FROM oven/bun:latest as production
WORKDIR /usr/src/app
USER bun

# Copy built static files
COPY --from=builder /usr/src/app/dist ./dist

ENV NODE_ENV=production
EXPOSE 3001

HEALTHCHECK --interval=30s --timeout=5s --start-period=10s --retries=3 \
    CMD curl -f http://localhost:3001 || exit 1

# Serve static files - if you have a script using bun-serve or similar:
# Add a script: "serve": "bun run bun:serve --port 3001 dist"
CMD ["bun", "run", "bun:serve", "--port", "3001", "dist"]

