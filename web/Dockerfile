FROM node:14.15.5-alpine3.13

WORKDIR /usr/src/app

COPY package*.json yarn.lock ./

RUN apk update \
    && chown node:node /usr/src/app \
    && yarn  

USER node

COPY . .

CMD ["yarn", "dev"]