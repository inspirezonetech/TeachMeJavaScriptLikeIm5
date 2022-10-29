// New Feature added in ES 6 


// The forEach() method in Javascript calls back  a function for each element in an array .


// The forEach() method is not executed for empty elements.


  // Example :
 
let arr = ['Goutham' , 'Korla' , 'Prabhath' , 'Bogam'];

//  forEach is a function which accepts a function which is required

// and a current item which is also required ,

// index which is optional,

 // array which is optional ,


 // This parameter is optional, it holds the context to be passed as this to be used while executing the callback function. If the context is passed, it will be used like this for each invocation of the callback function, otherwise undefined is used as default.

 //  syntax :

// arr.forEach(callback(element, index, arr), thisValue)



 arr.forEach( function ( item ) {

console.log(item);  //Goutham Korla Prabhath Bogam will be printed

} )
 
 
  arr.forEach( ( item , index  , array )=>{
 
 // item is our current element and index is our current index and is arr is the array we are traversing
 
 
 // Here we can manipulate our array just like in traditional loops
 
 array[index] = ''; // user desired value
 
  } )
