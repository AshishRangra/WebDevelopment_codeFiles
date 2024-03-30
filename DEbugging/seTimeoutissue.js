console.log("start");
setTimeout(function () {
  console.log("Callback");
}, 5000);
console.log("end");
let startTime = new Date();
let endTime = startTime;
while (endTime < startTime + 10000) {
  endTime = new Date();
}
console.log("end2");
