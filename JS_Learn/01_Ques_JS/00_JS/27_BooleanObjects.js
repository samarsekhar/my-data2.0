/* The Boolean object represents two values, either "true" or "false".If value parameter is ommitted or is 0, -0, null, false,NaN,undefined, or the empty string(""),
   the object has an initial value of false.
*/

// `Boolean Properties`:-
// `constructor` :- Returns a refernce to the Boolean function that created the object.
//               JavaScript boolean constructor() method returns a refernce to Boolean function that created the instance's prototype.
// Return Value - Returns the function that created this object's instance.
var bool = new Boolean();
console.log("bool.constructor() is : " + bool.constructor);
// output :- bool.constructor() is : function Boolean() { [native code]}

// `prototype` :- The prototype property allows you to add properties and methods to any object(Number,Boolean,String and Date etc.).
//        Note - Prototype is a global property which is available with almost all the objets.
function book(title, author) {
  this.title = title;
  this.author = author;
}
var myBook = new book("JavaScript ECMAScript 6", "Brendan Eich");
book.prototype.price = null;
myBook.price = 100;
console.log("Book title is : " + myBook.title); // Book title is : JavaScript ECMAScript 6
console.log("Book author is : " + myBook.author); // Book author is : Brenden Eich
console.log("Book price is : " + myBook.price); // Book price is : 100

// `Boolean Methods`:-
// `toSource() Method`:- JavaScript boolean toSource() method returns a string representing the source code of thr object.
// Note - This method is not compatible wilh all the browsers.
// Return Value - Return a string representing the source code of the object.
/*<html>
    <head><title>JavaScript toSource() method</title>
    </head>
    <body>
    <script>
    function books(title, publisher, price) {
    this.title = title;
    this.publisher = publisher;
    this.price = price;
   }
   var newBooks = new books("ECMAScript 6", "Brendan Eich", 200);
   document.write(newBooks.toSource()); 
   </script>
   </body>
  <html>

  output:- ({title:"ECMADcript 6", publisher:"Brenden", price:200})
*/

// `toString()` :- This method returns a string of either "true" or "false" depending upon the value of the object.
// Return Value - Returns a string representing the specified Boolean object.
var flag = new Boolean(false);
console.log("flag.toString is : " + flag.toString()); // flag.toString is : false

// `valueOf()` :- JavaScript boolean valueOf() method returns the primitive value of the specified boolean object.
// Return Value - Returns the primitive value of the specified boolean object.
var flagg = new Boolean(false);
console.log("flag.valeOf is : " + flagg.valueOf()); // flag.valueOf is : false
