// variables  let ,const
// 1 . variable declaration with assignment
let a = 90;
const b = 20,
  c = "hello";

//  2. varibale declaration
let number1;
let num1, num2, count;

//---------------------------------------------------
// OPERATORS
// 1 . ARITHMETIC + , - , * , / , % , ++ , --
let variable1 = 1;
let n1 = 6 / 3;
console.log("divition ", n1);

n1 = 73 % 2;
console.log("modules :", n1);
console.log("pre incremen :", ++variable1);
console.log("post incremen :", variable1++);
console.log("value  :", variable1);

console.log("pre decrement :", --variable1);
console.log("post decrement :", variable1--);
console.log("value  :", variable1);

//---------------------------------------------
// 2 . COMPARISON OPERATORS  === , !== , < , > , <= , >=
console.log("Eqaul :", 2 === 5);
console.log("Not Eqaul :", 2 !== 5);
console.log("Grater than :", 2 > 5);
console.log("Less than :", 2 < 5);
console.log("Grater than or eqaul :", 2 >= 5);
console.log("less  than or eqaul :", 2 <= 5);

//--------------------------------------------------------
// 3 LOGICAL OPERAORS  && , || , !
console.log("AND :", 1 > 8 && 2 < 9);
console.log("AND :", false && false);
console.log("OR :", 4 > 6 || 4 < 7);
console.log(" NOT :", !(2 > 4));
//----------------------------------------------------
// 4 . ASSIGNENT OPERATOR = , += , -= , *= , /= , %=/

let m = 20;
m = 40 + m;
m += 40;
m -= 40;
m /= 40;
m *= 50;

console.log("m :", m);

//--------------------------------------------
// 5 . TERNORY OPERATOR  short hand if-else

const mages = 100;
let age1 = 2;
const resValue = mages > 40 ? "pass" : "fail";
console.log("ternary result :", resValue);
console.log(
  "vote eligible :",
  age1 > 18 ? " eligibile for vote" : "not eligible "
);

//---------------------------------------------
//  6. typeof

let val1 = 10;
const val2 = "10";
console.log("type 1:", typeof val1);
console.log("type 2:", typeof val2);

//---------------------------------------------------------------
//----------------------------------------------------------------
// 2 . CONTROL STATEMENTS OR STRUCTURE  if , else , ifelse
// 1 . if

const username = "magii";
const pass = "magii";

if (username && pass) {
  console.log(" username sucess");
}

if (username && pass) {
  console.log(" username sucess");
} else {
  console.log("please enter user name");
}

const age = 66;

if (age < 18) {
  console.log("child");
} else if (age > 18 && age < 60) {
  console.log(" eligible to vote");
} else if (age > 60) {
  console.log("senior citizon");
}

//-----------------------------------------------------
// Loops : to repeate code -  for
let n = 10;

for (let i = 0; i < n; i++) {
  console.log("hello magi");
}

// for (let i in range(n)) {
//   console.log("this is for in range");
// }

//---------------------------------------
// 3 . function

function my1stFun(message) {
  console.log(message);
}

let student = [20, 40, 50, 60];

for (let i = 0; i < 50; i++) {
  if (student[i] > 50) {
    my1stFun("hello you are pass");
  } else {
    my1stFun("hello you are fail");
  }
}

//---------------------------------------------------
