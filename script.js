function add(a, b) {
  return a + b;
}

function subtract(a,b) {
  return a - b;
}

function multiply(a, b) {
  return a * b;
}

function divide(a, b) {
  if(b === 0) {
    alert('cannot divide by 0');
      return;
  }
  return a / b;
}

function operate(func, a ,b){
  result = func(parseInt(a),parseInt(b));
  return result;
}

// Button information
const numbers = document.querySelectorAll('.number');
const display = document.querySelector('.total');
const addOp = document.querySelector('.add');
const subtractOp = document.querySelector('.subtract');
const multiplyOp = document.querySelector('.multiply');
const divideOp = document.querySelector('.divide');
const equalOp = document.querySelector('.equals');
const clearButton = document.querySelector('.clear');

const allButtons = document.querySelectorAll('.item-interact');

let currentNumber = '';

const calculator = {
  displayValue:'',
  firstOperation: null,
  waitingForSecondOperation: null,
  operator: null,
  total: 0,
  
}

function resetCalculator(){
  calculator.displayValue = '';
  calculator.firstOperation = null;
  calculator.waitingForSecondOperation = null;
  calculator.operator = null;
}

// show display
function showDisplay(displayValue) {
  display.textContent = displayValue;
}

function clear() {
  resetCalculator();
  calculator.total = 0;
  showDisplay('0');
  console.log(`Clearing calculator`);
}


// check number press
numbers.forEach(number => {
  number.addEventListener('click', () => {
    if(!calculator.operator) {
      calculator.displayValue += number.textContent;
      showDisplay(calculator.displayValue);
      calculator.firstOperation = calculator.displayValue;
    }  else {

      // first time around
      calculator.displayValue += number.textContent;
      showDisplay(calculator.displayValue)
      calculator.waitingForSecondOperation = calculator.displayValue;
     
      console.log(calculator)


    }
  });
});

// ADD BUTTON
addOp.addEventListener('click', () => {
  if(calculator.waitingForSecondOperation) {
    calculator.total += operate(add, calculator.firstOperation, calculator.waitingForSecondOperation);
    showDisplay(calculator.total);
    calculator.waitingForSecondOperation = null;
    calculator.displayValue = '';
    console.log(calculator);
  } else {
    if (!calculator.operator) {
      calculator.operator = add;
      calculator.displayValue = "";
      console.log(calculator);
    } else if (calculator.operator === add) {
      return;
    }
  }
  
 
});

subtractOp.addEventListener('click', () => {
  
});

multiplyOp.addEventListener('click', () => {
  calculator.operator = multiply;
  calculator.displayValue = "";
  console.log(calculator);
});

divideOp.addEventListener('click', () => {
  calculator.operator = divide;
  calculator.displayValue = "";
  console.log(calculator);
});

equalOp.addEventListener('click', () => {
  
  
})

clearButton.addEventListener('click', () => clear());




