#!/bin/bash
# makes sure the folder containing the script will be the root folder
cd "$(dirname "$0")" || exit

echo "🛑  Cleaning Assets - LynxIT dist"
rm -rfv ../../assets/dist

echo "🔧  PROCESS Assets - LynxIt"
npm --prefix ../../assets run process
