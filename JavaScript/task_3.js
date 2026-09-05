// TASK 1
// 1. Create variables
var Name = "mohan";
let Age = 28;
const City = "salem";
let College = "EEC";

// 2. Print all values
console.log(Name, Age, City, College);

// 3. Change the var value
Name = "suriya";
console.log("Updated var:", Name);

// 4. Change the let value
Age = 40;
console.log("Updated let:", Age);

// 5. Try changing the const value
// City = "Boston"; // Uncommenting this will throw a TypeError: Assignment to constant variable.

// 6. Try redeclaring each variable
// var Name = "suriya"; // Allowed: var can be redeclared.
// let Age = 40; // SyntaxError: Identifier 'Age' has already been declared.
// const City = "erode"; // SyntaxError: Identifier 'City' has already been declared.

// TASK 2
console.log("This prints to the developer console.");
alert("This shows a popup alert box!");
confirm("This shows a popup with OK and Cancel options.");
prompt("This asks the user for input:", "Type here...");
document.writeln("This writes directly to the HTML document.");    

// TASK 3
let userName = prompt("Enter your Name:");
let userAge = prompt("Enter your Age:");
let userCity = prompt("Enter your City:");
let userQualification = prompt("Enter your Qualification:");

console.log("Name:", userName);
console.log("Age:", userAge);
console.log("City:", userCity);
console.log("Qualification:", userQualification);

// TASK 4
let str = "JavaScript";
let num1 = 54;
let num2 = 99.5;
let boolTrue = true;
let boolFalse = false;
let undef = undefined;
let empty = null;

console.log(str, typeof str);
console.log(num1, typeof nub1);
console.log(num2, typeof nub2);
console.log(boolTrue, typeof boolTrue);
console.log(boolFalse, typeof boolFalse);
console.log(undef, typeof undef);
console.log(empty, typeof empty);

// TASK 5/
let student = ["mohan","arun","sabi","shalini"];

console.log("first name",student[0]);
console.log("second name",student[1]);
console.log("last name",student[student.length-1]);
console.log("total name",student.length)

// TASK 6
let employee = {
  name: "mohan",
  age: 28,
  role: "Developer",
  skills: ["HTML", "CSS", "JavaScript", "React"],
  isWorking: true,
  qualification: ["BSc Computer Science", "MCA"]
};

console.log("Employee name:", employee.name);
console.log("Age:", employee.age);
console.log("Role:", employee.role);
console.log("First skill:", employee.skills[0]);
console.log("Last qualification:", employee.qualification[employee.qualification.length - 1]);
console.log("Working status:", employee.isWorking);

// TASK 7
let a = 20;
let b = 5;

console.log("Addition:", a + b);          
console.log("Subtraction:", a - b);        
console.log("Multiplication:", a * b);     
console.log("Division:", a / b);           
console.log("Modulus:", a % b);            
console.log("Exponentiation:", a ** b);   

// ==========================================
// Task 8 — Shopping Bill
// ==========================================
{
  console.log("--- Task 8 ---");
  let Shirt = 999;
  let Pant = 1499;
  let Shoes = 1999;
  let Bag = 799;

  let totalBill = Shirt + Pant + Shoes + Bag;
  console.log("Total price:", totalBill); 
}

// ==========================================
// Task 9 — Increment & Decrement
// ==========================================
{
  console.log("--- Task 9 (Answers) ---");
  // A: a = 11, b = 10 (Post-increment)
  // B: a = 11, b = 11 (Pre-increment)
  // C: a = 9, b = 10  (Post-decrement)
  // D: a = 9, b = 9   (Pre-decrement)
}

// ==========================================
//  Assignment Operator Tasks
// Task 10
// ==========================================
{
  console.log("--- Task 10 ---");
  let num = 10;

  num += 5; console.log(num); 
  num -= 3; console.log(num); 
  num *= 2; console.log(num); 
  num /= 4; console.log(num); 
  num %= 3; console.log(num); 
  num **= 2; console.log(num); 
}

// ==========================================
//  Comparison Operator Tasks
// Task 11 — Find Output
// ==========================================
{
  console.log("--- Task 11 ---");
  console.log(10 > 5);   // true
  console.log(10 < 5);   // false
  console.log(10 >= 10); // true
  console.log(10 <= 9);  // false

  console.log(5 == "5");   // true
  console.log(5 === "5");  // false

  console.log(10 != "10");  // false
  console.log(10 !== "10"); // true
}

// ==========================================
// Logical Operator Tasks
// Task 12, 13, 14, 15
// ==========================================
{
  console.log("--- Task 12, 13, 14, 15 ---");
  // AND
  console.log(true && true);   
  console.log(true && false);  
  
  // OR
  console.log(true || false);  
  console.log(false || false); 

  // NOT
  console.log(!true);          
  console.log(!(5 > 10));      

  // COMBINATION
  console.log(5 == "5" && !(5 === 5) || 6 > 7); // true
  console.log(10 > 5 && 8 < 12 || 4 === "4");   // true
  console.log(7 === 7 && 10 != "10" || 5 >= 5); // true
  console.log(15 < 10 || 20 > 15 && 5 == "5");  // true
}

// ==========================================
//  Ternary Operator Tasks
// Task 16 & 17
// ==========================================
{
  console.log("--- Task 16 & 17 ---");
  let age = 20;
  console.log(age >= 18 ? "Eligible to vote" : "Not eligible");

  let password = true;
  console.log(password ? "Login successful" : "Wrong password");
}

// ==========================================
//  Concatenation & Template String
// Task 18
// ==========================================
{
  console.log("--- Task 18 ---");
  let name = "Naveen";
  let age = 25;
  let city = "Trichy";

  // Using +
  console.log("My name is " + name + ". I am " + age + " years old. I live in " + city + ".");
  // Using template literals
  console.log(`My name is ${name}. I am ${age} years old. I live in ${city}.`);
}

// ==========================================
// Type Casting Tasks
// Task 19, 20, 21
// ==========================================
{
  console.log("--- Task 19, 20, 21 ---");
  // Strings
  console.log(String(100), typeof String(100));
  
  // Numbers
  console.log(Number("123")); // 123
  console.log(Number("a1"));  // NaN
  console.log(Number(true));  // 1
  
  // Booleans
  console.log(Boolean(""));      // false
  console.log(Boolean("hello")); // true
  console.log(Boolean(0));       // false
}

// ==========================================
//  Flow Control Tasks
// Task 22, 23, 24
// ==========================================
{
  console.log("--- Task 22, 23, 24 ---");
  // Voting
  let voterAge = Number(prompt("Task 22: Enter your age for voting:"));
  if (voterAge >= 18) {
    console.log("You can vote");
  } else {
    console.log("You can't vote");
  }

  // Positive/Negative
  let numInput = Number(prompt("Task 23: Enter a number:"));
  if (numInput > 0) {
    console.log("Positive");
  } else if (numInput < 0) {
    console.log("Negative");
  } else {
    console.log("Zero");
  }

  // Grade System
  let marks = Number(prompt("Task 24: Enter your marks (0-100):"));
  if (marks >= 90 && marks <= 100) console.log("A Grade");
  else if (marks >= 80 && marks < 90) console.log("B Grade");
  else if (marks >= 70 && marks < 80) console.log("C Grade");
  else if (marks >= 60 && marks < 70) console.log("D Grade");
  else if (marks >= 0 && marks < 60) console.log("Fail");
  else console.log("Invalid marks");
}

// ==========================================
//  Nested If Task
// Task 25
// ==========================================
{
  console.log("--- Task 25 ---");
  let jobAge = Number(prompt("Task 25: Enter your age:"));
  let height = Number(prompt("Task 25: Enter your height (cm):"));
  let weight = Number(prompt("Task 25: Enter your weight (kg):"));

  if (jobAge >= 18) {
    if (height >= 160) {
      if (weight >= 60) {
        console.log("Congratulations! You are selected");
      } else {
        console.log("Rejected: Weight too low.");
      }
    } else {
      console.log("Rejected: Height too low.");
    }
  } else {
    console.log("Rejected: Underage.");
  }
}

// ==========================================
//  Switch Tasks
// Task 26 & 27
// ==========================================
{
  console.log("--- Task 26 & 27 ---");
  let color = prompt("Task 26: Enter traffic light color (red/yellow/green):").toLowerCase();
  switch (color) {
    case "red": console.log("Stop"); break;
    case "yellow": console.log("Ready"); break;
    case "green": console.log("Go"); break;
    default: console.log("Invalid color");
  }

  let day = 1;
  switch (day) {
    case 1: console.log("Monday"); break;
    case 2: console.log("Tuesday"); break;
    case 3: console.log("Wednesday"); break;
    case 4: console.log("Thursday"); break;
    case 5: console.log("Friday"); break;
    case 6: console.log("Saturday"); break;
    case 7: console.log("Sunday"); break;
    default: console.log("Invalid day");
  }
}

// ==========================================
// FINAL MINI PROJECT
// Task 28 — Student Result System
// ==========================================
{
  console.log("--- Task 28 (Final Project) ---");
  // Step 1
  let studentName = prompt("Project: Enter Name:");
  let studentAge = Number(prompt("Project: Enter Age:"));
  let studentCity = prompt("Project: Enter City:");

  // Step 2
  let tamilMarks = Number(prompt("Project: Enter Tamil Marks:"));
  let englishMarks = Number(prompt("Project: Enter English Marks:"));
  let mathsMarks = Number(prompt("Project: Enter Maths Marks:"));

  // Step 3
  let total = tamilMarks + englishMarks + mathsMarks;
  let average = total / 3;

  // Step 4
  let grade = "";
  if (average >= 90) grade = "A";
  else if (average >= 80) grade = "B";
  else if (average >= 70) grade = "C";
  else if (average >= 60) grade = "D";
  else grade = "Fail";

  // Step 5
  let isEligible = studentAge >= 18 ? "Eligible" : "Not Eligible";

  // Step 6
  let report = `
  Name: ${studentName}
  Age: ${studentAge}
  City: ${studentCity}
  Total: ${total}
  Average: ${average.toFixed(2)}
  Grade: ${grade}
  Voting: ${isEligible}
  `;

  console.log(report);
  alert("Final Project Result check console for details!\n" + report);
}


