# Prettier

- To use *global settings*, put `.prettierrc` in a folder above the projects (not the home directory, except if the projects are located inside it).
- The [VSCode plugin](https://marketplace.visualstudio.com/items?itemName=esbenp.prettier-vscode) caches prettier settings, so VSCode has to be restarted after any changes.
- Npm script:

```
  "format": "prettier --write -- \"{src,public}/**/*.{js,jsx,json,css}\""
```
