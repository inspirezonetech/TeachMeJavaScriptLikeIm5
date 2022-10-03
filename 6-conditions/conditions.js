/* 
------------------------------------------------------------------------------------
 Tutorial: Conditionals
------------------------------------------------------------------------------------
*/

//Conditional statements control behavior in JavaScript and determine whether or not pieces of code can run.

//There are multiple different types of conditionals in JavaScript including:

//“If” statements: where if a condition is true it is used to specify execution for a block of code.

//“Else” statements: where if the same condition is false it specifies the execution for a block of code.

//“Else if” statements: this specifies a new test if the first condition is false.

//
// If Statement Example
//
// As the most common type of conditional, the if statement only runs if the condition enclosed in parentheses () is truthy.
// A "truthy" a truthy value is a value that is considered true when encountered in a Boolean context. 
// All values are truthy unless they are defined as falsy (i.e., except for false, 0, -0, 0n, "", null, undefined, and NaN).
// a "falsy" value is a value that is considered false when encountered in a Boolean context.

if (10 > 5) {
      console.log("if block");
}

// (10 > 5) is the condition to test, which in this case is true — 10 is greater than 5.
// Output "if block"

//
// Else Statement Example
//

if ("cat" === "dog") {
      console.log("if block");
} else {
      console.log("else block");
}

// "cat" and "dog" are not equal, so the else block runs and the variable outcome gets the value "else block".
// Output "else block"

//
// Else If Statement
//

// You can also extend an if statement with an else if statement, which adds another conditional with its own block.

if (false) {
      console.log("if block");
} else if (true) {
      console.log("first else if block");
} else if (true) {
      console.log("second else if block");
} else {
      console.log("else block");
}

// Output "first else if block"
// You can use multiple if else conditionals, but note that only the first else if block runs. 
// JavaScript skips any remaining conditionals after it runs the first one that passes.

// An else if statement doesn’t need a following else statement to work. 
// If none of the if or else if conditions pass, then JavaScript moves forward and doesn’t run any of the conditional blocks of code.

if (false) {
      console.log("if block");
} else if (false) {
      console.log("else if block");
}


// Ternary Operator
// This operator executes the line after question mark if the given condition is true, else executes the line after colon.
// Useful for creating short condtionals that do not take up much space.

(true) ? (console.log("Ternary true statement")) : (console.log("Ternary false statement"));


// Output undefined



/*
------------------------------------------------------------------------------------
 Challenge: You are given a variable marks. Your task is to print:

- AA if marks is greater than .
- AB if marks is greater than  and less than or equal to .
- BB if marks is greater than  and less than or equal to .
- BC if marks is greater than  and less than or equal to .
- CC if marks is greater than  and less than or equal to .
- CD if marks is greater than  and less than or equal to .
- DD if marks is greater than  and less than or equal to .
- FF if marks is less than or equal to .
------------------------------------------------------------------------------------
*/

var marks = 42;

/* Start Challenge resolution here */
