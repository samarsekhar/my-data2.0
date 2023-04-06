var str1 = new String("This is string one");
var index = str1.indexOf("string");
console.log("indexOf found String : " + index);
// output :- indexOf found String : 8

var index = str1.indexOf("one");
console.log("indexOf found String : " + index);
// output :- index found String : 15

/* This method returns the index within the calling String object of the first occurrence of the specified value, starting the search at fromIndex or -1 if the value is not found.
  
   searchValue - A string representing the value to search for.
   fromIndex - The location within the calling string to start the search from. It can be any interger between 0 and the length of the string. The default is 0.
*/

//
var str2 = new String("This is string one and again string");
var index = str2.lastIndexOf();
console.log("lastIndexOf found string : " + index); // lastIndexOf found string : -1

var index = str2.lastIndexOf("string");
console.log("lastIndexOf found string : " + index); // lastIndexOf found string : 29

var index = str2.lastIndexOf("one");
console.log("lastIndexOf found String : " + index); // lastIndexOf found string : 15
