// var arr = [100, 129, 200, 300, 123, 65, 444];
var arr = [250, 645, 300, 900, 50];
for (let i = 0; i < arr.length; i++) {
  arr[i] = arr[i] - (arr[i] * 10) / 100;
}
for (let val of arr) {
  console.log(val);
}

//  ;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;
var a = ["Bloomberg", "Microsoft", "Uber", "Google", "IBM", "Netflix"];
a.shift();
a.splice(1, 1, "OLA");
a.push("Amazon");
for (let val of a) {
  console.log(val);
}
