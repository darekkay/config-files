#!/usr/bin/env node

// Pandoc filter to highlight words starting with "TODO"
// Info: requires pandoc-filter npm package installed locally in this script's folder

const pandoc = require('pandoc-filter');
const { RawInline } = pandoc;

function action(type, value, format, meta) {
  if (type === 'Str' && value.startsWith("TODO")) {
    return RawInline('html', `<span class="todo">${value}</span>`);
    // return Span(['', ['todo'], []], [Str(value)]); // format-agnostic version, which requires a bool flag to prevent an infinite loop, though
  }
}

pandoc.stdio(action);
