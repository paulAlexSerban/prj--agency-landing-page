#!/bin/bash
# makes sure the folder containing the script will be the root folder
cd "$(dirname "$0")" || exit

echo "🟢 BUILD DOCKER 🐳  Agency Landing Page Service Image"
docker build --file ../../../backend/landing/landing.Dockerfile ../../../backend/landing -t paulserbandev/agency-landing-page_service --build-arg NODE_ENV=production
docker image ls