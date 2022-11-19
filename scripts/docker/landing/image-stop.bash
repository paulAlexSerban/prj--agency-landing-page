#!/bin/bash
# makes sure the folder containing the script will be the root folder
cd "$(dirname "$0")" || exit

echo "🟢 STOP DOCKER 🐳  LynxIT Service Container"
docker stop lynxit_service
docker ps