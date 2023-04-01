FROM node:14 AS development

WORKDIR /src/app

COPY package*.json ./

RUN npm install

COPY . .

EXPOSE 8000

CMD [ "npm", "run" ]
