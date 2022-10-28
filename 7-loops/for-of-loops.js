/* 
------------------------------------------------------------------------------------
 Tutorial: To understand the working of for...of-loop
------------------------------------------------------------------------------------
*/

// Loops are used to run the same code again and again, each time with different or same values.
// For example, consider that you have to display the numbers from 1 to 100. This would mean that we have to write the below statement 100 times.
console.log(1);
console.log(2);
console.log(3);
console.log(4);
// And it continues forever.
// In order to overcome this problem, we have loops.
/*
-------------------------------------------------------------------------------------------------------------------------------------------------------
for...of loop: The JavaScript for of statement loops through the values of an iterable object.
               It lets you loop over iterable data structures such as Arrays, Strings, Maps, NodeLists, and more
Syntax:

for (variable of iterable) 
{
  // code block to be executed
}

variable - For every iteration the value of the next property is assigned to the variable. Variable can be declared with const, let, or var.

iterable - An object that has iterable properties. Example : Array and String.
-------------------------------------------------------------------------------------------------------------------------------------------------------

Difference between for loop and for...of loop:

                        for                                                                            for...of 

1. for loop is used to iterate through the                                   1. The for...of loop is used to iterate through the 
   index(position of the each element starting from 0) of                       values of an iterable.
   an iterbale.
2. Size of the iterable must be known before-hand.                           2. Size of the iterable need not be known before-hand.
3. They are generally slower and less readable.                              3. They are generally faster and more readable.

-------------------------------------------------------------------------------------------------------------------------------------------------------
*/

// Below code example prints all the car names from the "cars" array using for...of loop

const cars = ["BMW", "Volvo", "Mini"];

for (let car of cars) {
  console.log(car);
}

/*
---------------------------------------------------------------------------------------------------------------------------------------------
 Challenge 1: Display the sum of all numbers in the array -> [1,2,4,6,7] using for...of loop
 Challenge 2: Print each letter of the string -> "JavaScript" on a seperate line using for...of loop
---------------------------------------------------------------------------------------------------------------------------------------------
*/