# Regular Expressions

## Syntax

### Anchors

|      |                                   |
| ---- | --------------------------------- |
| `^`  | Start of string, or start of line |
| `$`  | End of string, or end of line     |
| `\b` | Word boundary                     |
| `\B` | Not word boundary                 |

### Character classes

|      |                 |
| ---- | --------------- |
| `\s` | White space     |
| `\S` | Not white space |
| `\d` | Digit           |
| `\D` | Not digit       |
| `\w` | Word            |
| `\W` | Not word        |

### Quanti­fiers

|         |           |
| ------- | --------- |
| `*`     | 0 or more |
| `+`     | 1 or more |
| `?`     | 0 or 1    |
| `{3}`   | Exactly 3 |
| `{3,}`  | 3 or more |
| `{3,5}` | 3, 4 or 5 |

Add a `?` to a quantifier to make it ungreedy.

### Group & References

|        |                     |
| ------ | ------------------- |
| `()`   | Group               |
| `\1`   | Reference           |
| `(?:)` | Non-capturing Group |

### Flags

|     |             |
| --- | ----------- |
| `i` | Ignore Case |
| `g` | Global      |
| `m` | Multiline   |

## Examples

### JavaScript

```js
const text = "This is a _42_ text containing _108_ multiple numbers.";
const regex = /_(\d+)_/;
const regexGlobal = /_(\d+)_/g;

// match with global flag returns all occurrences
// returns: [ "42", "108" ]
text.match(regexGlobal);

// match without global flag returns the first occurrence
// returns: 42
text.match(regex)[0];

// looping through all matches using "exec"
// returns: [ '42', '108' ]
const results = [];
let match;
while ((match = regexGlobal.exec(text)) !== null) {
  results.push(match[1]);
}
```

## Resources

- https://cheatography.com/davechild/cheat-sheets/regular-expressions/
- https://regexlearn.com/cheatsheet
