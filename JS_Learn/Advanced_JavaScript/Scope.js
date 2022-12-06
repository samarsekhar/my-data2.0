let a = 10; // global scope
function outer() {
  // outer function scope
  let b = 20;
  function inner() {
    // inner function scope
    let c = 30;
    console.log(a, b, c);
  }
  inner();
}
outer();
