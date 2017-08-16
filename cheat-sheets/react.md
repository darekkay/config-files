# React Cheatsheet

## PropTypes

| PropType                           | Description    |
| -----------------------------------|----------------|
| array, bool, func, number, object, string, symbol | primitive types |
| node | anything that can be rendered | numbers, strings, elements or an array (or fragment) containing these types |
| element | a React element |
| instanceOf(Message) | an instance of a class |
| oneOf(['News', 'Photos']) | enum of specific values |
| oneOfType([PropTypes.string, PropTypes.number]) | one of many types |
| arrayOf(PropTypes.number) | an array of a certain type |
| objectOf(PropTypes.number) | an object with property values of a certain type |
| shape({color: PropTypes.string, fontSize: PropTypes.number}) | an object taking on a particular shape |
| any | any data type |

You can chain any of the above with `isRequired` to make sure a warning is shown if the prop isn't provided

 → [Docs](https://facebook.github.io/react/docs/typechecking-with-proptypes.html)
