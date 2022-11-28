console.log("Reverse Integer!");

let rev = 0;
let num = 123456;
let lastDigit;

while(num != 0) {
    lastDigit = num % 10;
    rev = rev * 10 + lastDigit;
    num = Math.floor(num/10);
}
console.log("Reverse Number:" + rev);

// How to reverse number in javascript
console.log("Reverse Integer!!");
let number = 56789;
let reverse = parseInt(number.toString().split("").reverse().join(""));
console.log(reverse);           //98765


const num1 = 123459;
const reversee = (num1) => parseInt(String(num1)
.split("")
.reverse()
.join(""), 10);
console.log(reversee(num1));         // 954321