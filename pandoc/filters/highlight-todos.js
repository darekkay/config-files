#!/usr/bin/env node

/**
 * Highlight words starting with "TODO"
 */

const pandoc = require('pandoc-filter');
const { RawInline } = pandoc;

function action(type, value) {
  if (type === 'Str' && value.startsWith("TODO")) {
    return RawInline('html', `<span class="todo">${value}</span>`);
  }
}

pandoc.stdio(action);
