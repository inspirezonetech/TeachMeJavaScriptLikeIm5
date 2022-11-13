/*
-------------------------------------------------------------------------------------------------------------------------------------------------------
for...in loop: The JavaScript for in statement loops through the properties of an Object.

               
Syntax:

for (key in object) {
  // code block to be executed
}
-------------------------------------------------------------------------------------------------------------------------------------------------------
Example:
*/

const person = {fname:"John", lname:"Doe"};

let text = "";
for (let x in person) {
  text = text + " " + person[x];
}
console.log(text); // John Doe

/*
-------------------------------------------------------------------------------------------------------------------------------------------------------

Example explained:

- The for in loop iterates over a person object.
- Each iteration returns a key (x).
- The key is used to access the value of the key.
- The value of the key is person[x].

The JavaScript for in statement can also loop over the properties of an Array.

Syntax:

for (variable in array) {
  // code
}
-------------------------------------------------------------------------------------------------------------------------------------------------------
Example:
*/

const numbers = [45, 4, 9, 16, 25];

let sum = 0;
for (let x in numbers) {
  sum += numbers[x];
}
console.log(sum); // Sum of all the numbers in the array -> 99

/*
-------------------------------------------------------------------------------------------------------------------------------------------------------
Challenge : Display the following output: 
            name => Monica
            class => 7
            age => 12

            Using the following object:
            const student = {
                name: 'Monica',
                class: 7,
                age: 12
            }
            
-------------------------------------------------------------------------------------------------------------------------------------------------------

*/