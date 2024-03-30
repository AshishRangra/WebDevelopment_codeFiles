function magicNo(num) {
  var x;
  var checkNO = 0;
  while (num > 0) {
    x = num % 10;
    num = Math.floor(num / 10);

    checkNO += x;
  }
  console.log(checkNO);
  if (checkNO == 10) return true;
  else return false;
}
console.log(magicNo(1090));
