// Variables & Data Types
// Q1: What is the difference between var, let, and const?
// var: Function-scoped, can be redeclared and reassigned, 
// and is hoisted with an initial value of undefined.

// let: Block-scoped, cannot be redeclared in the same scope, 
// can be reassigned, and is hoisted without initialization (exists in a "Temporal Dead Zone" until execution).

// const: Block-scoped, requires an initial value upon declaration, and 
// cannot be redeclared or reassigned (though properties of objects/arrays declared with const can be mutated).

// Q2: Can you re-declare a variable with var? What about let and const?
// Yes, you can re-declare a variable using var within the same scope. 
// You cannot re-declare variables using let or const in the same scope; 
// doing so throws a SyntaxError.

// Q3: What is the output of this code?
// It will throw a TypeError: Assignment to constant variable. 
// The script stops executing when it attempts to reassign z to 30 because z was declared as a const.

// Q4: What is the difference between declaring and initializing a variable?
// Declaring is introducing the variable to the engine (e.g., let a;).

// Initializing is assigning it a value for the first time (e.g., a = 10;).

// Q5: What will be the output?
let a;
console.log(a);
// undefined. The variable a is declared but has not been assigned a value.

// Q6: What is hoisting? Give an example.
// Hoisting is JavaScript's default behavior of moving variable and function declarations to the top of their respective scopes during the compilation phase, before code execution.

console.log(myVar); // Output: undefined
var myVar = 5;

// Q7: What is the difference between null and undefined?
// undefined means a variable has been declared but has not yet been assigned a value.

// null is an assignment value representing an intentional absence of any object value.

// Q8: What will be the output?
console.log(typeof null);//object
console.log(typeof undefined);//undefined
console.log(typeof []);//object
console.log(typeof {});//object

// Operators
// Q9: What is the difference between == and ===?
//== (Loose equality) compares values after attempting type coercion (e.g., 5 == "5" is true).

//=== (Strict equality) compares both value and data type without coercion (e.g., 5 === "5" is false).

//Q10: What is the difference between ++i and i++?
//++i (Pre-increment) increments the variable first, then evaluates to the new value.

//i++ (Post-increment) evaluates to the current value first, then increments the variable.

// Q11: What will be the output?
let x = 10;
let y = "5";
console.log(x + y);//105
console.log(x - y);//5
console.log(x * y);//50
console.log(x / y);//2

// Q12: What are logical operators? Explain with examples.

// They are used to combine or invert boolean values:

// && (AND): True if both operands are true (true && false returns false).

// || (OR): True if at least one operand is true (true || false returns true).

// ! (NOT): Inverts the boolean value (!true returns false).

// Q13: What will be the output?
console.log(5 > 3 && 10 > 5);//true
console.log(5 > 10 || 10 > 5);//true
console.log(!(5 > 3));//false


// Q14: What is the ternary operator? Give an example.
// It is a one-line shorthand for an if-else statement. 
// Syntax: condition ? exprIfTrue : exprIfFalse.
let age = 20;
let status = age >= 18 ? "Adult" : "Minor";

// Type Casting
// Q15: What is the difference between implicit and explicit type casting?
// Implicit type casting (coercion) is done automatically by the JavaScript engine 
// (e.g., "5" * 2 becomes 10).
// Explicit type casting is done manually by the developer using built-in functions 
// (e.g., Number("5")).

// Q16: What will be the output?
console.log(Number("123"));//123
console.log(Number("hello"));//NaN
console.log(Number(true));//1
console.log(Number(false));//0
console.log(Boolean(0));//false
console.log(Boolean("hello"));//true

// Q17: What is NaN? Give an example.
// NaN stands for "Not-a-Number." 
// It represents the result of an invalid or undefined mathematical operation.

console.log("hello" / 5); // Output: NaN

// Conditional Statements
// Q18: What is the difference between if-else and switch?
// if-else evaluates truthy/falsy expressions and is ideal for complex logic, multiple conditions, and ranges (x > 10).

// switch evaluates a single expression and strictly matches it (===) against discrete case clauses.
//  It is cleaner for checking a single variable against many possible values.

// Q19: What will be the output?
let age1 = 20;
if(age1 >= 18) {
    console.log("Adult");
} else {
    console.log("Minor");
}
// Adult--output

// Q20: What is nested if? Give an example.
// An if statement placed inside another if statement to test a secondary condition only if the first condition is met.

let temp = 30;
let sunny = true;

if (temp > 25) {
    if (sunny) {
        console.log("Go to the beach");
    }
}

// Q21: Write a program to check if a number is even or odd using ternary operator.

let num = 7;
let result = (num % 2 === 0) ? "Even" : "Odd";
console.log(result);

// Loops

// Q22: What is the difference between while and do-while?
// while checks the condition before executing the block. If the condition is false initially, the block runs zero times.

// do-while executes the block first, then checks the condition. The block is guaranteed to run at least once.

// Q23: What will be the output?
for(let i = 1; i <= 5; i++) {
    console.log(i);
}
// It prints the numbers 1 through 5, each on a new line:

// output
// 1
// 2
// 3
// 4
// 5

// Q24: What is the difference between for-of and for-in?
// for-of iterates over the values of iterable objects (like Arrays, Strings, Maps).

// for-in iterates over the enumerable property keys (indexes or property names) of an object.

// Q25: Write a program to find sum of numbers from 1 to 100.
let sum = 0;
for(let i = 1; i <= 100; i++) {
    sum += i;
}
console.log(sum); // Output: 5050

// Arrays

// Q26: What is the difference between slice and splice?
// slice() returns a shallow copy of a portion of an array into a new array object.
//  It does not mutate the original array.

// splice() changes the contents of an array by removing, replacing, or adding new elements in place.
//  It mutates the original array.

// Q27: What will be the output?
let arr = [1, 2, 3];
arr.push(4);
arr.pop();
arr.unshift(0);
arr.shift();
console.log(arr);

// [ 1, 2, 3 ]

// Functions

// Q28: What is the difference between function declaration and function expression?
// Function Declaration: Begins with the function keyword and a name. 
// It is hoisted, meaning it can be called before it is defined in the code.

// Function Expression: A function assigned to a variable. It is not hoisted, 
// so it cannot be called before the line where it is defined.

// Q29: What is an arrow function? Give an example.
// An arrow function is a compact alternative to a traditional function expression introduced in ES6. It uses the => syntax and does not bind its own this context.

const multiply = (a, b) => a * b;

// Q30: What will be the output?
function greet() {
    return "Hello";
}
let message = greet();
console.log(message);
// Hello