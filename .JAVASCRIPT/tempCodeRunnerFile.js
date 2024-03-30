const myPromise = new Promise((res, rej) => {
  //   setTimeout(() => {
  const success = false;
  if (success) {
    res("ressolve");
  } else {
    rej("hv");
  }
  //   }, 360);
});

myPromise
  .then(() => {
    console.log("knldg");
  })
  //   .then((res) => {
  //     console.log("Success", res);
  //   })

  .catch((error) => {
    console.log(error);
  });
