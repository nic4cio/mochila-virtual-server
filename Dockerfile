FROM node:14

WORKDIR /curadoria-server

COPY package*.json ./

RUN yarn install

COPY . .

EXPOSE 3333

CMD [ "yarn","start"]
