FROM node:lts

WORKDIR /app
COPY package.json /app
RUN npm install
COPY . /app
CMD [ "npm","run", "other" ]


#FROM node:lts
#
## Create app directory
#RUN mkdir -p /usr/src/app/server
#WORKDIR /usr/src/app/server
#
## Installing dependencies
#COPY package.json /usr/src/app/server/
#RUN npm install
#
## Copying source files
#COPY . /usr/src/app/server
#
## Building app
#RUN npm install --production
#RUN npm install --save nodemon
#EXPOSE 8080
#
## Running the app
#CMD [ "npm","run", "other" ]
