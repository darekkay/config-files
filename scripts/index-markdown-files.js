/** Creates an index for all markdown files in a subfolder */

const fs = require("fs");
const os = require("os");
const glob = require("glob");
const _ = require("lodash");

const documents = glob
  .sync("**/*.md", { ignore: "node_modules/**" })
  .map(file => ({
    file: file,
    headline: fs
      .readFileSync(file, "utf-8")
      .split(os.EOL)[0]
      .substring(2)
  }));

const tree = documents.reduce((acc, document, idx) => {
  const parts = document.file.split("/");
  const fileName = parts.pop();

  const subtree = _.set({}, parts, {
    [`_file${idx}`]: {
      name: fileName,
      path: document.file,
      title: document.headline
    }
  });
  return _.merge(acc, subtree);
}, {});

const render = (object, indent) =>
  Object.entries(object).reduce((acc, [key, value]) => {
    const entry = key.startsWith("_file")
      ? `[${value.title}](${value.path})`
      : key;
    const rest = key.startsWith("_file") ? "" : render(value, indent + 2);
    const spaces = Array(indent).join(" ");
    const bullet = indent === 1 ? "##" : "-";
    return `${acc}${os.EOL}${spaces}${bullet} ${entry}${rest}`;
  }, "");

const index = render(tree, 1);

fs.writeFileSync("README.md", `# Notes${os.EOL}${index}${os.EOL}`)
