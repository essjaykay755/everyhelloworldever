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
LABEL coolify.deploymentId=xo80gw8wwckg4ksco4c444s8
COPY dist .
COPY ./nginx.conf /etc/nginx/conf.d/default.conf 