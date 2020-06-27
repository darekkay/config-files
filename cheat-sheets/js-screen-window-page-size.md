# Screen/Window/Page size

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
