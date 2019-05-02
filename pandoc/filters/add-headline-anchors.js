#!/usr/bin/env node

/**
 * Add anchor links to headlines
 *
 * Notice: This breaks the Table of Contents
 */

const pandoc = require('pandoc-filter');
const { RawInline } = pandoc;

function action(type, value) {
  if (type === 'Header') {
    const anchor = RawInline('html', `<a href="#${value[1][0]}" class="anchor" aria-hidden="true" tabindex="-1"></a>`);
    value[2] = [anchor, ...value[2]];
  }
}

pandoc.stdio(action);
