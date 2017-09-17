#!/usr/bin/env node

// Pandoc filter to remove all notes (```note ```)
// Info: requires pandoc-filter npm package installed locally in this script's folder

const pandoc = require('pandoc-filter');
const { Null } = pandoc;

function action(type, value, format, meta) {
  if (type === 'CodeBlock' && value[0][1][0] === 'note') {
    return Null();
  }
}

pandoc.stdio(action);
