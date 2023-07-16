# Use Node 18 as base
FROM node:18 as build

WORKDIR /app

COPY package*.json ./

RUN yarn install

COPY . .

RUN yarn build

FROM nginx:1.17.8-alpine

COPY --from=build /app/dist /usr/share/nginx/html
