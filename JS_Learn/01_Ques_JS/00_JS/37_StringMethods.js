/* slice() */
// This method extracts a section of a string and returns a new string.
var str = "Apples are round, and apples are juicy.";
var sliced = str.slice(3, -2);
console.log(sliced);
// output :- les are round, and apples are juic

/* split() */
// this method splits a String object into an array of strings by separating the string into substrings.
var str2 = "Oranges are round, and oranges are juicy.";
var splitted = str2.split(" ", 3);
console.log(splitted);
// output : Oranges, are, round

/* substr() */
// this method returns the characters in a string beginning at the specified location through the specified number of characters.
var str3 = "Apples are round";
console.log(str3.substr(1, 2)); // pp
console.log(str3.substr(-2, 2)); // nd
console.log(str3.substr(1)); // pples are round
console.log(str3.substr(-20, 2)); // Ap
console.log(str3.substr(15, 2)); // d

/* substring() */
// this method returns a subset of a string object.
var str4 = "Mango are juicy";
console.log(str4.substring(1, 3)); //an
console.log(str4.substring(0, 10)); // Mango are
console.log(str4.substring(5)); // are juicy

/* toLowerCase() */
// This method is used to covert the characters within a string to lowercase while respecting the current locale.it returns the same output as toLowercase.
var str5 = "Mango are Juicy";
console.log(str5.toLocaleLowerCase()); // mango are juicy

/* toUpperCase() */
var str6 = "Mango are Juicy";
console.log(str5.toLocaleUpperCase()); // MANGO ARE JUICY

/* toString() */
// This method returns a string representing the specified object.
var str7 = "Cricket king is Virat";
console.log(str7.toString()); // Cricket king is Virat

/* valueOf */
// This method returns the primitive value of a String object.
var str8 = new String("Hello world");
console.log(str8.valueOf()); // Hello World

/** String HTML Wrappers **/

/* anchor() */
// This method creates an HTML anchor that is used as a hypertexttarget.
var str9 = new String("Hello World");
console.log(str9.anchor("myanchor")); // <a name="myanchor">Hello World</a>

/*  big() - Creates a string to be displayed in a big font as if it were in a <big> tag.
    blink() - Creates a string to blink as if it were in a <blink> tag.
    bold() - Creates a string to be displayed as bold as if it were in a <b> tag.
    fixed() - Causes a string to be displayed in fixed-pitch font as if it were in a <tt> tag.
    fontcolor() - Causes a string to be displayed in the specified color as if it were in a <font color="color"> tag.
    fontsize() - Causes a string to be displayed in the specified font size as if it were in a <font size="size"> tag.
    italics() - Causes a string to be italic, as if it were in an <i> tag.
    link() - Creates an HTML hypertext link that requests another URL.
    small() - Causes a string to be displayed in a small font, as if it were in a <small> tag.
    strike() - Causes a string to be displayed as struck-out text, as if it were in a <strike> tag.
    sub() - Causes a string to be displayed as a subscript, as if it were in a <sub> tag.
    sup() - Causes a string to be displayed as a superscript, as if it were in a <sup> tag
*/
