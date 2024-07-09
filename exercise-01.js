const people = [
  "Mike Shinoda",
  "Taylor Swift",
  "Emma Watson",
  "Elon Musk",
  "Oprah Winfrey",
  "Leonardo DiCaprio",
  "Serena Williams",
  "Bill Gates",
  "Ariana Grande",
  "Chris Hemsworth",
];

// we need to create a new array with all the names in camelCase

// Iterate over the array

// each part is a string. We need to divide the string

const exampleName = "Elon Musk";

console.log(exampleName.split(" ")[1]);

const firstName = exampleName.split(" ")[0];
const lastName = exampleName.split(" ")[1];

console.log(firstName + lastName);

const fullName = firstName.toLowerCase() + lastName;

console.log(fullName);

function stringToCamel(dittoString) {
  const firstName = dittoString.split(" ")[0];
  const lastName = dittoString.split(" ")[1];

  return firstName.toLowerCase() + lastName;
}

// console.log(stringToCamel("Manolo Perez"));

const resultArray = people.map((eachPerson) => {
  return stringToCamel(eachPerson);
});

// even more simplified
const resultArray2 = people.map(stringToCamel);

console.log(resultArray2);
