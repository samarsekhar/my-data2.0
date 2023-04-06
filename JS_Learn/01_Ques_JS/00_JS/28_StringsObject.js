/* The String object is used to represent and manipulate a sequence of characters.
   
   String are useful for holding data that can be represented in text form.
   Some of thr most used operations on string are to check their 'length', to build and concatenate them using the + and += string operators,
   checking for existence or location og substrings with indexOf() method,
   extracting substrings with the substrings() method.
*/

// Character access :- "cat".charAt(1);   // gives value "a"

// String Properties //
// constructor Property :- A constructor returns a reference to the string function that created the instance's prototype.
var str = new String("This is String");
console.log("str.constructor is: " + str.constructor);
//out put: str.constructor is: function String() { [native code] }

// length Property :- This property returns the number of characters in a string.
console.log("str.length is : " + str.length);
// out put: str.length is : 14

// prototype :- This Prototype property allows you to add properties and methods to any object (Number, Boolean, String and Date etc.).
// Note - Prototype is a global property which is available with almost all the objects.
function book(title, author) {
  this.title = title;
  this.author = author;
}
var myBook = new book("ECMAScript 6", "Brendan Eich");
book.prototype.price = null;
myBook.price = 100;
console.log("Book title is : " + myBook.title);
console.log("Book author is : " + myBook.author);
console.log("Bool price is : " + myBook.price);
