#!/bin/bash
# makes sure the folder containing the script will be the root folder
cd "$(dirname "$0")" || exit

echo "🟢 RUN DOCKER 🐳  LynxIT Service Image"
docker run -p 3000:3000 --name lynxit_service -d paulserbandev/lynxit_service
docker ps