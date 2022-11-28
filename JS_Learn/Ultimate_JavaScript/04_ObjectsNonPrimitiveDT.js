console.log("Non-Primitive Data Type in JS - Objects, Date, Array");

const persons = {
    "Pooja" : true,
    "Kathirine" : false,
    "Sam": 23,
    "Alyx": undefined,
    "Sekhar": "Coder"
}
console.log(persons.Pooja);
console.log(persons.Kathirine);
console.log(persons.Sam);
console.log(persons.Alyx);
console.log(persons.Sekhar);

// Object
// An object holds multiple values in terms of properties and methods.
let person = {
    fname: "Anissa",
    lname: "Kate",
    age: 27,
    country: "Russia"
}
console.log(person);

// Date
// Date object represents date & time including days, months, years, hours, minutes, seconds and milliseconds.
let today = new Date("27 July 2000");
console.log(today);
let tday = new Date(1000);
console.log(tday);

// Array
// An array stores multiple values using special syntax.
let nums = [1, 2, 3, 4,5, 6,];
console.log(nums);
