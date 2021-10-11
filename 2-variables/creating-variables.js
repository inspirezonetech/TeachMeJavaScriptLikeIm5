/* 
------------------------------------------------------------------------------------
 Tutorial: Creating Variables
------------------------------------------------------------------------------------
*/

// 🌟Variables

// 🌟JavaScript programs consist of a series of statements. Each statement performs an elementary operation. By executing many instructions you can finally solve complex tasks. Each statement is written in a line and closed with a semicolon.

// 🌟An elementary statement is the declaration and initialization of a variable. A variable is a container for a value. The statement
let city = 'Porbandar';

// declares a variable with the name city and initializes it with the value 'Porbandar'. The variable is declared with the keyword let. Use the equals sign, the assignment operator, to assign a value to the variable. 

// ✨Note: JavaScript is case-sensitive. city and City are two different variables.

//🌟A variable can be reassigned a new value at any time using the equal sign.
let color = 'red';
color = 'green';
// The variable color is initialized with the value 'red'. Then it receives the value 'green'. 

// 🌟A variable can be assigned the value of another variable.
let name1 = 'Olga';
let name2 = name1;
name1 = 'Clara';
// In the second line, name2 is assigned the value of name1. The variable name2 gets the value 'Olga'. This value is retained by name2, even if name1 receives a new value afterwards.

/*
------------------------------------------------------------------------------------
 Challenge: Which value does x have after execution of the following code?
let x = 'Laurel';
let y = 'Hardy';
let z = y;
y = x;
x = z;
------------------------------------------------------------------------------------
*/
