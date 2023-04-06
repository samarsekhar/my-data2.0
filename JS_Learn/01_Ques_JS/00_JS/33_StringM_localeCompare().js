// This method returns a number indicating whether a reference string comes before or after or is the same as the given string in sorted order.

var str1 = new String("This is beautiful string");
var index = str1.localeCompare("XYZ");
console.log("localeCompare first : " + index);
// output:- localeCompare first : -1

var index = str1.localeCompare("AbCD ?");
console.log("localeCompare second : " + index);
// output:- localeCompare second : 1
