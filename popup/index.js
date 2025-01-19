//selecting popu bpx,popup overlay,button
let popupoverlay = document.querySelector(".popup-overlay");
let popupbox = document.querySelector(".popup-box");
let popupbutton = document.getElementById("add-popup-button");
let cancelpopup = document.getElementById("cancel-popup");

popupbutton.addEventListener("click", function () {
  popupoverlay.style.display = "block";
  popupbox.style.display = "block";
});

//select cancle button
cancelpopup.addEventListener("click", function (event) {
  event.preventDefault();
  popupoverlay.style.display = "none";
  popupbox.style.display = "none";

  eptyvalue();
});

//select container,add-book,book-title-input,book-author-input,book-discription-input

let container = document.querySelector(".container");
let addbook = document.getElementById("add-book");
let booktitleinput = document.getElementById("book-title-input");
let bookauthorinput = document.getElementById("book-author-input");
let bookdescriptioninput = document.getElementById("book-description-input");

addbook.addEventListener("click", function (event) {
  event.preventDefault();
  let div = document.createElement("div");
  div.setAttribute("class", "book-container");
  div.innerHTML = `<h2>${booktitleinput.value}</h2>
            <h5>${bookauthorinput.value}</h5>
            <p>${bookdescriptioninput.value}</p>
            <button>Delete</button>`;

  container.appendChild(div);
  popupoverlay.style.display = "none";
  popupbox.style.display = "none";

  eptyvalue();
});

function deletebook(event) {
  event.target.parentElement.remove();
  l;
}

function eptyvalue() {
  booktitleinput.value = "";
  bookauthorinput.value = "";
  bookdescriptioninput.value = "";
}
