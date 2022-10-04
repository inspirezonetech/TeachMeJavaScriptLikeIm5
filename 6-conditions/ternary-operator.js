/*
-------------------------------------------------------------------------------------
 Tutorial: Ternary Operator 
-------------------------------------------------------------------------------------
*/
/* Code here explaining concept with comments to guide */
// The Ternary operator is way of make a conditional decisions
// Is a simple way of make an if-else block 

// if-else block example I
let age = 17 

if( age > 18 ){
    console.log("You are an adult")
} else{
    console.log("You are not an adult")
}

// ternary-operator example II
age = 42
age > 18 ?
console.log("You are an adult") :
console.log("You are not an adult")        
         

/*** Ternary Operator Structure
    condition ?
    "The condition is True" :
    "The condition is false"
***/

// ternary-operator example III ( return value)
age = 10
let msg = age > 18 ?
          "You are an adult" :
          "You are not an adult"

console.log(msg)


/*
-------------------------------------------------------------------------------------
 Challenge: list challenges to be completed here. minimum of one challenge per tutorial

    1. Use the ternary-operator to log a message if number is positive or not
    2. Determine if an array is empty or not
 
-------------------------------------------------------------------------------------
*/
