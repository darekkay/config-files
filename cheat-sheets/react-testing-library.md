# React Testing Library

## Resources

- [Official RTL Cheatsheet](https://testing-library.com/docs/react-testing-library/cheatsheet)
- [RTL Jest matchers](https://github.com/testing-library/jest-dom)

## Example

```jsx
import { screen, render, userEvent } from "@testing-library/react";

render(<button>Click me</button>);

const button = screen.getByRole("button", {
  name: "Click me"
});

userEvent.click(button);
```

## Search variants (prefix)

| Prefix         | No Match | 1 Match | 1+ Match | Await? |
| -------------- | -------- | ------- | -------- | ------ |
| **getBy**      | throw    | return  | throw    | No     |
| **findBy**     | throw    | return  | throw    | Yes    |
| **queryBy**    | null     | return  | throw    | No     |
| **getAllBy**   | throw    | array   | array    | No     |
| **findAllBy**  | throw    | array   | array    | Yes    |
| **queryAllBy** | []       | array   | array    | No     |

## Search types (suffix)

| Suffix              | Description                      |
| ------------------- | -------------------------------- |
| **Role**            | aria role                        |
| **LabelText**       | label or aria-label text content |
| **PlaceholderText** | input placeholder value          |
| **Text**            | element text content             |
| **DisplayValue**    | form element current value       |
| **AltText**         | img alt attribute                |
| **Title**           | title attribute or svg title tag |
| **TestId**          | data-testid attribute            |
