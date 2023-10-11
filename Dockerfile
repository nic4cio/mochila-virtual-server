FROM node:16

WORKDIR /curadoria-server

COPY package*.json ./

RUN yarn install

COPY . .

RUN npx prisma generate
RUN rm -rf ./node_modules
RUN yarn install --production


EXPOSE 3333

CMD ["yarn", "start:prod"]
