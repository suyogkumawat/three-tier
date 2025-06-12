FROM node:18-alpine as builder
WORKDIR /app

# Only copy package files first for better caching
COPY package*.json ./
RUN npm ci

# Now copy the rest
COPY . .
RUN npm run build

FROM nginx:alpine
COPY --from=builder /app/build /usr/share/nginx/html
