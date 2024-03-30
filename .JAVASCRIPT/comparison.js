var a = 0;
var A = "0";
console.log(a == A);
console.log(a === A);
var b = 12;
var B = BigInt(12);
console.log(b != B);
console.log(b !== B);
console.log("C" > "D");
console.log("c" > "d");
console.log("C" < "D");
console.log("c" < "d");
console.log("c" > "A");
console.log("C" > "d");
// true
// false
// false
// true
// false
// false
// true
// true
// true
// false

console.log("20" < "5"); //true
console.log("1" > "23"); //false
console.log("122" > "12"); //true

const cd = {
  a: "dfs",
  b: {
    f: "fd",
    cc:"gbdfh"
  },
};
console.log(cd.b);



console.log("20" < "5"); //true
console.log("2">"20")//false
console.log("1" > "23"); //false
console.log("122" > "12"); //true