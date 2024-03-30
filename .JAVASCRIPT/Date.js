var obj = new Date();
console.log(obj);

let year = obj.getFullYear();
console.log(year);
console.log(obj.getMonth());
console.log(obj.getDay());
console.log(obj.getTime());
console.log(obj.getHours());
console.log(obj.getSeconds());
console.log(obj.getMinutes());
console.log(obj.getMilliseconds());

let currentDate = new Date();
currentDate.setFullYear(2010);
console.log(currentDate);
let currentDate1 = new Date();
currentDate1.setMonth(8);
console.log(currentDate1);

let currentDate2 = new Date();
currentDate2.setDate(10);
console.log(currentDate2);

currentDate2.setHours(5, 14, 15, 19);
currentDate2.setFullYear(2002);
console.log(currentDate2);

let date2 = new Date();
date2.setFullYear(2020, 11, 3);
date2.setTime(16128180000);
console.log(date2);

let hrs = new Date();
hrs.setHours(10);
hrs.setMinutes(20);
hrs.setSeconds(12);
hrs.setFullYear(2002);
hrs.setMonth(3);
hrs.setDate(12);
console.log(hrs);

let de = Date.parse("December25,2002");
console.log(de);
const d = new Date(de);
console.log(d);

const dd = new Date("2002");
console.log(dd);

const dd2 = new Date("2002/12");
console.log(dd2);

const dd3 = new Date("2002/12/25");
console.log(dd3);

y = "3";
x = -y;
console.log(x);
console.log(x, y);
console.log(Boolean(""));
