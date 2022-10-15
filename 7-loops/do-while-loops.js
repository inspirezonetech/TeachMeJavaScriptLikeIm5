/* 
------------------------------------------------------------------------------------
 Tutorial: To understand the working of do...while-loop
------------------------------------------------------------------------------------

1. Loops are used to run the same code again and again, each time with different or same values.
2. The do...while loop loops through the block at least once even if the condition is not satisfied and 
   it continues to loop as long as the condition is satisfied.

Syntax of do...while:


do {
  // loop body
} 
while (condition);


Difference between while and do...while:

                     while                                                                    do...while
1.  The condition is checked before executing the loop body.          1.  The condition is checked after executing the loop body "once".
2.  It controls the execution at the entry of loop body               2.  It controls the execution at the exit of loop body          
    and is hence called an entry-controlled loop.                         and is hence called an exit-controlled loop.  
*/


// How to print even numbers till 30
// This do...while loop runs from i = 0 to 28 because we want numbers until 30
// If we run it till i=30, we will get 32 as well in the output.


var i = 0;                  // Initializing variable i to 0

do{                         // Entering the loop once without checking the condition.
    console.log(i);     
    i = i + 2;              // Updating the variable value at every iteration

}
while(i<30);                // Condition checked at the end of the loop body. This condition means the loop will execute till i becomes 30.  


/* Output

0
2
4
6
8
10
12
14
16
18
20
22
24
26
28

------------------------------------------------------------------------------------
 Challenge 1: Display all odd numbers from 1 to 30 using do...while loop
 Challenge 2: Find the maximum number in an array by iterating through elements using do...while loop
------------------------------------------------------------------------------------
*/