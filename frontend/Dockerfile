FROM node:lts

ENV PORT 3000

# Create app directory
RUN mkdir -p /usr/src/app/frontend
WORKDIR /usr/src/app/frontend


# Copying source files
COPY . /usr/src/app/frontend


# Installing dependencies
COPY package.json yarn.lock /usr/src/app/frontend/
RUN yarn install


# Building app
RUN yarn build
EXPOSE 3000

# Running the app
CMD "yarn" "dev"