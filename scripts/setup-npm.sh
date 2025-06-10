#!/usr/bin/env bash

shopt -s failglob
set -eu -o pipefail

echo "Begin: setup npm"

export NODE_OPTIONS=--max-old-space-size=6144

npm install -g npm@7 --unsafe-perm

echo "Finish: setup npm"
