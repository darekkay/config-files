# Regular Expressions

## Anchors

|      |                                                         |
| ---- | ------------------------------------------------------- |
| `^`  | Start of string, or start of line in multi-line pattern |
| `$`  | End of string, or end of line in multi-line pattern     |
| `\b` | Word boundary                                           |
| `\B` | Not word boundary                                       |

## Character classes

|      |                 |
| ---- | --------------- |
| `\s` | White space     |
| `\S` | Not white space |
| `\d` | Digit           |
| `\D` | Not digit       |
| `\w` | Word            |
| `\W` | Not word        |

## Quanti­fiers

|         |           |
| ------- | --------- |
| `*`     | 0 or more |
| `+`     | 1 or more |
| `?`     | 0 or 1    |
| `{3}`   | Exactly 3 |
| `{3,}`  | 3 or more |
| `{3,5}` | 3, 4 or 5 |

Add a `?` to a quantifier to make it ungreedy.

## Resources

- https://cheatography.com/davechild/cheat-sheets/regular-expressions/
