const ptag = document.getElementById("textptag");
const btn1 = document.getElementById("btn1");

btn1.addEventListener("click", () => {
  ptag.innerText = "hello world";
  ptag.style.fontSize = "30px";
  ptag.style.color = "red";
});
