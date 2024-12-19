# Build stage
FROM node:alpine AS builder
WORKDIR /app
COPY package*.json ./
RUN npm install
COPY . .
RUN npm run build

# Production stage
FROM nginx:alpine
WORKDIR /usr/share/nginx/html/
LABEL coolify.deploymentId=so8cw8404kc80g8w4so8ogow
COPY --from=builder /app/dist .
COPY ./nginx.conf /etc/nginx/conf.d/default.conf 