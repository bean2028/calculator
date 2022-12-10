let output = document.querySelector('#output')
const keys = document.querySelector('#keys');

// Update the display of the calculator
function updateDisplay(e) {
    if (output.textContent == "0") {
        output.textContent = e.target.innerText;
    }
    else {
        output.textContent = output.textContent + e.target.innerText;
    }
}

// Adds two variables
function add(a, b) {
    return a + b;
}

// Subtracts variable B from variable A
function subtract(a, b) {
    return a - b;
}

// Mutiplies two variables
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
keys.addEventListener('click', updateDisplay)