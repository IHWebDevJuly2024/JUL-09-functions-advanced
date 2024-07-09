// CALLBACK FUNCTIONS

const displayUserAndRole = (user, role) => {
  // Template literal
  console.log(`
    The user is: ${user}
    And the role is: ${role}    
    `);
};

displayUserAndRole("Valentina", "career advisor");

// DITTO CAN ALSO BE A FUNCTION!!!

const stopTheAlarm = () => {
  console.log("The alarm has been stopped");
};

const washMyFace = () => {
  console.log("My face is clean");
};

const dressUp = () => {
  console.log("I put my underwear on");
  console.log("I put my shirt on");
  console.log("I put my pants on");
  console.log("I put my shoes on");
  console.log("OH! I forgot the socks");
  console.log("Take the shoes off");
  console.log("I put the socks on");
  console.log("I put the shoes on again");
};

const drinkACoffee = () => {
  console.log("Turn the coffee machine on");
  console.log("Drink my coffee");
};

const openTheLaptop = () => {
  console.log("Open the laptop");
  console.log("Login with my user");
};

// ALL THIS DITTOS ARE CALLBACK FUNCTIONS
const getReadyForCoding = (ditto1, ditto2, ditto3, ditto4, ditto5) => {
  ditto1();
  ditto2();
  ditto3();
  ditto4();
  // in case I want the user to be able to provide only 4 arguments I can do this:
  if (ditto5) {
    ditto5();
  }
};

// Now I'm sending only 4 callback functions and it works
getReadyForCoding(washMyFace, dressUp, drinkACoffee, stopTheAlarm);

const getACoffee = (callback) => {
  callback();
};

getACoffee(() => {
  console.log("HELLO THIS IS THE ANONYMOUS FUNCTION INSIDE THE GET A COFFEE");
});

const students = ["Esteban", "Kim", "Aquiles"];

students.forEach((student) => {
  console.log(`${student} is THE BEST student at Ironhack`);
});

const sayHiToStudent = (nameOfStudent) => {
  console.log(`Hi ${nameOfStudent}!`);
};

students.forEach(sayHiToStudent);

function argumentsFunction() {
  // this works only in function declarations, not in arrow functions
  console.log(arguments);
}

argumentsFunction("dsadsadsa", 23142432, [21, 3432, 432]);
