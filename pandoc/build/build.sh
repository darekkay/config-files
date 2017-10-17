#!/usr/bin/env bash

# Delete build files
rm -rf ./build
mkdir build

# Copy assets
cp -r assets build/assets

# Build public handout
pandoc \
 handout.md \
 --from markdown_github+yaml_metadata_block \
 --to html \
 --output build/handout.html \
 --standalone \
 --toc \
 --template="$HOME\.pandoc\templates\github.html5" \
 --filter="$HOME\.pandoc\filters\highlight-todos.js" \
 --filter="$HOME\.pandoc\filters\remove-notes.js"

# Build speaker handout (with notes)
pandoc \
 handout.md \
 --from markdown_github+pipe_tables+yaml_metadata_block \
 --to html \
 --output build/handout-dev.html \
 --standalone \
 --toc \
 --template="$HOME\.pandoc\templates\github.html5" \
 --filter="$HOME\.pandoc\filters\highlight-todos.js"

# Build slides

# TODO