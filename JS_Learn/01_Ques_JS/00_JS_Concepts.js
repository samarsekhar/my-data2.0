// Variables - Variables are containers used to store data.
let gname = "Katrina";
console.log(gname); // katrina

// Data Types(SSBBNNU) - JS supports several data types, including numbers, string, booleans, arrays and objects.
let wname = "Katrina";
console.log(wname);
let age = 32;
console.log(age);
let isMarried = true;
console.log(isMarried);
let hobbies = ["Acting", "Dance", "Gym"];
console.log(hobbies);
let all = {
  wname: "Katrina",
  age: 32,
  isMarried: false,
}; // Object
console.log(all);

// Operators - Operators are used to perform operations on values. Like Arithmetic Op, Assignment Op, Comparison Op, and Logical Op.
let x = 10;
let y = 20;
let sum = x + y;
console.log(sum); //30

// Conditional statements - Conditional statements are used to make decisions based on certain conditions.
let Age = 20;
if (Age < 18) {
  console.log("You are a minor.");
} else if (Age >= 18 && Age <= 60) {
  console.log("You are an adult.");
} else {
  console.log("You are a senior citizen.");
}

// Loops - Loops are used to repeat a certain block of code.
for (let i = 0; i < 5; i++) {
  console.log(i);
} //output - 0 1 2 3 4

// Functions - Functions are blocks of code that can be executed whenever required.
function greet(fname) {
  console.log(`Namaste, ${fname}`);
}
greet("Sam"); // Namaste, Sam

// Arrays - Arrays are used to store a collection of items.
let names = ["Ram", "Laxman", "Sita", "Hanuman"];
for (let i = 0; i < names.length; i++) {
  console.log(names[i]);
} // output - Ram Laxman Sita Hanuman

// Objects - Objects are used to store data in the from of key-value  pairs.
let person = {
  name: "Katrina",
  age: 32,
  isMarried: false,
};
console.log(person.name); // Katrina
console.log(person); // { name: 'Katrina', age: '32', isMarried: false}

//

// DOM manipulation - The Document Object Model(DOM) is a tree-like structure that represents the HTML document. JS can be used to manipulate the DOM.
/*let title = document.getElementById("title");
title.innerHTML = "Hello, World!";
*/

//

// Event Handling - JS provides a way to detect and respond to user-initiated events, such as clicking a button, hovering over an element, or submitting a form,
//                  Uou can use the `addEventListener` method to bind an event handler to an element.
let button = document.getElementById("myButton");
button.addEventListener("click", function() {
  console.log("Button clicked");
});

//

// Error handling - JS provides several way to handle errors, such as try-catch statements, the `throw` keyword, and the `onerrror` event.
//                  The try-catch statement is the most commonly used method for error handling in javascript.
try {
  let x = 10 / 0;
} catch (error) {
  console.log(error);
}

//

// Regular expressions -
