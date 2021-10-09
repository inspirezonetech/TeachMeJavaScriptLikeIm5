/* 
------------------------------------------------------------------------------------
 Tutorial: Operators in JavaScript
------------------------------------------------------------------------------------
*/

/* 
------------------------------------------------------------------------------------
 🌟ASSIGNMENT OPERATOR "=":-

 - The assignment operator is used to assign value that is on the right of the operator to the left.

 🚨THINGS TO NOTICE:- 

 - If there are any calculations/expression to the right of the assignment operator, those are performed/resolved before assigning it to the left of the operator.
------------------------------------------------------------------------------------
*/

// ASSIGNMENT OPERATOR EXAMPLES
let num1 = 6; // assigning 6 to the num1 variable
let num2 = 5; // assigning 5 to the num2 variable

/* 
------------------------------------------------------------------------------------
 🌟ARITHMETIC OPERATORS:-

 - Arithmetic Operators are generally used to perform Arithmetic/Mathematical operations on one or more operands.

 🌟LIST OF ARITHMETIC OPERATORS:-

 1. ADDITION OPERATOR (+): used to add two numbers.
 2. SUBTRACTION OPERATOR (-): used to subtract one number from another.
 3. MULTIPLICATION OPERATOR (*): used to multiply one number with another.
 4. DIVISION OPERATOR (/): used to divide one number by another.
 5. EXPONENTIATION OPERATOR (**): used to raise first operand to the power of second operator.
 6. REMAINDER OPERATOR (%): this operator gives the remainder of the division of two numbers.
 7. INCREMENT OPERATOR (++): used to increment a number by 1.
 8. DECREMENT OPERATOR (--): used to decrement a number by 1.

 🚨THINGS TO NOTICE:-

 - "INCREMENT OPERATOR ++" & "DECREMENT OPERATOR --" only works with values stored in a variable and not the literal value.
    
    For example:- let num = 5;
                  num++; // Valid 
                  5++;   // Not valid

 - Both "increment" and "decrement" operator not just adds or subtracts 1, it also assigns the modified value to the variable onto which these operations are performed.
    
    For example:- let num = 5;
                  num++; // its same as num = num + 1;

 - Addition Operator (+) when used with the string operands, is considered as "Concatenation Operator" because instead of adding values it performs string concatenation i.e joins the strings.
    
    For example:- let num1 = "5"; // assigning a numeric string of 5 in the num1 variable
                  let num2 = "6"; // assigning a numeric string of 6 in the num2 variable
                  console.log(num1 + num2); // will print "56" and not 11
------------------------------------------------------------------------------------
*/

// ARITHMETIC OPERATOR EXAMPLES:-
// (num1 and num2 are the variables declared above in the assignment operator tutorial)

// addition
console.log(num1 + num2); //will print 11
// subtraction
console.log(num1 - num2); //will print 1
// multiplication
console.log(num1 * num2); //will print 30
// division
console.log(num1 / num2); //will print 1.2
// exponentiation
console.log(num1 ** num2); //will print 7776
// remainder
console.log(num1 % num2); //will print 1
// increment
num1++; // num1 = 6 + 1;
console.log(num1); //will print 7
// decrement
num2--; // num2 = 5 - 1;
console.log(num2); //will print 4

/* 
------------------------------------------------------------------------------------
 🌟COMPARISON OPERATORS :-

 - There are many comparison operators in JS. All of these operator returns a boolean "true" or "false" value.

 🌟LIST OF COMPARISON OPERATORS:-

 1. EQUALITY OPERATOR (==)
 2. STRICT EQUALITY OPERATOR (===)
 3. INEQUALITY OPERATOR (!=)
 4. STRICT INEQUALITY OPERATOR (!==)
 5. GREATER THAN OPERATOR (>)
 6. GREATER THAN OR EQUAL TO OPERATOR (>=)
 7. LESS THAN OPERATOR (<)
 8. LESS THAN OR EQUAL TO OPERATOR (<=)

 ------------------------------------------------------------------------------------
 1.EQUALITY OPERATOR: The equality operator (==) compares two values and returns true if they are equal and false if not.

 🚨THINGS TO NOTICE:-

 - (=) & (==) are two different things.
   (=): Assignment operator.
   (==): Comparison operator.

 - Equality operator when comparing two values having different data types performs automatic type conversion.
   (TYPE CONVERSION: In order JS to compare two different data types (for example number and a string), it convert one type to another and this is known as TYPE CONVERSION).

   e.g: 5 == "5" is true because, string "5" will be type converted to 5 as number automatically.
------------------------------------------------------------------------------------
*/


// EQUALITY OPERATOR EXAMPLES:-

// comparing numbers
console.log(1 == 1); // will print true
console.log(1 == 2); // will print false

// comapring number and string
console.log(1 == "1"); // will print true
console.log("3" == 3); // will print true
console.log("3" == 5); // will print false


/* 
------------------------------------------------------------------------------------
2.STRICT EQUALITY OPERATOR:- 

- Strict equality (===) is the counter part to the equality operator.

- However, unlike the equality operator which attempt to convert both value being compared to a common type, the strict equality operator does not perform a type conversion.

- If the value being compared have different types, they are considered unequal, and the strict equality operator will return false.

e.g: 5 === "5" is false

------------------------------------------------------------------------------------
*/

// STRICT EQUALITY OPERATOR EXAMPLES:-

// comparing numbers
console.log(2 === 2); // will print true
console.log(2 === 3); // will print false

// comparing number and string
console.log(2 === "2"); // will print false
console.log(2 === "3"); // will print false


/* 
------------------------------------------------------------------------------------
3.INEQUALITY OPERATOR:- The inequality operator (!=) is opposite of equality operator (==).

It will return true if the value being compared are not equal and false if values are equal.

|EQUALITY (==) | INEQUALITY (!=)|
|true          | false          |
|false         | true           |

(!=) means not equal to.

Like equality operator, the inequality operator will convert data types while comparing.
------------------------------------------------------------------------------------
*/

// INEQUALITY OPERATOR EXAMPLES:-
console.log(1 != 2); // will print true
console.log(1 != "1"); // will print false (1 and "1" are equal), because string "1" will be type cast as 1 number type.
console.log(1 != '1'); // will print false
console.log(1 != true); // will print false (1 and true are equal), because boolean true will be type cast as 1 number type.
console.log(0 != false); // will print false (0 and false are equal). because boolean false will be type cast as 0 number type.

/* 
------------------------------------------------------------------------------------
4.STRICT INEQUALITY OPERATOR:- The strict inequality operator (!==) is logical opposite of strict equality operator (===).

It will return true if the value being compared are not equal and false if values are equal.

|STRICT EQUALITY (===) | STRICT INEQUALITY (!==)|
|true                  | false                  |
|false                 | true                   |

(!==) means strictly not equal to. (both value and type of value are not equal)

Like strict equality operator, the strict inequality operator will not convert data types while comparing.
------------------------------------------------------------------------------------
*/

// STRICT INEQUALITY OPERATOR EXAMPLES:-
console.log(3 !== 3); // will print false because 3 and 3 are equal
console.log(3 !== "3"); // will print true because 3 and "3" are not equal (number and strings are not equal)
console.log(4 !== 3); // will print true because 4 and 3 are not equal

/*
------------------------------------------------------------------------------------
5.GREATER THAN OPERATOR:-

- The greater than operator (>) compares the value of two numbers.
- If the value on the left is greater than value on the right, it will return true otherwise it will return false.

(Like equality operator, the greater than operator will convert data types of value while comparing)
------------------------------------------------------------------------------------
*/

// GREATER THAN OPERATOR EXAMPLES:-
console.log(5 > 3); // will print true
console.log(7 > '3'); // will print true
console.log(2 > 3); // will print false
console.log("4" > 9); // will print false

/*
------------------------------------------------------------------------------------
6.GREATER THAN OR EQUAL TO OPERATOR:-

- The greater than or equal to operator (>=) compares value of two numbers.
- If the value on the left is greater than or equal to the value on the right it will return true, otherwise false.

(Like equality operator, the greater than or equal to operator will convert data types while comparing)
------------------------------------------------------------------------------------
*/

// GREATER THAN OR EQUAL TO OPERATOR EXAMPLES:-
console.log(6 >= 6); // will print true because 6 and 6 are equal
console.log(7 >= '3'); // will print true because 7 is greater than 3 (string '3' will be type cast as number 3)
console.log(2 >= 3); // will print false because 2 is neither greater nor equal to 3
console.log('7' >= 9); // will print false because 7 is neither greater nor equal to 9 (string '7' will be type cast as number 7)


/*
------------------------------------------------------------------------------------
7.LESS THAN OPERATOR:-

- The less than operator (<) compares value of two numbers.
- If the value on the left is less than the value on the right it will return true, otherwise false.

(Like equality operator, the less than operator will convert data types while comparing)
------------------------------------------------------------------------------------
*/

// LESS THAN OPERATOR EXAMPLES:-
console.log(2 < 5); // will print true because 2 is less than 5
console.log('3' < 7); // will print true because 3 is less than 7 (string '3' will be type cast as number 3)
console.log(5 < 5); // will print false because 5 is not less than 5 (they are equal)
console.log(3 < 2); // will print false because 3 is not less than 2 (3 is greater than 2)
console.log("8" < 4); // will print false because 8 is not less than 4 (8 is greater than 4 also string "8" => number 8 )

/*
------------------------------------------------------------------------------------
8.LESS THAN OR EQUAL TO OPERATOR:-

- The less than or equal to operator (<=) compares value of two numbers.
- If the value on the left is less than or equal to the value on the right it will return true, otherwise false.

(Like equality operator, the less than or equal to operator will convert data types while comparing)
------------------------------------------------------------------------------------
*/

// LESS THAN OR EQUAL TO OPERATOR EXAMPLES:-
console.log(4 <= 5); // will print true because 4 is less than 5
console.log('7' <= 7); // will print true because 7 and 7 are equal (string "7" will be type cast as number 7)
console.log(5 <= 5); // will print true because 5 and 5 are equal
console.log(3 <= 2); // will print false because 3 is neither less than nor equal to 2
console.log('8' <= 4); // will print false becuase 8 is neither less than nor equal to 4 

/*
------------------------------------------------------------------------------------
🌟LOGICAL OPERATORS: Sometimes we need to compare more than one values i.e multiple comparison expressions and logical operators allow us to do that. (It returns a boolean true/false)

🌟LIST OF LOGICAL OPERATORS:-

1. LOGICAL AND (&&)
2. LOGICAL OR (||)
3. LOGICAL NOT (!)
------------------------------------------------------------------------------------
*/

/*
------------------------------------------------------------------------------------
1.LOGICAL AND (&&):-
- Sometime we need to test more than one thing at a time.
- The logical AND (&&) operator will return true if and only if the operands to the left and right are true.
------------------------------------------------------------------------------------
*/

// LOGICAL AND OPERATOR EXAMPLE:-
console.log((5 > 3) && (5 <= 10)); // will print true because (5 > 3) => TRUE & (5 <= 10) => TRUE (BOTH OPERANDS ARE TRUE).
console.log((5 > 3) && (5 >= 10)); // will print false because (5 > 3) => TRUE & (5 >= 10) => FALSE (BOTH OPERANDS ARE NOT TRUE).

/*
------------------------------------------------------------------------------------
2.LOGICAL OR (||):-
- The logical OR operator returns true if either of the operands is true otherwise it returns false.
------------------------------------------------------------------------------------
*/

// LOGICAL OR OPERATOR EXAMPLE:-
console.log((5 > 3) || (5 <= 10)); // will print true (BOTH OPERANDS ARE TRUE)
console.log((5 > 3) || (5 >= 10)); // will print true (ONLY ONE OPERAND IS TRUE)
console.log((5 < 3) || (5 >= 10)); // will pritn false (BOTH OPERANDS ARE FALSE)

/*
------------------------------------------------------------------------------------
3.LOGICAL NOT (!):-
- The logical NOT operator returns the opposite boolean value onto which its applied.
e.g: (!true) => false
     (!false) => true
------------------------------------------------------------------------------------
*/

// LOGICAL NOT OPERATOR EXAMPLE:-
console.log(!(5 > 3)); // 5 > 3 i.e true but it will return opposite boolean i.e false
console.log(!(5 < 3)); // 5 < 3 i.e false but it will return opposite boolean i.e true 

/*
------------------------------------------------------------------------------------
 Challenge: list challenges to be completed here. minimum of one challenge per tutorial
------------------------------------------------------------------------------------
*/