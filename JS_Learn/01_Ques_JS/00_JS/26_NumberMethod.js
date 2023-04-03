// The Number Objects Method...
// toExponential() - The method returns a string representing the number object in exponential notation.
// syntax - number.toExponential( [fractionDigits] )
var num = 77.1234;
var val = num.toExponential();
console.log("num.toExponential() is : " + val); // num.toExponential() is : 7.71234e+1

val = num.toExponential(4);
console.log("num.toExponential(4) is : " + val); // num.toExponential(4) is : 7.7123e+1

val = (77.1234).toExponential();
console.log("num.toExponential() is : " + val); // num.toExponential() is : 7.71234e+1

val = (77.1234).toExponential();
console.log("77.toExponential() is : " + val); // 77.toExponential() is : 7.71234e+1

// toFixed() - This method formats a number with a specific number of digits to the right of the decimal.
var num = 177.1234;
console.log("num.toFixed() is : " + num.toFixed()); // 177
console.log("num.toFixed(6) is : " + num.toFixed(6)); // 177.123400
console.log("num.toFixed(1) is : " + num.toFixed(1)); // 177.1
console.log("(1.23e+20).toFixed(2) is : " + (1.23e20).toFixed(2)); // 123000000000000000000/00
console.log("(1.23e-10).toFixed(2) is : " + (1.23e-10).toFixed(2)); // 0.00

// toLocaleString() - This method converts a numbers object into a human readable string representing the number using the locale of the environment.
//      Return Value - Returns a human readable string representing the number using the locale of the environment.
var num = new Number(177.1234);
console.log(num.toLocaleString()); // 177.123

// toPrecision() - This method returns a string representing the number object to the specified precision.
// precision - An interger specifying the number of significant digits.
// Return Value - Returns a string representing a Number object in fixed-point or exponential notation rounded toprecision significant digits.
var num = new Number(7.123456);
console.log(num.toPrecision()); // 7.123456
console.log(num.toPrecision(4)); // 7.123
console.log(num.toPrecision(2)); // 7.1
console.log(num.toPrecision(1)); // 7

// toString() - This method returns a string representing the specified object.The toString() method parses its first argument, and attempts to return a string representation in the specified radix(base).
// Parameter -> radix - An integer between 2 and 36 specifiying the base to use for representing numeric value.
// Return Value - Returns a string representing the specified Number object.
num = new Number(15);
console.log("num.toString() is " + num.toString()); // 15
console.log("num.toString(2) is " + num.toString(2)); // 1111
console.log("num.toString(4) is " + num.toString(4)); // 33

// valueOf() - This method returns the primitive value of the specified number object.
// Return Value - Returns the primitive value of the specified number object.
var num = new Number(15.11234);
console.log("num.valueOf() is " + num.valueOf()); // 15.11234
