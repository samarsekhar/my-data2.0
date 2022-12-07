// Write a program to remove duplicate item from array

const arr = [1, 2, 3, 4, 1, 2];
const b = [];

for (let i = 0; i < arr.length; i++) {
  if (b.indexOf(arr[i]) == -1) {
    b.push(arr[i]);
  }
}
console.log("removed array value", b);

///////////

const arr2 = [1, 2, 3, 4, 1, 2];
const b2 = [];

arr2.filter((dup) => {
  if (b2.indexOf(arr2[dup]) == -1) {
    b2.push(arr2[dup]);
  }
});
console.log("removed array value", b2);

//----------------------------------------

const arr3 = [1, 2, 3, 2, 4, 5, 1];
const a = [];

for (let i = 0; i < arr3.length; i++) {
  if (a.indexOf(arr3[i]) == -1) {
    a.push(arr3[i]);
  }
}
console.log(a);
