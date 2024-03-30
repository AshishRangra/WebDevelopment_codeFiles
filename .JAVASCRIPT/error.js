function div(a, b) {
  if (typeof b == "string") {
    throw console.error("integer cant be divided by string", error);
  } else {
    return b / a;
  }
}
try {
  let a = 10;
  let b = "sds";
  div(a, b);
} catch (error) {
  console.log(error);
}
