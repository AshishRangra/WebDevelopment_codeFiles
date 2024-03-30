// var x = 122;
// function a() {
//   return function b() {
//     console.log(x);
//   };
// }
// a()();
// var z = a();
// z();
// console.log(z);
// var count = 1;
// function counter() {
//   count++;
// }
// // counter();
// // console.log(counter());
// console.log(count);

//Constructor fxn
function Counter() {
  var x = 10;
  this.incrementCounter = function () {
    console.log(x++);
  };
  this.decrementCounter = function () {
    console.log(x--);
  };
}
var cout = new Counter();
cout.decrementCounter();
cout.decrementCounter();
cout.decrementCounter();
cout.decrementCounter();
cout.incrementCounter();
cout.incrementCounter();

var cout2 = new Counter();
cout2.decrementCounter();
cout2.decrementCounter()
