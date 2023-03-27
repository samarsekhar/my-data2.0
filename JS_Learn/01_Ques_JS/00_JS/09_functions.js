console.log("Example: 1");
function sayHello() {
  console.log("Hello Bachooo");
}

// Calling a function: To invoke a function somewhere later in the script,
console.log("Example: 2");
function againSay() {
  console.log("Hello Baby");
}
againSay();

// Function Parameters:
console.log("Example: 3");
function sayHello(name, age) {
  console.log(name + " is " + age + " years old.");
}
sayHello("Pooja", 28);

// The return Statement:
function concatenate(first, last) {
  var full;
  full = first + last;
  return full;
}
function secondFunction() {
  var result;
  result = concatenate("Pooja", " Hegde");
  console.log(result);
}
secondFunction();
