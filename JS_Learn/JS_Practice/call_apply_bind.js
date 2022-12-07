/**
 *  # call():
 *  It's predefined method in javascript.
 *  This method invokes a method(function) by specifying the owner object.
 */
// Example 1: call()
function sayHello() {
  return "Hello" + this.name;
}
var obj = { name: "Alyx" };
sayHello.call(obj); // output: Hello Alyx

// call() method allows an object use the method(function) of another object.
// Example 2:
var person = {
  age: 27,
  getAge: function() {
    return this.age;
  },
};
var person2 = { age: 56 };
person.getAge.call(person2);
