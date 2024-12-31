// JAVASCRIPT

//  VARIABLESt
// 1. variable declaration with assignment
let a = 10;
const b = 20;
c = "hello";

// 2.variable declaration
let number1;
let num1, num2, num3;
// ------------------------------------------

// TYPE OF OPERATORS
// 1.ARITHMETIC OPERATORS:(+,-,*,/ ,%,++,--)
// Addition (+)
let a1 = 3 + 3;
console.log("addition:", a1);

// Subtraction (-)
let s1 = 7 - 4;
console.log("subtraction:", s1);

// Multiplication (*)
let m1 = 8 * 8;
console.log("multiplication:", m1);

// divition (/)
let d1 = 8 / 9;
console.log("divition:", d1);

//modules (%)
let l1 = 88 % 9;
console.log("modules:", l1);

//increement and decreement (++,--)
let i1 = 3 + 2;
console.log("increement:", i1);
console.log("decrement:", i1);
//-------------------------------------------

//COMPARISON OPERATOR (===,!==,<,>,<=,>=)
console.log("equal:", 2 === 5);
console.log("not equal:", 2 != 5);
console.log("gerter than :", 2 > 5);
console.log("less than :", 2 < 5);
console.log("gerter than or equal:", 2 >= 5);
console.log("less than or equal:", 2 <= 5);
//------------------------------------------------

//LOGICAL OPERATOR (&&,||,!)
console.log("AND:", 1 > 8 && 2 < 9);
console.log("AND:", false && false);
console.log("oR:", 4 > 6 || 4 < 7);
console.log("NOT:", !(2 > 7));
//-----------------------------------------------------

//ASSIGNMENT OPERATOR (=,+=,-=,*=,/=,%=)
let m = 20;
m += 40;
m -= 40;
m *= 40;
m /= 40;
m %= 40;
console.log("m:", m);
///--------------------------------------------------

//TERNORY OPERATOR ( >,?)  (short and if-else)
const mages = 90;
let age = 40;
const resValue = mages > 40 ? "pass" : "fail";
console.log("ternary result:", resValue);
console.log("vote eigible:", age > 18 ? "eligible to vote;" : "not elgibele:");
//---------------------------------------------------------

//TYPE OF
let val1 = 10;
const val2 = "2";
console.log("type 1:", typeof val1);
console.log("type 2:", typeof val2);
//--------------------------------------------------------------------------------
//---------------------------------------------------------------------------------

//CONTROL STATEMENT OR STRUCTURE (if,else,if-else)
//1. if
const username = "magi";
const password = "987";
if (username && password) {
  console.log("success verify ");
} else {
  console.log("cheack tha username and password");
}

const age1 = 80;
if (age1 > 18) {
}
