function display(value) {
  document.getElementById("txt1").value += value;
}

function clearScrn() {
  document.getElementById("txt1").value = "";
}

function ans() {
  var p = document.getElementById("txt1").value;
  var q = eval(p);
  document.getElementById("txt1").value = q;
}
