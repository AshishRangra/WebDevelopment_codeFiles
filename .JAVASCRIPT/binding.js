let geeks = {
  name: "ABC",
  print: function () {
    console.log(this.name);
  },
};

geeks.print();

let print2 = geeks.print;
print2();
let print3 = geeks.print.bind(geeks);
print3();
// Spread operator (...) is used to expand elements (e.g., arrays, strings) into individual elements, either when creating new arrays, merging arrays, or calling functions that expect multiple arguments.
// Rest parameter (...) is used to collect multiple arguments into a single array within a function parameter list, enabling functions to accept a variable number of arguments