FROM node:alpine
RUN mkdir ./app
COPY ./app ./app
RUN npm install
WORKDIR ./app
EXPOSE 8893
CMD node index.js