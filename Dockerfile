FROM node:alpine as development

WORKDIR /build

COPY package*.json ./

RUN npm install

COPY . .

RUN npm run build

FROM node:alpine as production

WORKDIR /build

COPY package*.json ./

RUN npm install

COPY . .

RUN npm run build

COPY /dist ./dist

CMD ["node", "dist/main"]