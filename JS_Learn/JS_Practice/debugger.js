/**
 *  The debugger for the browser must be activated in order to debug the code.
 *  Built-in debuggers may be switched on and of, requiring the user to report faults.
 *  The remaining section of the code should stop execution before moving on to the text line while debugging.
 */

/**
 * The debugger statement invokes any available debugging functionality, such as setting a breakpoint. If no debugging functionality is available, this statement has no effect.
 */

// Example 1:
// var a = 10;
// debugger;
// for(let i=0; i<=10; i++) {

// }

// Example 2:
function palindromeOrNot() {
  var remainder,
    total = 0,
    actualNumber;
  var input = 77877;
  actualNumber = input;
  while (input > 0) {
    remainder = input % 10;
    total = total * 10 + remainder;
    input = parseInt(input / 10);
  }
  if (actualNumber === total) {
    document.write(actualNumber + ": is palindrome number");
  } else {
    document.write(actualNumber + ": is not palindrome");
  }
}

// Example 3:
let a = 6;
let b = 9;
let c = a * b;
// stops the execution
debugger;
console.log(c);
