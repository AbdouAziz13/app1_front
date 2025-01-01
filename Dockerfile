FROM node:20-alpine


RUN mkdir -p /app-client/

COPY ./package*.json /app-client/

WORKDIR /app-client

COPY . .

RUN npm install

EXPOSE 3000

CMD ["npm", "start"]
