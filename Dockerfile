# Base image
FROM node:latest

# Create app directory
WORKDIR /usr/src/app

# Copy package.json and package-lock.json files to container
COPY package*.json ./

# Install app dependencies
RUN npm install

# Copy all other files to container
COPY . .

# Expose port for app
EXPOSE 3000

# Start app
CMD [ "npm", "start" ]
