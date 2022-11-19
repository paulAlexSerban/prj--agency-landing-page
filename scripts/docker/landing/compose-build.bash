#!/bin/bash
# makes sure the folder containing the script will be the root folder
cd "$(dirname "$0")" || exit

echo "🟢  START 🐳  LynxIT Service conatiner "
docker compose --env-file ../../../.env.config \
  --file ../../../docker/lynxit_service.dev.docker-compose.yaml up --detach --build
bash docker-lynxit_service-test.bash