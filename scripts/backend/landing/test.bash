#!/bin/bash
# makes sure the folder containing the script will be the root folder
cd "$(dirname "$0")" || exit

echo "TEST Next.js LynxIT Landing Page"
npm --prefix ../../../backend/landing run test