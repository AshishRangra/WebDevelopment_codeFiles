// cart = ["books", "pen", "marker", "a4sheets"];
// createOrder(cart)
//   .then((orderId) => {
//     console.log(orderId);
//   })
//   .then((orderId) => {
//     return propay(orderId);
//   })
//   .catch((error) => {
//     console.log(error.message);
//   });
// function createOrder(cart) {
//   const pr = new Promise(function (resolve, reject) {
//     if (valid(cart)) {
//       const err = new Error("Rejected");
//       reject(err);
//     } else {
//       const orderId = "12323";
//       resolve(orderId);
//     }
//   });
//   return pr;
// }
// function proceedToPayment(cart) {
//   const pr = new Promise(function (resolve, reject) {
//     if (valid(cart)) {
//       const err = new Error("Rejected");
//       reject(err);
//     } else {
//       const orderId = "12323";
//       resolve(orderId);
//     }
//   });
//   return pr;
// }
// function valid(cart) {
//   return true;
// }
const cart = ["books", "pen", "marker", "a4sheets"];

createOrder(cart)
  .then((orderId) => {
    console.log("Order created successfully with ID:", orderId);
    return proceedToPayment(orderId); // Assuming you meant proceedToPayment instead of propay
  })
  .then((orderId) => {
    console.log("Payment processed for order ID:", orderId);
  })
  .catch((error) => {
    console.log("Error occurred:", error.message);
  });

function createOrder(cart) {
  return new Promise(function (resolve, reject) {
    if (!valid(cart)) {
      const err = new Error("Cart is not valid");
      reject(err);
    } else {
      const orderId = "12323";
      resolve(orderId);
    }
  });
}

function proceedToPayment(orderId) { // Changed function name from propay to proceedToPayment
  return new Promise(function (resolve, reject) {
    // Proceed with payment logic here
    // For simplicity, let's assume payment always succeeds
    resolve(orderId);
  });
}

function valid(cart) {
  // Example validation logic, replace with your actual validation logic
  return cart.length > 0; // If cart is not empty, consider it valid
}
