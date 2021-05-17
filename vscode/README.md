# Visual Studio Code

## Extensions

- [Faker](https://marketplace.visualstudio.com/items?itemName=deerawan.vscode-faker): `deerawan.vscode-faker`
- [LinkMe](https://marketplace.visualstudio.com/items?itemName=ragnoroct.linkme): `ragnoroct.linkme`
- [Log File Highlighter](https://marketplace.visualstudio.com/items?itemName=emilast.logfilehighlighter): `emilast.logfilehighlighter`
- [Material Icon Theme](https://marketplace.visualstudio.com/items?itemName=PKief.material-icon-theme): `PKief.material-icon-theme`
- [NumberMonger](https://marketplace.visualstudio.com/items?itemName=softwareape.numbermonger): `softwareape.numbermonger`
- [Open in Browser](https://marketplace.visualstudio.com/items?itemName=techer.open-in-browser): `techer.open-in-browser`
- [Prettier](https://marketplace.visualstudio.com/items?itemName=esbenp.prettier-vscode): `esbenp.prettier-vscode`
- [REST Client](https://marketplace.visualstudio.com/items?itemName=humao.rest-client): `humao.rest-client`
- [TODO Highlight](https://marketplace.visualstudio.com/items?itemName=wayou.vscode-todo-highlight): `wayou.vscode-todo-highlight`
- [VSCode Shellcheck](https://marketplace.visualstudio.com/items?itemName=timonwong.shellcheck): `timonwong.shellcheck`

### Backup / Restore

```bash
# backup
code --list-extensions > "visual-studio-code-extensions.txt"

# restore
< "visual-studio-code-extensions.txt" xargs -L 1 code --install-extension
```

## Features

- [Emmet](https://www.stefanjudis.com/blog/emmet-vs-code-bindings-to-level-up-html-editing/)
- Open a file from file select in [a split view](https://mobile.twitter.com/stefanjudis/status/1334248000156299265) by pressing `Ctrl` + `Enter`
