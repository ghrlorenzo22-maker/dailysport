#!/bin/bash

# This script seeds the MongoDB database with sample data for the Daily sport+ application.

# Load environment variables from .env file
if [ -f ../server/.env ]; then
    export $(cat ../server/.env | xargs)
fi

# Define the MongoDB connection string
MONGO_URI=${MONGO_URI:-"mongodb://localhost:27017/daily_sport"}

# Seed the database
echo "Seeding the database..."

# Run the seed script using Node.js
node ../server/services/seedService.js

echo "Database seeding completed."