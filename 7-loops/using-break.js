/* 
------------------------------------------------------------------------------------
 Tutorial: Breaking loops - break instruction
------------------------------------------------------------------------------------
*/
/* Loop optimization
This loop will find first even number. 
Normally it would iterate through whole array, even if first number is divisible by 2.
Break ends a loop, before doing unnecessary work. 
*/
const array = [0, 2, 3, 1, 7] ; //Data to search. Imagine billions of numbers 

let found;  //output variable
for (let i = 0; i<array.length; i++ ){ //loop through whole array
	if(array[i] % 2 == 0){ //when number in array is even
		found = array[i];  //assign this number to output variable
		break; //end the loop
	} 
	/*
	code here wouldn't run after break
	*/
} 
//first instruction after break goes here

/* Escaping endless loop
You can use break to escape endless loop
*/

let output;
while (true) { //endless loop
	// some code
	
	const data = downloadDataFromServer();
	
	if(data != null) {
		output = data;
		break; //escape the loop on data
	} 
	
	// more code
} 
//first instruction after break

/*
------------------------------------------------------------------------------------
 Challenge: in numbers between 0 and 200 find first, that is divisible by 2, 3, 4 and 5 at the same time 
------------------------------------------------------------------------------------
*/