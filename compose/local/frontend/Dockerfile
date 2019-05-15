FROM node:9-alpine

WORKDIR /app/frontend
ENV PATH /app/fronted/node_modules/.bin:$PATH
COPY ./frontend/package.json /frontend/package.json
RUN npm install --silent

