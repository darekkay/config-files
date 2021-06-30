# JavaScript

## Programming terms

- [Optional chaining](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Optional_chaining) (`?.`)

```
obj.val?.prop
obj.val?.[expr]
obj.arr?.[index]
obj.func?.(args)
```

- [Nullish coalescing operator](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Nullish_coalescing_operator) (`??`)

```
null ?? "default"      // "default"
undefined ?? "default" // "default"
"" ?? "default"        // ""
0  ?? "default"        // 0
true ?? "default"      // true
false ?? "default"     // false
```

- [Destructuring assignment](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Destructuring_assignment)

```
const [a, b, ...rest] = [10, 20, 30, 40, 50];

const { a, b } = { a: 10, b: 20 };
```

## window.location

- `https://www.darekkay.com/projects/?filter=JS#2`

```
window.location.origin   → 'https://www.darekkay.com'
               .protocol → 'https:'
               .host     → 'www.darekkay.com'
               .hostname → 'www.darekkay.com'
               .port     → ''
               .pathname → '/projects/'
               .search   → '?filter=JS'
               .hash     → '#2'
               .href     → 'https://www.darekkay.com/projects/?filter=JS#2'
```

- Based on [this source](https://dev.to/samanthaming/window-location-cheatsheet-4edl)

## Screen/Window/Page size

- Full **screen** size

```js
window.screen.width;
window.screen.height;
```

- Available **screen** size (without OS toolbars)

```js
window.screen.availWidth;
window.screen.availHeight;
```

- **Window** outer size

```js
window.outerWidth;
window.outerHeight;
```

- **Window** inner size (with scrollbars)

```js
window.innerWidth;
window.innerHeight;
```

- **Window** inner size (without scrollbars)

```js
document.documentElement.clientWidth;
document.documentElement.clientHeigh;
```

- Web **page** size

```js
document.documentElement.scrollWidth;
document.documentElement.scrollHeight;
```

- Based on [this source](https://dmitripavlutin.com/screen-window-page-sizes/#11-the-screen-size)
