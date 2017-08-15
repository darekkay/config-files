# React Cheatsheet

## PropTypes

 - `PropTypes.array`
 - `PropTypes.bool`
 - `PropTypes.func`
 - `PropTypes.number`
 - `PropTypes.object`
 - `PropTypes.string`
 - `PropTypes.symbol`
 - `PropTypes.node`: anything that can be rendered: numbers, strings, elements or an array (or fragment) containing these types
 - `PropTypes.element`: a React element
 - `PropTypes.instanceOf(Message)`: an instance of a class
 - `PropTypes.oneOf(['News', 'Photos'])`: enum of specific values
 - `PropTypes.oneOfType([PropTypes.string, PropTypes.number])`: one of many types
 - `PropTypes.arrayOf(PropTypes.number)`: an array of a certain type
 - `PropTypes.objectOf(PropTypes.number)`: an object with property values of a certain type
 - `PropTypes.shape({color: PropTypes.string, fontSize: PropTypes.number})`: an object taking on a particular shape
 - `PropTypes.any`: any data type

You can chain any of the above with `isRequired` to make sure a warning is shown if the prop isn't provided

 → [Docs](https://facebook.github.io/react/docs/typechecking-with-proptypes.html)
