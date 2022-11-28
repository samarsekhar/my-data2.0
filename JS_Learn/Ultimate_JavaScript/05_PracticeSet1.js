// Q1 - Create a variable of type string and try to add a number to it ?
let a = "Alyx";
let b = 27
console.log(a + b);               // Alyx27

// Q2 - Use typeof operator to find the datatype of string in Q1 ?
console.log(typeof a);         //string
console.log(typeof b);         //number
console.log(typeof (a + b));   //string

// Q3 - Create a const object in JS can you change it to hold a number later ?
const c = {
    name: "Anissa",
    section: 1,
    marks: 9,
    overall: true 
}
console.log(c);               // { name: 'Anissa', section: 1, marks: 9, overall: true }

// Q4 - try to all a new key to the const object in Q3 were you to do it ?
c["bfriend"] = "Sam";
c["name"] = "Meenu";
c["section"] = 3;
c["marks"] = 10;
console.log(c)

