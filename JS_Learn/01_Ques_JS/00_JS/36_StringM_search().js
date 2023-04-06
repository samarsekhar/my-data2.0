// This method executes the search for a match between a regular expression and this String Object.

// regexp - A regular expression object.if a non-RegExp object obj is passed,it is implicitly converted to a RegExp by using new RegExp(obj).

// if successful The search returns the index of the regular expression inside the string.
var re = /apples/gi;
var str = "Apples are round, and apples are juicy.";

if (str.search(re) == -1) {
  console.log("Does not contain Apples");
} else {
  console.log("Contains Apples");
}

// output: Contains Apples
