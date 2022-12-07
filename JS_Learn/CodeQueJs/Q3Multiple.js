// Write a program for three multiple numbers

function mul(a) {
  return function(b) {
    return function(c) {
      return a * b * c;
    };
  };
}
console.log(mul(2)(4)(6));

// 48

// --------------------------------
// Write a program for following using arrow function
const call = (a) => {
  return (b) => {
    return (c) => {
      return a * b * c;
    };
  };
};
console.log(mul(2)(4)(5));
//40

// console.log("This program add 2,4,6");
function addThreeNumbers(a, b, c) {
  return a * b * c;
}
let c = addThreeNumbers(2, 4, 7);
console.log(c);
// 56
