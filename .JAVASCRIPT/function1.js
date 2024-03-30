func(5);

function func(a) {
  console.log(a);
}

ab = 4;
console.log(ab);
var ab;
(function () {
  console.log("Hello");
})();

function ca(a, b) {
  return a - b;
}
var arq = [1, 2, 3];
var res = ca.call(this, arq, 5);
console.log(res);
console.log(ca(3, 4));

function print(name) {
  return `"hello,${name}`;
}
console.log(print.apply(null, arq));

function a() {
  console.log("");
}
a(["1", "2", "3"]);

function sum() {
  for (let i = 0; i < arguments.length; i++) {
    console.log(arguments);
  }
}
sum([1,2,3,4,5,6,7])