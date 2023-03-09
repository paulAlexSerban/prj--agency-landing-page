#!/bin/bash
# makes sure the folder containing the script will be the root folder
cd "$(dirname "$0")" || exit

echo "🛑  Cleaning Backend - Agency Landing Page node_modules"
rm -rfv ../../../backend/landing/node_modules

echo "🔧  DEV Install Backend - LynxIt"
npm --prefix ../../../backend/landing install
