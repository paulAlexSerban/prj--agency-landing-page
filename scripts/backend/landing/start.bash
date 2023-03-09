#!/bin/bash
# makes sure the folder containing the script will be the root folder
cd "$(dirname "$0")" || exit

echo "START Next.js Agency Landing Page"
npm --prefix ../../../backend/landing run start