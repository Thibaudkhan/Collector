FROM node:lts

WORKDIR /usr/src/app/test
COPY package.json /usr/src/app/test
RUN npm install
COPY . /usr/src/app/test

CMD [ "npm","run", "test" ]