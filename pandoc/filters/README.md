# Pandoc Filters

The filters are meant to be used for a Markdown to HTML conversion (but may work for other formats as well). The code is written in JavaScript and requires the [pandoc-filter](https://www.npmjs.com/package/pandoc-filter) npm package to be installed.

- [API](https://hackage.haskell.org/package/pandoc-types-1.19/docs/Text-Pandoc-Definition.html)
- Debugging scripts is possible with `console.error(...)`
- Boilerplate:

```javascript
function action(type, value, format, meta) {
}
```
