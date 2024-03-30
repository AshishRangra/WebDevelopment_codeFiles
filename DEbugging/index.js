const inp = document.getElementById("inp-txt");
console.log(inp);
const btn = document.querySelector("button");
const pass = document.getElementById("pass");
btn.addEventListener("click", () => {
  
  document.getElementById("disp").textContent = inp.value
    document.getElementById("disp1").textContent = pass.value;

  console.log(inp.value, pass.value);
});
