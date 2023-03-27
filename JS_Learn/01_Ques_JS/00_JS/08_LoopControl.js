// JavaScript provides 'break' and 'continue' statements to used immediately come out of any loop or to start the next iteration of any loop respectively.
// break :- The break statement termiates the current loop, switch, or label, statement and transfers program control to the statement following the terminated statement.
let i = 0;
while (i < 6) {
  if (i === 3) {
    break;
  }
  i = i + 1;
}
console.log(i);
//output: 3
//
var x = 1;
console.log("Entering the loop");
while (x < 20) {
  if (x == 5) {
    break; //breaks out of loop completely
  }
  x = x + 1;
  console.log(x);
}
console.log("Exiting the loop!");
/* output: 
Entering the loop
2
3
4
5
Exiting the loop!
*/

// The continue statement tells the interpreter to immediately start the next interation of the loop and skip the remaining code block.
// Continue: The continue statement terminates exection of the statements in the current iteration of the current or labeled loop, and continues execution of the loop with the next iteration.
var x = 1;
console.log("Entering the loop");
while (x < 10) {
  x = x + 1;
  if (x == 5) {
    continue; // skip rest of the loop body
  }
  console.log(x);
}
console.log("Exiting the loop!");

// A label can be used with 'break' and 'continue' to control the flow more precisely. A label is simply an identifier followed by a colon(:) that is applied to a statement or a block of code.
// Line breaks are not allowed between the "continue" or "break" statement and its label name.
console.log("Entering the loop!");
outerloop: for (let i = 0; i < 5; i++) {
  console.log("Outerloop: " + i);
  innerLoop: for (var j = 0; j < 5; j++) {
    if (j > 3) break;
    if (i == 2) break innerLoop;
    if (i == 4) break outerloop;
    console.log("Innerloop: " + j);
  }
}
console.log("Exiting the loop!");
/* output:-
   Entering the loop!
Outerloop: 0
Innerloop: 0 
Innerloop: 1 
Innerloop: 2 
Innerloop: 3 
Outerloop: 1
Innerloop: 0 
Innerloop: 1 
Innerloop: 2 
Innerloop: 3 
Outerloop: 2
Outerloop: 3
Innerloop: 0 
Innerloop: 1 
Innerloop: 2 
Innerloop: 3 
Outerloop: 4
Exiting the loop!
*/

console.log("Example: 2");
console.log("Entering the loop!");
// This is the label name
outerloop: for (let i = 0; i < 3; i++) {
  console.log("Outerloop: " + i);
  for (let j = 0; j < 5; j++) {
    if (j == 3) {
      continue outerloop;
    }
    console.log("Innerloop: " + j);
  }
}
console.log("Exiting the loop!");
/* output:-
   Entering the loop!
   Outerloop: 0
   Innerloop: 0
   Innerloop: 1
   Innerloop: 2
   Outerloop: 1
   Innerloop: 0
   Innerloop: 1
   Innerloop: 2
   Outerloop: 2
   Innerloop: 0
   Innerloop: 1
   Innerloop: 2
   Exiting the loop!
*/
