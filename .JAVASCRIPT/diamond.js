// var str=prompt("Enter any string : ")
// var i=0;
// var left=0;
// var right=str.length-1;
// while(left<right){
//     if(str[left]!==str[right]){
//         console.log("string is not palindrome")
//         return 0;
//     }
//     left++;
//     right--;

// }
// console.log("String is palindrome")
// var arr=["Hello","World"]
// // var str="fsd"
// // var str2=str.split("").reverse().join("")
// var str2=arr.join().split("").reverse().join("").split(",").reverse()

// console.log(str2)

var str = "naman";
var str2 = str.split("").reverse().join("");
console.log(str2);
if (str === str2) console.log("Palindrome");
else console.log("Not ");
