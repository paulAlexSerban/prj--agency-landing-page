#!/bin/bash
# makes sure the folder containing the script will be the root folder
cd "$(dirname "$0")" || exit

echo "📦  Package"
mkdir -p ../../package/landing
cp -rfv ../../backend/landing/out/* ../../package/landing