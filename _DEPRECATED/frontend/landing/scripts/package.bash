#!/bin/bash
# makes sure the folder containing the script will be the root folder
cd "$(dirname "$0")" || exit

source ../config.env

echo -e "📦  Package Frontend NextJS"
mkdir -p ../../../package/landing
cp -rfv ../out/* ../../../package/landing

