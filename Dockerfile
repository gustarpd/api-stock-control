# Base image
FROM node:latest

# Create app directory
WORKDIR /usr/src/app

# Copy package.json and package-lock.json files to container
COPY package*.json ./

# Install app dependencies
RUN npm install
RUN npm run migration:run
RUN npm run migration:generate
# Copy all other files to container
COPY . .

# Expose port for app
EXPOSE 3000

# Start app
CMD [ "npm", "start" ]
