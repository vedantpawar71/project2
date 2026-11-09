FROM node:22-alpine

WORKDIR /app

COPY package*.json ./

RUN npm install --omit=dev

COPY . .

Expose 3000

CMD ["node","server.js"]