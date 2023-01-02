# Simple Dockerfile to be used to develop locally

ARG NODE_VERSION=14

#------------------------------------------------------------------------------
# Download the dependancies and build
#------------------------------------------------------------------------------
FROM node:${NODE_VERSION}-alpine as front

WORKDIR /usr/src/app/my-app

EXPOSE 3000

CMD yarn install; yarn run dev
#------------------------------------------------------------------------------
