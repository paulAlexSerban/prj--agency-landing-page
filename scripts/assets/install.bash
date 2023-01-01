#!/bin/bash
# makes sure the folder containing the script will be the root folder
cd "$(dirname "$0")" || exit

echo "🛑  Cleaning Assets - LynxIT node_modules"
rm -rfv ../../assets/node_modules

echo "🔧  DEV Install Assets - LynxIt"
npm --prefix ../../assets install
