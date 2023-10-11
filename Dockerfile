FROM node:16-alpine

WORKDIR /curadoria-server

COPY package.json yarn.lock ./

RUN yarn install

COPY . .

RUN npx prisma generate

RUN yarn build

RUN yarn install --production && yarn cache clean

EXPOSE 3333

CMD ["node", "dist/main.js"]
