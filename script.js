"use strict";

///////////////////////////////////////
// Modal window

const modal = document.querySelector(".modal");
const overlay = document.querySelector(".overlay");
let btnCloseModal = document.querySelectorAll(".hide");
let btnOpenModal = document.querySelectorAll(".open");

function show() {
  overlay.style.display = "block";
  modal.style.display = "block";
}
function hide() {
  modal.style.display = "none";
  overlay.style.display = " none";
}

btnCloseModal.forEach((el) => el.addEventListener("click", hide));
btnOpenModal.forEach((el) => el.addEventListener("click", show));

let btnLearn = document.getElementById("learn");
let section1 = document.getElementById("Features");
btnLearn.addEventListener("click", function (e) {
  e.preventDefault();
  section1.scrollIntoView({ behavior: "smooth" });
});

// event delegation

let nav = document.getElementById("nav_list");

nav.addEventListener("click", function (e) {
  e.preventDefault();
  let id = e.target.getAttribute("href");
  document.querySelector(id).scrollIntoView({ behavior: "smooth" });
  e.target.classList.contains("clicking");
});
//DOM traversing

let info1 = document.querySelector(".info1");
let info2 = document.querySelector(".info2");
let info3 = document.querySelector(".info3");
let buttons = document
  .querySelector(".lineOfButtons")
  .addEventListener("click", function (el) {
    if (el.target.classList.contains("loans")) {
      info2.classList.remove("hidecontent");
      adding(info1, info3);
    }
    if (el.target.classList.contains("close")) {
      adding(info2, info1);
      info3.classList.remove("hidecontent");
    }
    if (el.target.classList.contains("transfer")) {
      info1.classList.remove("hidecontent");
      adding(info2, info3);
    }
  });

function adding(first, second) {
  first.classList.add("hidecontent");
  second.classList.add("hidecontent");
}

// navbar
let links = document.querySelectorAll(".clicked");
let handleOpacity = function (event, opacity) {
  links.forEach((el) => {
    if (event.target != el) {
      el.style.opacity = opacity;
    }
  });
};

document.querySelector(".nav").addEventListener("mouseover", function (e) {
  handleOpacity(e, 0.5);
});
document.querySelector(".nav").addEventListener("mouseout", function (e) {
  handleOpacity(e, 1);
});
/*
//sticky navigation





//lazy loading images

/*let imgTargets = document.querySelectorAll("img[data-src]");

function func(entries, observer) {
  let [entry] = entries;
  if (!entry.isIntersecting) return;

  entry.target.src = entry.target.dataset.src;
  entry.target.addEventListener("load", function () {
    entry.target.classList.remove("lazy-img");
  });
}
let imgObserver = new IntersectionObserver(func, { root: null, threshold: 0 });
imgTargets.forEach((el) => imgObserver.observe(el));*/
let navBar = document.querySelector(".nav");

let header = document.querySelector(".header");
function func(entries) {
  let [entry] = entries;
  if (!entry.isIntersecting) {
    navBar.classList.add("sticky");
  } else {
    navBar.classList.remove("sticky");
  }
}
let obesrver2 = new IntersectionObserver(func, { null: 0, threshold: 0 });
obesrver2.observe(header);
//reveal sections
let sections = document.querySelectorAll(".section");
function funcSection(entries) {
  let entry = entries[0];
  console.log(entry);
  if (entry.isIntersecting) {
    entry.target.classList.remove("section--hidden");
    observerSection.unobserve(entry.target);
  }
}
let observerSection = new IntersectionObserver(funcSection, {
  null: 0,
  threshold: 0.15,
});
sections.forEach((el) => {
  observerSection.observe(el);
  el.classList.add("section--hidden");
});
