FROM node:14 as production

ARG node_env_var
ENV NODE_ENV $node_env_var

WORKDIR /usr/src/app

COPY package.json .
COPY yarn.lock .

RUN yarn install --production=false

COPY . .

RUN yarn build

CMD ["node", "server.js"]


