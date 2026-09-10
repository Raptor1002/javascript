//Task 1 — Student Result Analyzer
function analyzeStudentResult(name, department, m1, m2, m3, m4, m5) {
    let totalMarks = m1 + m2 + m3 + m4 + m5;
    let average = totalMarks / 5;
    let status = average >= 50 ? "Pass" : "Fail";
    let grade = "";

    if (average >= 90) {
        grade = "A";
    } else if (average >= 75) {
        grade = "B";
    } else if (average >= 60) {
        grade = "C";
    } else if (average >= 50) {
        grade = "D";
    } else {
        grade = "Fail";
    }

    console.log(`Student: ${name} (${department})`);
    console.log(`Total Marks: ${totalMarks}`);
    console.log(`Average: ${average}%`);
    console.log(`Status: ${status}`);
    console.log(`Grade: ${grade}`);
}

analyzeStudentResult("Rahul", "Computer Science", 85, 92, 78, 88, 95);

//Task 2 — Employee Salary Calculator

let Employee = {
    name : "arun",
    role : "devloper",
    salary : 25000,
    experience : 2
};
function calulateSalary(emp) {
    let bonuspercentage = 0
    if (emp.experience >=5) {
        bonuspercentage = 0.15;
    }else if (emp.experience >=2) {
        bonuspercentage = 0.10;
    }
    let bonusAmount = emp.salary*bonuspercentage;
    let finalSalary = emp.salary+ bonusAmount;

    console.log(`basic salary: RS.${emp.salary}`)
    console.log(`bonus: Rs,${bonusAmount} ($b{bonusPercentage*100}%)`);
    console.log(`Final Salary: ₹${finalSalary}`);

    return finalSalary;
}
calulateSalary(Employee);

// Task 3 — Product Filter System

let products = [
    
    { name: "Laptop", price: 55000, category: "electronics" },
    { name: "Mouse", price: 800, category: "electronics" },
    { name: "Shirt", price: 1200, category: "fashion" },
    { name: "Shoes", price: 2500, category: "fashion" },
    { name: "Phone", price: 30000, category: "electronics" }
];

let expensiveProducts = products.filter(p => p.price > 2000);


let electronics = products.filter(p => p.category === "electronics");

let cheapProduct = products.find(p => p.price < 1000);

let totalPrice = products.reduce((total, p) => total + p.price, 0);

let hasSuperExpensive = products.some(p => p.price > 50000);


let allAbove500 = products.every(p => p.price > 500);


// Task 5 — Shopping Cart

let cart = [
    { name: "Laptop", price: 50000, quantity: 1 },
    { name: "Mouse", price: 1000, quantity: 2 },
    { name: "Keyboard", price: 2000, quantity: 1 }
];

function calculateCart(cartData) {
   
    let cartTotal = cartData.reduce((total, item) => total + (item.price * item.quantity), 0);
    

    let discount = cartTotal > 50000 ? cartTotal * 0.10 : 0;
    

    let finalPayable = cartTotal - discount;
    
    console.log(`Cart Total: ₹${cartTotal}`);
    console.log(`Discount Applied: ₹${discount}`);
    console.log(`Final Payable: ₹${finalPayable}`);
    
    return { cartTotal, discount, finalPayable };
}

calculateCart(cart);


// Task 7 — Array Transformation Challenge

let numbers = [12, 5, 8, 21, 44, 7, 30, 15];

let doubled = numbers.map(n => n * 2);

let evens = numbers.filter(n => n % 2 === 0);

let greaterThan15 = numbers.filter(n => n > 15);

let firstOver20 = numbers.find(n => n > 20);

let sumOfNumbers = numbers.reduce((total, n) => total + n, 0);

let hasOver40 = numbers.some(n => n > 40);

let allPositive = numbers.every(n => n > 0);

let sortedNumbers = [...numbers].sort((a, b) => b - a);



// Task 8 — String Analyzer

let sentence = "JavaScript is very powerful";

console.log(`Total characters: ${sentence.length}`);
console.log(`Uppercase sentence: ${sentence.toUpperCase()}`);
console.log(`Lowercase sentence: ${sentence.toLowerCase()}`);
console.log(`Contains 'JavaScript': ${sentence.includes("JavaScript")}`);
console.log(`First character: ${sentence.charAt(0)}`); 
console.log(`Last character: ${sentence.slice(-1)}`); 
let wordsArray = sentence.split(" ");
console.log(`Number of words: ${wordsArray.length}`);
console.log(`Replaced sentence: ${sentence.replace("JavaScript", "Python")}`);
console.log(`Array format:`, wordsArray);

// Final Mini Project — Employee Dashboard

let dashEmployees = [
    { id: 101, name: "Arun", department: "IT", salary: 45000, experience: 2 },
    { id: 102, name: "Priya", department: "HR", salary: 50000, experience: 4 },
    { id: 103, name: "Karthi", department: "IT", salary: 65000, experience: 6 }
];

const EmployeeDashboard = {
    getAllEmployees: () => dashEmployees,

    searchByName: (name) => dashEmployees.filter(emp => emp.name.toLowerCase().includes(name.toLowerCase())),

    filterByDept: (dept) => dashEmployees.filter(emp => emp.department === dept),

    getHighEarners: () => dashEmployees.filter(emp => emp.salary > 50000),

    getTotalSalary: () => dashEmployees.reduce((sum, emp) => sum + emp.salary, 0),

    getHighestPaid: () => dashEmployees.reduce((prev, current) => (prev.salary > current.salary) ? prev : current),

    getExperienced: () => dashEmployees.filter(emp => emp.experience > 3),

    sortBySalaryAsc: () => [...dashEmployees].sort((a, b) => a.salary - b.salary),
    sortBySalaryDesc: () => [...dashEmployees].sort((a, b) => b.salary - a.salary),

    getStatistics: function() {
        let totalEmps = dashEmployees.length;
        let totalSal = this.getTotalSalary();
        let highest = this.getHighestPaid().salary;
        let average = Math.round(totalSal / totalEmps);

        return {
            "Total Employees": totalEmps,
            "Total Salary": `₹${totalSal}`,
            "Highest Salary": `₹${highest}`,
            "Average Salary": `₹${average}`
        };
    }
};

console.log(EmployeeDashboard.getStatistics());