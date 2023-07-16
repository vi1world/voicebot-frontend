# Use an official Node.js image
FROM node:16

# Set the working directory
WORKDIR /app

# Copy package.json and yarn.lock files
COPY package.json ./
COPY yarn.lock ./

# Install dependencies
RUN yarn --exact

# Copy the rest of your code into the Docker image
COPY . ./

# Build the app
RUN yarn build

# Expose the port your app runs on in live mode
EXPOSE 4173

# Start the app in live mode
CMD [ "yarn", "start" ]
