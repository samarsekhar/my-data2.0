function replacer(match, p1, p2, p3, offset, string) {
  // p1 is non-digits, p2 digits, and p3 non-alphanumerics
  return [p1, p2, p3].join(" - ");
}
const newString = "abc12345#$*%".replace(/([^\d]*)(\d*)([^\w]*)/, replacer);
console.log(newString);
// abc - 12345 - #$*%

const str = "Twas the night before Xmas...";
const newstr = str.replace(/xmas/i, "Christmas");
console.log(newstr);
// Twas the night before Christmas...

const re = /apples/gi;
const string = "Apples are round, and apples are juicy.";
const newstring = string.replace(re, "oranges");
console.log(newstring);
// oranges are round, and oranges are juicy.

// Switching words in a string
const ree = /(\w+)\s(\w+)/;
const strr = "Maria Cruz";
const newstrr = strr.replace(ree, "$2, $1");
console.log(newstrr);
