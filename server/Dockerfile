FROM node:14 as production

ARG node_env_var
ENV NODE_ENV=$node_env_var
RUN echo $node_env_var

WORKDIR /usr/src/api

COPY package.json .
COPY yarn.lock .

RUN yarn global add @nestjs/cli

RUN yarn install --production=true

## install NIC s a computer networking utility for reading from and writing to network connections using TCP or UDP.
RUN apt-get -q update && apt-get -qy install netcat

COPY . .

RUN yarn build

CMD ["sh", "-c", "yarn typeorm migration:run && yarn start:prod"]


