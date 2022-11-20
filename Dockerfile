FROM node:15-alpine AS frontend

ARG REACT_APP_ENABLE_RECAPTCHA
ARG REACT_APP_RECAPTCHA_SITE_KEY

ENV REACT_APP_ENABLE_RECAPTCHA=$REACT_APP_ENABLE_RECAPTCHA
ENV REACT_APP_RECAPTCHA_SITE_KEY=$REACT_APP_RECAPTCHA_SITE_KEY

COPY ./frontend ./frontend
WORKDIR /frontend
RUN npm install
RUN npm run build

# ------------------ #

FROM node:15-alpine AS backend

ARG ENABLE_RECAPTCHA
ARG RECAPTCHA_SITE_KEY
ARG RECAPTCHA_SECRET_KEY

ENV ENABLE_RECAPTCHA=$ENABLE_RECAPTCHA
ENV RECAPTCHA_SITE_KEY=$RECAPTCHA_SITE_KEY
ENV RECAPTCHA_SECRET_KEY=$RECAPTCHA_SECRET_KEY

RUN apk --no-cache add curl

COPY ./backend ./app
COPY --from=frontend /frontend/build ./app/frontend

WORKDIR /app

RUN npm ci --include=dev
RUN npm run build:prod && npm prune
RUN npm install pm2 -g

CMD ["pm2-runtime", "dist/index.js", "-i", "max"]
