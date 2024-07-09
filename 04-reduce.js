// REDUCE IS ANOTHER ARRAY METHOD

// Instead of returning a new array, it returns ONE VALUE

const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

const sumOfNumbers = numbers.reduce((accumulator, currentValue) => {
  return accumulator + currentValue;
}, 9000); // the second argument is the starting accumulator

// with no second argument it starts with the first element in the array

console.log(sumOfNumbers);

const people = [
  { userName: "Mike Shinoda", age: 46 },
  { userName: "Taylor Swift", age: 34 },
  { userName: "Emma Watson", age: 34 },
  { userName: "Elon Musk", age: 52 },
  { userName: "Oprah Winfrey", age: 70 },
  { userName: "Leonardo DiCaprio", age: 49 },
  { userName: "Serena Williams", age: 42 },
  { userName: "Bill Gates", age: 68 },
  { userName: "Ariana Grande", age: 30 },
  { userName: "Chris Hemsworth", age: 40 },
];

// in this case we are working with an array of objects, it's more complex
const averageAge =
  people.reduce((accumulator, currentValue) => {
    return accumulator + currentValue.age;
  }, 0) / people.length; // we need to start with a number so we can sum all the ages

console.log("The average age is: ", averageAge);
