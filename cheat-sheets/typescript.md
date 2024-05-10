# TypeScript

## Destructuring type

```typescript
function({ a, b = "hello" }: { a: number, b?: string }) {}
```

## Prettify type

Makes a complex type more readable.

```typescript
type Prettify<T> = {
  [K in keyof T]: T[K];
} & {};
```

- [The `Prettify` Helper](https://www.totaltypescript.com/concepts/the-prettify-helper)
