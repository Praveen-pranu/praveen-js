// Function for addition
function add(a, b) {
    return a + b;
}

// Function for subtraction
function subtract(a, b) {
    return a - b;
}

// Function for multiplication
function multiply(a, b) {
    return a * b;
}

// Function for division
function divide(a, b) {
    if (b === 0) {
        return 'Error: Division by zero is undefined';
    }
    return a / b;
}

// Function for modulus
function modulus(a, b) {
    if (b === 0) {
        return 'Error: Division by zero is undefined';
    }
    return a % b;
}

let num1 = 20;
let num2 = 15;

console.log("Addition: " + add(num1, num2));
console.log("Subtraction: " + subtract(num1, num2));
console.log("Multiplication: " + multiply(num1, num2));
console.log("Division: " + divide(num1, num2));
console.log("Modulus: " + modulus(num1, num2));