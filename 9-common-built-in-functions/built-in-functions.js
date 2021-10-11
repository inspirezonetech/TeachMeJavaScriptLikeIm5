/* 
------------------------------------------------------------------------------------
 Tutorial: JavaScript's common built-in functions 
------------------------------------------------------------------------------------
*/

/* 
------------------------------------------------------------------------------------
 BUILT-IN FUNCTIONS: global, built-in JavaScript functions that can be called on objects 
------------------------------------------------------------------------------------

------------------------------------------------------------------------------------
 COMMON FUNCTIONS: 
 - parseInt() & parseFloat()
 - map()
 - Math.round()
------------------------------------------------------------------------------------

------------------------------------------------------------------------------------
 SYNTAX:
 func() - can be called anywhere, as an input, as a variable, acts like a normal function
------------------------------------------------------------------------------------
*/



/*
------------------------------------------------------------------------------------
 parseInt(): accepts a parameter of a string (of a number) and returns the integer
 parseFloat(): accepts a parameter of a string (of a decimal number) and returns the decimal number
------------------------------------------------------------------------------------
*/

// EXAMPLES

/* here you can see that we can add because integerString is 
converted into a number */
const integerString = "100";
console.log(parseInt(integerString) + 50);

/* the same applies to parseFloat() */
const floatString = "100.5";
console.log(parseFloat(floatString) + 50.5);



/*
------------------------------------------------------------------------------------
 map(): creates a new array from an old array with changes of a function
------------------------------------------------------------------------------------
*/

// EXAMPLE

/* here we iterate through an array of numbers, creating a new array with the original
numbers multiplied by 10 with an arrow function (could also be an arrow function) */
const numbersArray = [4, 500, 3.5];
console.log(numbersArray.map(function(input) {return input * 10}));

/* you can also call a function (reference it without parentheses so that it can be used
as a callback) in map() */
function multiply(input) {
    return input * 10;
}
console.log(numbersArray.map(multiply));



/*
------------------------------------------------------------------------------------
 Math.round(): rounds normamlly a decimal number to the nearest integer (.5 & up goes to next number)
------------------------------------------------------------------------------------
*/
// EXAMPLE

/* notice here how we have to reference the Math object in order to access the round function */
const num = 45.3;
console.log(Math.round(num));



/*
------------------------------------------------------------------------------------
 Challenge: create an array "output" which holds the output of mapping through an array 
 of floating numbers (as strings) and rounds them to the nearest integer

 -> use console.log() on the variable "output" to show the array with rounded numbers
 -> the array of floating numbers as string should be named "input"
 -> the input array can be of any size
 -> use an anonymous function (function() {}) inside of map()
 -> the parameter inside this anonymous function should be "num"
------------------------------------------------------------------------------------
*/