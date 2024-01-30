#!/bin/bash
# makes sure the folder containing the script will be the root folder
cd "$(dirname "$0")" || exit

echo " 🛑  🐳  STOP Agency Landing Page containers"
docker compose --env-file ../../../.env.config \
  --file ../../../docker/agency-landing-page_service.dev.docker-compose.yaml \
  down --volumes --rmi all