// let user = {
//   name: "Ashish",
//   age: 22,
//   Designation: "WEb Developer",
//   printDetails: function () {
//     console.log(this.name);
//   },
// };
// user.printDetails();

let user2 = {
  name: "Rangra",
  age: 22,
  Designation: "WEb Developer",
};

// user.printDetails.call(user2);

let userDetail = function (STATE, country) {
  console.log(this.name + STATE, country);
};

userDetail.call(user2, "FJBKJ");

userDetail.call(user2, ["asdas", "dsad", "fdsf", "4dfsds"]);

// bind
let newfun = userDetail.bind(user2, "Delhi", "India");
newfun();

const obj1 = {
  x: 32,
  getX: function () {
    return this.x;
    // console.log(this.x);
  },
};
console.log(obj1.getX);
obj1.getX();
const obj2 = {
  x: 43,
};
console.log(obj1.getX.bind(obj2));




