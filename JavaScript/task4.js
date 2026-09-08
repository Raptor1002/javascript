// task1-for loop
for(let i=1;i<=10;i++)
{
    console.log(i);
}
 // task 2 - reveres number
 for(let i=10; i>=1; i--)
 {
    console.log(i);
 }
 
 //task 3 - even numbers

 for(let i=2; i<=20; i+=2)
 {
    console.log(i);
 }

//task 4 - odd numbers

 for(let i=1; i<=20; i+=2)
 {
    console.log(i);
 }
 

 //task 5 - multipication table

 let num = 5; // Simulating user input
for (let i = 1; i <= 10; i++) {
    console.log(`${num} x ${i} = ${num * i}`);
}

//while loop

// task 6 - countdown
let count =10;
while (count>=1) {
    console.log(count);
    count--;
    
}

//task 7 sum of numbers

let sum = 0;
let i = 1;
while (i <= 10) {
    sum += i;
    i++;
}
console.log(sum);

// do while

// task 8 - print numbers
let nubDo=1;
do {
    console.log(nubDo);
    nubDo++;
} while (nubDo<=5);

// task 9 - do while understanding
let a = 10;

do {
 console.log(a);
 a++;
} while (a <= 5);//output =10;
// A do...while loop executes its code block first before evaluating the condition. Since a = 10, it prints 10, increments a to 11, and then checks if 11 <= 5. The condition is false, so the loop terminates immediately, but the block has already run once.

//for of

// task 10 - string chaacters

let name = "javascript";
 for (let  char of name) 
    {
        console.log(char);

    }

    // task 11 array values

    let fruits = ["apple", "orange", "banana", "mango", "grapes"];
for (let fruit of fruits) {
    console.log(fruit);
}

// task 12 student names

let students = ["Arun", "Priya", "Ravi", "Sneha", "Karthik"];
for (let student of students) {
    console.log(`Student: ${student}`);
}

// for In

//task 13

let employee = {
    name: "Arun",
    age: 25,
    role: "Developer",
    city: "Chennai"
};

for (let key in employee) {
    console.log(`${key}: ${employee[key]}`);
}

//task 14 product object

let product = {
    productName: "Laptop",
    price: 65000,
    brand: "Dell",
    category: "Electronics",
    stock: 20
};

for (let key in product) {
    console.log(`${key}: ${product[key]}`);
}

// function and return

//task 15
 function welcome() {
    console.log("Welcome to JavaScript");
}
welcome();
welcome();
welcome();

// task 16 function with perameters
function greet(name) {
    console.log(`Hello ${name}`);
}
greet("Naveen");
greet("Arun");
greet("Priya");

// task 17 multiple perameters

function student(name, age, department) {
    console.log(`Name: ${name}, Age: ${age}, Dept: ${department}`);
}
student("Arun", 21, "Computer Science");
student("Priya", 20, "IT");
student("Rahul", 22, "Mechanical");

// task 18 addtional funtion

function add(a, b) {
    return a + b;
}
let result = add(10, 20);
console.log(result); // Output: 30

// task 19  salary

function salary(amount) {
    return amount;
    
}
let total = salary(100000)
console.log(total);

// task 20  bonus calcaltor

function bonus(salary,bonusAmount) {
    return(salary+ bonusAmount);
    
}
let totalSalary = bonus(4000,3000);
console.log(totalSalary);

//default perameters and funtion types

// task 21 default permameters
function employeeRole(name, role = "Developer") {
    console.log(`${name} is a ${role}`);
}
employeeRole("Arun");              // Output: Arun is a Developer
employeeRole("Priya", "Designer"); // Output: Priya is a Designer

// task 22 named function
function square(number) {
    return number * number;
}
console.log(square(2));
console.log(square(4));
console.log(square(6));
console.log(square(8));
console.log(square(10));

//task 23 anonymous funtion

let calculate = function(a, b) {
    return a + b;
};
console.log(calculate(10, 15));

// task 24 arrow funtion

let multiply = (a, b) => {
    return a * b;
};
console.log(multiply(5, 4));

//scope and hoisting

// task 25 predict scope output 



// inside the if block, console.log(a, b, c) successfully prints 10, 20, 30.

// Outside the if block, console.log(a) successfully prints 10 because var is function-scoped (it ignores the block).

// console.log(b) and console.log(c) will throw a ReferenceError. let and const are block-scoped and cannot be accessed outside the if block where they were defined.

// task 26 perdict hoisting

// Output: undefined
// The declaration (var a) is hoisted to the top, but the initialization (= 10) stays on its original line.

// Task 27 — Predict Hoisting let

// Output: ReferenceError: Cannot access 'b' before initialization

// Task 28 — Predict Hoisting const

// Output: ReferenceError: Cannot access 'c' before initialization

// Difference Explanation:
// While var, let, and const are all hoisted to the top of their scope, var is initialized with undefined automatically. let and const are NOT initialized; they remain in the "Temporal Dead Zone" (TDZ) until the code execution reaches their exact line, causing an error if accessed early.

//Task 29 — Self Invoking Function

// First IIFE
(function() {
    console.log("Welcome to JavaScript");
})();

// Second IIFE with parameters

(function(product, discount) {
    console.log(`${product} has a ${discount}% discount!`);
})("Laptop", 15);

//Task 30 — Callback Functions

// Callback Function: welcome (It is the function passed as an argument to be executed later).

// Higher-Order Function: execute (It is the function that receives a callback function as a parameter).

// task 31 cash pack genrator

function* cashback() {
    yield "10% cashback";
    yield "20% cashback";
    yield "30% cashback";
    yield "Better luck next time";
}

let offers = cashback();
for (let offer of offers) {
    console.log(offer);
}

// final task

// task 32 emploees management console
// 1. Employee Data Array
let employees = [
    { name: "Arun", age: 25, department: "IT", role: "Developer", salary: 45000 },
    { name: "Priya", age: 24, department: "HR", role: "HR Executive", salary: 35000 },
    { name: "Vikram", age: 28, department: "Finance", role: "Manager", salary: 60000 }
];

// 7. Arrow function for calculating a generic 10% bonus
const calculateBonus = (salary) => salary * 0.10;

// 5. Function that returns an employee's salary
function getSalary(employeeObj) {
    return employeeObj.salary;
}

// 8. Generator for employee benefits
function* benefitGenerator() {
    yield "Medical Insurance";
    yield "Transport";
    yield "Food Allowance";
    yield "Bonus";
}

// 3 & 4. Function to display employee information (passes parameters)
function displayEmployeeDetails(employee) {
    console.log("-----------------------");
    // 2. for...in (print keys and values)
    for (let key in employee) {
        console.log(`${key.toUpperCase()}: ${employee[key]}`);
    }
    
    let currentSalary = getSalary(employee);
    
    // 6. Condition (Check Salary >= 40000)
    if (currentSalary >= 40000) {
        console.log("STATUS: High Earner");
    } else {
        console.log("STATUS: Standard Bracket");
    }

    console.log(`ESTIMATED BONUS: ${calculateBonus(currentSalary)}`);
}

// 1. for...of (looping through all employees)
console.log("=== EMPLOYEE MANAGEMENT SYSTEM ===");
for (let emp of employees) {
    displayEmployeeDetails(emp);
}

// Executing the generator just to showcase benefits
console.log("-----------------------");
console.log("COMPANY BENEFITS PACKAGE:");
let benefits = benefitGenerator();
for (let benefit of benefits) {
    console.log(`- ${benefit}`);
}

