/**
 *  The "this" keyword refers to the object that the function is a property of.
 *  The value of the "this" keyword will always depend on the object that is invoking the function.
 *  function doSomething() {
 *    console.log(this);
 *  }
 *  doSomething();
 *
 * Note - Observe the line where we are invoking the function.
 *
 *  Since the function is invoked in the global context, the function is a property of thr global object.
 *
 */

// Example 1:
var obj = {
  name: "vivek",
  getName: function() {
    console.log(this.name);
  },
};
obj.getName();

// Example 2:
var object = {
  name: "Pooja",
  getName: function() {
    console.log(this.name);
  },
};
var getName = obj.getName;
var object2 = { name: "Meesa", getName };
object2.getName();

// Example 3:
// var object3 = {
//   address: "Bangalore",
//   getAddress: function() {
//     console.log(this.address);
//   },
// };
// var getAddress = object3.getAddress;
// var object4 = { name: "Pooja" };
// object4.getAddress();             // output: error
// object4 does not have the property "address".
