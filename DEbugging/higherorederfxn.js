// function calculateArea(radius) {
//   for (let i = 0; i < radius.length; i++) {
//     console.log(Math.PI * radius[i] * radius[i]);
//   }
// }
// var radius = [1, 2, 3, 4, 5, 6];
// calculateArea(radius);
// console.log();
// function calculateCircumference(radius) {
//   for (let i = 0; i < radius.length; i++) {
//     console.log(2 * Math.PI * radius[i]);
//   }
// }
// calculateCircumference(radius);
// console.log();
// function calculateDiameter(radius) {
//   for (let i = 0; i < radius.length; i++) {
//     console.log(2 * radius[i]);
//   }
// }
// calculateDiameter(radius);
function calculate(logic) {
  for (let i = 0; i < radius.length; i++) {
    logic(radius[i]);
  }
}
function Area(radius) {
  console.log(Math.PI * radius * radius);
}
function circumfernce(radius) {
  console.log(2 * Math.PI * radius);
}
function Diameter(radius) {
  console.log(2 * radius);
}
var radius = [1, 2, 3, 4, 5, 6];

calculate(Area);
console.log();
calculate(circumfernce);
console.log();
calculate(Diameter);

const arr = [1, 2, 3, 4, 5, 6];
// const output = arr.map(() => {
//   return arr.toString(2);
// });

// console.log(output);

function binary(x) {
  return x.toString(2);
}

const output = arr.map(binary);

console.log(output);

const obj = [
  { name: "AShish", age: 12 },
  { name: "ASh]]]h", age: 122 },
  { name: "Rangra", age: 12 },
];
const output2 = obj.reduce(function (x, y) {
  if (x[y.age]) {
    ++x[y.age];
  } else {
    x[y.age] = 1;
  }
  return x;
}, {});

console.log(output2);
const output3 = obj
  .filter((x) => {
    if (x.age < 20) {
      return x.age;
    }
  })
  .map((x) => x.name);
console.log(output3);
