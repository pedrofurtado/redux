FROM node:10

RUN mkdir /app
WORKDIR /app
COPY . .
VOLUME /app

CMD npm install && npm run build
