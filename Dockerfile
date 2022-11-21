FROM node:15-alpine AS frontend

COPY ./frontend ./frontend
WORKDIR /frontend
RUN npm install
RUN npm run build

# ------------------ #

FROM node:15-alpine AS backend

RUN apk --no-cache add curl

COPY ./backend ./app
COPY --from=frontend /frontend/build ./app/frontend

WORKDIR /app

RUN npm ci --include=dev
RUN npm run build:prod && npm prune
RUN npm install pm2 -g

CMD ["pm2-runtime", "dist/index.js", "-i", "max"]
