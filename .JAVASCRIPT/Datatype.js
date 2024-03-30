var x = "Ashish";
var y = "Rangra";
var xa = 12;
var z = 123.323;
var a = ["1", 2, false];
console.log(typeof x);
console.log(typeof y);
console.log(typeof z);
console.log(typeof xa);
console.log(typeof a);

const area = { x: "circle", y: "rectangle", a: "triangle" };
console.log(area);
console.log(area.a);
var student = {
  class: 12,
  rol: 23,
  stream: {
    a: "Science",
    b: "Commerce",
    3: "dsff",
  },
};
console.log(student);
console.log(student.class);
console.log(student.stream.a);
// console.log(student.stream.3)

console.log(student.stream[3]);

var n = BigInt(2323232323233);
console.log(n);

var m = Symbol(12344);
console.log(m);

var student = {
  class: 12,
  rol: 23,
  stream: {
    a: "Science",
    b: "Commerce",
    3: "dsff",
  },
};
// console.log(student.stream.3)

console.log("20" - "2");
console.log(100 * "10");

console.log(typeof null);
console.log(typeof NaN);
console.log(-20 / 2);
console.log(0xfe);
vf = 231;
ax = vf.toString();
console.log(typeof ax);
yy = 2.87;
console.log(yy.toFixed());
console.log(yy.toPrecision());

zz = "2323";
console.log(typeof zz);
yt = parseInt(zz);
console.log(typeof yt);
za1 = "32.2";

console.log(typeof za1);
za2 = Number.parseFloat(za1);
console.log(typeof za2);
console.log(za2);

const fruits = ["12", 432, 423, 2, 2, 123, 1, 2, 2];
console.log(fruits);

fruits.copyWithin(8, 1);
console.log(fruits);

const arr = [1, 2, 3, 3, 4, 5, 4, 7, 7, 88, 5];
console.log(arr);
console.log(arr.length);
arr.splice(0, 0, 111, 123, 134);
console.log(arr);
console.log(arr.length);

const arr34 = [1, 2, 3, 4, 5];
const arr35 = [6, 7, 8, 9, 0];
const ar12 = arr34.concat(arr35);
console.log(ar12);
ar12.sort();
console.log(ar12);
const a12 = [
  [1, 2],
  [3, 4],
  [5, 6],
];
console.log(a12);
const b12 = a12.flat();
console.log(b12);
let b21 = b12.reverse();
console.log(b21);

// sorting array in random order
b21.sort(function () {
  return 0.5 - Math.random();
});

console.log(b21);

// String Search Method
const word = "hello world";
let ind = word.indexOf("world");

const word2 = "Hello My Name is ABCellHe";
console.log(word2.startsWith("He"));
console.log(word2.endsWith("He"));

console.log(word2.replace("ABCellHe", "Ashish"));
aw = "Hello,hi,fw,ger,e";
console.log(aw.split(","));
g = 23;
console.log("${g}");

console.log(`Value of g is : ${g}`);

array = ["dgkg", "gnlk", "gkng", 42];

console.log(array.join());
arra4 = ["fnldsk", "gfjn", "gsf"];
arr3 = [1, 2, 3, 4, 5];
console.log(arra4.concat(arr3));

search_array = [1, 2, 3, 4, 5, 6, 7, 9, 8, 0];

console.log(search_array.findIndex((x) => x > 0));
console.log(search_array.findLast((x) => x > 1));

// cd = search_array.toSorted();
// console.log(cd);

// Descending order reverse
search_array.reverse();
console.log(search_array);
console.log(
  search_array.sort(function (a, b) {
    //sort in descending order
    return b;
  })
);
console.log(Math.min.apply(this, search_array));
console.log(Math.max.apply(this, search_array));

const bject = [
  {
    name: "rangr",
    age: 21,
    class: 112,
  },

  {
    name: "A",
    age: 21,
    class: 112,
  },
  {
    name: "Zashish",
    age: 23,
    class: 12,
  },
];
console.log(bject.sort((a,b)=>a.name.toLowerCase-b.name.toLowerCase));

console.log("------------------------------");
console.log(
  bject.sort(function (a, b) {
    return b.class - a.class;
  })
);

console.log(
  bject.sort(function (a, b) {
    return b.class - a.class;
  })
);

console.log(new Date());
const Day = new Date();

console.log(Day.getDay(Day) + 1);

const day = new Date();
console.log(day.getHours());
console.log(day.getMinutes());
console.log(day.getSeconds());
console.log(day.getTime());
console.log(day.getFullYear());

const Day2 = new Date(2002, 12, 25);
console.log(Day2);

// for (let i = 0; i < 5; i++) {
//   row = "";
//   for (let j = i; j < 5; j++) row += "*";
//   console.log(row);
// }

// for (let i = 0; i < 5; i++) {
//   row = "";
//   for (let j = i; j < 5; j++) row += " ";
//   for (let k = 0; k < 2 * i - 1; k++) row += "*";
//   console.log(row);
// }

// for (let i = 0; i < 5; i++) {
//   row = "";
//   for (let j = i; j < 5; j++) row += " ";
//   for (let k = 0; k < 2 * i - 1; k++) row += "*";
//   console.log(row);
// }
console.log("hello");
const arrr = [1, 2, 35, 2, 46, 8, 3, 0];
console.log(
  arrr.sort(function (a, b) {
    return a - b;
  })
);

let fxn = function () {
  console.log("fggsd");
};
fxn();

const table = (a) => {
  console.log(a);
};
table(2);
