# JavaScript functions advanced

In this lesson we have learned about advanced JavaScript functions.

We've learned that functions can be stored in variables and passed as arguments to other functions. 

We can also return functions from other functions. (function inception 😄)

We've also learned about the `this` keyword and how it behaves in different contexts. 

## Callback functions

A callback function is a function that is passed as an argument to another function. 

```javascript
function myFunction(callback) {
  // code
  callback();
}
```

Remember Ditto? So ditto is passed as an argument to the `myFunction` function so, no matter what argument we pass to `myFunction`, if it's a function, it will be executed.

## Arrow functions

Arrow functions are a more concise way to write functions in JavaScript. 

```javascript
const myFunction = () => {
  // code
}
``` 

They have to be stored in a variable to be used. If not, they will throw an error. They don't have a name but we can call them using the variable they are stored in.

## Methods
We've seen the most common methods that need a callback function as an argument when we work with arrays.

- `forEach()`
- `map()`
- `filter()`
- `reduce()`
- `sort()`

Check the examples and the portal for more information.