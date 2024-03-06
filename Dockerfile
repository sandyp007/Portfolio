#Stage 1
FROM node:alpine as builder
WORKDIR /app
COPY package*.json .

RUN npm install
COPY . .
CMD ["npm", "start"]

