/* 
------------------------------------------------------------------------------------
 Tutorial: Skipping iterations - continue instruction
------------------------------------------------------------------------------------
*/

/*
Loop optimalization
*/

// Imagine very long array
let arr = [
    'hello',
    42,
    108,
    'number',
    "world"
]

let output = "";

for(let i = 0; i < arr.length; i++){ //Iterates trought whole array
    if(typeof arr[i] != String) //if type of data is wrong for doesn't have to do anything more
        continue; //so it skips to next iteration
    
    /* 
    ...code... 
    */

    output += arr[i].toLowerCase() + " ";
}

console.log(output);
/*
------------------------------------------------------------------------------------
 Challenge: create script that adds every cube of squere roots of numbers form array [2, 'car', 3, "cat", 81, true, 9]
------------------------------------------------------------------------------------
*/