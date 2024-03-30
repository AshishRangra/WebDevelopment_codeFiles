a = [1, 3, 2, 4, 87, 6, 66, 7, 89, 1, 2, 1, 31, 3, 0, 2];
console.log(
  a.sort(function (a, b) {
    return b - a;
  })
);
// b = a.toSorted();
// console.log(b);
console.log(
  a.sort(function () {
    return 0.5 - Math.random();
  })
);

console.log(Math.max.apply(this, a));

const no = [1, 2, 3, 4, 5, 6, 7, 8];
const so = no.map((x) => x * 2);

console.log(so);
//diff b/w map and flatmap
console.log(no.flatMap((x) => x * 2));

console.log(no.filter((x) => x > 4));

console.log(no.reduce((x, y) => x + y));
console.log(no.reduceRight((x, y) => x - y));
console.log(no.every((x) => x > 5));
console.log(no.some((x) => x < 6));

const obj = {
  name: "Ashish",
  age: 23,
};
console.log(Object.keys(obj));

console.log(Object.entries(obj));
const str = "ASHISH";
console.log(Array.from(str));
console.log(no.join())

console.log(Array.isArray(no))

const ofArr=Array.of(1,2,3)
console.log(ofArr)