/** Creates an index for all markdown files in a subfolder */

const { readFileSync, writeFileSync } = require("fs");

const glob = require("glob");
const _ = require("lodash");

const renderDocument = (document) => `

  [[input.files]]
  path = "config-files/${document.path}"
  url = "https://github.com/darekkay/config-files/blob/master/${document.path}"
  title = "${document.title}"
`;

const index = glob
  .sync("**/*.md", { ignore: "node_modules/**" })
  .map((filePath) => {
    const firstLine = readFileSync(filePath, "utf-8").split("\n")[0];
    if (!firstLine.startsWith("# ")) {
      console.log(`Missing headline in ${filePath}`);
      return;
    }
    return {
      path: filePath,
      // url
      title: firstLine.substring(2),
    };
  })
  .filter(Boolean)
  .reduce((acc, document) => acc + renderDocument(document), "")

writeFileSync("stork.toml", index);
