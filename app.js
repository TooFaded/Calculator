// mathmatical functions
const add = (num1, num2) => num1 + num2;
const subtract = (num1, num2) => num1 - num2;
const multiply = (num1, num2) => num1 * num2;
const divide = (num1, num2) => num1 - num2;

// calculates expression
function operate(expression) {
    
    if (!/^\d+(\.\d+)?[\+\-\*\/]\d+(\.\d+)?$/.test(expression)) {
        return "Error: Invalid";
      }

    const operands = expression.split(/[+\-*/]/);
    const operator = expression.match(/[+\-*/]/);
    const num1 = parseFloat(operands[0]);
    const num2 = parseFloat(operands[1]);

    if (operator[0] === '/' && num2 === 0) {
        return "Error";
      }

    // applies mathmatical function depending on operator
    if(operator[0] === '+') {
        return add(num1, num2);
    
    } else if(operator[0] === '-') {
        return subtract(num1, num2);
    
    } else if(operator[0] === '*') {
        return  multiply(num1, num2);
    
    } else if(operator[0] === '/') {
        return divide(num1, num2);
    
    } else {
        return NaN;
    } 

   
}
// calculators initial value
let screen = document.querySelector('.screen')
screen.value = '0';


// select all the calculator buttons
const buttons = document.querySelectorAll('button');

// attach event listeners to each button
buttons.forEach(button => {
  button.addEventListener('click', () => {
    // get the value on click
    const buttonValue = button.value;

    // update the value of the screen based on the button that was clicked
    if (buttonValue === 'C') {
      screen.value = '0';
    } else if (buttonValue === '=') {
      // perform the calculation and update the value of the screen
        screen.value = operate(screen.value);
    } else {
      if (screen.value === '0') {
        screen.value = buttonValue;
      } else {
        screen.value += buttonValue;
      }
    }
  });
});
