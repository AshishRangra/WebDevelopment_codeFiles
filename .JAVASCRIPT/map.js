var mp = new Map([
  ["fruit1", "apple"],
  ["fruit2", "banana"],
  ["fruit3", "orange"],
  ["fruit4", "Grapes"],
]);
for (let value of mp) {
  console.log(value[0], value[1]);
}
var set = new Set(["a", "b", "b", "c"]);
for (let value of set) {
  console.log(value);
}

var arr = [1, 2, 3, 4, 5, 6];

for (let val in arr) {
  console.log(val);
  console.log(arr[val]);
}

var obj = {
  name: "zhangsan",
  age: 28,
  roll: 12,
};
for (let val in obj) {
  console.log(val);
  console.log(obj[val]);
}

arr.forEach(function (value, key) {
  console.log("key:" + key + "\tValue:" + value);
});
mp.forEach(function (value, key) {
  console.log("key:" + key + "\tValue:" + value);
});

set.forEach(function (value, key) {
    console.log("key:" + key + "\tValue:" + value);
  });