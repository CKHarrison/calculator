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

function operate(operator, a ,b){
  switch(operator) {
    case '&#247;':
      total = divide(a, b);
      break;
    case '*':
      total = multiply(a, b);
      break;
    case '-':
      total = subtract(a, b);
      break;
    case '+':
      total = add(a,b);
      break;
  }
  return total;
}

// Button information
const buttons = document.querySelectorAll('button');
const numbers = document.querySelectorAll('.number');
let display = document.querySelector('.total');
const operators = document.querySelectorAll('.operator');
const point = document.querySelector('.point');
const clearBtn = document.querySelector('.clear');
let equation = document.querySelector('.running-total');
 let operator;
 let firstNumber = null;
 let secondNumber = [];
 let total = 0;
 let runningTotal = [];


function resetCalculator(){
  firstNumber = null;
  secondNumber = [];
  operator = null;
  total = 0;
  displayValue = '';
  runningTotal = []
}


function clear() {
  resetCalculator();
  total = 0;
  display.textContent = 0;
  equation.textContent = 0;
  point.disabled = false;
  console.log(`Clearing calculator`);
}


// control numbers
buttons.forEach(button => button.addEventListener('click', () => {
  // if total exists make sure to only calculate on total 
    if(Array.from(button.classList).includes('number')) {
      if(total !== 0) {
    // get end of running total
    secondNumber.push(button.innerText);
    console.log(`Second number: ${secondNumber}`);
    display.innerHTML = secondNumber.join('');
    } else {
      if (Array.from(button.classList).includes('number')) {
        runningTotal.push(button.innerText);
        console.log(runningTotal)
        equation.innerHTML = runningTotal.join('');
        if (Array.from(button.classList).includes('point')) {
          point.disabled = true;
        }
      }
    }
  } else {
      if (Array.from(button.classList).includes('operator')) {
        // If there is nothing in running total, do nothing
        // if(runningTotal.length === 0 || runningTotal[runningTotal.length -1]=== '.') {
        //   return;
        // }
        //TODO
        // MAKE IT SO IF THERE IS AN OPERATOR AT END OF LIST, ONLY CHANGE THE THE OPERATOR
        // THEN NEED TO ADD TOTAL TO NEXT NUMBER UP ABOVE DO IT DYNAMICALLY LIKE THE ODIN EXAMPLE
        if (secondNumber.length > 0) {
          console.log(`before calculation: total: ${total} secondNumber: ${secondNumber}`);
          total = operate(operator, total, parseFloat(secondNumber.join()));
          console.log(`after calculation: total: ${total} secondNumber: ${secondNumber}`);
          display.innerHTML = total;
          runningTotal.push(secondNumber.join(''));
          console.log(runningTotal);
          operator = button.value;
          runningTotal.push(operator);
          equation.innerHTML = runningTotal.join('');
          secondNumber = [];
        } else {
          runningTotal.push(button.value);
          equation.innerHTML = runningTotal.join('');
          total = parseFloat(runningTotal.slice(0, -1).join(''));
          operator = runningTotal[runningTotal.length - 1];
          console.log(`total is ${total} which is a ${typeof (total)}`);
          console.log(`operator: ${operator}`);
          console.log('running total', runningTotal);
        }

      }
    }
}));

// clear button
clearBtn.addEventListener('click', ()=> clear());





// Control operations
operators.forEach(operator => operator.addEventListener('click', ()=> {
  switch(operator.innerText) {
   
    case '&#247;':
      operator = divide;
      break;
    case '*':
      operator = multiply;
      break;
    case '-':
      operator = subtract;
      break;
    case '+':
      operator = add;
      break;
    case '=':
      if(operator) {
        display.innerText = parseFloat(operate(operator, firstNumber, secondNumber)).toFixed(2);
        firstNumber = null;
        secondNumber = [];
        operator = null;
        break;
      } else {
        break;
      }
    default:
      break;

  }

}))




