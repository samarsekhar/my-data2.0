// Operator is take a simple expression in JS.
// Operator are 5 types like Arithmethic Op,Comparison Op,Logical Op,Assignment Op,Conditional Op.

// Arithmethic Op
var a = 33;
var b = 10;
var c = "Test";
console.log("a + b = ", a + b);
console.log("a - b = ", a - b);
console.log("a / b = ", a / b);
console.log("a % b = ", a % b);
console.log("a + b + c = ", a + b + c);
console.log("++a = ", ++a);
console.log("--b = ", --b);

// Comparison Op
// == (Equal) Checks if the value of two operands are equal or not, if yes, then the condition becomes true.Ex: (A == B) is not true.
// != (Not Equal) Checks if the value of two operands are equal or not, if the values are not equal, then the condition becomes true.Ex: (A != B) is true.
// > (Greater than) Checks if the value of the left operand is greater than the value of the right operand, if yes, then the condition becomes true. Ex: (A > B) is not true.
// < (Less than) Checks if the value of the left operand is less than the value of the right operand, if yes, then the condition becomes true.Ex: (A < B) is true.
// >= (Greater than or Equal to) Checks if the value of the left operand is greater than or equal to the value of the right operand, if yes, then the condition becomes true.Ex: (A >= B) is not true.
// <= (Less than or Equal to) Checks if the value of the left operand is less than or equal to the value of the right operand, if yes, then the condition becomes true.Ex: (A <= B) is true.
var A = 10;
var B = 20;
console.log("(A==B) => ", A == B);
console.log("(A < B) => ", A < B);
console.log("(A > B) => ", A > B);
console.log("(A != B) => ", A != B);
console.log("(A >= B) => ", A >= B);
console.log("(A <= B) => ", A <= B);

// Logical Operators
// && (Logical AND) If both the operands are non-zero, then the condition becomes true.Ex: (A && B) is true.
// || (Logical OR) If any of the two operands are non-zero, then the condition becomes true.Ex: (A || B) is true.
// ! (Logical NOT) Reverses the logical state of its operand. If a condition is true, then the Logical NOT operator will make it false.Ex: ! (A && B) is false.
var d = true;
var e = false;
console.log("(d && e) => ", d && e);
console.log("(d || e) => ", d || e);
console.log("!(d && e) => ", !(d && e));

// Bitwise Operators
// & (Bitwise AND) It performs a Boolean AND operation on each bit of its integer arguments.Ex: (A & B) is 2.
// | (BitWise OR) It performs a Boolean OR operation on each bit of its integer arguments.Ex: (A | B) is 3.
// ^ (Bitwise XOR) It performs a Boolean exclusive OR operation on each bit of its integer arguments.
//                 Exclusive OR means that either operand one is true or operand two is true, but not both.Ex: (A ^ B) is 1.
// ~ (Bitwise Not) It is a unary operator and operates by reversing all the bits in the operand.Ex: (~B) is -4.
// << (Left Shift) It moves all the bits in its first operand to the left by the number of places specified in the second operand.
//                 New bits are filled with zeros. Shifting a value left by one position is equivalent to multiplying it by 2,
//                 shifting two positions is equivalent to multiplying by 4, and so on.Ex: (A << 1) is 4.
// >> (Right Shift) Binary Right Shift Operator. The left operand’s value is moved right by the number of bits specified by the right operand.
//                 Ex: (A >> 1) is 1.
// >>> (Right shift with Zero) This operator is just like the >> operator, except that the bits shifted in on the left are always zero.Ex: (A >>> 1) is 1.
var f = 2; // Bit presentation 10
var g = 3; // Bit presentation 11
console.log("(f & g ) => ", f & g);
console.log("(f | g ) => ", f | g);
console.log("(f ^ g ) => ", f ^ g);
console.log("( ~g ) => ", ~g);
console.log("(f << g ) => ", f << g);
console.log("(f >> g ) => ", f >> g);

// Assignment Operators
// = (Simple Assignment ) Assigns values from the right side operand to the left side operand
//                        Ex: C = A + B will assign the value of A + B into C
// += (Add and Assignment) It adds the right operand to the left operand and assigns the result to the left operand.
//                        Ex: C += A is equivalent to C = C + A
// −= (Subtract and Assignment) It subtracts the right operand from the left operand and assigns the result to the left operand.
//                        Ex: C -= A is equivalent to C = C - A
// *= (Multiply and Assignment) It multiplies the right operand with the left operand and assigns the result to the left operand.
//                        Ex: C *= A is equivalent to C = C * A
// /= (Divide and Assignment) It divides the left operand with the right operand and assigns the result to the left operand.
//                        Ex: C /= A is equivalent to C = C / A
// %= (Modules and Assignment) It takes modulus using two operands and assigns the result to the left operand.
//                        Ex: C %= A is equivalent to C = C % A

// Conditional Operator(? :)
// ? :(Conditional) If Condition is true ? Then value X : Otherwise Y
// The conditional operator first evaluates an expression for a true or false value and then executes one of the two given statements depending upon the result of the evaluation.
var y = 10;
var z = 20;
console.log("(y > z) ? 100 : 200 =>", y > z ? 100 : 200);
console.log("(y < z) ? 100 : 200 =>", y < z ? 100 : 200);
