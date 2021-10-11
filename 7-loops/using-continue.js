/* 
------------------------------------------------------------------------------------
 Tutorial: Skipping iterations - continue instruction
------------------------------------------------------------------------------------
*/

/* Loop optimalization
Some actions in loop doesn't need to be done every iteration
You can escape loop iteration in middle of it. 

Let's add all strings to make sentence. 
*/

// Imagine very long array
let arr = [
    'hello',
    42,
    108,
    'number',
    "world"
];

let output = ""; //Set temporary variable

for(let i = 0; i < arr.length; i++){ //Iterates trought whole array
    if(typeof arr[i] != String) //If current element isn't string, we can skip processing
		continue; 
    
    /* 
    ...here may be heavy code... 
    */

    output += arr[i].toLowerCase() + " "; //
}

console.log(output); // Will print "hello number world", all nubers are skipped, and processing time is short
/*
------------------------------------------------------------------------------------
 Challenge: create script that adds every cube of squere roots of numbers form array [2, 'car', 3, "cat", 81, true, 9]
------------------------------------------------------------------------------------
*/