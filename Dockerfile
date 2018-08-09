FROM node:slim

WORKDIR /app

COPY . /app

RUN    npm config set registry 'https://registry.npm.taobao.org' \
    && npm i --prod

EXPOSE 3000

CMD npm start