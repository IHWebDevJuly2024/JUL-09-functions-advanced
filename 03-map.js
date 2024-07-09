// MAP METHOD
// method only for arrays

// like the forEach

const africanCities = [
  "Cairo",
  "Lagos",
  "Kinshasa",
  "Nairobi",
  "Addis Ababa",
  "Johannesburg",
  "Cape Town",
  "Casablanca",
  "Accra",
  "Abidjan",
  "Dar es Salaam",
  "Alexandria",
  "Khartoum",
  "Dakar",
  "Luanda",
  "N'Djamena",
  "Nouakchott",
  "Kampala",
  "Maputo",
  "Conakry",
  "Mogadishu",
  "Lusaka",
  "Harare",
  "Tunis",
  "Kigali",
];

const theForeach = africanCities.forEach((eachCity) => {
  console.log(eachCity.toUpperCase());
});
// the forEch returns nothing (undefined)
console.log("THIS IS THE FOREACH: ", theForeach);
// ok, that's cool but... what I want is a new array with all the cities in uppercase

const capitalizedCities = [];

africanCities.forEach((eachCity) => {
  capitalizedCities.push(eachCity.toUpperCase());
});

console.log("THIS IS THE CAPITALIZED CITIES: ", capitalizedCities);

// WOOOW this is super cool BUUUUUUT. There is a method to create a new array already. The MAP method

// let's create a new array, this time in lowercase:
const lowerCasedCities = africanCities.map((eachCity) => {
  // whatever I return here is going to be the value of that element in the array
  return eachCity.toLowerCase();
});

console.log(lowerCasedCities);


