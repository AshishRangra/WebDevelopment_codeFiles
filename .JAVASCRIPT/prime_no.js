function prime_no(prime_no){
    // const prime_no = 59;

if(prime_no < 2){
    return false;
}
if(prime_no==2){
    return true
}
x = prime_no / 2;
for (let i = 0; i < x; i++) {
  if (prime_no % 2 == 0) {
    // console.log("false");
    return false
  }
}
// console.log(true);
return true
}
console.log(prime_no(2))
// ============================================================

function Palindrome(str) {
  str = str.toLowerCase();
  var begin = 0;
  var end = str.length - 1;
  for (let i = 0; i < str.length; i++) {
    if (str[begin] != str[end]) {
      // console.log("false");
      return false;
    }
    begin++;
    end--;
  }
  // console.log("true");
  return true;
}
console.log(Palindrome("Ashish"));
console.log(Palindrome("Naman"));

console.log(Palindrome("1212"));
// ===========================================================================


const s="Ashish"
switch(s.toLowerCase()){
  case "ashish":
    console.log("Hello Ashish")
    break;
    case 'rohit':
      case 'amit':
        console.log("Hello Rohit And amit")
        break;

    default:
      console.log("Entered name correctly  ")
      break;
}