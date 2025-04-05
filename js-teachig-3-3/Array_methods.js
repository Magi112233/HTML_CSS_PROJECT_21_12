let fruits = ["Apple", "Banana", "Cherry", 9, "orange"];
// 1. length
// console.log(fruits.length);
// 5;

// 2. push()
// fruits.push("painapple");
// console.log(fruits);
// ["Apple", "Banana", "Cherry", 9, "orange", "painapple"];

// .3. pop()
// fruits.pop();
// console.log(fruits);
// ["Apple", "Banana", "Cherry", 9];

// 4.shift()
// fruits.shift();
// console.log(fruits);
// ["Banana", "Cherry", 9, "orange"];

// 5. unshift()
// fruits.unshift("magi", "ayan");
// console.log(fruits);
// ["magi", "ayan", "Apple", "Banana", "Cherry", 9, "orange"];

// 6. concat()
// let str1 = ["a", "b"];
// let str2 = ["c", "d"];
// result = str1.concat(str2);
// console.log(result);

// 7. join()
// console.log(fruits.join(" [5] "));
// Apple [5] Banana [5] Cherry [5] 9 [5] orange

// 8. slice(start, end)
// console.log(fruits.slice(1, 4));
// ["Banana", "Cherry", 9];

// 10. indexOf(value)
// console.log(fruits.indexOf("magi"));
// console.log(fruits.indexOf("Apple"));
// -1;
// 0;

// 11. lastIndexOf(value)
let num = [1, 34, 2, 6, 2, 8, 9, 2];
// console.log(num.lastIndexOf(2));
// 7

// 12. includes(value)
// console.log(fruits.includes(9));
// console.log(fruits.includes("graps"));
// true;
// false;

// 13. reverse()
// console.log(fruits.reverse());
// ["orange", 9, "Cherry", "Banana", "Apple"];

// // 14. sort()
// let num = [2, 5, 7, 8, 4, 0, 1, 3, 6, 9];
// console.log(num.sort());
// let number = num.sort();
// console.log(number);
// console.log(number.reverse());

// let order = num.sort();
// console.log(order);
// console.log(order.reverse());
// [
//  0, 1, 2, 3, 4,
//   5, 6, 7, 8, 9
// ]
// [
//   9, 8, 7, 6, 5,
//   4, 3, 2, 1, 0
// ]

// Summary;
// Modification: push(), pop(), shift(), unshift(), splice(), sort(), reverse();
// Access: indexOf(), lastIndexOf(), includes();
// Iteration: forEach(), map(), filter(), reduce(), find(), findIndex();
// Checking: every(), some();
// Transformation: fill(), flat(), flatMap();

// for (let i = 1; i <= 10; i++) {
//   console.log(i, "* 5  =", i * 5);
// }

// let count = 0;

// for (let fruit of fruits) {
//   if (count === 2) {
//     break;
//   }
//   count++;
//   console.log(fruit);
// }

// fruits.forEach((f) => {
//   console.log(f);
// });

// let fr = fruits.map((f) => {
//   console.log(f);
//   return "fruit " + f;
// });

// console.log(fr);

// let calc = [3, 4, 6, 7, 8].map((v) => v * 4);

// console.log(calc);

// --------for of---------
// let str = " hello how are you";

// let val = "";

// for (let s of str) {
//   val = s + val;
// }
// console.log(val);

// Array creation

let ar = [];

let arr = [4, 7, 8];

let arr2 = new Array(3, 3, 6, 7);
//-----------------------------------------------
// Array elements

let arrEle = [3, 4, 6, 7, 9];

// console.log(arrEle[0]); // first element
// console.log(arrEle[arrEle.length - 1]); // last element
//-------------------------------------------------
// 3. Add elements
let addArr = [3, 5, 7, 7];
addArr.push(5, 7, 20, 4); // add last
// console.log(addArr);

addArr.unshift(2, 9); // add front
// console.log(addArr);

//--------------------------------------------

// 4. Remove Elements

let remArr = [4, 5, 6, 7];
remArr.pop(); // remove last
// console.log(remArr);

remArr.shift(); // remove first
// console.log(remArr);

//----------------------------------
// 5.update array
// let updatearr = [5, 6, 8, 9];
// updatearr[2] = "hello";
// updatearr[9] = "hi";
// remArr[3] = "hello";

// console.log(remArr);

// console.log(updatearr);
//----------------------------------
// 6.Loop through Array

let loopArr = [3, 6];
// loopArr.forEach((a) => console.log(a * 4));

//-----------------------
// 7.Array destructuring
let deStructureArr = ["red", "green", "yellow"];

let red = deStructureArr[0];
let green = deStructureArr[1];

// console.log(red, green);

let [red1, green1] = deStructureArr;

// console.log(red1);

//---------------------------------------
