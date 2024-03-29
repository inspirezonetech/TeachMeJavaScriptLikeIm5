/*
-------------------------------------------------------------------------------------
 Tutorial: Ternary Operator 
-------------------------------------------------------------------------------------
*/

// The Ternary operator is way of make a conditional decisions
// Is a simple way of make an if-else block 

// if-else block example 
let age = 17;
let true_case = "You are an adult";
let false_case = "You are not an adult";   

if( age > 18 ){
    console.log(true_case);
} else{
    console.log(false_case);
}

/*** Ternary Operator Syntax:
    condition ?
    "The condition is True" :
    "The condition is false"
***/

// ternary-operator example
// this is exactly the same condition than before with the if-else block but it can be in one line instead of multiple lines
age = 42;
let msg = age > 18 ? true_case: false_case;

console.log(msg);


/*
-------------------------------------------------------------------------------------
 Challenge: ternary-operator challenges

    1. Use the ternary-operator to log a message if number is positive or not
    2. Determine if an array is empty or not
 
-------------------------------------------------------------------------------------
*/
