#!/bin/bash
set -e

# Project folder location
PROJECT_DIR="C:\Users\User\Projects\matt-s-gardens"

cd $PROJECT_DIR

echo ">>> Pulling latest code from master..."
# git reset --hard
git pull origin master

echo ">>> Installing dependencies..."
npm install

echo ">>> Building project..."
npm run build

echo ">>> Deployment Done! Dist folder is ready and Caddy will serve it."