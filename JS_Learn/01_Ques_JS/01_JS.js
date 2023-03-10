// write function for mean,median and mode of given speed of array.
speed = [99, 86, 87, 88, 111, 86, 103, 87, 94, 78, 77, 85, 86];

// Mean :- Mean is the average of all the numbers in an array.
//         It can be calculated by adding all numbers and dividing by the array size.

//  Mean  //
const mean = (arr) => {
  let total = 0;
  for (let i = 0; i < arr.length; i++) {
    total += arr[i];
  }
  return total / arr.length;
};
console.log(`Data: ${speed}`);
console.log(`Mean: ${mean(speed)}`);

const mean1 = (arr) => {
  let sum = arr.reduce((a, b) => a + b, 0);
  return sum / arr.length;
};
console.log(mean1(speed));

// Median  //
const median = (arr) => {
  const arrSorted = arr.sort((a, b) => a - b);
  return arrSorted.length % 2 === 0
    ? (arrSorted[arrSorted.length / 2 - 1] + arrSorted[arrSorted.length / 2]) /
        2
    : arrSorted[Math.floor(arrSorted.length / 2)];
};
//console.log(`Data Sorted: ${speed.sort((a, b) => a - b)}`);
console.log(`Median: ${median(speed)}`);

// Mode   //
const mode = (arr) => {
  const mode = {};
  let max = 0,
    count = 0;

  for (let i = 0; i < arr.length; i++) {
    const item = arr[i];

    if (mode[item]) {
      mode[item]++;
    } else {
      mode[item] = 1;
    }

    if (count < mode[item]) {
      max = item;
      count = mode[item];
    }
  }
  return max;
};
console.log(`Mode: ${mode(speed)}`);
