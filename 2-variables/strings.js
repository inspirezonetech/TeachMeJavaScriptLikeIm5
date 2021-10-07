/* 
------------------------------------------------------------------------------------
 Tutorial: Strings in JavaScript
------------------------------------------------------------------------------------
*/

/*
------------------------------------------------------------------------------------
🌟STRING:-

◽ String is a datatype which consist of zero or more character enclosed in single quotes ('') or double quotes ("");

◽ Basically, it is used to represent series or sequence of characters in text form.
------------------------------------------------------------------------------------
*/


// 🌟DECLARATION:-
let userName = "sourabh"; // declaring a variable "userName" which contains a string value of "sourabh"
console.log(userName); // will print sourabh in the console

// 🌟CHECK TYPE OF VARIABLE WITH "typeof" OPERATOR:-
console.log(typeof userName); // will print string in the console

// 🌟LENGTH PROPERTY: we can find string length using "length" property.
console.log(userName.length); // will print 7 in the console.

// 🌟STRING CONCATENATION: we can use "+" operator with string values to concatenate (join) them in a single string.
console.log("Welcome " + userName); // will print "Welcome sourabh" in the console

// 🌟ACCESSING STRING ENTRIES:-
// We can access string entries (or individual characters of a string) just like we do with arrays i.e using "indexes".
console.log(userName[0]); // will print "s"
console.log(userName[1]); // will print "o"
console.log(userName[2]); // will print "u"

//🌟ACCESS LAST ENTRY: Since index starts from "0", to access last entry we need to subtract 1 from total string length.
console.log(userName[userName.length - 1]); // will print "h"


/*
🌟STRING IMMUTABILITY:-

=> Array are "mutable" in nature i.e we can modify/alter/mutate/change an individual array entry like this-

let numbers = [1, 2, 3, 4, 5]; // declaring an array

⚡BEFORE MUTATION
console.log(numbers); // will print [1, 2, 3, 4, 5]

⚡AFTER MUTATION
numbers[0] = "ONE"; // changing first entry of array i.e "1" to "ONE"
console.log(numbers); // will print ["ONE", 2, 3, 4, 5]


=> But that is not the case with our strings. Strings are "immutable" in nature, we can't modify an individual entry of a string.

let str = "WOW";

⚡BEFORE MUTATION
console.log(str); // will print "WOW"

⚡AFTER MUTATION
str[0] = "N" // changing first entry of string i.e "W" to "N"
console.log(str); // will print "WOW" and not "NOW"

*/

/*
------------------------------------------------------------------------------------
 Challenge: list challenges to be completed here. minimum of one challenge per tutorial
------------------------------------------------------------------------------------
*/