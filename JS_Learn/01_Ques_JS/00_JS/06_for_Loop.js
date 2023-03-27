// for loop - The 'for' loop is the most compact form of looping.
// 'loop initialization' whare initialize counter to a starting value, the initialization statement is executed before the loop begins.
// 'test statement' which will text if a given condition is true or not.If the condition true, then code executed,otherwise control come out of the loop.
// 'iteration statement' where you can increase or decrease you counter.
var count;
console.log("Starting Loop");
for (count = 0; count < 10; count++) {
  console.log("Current Count: " + count);
}
console.log("Loop stopped!");
/** output:-
 * Starting Loop
Current Count : 0
Current Count : 1
Current Count : 2
Current Count : 3
Current Count : 4
Current Count : 5
Current Count : 6
Current Count : 7
Current Count : 8
Current Count : 9
Loop stopped! 
 */

// The 'for..in' loop used to loop through an objects properties.
// In each iteration, one property from object is assigned to variablename and this loop continues till all the properties of the object are exhausted.
/*var aProperty;
 console.log("Navigator Object Properties");
 for (aProperty in navigator) {
   console.log(aProperty);
 }
 console.log("Exitung from the loop!"); */

const number = [45, 4, 9, 16, 25];
let txt = "";
for (let x in number) {
  txt += number[x];
}
console.log(txt);
//
console.log("Student About...");
const student = {
  name: "Monica",
  class: 10,
  age: 22,
};
for (let key in student) {
  console.log(`${key} => ${student[key]}`);
}
