// 1. Reverse a St1ng

const str = "hello world ";
// const strA = str.split("");
// console.log(strA);
// strA.reverse();
// console.log(strA);
// console.log(strA.join(""));
// console.log(strA.concat(""));
// console.log(
//   strA[0] +
//     strA[1] +
//     strA[2] +
//     strA[3] +
//     strA[4] +
//     strA[5] +
//     strA[6] +
//     strA[7] +
//     strA[8] +
//     strA[9] +
//     strA[10]
// );

// let reverseStr = "";

// for (let s of str) {
//   reverseStr = s + reverseStr;
//   //   console.log(s);
// }

// console.log(reverseStr);

function reversestr(s) {
  return s.split("").reverse().join("");
}

let result = reversestr("hello magii");

// console.log(result);

//-------------------------------------------------------
// palindrom
const str2 = "malayalam";

function palindrom(str) {
  let rev = str.split("").reverse().join("");

  //   if (str === rev) {
  //     return true;
  //   } else {
  //     return false;
  //   }

  return str === rev;
}

// console.log(palindrom(str2));

function pal(str) {
  let rev = str.split("").reverse().join("");
  //   console.log(str, rev);
  if (str === rev) {
    return "this is palindrom";
  } else {
    return "this is not palindrom";
  }
}

const re = pal("madam");

// console.log(re);

//----------------------------------
// 3. factorial

// function factorial(s) {
//   let num = 1;

//   for (let i = 1; i <= s; i++) {
//     num = i * num;
//     console.log(num);
//   }
// }

// factorial(5);

//------------------------------------
// find max value

// const arr1 = [3, 6, 1, 8, 100, 4];

// console.log(Math.max(...arr1));
// console.log(Math.min(...arr1));

// function max(arr) {
//   let result = arr[0];

//   return result;
// }

// max(arr1);
// ----------------------
// let arr = [3, 5, 7, 9, 2, 4];

// function arrayfun(arr) {
//   result = arr[0];
//   for (let i of arr) {
//     if (result < i) {
//       result = i;
//     }
//   }
//   return result;
// }
// arrayfun(arr);
// console.log(arrayfun(arr));
// --------------------------------
// prime number
// function mynumber(num) {
//   for (let i = 2; i < num; i++) {
//     if (num % 2 == 0) {
//       console.log(i);
//       return false;
//     }
//   }
//   return true;
// }
// mynumber();

// console.log(mynumber(23));
// -----------------------------------
// function fastorialf(n) {
//   let num = 1;
//   for (let i = 1; i <= n; i++) {
//     num = i * num;
//   }
//   console.log(num);
// }
// // fastorialf(5);
// -----------------------------
// --------------------------------

// febbonaci

function febofun(p) {
  let result = [0, 1];

  for (let i = 2; i < p; i++) {
    let l = result[result.length - 1]; //1  //

    let lp = result[result.length - 2]; // 0
    let ans = l + lp;
    result.push(ans);

    // result.push[result[result.length - 1] + result[result.length - 2]];
  }

  return result;
}

// console.log(febofun(7));
//-------------------------------------------------------
// remove dupliates

const arrValue = [3, 5, 8, 3, 4, 8];

const removeDuplicate = (arrval) => {
  let resarr = [];

  arrValue.forEach((r) => {
    if (!resarr.includes(r)) {
      resarr.push(r);
    }
  });

  console.log(resarr);
};

// removeDuplicate(arrValue);

//-----------------------------------------

// find sum of an array

const sumArr = [3, 5, 6, 7, 9];

const sumOfArrFun = (val) => {
  let result = 0;

  val.forEach((v) => {
    result = v + result;
  });

  return result;
};

const sumOFres = sumOfArrFun(sumArr);
// console.log(sumOFres);

//-----------------------------------------------------------
// count the number ofvowvels
const vowvels = ["a", "e", "i", "o", "u"];

const findCowelFun = (str) => {
  let count = 0;

  for (let i = 0; i < str.length; i++) {
    // console.log(str[i]);
    if (vowvels.includes(str[i])) {
      count++;
    }
  }
  return count;
};
// console.log(findCowelFun("hello world"));
// ---------------------------------------------------

// // ----------------------------------------------
// let val = [4, 5, 2, 7, 9, 1, 0, 8];

// function large(l) {
//   let res = val[0];
//   let res1, res2;
//   for (let i of l) {
//     if (res < i) {
//       res2 = res1;
//       res1 = res;
//       res = i;
//     } else if (res1 > i) {
//       res2 = res1;
//       res1 = i;
//     } else if (res1 > i) {
//       res2 = i;
//     }
//   }
//   console.log(res2);
// }
// large(val);
// ----------------------------
// let val = [3, 5, 2, 6, 8, 9];
// function large(l) {
//   let r1 = 0;
//   let r2;
//   for (let i of l) {
//     if (r1 < i) {
//       r3 = r2;
//       r2 = r1;
//       r1 = i;
//     }
//   }
//   console.log(r3);
// }
// large(val);
// ----------------------------------------------
let value = [2, 0, 4, -88, -67, 27, 8, 5, 9, 11, -430];
let r1 = value[0];
let r2, r3;
function large(l) {
  value.sort((a, b) => a - b);
  console.log(value);

  // for (let i of l) {
  //   if (r1 < i) {
  //     r3 = r2;
  //     r2 = r1;
  //     r1 = i;
  //   }
  // }

  // console.log(r1);
  // console.log(r2);
  // // console.log(r3);
  // r3 = value[value.length - 3];
  // r2 = value[value.length - 2];
  // r = value[value.length - 1];
  // console.log(r, r2, r3);
}
// large(value);
// -------------------------------------------

a1 = [3, 5, 7, 0, 8];
a2 = [3, 5, 7, 9];

const filt = a1.filter((f) => a2.includes(f));

// console.log(filt);

//---------------------------------------------

b1 = [3, 5, 7, 0, 8];
b2 = [3, 5, 7, 9];

n = [...b1, ...b2, ...[3, 4, 7]];

// console.log(n);

// function check(a,b){

//   c=[...a,...b]

// }

// check([2,3,4,] ,[4,8,0,9])

// const str1 = "helloo";
// ----------------------------------------
// function occfun(str) {
//   let obj = {};

//   for (let s of str) {
//     obj[s] = (obj[s] || 0) + 1;
//   }

//   console.log(obj);
// }

// occfun(str1);
// ------------------------------------
// let str1 = " my departmant is bsc";
// function largeword(l) {
//   let value = l.split(" ");
//   let res = 0;
//   let str1 = "";

//   for (let i of value) {
//     if (res < i.length) {
//       res = i.length;
//       str1 = i;
//     }
//   }
//   return [str1, res];
// }
// console.log(largeword(str1)[1]);

//-------------------------------------------------
function missing(m) {
  let n = m.length + 1;
  let sum = (n * (n + 1)) / 2;
  let val = 0;
  // for (let i of m) {
  //   val = i + val;
  // }
  // return sum - val;
  const reduceval = m.reduce((a, b) => a + b, 0);
  return sum - reduceval;
}
// console.log(missing([1, 2, 4, 5]));

//---------------------------------------------------

function findIntersectionFun(arr1, arr2) {
  // for (let i of arr1) {
  //   console.log(i);
  // }

  let newArr = [];
  arr1.forEach((v) => {
    if (arr2.includes(v)) {
      newArr.push(v);
    }
  });

  console.log(newArr);
}

// findIntersectionFun([1, 2, 3], [2, 3, 4]);

//-------------------------------------------------------------

const mergeSortFun = (arr) => {
  let sortarr = [];
  let secArr = [...arr];
  console.log(secArr);
  for (let v of arr) {
    let smallValue = secArr[0];

    for (let i of secArr) {
      if (smallValue > i) {
        smallValue = i;
      }
    }
    sortarr.push(smallValue);
    secArr.splice(secArr.indexOf(smallValue), 1);
  }
  // console.log(sortarr);
};

mergeSortFun([3, 6, 1, 8]);
// -----------------------------------------------

// forEach()

[4, 5, 6, 7].forEach((v) => console.log("hello magi ", v * 10));

const mapValue = [4, 5, 6, 7].map((v) => {
  console.log("hello magi MaP ", v * 20);
  return v * 30;
});
console.log(mapValue);

// fiter

let numbers = [1, 2, 3, 4, 5, 6, 0];

let filerValue = numbers.filter(function (v) {
  return v > 3;
});

console.log(filerValue);

//reduce
