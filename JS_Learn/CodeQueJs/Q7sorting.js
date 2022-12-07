// Write a program sorting in JS

const arr = [3, 2, 5, 4, 1, 0];
for (let i = 0; i < arr.length; i++) {
  for (let j = i + 1; j < arr.length; j++) {
    if (arr[i] < arr[j]) {
      let temp = arr[i];
      arr[i] = arr[j];
      arr[j] = temp;
    }
  }
}
console.log("Elements of array sorted in ascending order:");
for (let i = 0; i < arr.length; i++) {
  console.log("Elements of array sorted in ascending order", arr[i]);
}
/**
 * 5
 * 4
 * 3
 * 2
 * 1
 * 0
 */
const arr2 = [3, 4, 5, 2, 0, 1];
for (let i = 0; i < arr2.length; i++) {
  for (let j = i + 1; j < arr2.length; j++) {
    if (arr2[i] > arr2[j]) {
      let temp = arr2[i];
      arr2[i] = arr2[j];
      arr2[j] = temp;
    }
  }
}
for (let i = 0; i < arr2.length; i++) {
  console.log(arr2[i]);
}
/**
 * 0
 * 1
 * 2
 * 3
 * 4
 * 5
 */
