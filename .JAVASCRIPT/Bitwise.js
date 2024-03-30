a = 3;
b = 5;
console.log(a & b);
// 011 101
console.log(a | b);
console.log(~b);

//  101
//    1
//    111
//      1
//
console.log(a ^ b);
console.log(a << 2);
// 0011  1100
console.log(a >> b);

// decimal to binary
var num = 15;
var str = "";
while (num > 0) {
  let remainder = num % 2;
  num = Math.floor(num / 2);
  str += remainder;
}
console.log(str);

//binary to decimal
var num = 1000;
var res = 0;
var count = 0;
while (num > 0) {
  let remainder = num % 10;
  num = Math.floor(num / 10);
  res = res + Math.pow(2, count++) * remainder;
  console.log(count);
}
console.log(res);

//where we use setTimeout and setInterval
