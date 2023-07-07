FROM node:14-alpine

RUN mkdir -p /app
WORKDIR /app

COPY package.json /app
COPY . /app

RUN yarn
RUN yarn build
RUN yarn global add serve

CMD ["serve", "-s", "build"]