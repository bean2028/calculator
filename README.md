# calculator

When a user clicks a number button
- Append the number in the display

When a user clicks an operator button
- If the variable num1 is empty
    - Store the current display numbers as a variable (num1) and store the operator variable
- If the variable num1 is not empty
    - Store the current display in num2 and perform operate function with the operator, num1, and num2 variables
    - Update the display to show the output
    - Store the output in num1 and update the operator variable

When a user clicks the equals button
    - Store the current display in num2 and perform operate function with the operator, num1, and num2 variables
    - Update the display to show the output

When the user clicks the clear button
    - Clear the display and set the operator, num1, and num2 variables to null