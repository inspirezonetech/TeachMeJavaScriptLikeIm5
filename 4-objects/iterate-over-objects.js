/* 
------------------------------------------------------------------------------------
 Tutorial: Javascript Object Iteration
------------------------------------------------------------------------------------
*/

// There are several ways to approach iteration over objects in JS, the for…in loop decidedly the most popular with the widest support among older browsers. The for...in will iterate over every property in the object, as long as the key isn't a Symbol. Take the following:

var testObj = { firstName: 'Jane',
                lastName: 'Doe',
                email: 'jane@janedoe.com', 
                title: 'CEO', 
                age: 45
              };
               
// The for..in loop looks like this:

// for (const prop in testObj) {
//     statement goes here
// }

// 'prop' can be named anything, it is a variable that a property is assigned to in each iteration (ie, firstName, lastName etc). 'testObj' will be the name of the object being iterated over. 

for (const prop in testObj) {
  console.log(`${prop}: ${testObj[prop]}`)
}

//In the above example, we can view the key with 'prop', and the value with 'testObj[prop]'. Expected Output:
// "firstName: Jane"
// "lastName: Doe"
// "email: jane@janedoe.com"
// "title: CEO"
// "age: 45"

//If you want to access a specific property, a conditional can be used:
for (const prop in testObj) {
  if( prop === 'email') {
    console.log(testObj[prop])
  }
} //Expected output: "jane@janedoe.com"



/*
------------------------------------------------------------------------------------
 Challenge 1: Create a new object with multiple properties. Try to access a specific property similar to the example above.
------------------------------------------------------------------------------------
/*

/*
------------------------------------------------------------------------------------
 Challenge 2: Take the following objects *within* the 'people' object. Knowing what you know about accessing object properties and iterating over an object using the method above, how would you access and console.log each email address?
 
------------------------------------------------------------------------------------
*/
var people = {
              id1: { 
               firstName: 'Jane',
               lastName: 'Doe',
               email: 'jane@janedoe.com', 
               title: 'CEO', 
               age: 45},
              id2: {
               firstName: 'John',
               lastName: 'Smith',
               email: 'john@johnsmith.com', 
               title: 'Director', 
               age: 36         
              }
};
//Expected Output: 
//"jane@janedoe.com"
//"john@johnsmith.com" 

//Hint: people.id1.email or people.['id1']['email'] will access the specified objects email. The same dot notation can be applied to the 'people' object and it's properties using the for...in loop

