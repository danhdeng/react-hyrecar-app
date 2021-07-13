FROM node:14 as production

ARG NODE_DEV=production
ENV ENV_NODE=${NODE_DEV}

WORKDIR /usr/src/app

COPY package.json .
COPY yarn.lock .

RUN yar install --production=false

COPY . .

RUN yarn build

CMD ["node", "server.js"]


