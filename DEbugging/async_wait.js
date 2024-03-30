// // const pr = new Promise((resolve, reject) => {
// //   resolve("Promisedkjfndk");
// // });
// // async function print() {
// //   //   return "hello";
// //   return pr;
// // }
// // const data = print();
// // console.log(data);
// // data.then((res) => {
// //   console.log(res);
// // });

// //async and await use to handle promises

// // await is a keyword that can only be used  insdie an async fxn

// const prom = new Promise(function (resolve, reject) {
//   setTimeout(() => {
//     resolve("Hello");
//   }, 9000);
// });
// const prom2 = new Promise(function (resolve, reject) {
//   setTimeout(() => {
//     resolve("Hello");
//   }, 3000);
// });

// async function handlePromise() {
//   //js engine was waiting for promise to be resolved
//   const val = await prom;
//   console.log("hlw");
//   console.log(val);

//   const val2 = await prom2;
//   console.log("hlw");
//   console.log(val2);
// }

// handlePromise();

// // function getData() {
// //   prom.then((res) => {
// //     console.log(res);
// //   });
// //   console.log("hihihihi");
// // }

// // getData();

function left() {
  return console.log("left");
}
function right() {
  return console.log("right");
}
left() || right();

console.log(2 + 3 + +"7");
let x = (y = 10);
console.log(x);
