"use strict";

// Variable Declaration
const prompt = require("prompt-sync")();
let operator = null;
let numberA = null;
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
let message = "\n";

/* 
Function getValidNumberInput 
Objective: to get an input number from user using prompt()
           and check validity of input number
           if user doesn't input any value or whitespace, it will automatically define as 0
           return the valid number based on user input
*/
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

/* 
Function getValidOperatorInput 
Objective: to get an operator used by the user to perform calculation using prompt()
           only 6 pre-predefined operator that can be chosen by the user.
           this function also check validity of the input operator
           return the valid operator chosen by the user
*/
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

/* 
Function add
Objective: to perform addition calculation
           return the result of addition calculation
*/
function add(a, b) {
  return a + b;
}

/* 
Function subtract
Objective: to perform subtraction calculation
           return the result of subtraction calculation
*/
function subtract(a, b) {
  return a - b;
}

/* 
Function multiply
Objective: to perform multiplication calculation
           return the result of multiplication calculation
*/
function multiply(a, b) {
  return a * b;
}

/* 
Function divide
Objective: to perform division calculation
           return the result of division calculation
*/
function divide(a, b) {
  if (b == 0) {
    console.log("Error: Division by zero!");
    return null;
  } else {
    return a / b;
  }
}

/* 
Function modulo
Objective: to perform modulo calculation
           return the result of modulo calculation
*/
function modulo(a, b) {
  return a % b;
}

/* 
Function power
Objective: to perform exponential calculation
           return the result of exponential calculation
*/
function power(a, b) {
  return a ** b;
}

/* 
Starting the program by welcoming the user 
and give some initial information to perform calculation
*/
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

  /* 
  This program will ask for operator first to identify
  what type of calculation that would like to be performed by the user
  */
  operator = getValidOperatorInput();

  console.log(
    "You will perform " + validOperationDesc[operatorIndex] + " Operation.\n"
  );
  console.log("\t[A] " + validOperatorValues[operatorIndex] + " [B].");
  console.log("\t ^");
  console.log("\t ^");

  /* 
  Calling getValidNumberInput function to get Number A from user
  */
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

  /* 
  Calling again getValidNumberInput function to get Number B from user
  */
  numberB = getValidNumberInput("B");

  console.log(
    "\n\t[" +
      numberA +
      "] " +
      validOperatorValues[operatorIndex] +
      " [" +
      numberB +
      "]."
  );

  /*
  Use a `switch` statement to call the appropriate arithmetic function 
  based on the operator
  */
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

  // Data Type Analysis & Conditional Output
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

  // Exit Mechanism
  let status = prompt(
    "\n\nDo you want to still perform another calculation?\nType 1 to continue, or type 0 to stop : "
  );
  status == 1
    ? (inProcess = true)
    : status == 0
    ? (inProcess = false)
    : (inProcess = true);
} while (inProcess);
