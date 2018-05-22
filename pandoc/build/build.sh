#!/usr/bin/env bash

# Settings
TITLE=""
PARSER=gfm

# Delete build files
rm -rf ./build
mkdir build

# Copy assets
cp -r assets build/assets

# Build public handout
pandoc \
 handout.md \
 --from $PARSER \
 --to html \
 --output build/handout.html \
 --metadata title="$TITLE" \
 --standalone \
 --toc \
 --template="$HOME\\.pandoc\\templates\\github.html5" \
 --filter="$HOME\\.pandoc\\filters\\highlight-todos.js" \
 --filter="$HOME\\.pandoc\\filters\\remove-notes.js"

# Build speaker handout (with notes)
pandoc \
 handout.md \
 --from $PARSER \
 --to html \
 --output build/handout-dev.html \
 --metadata title="$TITLE" \
 --standalone \
 --toc \
 --template="$HOME\\.pandoc\\templates\\github.html5" \
 --filter="$HOME\\.pandoc\\filters\\highlight-todos.js"

# Build slides

# TODO
