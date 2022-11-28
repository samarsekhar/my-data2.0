console.log("if else Conditional in JS");
// JS includes if-else condiational statements to control the program flow.
// JS includes following of 3 condition - if condition, if-else condition, else if condition

console.log("if condition.......");
// Use if conditional statement if you want to execute something based on some condition,
const mySal = 1000;
const yourSal = 500;
if(mySal > yourSal) {
    console.log("My salary is greater than your salary");
}

var age = 24
if(age>=18) {
    console.log("You are an adult");
}
if(age<18) {
    console.log("You are NOT an adult")
}

//Use comparison operators carefully when writing conditional expression.
// == and === is different.
if(1 == "1") {
    console.log("== operator does not consider types of operands");
}
if(1==="1") {
    console.log("=== operator considers type of operands");
}