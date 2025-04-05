// 1.Reverse string

// let str = "hello world";
// function reverse(r) {
//   let val = " ";
//   for (let i of r) {
//     val = i + val;
//   }
//   return val;
// }
// console.log(reverse(str));
//******************* */
// function reves(r) {
//   return r.split("").reverse().join("");
// }
// console.log(reves(str));
// ----------------------------------------
// 2. Check if a String is a Palindrome
// let str = "malayalam";
// function polindrom(p) {
//   let val = "";
//   for (let s of p) {
//     val = s + val;
//   }
//   return val === p;
// }
// console.log(polindrom(str));
//********************* */
// function palindrome(p) {
//   return p === p.split("").reverse("").join("");
// }
// console.log(palindrome(str));

// ------------------------------------------
// // 3. Find the Factorial of a Number
// function factorial(f) {
//   let val = 1;
//   for (let v = 1; v <= f; v++) {
//     val = v * val;
//   }
//   return val;
// }
// console.log(factorial(5));

// -------------------------------------
// 4. Find Fibonacci Sequence
// function fibonacci(f) {
//   let val = [0, 1];
//   for (let i = 2; i <= f; i++) {
//     let r1 = val[val.length - 1];
//     let r2 = val[val.length - 2];
//     let res = r1 + r2;
//     val.push(res);
//   }
//   return val;
// }
// console.log(fibonacci(9));
// -----------------------------------------
// // 5 Remove Duplicates from an Array
// let str = [2, 4, 1, 6, 3, 6, 9, 8, 2, 5, 7];
// function dublicate(d) {
//   let val = [];
//   for (let i of d) {
//     if (!val.includes(i)) {
//       val.push(i);
//     }
//   }
//   return val;
// }
// console.log(dublicate(str));
// -------------------------------------------------
// // 6. Find the Largest Number in an Array
// let str = [2, 5, 7, 1, 9, 3, 7, 4];
// function large(l) {
//   let val = str[0];
//   for (let s of l) {
//     if (val < s) {
//       val = s;
//     }
//   }
//   return val;
// }
// console.log(large(str));

// function large(l) {
//   return Math.max(...l);
// }
// console.log(large(str));

// function findMax(arr) {
//   return Math.max(...arr);
// }
// console.log(findMax([10, 20, 5, 40]));
//=---------------------------------------------
// // 7. Find the Smallest Number in an Array
// let str = [2, 6, 8, 4, 7, 9, 2, 1, 9];

// function smallest(s) {
//   let val = str[0];
//   for (let i of s) {
//     if (val > i) {
//       val = i;
//     }
//   }
//   return val;
// }
// console.log(smallest(str));

//   ---------------------------------------------
// 8. Check if a Number is Prime
// function prime(p) {
//   for (let i = 2; i < p; i++) {
//     if (p % i === 0) {
//       return false;
//     }
//   }
//   return true;
// }
// console.log(prime(7));
// --------------------------------------------------
// // 9. Find the Sum of an Array
// let str = [1, 2, 3, 4, 5];
// function sum(s) {
//   let val = 0;
//   for (let i of s) {
//     val = val + i;
//   }
//   return val;
// }
// console.log(sum(str));
// -----------------------------------------------
// 10.Find the Second Largest Number in an Array
// let str = [3, 5, 7, 9, 1, 3, 4];
// function second(s) {
//   return str.sort().reverse()[1];
// }
// console.log(second(str));

// function second(s) {
//   let val = str[0];
//   for (let i of s) {
//     if (val < i) {
//       res = val;
//       val = i;
//     }
//   }
//   return res;
// }
// console.log(second(str));
// ------------------------------------
// // 11. Check if Two Strings are Anagrams

// let v1 = "listen";
// let v2 = "silent";

// function anagram(a, b) {
//   let r1 = [];
//   let r2 = [];
//   for (let i of a) {
//     if (!r1.includes(i)) {
//       r1.push(i);
//       //   console.log(r1);
//     }
//   }
//   for (let j of b) {
//     if (!r2.includes(j)) {
//       r2.push(j);
//       //   console.log(r2);
//     }
//   }
//   r1.sort();
//   r2.sort();
//   return r1.join() === r2.join();
// }
// console.log(anagram(v1, v2));

// function anagram(a, b) {
//   return a.split("").sort().join("") === b.split("").sort().join("");
// }
// console.log(anagram(v1, v2));

// function isAnagram(str1, str2) {
//   return str1.split("").sort().join("") === str2.split("").sort().join("");
// }
// console.log(isAnagram("listen", "silent"));
// -----------------------------------------------------------
// // 12. Count the Occurrences of Each Character in a String
// let str = "hello chan hello";

// function occurrences(o) {
//   let obj = {};
//   for (let i of o) {
//     obj[i] = (obj[i] || 0) + 1;
//   }
//   return obj;
// }
// console.log(occurrences(str));

// let str = "hello ayan good moring";
// function Occurrence(o) {
//   let obj = {};
//   for (let v of o) {
//     obj[v] = (obj[v] || 0) + 1;
//   }
//   console.log(obj);
// }
// Occurrence(str);
// ------------------------------------------------
// // 13.Reverse an Array
// let arr = [9, 8, 7, 6, 5, 4, 3, 2, 1, 0];
// function reverse(r) {
//   let res = " ";
//   for (let i of r) {
//     res = i + res;
//   }
//   return res;
// }
// console.log(reverse(arr));

// function reverse(r) {
//   return r.reverse();
// }
// console.log(reverse(arr));
// --------------------------------------------------
// // 14.Check if a Number is Even or Odd
// let str = 6;
// function num(a) {
//   if (a % 2 === 0) {
//     console.log("Even");
//   } else {
//     console.log("Odd");
//   }
// }
// num(str);

// function num(n) {
//   return n % 2 === 0;
// }
// console.log(num(9))
// ---------------------------------------------
// // 15. Merge Two Sorted Arrays
// let a = [1, 2, 3, 4, 2, 1, 4, 5];
// let b = [6, 7, 8, 9, 0, 3, 6, 8];
// function merge(a, b) {
//   let res = [];
//   for (let m of a) {
//     if (!res.includes(m)) {
//       res.push(m);
//     }
//   }
//   for (let n of b) {
//     if (!res.includes(n)) {
//       res.push(n);
//       console.log(b);
//     }
//   }
//   res.sort();
//   return res;
// }
// console.log(merge(a, b));

// function merge(a, b) {
//   return [...a, ...b];
// }
// console.log(merge(a, b));
// ------------------------------------------
// b1 = [3, 5, 7, 0, 8];
// b2 = [3, 5, 7, 9];

// n = [...b1, ...b2, ...[3, 4, 7]];

// // console.log(n);

// a1 = "hello";
// n = [...a1];
// console.log(n);
// ----------------------------------------
// // 16. Find the Longest Word in a String
// let str = "javascript is amazing";
// function word(w) {
//   let str1 = w.split(" ");
//   let count = 0;
//   let word = "";
//   for (let i of str1) {
//     if (count < i.length) {
//       count = i.length;
//       word = i;
//     }
//   }
//   return [count, word];
// }
// console.log(word(str));
// -------------------------------------------------------
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

// uppercase(str);
// -------------------------------------------------
//17.  Count the Number of Vowels in a String
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
// ------------------------------------
// // 18 .Find the Intersection of Two Arrays

// // const filt = a1.filter((f) => a2.includes(f));
// // console.log(filt);

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
// ---------------------------------------------
// // 19. Find Missing Number in an Array
// let a = [1, 2, 3, 5, 6];
// function missingmun(a) {
//   let n = a.length + 1;
//   let sum = (n * (n + 1)) / 2;
//   let val = 0;

//   for (let i of a) {
//     val = i + val;
//   }
//   return sum - val;
// }
// console.log(missingmun(a));
// ---------------------------------------
