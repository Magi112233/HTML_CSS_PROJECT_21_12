// 1.Array creation
let arr = [];
let arr1 = [2, 7, 6, 5];
let arr2 = new Array(2, 3, 3);
//---------------------------------------
// 2.Array Elements
let arraye = [2, 4, 6, 8, 8];
// console.log(arraye[0]);
// console.log(arraye[arraye.length - 1]);

//------------------------------------------
// 3.Add Element
let adde = [2, 5, 7, 4];
adde.push("haii");
// console.log(adde);

adde.unshift("hello");
// console.log(adde);
//
//----------------------------------------------
// 4.remove elements
let removee = [1, 2, 3, 4, 5];
removee.pop();
removee.shift();
// console.log(removee);

//-------------------------------------------
// 6.loop through array
let loopa = [2, 3];
// loopa.forEach((a) => console.log(a * 2));

///------------------------------------------------
// 7.array deStructuring
let color = ["red", "blue", "green"];
let color1 = color[0];
let color2 = color[1];
// console.log("firstc:", color1, "lastc:", color2);

let [red, green] = color;
// console.log(color);
// -------------------------------------------------
