const readline = require('readline');


const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});


// Function to perform addition
function add(x, y) {
  return x + y;
}


// Function to perform subtraction
function subtract(x, y) {
  return x - y;
}


// Function to perform multiplication
function multiply(x, y) {
  return x * y;
}


// Function to perform division
function divide(x, y) {
  if (y === 0) {
    return "Cannot divide by zero!";
  }
  return x / y;
}

