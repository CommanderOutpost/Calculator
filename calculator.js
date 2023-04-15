var lastValue = 0;
var initialValue = 0;
var operator = '';
var clearInput = true;
var equalsClicked = false;

document.addEventListener('keydown', function (event) {
  var key = event.key;

  // Handle number keys
  if (key >= '0' && key <= '9') {
    handleCalculatorInput(key);
  }
  // Handle operator keys
  else if (['+', '-', '*', '/'].includes(key)) {
    handleCalculatorInput(key);
  }
  // Handle decimal key
  else if (key === '.') {
    handleCalculatorInput(key);
  }
  // Handle clear key (C)
  else if (key.toUpperCase() === 'C') {
    clearCalculator();
  }
  // Handle equals key (Enter)
  else if (event.code === 'Enter' || event.code === 'NumpadEnter') {
    handleCalculatorInput('=');
  }
});

var lastValue = 0;
var operator = '';
var clearInput = true;

function clearCalculator() {
  var input = document.getElementById('myInput');
  input.value = '';
  clearInput = true;
}

function handleCalculatorInput(buttonValue) {
  var input = document.getElementById('myInput');

  // check if input should be cleared
  if (clearInput) {
    input.value = '';
    clearInput = false;
  }

  // handle operator input
  if (['+', '-', '*', '/', '%', '**', 'sqrt'].includes(buttonValue)) {
    if (buttonValue === '%') {
      input.value = parseFloat(input.value) / 100;
    } else if (buttonValue === '**') {
      input.value = parseFloat(input.value) ** 2;
    } else if (buttonValue === 'sqrt') {
      input.value = Math.sqrt(parseFloat(input.value));
    } else {
      lastValue = input.value;
      operator = buttonValue;
      clearInput = true;
      equalsClicked = false;
    }
  }

  // handle number input
  else if (Number(buttonValue) >= 0 && Number(buttonValue) <= 9) {
    input.value += buttonValue;
  }

  // handle decimal input
  else if (buttonValue === '.') {
    // add decimal point only if input does not already contain one
    if (input.value.indexOf('.') === -1) {
      input.value += buttonValue;
    }
  }

  // handle equals button
  else if (buttonValue === '=') {
    var currentValue = input.value;
    var result;

    if (!equalsClicked) {
      initialValue = currentValue;
      equalsClicked = true;
    } else {
      currentValue = initialValue;
    }

    // perform calculation based on operator
    switch (operator) {
      case '+':
        result = Number(lastValue) + Number(currentValue);
        break;
      case '-':
        result = Number(lastValue) - Number(currentValue);
        break;
      case '*':
        result = Number(lastValue) * Number(currentValue);
        break;
      case '/':
        result = Number(lastValue) / Number(currentValue);
        break;
    }

    // display result and update lastValue for repeated operations
    input.value = result;
    lastValue = result;
    clearInput = true;
  }
}

function clearCalculator() {
  var input = document.getElementById('myInput');
  input.value = '';
  clearInput = true;
}




