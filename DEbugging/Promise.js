// const cart = ["shoes", "pants", "kurtas"];
// createOrder(cart, function (orderId) {
//   proceedToPayment(orderId);
// });

// const promise = createOrder(cart);
// promise.then(function (orderId) {
//   proceedToPayment(orderId);
// });

// const cart = ["shoes", "pants", "kurtas"];
// api.createOrder(cart, function (orderId) {
//   proceedToPayment(() => {
//     api.showOrderSummary(function () {
//       updateWallet();
//     });
//   });
// });
// placeholder for a certain period of time untill we will recieve value from asynchronous operation
// a container for future value
// is an object representing the eventual completion or failure of an asynchronous operation

// const cart = ["a", "b", "v", "c", "d"];
// const promise = createOrder(cart);

// promise.then((orderId) => {
//   console.log("next method is callled", orderId);
// });
// promise.catch((error) => {
//   console.log(error.message);
// });

// function createOrder(cart) {
//   const pr = new Promise(function (resolve, reject) {
//     const orderId = "12212";
//     if (!Validated(cart)) {
//       const err = new Error("Cart is not valid");
//       reject(err);
//     } else {
//       resolve(orderId);
//     }
//   });
//   return pr;
// }

// function Validated(cart) {
//   return false;
// }
const cart = ["a", "b", "v", "c", "d"];
const promise = createOrder(cart);

promise
  .then((orderId) => {
    console.log("Order created successfully with ID:", orderId);
  })
  .catch((error) => {
    console.log("Error occurred:", error.message);
  });

function createOrder(cart) {
  const pr = new Promise(function (resolve, reject) {
    const orderId = "12212";
    if (!Validated(cart)) {
      const err = new Error("Cart is not valid");
      reject(err);
    } else {
      resolve(orderId);
    }
  });
  return pr;
}

function Validated(cart) {
  // Example validation logic, replace with your actual validation logic
  return cart.length > 0; // If cart is not empty, consider it valid
}
