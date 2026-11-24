const display = document.querySelector('.display');
const buttons = document.querySelectorAll('button');
let value1 = '';

buttons.forEach(button => {
  button.addEventListener('click', (event) => {
    event.preventDefault(); //line ni ai 
    const value = button.textContent;
    

    
    if (value === 'C') {
      value1 = '';
      display.value = '';
    } else if (value === '-') {
      // da val
      alert("hello world");
    } else if (value === '+'){
      value1 = display.value;
      display.value = '';
      }else if (value === '=') {
       let sum = Number(value1) + Number(display.value);
       display.value = sum;
    }
    else {
          display.value += value;

    }
  });
});
