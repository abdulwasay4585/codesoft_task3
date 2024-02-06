let currentInput = "";
let operator = "";
let firstOperand = "";

function clearDisplay() {
  currentInput = "";
  operator = "";
  firstOperand = "";
  updateDisplay();
}

function appendValue(value) {
  currentInput += value;
  updateDisplay();
}

function setOperator(newOperator) {
  operator = newOperator;
  firstOperand = currentInput;
  currentInput = "";
  updateDisplay();
}

function calculate() {
  if (operator && firstOperand && currentInput) {
    switch (operator) {
      case "+":
        currentInput = parseFloat(firstOperand) + parseFloat(currentInput);
        break;
      case "-":
        currentInput = parseFloat(firstOperand) - parseFloat(currentInput);
        break;
      case "*":
        currentInput = parseFloat(firstOperand) * parseFloat(currentInput);
        break;
      case "/":
        currentInput = parseFloat(firstOperand) / parseFloat(currentInput);
        break;
      default:
        break;
    }
    operator = "";
    firstOperand = "";
    updateDisplay();
  }
}

function updateDisplay() {
  document.getElementById("display").innerText = currentInput || "0";
}
