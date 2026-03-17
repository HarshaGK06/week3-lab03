#!/usr/bin/env node

/**
 * CLI Calculator Application
 * 
 * Supported Operations:
 * - Addition (+)
 * - Subtraction (-)
 * - Multiplication (*)
 * - Division (/)
 */

const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

function add(a, b) {
  return a + b;
}

function subtract(a, b) {
  return a - b;
}

function multiply(a, b) {
  return a * b;
}

function divide(a, b) {
  if (b === 0) {
    return 'Error: Division by zero';
  }
  return a / b;
}

function performCalculation(num1, operator, num2) {
  const n1 = parseFloat(num1);
  const n2 = parseFloat(num2);

  if (isNaN(n1) || isNaN(n2)) {
    return 'Error: Invalid input. Please enter valid numbers.';
  }

  switch (operator) {
    case '+':
      return add(n1, n2);
    case '-':
      return subtract(n1, n2);
    case '*':
      return multiply(n1, n2);
    case '/':
      return divide(n1, n2);
    default:
      return 'Error: Unsupported operation. Use +, -, *, or /';
  }
}

function startCalculator() {
  console.log('======================================');
  console.log('     Welcome to Node.js Calculator    ');
  console.log('======================================');
  console.log('\nSupported Operations:');
  console.log('  + : Addition');
  console.log('  - : Subtraction');
  console.log('  * : Multiplication');
  console.log('  / : Division');
  console.log('\nExample: 10 + 5');
  console.log('Type "exit" to quit\n');

  promptUser();
}

function promptUser() {
  rl.question('Enter calculation (e.g., 10 + 5): ', (input) => {
    if (input.toLowerCase() === 'exit') {
      console.log('\nThank you for using the calculator!');
      rl.close();
      return;
    }

    const parts = input.trim().split(/\s+/);
    if (parts.length !== 3) {
      console.log('Invalid format. Please use: number operator number\n');
      promptUser();
      return;
    }

    const [num1, operator, num2] = parts;
    const result = performCalculation(num1, operator, num2);
    console.log(`Result: ${result}\n`);
    promptUser();
  });
}

module.exports = {
  add,
  subtract,
  multiply,
  divide,
  performCalculation
};

// Run CLI only if executed directly
if (require.main === module) {
  startCalculator();
}
