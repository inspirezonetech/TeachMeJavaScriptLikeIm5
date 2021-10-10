/* 
------------------------------------------------------------------------------------
 Tutorial: To understand the working of for-loops
------------------------------------------------------------------------------------
*/

// Loops are used to run the same code again and again, each time with different or same values.
// For example, consider that you have to display the numbers from 1 to 100. This would mean that we have to write the below statement 100 times.
console.log(1)
console.log(2)
console.log(3)
console.log(4)
// And it continues forever.

// In order to overcome this problem, we have loops.
// for-loop is one of the most used loops.
// The syntax is 
// for(initialization expression; condition; update expression)
//          {
//                 statements;
//          }
// So, to print the numbers from 1 to 100, we use

           for(let i=1;i<=100;i++)
           {
               console.log(i);
           }

// Initially, the value of i is 1. Then it is incremented after the execution and finally when i becomes 101, it violates the 
// test condition of i<=100. So, the loop stops execution.
/*
------------------------------------------------------------------------------------
 Challenge-1: Display all the even numbers till 100.
 Challenge-2: Print the below pattern.
                   ****
                   ***
                   **
                   *
------------------------------------------------------------------------------------
*/
