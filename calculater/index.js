const input = document.getElementById("magi");
const seven = document.getElementById("7");
const eight = document.getElementById("8");
const nine = document.getElementById("9");
const four = document.getElementById("4");
const five = document.getElementById("5");
const six = document.getElementById("6");
const one = document.getElementById("1");
const two = document.getElementById("2");
const three = document.getElementById("3");
const zero = document.getElementById("0");
const double_zero = document.getElementById("00");

const eqaul = document.getElementById("=");
const add = document.getElementById("+");
const sub = document.getElementById("-");
const mul = document.getElementById("*");
const div = document.getElementById("/");

// to validate typing input
function checkValid(i) {
  if (/[^0-9+\-*/().]/.test(i)) {
    return false;
  }
  return true;
}

document.getElementById("magi").addEventListener("input", function (e) {
  const val = e.target.value; // syntax
  const check = checkValid(val);
  //   console.log("check", check);

  if (!check) {
    // console.log(e.target.value.slice(0, -1));
    e.target.value = e.target.value.slice(0, -1); // removes the last char
  }
});

seven.addEventListener("click", function () {
  input.value += seven.innerText;
});

eight.addEventListener("click", () => {
  document.getElementById("magi").value += eight.innerHTML;
});

nine.addEventListener("click", ninefun);

function ninefun() {
  input.value += nine.innerText;
}

four.addEventListener("click", function () {
  input.value += four.innerText;
});

five.addEventListener("click", function () {
  input.value += five.innerHTML;
});

six.addEventListener("click", () => {
  input.value += six.innerHTML;
});

one.addEventListener("click", function () {
  input.value += one.innerText;
});

two.addEventListener("click", function () {
  input.value += two.innerHTML;
});

three.addEventListener("click", function () {
  input.value += three.innerText;
});

zero.addEventListener("click", () => {
  //   input.value += zero.innerText;
  document.getElementById("input").value =
    document.getElementById("0").innerHTML;
});

double_zero.addEventListener("click", () => {
  input.value += double_zero.innerText;
});

add.addEventListener("click", () => {
  input.value += add.innerText;
});

sub.addEventListener("click", function () {
  input.value += sub.innerText;
});

mul.addEventListener("click", () => {
  input.value += mul.innerHTML;
});

div.addEventListener("click", divfun);
function divfun() {
  input.value += div.innerText;
}

eqaul.addEventListener("click", () => {
  let val = input.value;

  if (!/^[0-9+\-*/().]+$/.test(val) || !/[0-9)]$/.test(input.value)) {
    input.style.background = "red";
    return;
  }

  input.style.background = "green";
  let result = eval(val);
  input.value = result;
});
