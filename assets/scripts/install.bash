#!/bin/bash 
# makes sure the folder containing the script will be the root folder
cd "$(dirname "$0")" || exit

source ../config.env
echo "🛑  Cleaning assets/node_modules ..."
rm -rfv ../node_modules

echo "🔧  Installing assets dependencies ..."
npm --prefix .. install