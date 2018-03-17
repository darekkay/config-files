#!/usr/bin/env node

const fs = require("fs");
const readline = require("readline");
const stream = require("stream");

if (process.argv.length < 3) {
  return console.log("Provide a file to transform.");
}

const lines = fs.readFileSync(process.argv[2], "utf-8");

const decrementValue = 2;

const result = lines
  .split("\n")
  .map(line => {
    const tokens = line.split(" ");
    if (line.startsWith("#") || tokens.length < 5) return line;
    tokens[2] = Math.max(1, tokens[2] - decrementValue);
    return tokens.join(" ");
  })
  .join("\n");

fs.writeFile(
  `-${process.argv[2]}`,
  result,
  err => (err ? console.error(err) : console.log("Successfully transformed file."))
);
