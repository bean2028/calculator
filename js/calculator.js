let output = document.querySelector('#output')
let operator;
let num1;
let num2;
const keys = document.querySelector('#keys');

// Update the display of the calculator
function updateDisplay(e) {
    input = e.target.innerText;
    if (input == "Clear") {
       clear();
    }
    else if ((input == "+") || (input == "-") || (input == "/") || (input == "*") ) {
        operatorClick(input);
    }
    else if (input == "=") {
        equalClick();
    }
    else if (output.textContent == "0") {
        output.textContent = input;
    }
    else {
        output.textContent = output.textContent + input;
    }
}

// Clear display and variables
function clear() {
    output.textContent = "0";
    num1 = null;
    num2 = null;
    operator = null;
}

// Update output, num1, & num2 based on operator clicked
function operatorClick (i) {
    if (num1 == null) {
        num1 = parseInt(output.textContent);
        output.textContent = "0";
        operator = i;
    }
    else {
        num2 = parseInt(output.textContent);
        output.textContent = operate(i, num1, num2)
        num1 = parseInt(output.textContent);
        operator = i;
    }
}

// Update output to show result of math operation
function equalClick () {
    num2 = parseInt(output.textContent);
    output.textContent = operate(operator, num1, num2);
    num1 = output.textContent;
    num2 = null;
}

// Adds two variables
function add(a, b) {
    return a + b;
}

// Subtracts variable B from variable A
function subtract(a, b) {
    return a - b;
}

// Multiplies two variables
function multiply(a, b) {
    return a * b;
}

// Divides variable A by variable B
function divide(a, b) {
    return a / b;
}

// Performs math operation on two variables based on the operator
function operate(operator, num1, num2) {
    if (operator == '+') {
        return add(num1, num2);
    }
    else if (operator == '-') {
        return subtract(num1, num2);
    }
    else if (operator == '*') {
        return multiply(num1, num2);
    }
    else if (operator == '/') {
        return divide(num1, num2);
    }
    else {
        return "Not a valid operator";
    }
}

// Listen for button clicks to update the display
keys.addEventListener('click', updateDisplay);