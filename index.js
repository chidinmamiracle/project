function operator(val) {
  alert(val);
  document.getElementById('result').value += val;
}

function clearScreen() {
  alert('i clicked clear');
  document.getElementById('result').value = '';
}

function number(val) {
  alert(val);
  document.getElementById('result').value += val;
}

function equal() {
  alert('i clicked equal');
  let x = document.getElementById('result').value;
  let y = eval(x);
  document.getElementById('result').value = y;
}

function decimal() {
  alert('i clicked decimal');
  document.getElementById('result').value = '';
}
