const randomNumbers = [
  23, 37, 48, 12, 29, 45, 34, 14, 41, 19, 22, 30, 16, 38, 25, 49, 13, 32, 27,
  21, 1, 2, 5, 56,
];
console.log("BEFORE SORTING: ", randomNumbers);

randomNumbers.sort();

// the original array has been modified
console.log("AFTER SORTING: ", randomNumbers);

const names = [
  "John",
  "Emma",
  "Michael",
  "Sophia",
  "William",
  "Olivia",
  "James",
  "Ava",
  "Benjamin",
  "Isabella",
  "Lucas",
  "Mia",
  "Henry",
  "Charlotte",
  "Alexander",
  "alexander",
  "Amelia",
  "Daniel",
  "Harper",
  "Matthew",
  "Evelyn",
];

names.sort();

console.log(names);

// They are ordered based on  built upon converting the elements into strings, then comparing their sequences of UTF-16 code units values.

// That's probably NOT what we want for our examples...

randomNumbers.sort((oneElement, nextElement) => {
  if (oneElement < nextElement) {
    return -1; // negative number moves the oneElement before the nextElement
  }

  if (oneElement === nextElement) {
    return 0; // 0 doesn't move the elements
  }

  if (oneElement > nextElement) {
    return 1; // positive number moves the oneElement after the nextElement
  }
});

// simplified version:
randomNumbers.sort((oneElement, nextElement) => {
  return oneElement - nextElement;
});

console.log("SORTED NUMBERS: ", randomNumbers);
console.log("REVERSED NUMBERS: ", randomNumbers.reverse());
