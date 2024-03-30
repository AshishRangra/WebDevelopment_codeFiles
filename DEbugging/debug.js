// // print();
// // console.log(x);
// // var x = 12;
// // function print() {
// //   console.log("Hello");
// // }

// // console.log(x)
// var x = 10;
// a();
// b();
// console.log(x);
// function a() {
//   var x = 1;
//   console.log(x);
// }
// function b() {
//   var x = 2;
//   console.log(x);
// }
// var a = 10;
// function print() {
//   var x = 12;
// }
// console.log(window.a);
// var a = 10;
// function print1() {
//   var a = 20;
//   print2();
//   function print2() {
//     console.log(a);
//   }
// }
// print1();

// closure is a fxn bundled together with reference to its lexical scope(fxn with lexical scope)
// function a() {
//   let c = 10;
//   // function b() {
//   //   console.log(c);
//   // }
//   // return b; // return b  return b act as closure it will return the fxn b with its lexical environment(scope) bundeled together
//   return function b() {
//     console.log(c);
//   };
// }
// let x = a();
// console.log(x);
// x();

function x() {
  // var i = 12;
  // for (var i = 1; i <= 5; i++) {
  for (let i = 1; i <= 5; i++) {
    setTimeout(() => {
      console.log(i);
    }, 1000);
  }

  // for (var i = 1; i <= 5; i++) {
  //   console.log(i);
  //   function print(i) {
  //     setTimeout(() => {
  //       console.log(i);
  //     }, i * 1000);
  //   }
  //   print(i);
  // }
  console.log("Hello developers");
}
x();
