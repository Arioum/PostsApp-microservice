FROM node:alpine

WORKDIR /app

COPY package.json /app

RUN yarn install

COPY . /app

EXPOSE 5173

CMD [ "yarn", "run", "dev" ]