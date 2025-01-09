// ----------Example--------------

// var a = 10;
// var b = 22;
// console.log(a + b);
// -------------------------------------------

// var a = 20;
// console.log(a);
//
// {
//   let a = 10;       //no use
// }
// console.log(a);
//----
// {
//   var a = 10;
// }
// console.log(a);
//----
// const a = 10;
// console.log(a);
//-------------------------------------
// 1.
// var price = 100;
// var product = "iphone15";
// var tax = 10;
// console.log(product);
// var total = price + tax;
// console.log(total);
//--------------------------------------------------
// 2.
// let fruitName = "apple";
// let count = 20;
// let price = 10;
// console.log(count + price);
// console.log(fruitName);
// let total = count * price;
// console.log(total);
//--------------------------------------
//3.++  --

// let a = 10;
// let b = a++;       //++
// console.log(b);
// console.log(a);

//------------------

//typeof
// console.log(typeof 10);
// console.log(typeof "apple");
// console.log(typeof "10");
// console.log(typeof true);//
//-----------------

// let a = null;
// console.log(typeof (true));
//-------------------------------------
// function abc() {
//   console.log("function is working");
// }
// abc();

// function myphone() {
//   console.log("This is my phone");
// }
// myphone();

// function iphone() {
//   console.log("This is iphone");
// }
// iphone();

// function oppo() {
//   console.log("This is oppo");
// }
// oppo();
//------------------------------------------------

// let a = 10;
// let b = 20;
// function add() {
//   console.log(a + b);
// }
// add();
//---------------------------------------------

// let factor = "kamal";
// let fplayer = "dhoni";
// let fmovie = "ande sivam";

// function favourte() {
//   console.log("factor :" + factor);
//   console.log("fplayer:" + fplayer);
//   console.log("fmovie:" + fmovie);
// }
// favourte();
// favourte();
//-----------------------------------------------------
// function area(l, b) {
//   let a = l * b;
//   console.log("area is:" + a);
// }
// let length = 10;
// let breath = 20;
// area(10, 20);
//--------------------------------------
// function myname() {
//   return "magi";
// }
// let a = myname();
// console.log(a);
///--------------------
// function add(a, b) {
//   return a + b;
// }
// let a = 10;
// let b = 20;
// let total = a + b;
// console.log(total);
//------------------
// if (false) {
//   console.log("it's true");
// } else {
//   console.log("it's false");
// }
//-------------------------------
// 1.
// let rain = false;
// if (rain) {
//   console.log("take an umbrell");
// } else {
//   console.log("enjoy tha sunset");
// }
////--------------------------------
// 2.//
// let homework = "yes";
// if (homework === "yes") {
//   console.log("greate job");
// } else {
//   console.log("finish your home work before  playing");
// }
//--
// 3.
// let cookies = "no";

// if (cookies === "yes") {
//   console.log("would you like a cookias");
// } else {
//   console.log("time to make more cookies");
// }
//---
// 4.
// let byteeth = "no";
// if (byteeth === "yes") {
//   console.log("Your teeth are clean");
// } else [console.log("Go brush your teeth now")];

// 5.
// let birthday = true;
// if (birthday === true) {
//   console.log("Happy birthday! Enjoy your special day");
// } else {
//   console.log("Have a greate day");
// }
//-----------------------------------

// AND  OR   NOT

// console.log(true && true && true);
// console.log(true && true && false);

// console.log(true || true);
// console.log(false || true);

// console.log(true);
// console.log(!true);

// let color = "green";

// if (color === "red") {
//   console.log("stop");
// } else if (color === "yellow") {
//   console.log("get redy");
// } else if (color === "green") {
//   console.log("go");
// }

// let seasson = "winter";

// if (seasson === "spring") {
//   console.log("Enjoy the blooming flowers.");
// } else if (seasson === "summer") {
//   console.log("Have fun in the sun.");
// } else if (seasson === "autumn") {
//   console.log("Admir the colorful leaves.");
// } else if (seasson === "winter") {
//   console.log("Bundel up stay warm");
// }
//-----------------------
// let Gscore = 50;
// if (Gscore < 50) {
//   console.log("Your need to improve.");
// } else if (Gscore >= 50 && Gscore <= 70) {
//   console.log("Good job");
// } else if (Gscore > 70) {
//   console.log("Excelent performance.");
// }

//-----------------------even   odd--------------
// let num = 3;
// let val = num % 2;

// if (val===0) {
//   console.log("The number is even.");
// } else {
//   console.log("The number is odd");
// }
//----------------------------------------------

//-------------------character a vowel or consonant

// let character = "b";
// if (
//   character === "a" ||
//   character === "e" ||
//   character === "i" ||
//   character === "o" ||
//   character === "u"
// ) {
//   console.log("it's a vowel");
// } else {
//   console.log("it's a consonant");
// }
////----------------------------------------------

///---------------for loop
// 1.//
// for (count = 1; count <= 5; count = count + 1) {
//   console.log("magi");
// }
// 2..
// for (count = 1; count <= 10; count = count + 1) {
//   console.log(count);
// }
// 3..
// for (count = 1; count <= 9; count = count + 2) {
//   console.log(count);
// }
// 4.
// for (count = 18; count >= 1; count = count - 1) {                    //----------------
//   console.log(count);
// }
// 5.
for (count = 1; count >= 5; count = count + 1) {
  console.log(count + "x2=");
}
