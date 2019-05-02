#!/usr/bin/env node

/**
 * Strip all level 1 headlines
 */

const pandoc = require('pandoc-filter');
const { Null } = pandoc;

function action(type, value) {
  if (type === 'Header') {
    const level = value[0];
    if (level === 1) {
      return Null();
    }
  }
}

pandoc.stdio(action);
