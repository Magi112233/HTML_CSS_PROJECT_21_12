// 1.reverse value
// let str = "malayalam";

// function reversefun(str) {
//   let rev = "";
//   for (let i of str) {
//     rev = i + rev;
//   }
//   //   return rev;
//   console.log(rev);
// }

// // reverse(str);
// function palindromfun(s) {
//   console.log(reversefun(s), s);
//   return reversefun(s) === s;
// }

// console.log(palindromfun(str));

// function reverse(r) {
//   return r.split("").reverse("").join("");
// }
// console.log(reverse(str));
// -----------------------------

// let str1 = "malayalam";

// function reversfun(b) {
//   let reve = "";
//   for (let a of str1) {
//     reve = a + reve;
//   }
//   return reve;
//   // console.log(reve);
// }

// function palindromfun(p) {
//   console.log(reversfun(p), p);
//   return reversfun(p) === p;
// }
// console.log(palindromfun("malayalam"));

// ----------------------------------

// factorial

// function factorial(n) {
//   let num = 1;
//   for (let i = 1; i <= n; i++) {
//     num = i * num;
//   }
//   console.log(num);
// }
// // console.log(factorial(6));
// factorial(5);

// let str1 = "malayam";
// function reversefun(r) {
//   let val = "";
//   for (let i of r) {
//     val = i + val;
//   }
//   //   console.log(val);
// }

// function palindromfun(p) {
//   return reversefun(p) === p;
// }
// console.log(palindromfun(str1));
// -------------------------------------------------

// for (let i = 0; i <= 10; i++) {
//   console.log(i);
// }

// let out = "";
// for (let i = 1; i <= 10; i++) {
//   //   //   console.log(i % 2);
//   //   if (i % 2 === 0) {
//   //     console.log("E");
//   //   } else {
//   //     console.log("O");
//   //   }
//   out = out + (i % 2);
// }
// console.log(out);

// -------------
// let out = "";
// for (let i = 0; i < 3; i++) {
//   for (let j = 0; j < 3; j++) {
//     out = out + "* ";
//   }
//   out = out + "\n";
// }
// console.log(out);
// ---------------------
// let out = "";
// for (let i = 0; i <= 10; i++) {
//   for (let j = 1; j <= 10; j++) {
//     out = out + i + " ";
//   }
//   out = out + "\n";
// }
// console.log(out);
// ---------------------------

// let out = "";
// for (let i = 1; i <= 10; i++) {
//   let temp = i * 2 - 1;
//   for (let j = 0; j < temp; j++) {
//     out = out + "* ";
//     // if (i % 2 == 0) {
//     //   out = out + "0";
//     // } else {
//     //   out = out + "1";
//     // }
//     // out = out + (i % 2 == 0 ? 1 : 0) + " ";
//   }
//   out = out + "\n";
// }
// console.log(out);
// -------------------------

// function myfunction(name) {
//   console.log("hello world:" + name);
// }
// myfunction("magi");
// ------------------------------
// const person = {
//   name: "magi",
//   age: 21,
// };

// const person1 = {
//   name: "ayan",
//   age: 28,
// };

// function myfunction(...arg) {
//   console.log(arg);
// }
// myfunction(person.name, person1.name, "lia");
// -----------------------------------
// function myfunction(firstname, lastname) {
//   function nextfun(name1, name2) {
//     const name = name1 + " " + name2;
//     return name;
//   }
//   const result = nextfun(firstname, lastname);
//   return result;
// }
// let result = myfunction("ayan", "magi");
// console.log(result);
// -----------------------------------------------------------------------------------------------------------------
// let str1 = [2, 4, 5, 3, 7, 9, 55];

// function myfunction(str) {
//   result = [0];
//   for (let i of str) {
//     if (result < i) {
//       result = i;
//     }
//   }
//   return result;
// }
// myfunction(str1);
// console.log(myfunction(str1));
// -------------------------------

// let str1 = [2, 4, 7, 3, 9, 1, 3];

// function myfunction(str1) {
//   val = str1[0];
//   for (let i of str1) {
//     if (val < i) {
//     } else {
//       val = i;
//     }
//   }
//   return val;
// }
// myfunction(str1);
// console.log(myfunction(str1));
// -----------------------------------------

// let fruite = ["apple", "orange", "banan", "graps"];

// function value(b) {
//   let res = "";
//   for (let i of b) {
//     res = i + res;
//   }
//   console.log(res);
//   console.log(fruite);
// }
// value(fruite);
// // -------------------------------------
// let product = ["Car", "bus", "bike", "van"];

// console.log(product);
// console.log(product[2]);

// for (let n of product) {
//   console.log(n);
// }

// product.forEach((p) => {
//   console.log(p);
// });

// product.map((s) => fun(s));

// function fun(d) {
//   console.log(d);
// }
// ----------------
//
// function prime(p) {
//   for (let i = 2; i < p; i++) {
//     if (p % i === 0) {
//       return false;
//     }
//   }
//   return true;
// }
// console.log(prime(7));
// ---------------------------------------
// let str = [2, 4, 5, 1, 6, 7, 4, 54];
// function largestval(l) {
//   let val = str[0];
//   for (let i of l) {
//     if (val < i) {
//       val = i;
//     }
//   }
//   return val;
// }
// largestval(str);
// console.log(largestval(str));
// // -------------------------------
// let str = [8, 5, 3, 9, 0, 1, 6, 5, 2];
// function smallval(s) {
//   let result = str[0];

//   for (let i of s) {
//     if (result > i) {
//       result = i;
//     }
//   }
//   return result;
// }
// console.log(smallval(str));
// -------------------
// function primenum(p) {
//   for (let i = 2; i < p; i++) {
//     if (p % i == 0) {
//       return false;
//     }
//   }
//   return true;
// }
// console.log(primenum(15));
// --------------------------------
// function factorialnum(n) {
//     let num = 1;
//   for (let i = 1; i <= n; i++) {
//     num = i * num;
//     // console.log(num);
//   }
//   console.log(num);
// }
// factorialnum(5);
// -------------------------
// let str = "mageswaeri";
// function reverse(r) {
//   let res = "";
//   for (let i of str) {
//     res = i + res;
//   }
//   console.log(res);
// }
// reverse(str);
// ---------------------------------
// let fruit = ["apple", "banana", "graps", "orange"];
// function value(v) {
//   for (let i of v) {
//     console.log(i);
//   }
// }
// value(fruit);
// ----------------------------
// let str = "madam";

// function reverse(r) {
//   let res = "";
//   for (let i of r) {
//     res = i + res;
//   }
//   return res;
// }

// function palindrom(p) {
//   console.log(reverse(p));
//   return reverse(p) === p;
// }
// console.log(palindrom(str));
// ------------------------------------
// let str = ["apple", "banana", "graps", "orange"];
// console.log(str.length);
// ------------------------------------
// function prime(f) {
//   for (let i = 2; i < f; i++) {
//     if (f % i === 0) {
//       return false;
//     }
//   }
//   return true;
// }
// console.log(prime(11));
// -----------------------------
// function factorial(f) {
//   let num = 1;
//   for (let i = 1; i <= f; i++) {
//     num = i * num;
//   }
//   console.log(num);
// }
// factorial(3);
// ------------------------------------
// let num = [2, 3, 5, 6, 8, 1, 4, 54, 23, 88];
// function largestval(l) {
//   let val = num[0];
//   for (let i of l) {
//     if (val < i) {
//       val = i;
//     }
//     // console.log(val);
//   }
//   return val;
// }
// console.log(largestval(num));
// -----------------------------------------------------------------
// function primenum(p) {
//   for (let i = 2; i < p; i++) {
//     if (p % i === 0) {
//       return false;
//     }
//   }
//   return true;
// }
// console.log(primenum(10));

// let num = [65, 9, 26, 76, 95, 29, 265];
// function largestnum(l) {
//   let val = num[0];
//   for (let i of l) {
//     if (val < i) {
//       val = i;
//     }
//   }
//   return val;
// }
// console.log(largestnum(num));

// function factorial(f) {
//   let val = 1;
//   for (let i = 1; i <= f; i++) {
//     val = i * val;
//   }
//   console.log(val);
// }
// factorial(5);
// -----------------------------------------
// let num = [2, 4, 5, 98, 465, 476, 2948];
// function large(l) {
//   let val = num[0];
//   for (let i of l) {
//     if (val < i) {
//       val = i;
//     }
//     // console.log(val);
//   }
//   return val;
// }
// console.log(large(num));

// function prime(p) {
//   for (let i = 2; i < p; i++) {
//     if (p % i === 0) {
//       console.log(p);
//       return false;
//     }
//   }
//   return true;
// }
// console.log(prime(61));

// function factorial(f) {
//   let num = 1;
//   for (let i = 1; i <= f; i++) {
//     num = i * num;
//   }
// }
// console.log(factorial(5));
//--------------------------------------------------

// let num = [1, 2, 3, 4, 5, 6, 7, 8];

// function secondlarge(num) {
//   let sortnum = num.sort((a, b) => b - a);
//   //   console.log(sortnum);
//   let value = sortnum[1];
//   return value;
// }
// console.log(secondlarge(num));
// console.log(secondlarge([897, 9, 7, 0]));

// ------------------------------------------------------------

// let value = [1, 3, 5, 7, 6, 2, 2, 3, 4, 8, 9, 0, 88];

// function dublicate(d) {
//   let empty = [];
//   for (let i of d) {
//     if (!empty.includes(i)) {
//       empty.push(i);
//       empty.sort((a, b) => a - b);
//     }
//   }
//   return empty;
// }
// console.log(dublicate(value));
// ------------------------------------------------------
// const sumArr = [3, 5, 6, 7, 9];

// function suma(s) {
//   let result = 0;
//   for (let i of s) {
//     result = i + result;
//     // console.log(result);
//   }
//   return result;
// }
// console.log(suma(sumArr));
// -------------------------------------------------

// let num = [3, 5, 8, 2, 9, 8, 7, 4];

// function large(l) {
//   let result = num[0];
//   let result1 = num[1];
//   for (let i of l) {
//     if (result < i) {
//       //   result = i;
//       result1 = result;
//     }
//     // console.log(result1);
//   }
//   return result1;
//   //   let res = result;
// }
// console.log(large(num));
// ----------------------------------------
// function factorial(f) {
//   let result = 1;
//   for (let i = 1; i <= f; i++) {
//     result = result * i;
//   }
//   return result;
// }
// console.log(factorial(5));
// --------------------------------------------

// function primenum(p) {
//   for (let i = 2; i < p; i++) {
//     if (p % i === 0) {
//       return false;
//     }
//   }
//   //   console.log(i);
//   return true;
// }
// console.log(primenum(8));
// ------------------------------------------
// let value = [1, 3, 6, 8, 5, 9];
// function largeval(l) {
//   let res = value[0];
//   for (let i of l) {
//     if (res < i) {
//       res = i;
//     }
//   }
//   return res;
// }
// console.log(largeval(value));
// -----------------------------
// let value = [2, 9, 4, 8, 4, 3, 9, 1, 7];
// function smallval(s) {
//   let res = value[0];
//   for (let i of s) {
//     if (res > i) {
//       res = i;
//     }
//   }
//   console.log(res);
//   return res;
// }
// smallval(value);
// -----------------------------------------
// let sumval = [3, 5, 8, 2, 9];
// function sum(s) {
//   let val = 0;
//   for (let i of s) {
//     val = val + i;
//   }
//   return val;
// }
// console.log(sum(sumval));
// ----------------------------------------
// let val = [3, 5, 2, 6, 3, 6, 2, 8, 1, 8, 4, 7, 9, 0];
// function dublicate(d) {
//   res = [];
//   for (let i of d) {
//     if (!res.includes(i)) {
//       res.push(i);
//       res.sort((a, b) => a - b);
//     }
//   }

//   return res;
// }
// console.log(dublicate(val));
// =-------------------------------
// const arr1 = [3, 6, 1, 8, 100, 4];

// console.log(Math.max(...arr1));
// console.log(Math.min(...arr1));

// function max(arr) {
//   let result = arr[0];

//   return result;
// }

// max(arr1);
// /-----------------------------------
// let value = "hello world";
// function reverse(r) {
//   let res = "";
//   for (let i of r) {
//     res = i + res;
//   }
//   console.log(res);
// }
// reverse(value);

// ------------------------------------

// function febbonaci(f) {
//   let val = [0, 1];
//   for (let i = 2; i < 7; i++) {
//     let f1 = val[val.length - 1];
//     let f2 = val[val.length - 2];
//     let res = f1 + f2;
//     val.push(res);
//   }
//   return val;
// }
// febbonaci(5);
// ----------------------------------
// let value = [2, 5, 3, 2, 6, 4, 9, 1, 3, 6];
// function dublicate(d) {
//   let result = [];
//   for (let i of d) {
//     if (!result.includes(i)) {
//       result.push(i);
//     }
//     console.log(result);
//     result.sort();
//   }
//   return result;
// }
// dublicate(value);
// ---------------------------------------------
// let val = [1, 2, 3, 4, 5];

// function sum(s) {
//   let result = val[0];
//   for (let i of s) {
//     result = i * result;
//     console.log(result);
//   }
//   return result;
// }
// sum(val);
// // ------------------------------------------------
// const val = ["a", "e", "i", "o", "u"];
// function value(v) {
//   let count = [];
//   for (let i of v) {
//     if (val.includes(i)) {
//       console.log(i);
//       //   count.push(i);
//       count++;
//     }
//   }
//   return count;
// }
// console.log(value("hello"));
// ----------------------------------------------------qq

// let v1 = "listen";
// let v2 = "silent";

// function anagram(a1, a2) {
//   let ans = [];
//   for (let i of a1) {
//     if (a2.includes(i)) {
//       //   a2.push(i);
//       return true;
//     }
//     console.log(a2);

//     // if (ans.includes(a2)) {
//     //   console.log(ans);
//     // }
//   }
//   return false;
// }
// console.log(anagram(v1, v2));
// --------------------------------------------

// function anagram(a1, a2) {
//   let r1 = [];
//   let r2 = [];
//   let n = 0;
//   for (let i of a1) {
//     if (!r1.includes(i)) {
//       r1.push(i);
//     }
//   }

//   for (let j of a2) {
//     console.log(n++);
//     if (!r2.includes(j)) {
//       r2.push(j);
//     }
//   }

//   r1.sort();
//   r2.sort();

//   return r1.join("") === r2.join("");
//   console.log(r1 === r2);

//   return;
//   console.log(r1);
//   console.log(r2);
// }
// anagram(v1, v2);

// let v1 = "listen";
// let v2 = "silent";
// console.log(anagram(v1, v2));
// --------------------------------------------
// let val = 8;

// function sum(s) {
//   if (s % 2 === 0) {
//     console.log("Even");
//   } else {
//     console.log("odd");
//   }
// //   console.log(s % 2);
// }
// sum(val);
// ----------------------------------

// const str = "hello world hello goodmorning";
// const arr = str.split(" ");
// arr[0][0].toUpperCase();
// console.log(arr);
// -----------------------------------------------------
// let str = "hello chan good morning";
// function uppercase(u) {
//   let str = "";
//   for (let s = 0; s < u.length; s++) {
//     if (u[s] === " ") {
//       str = str + " " + u[s + 1].toUpperCase();
//     } else if (s === 0) {
//       str = u[s].toUpperCase();
//     } else {
//       str = str + u[s];
//     }
//   }
//   console.log(str);
// }
// uppercase(str);
// ---------------------------------------------------------
// let str = "hello chan good night";
// function uppercase(u) {
//   let str = "";
//   for (let s = 0; s < u.length; s++) {
//     if (u[s] === " ") {
//       str = str + " " + u[s + 1].toUpperCase();
//     } else if (s === 0) {
//       str = u[s].toUpperCase();
//     } else if (s > 0 && u[s - 1] === " ") {
//       // return;
//     } else {
//       str = str + u[s];
//     }
//   }
//   console.log(str);
// }

// // uppercase(str);
// --------------------------------------------------
// let str = "hello ayan good moring";
// function Occurrence(o) {
//   let obj = {};
//   for (let v of o) {
//     obj[v] = (obj[v] || 0) + 1;
//   }
//   console.log(obj);
// }
// Occurrence(str);
// ---------------------------------------------
// let a = [2, 4, 1, 8, 7, 4, 9];
// let b = [3, 6, 3, 9, 5, 8, 8, 7, 0];

// function check(a, b) {
//   n = [...a, ...b];
//   let val = [];

//   for (let i of n) {
//     if (!val.includes(i)) {
//       val.push(i);
//       val.sort();
//     }
//   }
//   console.log(val);
// }
// check(a, b);
// -----------------------------------------------
// let v = [2, 4, 1, 3, 5];
// const mergeSortFun = (arr) => {
//   let res = [];
//   let spo = [...arr];
//   //   console.log(spo);
//   for (let i of arr) {
//     let sval = spo[0];

//     for (let j of spo) {
//       if (sval > j) {
//         sval = j;
//       }
//     }
//     res.push(sval);
//     spo.splice(spo.indexOf(spo), 1)
//     // console.log(res);
//   }
// };
// mergeSortFun(v);

// let val = [2, 4, 1, 3, 5];
// const mergeSortFun = (arr) => {
//   let sortarr = [];
//   let secarr = [...val];
//   for (let i of arr) {
//     smallvalue = secarr[0];
//     for (let j of secarr) {
//       if (smallvalue > j) {
//         smallvalue = j;
//       }
//     }
//     sortarr.push(smallvalue);
//     secarr.splice(secarr.indexOf(smallvalue), 1);
//   }
//   console.log(sortarr);
// };
// mergeSortFun(val);
// ----------------------------------------
// let str = "hello world good morninghello";
// const longword = (str) => {
//   let w = str.split(" ");
//   let count = 0;
//   let res = "";
//   for (let i of w) {
//     if (count < i.length) {
//       count = i.length;
//       res = i;
//       //   console.log(w);
//     }
//   }
//   return [count], res;
// };
// console.log(longword(str));
// -------------------------------
// let arr = [1, 3, 4, 5];
// function missing(m) {
//   let n = m.length + 1;
//   let sum = (n * (n + 1)) / 2;
//   let val = 0;
//   for (let i of m) {
//     val = i + val;
//   }
//   return sum - val;
//   console.log(val);
// }
// console.log(missing(arr));
// -----------------------------------------
// let arr = ["apple", "orange", "mango", "banana"];
// arr.splice(1);
// console.log(arr);
// ------------------------------
// function febbonaci(f) {
//   let res = 1;
//   for (let i = 1; i <= f; i++) {
//     res = res * i;
//     console.log(res);
//   }
// }
// febbonaci(5);
// ----------------------------------

// function prime(p) {
//   let res = 2;
//   for (let i = 2; i < p; i++) {
//     if (res % i === 0) {
//       console.log(i);
//       return false;
//     }
//   }
//   return true;
// }
// console.log(prime(7));
// --------------------------------------
// let v1 = "listen";
// let v2 = "silent";

// function anagram(a, b) {
//   try {
//     let r1 = [];
//     let r2 = [];
//     for (let i of a) {
//       if (!r1.includes(i)) {
//         r1.push(i);
//       }
//     }
//     for (let j of b) {
//       if (!r2.includes(j)) {
//         r2.push(j);
//       }
//     }
//     r1.sort();
//     r2.sort();
//     return r1.join() === r2.join();
//   } catch (err) {
//     console.log(err);
//   }
// }
// console.log(anagram(v1, v2));
// ------------------------------------------------
// let number = [1, 2, 3];

// number.forEach(function (num) {
//   console.log("1 * 2 = ", num * 2);
// });

//-------------------
// let numbers = [3, 7, 9, 12, "magi"];
// let find = numbers.find((num) => num === "magi");
// console.log(find);
// ----------------------------------------------------
// let value = [1, 3, 5, 7, 9];
// // let value = "hello chan good morning";
// function smallval(v) {
//   let res = v[0];
//   //   console.log(res);
//   for (let i of v) {
//     if (res > i) {
//       res = i;
//     }
//   }
//   console.log(res);
// }
// smallval(value);
// ------------------------------------------------------
// let value = [1, 2, 3, 4, 5];
// value.forEach(function (v) {
//   console.log(v * 2);
// });
// ------------------------------------------------
// let number = [1, 2, 3, 4, 5];
// let value = number.map(function (ans) {
//   return ans * 2;
// });
// console.log(value);
// -----------------------------------------------
// let value = [2, 4, 7, 23, 56, 77];
// let result = value.filter(function (ans) {
//   return ans % 2 === 0;
// });
// console.log(result);
// ------------------------------------------------
// let value = [1, 2, 3, 4, 5];
// let result = value.reduce(function (a, b) {
//   console.log(a, b);
//   return a + b;
// });
// // console.log(result);
// ------------------------------------------------
// let value = [0, 1, 2, 3, 4, 5];
// let result = value.find((num) => num < 2);
// console.log(result);
// ---------------------------------------------------
// let value = [1, 2, 3, 4, 3, 9];
// let index = value.findIndex((n) => n > 4);
// console.log(index);
// ------------------------------------------------------
// let number = [2, 22, 2, 2];
// let alleven = number.every((num) => num === 2);
// console.log(alleven);
// -----------------------------------------------
// let value = [1, 4, 3, 2, 8, 7, 9, 0, 5, 6];
// value.sort((a, b) => b - a);
// console.log(value);
// --------------------------------------------------
// function prime(p) {
//   for (let i = 2; i < p; i++) {
//     if (p % i === 0) {
//       return false;
//     }
//   }
//   return true;
// }
// console.log(prime(3));
// -------------------------------------------------------
// let num = [1, 2, 3, 4, 5];
// function sum(s) {
//   let res = 0;
//   for (let i of s) {
//     res = res + i;
//   }
//   //   return res;
//   console.log(res);
// }
// sum(num);
// ------------------------------------------------
// let words = ["a", "e", "i", "o", "u"];
// let str = "hello world";
// const vowvels = (v) => {
//   let count = 0;
//   for (let i of v) {
//     if (words.includes(i)) {
//       count++;
//     }
//   }
//   console.log(count);
// };
// vowvels(str);

// // let str = "hello world"
// let str = ["a", "e", "i", "o", "u"];
// function vowlels(v) {
//   let count = 0;
//   for (let i of v) {
//     if (str.includes(i)) {
//       count++;
//     }
//   }
//   return count;
// }
// console.log(vowlels("javascript is amazing"));
// ---------------------------------------------------
// let str = "hello chan good morning";
// function Occurrence(o) {
//   let Object = {};
//   for (let i of o) {
//     Object[i] = (Object[i] || 0) + 1;
//   }

//   console.log(Object);
// }
// Occurrence(str);
// -----------------------------------------------------
// let v1 = "listen";
// let v2 = "silent";
// const anagaran = (a, b) => {
//   let r1 = [];
//   let r2 = [];
//   for (let i of a) {
//     if (!r1.includes(i)) {
//       r1.push(i);
//     }
//   }
//   for (let j of b) {
//     if (!r2.includes(j)) {
//       r2.push(j);
//     }
//   }
//   r1.sort();
//   r2.sort();
//   return r1.join() === r2.join();
// };
// console.log(anagaran(v1, v2));
// ----------------------------------------------------
// let num = [1, 3, 5, 2, 4, 6, 7, 3, 2, 5];
// const dublicate = (d) => {
//   let res = [];
//   for (let i of d) {
//     if (!res.includes(i)) {
//       res.push(i);
//     }
//   }
//   res.sort();
//   return res;
// };
// console.log(dublicate(num));
// ---------------------------------------
// function factorial(f) {
//   let res = 1;
//   for (let i = 1; i <= f; i++) {
//     res = i * res;
//     console.log(res);
//   }
// }
// console.log(factorial(5));
// ------------------------------------------
// function febbonaci(f) {
//   let res = [0, 1];
//   for (let i = 2; i < f; i++) {
//     let r1 = res[res.length - 1];
//     let r2 = res[res.length - 2];
//     let val = r1 + r2;
//     res.push(val);
//   }
//   return res;
// }
// console.log(febbonaci(159));
// -------------------------------------------------
// let a = [1, 2, 3, 4, 6, 7, 8];
// let b = [2, 3, 5, 6, 7, 9, 1, 0];
// function merga(m, n) {
//   //   let res = [...m, ...n];
//   //   console.log(res);
//   let res = [];
//   let res1 = [];
//   for (let i of m) {
//     res.push(i);
//     if (res.includes(i)) {
//     }
//   }
//   for (let j of n) {
//     if (res.includes(j)) {
//       console.log(j);
//       res1.push(j);
//     }
//   }
//   //   return res;
// }
// console.log(merga(a, b));
// ------------------------------------------------
// let val = [2, 4, 1, 3, 5];
// const mergeSortFun = (arr) => {
//   let sortarr = [];
//   let secarr = [...val];
//   for (let i of arr) {
//     smallvalue = secarr[0];
//     for (let j of secarr) {
//       if (smallvalue > j) {
//         smallvalue = j;
//       }
//     }
//     sortarr.push(smallvalue);
//     secarr.splice(secarr.indexOf(smallvalue), 1);
//   }
//   console.log(sortarr);
// };
// mergeSortFun(val);
// --------------------------------------------------------
// let a = [1, 2, 5, 3, 7];
// let b = [2, 4, 7, 8, 9, 3];
// function intersection(a, b) {
//   let res = [];
//   for (let i of a) {
//     if (b.includes(i)) {
//       res.push(i);
//     }
//   }
//   return res;
// }
// console.log(intersection(a, b));
// ---------------------------------------------------------------
CDATASection;
