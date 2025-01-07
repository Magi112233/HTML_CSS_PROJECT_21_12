// 1. reverse a string

// "magi"  "igam"

// type1

// function a(str) {
//   console.log(str);
//   const splitValue = str.split("");
//   //   console.log(splitValue);

//   const reverseValue = splitValue.reverse();
//   //   console.log(reverseValue);

//   const joinvalue = reverseValue.join("");

//   return joinvalue;
// }

// const result = a("hello world");
// console.log(result);

// const result2 = a("how are you");
// console.log(result2);

// const result3 = a("i am fine");
// console.log(result3);
//------------------------------
// type2

// function reverse(str) {
//   return str.split("").reverse().join("");
// }
// console.log(reverse("hello magi"));

//-------------------------------------
// type-3
// let str = "1234567890";
// let re = "";

// for (let i of str) {
//   re = i + re;
// }
// console.log(re);

//--------------------------------------------------------------------------------------------
// 2. check a number is even or odd

// function check(num) {
//   if (num % 2 === 0) {
//     console.log("1");
//     return "Even";
//   } else {
//     console.log("2");
//     return "Odd";
//   }
// }
// const result = check(7);
// console.log(result);

// console.log(check(8));

//--------------------------------------------------------------------------------------------
// 3. sum of an array
// function sumOfArray(arr) {
//   let result = 0;
//   for (let i of arr) {
//     result = result + i;
//   }

//   return result;
// }

// const res = sumOfArray([2, 5, 3, 0, 5, 9]);
// console.log(res);

//-----------------------------------------------------------------
const ran = Math.random() * 100;
console.log(ran);
console.log(Math.floor(ran));
console.log(Math.ceil(ran));
