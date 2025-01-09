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
// 4. Random number between 1 to 100

// const random = () => Math.ceil(Math.random() * 10);
// console.log(random());

//----------------------------------------
// 5. palindrom

// const checkPalindrom = (str) => {
//   let res = "";

//   for (let i of str) {
//     res = i + res;
//   }

//     if (res === str) {
//       return true;
//     } else {
//       return false;
//     }

// //   return res === str ? true : false;    // ternory
// };

// // checkPalindrom("hello");
// console.log(checkPalindrom("malayalam"));

//------------------------------------------------
// 6.find te largest number

// function maxNumber(arr) {
//   let max = arr[0];
//   for (let i of arr) {
//     if (i > max) {
//       max = i;
//     }
//   }

//   return max;
// }

// const max = maxNumber([2, 4, 6, 8, 1, 9]);
// console.log(max);

// type - 2;
// const maxnum = (variable) => Math.max(...variable);

// console.log(maxnum([1, 4, 7, 3, 8]));
// console.log(maxnum([4, 7, 9, 0, 11]));
// console.log(maxnum([99, 33, -6, 2]));

//------------------------------------------
// 8. FizzBuzz
// Print numbers from 1 to 50, replacing multiples of 3 with "Fizz", multiples of 5 with "Buzz", and multiples of both with "FizzBuzz".
// function fizBuzz(num) {
//   for (let i = 1; i <= 50; i++) {
//     if (i % 3 === 0 && i % 5 === 0) console.log("FizzBuzz");
//     else if (i % 3 === 0) console.log("fizz");
//     else if (i % 5 === 0) console.log("Buzz");
//     else console.log(i);
//   }
// }
// fizBuzz(50);

// const person = {
//   name: "John",
//   age: 30,
//   city: "New York",
//   village: "pattanam",
// };

// const values = Object.values(person);
// const keys = Object.keys(person);

// console.log(values); //  [ 'John', 30, 'New York', 'pattanam' ]
// console.log(keys); //  [ 'name', 'age', 'city', 'village' ]

// //we can get keys and values
// for (let [key, value] of Object.entries(person)) {
//   console.log(keys, values);
// }

// // get keys   only
// for (let key of Object.keys(person)) {
//   console.log(key);
// }

// // get values only
// for (let value of Object.values(person)) {
//   console.log(value);
// }

// let result = value(4, 3);
// function value(p1, p2) {
//   return p1 * p2;
// }

// console.log(result);
