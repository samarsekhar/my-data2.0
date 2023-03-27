// while loop - The purpose of a while loop is to execute a statement or code block repeatedly as long as an expression is true.
// Once the expression becomes false, the loop terminates.

var count = 0;
console.log("Staring Loop");
while (count < 10) {
  console.log("Current Counr :" + count);
  count++;
}
console.log("Loop stopped!");

// The do...while Loop - "do while loop except that the condition check happens at the end of the loop.
// the loop will always be executed at least once. even if the condition is false.
var count = 0;
console.log("Starting Loop");
do {
  console.log("Current Count: " + count);
  count++;
} while (count < 5);
console.log("Loop stopped!");
