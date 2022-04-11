/**
 * Creates an Adblock list to filter out domains from search results.
 */

const { readFileSync, writeFileSync } = require("fs");
const { join } = require("path");

let output = `! Title: Search engine domains
! Description: Remove certain domains from Google/DuckDuckGo
! Homepage: https://github.com/darekkay/config-files/
!
! See also: https://gist.github.com/quenhus/6bd2c47e5780f726f0c96c0a2ee762a4

`;

const source = readFileSync(join(__dirname, "search-engines.txt"), "utf-8");
const fileLines = source.split("\n");

// Domains
output += "\n! Domains\n\n";
fileLines.forEach(line => {
  if (line.trim() === "" || line.startsWith("!")) {
    output += `${line}\n`;
  } else {
    output += `*://${line}/*\n`;
  }
});

// DuckDuckGo
output += "\n! DuckDuckGo\n\n";
fileLines.forEach(line => {
  if (line.trim() === "" || line.startsWith("!")) {
    output += `${line}\n`;
  } else {
    output += `duckduckgo.com##[data-domain*="${line}"]\n`;
  }
});

// Google
output += "\n! Google\n\n";
fileLines.forEach(line => {
  if (line.trim() === "" || line.startsWith("!")) {
    output += `${line}\n`;
  } else {
    output += `google.*##.g:has(a[href*="${line}"])\n`;
  }
});

writeFileSync(join(__dirname, "..", "search-engines.txt"), output);
