let btn = document.createElement("button");
console.log(btn);
btn.innerText = "CLick Me";

document.querySelector("body").prepend(btn);
btn.setAttribute("id", "newButton");
console.log(btn.getAttribute("id"));
document.getElementById("newButton").style.backgroundColor = "red";
document.getElementById("newButton").style.color = "white";

var para = document.querySelector("p");
console.log(para);
// let oldclass = para.getAttribute("class");
// console.log(oldclass);
// para.setAttribute("class", `${oldclass} newClass`);

para.classList.add("newClass");
console.log(para.classList);
