const obj = {
  name: "A",
  skills: "None",
  contact: 212121,
};
for (x in obj) {
  console.log(x, obj[x]);
}
const letter = new Set([1, 2, 3, 4, 6, 2, 1, 3, 4, 3, 2, 1]);
for (let i of letter) {
  console.log(i);
}
letter.add(98);
letter.delete(2);

console.log(letter.has(12));
console.log(letter.size);
for (let i of letter) {
  console.log(i);
}

const srr = [1, 2, 3, 4, 5, 6, 7];
for (let i in srr) {
  console.log(i);
}
srr.forEach((element) => {
  console.log(element);
});




// var left=0;
// var arr=["1","2"]
// var arr2=[];
// for(let i=arr.length-1;i>=0;i--){
//   arr2[left++]=arr[i];
// }
// for(let i in arr2){
//     console.log(arr2[i])
// }
var str="ashish"
var str2=""
var j=str.length-1
for(let i=0;i<str.length;i++){
    str2+=str[j--];
}
console.log(str2)
// function calousre spread  and rest 
// include and some
console.log("4"*"3")

console.log(typeof Date)