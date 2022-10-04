/*
-------------------------------------------------------------------------------------
 Tutorial: Ternary Operator 
-------------------------------------------------------------------------------------
*/
/* Code here explaining concept with comments to guide */
// The Ternary operator is way of make a conditional decisions
// Is a simple way of make an if-else block 

// if-else block example I
let age = 17;
let true_case = "You are an adult";
let false_case = "You are not an adult";   

if( age > 18 ){
    console.log(true_case);
} else{
    console.log(false_case);
}

/*** Ternary Operator Structure
    condition ?
    "The condition is True" :
    "The condition is false"
***/

// ternary-operator example II ( return value)
age = 42;
let msg = age > 18 ?
          true_case:
          false_case;

console.log(msg);


// ternary-operator example III ( return undefined )
// if the branches of the ternary-operator are not expressions
// the block return undefined 
age = 15;
let x = age > 18 ?
        console.log(true_case) :
        console.log(false_case);
        
console.log(x);



/*
-------------------------------------------------------------------------------------
 Challenge: list challenges to be completed here. minimum of one challenge per tutorial

    1. Use the ternary-operator to log a message if number is positive or not
    2. Determine if an array is empty or not
 
-------------------------------------------------------------------------------------
*/
