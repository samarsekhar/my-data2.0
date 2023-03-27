// DataTypes support these are the type of values that can be represented and manipulated in a programming language.
// There are 2 types of datatypes primitive datatypes and non-primitive datatypes in js.
// These are 7 primitive datatypes in JS:-(SSBBNNU)String,Symbol,Boolean,BigInt,Number,Null,undefined.
// Noo-primitive datatypes are object & array. Object is the complex datatypes in JS.
// JavaScript supports a composite datatype known as object. Objects cover in detail in a separate chapter.

// Variables:
// Variables can be thought of as named containers.Can place data into these containers.
// Variables are declared with the var keyword.
// Var keyword only for declaration or initialization.
var name = "Ali";
var money;
money = 2000;
console.log(name);
console.log(money);

// Global & Local Variables:
// Global Variables - A global variable has global scope which means it can be defined anywhere in Js Code.
// Local Variables - A local variable will be visible only within a function where it is defined.Function parameters are always local to that function.
var myVar = "Global( Declare a global variable)";
function checkScope() {
  let myLet = "Local(Declare a local variable)";
  console.log(myLet);
}
checkScope();
console.log(myVar);
