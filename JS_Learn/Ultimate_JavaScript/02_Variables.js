console.log("Variables");    // Variables
// Variable names are case-sensitive in JS.

var a = 27                   // a contains 27
console.log(a);

a = "Pooja"
console.log(a);


let msg;
console.log(msg);            // undefined
msg = "Hello JavaScript"
console.log(msg);            // Hello JavaScript

// Can declare a varible and assign a value to it in the same line.
// Values can be any datatype such as string , boolean, numeric.

let name = "Alyx"
let num = 100;
let isActive = true;
console.log(name);            // Alyx
console.log(num);             // 100
console.log(isActive);        // true


// multiple variables
let name1 = "Alyxx", num2 = 1000, IsActive = false;
console.log(name1);           // Alyx
console.log(num2);            // 1000
console.log(IsActive);        // false


// Dynamic Typing
// JS is a loosly typed language. It means don't need to sepcify what data type a varible will contain.
// can update the value of any type after initialization. It is also called Dynamic Typing.

let myvariable = 1;           // numeric value
myvariable = "one";           // string value
myvariable = 1.1;             // decimal value
myvariable = true;            // Boolean value
myvariable = null;            // null value
console.log(myvariable);      // null


// Constant Variables 
// Use const keyword to declare a constant variable.
// Constant variables must be declared and initialized at the same time.
// The value of the constant variable can't be changed after initialized them.
// const no = 143;
// no = 243;      

// const namee;
// namee = "Alyx"            // error

// If an object is assigned to a const variable then the underlying value of an object can be changed.
const person = {name: "Alyx"};
person.name = "Kathrine";
//alert(person.name);        // Kathrine
console.log(person.name);    // Kathrine

// Example of Global and Local Variable
let greet = "Hello"          // global variable
function myfunc() {
    let msg = "JavaScript!";
    console.log(greet + msg);   // can access global and local variable
}
myfunc();
console.log(greet);             // can access global variable
console.log(msg);               // error: can't access local variable


// Variable Declaration without var or let keyword.

function myfunction() {
    msg = "Hello Alyx"
}
myfunction()
console.log(msg)               // msg becomes global variable so can be accessed here

