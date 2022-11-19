#!/bin/bash
# makes sure the folder containing the script will be the root folder
cd "$(dirname "$0")" || exit

echo "🟢 BUILD DOCKER 🐳  LynxIT Service Image"
docker build --file ../../../backend/lynxit_service/lynxit_service.Dockerfile ../../../backend/lynxit_service -t paulserbandev/lynxit_service --build-arg NODE_ENV=production
docker image ls