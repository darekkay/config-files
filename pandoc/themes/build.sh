#!/usr/bin/env bash

# Markdown to HTML
pandoc \
  "./syntax-examples.md" \
  --metadata title="Syntax Highlighter Examples" \
  --from gfm \
  --to html \
  --standalone \
  --highlight-style="tomorrow-night.theme" \
  --template="../templates/darekkay.html5" \
  --output "./syntax-examples.html"
