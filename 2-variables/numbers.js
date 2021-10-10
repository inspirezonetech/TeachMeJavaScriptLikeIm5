/* 
------------------------------------------------------------------------------------
 Tutorial: brief description of tutorial content
------------------------------------------------------------------------------------
*/

// The Number object represents numerical date, either integers or floating-point numbers. 
// In general, you do not need to worry about Number objects because the browser automatically converts number literals to instances of the number class.

// The syntax for creating a number object is as follows:
var value = new Number(number);

// In the place of number, if you provide any non-number argument, then the argument cannot be converted into a number, it returns NaN (Not-a-Number).

// List of Properties:
/*
MAX_VALUE         [The largest possible value a number in JavaScript can have]
MIN_VALUE         [The smallest possible value a number in JavaScript can have]
NaN               [Equal to a value that is not a number]
NEGATIVE_INFINITY [A value that is less than MIN_VALUE]
POSITIVE_INFINITY [A value that is greater than MAX_VALUE]
prototype         [A static property of the Number object. Use the prototype property to assign new properties and methods to the Number object in the current document]
constructor       [Returns the function that created this object's instance. By default this is the Number object]
*/

// List of Methods:
/*
toExponential()   [Forces a number to display in exponential notation, even if the number is in the range in which JavaScript normally uses standard notation]
toFixed()         [Formats a number with a specific number of digits to the right of the decimal]
toLocaleString()  [Returns a string value version of the current number in a format that may vary according to a browser's local settings]
toPrecision()     [Defines how many total digits (including digits to the left and right of the decimal) to display of a number]
toString()        [Returns the string representation of the number's value]
valueOf()         [Returns the number's value]
*/

/*
------------------------------------------------------------------------------------
 Challenge 1: Create a number object and print it out in a string representation
------------------------------------------------------------------------------------
*/

var value = new Number(number);
console.log(value.toString());



