/* 
------------------------------------------------------------------------------------
 Tutorial: Operators in JavaScript
------------------------------------------------------------------------------------
*/

/* 
------------------------------------------------------------------------------------
 🌟ASSIGNMENT OPERATOR "=":-

 - The assignment operator is used to assign value that is on the right of the operator to the left.

 🚨THINGS TO NOTICE:- 

 - If there are any calculations/expression to the right of the assignment operator, those are performed/resolved before assigning it to the left of the operator.
------------------------------------------------------------------------------------
*/

// ASSIGNMENT OPERATOR EXAMPLES
let num1 = 6; // assigning 6 to the num1 variable
let num2 = 5; // assigning 5 to the num2 variable

/* 
------------------------------------------------------------------------------------
 🌟ARITHMETIC OPERATORS:-

 - Arithmetic Operators are generally used to perform Arithmetic/Mathematical operations on one or more operands.

 🌟LIST OF ARITHMETIC OPERATORS:-

 1. ADDITION OPERATOR (+): used to add two numbers.
 2. SUBTRACTION OPERATOR (-): used to subtract one number from another.
 3. MULTIPLICATION OPERATOR (*): used to multiply one number with another.
 4. DIVISION OPERATOR (/): used to divide one number by another.
 5. EXPONENTIATION OPERATOR (**): used to raise first operand to the power of second operator.
 6. REMAINDER OPERATOR (%): this operator gives the remainder of the division of two numbers.
 7. INCREMENT OPERATOR (++): used to increment a number by 1.
 8. DECREMENT OPERATOR (--): used to decrement a number by 1.

 🚨THINGS TO NOTICE:-

 - "INCREMENT OPERATOR ++" & "DECREMENT OPERATOR --" only works with values stored in a variable and not the literal value.
    
    For example:- let num = 5;
                  num++; // Valid 
                  5++;   // Not valid

 - Both "increment" and "decrement" operator not just adds or subtracts 1, it also assigns the modified value to the variable onto which these operations are performed.
    
    For example:- let num = 5;
                  num++; // its same as num = num + 1;

 - Addition Operator (+) when used with the string operands, is considered as "Concatenation Operator" because instead of adding values it performs string concatenation i.e joins the strings.
    
    For example:- let num1 = "5"; // assigning a numeric string of 5 in the num1 variable
                  let num2 = "6"; // assigning a numeric string of 6 in the num2 variable
                  console.log(num1 + num2); // will print "56" and not 11
------------------------------------------------------------------------------------
*/

// ARITHMETIC OPERATOR EXAMPLES:-
// (num1 and num2 are the variables declared above in the assignment operator tutorial)

// addition
console.log(num1 + num2); //will print 11
// subtraction
console.log(num1 - num2); //will print 1
// multiplication
console.log(num1 * num2); //will print 30
// division
console.log(num1 / num2); //will print 1.2
// exponentiation
console.log(num1 ** num2); //will print 7776
// remainder
console.log(num1 % num2); //will print 1
// increment
num1++; // num1 = 6 + 1;
console.log(num1); //will print 7
// decrement
num2--; // num2 = 5 - 1;
console.log(num2); //will print 4

/*
------------------------------------------------------------------------------------
 Challenge: list challenges to be completed here. minimum of one challenge per tutorial
------------------------------------------------------------------------------------
*/