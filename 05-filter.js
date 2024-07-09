// FILTER method (also for arrays) returns a NEW ARRAY

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

const peopleUnder40 = people.filter((eachPerson) => {
  return eachPerson.age < 40;
});

console.table(peopleUnder40);
console.table(people);
