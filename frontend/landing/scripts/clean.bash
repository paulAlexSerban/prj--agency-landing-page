#!/bin/bash
# makes sure the folder containing the script will be the root folder
cd "$(dirname "$0")" || exit

source ../config.env

rm -rfv ../node_modules
rm -rfv ../.next
rm -frv ../out
