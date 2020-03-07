FROM node:10

WORKDIR /usr/src/app

RUN npm install

COPY config/docker/dockerfiles/node/start.sh /

RUN chmod +x /start.sh