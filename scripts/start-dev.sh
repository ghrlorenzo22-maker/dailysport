#!/bin/bash

# Navigate to the server directory
cd ../server

# Install server dependencies
npm install

# Start the backend server
npm run dev &

# Navigate to the client directory
cd ../client

# Install client dependencies
npm install

# Start the frontend development server
npm start

# Wait for both servers to start
wait