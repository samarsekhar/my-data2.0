// Variables - Variable means anything that can vary.In JS a variable stores data that can be changed later on JavaScript.
//             variable names are case sensitive in JS. You cannot declare a duplicate variables name using 'let' keyword with the same name & case.
//             variables can have the same name if declared with var keyword.

// Declare a Variable - A variables can be declared using var, let and const keywords.
// var - var keyword is used to declare variables since JS was created. It is confusing and error-prone when declared using var.
// let - let keyword removes the confusion and error of var. It is new and recommanded way of declaring variables in JS.
// const - const keyword is declare a constant varibale that cannot be changed once assigned a value.
// let msg; // declared a variale without assigning value.  output is undefined of value.
/*let msg;
 msg = "Hello JavaScript!";
 console.log(msg); */
/* // Example : Varible Declaration and initialization
let name = "Kate";   // Assigned a string value
const number = 43;   // Assigned a Number Value
var isActive = true; // Assigned a Boolean value */
// Variable Scope :- A variables can be declared either global scope and local scope.
// Global Scope - variable declared out of any function are called global variables.
//              - They can be accessed anywhere in the JS code, even inside any function.
// Local Scope - variable declared inside the function are called local variables of that function.
//             - They can only be accessed in the function where they are declared not outside.
/*let greet = "Hello "; // Global Variable
function myFunction() {
  let msg = "JavaScript!"; // Local Varible
  console.log(greet + msg); // can access global and local variable
}
myFunction();
console.log(greet); //  can access global varible
console.log(msg); //  error: its cannot access local variable */

// Operateors - JS includes operators that perform some operation on single & multiple operands(data value) and produce a result.
//            - JS includes various categories of operators: Arthimetic Op, Assignment Op, Logical Op, Conditional Op, Comparison Op.
//            - Ternary operator ? : is a sort form of if-else condition.

// DateTypes - In JS can assign different types of values(data) to a variables. JS includes primitive and non primitive data types are there.
//           - Primitive data types are a set of basic or lowest level of the data values  In JS.
//           - Non primitive data types a structural data types contain some kind of structure with primitive data or complex data types in JS.
/*let a = "Samar";
let b = 24;
let c = true;
let d = BigInt("12345") * BigInt("234");
let e = Symbol("id");
let f = undefined;
let g = null;
let h = {
  a: "Samar",
  b: 23,
};
console.log(a, b, c, d, e, f, g, h);
console.log(typeof a);
console.log(typeof b);
console.log(typeof c);
console.log(typeof d);
console.log(typeof e);
console.log(typeof f);
console.log(typeof g);
console.log(typeof h); */

// Arthimetic Op - Arthimetic operator are used to perform mathematical operations between numeric operands.
// +	Adds two numeric operands.
// -	Subtract right operand from left operand
// *	Multiply two numeric operands.
// /	Divide left operand by right operand.
// %	Modulus operator. Returns remainder of two operands.
// ++	Increment operator. Increase operand value by one.
// --	Decrement operator. Decrease value by one.
/*// let x = 5,
//   y = 15;
// let z = x + y;
// console.log(z); // 20
// z = x - y;
// console.log(z); // -10
// z = x * y;
// console.log(z); // 75
// z = x / y;
// console.log(z); // 0.333333333333333
// z = x % y;
// console.log(z); // 5
// z = ++x;
// console.log(z); // 6
// z = --y;
// console.log(z); // 14
// let x = 5;
// z = x++; // post-increment x++ update in next line
// console.log(z); //5
// console.log(x); //6
// let y = 15;
// console.log(y--);
// console.log(y);
// let i = 20;
// console.log(++i); // pre-increment ++x update in same line */
/*// String Concatenation
// The + operator performs concatenation operation when one of the operands is of string type. 
// let a = 5, b = "Hello ", c = "World!", d = 10;

// a + b; //returns "5Hello "

// b + c; //returns "Hello World!"

// a + d; //returns 15

// b + true; //returns "Hello true"

// c - b; //returns NaN; - operator can only used with numbers */

/*// Comparison Operator - JS provides comparison operator that compare two operands and return a boolean value true or false.
// let a = 5,
//   b = 10,
//   c = "5";
// console.log(a == c); // true // == (equal to)	Compares the equality of two operands without considering type.
// console.log(a === c); // false // === (equal value and type)	Compares equality of two operands with type.
// console.log(a == b); // false
// console.log(a != b); // true // != (not equal to) 	Compares inequality of two operands.
// console.log(a > b); // false // >	Returns a boolean value true if the left-side value is greater than the right-side value; otherwise, returns false.
// console.log(a < b); // true // <	Returns a boolean value true if the left-side value is less than the right-side value; otherwise, returns false.
// console.log(a >= b); // false // >=	Returns a boolean value true if the left-side value is greater than or equal to the right-side value; otherwise, returns false.
// console.log(a <= b); // true // <=	Returns a boolean value true if the left-side value is less than or equal to the right-side value; otherwise, returns false. */

// Logical Operator - In JS the logical operator are uesd to combine two or more conditions.
//                  - && is known as AND opertaor. It check whether two operands are non-zero or not (0, false, undefined, null or "" are considered as zero).
//                  - || is known as OR operator. It check whether any one of the two operands in non-zero or not.
//                  - ! is known a s NOT operator. It reverses the boolean result of the operand(or condition).
/*let a = 5;
let b = 15;
console.log(a != b && a < b); // true
console.log(a > b || a == b); // false
console.log(a < b || a == b); // true
console.log(!(a < b)); // false
console.log(!(a > b)); // true */

// Assignment Operator - JS provides the assignment operators to assign values to variables with less key strokes.
/*let x = 5,
  y = 10;
console.log((x = y)); // 10 // = Assign right operand value to the left operand.
console.log((x += 1)); // 11 // += Sums up left and right operand values and assigns the the result to the left operand.
console.log((x -= 1)); // 10 // -= Subtract right operand value from the left operand value and assign the result to the left operand.
console.log((x *= 5)); // 50 // *= Multiple left and right operand values and assign the result to the left operand.
console.log((x /= 5)); // 10 // /= Divide left operand value by right operand value and assign the result to the left operand.
console.log((x %= 2)); // 0 // %= Get the modulus of left operand divide by right operand and assign resulted modulus to the left operand. */

// Ternary Operator - JS provides a special operator called ternary operator :? that assigns a value to a variable based on some condition.This is the short form of the if else condition.
//                  - (condition ? value1 : value2);
/*let a = 10,
  b = 5;
let c = a > b ? a : b;
let d = a > b ? b : a;
console.log(c);    // 10
console.log(d);    // 5 */
