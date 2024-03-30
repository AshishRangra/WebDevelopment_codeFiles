function print() {
  console.log("Set timeout");
}

// setTimeout(print, 1000); // Call the print() function after a delay of 2
let sDate = new Date();
let eDate = sDate;

// console.log("b");

const myPromise = new Promise(function (acc, rej) {
  setTimeout(() => {
    acc("Promise");
  }, 1000);
});
setTimeout(() => {
  console.log("SetTimeout2");
}, 5000); //
myPromise.then(print);
while (eDate < sDate + 10000) {
  console.log("jfnskjn");
  eDate = new Date();
}
console.log("jfnskjn");

