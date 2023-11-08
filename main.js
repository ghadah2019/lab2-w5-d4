let result = document.getElementById('result');

function appendNumber(number) {
  result.value += number;
}

function appendOperator(operator) {
  result.value += operator;
}

function calculate() {
  let expression = result.value;
  let answer = eval(expression);
  result.value = answer;
}

function clearResult() {
  result.value = '';
}