var random_no = Math.floor(Math.random() * 10);
var user_input = input("Enter any integer Value");
while (user_input != random_no) {
  user_input = input("Enter any integer Value");
}
console.log("You Win");

// console.log(`Random no. is ${random_no}`)