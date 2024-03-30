function fetchInput() {
  let input = document.getElementById("myInput");
  var input1 = input.value;
  console.log(input1);
  let disp = document.getElementById("displayValue");
  disp.textContent = "Entered value is :  " + input1;
}
let btn = document.getElementById("btn");
btn.addEventListener("click", fetchInput);
