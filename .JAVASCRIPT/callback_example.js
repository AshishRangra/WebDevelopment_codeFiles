var arr = [87, 90, 95, 87, 45, 93];
const findd = arr.filter((x) => {
  return x >= 90;
});

console.log(findd);
var ar2 = [1, 2, 3, 4];
const sum = ar2.reduce((x, y) => {
  return x + y;
});
console.log(sum);
const mul = ar2.reduce((x, y) => {
  return x * y;
});
console.log(mul);
