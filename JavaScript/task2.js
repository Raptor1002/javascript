// Task 1

var name = "mohan";
let age = 28;
const college = "Excel University";

console.log(name);
console.log(age);
console.log(college);

name = "mohanraj";
age = 29;

console.log(name);
console.log(age);

var name = "monu";
console.log(name);

// college = "ELU";
// let age = 28;



// Task 2

let userName = prompt("Enter your name");
let userAge = prompt("Enter your age");
let city = prompt("Enter your city");

console.log("Name: " + userName);
console.log("Age: " + userAge);
console.log("City: " + city);



// Task 3

let personName = prompt("Enter your name");

alert("Welcome " + personName + "!");



// Task 4

let birthYear = prompt("Enter your birth year");
let currentYear = 2026;

let currentAge = currentYear - birthYear;

console.log("Birth Year: " + birthYear);
console.log("Age: " + currentAge);



// Task 5

let a1 = "Hello guys";
let a2 = 200;
let a3 = 54.5;
let a4 = true;
let a5 = false;
let a6;
let a7 = null;

console.log(typeof a1);
console.log(typeof a2);
console.log(typeof a3);
console.log(typeof a4);
console.log(typeof a5);
console.log(typeof a6);
console.log(typeof a7);



// Task 6

let student = {
    name: "mohan",
    age: 25,
    city: "salem",
    qualification: "B,E ECE",
    isStudent: true
};

console.log(student);
console.log(student.name);
console.log(student.age);
console.log(student.qualification);
console.log(student.isStudent);



// Task 7

let fruits = [
    "lemon",
    "Mango",
    "Orange",
    "dragon",
    "Grapes",
    "Papaya"
];

console.log(fruits[0]);
console.log(fruits[1]);
console.log(fruits[fruits.length - 1]);
console.log(fruits.length);



// Task 8

let num1 = 20;
let num2 = 5;

console.log(num1 + num2);
console.log(num1 - num2);
console.log(num1 * num2);
console.log(num1 / num2);
console.log(num1 % num2);
console.log(num1 ** num2);



// Task 9

let shirt = 859;
let pant = 1899;
let shoes = 1999;

let total = shirt + pant + shoes;

console.log("Total = " + total);



// Task 10

let tamil = 90;
let english = 75;
let maths = 90;

let totalMarks = tamil + english + maths;
let average = totalMarks / 3;

console.log("Total = " + totalMarks);
console.log("Average = " + average);



// Task 11

// Expected
// 11
// 10

let x1 = 10;
let y1 = x1++;

console.log(x1);
console.log(y1);



// Task 12

// Expected
// 11
// 11

let x2 = 10;
let y2 = ++x2;

console.log(x2);
console.log(y2);



// Task 13

// Expected
// 19
// 20

let x3 = 20;
let y3 = x3--;

console.log(x3);
console.log(y3);



// Task 14

// Expected
// 19
// 19

let x4 = 20;
let y4 = --x4;

console.log(x4);
console.log(y4);



// Task 15

// Expected
// a = 7
// b = 4
// c = 7
// d = 5

let a = 5;

let b = a++;
let c = ++a;
let d = b--;

console.log(a);
console.log(b);
console.log(c);
console.log(d);



// Task 16

let n1 = 10;
n1 += 5;
console.log(n1);

let n2 = 10;
n2 -= 5;
console.log(n2);

let n3 = 10;
n3 *= 5;
console.log(n3);

let n4 = 10;
n4 /= 5;
console.log(n4);

let n5 = 10;
n5 %= 5;
console.log(n5);

let n6 = 10;
n6 **= 2;
console.log(n6);



// Task 17

let studentName = "mohan";
let studentAge = 28;
let studentCity = "salem";
let studentCollege = "Excel University";

let subjects = [
    "HTML",
    "CSS",
    "JavaScript",
    "Python",
    "Machine Learning"
];

let profile = {
    name: studentName,
    age: studentAge,
    city: studentCity,
    subjects: subjects,
    isStudent: true
};

console.log(profile.name);
console.log(profile.age);
console.log(profile.city);
console.log(profile.subjects[0]);
console.log(profile.subjects[profile.subjects.length - 1]);
console.log(profile.subjects.length);
console.log(profile);



// Final Challenge

let first = prompt("Enter first number") - 0;
let second = prompt("Enter second number") - 0;

console.log("Addition = " + (first + second));
console.log("Subtraction = " + (first - second));
console.log("Multiplication = " + (first * second));
console.log("Division = " + (first / second));
console.log("Modulus = " + (first % second));
console.log("Power = " + (first ** second));