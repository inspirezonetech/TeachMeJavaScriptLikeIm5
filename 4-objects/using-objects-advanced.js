/* 
------------------------------------------------------------------------------------
 Tutorial: Using Objects (Advanced)
------------------------------------------------------------------------------------

In this tutorial, we will be covering some advanced topics with respect to objects
such as removing properties from objects, destructuring, nesting, and nesting them.

------------------------------------------------------------------------------------
*/

// First, let us look at how to remove a property from an object. Consider the 
// same object from the previous tutorial on the basics of using objects.

const jane = {
    firstName: 'Jane',
    lastName: 'Doe',
    age: 42,
    likesMusic: true,
    favoriteThings: ['coffee', 'cake', 'dancing', 'disc golf'],
};

// To remove a property of an object, we use the "delete" keyword. If we wanted to
// remove the likesMusic property, we would do so as follows.

delete jane.likesMusic;
console.log(jane);
/* Expected output: {
    firstName: 'Jane',
    lastName: 'Doe',
    age: 42,
    favoriteThings: [ 'coffee', 'cake', 'dancing', 'disc golf' ]
}
*/

/*
------------------------------------------------------------------------------------
 Challenge-1: Create an employee object with name, id, salary, and position.
 Remove the position attribute and log the resulting object.
------------------------------------------------------------------------------------
*/

// Destructuring an object lets us unpack its properties into separate values. We 
// can destructure the jane object its properties as follows.

const {firstName, lastName, age, favoriteThings} = jane;
console.log(firstName);             // Expected output: Jane
console.log(lastName);              // Expected output: Doe
console.log(age);                   // Expected output: 42
console.log(favoriteThings);        // Expected output: [ 'coffee', 'cake', 'dancing', 'disc golf' ]

/*
------------------------------------------------------------------------------------
 Challenge-2: Destructure the employee object and log the employee's id
------------------------------------------------------------------------------------
*/

// An object can contain value of any type. This also includes other objects,
// and functions as well. 
// The "this" keyword is used to refer to the current owner object

const john = {
    firstName: 'John',
    lastName: 'Doe',
    age: 27,
    favoriteThings: ['poker', 'lemons'],
    address: {
        house: "22",
        street: "8th Main Road",
        city: "Delhi"
    },
    printName: function () {
        console.log(this.firstName + " " + this.lastName);
    }
};

console.log(john.address);  // Expected output: { house: '22', street: '8th Main Road', city: 'Delhi' }
john.printName();           // Expected output: John Doe

/*
------------------------------------------------------------------------------------
 Challenge-3: Add a date of birth property to the employee object, which is also an
 object has three and has three parts: date, month, and year. Also, add another
 property called findAge which is a function that returns the age of the employee
 using the date of birth
------------------------------------------------------------------------------------
*/