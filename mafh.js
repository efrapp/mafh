function generateNumber(minVal = 0, maxVal = 1000) {
  const min = Math.ceil(minVal);
  const max = Math.floor(maxVal);
  return Math.floor(Math.random() * (max - min) + min);
}

function displayAddend() {
  const addend1 = document.getElementsByClassName('addend1')[0];
  const addend2 = document.getElementsByClassName('addend2')[0];

  addend1.innerHTML = generateNumber();
  addend2.innerHTML = generateNumber();
  /**
   * TODO: If addend1 is lower than addend2 put it below
   * TODO: Align each digit vertically
   */
}

function displayMultiply() {
  const operand1 = document.getElementsByClassName('operand1')[0];
  const operand2 = document.getElementsByClassName('operand2')[0];
  const result = document.getElementsByClassName('multiply-result')[0];
  const inputResult = document.getElementsByClassName('inputResult')[0];

  operand1.innerHTML = generateNumber(minVal = 1, maxVal = 10);
  operand2.innerHTML = generateNumber(minVal = 1, maxVal = 10);
  result.innerHTML = '---';
  inputResult.value = '';
}

function multiplication() {
  const operand1 = Number(document.getElementsByClassName('operand1')[0].textContent);
  const operand2 = Number(document.getElementsByClassName('operand2')[0].textContent);
  const result = document.getElementsByClassName('multiply-result')[0];

  result.innerHTML = operand1 * operand2;
}

function operand1() {
  return document.getElementsByClassName('operand1')[0];
}

function operand2() {
  return document.getElementsByClassName('operand2')[0];
}

window.addEventListener('DOMContentLoaded', (event) => {
  const btnEl = document.getElementById('nextSum');
  const multiplyBtn = document.getElementById('nextMultiply');
  const showResultBtn = document.getElementById('showResult');

  btnEl.addEventListener("click", displayAddend, false);
  multiplyBtn.addEventListener('click', displayMultiply, false);
  showResultBtn.addEventListener('click', multiplication, false);
});
