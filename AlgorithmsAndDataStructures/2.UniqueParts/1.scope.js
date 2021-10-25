function scope1() {
  var top = "top";
  var bottom;
  bottom = "bottom";
  console.log(bottom);
}

// scope1();

function scope2(print) {
  if (print) {
    var insideIf = "12";
  }
  console.log(insideIf);
}
// scope2(true);

var a = 1;
function four() {
  if (true) {
    var a = 4;
  }
  console.log(a);
}
four();

function scope3(print) {
  if (print) {
    let insideIf = "12";
  }
  console.log(insideIf);
}

scope3(true);
