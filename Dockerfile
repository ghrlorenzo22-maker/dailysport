FROM node:14

# Set the working directory
WORKDIR /app

# Copy package.json and package-lock.json
COPY server/package*.json ./server/

# Install backend dependencies
RUN npm install --prefix server

# Copy the backend source code
COPY server ./server

# Copy the client source code
COPY client ./client

# Install client dependencies
RUN npm install --prefix client

# Build the client application
RUN npm run build --prefix client

# Expose the port the app runs on
EXPOSE 5000

# Start the backend server
CMD ["npm", "start", "--prefix", "server"]