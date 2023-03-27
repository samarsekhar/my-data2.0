// if statement - The 'if' statement is the funndamental control statement that allows JS to make decisions and execute statements conditionally.
var age = 20;
if (age > 18) {
  console.log("Qualifies for driving");
}

// if...else statement- The 'if...else' statement is the next form of control statement that allows JavaScript to execute statements in a more controlled way.
var age = 15;
if (age > 18) {
  console.log("Qualifies for driving");
} else {
  console.log("Does not qualify for driving");
}

// if...else...if statement - it is an advanced form of if...else that allows js to make a correct decision out of several conditions.
var book = "economics";
if (book == "history") {
  console.log("History Book");
} else if (book == "maths") {
  console.log("Maths Book");
} else if (book == "economics") {
  console.log("Economics Book");
} else {
  console.log("Wnkown Book");
}

// switch - switch statement which handles exactly this, it does so more efficiently than repeated if...else statements.
var grade = "A";
console.log("Entering switch block");
switch (grade) {
  case "A":
    console.log("Good job");
    break;

  case "B":
    console.log("Pretty good");
    break;

  case "C":
    console.log("Passed");
    break;

  case "D":
    console.log("Not so good");
    break;

  case "F":
    console.log("Failed");
    break;

  default:
    console.log("Unknown grade");
}
console.log("Exiting switch block");
// Break statements play a major role in switch-case statements. "break" statement in Loop Control chapter.

var grade = "A";
console.log("Entering switch block");
switch (grade) {
  case "A":
    console.log("Good job");
  case "B":
    console.log("Pretty good");
  case "C":
    console.log("Passed");
  case "D":
    console.log("Not so good");
  case "F":
    console.log("Failed");
  default:
    console.log("Unknown grade");
}
console.log("Exiting switch block");
