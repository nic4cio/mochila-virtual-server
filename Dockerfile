FROM node:16-alpine

WORKDIR /curadoria-server

COPY package.json yarn.lock ./

RUN yarn install

COPY prisma ./prisma/

COPY . .

RUN npx prisma generate

RUN npx prisma migrate dev --name init

RUN yarn build

RUN yarn install --production 
RUN yarn cache clean

EXPOSE 3333

CMD ["node", "dist/main.js"]
