// function fun(data) {
//   return new Promise((resolve, reject) => {
//     setTimeout(() => {
//       if(data==="undefined"){
//         reject("Data is not defined")
//       }
//       else{
//         console.log("Data ", data);
//         resolve("success")
//       }

//     },
//      3000);
//   });
// }

// function getData(data) {
//   console.log("fetching data");
//   return new Promise((resolve, reject) => {
//     setTimeout(() => {
//       console.log("Data " + data);
//       resolve("Success");
//     }, 2000);
//   });
// }
// getData(1).then(() => {
//   console.log("success");

//   getData(2).then(() => {
//     console.log("success");
//   });
// });

function getData(data) {
  console.log("fetching data");
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      console.log("Data " + data);
      resolve("Success");
    }, 2000);
  });
}
getData(1).then(() => {
  console.log("success");
  return getData(2).then(() => {
    console.log("success");
  });
});
