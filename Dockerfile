ARG NODE_VERSION=14

#------------------------------------------------------------------------------
# Simple Container to be used to develop locally
#------------------------------------------------------------------------------
FROM node:${NODE_VERSION}-alpine as node_dev

WORKDIR /usr/src/app/my-app

EXPOSE 3000

CMD yarn install; yarn run dev
#------------------------------------------------------------------------------

FROM node:${NODE_VERSION} as builder

WORKDIR /app

COPY . .

RUN yarn install \
  --prefer-offline \
  --frozen-lockfile \
  --non-interactive \
  --production=false

RUN yarn build

RUN rm -rf node_modules && \
  NODE_ENV=production yarn install \
  --prefer-offline \
  --pure-lockfile \
  --non-interactive \
  --production=true

FROM node:${NODE_VERSION} as node_prod

WORKDIR /app

COPY --from=builder /app  .

ENV HOST 0.0.0.0
EXPOSE 3000

CMD [ "yarn", "start" ]
