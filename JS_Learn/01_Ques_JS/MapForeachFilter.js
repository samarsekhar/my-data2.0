// Map - Create a new array by doing something with each item in an array.
console.log("Map.....");
var numbers = [3, 56, 2, 48, 5];
function double(x) {
  return x * 2;
}
const newNumbers = numbers.map(double);
console.log(newNumbers); // [6,112,4,96,10]

console.log("Another Map Method.....");
const newNumbers3 = numbers.map(function(x) {
  return x * 2;
});
console.log(newNumbers3); // [6,112,4,96,10]

// ForEach
console.log("ForEach.....");
var newNumbers2 = [];
function double2(x) {
  newNumbers2.push(x * 2);
}
numbers.forEach(double2);
console.log(newNumbers2); // [6,112,4,96,10]

console.log("Another ForEach Method.....");
var newNumbers4 = [];
numbers.forEach(function(x) {
  newNumbers4.push(x * 2);
});
console.log(newNumbers4); // [6,112,4,96,10]

// Filter - Create a new array by keeping the items that return true.
console.log("Filter.....");
const newNum = numbers.filter(function(num) {
  return num > 10;
});
console.log(newNum); // [ 56, 48 ]

//ForEach
console.log("ForEach....");
const newNum2 = [];
numbers.forEach(function(num) {
  if (num < 10) {
    newNum2.push(num);
  }
});
console.log(newNum2); // [ 3, 2, 5]

// Reduce - Accumulate a value by doing something to each item in an array.
console.log("Reduce.....");
var newNumber = numbers.reduce(function(accumulator, currentNumber) {
  console.log("accumulator = " + accumulator);
  console.log("currentNumber = " + currentNumber);
  return accumulator + currentNumber;
});
console.log(newNumber); // 114

// ForEach
console.log("ForEach.....");
var newNumber = 0;
numbers.forEach(function(currentNumber) {
  newNumber += currentNumber;
});
console.log(newNumber); // 114

// Find - find the first item
console.log("Find....");
const newNumberfind = numbers.find(function(num) {
  return num > 10;
});
console.log(newNumberfind);

// FindIndex = find the index of the fist item that matches.
