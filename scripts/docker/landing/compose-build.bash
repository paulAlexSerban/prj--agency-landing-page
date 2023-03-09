#!/bin/bash
# makes sure the folder containing the script will be the root folder
cd "$(dirname "$0")" || exit

echo "🟢  START 🐳  Agency Landing Page Service conatiner "
docker compose --env-file ../../../.env.config \
  --file ../../../docker/agency-landing-page_service.dev.docker-compose.yaml up --detach --build
bash compose-test.bash