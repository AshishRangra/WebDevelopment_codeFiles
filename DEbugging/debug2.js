// setTimeout(function () {
//   console.log("Timeout");
// }, 5000);
// function x(y) {
//   console.log("x");
//   y();
// }
// x(function () {
//   console.log("y");
// });

// function dh() {
//   var count = 0;
//   function print() {
//     console.log(count);
//   }
//   print();
// }
// dh();

function click() {
  let count = 0;
  document.getElementById("btn").addEventListener("click", () => {
    console.log("button clicked", count++);
  });
}
click();
