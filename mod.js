const display = document.querySelector('.display');
const buttons = document.querySelectorAll('button');
let value1 = '';

buttons.forEach(button => {
  button.addEventListener('click', (event) => {
    event.preventDefault(); //line ni ai 
    const value = button.textContent;
    
    if (value === 'C') {
      value1 = '';
      operator = '';
      display.value = '';
      
    } else if (value === '-') {
      value1 = display.value;
      operator = '-';
      display.value = '';

      
    } else if (value === '+') {
  value1 = display.value;
  operator = '+';
  display.value = '';
      
    } else if (value === '=') {
      if (operator === '+') {
    display.value = Number(value1) + Number(display.value);
  } else if (operator === '-') {
    display.value = Number(value1) - Number(display.value);
  }
  value1 = '';
  operator = '';
} else {
  display.value += value;
}
  });
});
