console.log("Arithmetic Operators");
let a = 10;
let b = 4;
console.log(a+b);          // 14
console.log(a-b);          // 6
console.log(a*b);          // 40
console.log(a/b);          // 2.5
console.log(a**b);         // 10000
console.log(a%b);          // 2
console.log(++a);          // 11
console.log(a++);          // 11
console.log(a);            // 12
console.log(a--);          // 12
console.log(--a);          // 12
console.log(a);            // 10
console.log(--a);          // 9


console.log("Assignment Operators");
let assignment = 1;
assignment += 5                     // same as assignment = assignment +5
console.log("assignment is now = ", assignment);       // 6
assignment -= 5                     // same as assignment = assignment -5
console.log("assignment is now = ", assignment);       // 1
assignment *= 5                     // same as assignment = assignment *5
console.log("assignment is now = ", assignment);       // 5
assignment /= 5                     // same as assignment = assignment /5
console.log("assignment is now = ", assignment);       // 1


console.log("Comparison Operators");
let comp1 = 6;
let comp2 = 7;
console.log(comp1 == comp2);                // false
console.log(comp1 != comp2);                // true
console.log(comp1 === comp2);               // false
console.log(comp1 !== comp2);               // true
console.log(comp1 > comp2);                 // false
console.log(comp1 < comp2);                 // true
console.log(comp1 >= comp2);                // false
console.log(comp1 <= comp2);                // true


console.log("Logical Operators");
let x = 5;
let y = 4;
console.log(x<y && x==5);                   // false
console.log(x>y || x==5);                   // true
console.log(x<y && y==5);                   // false
console.log(x<y || y==5);                   // false
console.log(!false);                        // true
console.log(!true);                         // false


console.log("Ternary Operator");
//   < condition > ? < value1 > : < value2 >;
let s = 10; m = 5;
let sm = s > m ? s : m;                // value of sm would be 10
console.log(sm);                       // 10
let ms = s > m ? m : s;                // value of ms would be 5
console.log(ms);                       // 5



/**
 *      27     +      5      =    32   ------> Result
 *  operands   operator     
 */