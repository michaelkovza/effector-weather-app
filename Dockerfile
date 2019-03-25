FROM mhart/alpine-node:10

WORKDIR /usr/src
COPY package.json ./
RUN yarn install --no-lockfile
COPY . .

RUN yarn run export