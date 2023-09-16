FROM node:alpine

WORKDIR /app

COPY interpret.js ./
COPY execute.js ./
COPY ./utils ./utils
COPY ./var/rinha/source.rinha.json ./var/rinha/source.rinha.json

CMD [ "node", "execute.js" ]