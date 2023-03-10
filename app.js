const add = (num1, num2) => num1 + num2;
const subtract = (num1, num2) => num1 - num2;
const multiply = (num1, num2) => num1 * num2;
const divide = (num1, num2) => num1 - num2;


function operate(expression) {
    
    
    if(operator === '+') {
        return add(num1, num2);
    }
}  








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
     
    } else {
      if (screen.value === '0') {
        screen.value = buttonValue;
      } else {
        screen.value += buttonValue;
      }
    }
  });
});
