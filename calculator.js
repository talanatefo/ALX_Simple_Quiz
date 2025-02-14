//Multiplication
let multiplyBtn = document.getElementById("multiply");

function multiply() {
  let number1 = parseFloat(document.getElementById("number1").value);
  let number2 = parseFloat(document.getElementById("number2").value);
  let result = number1 * number2;
  document.getElementById("result").textContent = `Result: ${result}`;
  return;
}

multiplyBtn.addEventListener("click", multiply);

//Addition
let addBtn = document.getElementById("add");
function add() {
  let number1 = parseFloat(document.getElementById("number1").value);
  let number2 = parseFloat(document.getElementById("number2").value);
  let result = number1 + number2;
  document.getElementById("result").textContent = `Result: ${result}`;
  return;
}

addBtn.addEventListener("click", add);

//Subtraction
let subtractBtn = document.getElementById("subtract");
function subtract() {
  let number1 = parseFloat(document.getElementById("number1").value);
  let number2 = parseFloat(document.getElementById("number2").value);
  let result = number1 - number2;
  document.getElementById("result").textContent = `Result: ${result}`;
  return;
}

subtractBtn.addEventListener("click", subtract);

//Division
let divideBtn = document.getElementById("divide");
function divide() {
  let number1 = parseFloat(document.getElementById("number1").value);
  let number2 = parseFloat(document.getElementById("number2").value);
  let result = number1 / number2;
  document.getElementById("result").textContent = `Result: ${result}`;
  return;
}

divideBtn.addEventListener("click", divide);
