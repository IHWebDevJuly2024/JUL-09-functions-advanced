// FUNCTION DECLARATION

function myFunction() {
  console.log("This is my function");
}

// FUNCTION INVOCATION
console.log(typeof myFunction);
myFunction(); // if we don't add the parenthesis the function is not invoked

// FUNCTION EXPRESSION

// this function doesn't have a name and it's stored in a variable
const myFunctionExpression = function () {
  console.log("This is a function expression");
};

myFunctionExpression();

const myArray = [123, 342, 5, 6, 21, 4874, 11];

// anonymous functions are used as arguments for other functions
myArray.forEach(function (ditto) {
  console.log(ditto * 10);
});

// Simpler syntax (arrow function)
myArray.forEach((ditto) => {
  console.log(ditto - 500);
});

// FUNCTION EXPRESSION WITH ARROW FUNCTION
const sayHello = () => {
  console.log("Hello!");
};

sayHello();
