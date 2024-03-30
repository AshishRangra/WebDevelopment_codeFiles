var str = [1, 2, 3, 4, 5, 6, 7];
var right = str.length - 1;
function rev(str) {
  for (let i = 0; i < str.length / 2; i++) {
    let temp = str[i];
    str[i] = str[right];
    str[right] = temp;
    right--;
  }
  return str;
}
rev(str);
console.log(str);
