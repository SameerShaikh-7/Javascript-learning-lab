
// 1) Positive or Negative
console.log("1) Positive or Negative") ;

let num = -10;

if (num > 0) {
    console.log(" Number is Positive");
} else if (num < 0) {
    console.log(" Number is Negative");
} else {
    console.log(" Number is Zero");
}

// 2) Even or Odd
console.log("2)Even or Odd") ;

let number = 5;

if (number % 2 == 0) {
    console.log(" Number is Even");
} else {
    console.log(" Number is Odd");
}

// 3) Leap Year
console.log("3)Leap Year or Odd") ;

let year = 2025;

if ((year % 4 == 0 && year % 100 != 0) || (year % 400 == 0)) {
    console.log(" Leap Year");
} else {
    console.log(" Not a Leap Year");
}

// 4) Greatest of 4 number
console.log("4) Greatest of 4 number") ;
let a = 10, b = 25, c = 15, d = 5;

if (a > b && a > c && a > d) {
    console.log("A is greatest");
} else if (b > a && b > c && b > d) {
    console.log(" B is greatest");
} else if (c > a && c > b && c > d) {
    console.log(" C is greatest");
} else {
    console.log(" D is greatest");
}
  
// 5) Voting Eligibility
console.log("5) Voting Eligibility") ;

let age = 18;

if (age >= 18) {
    console.log(" Eligible for voting");
} else {
    console.log(" Not eligible for voting");
}

// 6) Persentage and Grade 
console.log(" 6) Persentage and Grade ") ;
let physics = 90;
let chemistry = 65;
let biology = 75;
let maths = 85;
let computer = 90;

let total = physics + chemistry + biology + maths + computer;
let percentage = total / 5;

console.log(" Percentage =", percentage);

if (percentage >= 90) {
    console.log("Grade A");
} else if (percentage >= 80) {
    console.log("Grade B");
} else if (percentage >= 70) {
    console.log("Grade C");
} else if (percentage >= 60) {
    console.log("Grade D");
} else if (percentage >= 50) {
    console.log("Grade E");
} else if (percentage >= 40) {
    console.log("Grade F");
} else {
    console.log("Fail");
}

// 7) Month name using SWITCH CASE
console.log("7) Month name using SWITCH CASE") ;

let month = 5;

switch (month) {
    case 1: console.log(" January"); break;
    case 2: console.log("February"); break;
    case 3: console.log("March"); break;
    case 4: console.log("April"); break;
    case 5: console.log("May"); break;
    case 6: console.log("June"); break;
    case 7: console.log("July"); break;
    case 8: console.log("August"); break;
    case 9: console.log("September"); break;
    case 10: console.log("October"); break;
    case 11: console.log("November"); break;
    case 12: console.log("December"); break;
    default: console.log("Invalid Month");
}

// 8) Week day from first two letter
console.log("8) Week day from first two letter") ;
let day = "Mo";

if (day == "Mo") {
    console.log("Monday");
} else if (day == "Tu") {
    console.log("Tuesday");
} else if (day == "We") {
    console.log("Wednesday");
} else if (day == "Th") {
    console.log("Thursday");
} else if (day == "Fr") {
    console.log("Friday");
} else if (day == "Sa") {
    console.log("Saturday");
} else if (day == "Su") {
    console.log("Sunday");
} else {
    console.log("Invalid Day");
}

// 9) Maximum of 5 numbers nested if
console.log("9) Maximum of 5 numbers nested if") ;
let n1 = 10, 
    n2 = 20, 
    n3 = 5, 
    n4 = 30, 
    n5 = 25;

let max;

if (n1 > n2) {
    if (n1 > n3) {
        if (n1 > n4) {
            if (n1 > n5) {
                max = n1;
            } else {
                max = n5;
            }
        } else {
            max = n4;
        }
    } else {
        max = n3;
    }
} else {
    if (n2 > n3) {
        if (n2 > n4) {
            if (n2 > n5) {
                max = n2;
            } else {
                max = n5;
            }
        } else {
            max = n4;
        }
    } else {
        max = n3;
    }
}

console.log(" Maximum number is:", max);

// Q10) Basic calculator using swith case
console.log("Q10) Basic calculator using swith case");
alert("Q10) Basic calculator using swith case");

let num1 = parseInt(prompt("Q10: Enter FIRST number:"));
let num2 = parseInt(prompt("Q10: Enter SECOND number:"));
let choice = prompt("Q10: Enter operator (+, -, *, /):");

switch (choice) {
    case "+":
        console.log("Ans =", num1 + num2);
        break;

    case "-":
        console.log("Ans =", num1 - num2);
        break;

    case "*":
        console.log("Ans =", num1 * num2);
        break;

    case "/":
        console.log("Ans =", num1 / num2);
        break;

    default:
        console.log("Invalid Operator");
}



// Q11)Basic calculator using IF ELSE LADDER
console.log("Q11)Basic calculator using IF ELSE LADDER");
alert("Q11)Basic calculator using IF ELSE LADDER");

let x = parseInt(prompt("Q11: Enter FIRST number:"));
let y = parseInt(prompt("Q11: Enter SECOND number:"));
let op = prompt("Q11: Enter operator (+, -, *, /):");

if (op == "+") {
    console.log("Ans =", x + y);
} else if (op == "-") {
    console.log("Ans =", x - y);
} else if (op == "*") {
    console.log("Ans =", x * y);
} else if (op == "/") {
    console.log("Ans =", x / y);
} else {
    console.log("Invalid Operator");
}



// Q12)Program to check traingle validity
console.log("Q12)Program to check traingle validity");
alert("Q12: Check Triangle Validity");

let angle1 = parseInt(prompt("Q12: Enter FIRST angle:"));
let angle2 = parseInt(prompt("Q12: Enter SECOND angle:"));
let angle3 = parseInt(prompt("Q12: Enter THIRD angle:"));

let sum = angle1 + angle2 + angle3;

if (sum == 180 && angle1 > 0 && angle2 > 0 && angle3 > 0) {
    console.log("Triangle is Valid");
} else {
    console.log("Triangle is Not Valid");
}

