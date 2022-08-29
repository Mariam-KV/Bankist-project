"use strict";

///////////////////////////////////////
// Modal window

const modal = document.querySelector(".modal");
const overlay = document.querySelector(".overlay");
let btnCloseModal = document.querySelectorAll(".hide");
let btnOpenModal = document.querySelectorAll(".open");

function show() {
  modal.style.display = "block";
  modal.classList.add("overlay");
}
function hide() {
  modal.style.display = "none";
}

btnCloseModal.forEach((el) => el.addEventListener("click", hide));
btnOpenModal.forEach((el) => el.addEventListener("click", show));
