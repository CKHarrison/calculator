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
  result = func(a,b);
  return result;
}

// console.log(operate(divide, 3, 0));