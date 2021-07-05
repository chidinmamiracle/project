function operator(val) {
  document.getElementById('evaluation').value += val;
}

function clearScreen() {
  document.getElementById('evaluation').value = '';
}

function number(val) {
  document.getElementById('evaluation').value += val;
}

function equal() {
  let x = document.getElementById('evaluation').value;
  let y = eval(x);
  document.getElementById('evaluation').value = y;
}

function decimal() {
  document.getElementById('evaluation').value = '';
}
