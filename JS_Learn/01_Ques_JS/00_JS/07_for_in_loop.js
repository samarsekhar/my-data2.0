// The for...in loop in jS allows to iterate over all property keys of an object.
// Note: One you get keys,it easily find their corresponding values.

console.log("Example:1");
const student = {
  name: "Monica",
  class: 7,
  age: 12,
};
for (let key in student) {
  //display the properties
  console.log(`${key} => ${student[key]}`);
}

/////
console.log("Example:2 Update Values of properties.");
const salaries = {
  sam: 20000,
  dev: 24000,
  preethi: 28000,
};
for (let i in salaries) {
  // add a currency symbol
  let salary = "INR : " + salaries[i];
  // dispaly the values
  console.log(`${i}: ${salary}`);
}

/////
console.log("Example:3 using for..in loop to iterate over string values");
const string = "Hello World!";
for (let i in string) {
  console.log(string[i]);
}
/* output:-
   H
   e
   l
   l
   o

   W
   o
   r
   l
   d
   !
*/

/////
console.log("Example:4 using for..in with array");
const arr = ["hello", 1, "JavaScript"];
for (let x in arr) {
  console.log(arr[x]);
}
/** output:-
 *  hello
 *  1
 *  JavaScript
 *
 */
