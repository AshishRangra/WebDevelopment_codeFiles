console.log("Hello");
// Var Variable
var a = 1;
console.log(a);
{
  var a = 12;
  console.log(a);
}
a = 13;
console.log(a);

// let Variable
let b = 4;
console.log(b);

{
  let b = 12222;
  console.log("block: ", b);
}

// b=12
console.log(b);
// let b = 23;
// console.log(b);

// Const Variable
const c = 3;
c = 5; // error, because we can't change the value of const variable once it has
console.log(c);
