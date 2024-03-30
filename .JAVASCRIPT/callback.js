arr = [1, 2, 3, 4, 6, 5, 7, 8];
arr.forEach((x) => {
  console.log(x * x);
});

function cube(num) {
  console.log(num * num * num);
}
arr.forEach(cube);

let newArr = arr.map((x) => x * 4);
console.log(newArr);

let evenArray = arr.filter((x) => {
  return x % 2 === 0;
});

console.log(evenArray);

let output = arr.reduce((a, b) => {
  return a > b ? a : b;
});
console.log(output);

// function simple() {
//   console.log("Hello Ashish!");
// }
// function cb(fxn) {
//   setInterval(fxn,360);
// }
// cb(simple);
function simple() {
  console.log("hello");
}
function print(fxn) {
  fxn();
}
print(simple);

setTimeout(simple, 1000);
str = 
  "aaaaaaabbbbbcccdeeeeeeeeeeefghijjjllmmmmmnnnooopprrrrrrrrrsstttuuuuuuvyyyy";

arr = Array.from(str);
console.log(arr);
var q1 = ["January", "February", "March"];
var q2 = ["April", "May", "June"];
var q3 = ["July", "August", "September"];
var q4 = ["October", "November", "December"];
var year = [...q1, ...q2, ...q3, ...q4];
var x = year.join("").toLowerCase().split("").sort().join("")
console.log(x)