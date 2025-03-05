// CONTROL FLOW

const age = 20;

// if((age>0 || age>20 ) &&  age<50){
//     // code
// }else{
//     // code
// }

// if(){

// }else if(){

// }

// ternory
const check = age < 30 ? "you are pass" : "faile";

console.log(check);

const check2 = age <= 30 && age > 18 ? true : false;

if (check2) {
  // code
} else {
  // cod
}

// switch

const my_daughter_name = "revathi";

switch (my_daughter_name) {
  case "revathi":
    console.log("hllo " + my_daughter_name);
    break;
  case "lia":
    console.log("hello " + my_daughter_name);
    break;
  default:
    console.log("not match");
}
