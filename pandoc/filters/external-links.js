#!/usr/bin/env node

/**
 * Add target="_blank" and rel="noopener" to all links starting with "http"
 */

const pandoc = require("pandoc-filter");

function action(type, value) {
  if (type === "Link") {
    const url = value[2][0];
    if (url.startsWith("http")) {
      value[0][2] = [...value[0][2], ["target", "_blank"], ["rel", "noopener"]];
    }
  }
}

pandoc.stdio(action);
