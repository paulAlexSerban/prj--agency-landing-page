#!/bin/bash
# makes sure the folder containing the script will be the root folder
cd "$(dirname "$0")" || exit

echo "🟢 RUN DOCKER 🐳  Agency Landing Page Service Image"
docker run -p 3000:3000 --name landing -d paulserbandev/agency-landing-page_service
docker ps