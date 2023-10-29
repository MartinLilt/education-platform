# Use an official Node.js runtime as a parent image
FROM node:14

WORKDIR /app

# Copy package.json and package-lock.json to the working directory
COPY package*.json ./

RUN npm install

# Copy the rest of your application's source code to the working directory
COPY . .

EXPOSE 3000

CMD ["npm", "start"]
