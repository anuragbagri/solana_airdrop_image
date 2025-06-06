FROM node:20

WORKDIR /src
copy package*.json ./
copy package-lock*.json ./

copy . .

RUN npm install

EXPOSE 5173

CMD ["npm", "run", "dev"]
