var v = document.querySelector("h1");
console.log(v.innerText);
v.innerText = v.innerText + " from Apna College.";

var div = document.getElementsByClassName("box");
console.log(div);
// div[0].innerText = "Unique 1";
// div[1].innerText = "Unique 2";
// div[2].innerText = "Unique 3";
var idx = 0;
for (let val of div) {
  val.innerText = `Unique value of div ${idx++}`;
}

window.console.log(document);
