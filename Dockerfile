From node:8.12.0-slim

WORKDIR /server

COPY package.json ./
COPY node_modules ./

COPY . .

EXPOSE $PORT

CMD ["npm", "start"]