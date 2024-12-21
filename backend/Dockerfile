# ---- Base Stage ----
FROM oven/bun:latest as base
WORKDIR /usr/src/app

# Copy only what's needed for dependency install
COPY package.json bun.lockb tsconfig.json ./
# If you have a bunfig.toml or other config files related to bun, copy them here too
# COPY bunfig.toml ./

RUN bun install

# Copy source code
COPY src ./src
COPY connections.json ./
COPY nodemon.json ./

# ---- Build Stage (Production) ----
FROM base as builder
# Ensure you have a "build" script in package.json: "build": "tsc"
RUN bun run build

# ---- Production Stage ----
FROM oven/bun:latest as production
WORKDIR /usr/src/app
USER bun

# Copy compiled output and node_modules
COPY --from=builder /usr/src/app/node_modules ./node_modules
COPY --from=builder /usr/src/app/dist ./dist
COPY --from=builder /usr/src/app/connections.json ./

ENV NODE_ENV=production
EXPOSE 3000

# Healthcheck - define a /health endpoint in your backend
HEALTHCHECK --interval=30s --timeout=5s --start-period=10s --retries=3 \
    CMD curl -f http://localhost:3000/health || exit 1

CMD ["bun", "run", "start"]
