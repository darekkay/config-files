# Programming terms

## JavaScript

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
```

- [Destructuring assignment](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Destructuring_assignment)

```
const [a, b, ...rest] = [10, 20, 30, 40, 50];

const { a, b } = { a: 10, b: 20 };
```
