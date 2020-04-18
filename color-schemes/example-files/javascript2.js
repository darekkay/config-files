

const fs = require("fs");

const lines = fs.readFileSync(process.argv[2], "utf-8");
const result = lines
  .split("\n")   // split lines
  .map(line => {
    const tokens = line.split(" ");
    if (line.startsWith("#") || tokens.length < 5) return line;
    tokens[2] = Math.max(3, tokens[2]);
    return tokens.join(" ");
  })
  .filter(line => {

  })
  .join("\n");
console.log("File transformed successfully");


