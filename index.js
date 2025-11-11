"use strict";

const prompt = require("prompt-sync")();
let numberA = null;
let operator = null;
let numberB = null;
let numberResult = null;
let oddEvenStatus = null;
let inProcess = true;
let operatorIndex = null;
const validOperatorValues = ["+", "-", "*", "/", "%", "**"];
const validOperationDesc = [
  "Addition",
  "Subtraction",
  "Multiplication",
  "Division",
  "Modulo",
  "Exponential",
];

function getValidNumberInput(num) {
  let needValidNumber = true;
  let inputNumber;
  let countLoop = 0;
  while (needValidNumber) {
    countLoop++;
    if (countLoop > 1) {
      inputNumber = prompt(
        "You did not enter a valid number. Please input a valid number "
      );
    } else {
      inputNumber = prompt(
        "Please now input the number [" +
          num +
          "] you want to perform " +
          validOperationDesc[operatorIndex] +
          " Operation: "
      );
    }

    inputNumber = Number(inputNumber.trim());
    needValidNumber = isNaN(Number(inputNumber));
  }
  return inputNumber;
}

function getValidOperatorInput() {
  let needValidOperator = true;
  let inputOperator;
  let countLoop = 0;

  while (needValidOperator) {
    countLoop++;
    if (countLoop > 1) {
      inputOperator = prompt(
        "You did not enter a valid operator. Please choose a valid operator : "
      );
    } else {
      inputOperator = prompt(
        "Please choose the mathematical operations you want to perform : "
      );
    }

    for (let i = 0; i < 6; i++) {
      needValidOperator = !(validOperatorValues[i] === inputOperator);
      if (!needValidOperator) {
        operatorIndex = i;
        break;
      }
    }
  }
  return inputOperator;
}

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
  if (b == 0) {
    console.log("Error: Division by zero!");
    return null;
  } else {
    return a / b;
  }
}

function modulo(a, b) {
  return a % b;
}

function power(a, b) {
  return a ** b;
}

// Start the program
let message = "\n";

for (let i = 0; i < 50; i++) {
  message = message + "*";
}
message = message + "\n";
message = message + "***   WELCOME TO TANTO'S CALCULATION PROGRAM   ***\n";
for (let i = 0; i < 50; i++) {
  message = message + "*";
}
console.log(message + "");

do {
  message =
    "\nIn this program, you can choose 6 different mathematical operations.\n" +
    "The mathematical operations that you can choose are:\n" +
    "1. Addition (+)          -> type + to select\n" +
    "2. Subtraction (-)       -> type - to select\n" +
    "3. Multiplication (*)    -> type * to select\n" +
    "4. Division (/)          -> type / to select\n" +
    "5. Modulo (%)            -> type % to select\n" +
    "6. Exponential/Power (**)-> type ** to select\n";

  console.log(message);

  operator = getValidOperatorInput();

  console.log(
    "You will perform " + validOperationDesc[operatorIndex] + " Operation.\n"
  );
  console.log("\t[A] " + validOperatorValues[operatorIndex] + " [B].");
  console.log("\t ^");
  console.log("\t ^");

  numberA = getValidNumberInput("A");

  console.log(
    "You will perform " + validOperationDesc[operatorIndex] + " Operation.\n"
  );
  console.log(
    "\t[" + numberA + "] " + validOperatorValues[operatorIndex] + " [B]."
  );
  message = "\t    ";
  for (
    let i = 0;
    i < validOperatorValues[operatorIndex].length + String(numberA).length - 1;
    i++
  ) {
    message = message + " ";
  }
  message = message + "  ^";
  console.log(message);
  console.log(message);

  numberB = getValidNumberInput("B");

  console.log(
    "\t[" +
      numberA +
      "] " +
      validOperatorValues[operatorIndex] +
      " [" +
      numberB +
      "]."
  );

  switch (operator) {
    case "+":
      numberResult = add(numberA, numberB);
      break;
    case "-":
      numberResult = subtract(numberA, numberB);
      break;
    case "*":
      numberResult = multiply(numberA, numberB);
      break;
    case "/":
      numberResult = divide(numberA, numberB);
      break;
    case "%":
      numberResult = modulo(numberA, numberB);
      break;
    case "**":
      numberResult = power(numberA, numberB);
      break;
  }

  numberResult =
    numberResult ?? "Result is undefined or null, something went wrong!";

  console.log("Calculation Result: " + numberResult);

  message = "\n****     CALCULATION RESULT ANALYSIS     ****\n";
  console.log(message);
  if (typeof numberResult === "number") {
    if (Number.isInteger(numberResult) && numberResult < 0) {
      console.log("The result is: Negative Integer");
    } else if (Number.isInteger(numberResult) && numberResult > 0) {
      console.log("The result is: Positive Integer");
    } else if (Number.isInteger(numberResult) && numberResult == 0) {
      console.log("The result is: Zero");
    } else if (!Number.isInteger(numberResult) && numberResult < 0) {
      console.log("The result is: Negative Floating-point");
    } else if (!Number.isInteger(numberResult) && numberResult > 0) {
      console.log("The result is: Positive FLoating-point");
    } else {
      console.log("Uncategorized the type of calculation result");
    }
  } else if (typeof numberResult === "string") {
    console.log("Error : " + numberResult);
  } else {
    console.log("Unexpected type of calculation result");
  }

  //  (Odd or Even) Analyzing result number
  if (typeof numberResult === "number" || typeof numberResult === "bigint") {
    oddEvenStatus = numberResult % 2 == 0 ? "Even" : "Odd";
    console.log("The result is: " + oddEvenStatus);
  }

  let status = prompt(
    "\n\nDo you want to still perform another calculation?\nType 1 to continue, or type 0 to stop : "
  );

  status == 1
    ? (inProcess = true)
    : status == 0
    ? (inProcess = false)
    : (inProcess = true);
} while (inProcess);
