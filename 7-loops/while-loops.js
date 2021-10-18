/* 
------------------------------------------------------------------------------------
 Tutorial: To understand the working of while-loops
------------------------------------------------------------------------------------
*/
// Loops are used to run the same code again and again, each time with different or same values.
// The while loop loops through the block till it satisfies the condition

// how to print even numbers until 20
var i = 0;  // initialized a variable with zero

// while loop runs from i = 0 to 18 because we want numbers until 20
// if we run it till i=20, we will get 22 as well in the output.

while(i<20){
    console.log(i);
    i = i+2;        // that means this loop will automatically terminate when i becomes 20 since condition is not satisfied
}

/*
------------------------------------------------------------------------------------
 Challenge 1: Display all odd numbers from 1 to 100
 Challenge 2: Find the minimum number in an array by iterating through elements
------------------------------------------------------------------------------------
*/