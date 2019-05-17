FROM node:10.15.3-alpine

WORKDIR /app/frontend

ENV PATH /app/frontend/node_modules/.bin:$PATH

COPY ./frontend/package.json /frontend/package.json

RUN npm install --silent

