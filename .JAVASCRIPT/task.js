// // function print() {
// //   console.log("hello");
// // }
// // setInterval(function () {
// //   print();
// // }, 360);

// // function print(){
// //     console.log("Hello")
// // }
// // setInterval(print,180)

// // var arr = [1, 2, 2, 3, 4, 4];
// // let duplicate = arr.filter(function (a, b) {
// //   if (a === b) console.log(b);
// // });

// // console.log(duplicate);

// // for (let i = 0; i < arr.length; i++) {
// //   if (arr[i] === arr[i + 1]) {
// //     console.log(arr[i]);
// //   }
// // }

// // var arr = [1, 2, 3, 4, 4, 2];
// // arr.sort()
// // let duplicate = arr.filter((val, index, arr) => {
// //   if (arr[index] === arr[index + 1]) {
// //     return arr[index];
// //   }
// // });
// // console.log(duplicate);

// // var arr = [1, 2, 3, 4, 4, 2];
// // arr.sort();
// // let duplicate = arr.filter((val, index, arr) => {
// //   if (index + 1 !== arr.findLastIndex(index)) {
// //     return val;
// //   }
// // });
// // console.log(duplicate);

// // const array = [1, 2, 3, 4, 2, 5, 1];
// // const duplicates = array.filter((value, index, self) => {
// //   return index !== self.lastIndexOf(value);
// // });
// // console.log(duplicates);

// var arr = [1, 2, 3, 4, 32, 1, 3];
// var res = arr.filter((value, index, arr) => {
//   // return arr.indexOf(value) !== index;
//   // console.log("value is " + value);
//   // console.log("index of value is " + index);
//   console.log(arr.indexOf(value));
//   return arr.indexOf(value);
// });

// console.log(res);
// const fruits = ["Apple", "Orange", "Apple", "Mango"];
// let position = fruits.filter((value, index, fruits) => {
//   console.log(fruits.indexOf(value));
// });
// console.log(position);

const ar1 = [1, 2, 3, 4, 5, 6];
function print(arr) {
  console.log(...arr);
}
print(ar1);

