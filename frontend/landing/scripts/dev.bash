#!/bin/bash
# makes sure the folder containing the script will be the root folder
cd "$(dirname "$0")" || exit

source ../config.env

# Parse command-line options
while getopts ":m:p:e:" opt; do
  case $opt in
  e) ENV="$OPTARG" ;;
  *) usage ;;
  esac
done

# Shift the options and arguments so that $1 refers to the first non-option argument
shift $((OPTIND - 1))

if [[ -z $ENV ]]; then
  ENV=dev
fi

if [[ $ENV == "dev" ]]; then
  export SERVER_ENV=development
elif [[ $ENV == 'prod' ]]; then
  export SERVER_ENV=production
fi

mkdir ../public
rm -rfv ../public/*
cp -rfv ../../../assets/dist/* ../public
npm --prefix .. run dev
