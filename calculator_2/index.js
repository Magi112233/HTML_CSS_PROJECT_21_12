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
const add = document.getElementById("+");
const sub = document.getElementById("-");
const mul = document.getElementById("*");
const div = document.getElementById("/");
const eqaul = document.getElementById("=");

function checkValid(i) {
  if (/[^0-9+\-*/().]/.test(i)) {
    return false;
  }
  return true;
}

document.getElementById("magi").addEventListener("input", function (e) {
  const val = e.target.value;
  const check = checkValid(val);
  if (!check) {
    console.log(e.target.value.slice(0, -1));
    e.target.value = e.target.value.slice(0, -1);
  }
});

eight.addEventListener("click", function () {
  input.value += eight.innerText;
});

seven.addEventListener("click", function () {
  input.value += seven.innerText;
});

nine.addEventListener("click", () => {
  input.value += nine.innerText;
});

four.addEventListener("click", () => {
  input.value += four.innerText;
});

five.addEventListener("click", function () {
  input.value += five.innerHTML;
});

six.addEventListener("click", function () {
  input.value += six.innerText;
});

one.addEventListener("click", () => {
  input.value += one.innerText;
});

two.addEventListener("click", function () {
  input.value += two.innerText;
});

three.addEventListener("click", () => {
  input.value += three.innerText;
});

zero.addEventListener("click", () => {
  input.value += zero.innerText;
});

double_zero.addEventListener("click", () => {
  input.value += double_zero.innerText;
});

add.addEventListener("click", function () {
  input.value += add.innerHTML;
});

sub.addEventListener("click", function () {
  input.value += sub.innerText;
});

mul.addEventListener("click", function () {
  input.value += mul.innerHTML;
});

div.addEventListener("click", () => {
  input.value += div.innerHTML;
});

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
