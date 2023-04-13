/* The Array object lets you store multiple values in a single variable.
   It stores a fixed-size sequential collection of elements of the same type.
   An array is used to store a collection of data,but it is often more useful to thik of an array as a collection of variables of the same type.
*/

// Array Properties //

// constructor :- Returns a reference to the array function the created the object.
var arr = new Array(10, 20, 30);
console.log("arr.constructor is: " + arr.constructor); // arr.constructor is: function() { [ native code ] }

// index :- The property represents the zero-based index of the match in the string
// input :- This property is only present in arrays created by regular expression matches.

// length :- Reflects the number of elements in an array.
var arr2 = new Array(10, 20, 30);
console.log("arr.length is : " + arr2.length); // arr.length is : 3

// prototype :- The prototype property allows you to add properties and methods to an object.(Number, Boolean, String and Date etc.)
//      note - prototype is a global property which is available with almost all the objects.

// Array Methods //

// concat() :- Returns a new array comprised of this array joined with ohter array(s) and/or values(s).
var alpha = ["a", "b", "c"];
var numeric = [1, 2, 3];
var alphaNumeric = alpha.concat(numeric);
console.log("alphaNumeric : " + alphaNumeric); // alphaNumeric : a,b,c,1,2,3

// every() :- Returns true if every element in this array satisfies the provided testing function.
// callback - function to test for each element.
// thisObject - Object to use as 'this' when executing callback.
/* compatibility - This method is a JS extension to the ECMA-262 standard;
                   as such it may not be present in other implementations of the standard. 
*/
// if (!Array.prototype.every) {
//   Array.prototype.every = function(fun /*, thisp*/) {
//     var len = this.length;
//     if (typeof fun != "function") throw new TypeError();

//     var thisp = arguments[1];
//     for (var i = 0; i < len; i++) {
//       if (i in this && !fun.call(thisp, this[i], i, this)) return false;
//     }
//     return true;
//   };
// }
function isBigEnough(element, index, arrry) {
  return element >= 10;
}
var passed = [12, 5, 8, 130, 44].every(isBigEnough);
console.log("First Test Value : " + passed);

passed = [12, 54, 18, 130, 44].every(isBigEnough);
console.log("Second Test Value : " + passed);

// filter() :- Creates a new array with all of the elements of this array for which the provided filtering function returns true.
// callback - function to test each element of the array.
// thisObject - Object to use as 'this' when executing callback.
function isBigEnough2(element, index, array) {
  return element >= 10;
}
var filtered = [12, 5, 8, 130, 44].filter(isBigEnough2);
console.log("Filtered Value : " + filtered); // Filtered Value : 12,130,44

// forEach() :- Js array forEach() method calls a function for each element in the array.
function printBr(element, index, array) {
  console.log("[" + index + "] is " + element);
}
[12, 5, 8, 130, 44].forEach(printBr); // [0] is 12, [1] is 5, [2] is 8, [3] is 130, [4] is 44

// indexOf() :- Returns the first (least) index of an element within the array equal to the specified value, or -1 if none is found.
var index = [12, 5, 8, 130, 44].indexOf(8);
console.log("index is : " + index); // index is : 2

var index = [12, 5, 8, 130, 44].indexOf(13);
console.log("2nd index is : " + index); // 2nd index is -1
// join() :- joins all elements of an array into a string.
var arr = new Array("First", "Second", "Third");
var str = arr.join();
console.log("str : " + str); // str : First,Second,Third
var str = arr.join(", ");
console.log("str : " + str); // str : First, Second, Third
var str = arr.join(" + ");
console.log("str : " + str); // str : First + Second + Third
// lastIndexOf() :- Returns the last(greatest) index of an element within the array equal to the specified value, or -1 if none is found.

// map() :- Creates a new array with the results of calling a provided function on every element in this array.

// pop() :- Removes the last element from an array and returns that element.

// push() :- Adds one or more elements to the end of an array and returns the new length of the array.

// reduce() :- Apply a function simultaneously against two values of the array (from left-to-right) as to reduce it to a single value.

// reduceRight() :- Apply a function simultaneously against two values of the array (from right-to-left) as to reduce it to a single value.

// reverse() :- Reverses the order of the elements of an array -- the first becomes the last,and the last becomes the first.

// shift() :- Removes the first element from an array and returns that element.

// slice() :- Extracts a section of an array and returns a new array.

// some() :- Returns true if at least one element in this array satisfies the provided testing function.

// toSource() :- Represents the source code of an object.

// sort() :- Sorts the elements of array.

// splice() :- Adds and/or removes elements from an array.

// toString() :- Returns a string representing the array and its elements.

// unshift() :- Adds one or more elements to the front of an array and returns the new length of the array.
