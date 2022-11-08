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


// Function to calculate BMI
function calculateBMI(weight, height) {

  // Convert height from cm to meters
  let heightMeters = height / 100;

  // Calculate BMI
  let bmi = weight / (heightMeters * heightMeters);
  return bmi.toFixed(2); // Return BMI rounded to 2 decimal places
}

