// Hoisting is the default behaviour of JS where all the variable and function declarations are moved on top.
/**
 *    Declaration moves to top
 *    a = 1;
 *    alert('a =' + a);
 *    var a;
 */
// that irrespective of where the variables and function are declared, they are moved on top of the scope. The scope can be both local and global.

// Example 1:
hoistedVariable = 3;
console.log(hoistedVariable); // 3 even when the variable is declared it
var hoistedVariable;

// Example 2:
hoistedFunction(); // "Hello world!" even when the function is declared after it
function hoistedFunction() {
  console.log("Hello world!");
}

// Example 3:
// Hoisting takes place in the local scope as well
function doSomething() {
  x = 27;
  console.log(x);
  var x;
}
doSomething();
// doSomething(); 27 since the local variable "x" is hoisted inside the local scope.
// Note - Varibale initializations are not hoisted, only variable declarations are hoisted.
/**
 *   var x;
 *   console.log(x);         // "undefined" since the initialization of "x" is not hoisted;
 *   x = 27;
 */
// Note - Can run javascript in strict mode by using "use strict" on top of the code
/**
 *   "use strict";
 *   x = 27;     // Gives an error since "x" is not declared
 *   var x;
 */
